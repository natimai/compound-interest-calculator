import fs from 'fs'
import path from 'path'

const DOMAIN = 'https://www.deribit.co.il'

function getPathsFromDir(dir, allPaths = [], parentPath = '') {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      getPathsFromDir(filePath, allPaths, `${parentPath}/${file}`)
    } else {
      if (file.match(/^(?!_).*\.(js|jsx|tsx)$/)) {
        const cleanName = file.replace(/\.(js|jsx|tsx)$/, '')
        let pagePath = `${parentPath}/${cleanName}`
        
        if (cleanName === 'index') {
          pagePath = parentPath
        }
        pagePath = pagePath.replace(/\/+/g, '/')
        if (!pagePath.startsWith('/')) {
          pagePath = `/${pagePath}`
        }

        allPaths.push(pagePath)
      }
    }
  }

  return allPaths
}

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
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export async function getServerSideProps({ res }) {
  const pagesDirectory = path.join(process.cwd(), 'pages')
  const pages = getPathsFromDir(pagesDirectory)
    .filter(page => 
      !page.includes('/_') &&
      !page.includes('/api/') &&
      !page.includes('/sitemap.xml') &&
      !page.includes('/404') &&
      !page.includes('/500')
    )

  const sitemap = generateSiteMap(pages)

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {}