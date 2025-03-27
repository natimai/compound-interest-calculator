import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // בדיקת האם המתודה היא GET
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'שיטה לא מורשית' });
  }

  try {
    // קבלת ה-slug מהשאילתה
    const { slug } = req.query;
    
    if (!slug) {
      return res.status(400).json({ message: 'חסר פרמטר slug' });
    }

    // יצירת הנתיב לתיקיית הנתונים
    const dataDirectory = path.join(process.cwd(), 'data');
    const postsFilePath = path.join(dataDirectory, 'posts.json');
    
    // בדיקה האם הקובץ קיים
    if (!fs.existsSync(postsFilePath)) {
      return res.status(404).json({ message: 'לא נמצאו פוסטים במערכת' });
    }

    // קריאת הנתונים מהקובץ
    const fileContent = fs.readFileSync(postsFilePath, 'utf8');
    const posts = JSON.parse(fileContent);

    // חיפוש הפוסט עם ה-slug המתאים
    const post = posts.find(post => post.slug === slug);
    
    if (!post) {
      return res.status(404).json({ message: `פוסט עם slug '${slug}' לא נמצא` });
    }

    return res.status(200).json({ post });
  } catch (error) {
    console.error('שגיאה בקבלת פוסט:', error);
    return res.status(500).json({ message: 'שגיאת שרת פנימית', error: error.message });
  }
} 