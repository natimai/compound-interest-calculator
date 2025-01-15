module.exports = {
    siteUrl: 'https://www.deribit.co.il',
    generateRobotsTxt: true,
    exclude: ['/404', '/500', '/server-sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.deribit.co.il/server-sitemap.xml',
      ],
    },
    sitemapSize: 7000,
  }