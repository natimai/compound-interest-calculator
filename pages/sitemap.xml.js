// pages/sitemap.xml.js
import fs from 'fs'
import path from 'path'

const DOMAIN = 'https://www.deribit.co.il'

// רשימה קבועה של נתיבים (דפים) באתר
const STATIC_PATHS = [
  '/',
  '/investment-products',
  '/investment-products/money-fund',
  '/investment-products/pension-fund',
  '/investment-products/keren-hishtalmut',
  '/investment-products/kupat-gemel',
  '/investment-products/bank-deposit',
  '/investment-products/savings-policy',
  '/guides',
  '/guides/compound-interest',
  '/guides/mortgage-calculator',
  '/guides/balanced-portfolio'
]

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${`${DOMAIN}${page}`}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
           <lastmod>${new Date().toISOString()}</lastmod>
       </url>`
       })
       .join('')}
   </urlset>`
}

function SiteMap() {
  // getServerSideProps יטפל בהכל
  return null
}

export async function getServerSideProps({ res }) {
  // יצירת ה-sitemap
  const sitemap = generateSiteMap(STATIC_PATHS)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap