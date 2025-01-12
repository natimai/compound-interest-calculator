import Head from 'next/head'
import Link from 'next/link'

export default function KupatGemel() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>קופת גמל להשקעה - מדריך מקיף 2024 | DeRibit</title>
        <meta name="description" content="מדריך מקיף לקופת גמל להשקעה - תקרות הפקדה, יתרונות והטבות מס, מסלולי השקעה ודמי ניהול. כל המידע המעודכן לשנת 2024" />
        <meta name="keywords" content="קופת גמל להשקעה, תקרת הפקדה קופת גמל להשקעה 2024, דמי ניהול קופת גמל להשקעה, מסלולי השקעה" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/investment-products" className="text-blue-600 hover:text-blue-800">
            ← חזרה למוצרי השקעה
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">קופת גמל להשקעה</h1>
          <p className="text-xl text-gray-600">אפיק חיסכון נזיל המשלב יתרונות של קופת גמל עם גמישות מלאה במשיכת הכספים</p>
        </header>

        <div className="space-y-8">
          {/* מהי קופת גמל להשקעה */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מהי קופת גמל להשקעה?</h2>
            <p className="text-gray-600 mb-4">
              קופת גמל להשקעה הינה מכשיר חיסכון שהושק ב-2016 המיועד לחיסכון לטווח בינוני וארוך. היא משלבת את היתרונות של קופות גמל יחד עם גמישות מלאה במשיכת הכספים, ללא קנסות או הגבלות.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">חשוב לדעת!</h3>
              <p className="text-gray-600">
                תקרת ההפקדה השנתית לשנת 2024 עומדת על 79,006 ש"ח לכל תעודת זהות.
              </p>
            </div>
          </section>

          {/* יתרונות מרכזיים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">יתרונות מרכזיים</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">נזילות מלאה</h3>
                  <p className="text-gray-600">משיכת כספים אפשרית בכל עת, ללא קנסות או מגבלות תקופה</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">ניהול השקעות מקצועי</h3>
                  <p className="text-gray-600">מגוון מסלולי השקעה בניהול מקצועי ודמי ניהול תחרותיים</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">גמישות בהפקדות</h3>
                  <p className="text-gray-600">אפשרות להפקדות חד פעמיות או חודשיות, עד לתקרה השנתית</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl">👵</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">אופציה לקצבה פטורה ממס</h3>
                  <p className="text-gray-600">אפשרות להמרה לקצבה פטורה ממס בגיל פרישה</p>
                </div>
              </div>
            </div>
          </section>

          {/* מיסוי ודמי ניהול */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מיסוי ודמי ניהול</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">מיסוי:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>מס רווחי הון של 25% בעת משיכה הונית</li>
                  <li>פטור ממס בהמרה לקצבה בגיל פרישה</li>
                  <li>מעבר בין מסלולים ללא אירוע מס</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">דמי ניהול מקסימליים:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>עד 4% מההפקדות</li>
                  <li>עד 1.05% מהצבירה</li>
                  <li>ממוצע בשוק: 0.57% מהצבירה</li>
                </ul>
              </div>
            </div>
          </section>

          {/* למי זה מתאים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">למי זה מתאים?</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 space-x-reverse">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">משפחות המעוניינות לחסוך עבור ילדיהם</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">חוסכים המחפשים גמישות במשיכת הכספים</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">מי שמעוניין להגדיל את החיסכון הפנסיוני העתידי</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">משקיעים המעוניינים בניהול השקעות מקצועי</span>
              </li>
            </ul>
          </section>

          {/* הערות חשובות */}
          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">חשוב לדעת!</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>ניתן לפתוח קופת גמל להשקעה עבור כל בן משפחה</li>
              <li>אפשר לקבל הלוואה בתנאים נוחים כנגד הכספים הצבורים</li>
              <li>ניתן לעבור בין מסלולי השקעה ובין חברות ללא תשלום מס</li>
              <li>כדאי להשוות דמי ניהול בין החברות השונות</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              לחישוב התשואה הצפויה בקופת גמל להשקעה →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}