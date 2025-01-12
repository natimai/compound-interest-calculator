import Head from 'next/head'
import { Calculator } from '../components/Calculator'
import { Guide } from '../components/Guide'

export default function Home() {
  const title = 'מחשבון ריבית דריבית - חשב את הרווחים העתידיים שלך | DeRibit'
  const description = 'מחשבון ריבית דריבית חינמי שיעזור לך לחשב את הרווחים העתידיים שלך. כולל אפשרות לחישוב דמי ניהול, מס רווחי הון ותחזיות ארוכות טווח. נסה עכשיו!'
  const keywords = 'מחשבון ריבית דריבית, חישוב ריבית דריבית, מחשבון פנסיה, דמי ניהול, מס רווחי הון, חישוב תשואה, השקעות, חיסכון פנסיוני'
  
  return (
    <div dir="rtl">
      <Head>
        {/* בסיסי */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* שפה וכיוון */}
        <html lang="he" dir="rtl" />
        <meta property="og:locale" content="he_IL" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://deribit.co.il" />
        <meta property="og:site_name" content="DeRibit - מחשבון ריבית דריבית" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* נוסף */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://deribit.co.il" />

        {/* Schema.org */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "מחשבון ריבית דריבית - DeRibit",
              "description": description,
              "url": "https://deribit.co.il",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Any",
              "inLanguage": "he-IL",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "ILS"
              },
              "creator": {
                "@type": "Organization",
                "name": "DeRibit"
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab] p-5">
        <Calculator />
        <Guide />
      </main>
    </div>
  )
}
