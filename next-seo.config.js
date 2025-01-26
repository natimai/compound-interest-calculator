const config = {
  // הגדרות בסיסיות
  titleTemplate: '%s | דריבית',
  defaultTitle: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם',
  description: 'מחשבונים פיננסיים חינמיים, קורס שוק ההון למתחילים, והשוואת מוצרי השקעה בעברית פשוטה. מחשבון ריבית דריבית, קרנות השתלמות, קופות גמל ועוד - הכל בחינם.',
  canonical: 'https://www.deribit.co.il',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.deribit.co.il',
    siteName: 'דריבית',
    title: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם',
    description: 'מחשבונים פיננסיים חינמיים, קורס שוק ההון למתחילים, והשוואת מוצרי השקעה בעברית פשוטה.',
    images: [
      {
        url: 'https://www.deribit.co.il/og-image.png',
        width: 1200,
        height: 630,
        alt: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון',
      }
    ]
  },

  // Twitter
  twitter: {
    cardType: 'summary_large_image',
    site: '@deribit'
  },

  // תגיות מטא נוספות
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'google',
      content: 'notranslate'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
  ],

  // תגיות קישור נוספות
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ]
};

export default config; 