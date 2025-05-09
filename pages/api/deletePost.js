import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // בדיקת האם המתודה היא DELETE
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'שיטה לא מורשית' });
  }

  // בדיקת מפתח API
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '12345678nm') {
    return res.status(401).json({ message: 'מפתח API לא חוקי' });
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

    // בדיקה האם הפוסט קיים
    const postIndex = posts.findIndex(post => post.slug === slug);
    
    if (postIndex === -1) {
      return res.status(404).json({ message: `פוסט עם slug '${slug}' לא נמצא` });
    }

    // הסרת הפוסט מהמערך
    const deletedPost = posts[postIndex];
    posts.splice(postIndex, 1);

    // שמירת הקובץ המעודכן
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf8');

    return res.status(200).json({ 
      message: 'הפוסט נמחק בהצלחה',
      deletedPost
    });
  } catch (error) {
    console.error('שגיאה במחיקת פוסט:', error);
    return res.status(500).json({ message: 'שגיאת שרת פנימית', error: error.message });
  }
} 