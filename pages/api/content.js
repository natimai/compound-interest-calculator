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
  // בדיקה שהבקשה היא מסוג GET
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      message: 'שיטה לא מורשית - רק בקשות GET מתקבלות' 
    });
  }

  try {
    // ודא שקובץ התוכן קיים
    const contentFile = ensureContentFile();
    
    // קרא את נתוני התוכן
    const contentData = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
    
    // קבל את סוג התוכן מהשאילתה (אם קיים)
    const { type } = req.query;
    
    // החזר תוכן מסונן לפי סוג או את כל התוכן
    if (type && typeof type === 'string') {
      const filteredContent = Object.entries(contentData)
        .filter(([key, value]) => value.type === type)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {});
      
      return res.status(200).json({ 
        success: true, 
        data: filteredContent 
      });
    } else {
      // החזר את כל התוכן
      return res.status(200).json({ 
        success: true, 
        data: contentData 
      });
    }
  } catch (error) {
    console.error('שגיאה בקריאת תוכן:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'שגיאת שרת פנימית',
      error: error.message 
    });
  }
} 