// pages/sitemap.xml.js
import { readdirSync } from 'fs';
import { join } from 'path';

const DOMAIN = 'https://deribit.co.il';

// פונקציה שמוצאת את כל הדפים בתיקיית pages
function getAllPages(dirPath = 'pages', pages = []) {
  const files = readdirSync(join(process.cwd(), dirPath), { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      // אם זו תיקייה, נכנס אליה רקורסיבית
      getAllPages(join(dirPath, file.name), pages);
    } else {
      // מוסיף רק קבצי js/tsx ומתעלם מקבצים מיוחדים
      if (
        (file.name.endsWith('.js') || file.name.endsWith('.tsx')) &&
        !file.name.startsWith('_') &&
        !file.name.startsWith('[') &&
        file.name !== 'sitemap.xml.js'
      ) {
        const path = join(dirPath, file.name)
          .replace('pages', '')
          .replace(/\.js$|\.tsx$/, '')
          .replace(/\/index$/, '');
        
        // מגדיר עדיפויות לפי סוג הדף
        let priority = '0.7';
        let changefreq = 'monthly';

        if (path === '') {
          priority = '1.0';
          changefreq = 'daily';
        } else if (path.includes('/calculators')) {
          priority = '0.8';
          changefreq = 'weekly';
        } else if (path.includes('/guides')) {
          priority = '0.8';
          changefreq = 'weekly';
        } else if (path.includes('/course')) {
          priority = '0.7';
          changefreq = 'monthly';
        }

        pages.push({
          path,
          priority,
          changefreq
        });
      }
    }
  }

  return pages;
}

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ path, priority, changefreq }) => {
          return `
            <url>
              <loc>${DOMAIN}${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>`;
        })
        .join('')}
    </urlset>`;
}

export async function getServerSideProps({ res }) {
  // מוצא את כל הדפים באופן אוטומטי
  const pages = getAllPages();
  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}