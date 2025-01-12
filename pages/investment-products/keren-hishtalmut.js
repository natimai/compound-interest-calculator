import Head from 'next/head'
import Link from 'next/link'

export default function KerenHishtalmut() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>קרן השתלמות - מדריך מקיף | DeRibit</title>
        <meta name="description" content="קרן השתלמות - אפיק חיסכון בעל יתרונות והטבות מס לשכירים ועצמאים. מידע מקיף על הטבות מס, תנאי הפקדה, ותקרות הפקדה עדכניות לשנת 2024" />
        <meta name="keywords" content="קרן השתלמות, הטבות מס קרן השתלמות, קרן השתלמות לעצמאים, קרן השתלמות לשכירים, תקרת הפקדה קרן השתלמות 2024" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/investment-products" className="text-blue-600 hover:text-blue-800">
            ← חזרה למוצרי השקעה
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">קרן השתלמות</h1>
          <p className="text-xl text-gray-600">אפיק חיסכון בעל יתרונות והטבות מס, המיועד לשכירים ועצמאים</p>
        </header>

        <div className="space-y-8">
          {/* מהי קרן השתלמות */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מהי קרן השתלמות?</h2>
            <p className="text-gray-600 mb-4">
              קרן השתלמות הינה תכנית חיסכון לטווח של שש שנים ויותר, המשלבת ניהול השקעות מקצועי עם הטבות מס משמעותיות. 
              החוסך יכול למשוך את הכספים בפטור ממס בתום תקופת החיסכון לכל מטרה, ולא רק להשתלמות.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">יתרונות מרכזיים:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>פטור מלא ממס רווחי הון לאחר 6 שנים</li>
                <li>אפשרות למשיכה לאחר 3 שנים למטרת השתלמות</li>
                <li>הפקדות מוכרות למס הכנסה</li>
                <li>לשכירים - הפקדות מעסיק ביחס של 3:1</li>
              </ul>
            </div>
          </section>

          {/* הטבות לשכירים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">הטבות לשכירים</h2>
            <p className="text-gray-600 mb-4">
              נכון לשנת 2024, על כל שקל שהעובד מפקיד (עד 2.5% מהשכר), המעסיק מפקיד 3 ש"ח (עד 7.5%). 
              תקרת השכר החודשי לפטור ממס עומדת על 15,712 ש"ח.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">פירוט הטבות:</h3>
              <ul className="list-disc list-inside">
                <li>הפקדת עובד: עד 393 ש"ח בחודש (2.5%)</li>
                <li>הפקדת מעסיק: עד 1,178 ש"ח בחודש (7.5%)</li>
                <li>פטור ממס על הפקדות המעסיק עד לתקרה</li>
                <li>פטור ממס רווחים במשיכה</li>
              </ul>
            </div>
          </section>

          {/* הטבות לעצמאים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">הטבות לעצמאים</h2>
            <p className="text-gray-600 mb-4">
              עצמאים זכאים להטבות מס משמעותיות על הפקדות לקרן השתלמות, עם תקרות הפקדה ייחודיות.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">תקרות הפקדה לשנת 2024:</h3>
              <ul className="list-disc list-inside">
                <li>תקרת הכנסה שנתית: 293,397 ש"ח</li>
                <li>הפקדה מוכרת לניכוי: עד 13,203 ש"ח בשנה</li>
                <li>סך תקרת הפקדה שנתית: 20,520 ש"ח</li>
                <li>הטבת מס מקסימלית: עד 6,205 ש"ח (בהנחת מס שולי 47%)</li>
              </ul>
            </div>
          </section>

          {/* תנאי משיכה */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">תנאי משיכה</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">משיכה רגילה:</h3>
                <p className="text-gray-600">
                  לאחר 6 שנות חיסכון, ניתן למשוך את הכסף בפטור מלא ממס על הרווחים לכל מטרה.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">משיכה למטרת השתלמות:</h3>
                <p className="text-gray-600">
                  אפשרית לאחר 3 שנים, בכפוף לאישור.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">משיכה בגיל פרישה:</h3>
                <p className="text-gray-600">
                  הקרן הופכת לנזילה לאחר 3 שנים לעמית שחצה את גיל הפרישה.
                </p>
              </div>
            </div>
          </section>

          {/* טיפ מקצועי */}
          <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">טיפ מקצועי 💡</h3>
            <p className="text-gray-700">
              בבחירת קרן השתלמות, מומלץ להתייחס לשלושה פרמטרים עיקריים: תשואות היסטוריות (לטווח של 5 שנים לפחות),
              דמי ניהול, ואיכות השירות. ניתן להשוות בין קרנות באתר משרד האוצר.
            </p>
          </div>

          {/* כפתור למחשבון */}
          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              לחישוב החיסכון העתידי בקרן השתלמות →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}