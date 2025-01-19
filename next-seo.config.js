export default {
  titleTemplate: '%s | דריבית',
  defaultTitle: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם',
  description: 'האתר המקיף בישראל להשוואת מוצרי השקעה ומחשבונים פיננסיים. קורס שוק ההון למתחילים בחינם.',
  canonical: 'https://deribit.co.il',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.deribit.co.il',
    siteName: 'דריבית',
    images: [
      {
        url: 'https://www.deribit.co.il/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון',
      },
    ],
  },
  twitter: {
    handle: '@deribit',
    site: '@deribit',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'מחשבון פיננסי, ריבית דריבית, משכנתא, שכר, השקעות, תכנון פיננסי, כלכלת המשפחה'
    },
    {
      name: 'author',
      content: 'דריבית'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
}; 