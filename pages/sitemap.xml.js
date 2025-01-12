// pages/sitemap.xml.js
const DOMAIN = 'https://www.deribit.co.il';

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(({ path, lastmod }) => {
         return `
       <url>
           <loc>${`${DOMAIN}${path}`}</loc>
           ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
           <changefreq>weekly</changefreq>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  // רשימת כל הדפים באתר
  const pages = [
    { path: '/' },
    { path: '/investment-products' },
    { path: '/investment-products/money-fund' },
    { path: '/investment-products/pension-fund' },
    { path: '/investment-products/keren-hishtalmut' },
    { path: '/investment-products/kupat-gemel' },
    { path: '/investment-products/bank-deposit' },
    { path: '/investment-products/savings-policy' }
    // הוסף כאן דפים נוספים
  ];

  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {}