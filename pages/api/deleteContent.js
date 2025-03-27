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
  // בדיקה שהבקשה היא מסוג DELETE
  if (req.method !== 'DELETE') {
    return res.status(405).json({ 
      success: false, 
      message: 'שיטה לא מורשית - רק בקשות DELETE מתקבלות' 
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
    
    // קבלת מפתח התוכן למחיקה מפרמטרי השאילתה
    const { key } = req.query;
    
    // בדיקת קיום מפתח
    if (!key) {
      return res.status(400).json({ 
        success: false, 
        message: 'בקשה לא תקינה - חסר מפתח התוכן למחיקה' 
      });
    }
    
    // ודא שקובץ התוכן קיים
    const contentFile = ensureContentFile();
    
    // קרא את נתוני התוכן הקיימים
    const contentData = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
    
    // בדוק אם התוכן קיים
    if (!contentData[key]) {
      return res.status(404).json({ 
        success: false, 
        message: 'התוכן המבוקש לא נמצא' 
      });
    }
    
    // מחק את התוכן
    delete contentData[key];
    
    // שמור את הנתונים המעודכנים
    fs.writeFileSync(contentFile, JSON.stringify(contentData, null, 2), 'utf8');
    
    // החזר תשובה חיובית
    return res.status(200).json({ 
      success: true, 
      message: 'התוכן נמחק בהצלחה'
    });
    
  } catch (error) {
    console.error('שגיאה במחיקת תוכן:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'שגיאת שרת פנימית',
      error: error.message 
    });
  }
}