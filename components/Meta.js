import Head from 'next/head'

export default function Meta({
  title = 'דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם',
  description = 'האתר המקיף בישראל להשוואת מוצרי השקעה ומחשבונים פיננסיים. קורס שוק ההון למתחילים בחינם.',
  ogImage = 'https://www.deribit.co.il/og-image.png',
  url = 'https://www.deribit.co.il'
}) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="דריבית" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="he_IL" />
      
      {/* Open Graph Image */}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="deribit.co.il" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* General SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="Hebrew" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
} 