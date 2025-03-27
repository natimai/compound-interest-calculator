import Head from 'next/head'
import Link from 'next/link'
import { PieChart, Info, Scale, BarChart } from 'lucide-react'

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

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <PieChart className="w-8 h-8 text-blue-500" />
            מדריך לבניית תיק השקעות מאוזן
          </h1>

          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mb-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-500" />
              מה תלמדו במדריך הזה?
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-2">• עקרונות תיק השקעות מאוזן</li>
              <li className="flex items-center gap-2">• פיזור נכון של השקעות</li>
              <li className="flex items-center gap-2">• ניהול סיכונים</li>
              <li className="flex items-center gap-2">• התאמה לפרופיל הסיכון</li>
              <li className="flex items-center gap-2">• טיפים מעשיים</li>
            </ul>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Scale className="w-6 h-6 text-green-500" />
              מהו תיק השקעות מאוזן?
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <p className="text-lg leading-relaxed mb-6">
                תיק השקעות מאוזן הוא תיק המשלב בין נכסים שונים במטרה להשיג תשואה אופטימלית תוך שמירה על רמת סיכון מבוקרת.
                האיזון מושג על ידי פיזור נכון של ההשקעות בין אפיקים שונים.
              </p>
              <h3 className="text-xl font-semibold mb-4">עקרונות מרכזיים:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 leading-relaxed">• פיזור בין סוגי נכסים שונים</li>
                <li className="flex items-start gap-2 leading-relaxed">• התאמה לפרופיל הסיכון האישי</li>
                <li className="flex items-start gap-2 leading-relaxed">• ניהול סיכונים מושכל</li>
                <li className="flex items-start gap-2 leading-relaxed">• בקרה ומעקב תקופתי</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BarChart className="w-6 h-6 text-blue-500" />
              פיזור נכסים מומלץ
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">פרופיל סיכון שמרני</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  מתאים למשקיעים המעדיפים סיכון נמוך ויציבות על פני תשואה גבוהה.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• 60% אג"ח ממשלתי</li>
                  <li className="flex items-start gap-2 leading-relaxed">• 20% אג"ח קונצרני</li>
                  <li className="flex items-start gap-2 leading-relaxed">• 15% מניות</li>
                  <li className="flex items-start gap-2 leading-relaxed">• 5% מזומן</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">פרופיל סיכון מאוזן</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  מתאים למשקיעים המחפשים איזון בין סיכון לתשואה.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• 40% מניות</li>
                  <li className="flex items-start gap-2 leading-relaxed">• 30% אג"ח ממשלתי</li>
                  <li className="flex items-start gap-2 leading-relaxed">• 25% אג"ח קונצרני</li>
                  <li className="flex items-start gap-2 leading-relaxed">• 5% מזומן</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mt-12">
            <h2 className="text-xl font-semibold mb-6">סיכום</h2>
            <p className="leading-relaxed text-lg">
              בניית תיק השקעות מאוזן היא צעד חשוב בדרך להשגת יעדים פיננסיים. חשוב להתאים את התיק
              לפרופיל הסיכון האישי, לפזר נכון את ההשקעות, ולבצע מעקב ובקרה תקופתיים.
            </p>
          </div>
        </article>

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
  )
}