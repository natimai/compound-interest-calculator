import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // בדיקה שמדובר בבקשת POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'שיטה לא נתמכת. יש להשתמש ב-POST' });
  }

  try {
    // נעטוף את כל הלוגיקה ב-try/catch כדי לתפוס שגיאות אפשריות
    const {
      content,          // תוכן המאמר/המדריך 
      type,             // סוג התוכן (guide, calculator, article וכדומה)
      title,            // כותרת המאמר/המדריך
      slug,             // ה-slug שישמש לשם הקובץ
      description,      // תיאור קצר לצורכי SEO
      apiKey            // מפתח API לאימות הבקשה
    } = req.body;

    // בדיקת אימות מפתח API - יש להחליף עם מפתח אמיתי או מנגנון אבטחה מתאים יותר
    const validApiKey = process.env.CONTENT_API_KEY || "your-secret-api-key";
    
    if (apiKey !== validApiKey) {
      return res.status(401).json({ error: 'מפתח API לא חוקי' });
    }

    // בדיקה שכל השדות הנדרשים קיימים
    if (!content || !type || !title || !slug) {
      return res.status(400).json({ error: 'חסרים שדות חובה: content, type, title, slug' });
    }

    // יצירת תבנית לקובץ React/Next.js
    const fileContent = generateFileContent(type, title, description, content, slug);
    
    // בחירת התיקייה המתאימה לפי סוג התוכן
    let dirPath;
    if (type === 'guide') {
      dirPath = path.join(process.cwd(), 'pages', 'guides');
    } else if (type === 'calculator') {
      dirPath = path.join(process.cwd(), 'pages', 'calculators');
    } else if (type === 'article') {
      dirPath = path.join(process.cwd(), 'pages', 'articles');
    } else {
      dirPath = path.join(process.cwd(), 'pages', type);
    }

    // וידוא שהתיקייה קיימת
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // יצירת נתיב מלא לקובץ
    const filePath = path.join(dirPath, `${slug}.js`);

    // שמירת הקובץ
    fs.writeFileSync(filePath, fileContent, 'utf8');

    // החזרת תשובה חיובית
    return res.status(200).json({
      success: true,
      message: 'התוכן נוצר בהצלחה',
      path: filePath.replace(process.cwd(), '')
    });
    
  } catch (error) {
    console.error('שגיאה בעיבוד התוכן:', error);
    return res.status(500).json({ error: 'שגיאה בעיבוד התוכן', details: error.message });
  }
}

// פונקציה ליצירת תוכן הקובץ בהתאם לסוג
function generateFileContent(type, title, description, content, slug) {
  // תבנית בסיסית עבור מדריך
  if (type === 'guide') {
    return `import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ArrowRight, BookOpen, Info } from 'lucide-react';

export default function ${slugToComponentName(slug)}() {
  return (
    <>
      <NextSeo
        title="${title} | דריבית"
        description="${description || \`מדריך מקיף בנושא ${title}\`}"
        canonical="https://www.deribit.co.il/guides/${slug}"
        openGraph={{
          title: "${title} | דריבית",
          description: "${description || \`מדריך מקיף בנושא ${title}\`}",
          url: "https://www.deribit.co.il/guides/${slug}",
          site_name: "דריבית"
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/guides" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ArrowRight className="w-4 h-4" />
              חזרה למדריכים
            </Link>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-500" />
              ${title}
            </h1>

            ${content}
          </article>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // תבנית עבור מחשבון
  else if (type === 'calculator') {
    return `import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';

export default function ${slugToComponentName(slug)}() {
  return (
    <>
      <NextSeo
        title="${title} | דריבית"
        description="${description || \`מחשבון לחישוב ${title}\`}"
        canonical="https://www.deribit.co.il/calculators/${slug}"
        openGraph={{
          title: "${title} | דריבית",
          description: "${description || \`מחשבון לחישוב ${title}\`}",
          url: "https://www.deribit.co.il/calculators/${slug}",
          site_name: "דריבית"
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ArrowRight className="w-4 h-4" />
              חזרה למחשבונים
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Calculator className="w-8 h-8 text-blue-500" />
            ${title}
          </h1>

          <div className="space-y-8">
            ${content}
          </div>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // תבנית ברירת מחדל למאמר
  else {
    return `import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function ${slugToComponentName(slug)}() {
  return (
    <>
      <NextSeo
        title="${title} | דריבית"
        description="${description || title}"
        canonical="https://www.deribit.co.il/${type}/${slug}"
        openGraph={{
          title: "${title} | דריבית",
          description: "${description || title}",
          url: "https://www.deribit.co.il/${type}/${slug}",
          site_name: "דריבית"
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/${type}" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ArrowRight className="w-4 h-4" />
              חזרה ל${type}
            </Link>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-500" />
              ${title}
            </h1>

            ${content}
          </article>
        </div>
      </div>
    </>
  );
}`;
  }
}

// פונקציה להמרת slug לשם קומפוננט תקין
function slugToComponentName(slug) {
  return slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
} 