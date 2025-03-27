import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { TrendingUp, Info, ArrowRight, Target, DollarSign, Lightbulb, Shield, Clock, Home, Building } from 'lucide-react';

export default function StockMarketBasicsGuide() {
  return (
    <>
      <NextSeo
        title="מדריך השקעות בשוק ההון למתחילים | דריבית"
        description="מדריך מקיף להשקעות בשוק ההון - כולל הבנת יסודות השוק, סוגי השקעות, ניהול סיכונים, והמלצות מעשיות למתחילים"
        canonical="https://www.deribit.co.il/guides/stock-market-basics"
        openGraph={{
          title: "מדריך השקעות בשוק ההון למתחילים | דריבית",
          description: "מדריך מקיף להשקעות בשוק ההון - כולל הבנת יסודות השוק, סוגי השקעות, ניהול סיכונים, והמלצות מעשיות למתחילים",
          url: "https://www.deribit.co.il/guides/stock-market-basics",
          site_name: "דריבית"
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/guides" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ArrowRight className="w-4 h-4" />
              חזרה למדריכים
            </Link>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              מדריך השקעות בשוק ההון למתחילים
            </h1>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mb-12">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                מה תלמדו במדריך הזה?
              </h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-2">• היסודות של השקעות בשוק ההון</li>
                <li className="flex items-center gap-2">• סוגי השקעות נדל"ן שונים</li>
                <li className="flex items-center gap-2">• מימון פיננסי והשקעות עם משכנתא</li>
                <li className="flex items-center gap-2">• מיסוי והטבות מס</li>
                <li className="flex items-center gap-2">• טיפים מעשיים למתחילים</li>
              </ul>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Home className="w-6 h-6 text-green-500" />
                למה להשקיע בשוק ההון?
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  השקעות בשוק ההון נחשבות לאחת מההשקעות הבטוחות והמשתלמות ביותר לאורך זמן. 
                  הן מציעות מספר יתרונות משמעותיים:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• הכנסה חודשית קבועה משכירות</li>
                  <li className="flex items-start gap-2 leading-relaxed">• הערכה של ערך הנכס לאורך זמן</li>
                  <li className="flex items-start gap-2 leading-relaxed">• הגנה מפני אינפלציה</li>
                  <li className="flex items-start gap-2 leading-relaxed">• מימון פיננסי באמצעות משכנתא</li>
                  <li className="flex items-start gap-2 leading-relaxed">• הטבות מס משמעותיות</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building className="w-6 h-6 text-blue-500" />
                סוגי השקעות בשוק ההון
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">מניות</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    מניות הן חלק מהבעלות בחברה ציבורית. כאשר אתם קונים מניה, אתם הופכים לשותפים בחברה.
                  </p>
                  <h4 className="font-semibold mb-3">יתרונות:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 leading-relaxed">• פוטנציאל לתשואה גבוהה</li>
                    <li className="flex items-start gap-2 leading-relaxed">• נזילות גבוהה</li>
                    <li className="flex items-start gap-2 leading-relaxed">• דיבידנדים</li>
                    <li className="flex items-start gap-2 leading-relaxed">• זכויות הצבעה</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">אגרות חוב</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    אגרות חוב הן הלוואות שניתנות לחברות או לממשלה. המשקיע מקבל ריבית קבועה ואת הקרן בסוף התקופה.
                  </p>
                  <h4 className="font-semibold mb-3">יתרונות:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 leading-relaxed">• הכנסה קבועה</li>
                    <li className="flex items-start gap-2 leading-relaxed">• סיכון נמוך יותר</li>
                    <li className="flex items-start gap-2 leading-relaxed">• הגנה מפני אינפלציה</li>
                    <li className="flex items-start gap-2 leading-relaxed">• יציבות</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mt-12">
              <h2 className="text-xl font-semibold mb-6">סיכום</h2>
              <p className="leading-relaxed text-lg">
                השקעה בשוק ההון היא דרך מצוינת לבנות עושר לטווח ארוך. חשוב להבין את הסיכונים 
                והסיכויים, לבחור את סוג ההשקעה המתאים לכם, ולנהל את ההשקעה בצורה נכונה. 
                התחילו בקטן, למדו מהניסיון, והתייעצו עם אנשי מקצוע לפני קבלת החלטות משמעותיות.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 