import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, Star, Book, DollarSign, LineChart, Target } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson3() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson3');
    }, 1000);

    return () => clearTimeout(timer);
  }, [markAsCompleted]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* כותרת ופרטי השיעור */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>שיעור 3</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">מושגי יסוד בשוק ההון</h1>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              25 דקות קריאה
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              שיעור בסיסי
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              חיוני למתחילים
            </span>
          </div>
        </div>

        {/* תוכן השיעור */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 sm:p-8">
          <div className="prose dark:prose-invert max-w-none">
            {/* מבוא */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 sm:p-8 rounded-xl mb-6 sm:mb-8">
              <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0 mb-4">מושגי יסוד בשוק ההון</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                בשיעור זה נלמד את המושגים הבסיסיים ביותר בשוק ההון. הבנת מושגים אלו 
                חיונית להמשך הלמידה ולהבנת עולם ההשקעות.
              </p>
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 rounded-xl">
                <h5 className="font-bold mb-3">בשיעור זה נלמד:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-0 mb-0 text-base">
                  <li>מהי מניה ומה היא מייצגת</li>
                  <li>סוגי ניירות ערך שונים</li>
                  <li>מדדים מרכזיים בבורסה</li>
                  <li>מושגי תשואה וסיכון</li>
                  <li>סחירות ונזילות</li>
                  <li>דיבידנדים וריבית</li>
                </ul>
              </div>
            </div>

            {/* מניות */}
            <h2 className="text-2xl font-bold mb-6">מניות - להיות שותף בחברה</h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-blue-800 dark:text-blue-300 text-xl mb-4">מהי מניה?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    מניה היא חלק קטן מהבעלות בחברה. כשאתם קונים מניה, אתם הופכים לשותפים בחברה 
                    ונהנים מהצלחתה (או סובלים מכישלונותיה).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">סוגי מניות</h5>
                    <ul className="text-sm space-y-2">
                      <li>מניות רגילות - נותנות זכות הצבעה ודיבידנד</li>
                      <li>מניות בכורה - עדיפות בדיבידנד, בד"כ ללא הצבעה</li>
                      <li>מניות הנהלה - זכויות הצבעה מיוחדות</li>
                    </ul>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">איך מרוויחים ממניות?</h5>
                    <ul className="text-sm space-y-2">
                      <li>עליית ערך המניה (רווחי הון)</li>
                      <li>חלוקת דיבידנדים</li>
                      <li>הטבות והנפקת זכויות</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* מדדים וקרנות סל */}
            <h2 className="text-2xl font-bold mb-6">מדדי מניות וקרנות סל</h2>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-purple-800 dark:text-purple-300 text-xl mb-4">איך להשקיע במדדים?</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    אי אפשר להשקיע ישירות במדד, אבל אפשר להשקיע בקרנות שעוקבות אחריו. יש שני סוגים עיקריים:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                      <h5 className="font-bold mb-3">קרנות סל (ETF)</h5>
                      <ul className="text-sm space-y-2">
                        <li>נסחרות בבורסה כמו מניה</li>
                        <li>דמי ניהול נמוכים (0.03%-0.5%)</li>
                        <li>גמישות במסחר</li>
                        <li>יתרון מיסויי - רק במימוש</li>
                      </ul>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                      <h5 className="font-bold mb-3">קרנות נאמנות מחקות</h5>
                      <ul className="text-sm space-y-2">
                        <li>נסחרות דרך הבנק/ברוקר</li>
                        <li>דמי ניהול גבוהים יותר (1%-2%)</li>
                        <li>פחות גמישות במסחר</li>
                        <li>מיסוי שוטף על רווחים</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">ת"א 35</h5>
                    <p className="text-sm mb-3">
                      המדד המוביל בבורסה הישראלית, כולל את 35 החברות הגדולות ביותר.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <h6 className="font-bold text-sm mb-2">קרנות סל מומלצות:</h6>
                      <ul className="text-sm space-y-1">
                        <li>תכלית ת"א 35 (4D)</li>
                        <li>קסם ת"א 35 (TASE35)</li>
                        <li>דמי ניהול: 0.1%-0.2%</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">S&P 500</h5>
                    <p className="text-sm mb-3">
                      מדד מוביל בארה"ב, עוקב אחר 500 החברות הגדולות.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <h6 className="font-bold text-sm mb-2">קרנות סל מובילות:</h6>
                      <ul className="text-sm space-y-1">
                        <li>SPY - הוותיקה והנזילה ביותר</li>
                        <li>VOO - דמי ניהול נמוכים (0.03%)</li>
                        <li>IVV - מתחרה ב-SPY</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">נאסד"ק 100</h5>
                    <p className="text-sm mb-3">
                      מדד טכנולוגי מוביל, מכיל את 100 חברות הטכנולוגיה הגדולות.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      <h6 className="font-bold text-sm mb-2">קרנות סל פופולריות:</h6>
                      <ul className="text-sm space-y-1">
                        <li>QQQ - הקרן המובילה</li>
                        <li>QQQM - דמי ניהול נמוכים יותר</li>
                        <li>דמי ניהול: 0.15%-0.2%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-4">
                  <h5 className="font-bold flex items-center gap-2 mb-3">
                    <span className="text-xl">💡</span>
                    טיפ חשוב
                  </h5>
                  <p className="text-sm">
                    בהשקעה במדדים, דמי הניהול הם גורם קריטי לטווח ארוך. הפרש של 0.5% בדמי ניהול 
                    יכול להסתכם בעשרות אלפי שקלים על פני 20 שנה. לכן, עדיף לבחור קרנות סל עם דמי ניהול נמוכים.
                  </p>
                </div>
              </div>
            </div>

            {/* אגרות חוב */}
            <h2 className="text-2xl font-bold mb-6">אגרות חוב - הלוואה מאורגנת</h2>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-green-800 dark:text-green-300 text-xl mb-4">מהי אגרת חוב?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    אגרת חוב היא הלוואה שאתם נותנים לחברה או לממשלה. בתמורה, אתם מקבלים ריבית 
                    קבועה והחזר של הקרן בתאריך הפדיון.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">סוגי אג"ח</h5>
                    <ul className="text-sm space-y-2">
                      <li>אג"ח ממשלתי - הכי בטוח, תשואה נמוכה</li>
                      <li>אג"ח קונצרני - של חברות, סיכון ותשואה גבוהים יותר</li>
                      <li>אג"ח להמרה - ניתן להמיר למניות</li>
                    </ul>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">מאפיינים חשובים</h5>
                    <ul className="text-sm space-y-2">
                      <li>ריבית - התשלום התקופתי</li>
                      <li>מח"מ - משך חיים ממוצע</li>
                      <li>דירוג - רמת הסיכון של האג"ח</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* טיפים חשובים */}
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl mb-8">
              <h4 className="text-yellow-800 dark:text-yellow-400 m-0 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                טיפים למתחילים
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2">איך להתחיל?</h5>
                  <ul className="text-sm space-y-2">
                    <li>התחילו עם מדדים רחבים</li>
                    <li>פזרו את ההשקעות</li>
                    <li>השקיעו לטווח ארוך</li>
                    <li>למדו לפני כל השקעה</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2">סימני אזהרה</h5>
                  <ul className="text-sm space-y-2">
                    <li>הבטחות לתשואות גבוהות מדי</li>
                    <li>לחץ לקבלת החלטות מהירות</li>
                    <li>חוסר שקיפות במידע</li>
                    <li>עמלות גבוהות מהמקובל</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* סיכום */}
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-800 dark:text-green-400 m-0 mb-4">סיכום השיעור</h4>
              <div className="space-y-4">
                <p>
                  למדנו את המושגים הבסיסיים בשוק ההון, מה ההבדל בין מניות לאג"ח, ואיך המדדים 
                  השונים עוזרים לנו להבין את המגמות בשוק.
                </p>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">נקודות מפתח:</h5>
                  <ul className="text-sm space-y-1">
                    <li>מניה = בעלות בחברה</li>
                    <li>אג"ח = הלוואה לחברה/ממשלה</li>
                    <li>מדדים = מדד לביצועי השוק</li>
                    <li>פיזור = הקטנת סיכון</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* סרגל התקדמות נייד */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 md:hidden">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">שיעור 3 מתוך 10</span>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/course/stock-market/lesson2"
                className="button-secondary text-sm py-2"
              >
                <ChevronRight className="w-4 h-4" />
                לשיעור הקודם
              </Link>
              <Link 
                href="/course/stock-market/lesson4"
                className="button-secondary text-sm py-2"
              >
                לשיעור הבא
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="flex justify-between items-center mt-8 mb-20 md:mb-8">
          <Link 
            href="/course/stock-market/lesson2"
            className="button-secondary hidden md:flex items-center gap-2"
          >
            <ChevronRight className="w-5 h-5" />
            לשיעור הקודם
          </Link>
          <Link 
            href="/course/stock-market/lesson4"
            className="button-secondary hidden md:flex items-center gap-2"
          >
            לשיעור הבא
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
} 