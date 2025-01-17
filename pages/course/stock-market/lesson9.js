import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, TrendingUp, Target, AlertTriangle, LineChart, BarChart, ArrowUpDown } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson9() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson9');
    }, 1000);

    return () => clearTimeout(timer);
  }, [markAsCompleted]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* כותרת ופרטי השיעור */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>שיעור 9</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">אסטרטגיות מסחר מתקדמות</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              30 דקות קריאה
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              שיעור מתקדם
            </span>
          </div>
        </div>

        {/* תוכן השיעור */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <div className="prose dark:prose-invert max-w-none">
            {/* מבוא */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-xl mb-8">
              <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0 mb-4">מה נלמד בשיעור זה?</h4>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0 mb-0">
                  <li>אסטרטגיות מסחר מתקדמות</li>
                  <li>שימוש בכלים טכניים</li>
                  <li>ניהול פוזיציות מורכב</li>
                  <li>זיהוי מגמות וכניסה נכונה לשוק</li>
                  <li>ניתוח טכני מתקדם</li>
                  <li>אסטרטגיות יציאה חכמות</li>
                </ul>
              </div>
            </div>

            {/* מושגי יסוד */}
            <h2 className="text-2xl font-bold mb-6">מושגי יסוד בניתוח טכני</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <h4 className="text-green-800 dark:text-green-300 text-xl m-0">תמיכה והתנגדות</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <ul className="mt-0 mb-0 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>רמת תמיכה: רצפת מחיר</li>
                    <li>רמת התנגדות: תקרת מחיר</li>
                    <li>פריצה: שבירת התנגדות</li>
                    <li>שבירה: ירידה מתמיכה</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0">מחזורי מסחר</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <ul className="mt-0 mb-0 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>נפח מסחר גבוה: עניין רב</li>
                    <li>נפח נמוך: חוסר עניין</li>
                    <li>זינוק בנפח: אירוע חשוב</li>
                    <li>ממוצע נפח: מדד השוואה</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowUpDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                  <h4 className="text-red-800 dark:text-red-300 text-xl m-0">מגמות שוק</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <ul className="mt-0 mb-0 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>מגמה עולה: שיאים עולים</li>
                    <li>מגמה יורדת: שפלים יורדים</li>
                    <li>מגמה צידית: טווח מסחר</li>
                    <li>שינוי מגמה: נקודת מפנה</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* אסטרטגיות מסחר */}
            <h2 className="text-2xl font-bold mb-6">אסטרטגיות מסחר מתקדמות</h2>
            <div className="space-y-8 my-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-8 rounded-xl">
                <h4 className="text-purple-800 dark:text-purple-300 text-xl mb-4">1. מסחר על פי מגמות</h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-lg mb-3">עקרונות בסיסיים:</h5>
                      <ul className="space-y-2">
                        <li>זיהוי כיוון המגמה הראשית</li>
                        <li>מסחר בכיוון המגמה בלבד</li>
                        <li>חיפוש נקודות כניסה</li>
                        <li>שימוש בממוצעים נעים</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">כללי כניסה:</h5>
                      <ul className="space-y-2">
                        <li>פריצת התנגדות במגמה עולה</li>
                        <li>שבירת תמיכה במגמה יורדת</li>
                        <li>אישור מחזור מסחר</li>
                        <li>הגדרת סטופ לוס ברורה</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-8 rounded-xl">
                <h4 className="text-indigo-800 dark:text-indigo-300 text-xl mb-4">2. מסחר בתיקונים</h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-lg mb-3">מתי לחפש תיקונים?</h5>
                      <ul className="space-y-2">
                        <li>לאחר מהלך חד בשוק</li>
                        <li>כשהמחיר רחוק מממוצעים</li>
                        <li>בנקודות מפתח טכניות</li>
                        <li>כשיש דיברגנס במתנדים</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">רמות תיקון נפוצות:</h5>
                      <ul className="space-y-2">
                        <li>תיקון 38.2% - חלש</li>
                        <li>תיקון 50% - בינוני</li>
                        <li>תיקון 61.8% - חזק</li>
                        <li>שימוש בפיבונאצ'י</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 p-8 rounded-xl">
                <h4 className="text-yellow-800 dark:text-yellow-300 text-xl mb-4">3. מסחר בפריצות</h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-lg mb-3">סימני פריצה אמיתית:</h5>
                      <ul className="space-y-2">
                        <li>מחזור מסחר גבוה</li>
                        <li>פריצה של לפחות 3%</li>
                        <li>סגירה מעל/מתחת לרמה</li>
                        <li>אישור ביום המסחר הבא</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">ניהול פוזיציה:</h5>
                      <ul className="space-y-2">
                        <li>כניסה מיידית בפריצה</li>
                        <li>כניסה בריטסט</li>
                        <li>סטופ מתחת לנקודת פריצה</li>
                        <li>יעד: 1.5-2 מהסטופ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* טיפים והמלצות */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-8 rounded-xl my-8">
              <h4 className="text-green-800 dark:text-green-300 text-xl mb-4">טיפים למסחר מתקדם</h4>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-lg mb-3">ניהול סיכונים:</h5>
                    <ul className="space-y-2">
                      <li>לא יותר מ-2% סיכון לעסקה</li>
                      <li>לא יותר מ-6% סיכון כולל</li>
                      <li>תמיד עם סטופ לוס</li>
                      <li>פיזור בין מספר מניות</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-3">שגיאות נפוצות:</h5>
                    <ul className="space-y-2">
                      <li>מסחר נגד המגמה</li>
                      <li>כניסה ללא אישור</li>
                      <li>הגדלת פוזיציה בהפסד</li>
                      <li>העדר תכנית מסחר</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* אזהרות */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-8 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                <h4 className="text-red-800 dark:text-red-300 text-xl m-0">אזהרות חשובות</h4>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <ul className="space-y-3">
                  <li>ניתוח טכני הוא כלי עזר, לא נבואה</li>
                  <li>אל תסתמכו רק על ניתוח טכני</li>
                  <li>התחילו עם סכומים קטנים</li>
                  <li>אל תשתמשו במינוף בהתחלה</li>
                  <li>תמיד שמרו על משמעת מסחר</li>
                  <li>למדו מטעויות ותעדו אותן</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/course/stock-market/lesson8"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
            לשיעור הקודם
          </Link>
          <Link 
            href="/course/stock-market/lesson10"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium transition-all duration-200"
          >
            לשיעור הבא: פקודות מסחר וביצוע עסקאות
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
} 