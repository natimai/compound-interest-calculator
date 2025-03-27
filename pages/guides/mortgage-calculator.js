import Head from 'next/head'
import Link from 'next/link'
import { Home, Info, Calculator, LineChart } from 'lucide-react'

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

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Home className="w-8 h-8 text-blue-500" />
            מדריך לחישוב משכנתא
          </h1>

          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mb-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-500" />
              מה תלמדו במדריך הזה?
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-2">• איך לחשב משכנתא</li>
              <li className="flex items-center gap-2">• סוגי מסלולי משכנתא</li>
              <li className="flex items-center gap-2">• טיפים לבחירת משכנתא</li>
              <li className="flex items-center gap-2">• חישוב החזר חודשי</li>
              <li className="flex items-center gap-2">• הטבות ומענקים</li>
            </ul>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-green-500" />
              איך מחשבים משכנתא?
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <p className="text-lg leading-relaxed mb-6">
                חישוב משכנתא מורכב ממספר פרמטרים חשובים שיש לקחת בחשבון:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 leading-relaxed">• סכום ההלוואה</li>
                <li className="flex items-start gap-2 leading-relaxed">• תקופת ההחזר</li>
                <li className="flex items-start gap-2 leading-relaxed">• שיעור הריבית</li>
                <li className="flex items-start gap-2 leading-relaxed">• סוג ההצמדה</li>
                <li className="flex items-start gap-2 leading-relaxed">• מסלול ההלוואה</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <LineChart className="w-6 h-6 text-blue-500" />
              מסלולי משכנתא
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">ריבית קבועה</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  מסלול עם ריבית קבועה לאורך כל תקופת ההלוואה.
                </p>
                <h4 className="font-semibold mb-3">יתרונות:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• ודאות בהחזר החודשי</li>
                  <li className="flex items-start gap-2 leading-relaxed">• הגנה מפני עליית ריבית</li>
                  <li className="flex items-start gap-2 leading-relaxed">• תכנון פיננסי קל יותר</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">ריבית משתנה</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  מסלול עם ריבית שמשתנה בהתאם לתנאי השוק.
                </p>
                <h4 className="font-semibold mb-3">יתרונות:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• ריבית התחלתית נמוכה יותר</li>
                  <li className="flex items-start gap-2 leading-relaxed">• אפשרות ליהנות מירידת ריבית</li>
                  <li className="flex items-start gap-2 leading-relaxed">• גמישות בתנאי ההלוואה</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mt-12">
            <h2 className="text-xl font-semibold mb-6">סיכום</h2>
            <p className="leading-relaxed text-lg">
              בחירת משכנתא היא החלטה משמעותית שדורשת תכנון מדוקדק. חשוב להבין את כל המסלולים
              והאפשרויות, לחשב את ההחזר החודשי המתאים ליכולת ההחזר שלכם, ולהתייעץ עם אנשי מקצוע
              לפני קבלת החלטה.
            </p>
          </div>
        </article>

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
  )
}