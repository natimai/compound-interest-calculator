import Head from 'next/head'
import Link from 'next/link'

export default function PensionFund() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>מדריך קרן פנסיה {currentYear} | השוואת קרנות פנסיה - דריבית</title>
        <meta name="description" content={`מדריך מקיף לקרן פנסיה ${currentYear}: יתרונות וחסרונות, השוואת דמי ניהול, מסלולי השקעה, הטבות מס, ביטוחים נלווים וכל מה שצריך לדעת לפני שבוחרים קרן פנסיה.`} />
        <meta name="keywords" content="קרן פנסיה, קרן פנסיה ${currentYear}, השוואת קרנות פנסיה, דמי ניהול קרן פנסיה, מסלולי השקעה, ביטוחים נלווים" />
        <link rel="canonical" href="https://www.deribit.co.il/investment-products/pension-fund" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`מדריך קרן פנסיה ${currentYear} | השוואת קרנות פנסיה - דריבית`} />
        <meta property="og:description" content={`מדריך מקיף לקרן פנסיה ${currentYear}: יתרונות וחסרונות, השוואת דמי ניהול, מסלולי השקעה, הטבות מס, ביטוחים נלווים.`} />
        <meta property="og:url" content="https://www.deribit.co.il/investment-products/pension-fund" />
        <meta property="og:site_name" content="דריבית - השוואת מוצרים פיננסיים" />
        <meta property="og:image" content="https://www.deribit.co.il/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="מדריך קרן פנסיה - דריבית" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`מדריך קרן פנסיה ${currentYear} | השוואת קרנות פנסיה - דריבית`} />
        <meta name="twitter:description" content={`מדריך מקיף לקרן פנסיה ${currentYear}: יתרונות וחסרונות, השוואת דמי ניהול, מסלולי השקעה, הטבות מס, ביטוחים נלווים.`} />
        <meta name="twitter:image" content="https://www.deribit.co.il/og-image.png" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="דריבית" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.deribit.co.il/investment-products/pension-fund"
            },
            "headline": `מדריך קרן פנסיה ${currentYear}`,
            "description": `מדריך מקיף לקרן פנסיה ${currentYear}: יתרונות וחסרונות, השוואת דמי ניהול, מסלולי השקעה, הטבות מס, ביטוחים נלווים.`,
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/investment-products" className="text-blue-600 hover:text-blue-800">
            ← חזרה למוצרי השקעה
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">קרן פנסיה</h1>
          <p className="text-xl text-gray-600">מכשיר החיסכון הפנסיוני הנפוץ ביותר בישראל, המשלב חיסכון לגיל פרישה עם כיסויים ביטוחיים</p>
        </header>

        <div className="space-y-8">
          {/* מהי קרן פנסיה */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מהי קרן פנסיה?</h2>
            <p className="text-gray-600 mb-4">
              קרן פנסיה היא תכנית חיסכון המיועדת להבטיח לחוסכים הכנסה חודשית קבועה לאחר פרישתם מהעבודה. 
              בנוסף לחיסכון, קרן הפנסיה מספקת כיסויים ביטוחיים חשובים: ביטוח נכות וביטוח שאירים.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">מאפיינים ייחודיים:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>ערבות הדדית בין העמיתים</li>
                <li>הטבות מס משמעותיות</li>
                <li>ניהול השקעות מקצועי</li>
                <li>דמי ניהול מפוקחים</li>
              </ul>
            </div>
          </section>

          {/* הפקדות ואחוזים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">הפקדות חובה לפנסיה</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">רכיב</th>
                    <th className="px-4 py-2 border">עובד</th>
                    <th className="px-4 py-2 border">מעסיק</th>
                    <th className="px-4 py-2 border">סה"כ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">תגמולים</td>
                    <td className="px-4 py-2 border">6%</td>
                    <td className="px-4 py-2 border">6.5%</td>
                    <td className="px-4 py-2 border">12.5%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">פיצויים</td>
                    <td className="px-4 py-2 border">-</td>
                    <td className="px-4 py-2 border">6%</td>
                    <td className="px-4 py-2 border">6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* כיסויים ביטוחיים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">כיסויים ביטוחיים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">ביטוח נכות:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>קצבה חודשית במקרה של אובדן כושר עבודה</li>
                  <li>עד 75% מההכנסה המבוטחת</li>
                  <li>המשך הפקדות לחיסכון הפנסיוני</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">ביטוח שאירים:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>60% מהקצבה לבן/בת זוג</li>
                  <li>40% ליתומים עד גיל 21</li>
                  <li>20% להורים נתמכים</li>
                </ul>
              </div>
            </div>
          </section>

          {/* הטבות מס */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">הטבות מס</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 space-x-reverse">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">זיכוי מס של 35% על הפקדות עובד</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">ניכוי מס על הפקדות המעסיק עד תקרה</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">פטור ממס רווחי הון על הרווחים</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">פטור חלקי על הקצבה בגיל פרישה</span>
              </li>
            </ul>
          </section>

          {/* מסלולי השקעה */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מסלולי השקעה</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                קרנות הפנסיה מציעות מגוון מסלולי השקעה, כאשר ברירת המחדל היא מסלול תלוי גיל:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>עד גיל 50 - חשיפה גבוהה למניות</li>
                <li>גילאי 50-60 - חשיפה מתונה למניות</li>
                <li>מעל גיל 60 - חשיפה נמוכה למניות</li>
              </ul>
            </div>
          </section>

          {/* טיפים חשובים */}
          <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">טיפים חשובים 💡</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>בדקו והשוו דמי ניהול בין קרנות שונות</li>
              <li>התאימו את מסלול הביטוח למצבכם המשפחתי</li>
              <li>עדכנו פרטים אישיים ומוטבים באופן שוטף</li>
              <li>שקלו איחוד קרנות פנסיה לא פעילות</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              לחישוב החיסכון הפנסיוני שלך →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
