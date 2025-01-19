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
} 