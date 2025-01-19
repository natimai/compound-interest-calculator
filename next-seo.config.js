const config = {
  // הגדרות בסיסיות
  titleTemplate: '%s | דריבית',
  defaultTitle: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם',
  description: 'מחשבונים פיננסיים חינמיים, קורס שוק ההון למתחילים, והשוואת מוצרי השקעה בעברית פשוטה. מחשבון ריבית דריבית, קרנות השתלמות, קופות גמל ועוד - הכל בחינם.',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://deribit.co.il',
    siteName: 'דריבית',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/013da920-f264-4d22-9e72-65f7b250c52f.png?token=RszsNJDQmC993YpTOgvnz6Q12OjN_QbM-uyISwhQsrQ&height=1024&width=1024&expires=33273284450',
        width: 1024,
        height: 1024,
        alt: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון',
      }
    ]
  },

  // Twitter
  twitter: {
    cardType: 'summary_large_image',
    site: '@deribit',
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
    }
  ],

  // תגיות קישור נוספות
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
};

export default config; 