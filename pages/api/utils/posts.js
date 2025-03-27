import fs from 'fs';
import path from 'path';

// פונקציות עזר לעבודה עם קבצי הפוסטים

// יצירת תיקיית data אם לא קיימת
export const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return dataDir;
};

// וידוא קיום ויצירת קובץ הפוסטים
export const ensurePostsFile = () => {
  const dataDir = ensureDataDirectory();
  const postsFile = path.join(dataDir, 'posts.json');
  
  if (!fs.existsSync(postsFile)) {
    fs.writeFileSync(postsFile, JSON.stringify([], null, 2), 'utf8');
  }
  
  return postsFile;
};

// קריאת הפוסטים מקובץ
export const readPosts = () => {
  const postsFile = ensurePostsFile();
  return JSON.parse(fs.readFileSync(postsFile, 'utf8'));
};

// שמירת פוסטים לקובץ
export const writePosts = (posts) => {
  const postsFile = ensurePostsFile();
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2), 'utf8');
  return true;
};

// בדיקת האם מפתח API תקף
export const isValidApiKey = (apiKey) => {
  const validApiKey = process.env.MAKE_API_KEY || '1f0e27c26a029bb5985ef1e735d0673ed6b1456b08109bb38591302ea8b00b06';
  return apiKey === validApiKey;
};

// מציאת פוסט לפי ID
export const findPostById = (posts, id) => {
  return posts.find(post => post.id === id);
};

// מציאת אינדקס של פוסט לפי ID
export const findPostIndexById = (posts, id) => {
  return posts.findIndex(post => post.id === id);
};

// סינון פוסטים לפי קריטריון
export const filterPosts = (posts, criteria = {}) => {
  let filteredPosts = [...posts];
  
  if (criteria.type) {
    filteredPosts = filteredPosts.filter(post => post.type === criteria.type);
  }
  
  // אפשר להוסיף עוד פילטרים כאן
  
  return filteredPosts;
};

// מיון פוסטים לפי תאריך
export const sortPostsByDate = (posts, ascending = false) => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

// חיתוך רשימת פוסטים לפי עמוד (pagination)
export const paginatePosts = (posts, offset = 0, limit) => {
  if (!limit) return posts;
  
  const startIndex = parseInt(offset);
  const endIndex = startIndex + parseInt(limit);
  
  return posts.slice(startIndex, endIndex);
}; 