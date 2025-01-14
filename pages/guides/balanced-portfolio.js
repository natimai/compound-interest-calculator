import Head from 'next/head'
import Link from 'next/link'

export default function BalancedPortfolioGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>בניית תיק השקעות מאוזן - מדריך מקיף | DeRibit</title>
        <meta name="description" content="מדריך מקיף לבניית תיק השקעות מאוזן - הבנת עקרונות הפיזור, ניהול סיכונים, והתאמה אישית" />
        <meta name="keywords" content="תיק השקעות, פיזור השקעות, ניהול סיכונים, אסטרטגיית השקעות, תיק מניות, תיק מאוזן" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/guides" className="text-blue-600 hover:text-blue-800">
            ← חזרה למדריכים
          </Link>
        </nav>

        <header className="mb-12">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">💼</span>
            <h1 className="text-4xl font-bold text-gray-900">בניית תיק השקעות מאוזן</h1>
          </div>
          <p className="text-xl text-gray-600">מדריך מקיף להבנת עקרונות הפיזור וניהול הסיכונים בבניית תיק השקעות</p>
        </header>

        <div className="space-y-8">
          {/* מבוא */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">מבוא לתיק השקעות מאוזן</h2>
            <p className="text-gray-600 mb-4">
              תיק השקעות מאוזן הוא כלי להשגת יעדים פיננסיים תוך שמירה על רמת סיכון מבוקרת. 
              האיזון בתיק מושג באמצעות פיזור נכון בין סוגי נכסים שונים, התאמה לפרופיל הסיכון האישי, 
              והתחשבות באופק ההשקעה.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">עקרונות מפתח:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>פיזור סיכונים בין נכסים שונים</li>
                <li>התאמה לפרופיל הסיכון האישי</li>
                <li>התחשבות באופק ההשקעה</li>
                <li>ניהול עלויות ומיסוי</li>
              </ul>
            </div>
          </section>

          {/* פרופיל סיכון */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">הגדרת פרופיל סיכון</h2>
            <p className="text-gray-600 mb-4">
              פרופיל הסיכון הוא הבסיס לבניית תיק ההשקעות. הוא מושפע ממספר גורמים מרכזיים:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">גורמים אישיים:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>גיל המשקיע</li>
                  <li>מצב משפחתי וכלכלי</li>
                  <li>הכנסה שוטפת ויציבות תעסוקתית</li>
                  <li>ידע וניסיון בהשקעות</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">גורמי השקעה:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>אופק ההשקעה המתוכנן</li>
                  <li>מטרות ההשקעה</li>
                  <li>צורך בנזילות</li>
                  <li>סובלנות לתנודתיות</li>
                </ul>
              </div>
            </div>
          </section>

          {/* סוגי נכסים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">סוגי נכסים בתיק ההשקעות</h2>
            <p className="text-gray-600 mb-4">
              תיק השקעות מאוזן מורכב ממגוון נכסים בעלי מאפייני סיכון-תשואה שונים:
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2">מניות:</h3>
                <p className="text-gray-700">פוטנציאל תשואה גבוה לצד סיכון גבוה</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>מניות גדולות (Large Cap)</li>
                  <li>מניות צמיחה וערך</li>
                  <li>מניות בינלאומיות</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-bold mb-2">אגרות חוב:</h3>
                <p className="text-gray-700">הכנסה קבועה יחסית עם סיכון מתון</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>אג"ח ממשלתיות</li>
                  <li>אג"ח קונצרניות</li>
                  <li>אג"ח צמודות מדד</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold mb-2">נכסים אלטרנטיביים:</h3>
                <p className="text-gray-700">גיוון והגנה מפני תנודתיות</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>נדל"ן מניב</li>
                  <li>סחורות</li>
                  <li>קרנות גידור</li>
                </ul>
              </div>
            </div>
          </section>

          {/* אסטרטגיות פיזור */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">אסטרטגיות פיזור מתקדמות</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">פיזור גיאוגרפי:</h3>
                <p className="text-gray-600">
                  פיזור ההשקעות בין שווקים שונים מקטין את התלות בכלכלה מקומית:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                  <li>30-40% שוק מקומי</li>
                  <li>30-40% שווקים מפותחים</li>
                  <li>10-20% שווקים מתעוררים</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">פיזור ענפי:</h3>
                <p className="text-gray-600">
                  השקעה במגוון ענפי משק מקטינה את הסיכון הענפי:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                  <li>טכנולוגיה ותקשורת</li>
                  <li>פיננסים</li>
                  <li>בריאות</li>
                  <li>תעשיה ותשתיות</li>
                  <li>צריכה</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg">
                <h3 className="font-bold mb-2">חשוב לזכור:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>לא לרכז יותר מ-5% מהתיק בנכס בודד</li>
                  <li>לשמור על יחס סיכון-תשואה מתאים</li>
                  <li>להתאים את הפיזור לגודל התיק</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ניהול ומעקב */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ניהול ומעקב אחר התיק</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">מעקב שוטף:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>בדיקת ביצועים חודשית</li>
                  <li>השוואה למדדי ייחוס</li>
                  <li>מעקב אחר דמי ניהול ועמלות</li>
                  <li>בחינת התפלגות הנכסים</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">איזון מחדש:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>ביצוע איזון מחדש פעם ברבעון</li>
                  <li>התאמה לשינויים בשוק</li>
                  <li>עדכון בהתאם לשינויי חיים</li>
                </ul>
              </div>
            </div>
          </section>

          {/* טיפים מתקדמים */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">טיפים מתקדמים לניהול תיק השקעות</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg"></div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2">אסטרטגיית כניסה</h3>
                <p className="text-gray-600">השתמשו בממוצע עלות לאורך זמן (DCA) להקטנת סיכוני העיתוי</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold mb-2">ניהול מיסוי</h3>
                <p className="text-gray-600">נצלו אפיקי השקעה עם הטבות מס כמו קרנות השתלמות וקופות גמל</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold mb-2">הגנה מפני אינפלציה</h3>
                <p className="text-gray-600">שלבו נכסים צמודי מדד ונכסים ריאליים בתיק</p>
              </div>
            </div>
          </section>

          {/* דוגמאות לתיקי השקעות */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">דוגמאות לתיקי השקעות לפי פרופיל סיכון</h2>
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2">תיק שמרני (סיכון נמוך)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>60% אג"ח ממשלתיות</li>
                  <li>20% אג"ח קונצרניות</li>
                  <li>15% מניות</li>
                  <li>5% מזומן</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-bold mb-2">תיק מאוזן (סיכון בינוני)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>40% מניות</li>
                  <li>30% אג"ח ממשלתיות</li>
                  <li>20% אג"ח קונצרניות</li>
                  <li>10% נכסים אלטרנטיביים</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-bold mb-2">תיק אגרסיבי (סיכון גבוה)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>70% מניות</li>
                  <li>15% אג"ח קונצרניות</li>
                  <li>10% נכסים אלטרנטיביים</li>
                  <li>5% מזומן</li>
                </ul>
              </div>
            </div>
          </section>

          {/* סיכום והמלצות */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">סיכום והמלצות</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                בניית תיק השקעות מאוזן היא תהליך מתמשך שדורש תכנון, מעקב והתאמות. זכרו את העקרונות הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>התאימו את התיק לצרכים והמטרות האישיות שלכם</li>
                <li>פזרו את ההשקעות בין נכסים, ענפים ואזורים גיאוגרפיים</li>
                <li>בצעו מעקב ואיזון מחדש באופן קבוע</li>
                <li>התייעצו עם אנשי מקצוע בעת הצורך</li>
                <li>הימנעו מהחלטות רגשיות והישארו נאמנים לאסטרטגיה</li>
              </ul>
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