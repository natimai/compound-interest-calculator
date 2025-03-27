import fs from 'fs';
import path from 'path';

// פונקציה להבטחת קיום תיקיית הנתונים
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return dataDir;
};

// פונקציה להבטחת קיום קובץ התוכן
const ensureContentFile = () => {
  const dataDir = ensureDataDirectory();
  const contentFile = path.join(dataDir, 'content.json');
  
  if (!fs.existsSync(contentFile)) {
    fs.writeFileSync(contentFile, JSON.stringify({}, null, 2), 'utf8');
  }
  
  return contentFile;
};

export default async function handler(req, res) {
  // בדיקה שהבקשה היא מסוג PUT
  if (req.method !== 'PUT') {
    return res.status(405).json({ 
      success: false, 
      message: 'שיטה לא מורשית - רק בקשות PUT מתקבלות' 
    });
  }

  try {
    // אבטחה - בדיקת API Key
    const apiKey = req.headers['x-api-key'];
    const validApiKey = process.env.MAKE_API_KEY;
    
    if (!apiKey || apiKey !== validApiKey) {
      return res.status(401).json({ 
        success: false, 
        message: 'לא מורשה - מפתח API לא חוקי' 
      });
    }
    
    // חילוץ נתונים מהבקשה
    const { key, content, type, metadata = {} } = req.body;
    
    // בדיקת קיום שדות חובה
    if (!key || !content) {
      return res.status(400).json({ 
        success: false, 
        message: 'בקשה לא תקינה - חסרים שדות חובה: key ו-content' 
      });
    }
    
    // ודא שקובץ התוכן קיים
    const contentFile = ensureContentFile();
    
    // קרא את נתוני התוכן הקיימים
    const contentData = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
    
    // עדכן או הוסף תוכן חדש
    contentData[key] = {
      content,
      type: type || 'general',
      metadata,
      updated_at: new Date().toISOString()
    };
    
    // שמור את הנתונים המעודכנים
    fs.writeFileSync(contentFile, JSON.stringify(contentData, null, 2), 'utf8');
    
    // החזר תשובה חיובית
    return res.status(200).json({ 
      success: true, 
      message: 'התוכן עודכן בהצלחה',
      data: contentData[key]
    });
    
  } catch (error) {
    console.error('שגיאה בעדכון תוכן:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'שגיאת שרת פנימית',
      error: error.message 
    });
  }
} 