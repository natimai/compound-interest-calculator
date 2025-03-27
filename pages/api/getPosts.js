import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method Not Allowed - Only GET requests are accepted' 
    });
  }

  try {
    // בדיקה אם קובץ הפוסטים קיים
    const dataDir = path.join(process.cwd(), 'data');
    const postsFile = path.join(dataDir, 'posts.json');
    
    if (!fs.existsSync(postsFile)) {
      return res.status(200).json({ 
        success: true, 
        message: 'No posts found',
        data: [] 
      });
    }
    
    // קריאת הפוסטים מהקובץ
    const posts = JSON.parse(fs.readFileSync(postsFile, 'utf8'));
    
    // פילטרים אופציונליים
    let filteredPosts = [...posts];
    const { type, limit, offset = 0 } = req.query;
    
    // סינון לפי סוג אם צוין
    if (type) {
      filteredPosts = filteredPosts.filter(post => post.type === type);
    }
    
    // מיון לפי תאריך יצירה (מהחדש לישן)
    filteredPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    // החזרת פוסטים לפי הגבלת מספר אם צוינה
    const paginatedPosts = limit 
      ? filteredPosts.slice(parseInt(offset), parseInt(offset) + parseInt(limit))
      : filteredPosts;
    
    return res.status(200).json({ 
      success: true, 
      message: 'Posts retrieved successfully',
      total: filteredPosts.length,
      data: paginatedPosts
    });
    
  } catch (error) {
    console.error('Error retrieving posts:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal Server Error',
      error: error.message 
    });
  }
} 