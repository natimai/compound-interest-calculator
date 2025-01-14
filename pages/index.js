import Head from 'next/head'
import Link from 'next/link'
import { Calculator } from '../components/Calculator'
import { Guide } from '../components/Guide'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div dir="rtl" className={`min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
      <Head>
        <title>מחשבון ריבית דריבית - חשב את הרווחים העתידיים שלך | DeRibit</title>
        <meta name="description" content="מחשבון ריבית דריבית חינמי שיעזור לך לחשב את הרווחים העתידיים שלך. כולל אפשרות לחישוב דמי ניהול, מס רווחי הון ותחזיות ארוכות טווח." />
        <meta name="keywords" content="מחשבון ריבית דריבית, חישוב ריבית דריבית, מחשבון פנסיה, דמי ניהול, מס רווחי הון, חישוב תשואה" />
        <meta property="og:title" content="מחשבון ריבית דריבית - DeRibit" />
        <meta property="og:description" content="מחשבון ריבית דריבית חינמי לחישוב רווחים עתידיים" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deribit.co.il" />
        <meta property="og:site_name" content="DeRibit" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab] p-5">
        {/* כותרת ראשית */}
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            חשב את העתיד הפיננסי שלך
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            מחשבון מקצועי לתכנון פיננסי חכם
          </p>
        </div>

        {/* מוצרי השקעה מובילים */}
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">מוצרי השקעה מובילים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/investment-products/keren-hishtalmut"
              className="group bg-blue-50 hover:bg-blue-100 transition-all p-4 rounded-lg border border-blue-100 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="text-2xl">💰</div>
                <div>
                  <h3 className="font-bold">קרן השתלמות</h3>
                  <p className="text-sm text-gray-600">הטבות מס משמעותיות</p>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/investment-products/kupat-gemel"
              className="group bg-blue-50 hover:bg-blue-100 transition-all p-4 rounded-lg border border-blue-100 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="text-2xl">🏦</div>
                <div>
                  <h3 className="font-bold">קופת גמל להשקעה</h3>
                  <p className="text-sm text-gray-600">גמישות מקסימלית</p>
                </div>
              </div>
            </Link>

            <Link 
              href="/investment-products/pension-fund"
              className="group bg-blue-50 hover:bg-blue-100 transition-all p-4 rounded-lg border border-blue-100 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="text-2xl">👵</div>
                <div>
                  <h3 className="font-bold">קרן פנסיה</h3>
                  <p className="text-sm text-gray-600">חיסכון לטווח ארוך</p>
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

        {/* מדריכים מקצועיים */}
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">מדריכים מקצועיים</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              href="/guides/compound-interest"
              className="text-blue-600 hover:text-blue-800 p-4 rounded-lg hover:bg-blue-50 transition-all text-center"
            >
              <span className="text-2xl block mb-2">📈</span>
              מדריך לריבית דריבית
            </Link>
            <Link 
              href="/guides/balanced-portfolio"
              className="text-blue-600 hover:text-blue-800 p-4 rounded-lg hover:bg-blue-50 transition-all text-center"
            >
                <span className="text-2xl block mb-2">💼</span>
        תיק השקעות מאוזן
      </Link>
      <Link 
        href="/guides/mortgage-calculator"
        className="text-blue-600 hover:text-blue-800 p-4 rounded-lg hover:bg-blue-50 transition-all text-center"
      >
        <span className="text-2xl block mb-2">🏠</span>
        חישוב משכנתא
      </Link>
    </div>
  </div>
      </main>
    </div>
  )
}
