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
    // קבלת ID של הפוסט
    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ 
        success: false, 
        message: 'Bad Request - Missing post ID' 
      });
    }
    
    // בדיקה אם קובץ הפוסטים קיים
    const dataDir = path.join(process.cwd(), 'data');
    const postsFile = path.join(dataDir, 'posts.json');
    
    if (!fs.existsSync(postsFile)) {
      return res.status(404).json({ 
        success: false, 
        message: 'Not Found - Posts file does not exist' 
      });
    }
    
    // קריאת הפוסטים מהקובץ
    const posts = JSON.parse(fs.readFileSync(postsFile, 'utf8'));
    
    // חיפוש הפוסט לפי ID
    const post = posts.find(post => post.id === id);
    
    if (!post) {
      return res.status(404).json({ 
        success: false, 
        message: 'Not Found - Post not found with the given ID' 
      });
    }
    
    return res.status(200).json({ 
      success: true, 
      message: 'Post retrieved successfully',
      data: post
    });
    
  } catch (error) {
    console.error('Error retrieving post:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal Server Error',
      error: error.message 
    });
  }
} 