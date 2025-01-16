import Head from 'next/head'
import Link from 'next/link'
import { Calculator, TrendingUp, BookOpen, ArrowLeft } from 'lucide-react'
import { Calculator as CompoundCalculator } from '../components/Calculator'

export default function Home() {
  return (
    <>
      <Head>
        <title>דריבית | DeRibit - מחשבונים פיננסיים חכמים</title>
        <meta name="description" content="מחשבוני השקעות מתקדמים לתכנון פיננסי חכם. כלים להשוואת מסלולי משכנתא, חישובי שכר, ריבית דריבית ועוד." />
        <meta name="keywords" content="מחשבון ריבית דריבית, מחשבון משכנתא, מחשבון שכר, תכנון פיננסי, השקעות, כלים פיננסיים" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deribit.co.il/" />
        <meta property="og:title" content="דריבית | DeRibit - מחשבונים פיננסיים חכמים" />
        <meta property="og:description" content="מחשבוני השקעות מתקדמים לתכנון פיננסי חכם. השוואת מסלולי משכנתא, חישובי שכר וריבית דריבית." />
        <meta property="og:image" content="https://deribit.co.il/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://deribit.co.il/" />
        <meta property="twitter:title" content="דריבית | DeRibit - מחשבונים פיננסיים חכמים" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "דריבית | DeRibit",
            "description": "מחשבונים פיננסיים חכמים לתכנון כלכלי",
            "url": "https://deribit.co.il",
            "applicationCategory": "FinanceApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "ILS"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "דריבית - מחשבונים פיננסיים",
            "url": "https://www.deribit.co.il",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.deribit.co.il/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-8">
                מחשבונים פיננסיים <span className="text-blue-600 dark:text-blue-400">חכמים</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10">
                כלים מתקדמים לתכנון פיננסי חכם. השוואת מסלולי משכנתא, חישובי שכר, ריבית דריבית ועוד.
              </p>
              <div className="flex justify-center space-x-4 space-x-reverse">
                <Link 
                  href="/calculators"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                >
                  התחל לחשב
                  <Calculator className="mr-2 h-5 w-5" />
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  למד עוד
                  <BookOpen className="mr-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                הכלים שלנו
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                מגוון כלים פיננסיים לקבלת החלטות מושכלות
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'מחשבון ריבית דריבית',
                  description: 'חשב את הצמיחה של ההשקעות שלך לאורך זמן',
                  icon: Calculator,
                  href: '/compound-interest'
                },
                {
                  title: 'השוואת מסלולי השקעה',
                  description: 'השווה בין אפיקי השקעה שונים וקבל החלטה מושכלת',
                  icon: TrendingUp,
                  href: '/compare'
                },
                {
                  title: 'מדריכים מקצועיים',
                  description: 'למד על אסטרטגיות השקעה ותכנון פיננסי',
                  icon: BookOpen,
                  href: '/guides'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    גלה עוד
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
