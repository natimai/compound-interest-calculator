import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method Not Allowed - Only DELETE requests are accepted' 
    });
  }

  try {
    // אבטחה - בדיקת API Key
    const apiKey = req.headers['x-api-key'];
    const validApiKey = process.env.MAKE_API_KEY;
    
    if (!apiKey || apiKey !== validApiKey) {
      return res.status(401).json({ 
        success: false, 
        message: 'Unauthorized - Invalid API Key' 
      });
    }
    
    // קבלת ID של הפוסט למחיקה
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
    const postIndex = posts.findIndex(post => post.id === id);
    
    if (postIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: 'Not Found - Post not found with the given ID' 
      });
    }
    
    // הסרת הפוסט מהמערך
    const deletedPost = posts.splice(postIndex, 1)[0];
    
    // שמירת המערך המעודכן לקובץ
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2), 'utf8');
    
    return res.status(200).json({ 
      success: true, 
      message: 'Post deleted successfully',
      data: deletedPost
    });
    
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal Server Error',
      error: error.message 
    });
  }
} 