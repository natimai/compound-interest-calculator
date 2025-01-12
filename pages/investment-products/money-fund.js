import Head from 'next/head'
import Link from 'next/link'

export default function MoneyFund() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>קרן כספית - מדריך להשקעה סולידית 2024 | DeRibit</title>
        <meta name="description" content="כל מה שצריך לדעת על קרן כספית - יתרונות, השוואה מול פיקדונות, דמי ניהול ומיסוי. המדריך המלא להשקעה בקרן כספית שקלית ב-2024" />
        <meta name="keywords" content="קרן כספית, קרן כספית שקלית, השקעה סולידית, תשואה על קרן כספית, דמי ניהול קרן כספית" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/investment-products" className="text-blue-600 hover:text-blue-800">
            ← חזרה למוצרי השקעה
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">קרן כספית</h1>
          <p className="text-xl text-gray-600">השקעה סולידית ונזילה המתאימה במיוחד לתקופות של ריבית גבוהה</p>
        </header>

        <div className="space-y-8">
          {/* מהי קרן כספית */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מהי קרן כספית?</h2>
            <p className="text-gray-600 mb-4">
              קרן כספית היא קרן נאמנות סולידית המשקיעה בנכסים לטווח קצר של עד 90 יום. 
              הקרן משקיעה באפיקים בטוחים כמו אג״ח ממשלתיות, מק״מ ופיקדונות בנקאיים, 
              ומציעה תשואה הדומה לריבית בנק ישראל.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">בשנת 2024:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>תשואות גבוהות יחסית בשל סביבת הריבית הגבוהה</li>
                <li>יתרון מיסוי בתקופת אינפלציה</li>
                <li>נזילות מלאה ללא קנסות יציאה</li>
              </ul>
            </div>
          </section>

          {/* יתרונות */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">יתרונות מרכזיים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">יתרונות פיננסיים:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>נזילות מלאה ללא קנסות</li>
                  <li>דמי ניהול נמוכים (0.07%-0.25%)</li>
                  <li>מס רווח הון ריאלי בלבד</li>
                  <li>אפשרות לקיזוז הפסדים</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">יתרונות תפעוליים:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>גמישות בסכומי ההשקעה</li>
                  <li>אפשרות לפיזור בין מספר קרנות</li>
                  <li>שקיפות מלאה בהרכב הנכסים</li>
                  <li>פיקוח רגולטורי הדוק</li>
                </ul>
              </div>
            </div>
          </section>

          {/* למי זה מתאים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">למי מתאימה קרן כספית?</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">מתאימה במיוחד ל:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>מחפשי השקעה סולידית ונזילה</li>
                  <li>משקיעים הרוצים לשמור על ערך הכסף בתקופת אינפלציה</li>
                  <li>בעלי תיק השקעות המעוניינים בגיוון סולידי</li>
                  <li>חוסכים לטווח קצר-בינוני</li>
                </ul>
              </div>
            </div>
          </section>

          {/* השוואה מול פיקדון */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">קרן כספית מול פיקדון בנקאי</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">מאפיין</th>
                    <th className="px-4 py-2 border">קרן כספית</th>
                    <th className="px-4 py-2 border">פיקדון בנקאי</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border font-medium">נזילות</td>
                    <td className="px-4 py-2 border">מלאה, ללא קנסות</td>
                    <td className="px-4 py-2 border">מוגבלת, עם קנסות שבירה</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border font-medium">תשואה</td>
                    <td className="px-4 py-2 border">דומה לריבית בנק ישראל</td>
                    <td className="px-4 py-2 border">נמוכה יותר</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border font-medium">מיסוי</td>
                    <td className="px-4 py-2 border">מס רווח הון ריאלי 25%</td>
                    <td className="px-4 py-2 border">15% נומינלי בפיקדונות לא צמודים</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* טיפים חשובים */}
          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">טיפים חשובים לבחירת קרן כספית:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>השוו דמי ניהול בין קרנות שונות - הטווח הוא 0.07%-0.25%</li>
              <li>בחרו בקרנות גדולות ויציבות של חברות מובילות</li>
              <li>שקלו פיזור בין מספר קרנות להקטנת סיכון</li>
              <li>בדקו מדיניות חלוקת דיבידנדים אם זה חשוב לכם</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              לחישוב התשואה הצפויה בקרן כספית →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}