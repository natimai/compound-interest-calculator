import Head from 'next/head'
import Link from 'next/link'
import { ChevronRight, PiggyBank, TrendingUp, Clock, Shield, Calculator, AlertTriangle, Sparkles } from 'lucide-react'
import { NextSeo } from 'next-seo'

export default function KerenHishtalmut() {
  const currentYear = new Date().getFullYear();
  
  const pageTitle = `קרן השתלמות ${currentYear} - המדריך המקיף להטבת המס הטובה בישראל | דריבית`;
  const pageDescription = `מדריך מקיף לקרן השתלמות ${currentYear}: הטבת המס המשתלמת ביותר בישראל ללא תקרת רווחים. תקרות הפקדה, פטור ממס רווחי הון, מסלולי השקעה והשוואת קרנות. כל מה שצריך לדעת על קרן השתלמות לשכירים ועצמאים.`;
  const pageKeywords = `קרן השתלמות, קרן השתלמות ${currentYear}, תקרת הפקדה קרן השתלמות ${currentYear}, הטבות מס קרן השתלמות, קרן השתלמות לעצמאים, קרן השתלמות לשכירים, פטור ממס רווחי הון, השוואת קרנות השתלמות, מסלולי השקעה קרן השתלמות`;
  
  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical="https://www.deribit.co.il/investment-products/keren-hishtalmut"
        openGraph={{
          type: 'article',
          locale: 'he_IL',
          url: 'https://www.deribit.co.il/investment-products/keren-hishtalmut',
          siteName: 'דריבית',
          title: pageTitle,
          description: pageDescription,
          images: [
            {
              url: 'https://www.deribit.co.il/og-image.png',
              width: 1200,
              height: 630,
              alt: 'מדריך קרן השתלמות - דריבית',
            }
          ]
        }}
        twitter={{
          handle: '@deribit',
          site: '@deribit',
          cardType: 'summary_large_image',
          title: pageTitle,
          description: pageDescription,
          image: 'https://www.deribit.co.il/og-image.png'
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: pageKeywords
          },
          {
            name: 'author',
            content: 'דריבית'
          },
          {
            name: 'robots',
            content: 'noindex, follow'
          },
          {
            name: 'googlebot',
            content: 'noindex, follow'
          },
          {
            name: 'google',
            content: 'notranslate'
          },
          {
            name: 'format-detection',
            content: 'telephone=no'
          },
          {
            name: 'theme-color',
            content: '#ffffff'
          },
          {
            name: 'google-site-verification',
            content: 'your-google-verification-code'
          }
        ]}
      />
      
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href="https://www.deribit.co.il/investment-products/keren-hishtalmut" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://www.deribit.co.il/investment-products/keren-hishtalmut" />
        <meta property="og:site_name" content="דריבית - השוואת מוצרים פיננסיים" />
        <meta property="og:image" content="https://www.deribit.co.il/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="מדריך קרן השתלמות - דריבית" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.deribit.co.il/og-image.png" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.deribit.co.il/investment-products/keren-hishtalmut"
            },
            "headline": `קרן השתלמות ${currentYear} - המדריך המקיף`,
            "description": pageDescription,
            "author": {
              "@type": "Organization",
              "name": "דריבית"
            },
            "publisher": {
              "@type": "Organization",
              "name": "דריבית",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.deribit.co.il/logo.png"
              }
            },
            "datePublished": `${currentYear}-01-01`,
            "dateModified": new Date().toISOString().split('T')[0]
          })}
        </script>
      </Head>

      {/* Rest of the component remains unchanged */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* ... existing content ... */}
      </div>
    </>
  )
}
