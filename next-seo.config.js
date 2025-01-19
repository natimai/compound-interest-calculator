export default {
  titleTemplate: '%s | דריבית',
  defaultTitle: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם',
  description: 'האתר המקיף בישראל להשוואת מוצרי השקעה ומחשבונים פיננסיים. קורס שוק ההון למתחילים בחינם.',
  canonical: 'https://www.deribit.co.il',
  noindex: false,
  nofollow: false,
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.deribit.co.il',
    siteName: 'דריבית',
    title: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם',
    description: 'האתר המקיף בישראל להשוואת מוצרי השקעה ומחשבונים פיננסיים. קורס שוק ההון למתחילים בחינם.',
    images: [
      {
        url: 'https://www.deribit.co.il/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון',
        type: 'image/jpeg',
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
      content: 'מחשבון ריבית דריבית, קורס שוק ההון, קרן השתלמות, קופת גמל, מחשבונים פיננסיים, השקעות למתחילים'
    },
    {
      name: 'author',
      content: 'דריבית'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:locale:alternate',
      content: 'en_US'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    },
    {
      rel: 'canonical',
      href: 'https://www.deribit.co.il'
    }
  ],
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1
  }
}; 