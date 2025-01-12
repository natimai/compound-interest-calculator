import Head from 'next/head'
import Link from 'next/link'

export default function KerenHishtalmut() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>קרן השתלמות - מדריך מקיף | DeRibit</title>
        <meta name="description" content="מדריך מקיף לקרן השתלמות - יתרונות, חסרונות, הטבות מס, והשוואה בין קרנות ההשתלמות המובילות בשוק" />
        <meta name="keywords" content="קרן השתלמות, הטבות מס קרן השתלמות, השוואת קרנות השתלמות, דמי ניהול קרן השתלמות" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/investment-products" className="text-blue-600 hover:text-blue-800">
            ← חזרה למוצרי השקעה
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">קרן השתלמות</h1>
          <p className="text-xl text-gray-600">מסלול חיסכון לטווח בינוני עם הטבות מס ייחודיות</p>
        </header>

        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מה זו קרן השתלמות?</h2>
            <p className="text-gray-600 mb-4">
              קרן השתלמות היא מסלול חיסכון המעניק הטבות מס משמעותיות. בעבר, הקרנות שימשו למימון 
              השתלמויות מקצועיות, אך כיום הן משמשות בעיקר כאפיק חיסכון לטווח בינוני.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">יתרונות מרכזיים:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>פטור ממס רווחי הון</li>
                <li>הפקדות מוכרות למס הכנסה</li>
                <li>נזילות לאחר 6 שנים</li>
                <li>אפשרות למשיכה ללא מס גם על הרווחים</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">הטבות מס</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">הטבות בהפקדה:</h3>
                <p className="text-gray-600">
                  עובד שכיר יכול להפקיד עד 7.5% משכרו (עד לתקרה) ולקבל הטבת מס. 
                  המעסיק יכול להפקיד עד 7.5% נוספים.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">הטבות במשיכה:</h3>
                <p className="text-gray-600">
                  לאחר 6 שנות חיסכון, ניתן למשוך את הכסף בפטור מלא ממס על הרווחים.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">השוואת דמי ניהול</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">קרן</th>
                    <th className="px-4 py-2 border">דמי ניהול מצבירה</th>
                    <th className="px-4 py-2 border">דמי ניהול מהפקדה</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">אלטשולר שחם</td>
                    <td className="px-4 py-2 border">0.6%-0.8%</td>
                    <td className="px-4 py-2 border">0%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">הראל</td>
                    <td className="px-4 py-2 border">0.6%-0.85%</td>
                    <td className="px-4 py-2 border">0%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">מיטב דש</td>
                    <td className="px-4 py-2 border">0.6%-0.8%</td>
                    <td className="px-4 py-2 border">0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">חשוב לדעת!</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>ניתן לפתוח רק קרן השתלמות אחת</li>
              <li>אפשר לאחד קרנות השתלמות ישנות</li>
              <li>הותיק יכול להשפיע על דמי הניהול שתקבלו</li>
              <li>מומלץ לבדוק דמי ניהול בין חברות שונות</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              השתמש במחשבון הריבית דריבית לחישוב החיסכון העתידי →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}