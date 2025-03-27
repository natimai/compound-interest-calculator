import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // בדיקת האם המתודה היא POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'שיטה לא מורשית' });
  }

  // בדיקת מפתח API
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '12345678nm') {
    return res.status(401).json({ message: 'מפתח API לא חוקי' });
  }

  try {
    const { title, content, type = 'guide', slug } = req.body;

    // וידוא שיש כותרת ותוכן
    if (!title || !content) {
      return res.status(400).json({ message: 'חסרים נתונים: כותרת ותוכן נדרשים' });
    }

    // וידוא שיש slug (כתובת URL)
    if (!slug) {
      return res.status(400).json({ message: 'חסר slug (כתובת URL)' });
    }

    // יצירת הנתיב לתיקיית הנתונים
    const dataDirectory = path.join(process.cwd(), 'data');
    
    // בדיקה האם התיקייה קיימת, אם לא - יצירתה
    if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory, { recursive: true });
    }

    // הנתיב לקובץ JSON של הפוסטים
    const postsFilePath = path.join(dataDirectory, 'posts.json');
    
    // בדיקה האם הקובץ קיים, אם לא - יצירת מערך ריק
    let posts = [];
    if (fs.existsSync(postsFilePath)) {
      const fileContent = fs.readFileSync(postsFilePath, 'utf8');
      posts = JSON.parse(fileContent);
    }

    // הוספת הפוסט החדש
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      type,
      slug,
      date: new Date().toISOString()
    };
    
    // בדיקה האם כבר קיים פוסט עם אותו slug
    const existingPostIndex = posts.findIndex(post => post.slug === slug);
    
    if (existingPostIndex !== -1) {
      // עדכון פוסט קיים
      posts[existingPostIndex] = {
        ...posts[existingPostIndex],
        ...newPost,
        id: posts[existingPostIndex].id // שמירה על ה-ID המקורי
      };
    } else {
      // הוספת פוסט חדש
      posts.push(newPost);
    }

    // שמירת הקובץ המעודכן
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf8');

    return res.status(200).json({ 
      message: existingPostIndex !== -1 ? 'הפוסט עודכן בהצלחה!' : 'הפוסט נוסף בהצלחה!',
      post: newPost
    });
  } catch (error) {
    console.error('שגיאה בהוספת פוסט:', error);
    return res.status(500).json({ message: 'שגיאת שרת פנימית', error: error.message });
  }
} 