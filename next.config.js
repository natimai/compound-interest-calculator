module.exports = {
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
    ]
  },
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
  images: {
    domains: ['www.deribit.co.il'],
  },
} 