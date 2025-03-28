/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
    domains: [
      {
        domain: 'www.deribit.co.il',
        defaultLocale: 'he',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'deribit.co.il',
          },
        ],
        destination: 'https://www.deribit.co.il/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['www.deribit.co.il'],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/seo/sitemap.xml',
      },
      {
        source: '/robots.txt',
        destination: '/seo/robots.txt',
      },
    ];
  },
};

module.exports = nextConfig; 