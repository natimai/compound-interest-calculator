import Head from 'next/head'
import Link from 'next/link'

export default function BankDeposit() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>פיקדון בנקאי - מדריך מקיף לחיסכון בבנק 2024 | DeRibit</title>
        <meta name="description" content="כל מה שצריך לדעת על פיקדונות בנקאיים - סוגי פיקדונות, ריביות, יתרונות וחסרונות. המדריך המלא להשקעה סולידית בבנק" />
        <meta name="keywords" content="פיקדון בנקאי, ריבית על פיקדון, פיקדון צמוד מדד, פיקדון שקלי, השקעה סולידית" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/investment-products" className="text-blue-600 hover:text-blue-800">
            ← חזרה למוצרי השקעה
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">פיקדון בנקאי</h1>
          <p className="text-xl text-gray-600">אפיק השקעה סולידי לשמירה על ערך הכסף עם סיכון מינימלי</p>
        </header>

        <div className="space-y-8">
          {/* מהו פיקדון */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מהו פיקדון בנקאי?</h2>
            <p className="text-gray-600 mb-4">
              פיקדון בנקאי הוא מסלול השקעה בו הלקוח מפקיד סכום כסף בבנק לתקופה מוגדרת מראש.
              בתמורה להפקדת הכסף, הבנק משלם ריבית שנקבעת מראש ומושפעת מגובה ריבית בנק ישראל, 
              תקופת ההפקדה, וסכום ההפקדה.
            </p>
          </section>

          {/* סוגי פיקדונות */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">סוגי פיקדונות</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">פיקדון לא צמוד:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>הנפוץ ביותר</li>
                    <li>ריבית קבועה מראש</li>
                    <li>לא מוגן מפני אינפלציה</li>
                    <li>מיסוי של 15% על הרווחים</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">פיקדון צמוד מדד:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>הקרן והריבית צמודות למדד</li>
                    <li>הגנה מפני אינפלציה</li>
                    <li>אפשרות לקביעת רצפת מדד</li>
                    <li>מתאים לתקופות אינפלציוניות</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* יתרונות וחסרונות */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">יתרונות וחסרונות</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 text-green-600">יתרונות:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>סיכון מינימלי</li>
                  <li>תשואה מובטחת מראש</li>
                  <li>הגנת הבנקים</li>
                  <li>מיסוי מופחת של 15%</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-red-600">חסרונות:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>תשואה נמוכה יחסית</li>
                  <li>קנסות על משיכה מוקדמת</li>
                  <li>חוסר גמישות</li>
                  <li>לא מגן מאינפלציה (בפיקדון רגיל)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* השוואת ריביות */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">השוואת ריביות בין הבנקים</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">בנק</th>
                    <th className="px-4 py-2 border">ריבית לשנה</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">בנק ירושלים</td>
                    <td className="px-4 py-2 border font-medium">4.30%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">הבנק הדיגיטלי</td>
                    <td className="px-4 py-2 border font-medium">4.25%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">הבינלאומי</td>
                    <td className="px-4 py-2 border font-medium">4.15%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">דיסקונט</td>
                    <td className="px-4 py-2 border font-medium">4.05%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* למי מתאים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">למי מתאים פיקדון בנקאי?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">מתאים ל:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>מחפשי השקעה בטוחה לחלוטין</li>
                  <li>כספים המיועדים להוצאה קרובה</li>
                  <li>שמרנים מאוד בהשקעות</li>
                  <li>רוצים תשואה מובטחת מראש</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">פחות מתאים ל:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>מחפשי תשואות גבוהות</li>
                  <li>משקיעים לטווח ארוך</li>
                  <li>צריכים נזילות גבוהה</li>
                  <li>חוששים מאינפלציה</li>
                </ul>
              </div>
            </div>
          </section>

          {/* טיפים */}
          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">טיפים חשובים:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>תמיד השוו ריביות בין בנקים שונים</li>
              <li>בחנו אפשרות לפיקדון צמוד מדד בתקופות אינפלציוניות</li>
              <li>נהלו משא ומתן על הריבית, במיוחד בסכומים גבוהים</li>
              <li>בדקו היטב את תנאי המשיכה המוקדמת</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}