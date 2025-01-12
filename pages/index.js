import Head from 'next/head'
import Link from 'next/link'
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
        {/* מוצרי השקעה מובילים */}
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">מוצרי השקעה מובילים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/investment-products/keren-hishtalmut"
              className="bg-blue-50 hover:bg-blue-100 transition-colors p-4 rounded-lg border border-blue-100"
            >
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="text-2xl">💰</div>
                <div>
                  <h3 className="font-bold">קרן השתלמות</h3>
                  <p className="text-sm text-gray-600">חיסכון לטווח בינוני עם הטבות מס משמעותיות</p>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/investment-products/kupat-gemel"
              className="bg-blue-50 hover:bg-blue-100 transition-colors p-4 rounded-lg border border-blue-100"
            >
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="text-2xl">🏦</div>
                <div>
                  <h3 className="font-bold">קופת גמל להשקעה</h3>
                  <p className="text-sm text-gray-600">חיסכון גמיש עם אפשרות למשיכה בכל עת</p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-6">
            <Link 
              href="/investment-products"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              <span>לכל מוצרי ההשקעה</span>
              <span className="mr-2">←</span>
            </Link>
          </div>
        </div>

        <Calculator />
        
        <Guide />

        {/* קישורים למדריכים בסוף העמוד */}
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-center">מדריכים מקצועיים</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <Link 
              href="/investment-products/keren-hishtalmut"
              className="text-blue-600 hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              מדריך לקרן השתלמות
            </Link>
            <span className="hidden md:inline text-gray-300">|</span>
            <Link 
              href="/investment-products/kupat-gemel"
              className="text-blue-600 hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              מדריך לקופת גמל להשקעה
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}