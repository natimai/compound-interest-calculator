import Head from 'next/head'
import Link from 'next/link'

export default function CompoundInterestGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>מדריך חישוב ריבית דריבית | DeRibit</title>
        <meta name="description" content="מדריך מקיף להבנת חישובי ריבית דריבית - איך עובדת ריבית דריבית, השפעת דמי ניהול, וחישובי תשואה" />
        <meta name="keywords" content="ריבית דריבית, חישוב ריבית דריבית, דמי ניהול, תשואה מצטברת, חיסכון ארוך טווח" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/guides" className="text-blue-600 hover:text-blue-800">
            ← חזרה למדריכים
          </Link>
        </nav>

        <header className="mb-12">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">📈</span>
            <h1 className="text-4xl font-bold text-gray-900">ריבית דריבית - המדריך המלא</h1>
          </div>
          <p className="text-xl text-gray-600">כל מה שצריך לדעת על חישובי ריבית דריבית והשפעתה על החיסכון ארוך הטווח</p>
        </header>

        <div className="space-y-8">
          {/* מהי ריבית דריבית */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מהי ריבית דריבית?</h2>
            <p className="text-gray-600 mb-4">
              ריבית דריבית היא תהליך שבו הרווחים מהשקעה מתווספים לקרן ההשקעה המקורית, 
              וכך בתקופה הבאה מרוויחים ריבית גם על הרווחים שהצטברו. 
              זהו אחד העקרונות החשובים ביותר בעולם ההשקעות והחיסכון ארוך הטווח.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">דוגמה פשוטה:</h3>
              <p className="text-gray-700">
                אם השקעתם 1,000 ₪ בתשואה של 10% בשנה:
                <br />
                - בשנה הראשונה: 1,000 ₪ + (10% × 1,000) = 1,100 ₪
                <br />
                - בשנה השנייה: 1,100 ₪ + (10% × 1,100) = 1,210 ₪
                <br />
                - בשנה השלישית: 1,210 ₪ + (10% × 1,210) = 1,331 ₪
              </p>
            </div>
          </section>

          {/* גורמים המשפיעים על ריבית דריבית */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">גורמים המשפיעים על ריבית דריבית</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">זמן ההשקעה:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>ככל שתקופת ההשקעה ארוכה יותר, אפקט הריבית דריבית משמעותי יותר</li>
                  <li>השפעת הזמן על התשואה היא אקספוננציאלית</li>
                  <li>חשיבות ההתחלה המוקדמת של החיסכון</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">אחוז התשואה:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>תשואה גבוהה יותר מגבירה את אפקט הריבית דריבית</li>
                  <li>חשיבות בחירת אפיק ההשקעה המתאים</li>
                  <li>הקשר בין סיכון לתשואה</li>
                </ul>
              </div>
            </div>
          </section>

          {/* השפעת דמי ניהול */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">השפעת דמי ניהול</h2>
            <p className="text-gray-600 mb-4">
              דמי ניהול הם גורם משמעותי שמשפיע על התשואה המצטברת לאורך זמן. 
              הם נגבים באופן שוטף מהחיסכון ולכן יש להם השפעה מצטברת על התשואה הסופית.
            </p>
            <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg">
              <h3 className="font-bold mb-2">חשוב לדעת:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>הבדל של 0.5% בדמי ניהול יכול להוביל להפרש של עשרות אחוזים בחיסכון הסופי</li>
                <li>יש לשקלל את דמי הניהול בחישוב התשואה נטו</li>
                <li>ניתן לנהל משא ומתן על גובה דמי הניהול</li>
              </ul>
            </div>
          </section>

          {/* טיפים לחיסכון יעיל */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">טיפים לחיסכון יעיל</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold mb-2">התחלה מוקדמת</h3>
                <p className="text-gray-600">התחילו לחסוך מוקדם ככל האפשר כדי למקסם את אפקט הריבית דריבית</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2">הפקדות קבועות</h3>
                <p className="text-gray-600">הפקידו סכום קבוע מדי חודש, גם אם קטן</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold mb-2">מעקב ובקרה</h3>
                <p className="text-gray-600">בדקו את התשואות ודמי הניהול באופן קבוע</p>
              </div>
            </div>
          </section>

          {/* כפתור למחשבון */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
            >
              לחישוב התשואה שלך במחשבון ריבית דריבית →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}