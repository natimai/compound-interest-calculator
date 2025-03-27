import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// יצירת תיקיית data אם היא לא קיימת
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return dataDir;
};

// יצירת קובץ posts.json אם הוא לא קיים
const ensurePostsFile = () => {
  const dataDir = ensureDataDirectory();
  const postsFile = path.join(dataDir, 'posts.json');
  
  if (!fs.existsSync(postsFile)) {
    fs.writeFileSync(postsFile, JSON.stringify([], null, 2), 'utf8');
  }
  
  return postsFile;
};

export default async function handler(req, res) {
  // וידוא שהבקשה היא מסוג POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method Not Allowed - Only POST requests are accepted' 
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
    
    // חילוץ הנתונים מגוף הבקשה
    const { title, content, type = 'post', metadata = {} } = req.body;
    
    // בדיקה שכל השדות הנדרשים קיימים
    if (!title || !content) {
      return res.status(400).json({ 
        success: false, 
        message: 'Bad Request - Missing required fields: title and content' 
      });
    }
    
    // מציאת/יצירת קובץ ה-JSON
    const postsFile = ensurePostsFile();
    
    // קריאת הנתונים הקיימים
    const posts = JSON.parse(fs.readFileSync(postsFile, 'utf8'));
    
    // הוספת הפוסט החדש
    const newPost = {
      id: uuidv4(),
      title,
      content,
      type,
      metadata,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    posts.push(newPost);
    
    // שמירת הנתונים המעודכנים
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2), 'utf8');
    
    // החזרת תשובה חיובית
    return res.status(201).json({ 
      success: true, 
      message: 'Post added successfully',
      data: newPost 
    });
    
  } catch (error) {
    console.error('Error adding post:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal Server Error',
      error: error.message 
    });
  }
} 