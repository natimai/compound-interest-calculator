// pages/sitemap.xml.js
const DOMAIN = 'https://www.deribit.co.il'

const STATIC_PATHS = [
  {
    path: '/',
    priority: '1.0'
  },
  {
    path: '/investment-products',
    priority: '0.8'
  },
  {
    path: '/investment-products/money-fund',
    priority: '0.8'
  },
  {
    path: '/investment-products/pension-fund',
    priority: '0.8'
  },
  {
    path: '/investment-products/keren-hishtalmut',
    priority: '0.8'
  },
  {
    path: '/investment-products/kupat-gemel',
    priority: '0.8'
  },
  {
    path: '/investment-products/bank-deposit',
    priority: '0.8'
  },
  {
    path: '/investment-products/savings-policy',
    priority: '0.8'
  },
  {
    path: '/guides',
    priority: '0.8'
  },
  {
    path: '/guides/compound-interest',
    priority: '0.8'
  },
  {
    path: '/guides/mortgage-calculator',
    priority: '0.8'
  },
  {
    path: '/guides/balanced-portfolio',
    priority: '0.8'
  },
  {
    path: '/calculators',
    priority: '0.9'
  },
  {
    path: '/compound-interest',
    priority: '0.8'
  },
  {
    path: '/mortgage-calculator',
    priority: '0.8'
  },
  {
    path: '/gross-to-net',
    priority: '0.8'
  }
]

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(({ path, priority }) => {
         return `
       <url>
           <loc>${`${DOMAIN}${path}`}</loc>
           <changefreq>weekly</changefreq>
           <priority>${priority}</priority>
           <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
       </url>`
       })
       .join('')}
   </urlset>`
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(STATIC_PATHS)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {
  return null
}