import Head from 'next/head'
import Link from 'next/link'

export default function SavingsPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>פוליסת חיסכון - מדריך מקיף 2024 | DeRibit</title>
        <meta name="description" content="כל מה שצריך לדעת על פוליסת חיסכון - יתרונות, מסלולי השקעה, ודגשים חשובים. המדריך המלא לחיסכון לטווח בינוני" />
        <meta name="keywords" content="פוליסת חיסכון, פוליסה פיננסית, חיסכון מנוהל, חיסכון לטווח בינוני, השקעה בשוק ההון" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/investment-products" className="text-blue-600 hover:text-blue-800">
            ← חזרה למוצרי השקעה
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">פוליסת חיסכון</h1>
          <p className="text-xl text-gray-600">מכשיר חיסכון מודרני המשלב ניהול השקעות מקצועי עם גמישות מלאה</p>
        </header>

        <div className="space-y-8">
          {/* מהי פוליסת חיסכון */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מהי פוליסת חיסכון?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                פוליסת חיסכון (או פוליסה פיננסית) היא מכשיר השקעה המנוהל על ידי חברות ביטוח, 
                המאפשר חיסכון נזיל לטווח בינוני בניהול מקצועי. למרות שמה, אין מדובר בביטוח 
                אלא במכשיר חיסכון טהור.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">נקודות מפתח:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>ניהול השקעות מקצועי</li>
                  <li>נזילות מלאה ללא קנסות</li>
                  <li>מגוון מסלולי השקעה</li>
                  <li>מתאימה לטווח בינוני וארוך</li>
                </ul>
              </div>
            </div>
          </section>

          {/* יתרונות */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">יתרונות מרכזיים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">גמישות מלאה:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>הפקדות בכל סכום ובכל עת</li>
                  <li>אפשרות למשיכה חופשית</li>
                  <li>שינוי מסלולי השקעה ללא עלות</li>
                  <li>אפשרות למשיכה חודשית קבועה</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">ניהול מקצועי:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>השקעה על ידי מנהלים מנוסים</li>
                  <li>פיזור השקעות אופטימלי</li>
                  <li>גישה לנכסים אלטרנטיביים</li>
                  <li>התאמה לפרופיל הסיכון</li>
                </ul>
              </div>
            </div>
          </section>

          {/* מסלולי השקעה */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מסלולי השקעה</h2>
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                פוליסת חיסכון מציעה מגוון מסלולי השקעה המותאמים לרמות סיכון שונות:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">מסלול סולידי</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>אג"ח ממשלתי</li>
                    <li>מק"מ</li>
                    <li>סיכון נמוך</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">מסלול מאוזן</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>שילוב מניות ואג"ח</li>
                    <li>פיזור רחב</li>
                    <li>סיכון בינוני</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">מסלול מנייתי</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>דגש על מניות</li>
                    <li>פוטנציאל תשואה גבוה</li>
                    <li>סיכון גבוה</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* למי מתאים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">למי מתאימה פוליסת חיסכון?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">מתאימה במיוחד ל:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>חוסכים לטווח בינוני</li>
                  <li>מחפשי ניהול מקצועי</li>
                  <li>מעוניינים בנזילות גבוהה</li>
                  <li>רוצים גיוון בהשקעות</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">דגשים חשובים:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>דמי ניהול עד 1% (2024)</li>
                  <li>אפשרות למשא ומתן על דמי ניהול</li>
                  <li>אין צורך בידע בשוק ההון</li>
                  <li>אין הגבלה על סכומי הפקדה</li>
                </ul>
              </div>
            </div>
          </section>

          {/* טיפים */}
          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">טיפים חשובים לבחירת פוליסת חיסכון:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>השוו דמי ניהול בין חברות שונות</li>
              <li>בחרו מסלול השקעה המתאים לטווח החיסכון שלכם</li>
              <li>התייעצו עם מומחה לגבי פרופיל הסיכון המתאים</li>
              <li>בדקו את ביצועי מסלולי ההשקעה לאורך זמן</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              לחישוב החיסכון הצפוי בפוליסת חיסכון →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}