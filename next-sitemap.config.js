/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.deribit.co.il',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/404', '/500'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
    generateIndexSitemap: false,
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    },
}