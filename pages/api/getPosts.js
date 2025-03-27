import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // בדיקת האם המתודה היא GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'שיטה לא מורשית' });
  }

  try {
    // יצירת הנתיב לתיקיית הנתונים
    const dataDirectory = path.join(process.cwd(), 'data');
    const postsFilePath = path.join(dataDirectory, 'posts.json');
    
    // בדיקה האם הקובץ קיים
    if (!fs.existsSync(postsFilePath)) {
      return res.status(200).json({ posts: [] });
    }

    // קריאת הנתונים מהקובץ
    const fileContent = fs.readFileSync(postsFilePath, 'utf8');
    const posts = JSON.parse(fileContent);

    // סינון לפי סוג אם צוין בשאילתה
    const { type } = req.query;
    
    if (type) {
      const filteredPosts = posts.filter(post => post.type === type);
      return res.status(200).json({ posts: filteredPosts });
    }

    return res.status(200).json({ posts });
  } catch (error) {
    console.error('שגיאה בקבלת פוסטים:', error);
    return res.status(500).json({ message: 'שגיאת שרת פנימית', error: error.message });
  }
} 