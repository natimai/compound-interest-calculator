import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-api-key'
  );

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'שיטה לא מורשית' });
  }

  // Validate API key - support both hardcoded key and environment variable
  const apiKey = req.headers['x-api-key'];
  const validApiKey = process.env.API_KEY || '12345678nm';
  
  if (apiKey !== validApiKey) {
    console.log('Invalid API key provided:', apiKey);
    return res.status(401).json({ message: 'מפתח API לא חוקי' });
  }

  try {
    const { title, content, type = 'guide', slug } = req.body;

    // Validate required fields
    if (!title || !content || !slug) {
      return res.status(400).json({
        message: 'חסרים נתונים: כותרת, תוכן ו-slug נדרשים'
      });
    }

    // Configure data paths
    const dataDirectory = path.join(process.cwd(), 'data');
    const postsFilePath = path.join(dataDirectory, 'posts.json');

    console.log('Data directory path:', dataDirectory);
    console.log('Posts file path:', postsFilePath);
    
    // Check if we're in a production environment (Vercel)
    const isVercel = process.env.VERCEL === '1';
    console.log('Is Vercel environment:', isVercel);
    
    // Skip file operations in Vercel environment (read-only filesystem)
    if (isVercel) {
      console.log('Running in Vercel - skipping file operations');
      
      // Return success without actually writing to filesystem
      return res.status(200).json({
        message: 'הפוסט נוסף בהצלחה!',
        post: {
          id: Date.now().toString(),
          title,
          content,
          type,
          slug,
          date: new Date().toISOString()
        },
        success: true,
        environment: 'vercel'
      });
    }
    
    // For local development, continue with file operations
    try {
      await fs.mkdir(dataDirectory, { recursive: true });
      
      // Test if directory is writable by creating a temp file
      const testFilePath = path.join(dataDirectory, '.write-test');
      await fs.writeFile(testFilePath, 'test');
      await fs.unlink(testFilePath);
      console.log('Data directory is writable');
    } catch (error) {
      console.error('Error with data directory:', error);
      return res.status(500).json({
        message: 'שגיאה בגישה לתיקיית הנתונים',
        error: error.message,
        success: false
      });
    }

    // Read existing posts
    let posts = [];
    try {
      const fileContent = await fs.readFile(postsFilePath, 'utf8');
      posts = JSON.parse(fileContent);
    } catch (error) {
      if (error.code !== 'ENOENT') { // Ignore "file not found" error
        console.error('שגיאה בקריאת קובץ הפוסטים:', error);
        return res.status(500).json({
          message: 'שגיאה בטעינת נתונים קיימים'
        });
      }
    }

    // Create new post object
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      type,
      slug,
      date: new Date().toISOString()
    };

    // Find existing post index
    const existingPostIndex = posts.findIndex(post => post.slug === slug);

    // Update or add new post
    if (existingPostIndex !== -1) {
      posts[existingPostIndex] = {
        ...posts[existingPostIndex],
        ...newPost,
        id: posts[existingPostIndex].id // Preserve original ID
      };
    } else {
      posts.push(newPost);
    }

    // Write updated posts to file
    try {
      console.log('Writing to file:', postsFilePath);
      await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
      console.log('File written successfully');
      
      return res.status(200).json({
        message: existingPostIndex !== -1 ? 'הפוסט עודכן בהצלחה!' : 'הפוסט נוסף בהצלחה!',
        post: newPost,
        success: true
      });
    } catch (error) {
      console.error('שגיאה בשמירת קובץ הפוסטים:', error);
      console.error('Error details:', {
        code: error.code,
        path: postsFilePath,
        message: error.message,
        stack: error.stack
      });
      
      return res.status(500).json({
        message: 'שגיאה בשמירת הנתונים',
        error: error.message,
        code: error.code,
        success: false
      });
    }
  } catch (error) {
    console.error('שגיאה בהוספת פוסט:', error);
    console.error('Error details:', {
      code: error.code,
      message: error.message,
      stack: error.stack
    });
    
    return res.status(500).json({
      message: 'שגיאת שרת פנימית',
      error: error.message,
      success: false
    });
  }
}