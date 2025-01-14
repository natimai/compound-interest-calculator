import Head from 'next/head'
import Link from 'next/link'

export default function MortgageGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>מדריך חישוב משכנתא | DeRibit</title>
        <meta name="description" content="מדריך מקיף להבנת חישובי משכנתא - סוגי מסלולים, חישוב החזרים חודשיים ובניית תמהיל נכון" />
        <meta name="keywords" content="משכנתא, חישוב משכנתא, מסלולי משכנתא, תמהיל משכנתא, החזר חודשי" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/guides" className="text-blue-600 hover:text-blue-800">
            ← חזרה למדריכים
          </Link>
        </nav>

        <header className="mb-12">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">🏠</span>
            <h1 className="text-4xl font-bold text-gray-900">חישוב משכנתא - המדריך המלא</h1>
          </div>
          <p className="text-xl text-gray-600">כל מה שצריך לדעת על חישובי משכנתא, מסלולים והחזרים חודשיים</p>
        </header>

        <div className="space-y-8">
          {/* סוגי מסלולי משכנתא */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">סוגי מסלולי משכנתא</h2>
            <p className="text-gray-600 mb-4">
              בישראל קיימים מספר מסלולי משכנתא עיקריים, כאשר לכל אחד מאפיינים והתאמה שונה לצרכי הלווים.
              בחירת המסלול המתאים היא קריטית להצלחת המשכנתא לאורך זמן.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">פריים</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>ריבית משתנה הצמודה לריבית בנק ישראל</li>
                  <li>שינויים בהחזר החודשי בהתאם לשינויי הריבית</li>
                  <li>מתאים לתקופות של ריבית נמוכה</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">ריבית קבועה צמודה</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>ריבית קבועה לאורך כל התקופה</li>
                  <li>הקרן וההחזרים צמודים למדד</li>
                  <li>מספק ודאות בריבית לצד הגנה מאינפלציה</li>
                </ul>
              </div>
            </div>
          </section>

          {/* חישוב החזר חודשי */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">חישוב החזר חודשי</h2>
            <p className="text-gray-600 mb-4">
              החזר חודשי מושפע ממספר גורמים מרכזיים: סכום ההלוואה, תקופת ההחזר, 
              הריבית ומסלול ההלוואה. חשוב להבין כיצד כל גורם משפיע על ההחזר החודשי.
            </p>
            <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg">
              <h3 className="font-bold mb-2">נוסחת החישוב הבסיסית:</h3>
              <p className="text-gray-700">
                החזר חודשי = [סכום ההלוואה × (ריבית שנתית/12)] / [1 - (1 + ריבית שנתית/12)^(-מספר תשלומים)]
              </p>
              <p className="mt-2 text-sm text-gray-600">
                * הנוסחה משתנה בהתאם למסלול ולתנאי ההצמדה
              </p>
            </div>
          </section>

          {/* בניית תמהיל נכון */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">בניית תמהיל נכון</h2>
            <p className="text-gray-600 mb-4">
              תמהיל משכנתא מאוזן משלב מספר מסלולים שונים כדי לפזר סיכונים ולהתאים 
              לצרכים האישיים של הלווים.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-indigo-50 rounded-lg">
                <h3 className="font-bold mb-2">תמהיל שמרני</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>33% קבועה צמודה</li>
                  <li>33% קבועה לא צמודה</li>
                  <li>33% פריים</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold mb-2">תמהיל אגרסיבי</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>60% פריים</li>
                  <li>20% קבועה צמודה</li>
                  <li>20% קבועה לא צמודה</li>
                </ul>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h3 className="font-bold mb-2">תמהיל מאוזן</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>40% פריים</li>
                  <li>30% קבועה צמודה</li>
                  <li>30% קבועה לא צמודה</li>
                </ul>
              </div>
            </div>
          </section>

          {/* טיפים חשובים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">טיפים חשובים לבחירת משכנתא</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">לפני לקיחת המשכנתא:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>בדקו את היכולת ההחזר החודשית שלכם</li>
                  <li>השוו הצעות ממספר בנקים</li>
                  <li>הבינו את התנאים וההגבלות של כל מסלול</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">במהלך תקופת המשכנתא:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>עקבו אחר שינויי ריבית והזדמנויות למחזור</li>
                  <li>שמרו על תשלומים בזמן</li>
                  <li>בחנו אפשרות לפירעון מוקדם כשיש אפשרות</li>
                </ul>
              </div>
            </div>
          </section>

          {/* כפתור למחשבון */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
            >
              נסו גם את מחשבון ריבית דריבית →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}