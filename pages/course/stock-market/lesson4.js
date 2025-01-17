import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, Calculator, LineChart, Target, PieChart } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson4() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson4');
    }, 1000);

    return () => clearTimeout(timer);
  }, [markAsCompleted]);

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* כותרת ופרטי השיעור */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>שיעור 4</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">אסטרטגיות השקעה מנצחות בשוק ההון</h1>
          
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
                  <li>אסטרטגיות השקעה מובילות בשוק ההון</li>
                  <li>התאמת אסטרטגיה לפרופיל האישי</li>
                  <li>בניית תיק השקעות מאוזן</li>
                  <li>טכניקות מתקדמות לניהול תיק השקעות</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">אסטרטגיות השקעה מובילות</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <h4 className="text-blue-800 dark:text-blue-300 text-xl mb-4">השקעת ערך (Value Investing)</h4>
                <p className="text-sm mb-3">
                  חיפוש מניות הנסחרות במחיר נמוך ביחס לשווין האמיתי
                </p>
                <h5 className="font-bold mb-2">עקרונות מרכזיים:</h5>
                <ul className="mt-0 mb-0">
                  <li>בדיקת יחסים פיננסיים (P/E, P/B)</li>
                  <li>ניתוח דוחות כספיים</li>
                  <li>מרווח ביטחון</li>
                  <li>השקעה לטווח ארוך</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h4 className="text-gray-900 dark:text-gray-100 m-0 mb-3">השקעת צמיחה (Growth Investing)</h4>
                <p className="text-sm mb-3">
                  חיפוש חברות עם פוטנציאל צמיחה משמעותי
                </p>
                <h5 className="font-bold mb-2">עקרונות מרכזיים:</h5>
                <ul className="mt-0 mb-0">
                  <li>קצב צמיחת הכנסות</li>
                  <li>יתרון תחרותי</li>
                  <li>שוק פוטנציאלי גדול</li>
                  <li>הנהלה חזקה</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl my-8">
              <h4 className="text-yellow-800 dark:text-yellow-400 m-0 mb-2">💡 דוגמה מעשית</h4>
              <p className="mb-4">
                השוואה בין שתי גישות השקעה עם 100,000 ₪:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold mb-2">השקעת ערך:</h5>
                  <ul className="mt-0 mb-0">
                    <li>40% במניות דיבידנד</li>
                    <li>30% באג"ח קונצרני</li>
                    <li>20% במניות ערך</li>
                    <li>10% במזומן</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2">השקעת צמיחה:</h5>
                  <ul className="mt-0 mb-0">
                    <li>60% במניות טכנולוגיה</li>
                    <li>20% במניות צמיחה</li>
                    <li>10% באג"ח ממשלתי</li>
                    <li>10% במזומן</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>אסטרטגיות מתקדמות</h2>
            <div className="space-y-6 my-8">
              <div className="border-r-4 border-blue-500 pr-4">
                <h4 className="m-0 mb-2">השקעה ממוצעת (Dollar Cost Averaging)</h4>
                <p className="m-0">
                  השקעת סכום קבוע בתדירות קבועה, ללא קשר למצב השוק. 
                  מקטינה את סיכון התזמון ומייצרת משמעת השקעות.
                </p>
                <div className="mt-3 text-sm">
                  <strong>דוגמה:</strong> השקעת 2,000 ₪ בכל חודש במדד ת"א 35
                </div>
              </div>
              <div className="border-r-4 border-green-500 pr-4">
                <h4 className="m-0 mb-2">השקעה מחדש של דיבידנדים</h4>
                <p className="m-0">
                  השקעה חוזרת של כל הדיבידנדים שמתקבלים. מנצלת את כוח הריבית דריבית 
                  להגדלת התשואה לטווח ארוך.
                </p>
                <div className="mt-3 text-sm">
                  <strong>דוגמה:</strong> 10,000 ₪ עם תשואת דיבידנד של 4% = 400 ₪ להשקעה חוזרת
                </div>
              </div>
            </div>

            <h2>בניית תיק השקעות מאוזן</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h4 className="text-gray-900 dark:text-gray-100 m-0 mb-3">תיק שמרני</h4>
                <PieChart className="w-16 h-16 mb-4 text-blue-500" />
                <ul className="mt-0 mb-0">
                  <li>60% אג"ח ממשלתי</li>
                  <li>20% מניות דיבידנד</li>
                  <li>10% אג"ח קונצרני</li>
                  <li>10% מזומן</li>
                  <li className="mt-4 text-sm">תשואה צפויה: 4-6%</li>
                  <li className="text-sm">סיכון: נמוך</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h4 className="text-gray-900 dark:text-gray-100 m-0 mb-3">תיק מאוזן</h4>
                <PieChart className="w-16 h-16 mb-4 text-green-500" />
                <ul className="mt-0 mb-0">
                  <li>50% מניות מגוונות</li>
                  <li>30% אג"ח</li>
                  <li>10% נדל"ן</li>
                  <li>10% מזומן</li>
                  <li className="mt-4 text-sm">תשואה צפויה: 6-9%</li>
                  <li className="text-sm">סיכון: בינוני</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h4 className="text-gray-900 dark:text-gray-100 m-0 mb-3">תיק אגרסיבי</h4>
                <PieChart className="w-16 h-16 mb-4 text-red-500" />
                <ul className="mt-0 mb-0">
                  <li>80% מניות</li>
                  <li>15% אג"ח</li>
                  <li>5% מזומן</li>
                  <li className="mt-4 text-sm">תשואה צפויה: 8-12%</li>
                  <li className="text-sm">סיכון: גבוה</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl my-8">
              <h4 className="text-red-800 dark:text-red-400 m-0 mb-2">⚠️ נקודות חשובות</h4>
              <ul className="mt-0 mb-0">
                <li>התאימו את האסטרטגיה לאופי האישי שלכם</li>
                <li>אל תעקבו אחרי טרנדים חולפים</li>
                <li>הימנעו משינויים תכופים באסטרטגיה</li>
                <li>בצעו מעקב ובקרה תקופתיים</li>
              </ul>
            </div>

            <h2>טכניקות מתקדמות לניהול תיק</h2>
            <div className="space-y-4">
              <div>
                <h4>1. איזון מחדש תקופתי</h4>
                <p>
                  ביצוע התאמות בתיק כל רבעון או חצי שנה כדי לשמור על הקצאת הנכסים הרצויה.
                  חשוב במיוחד אחרי תנודות משמעותיות בשוק.
                </p>
              </div>
              <div>
                <h4>2. ניהול סיכונים אקטיבי</h4>
                <p>
                  קביעת כללים ברורים לקניה ומכירה, שימוש בהוראות הגנה (Stop Loss),
                  ומעקב אחר רמת הסיכון הכוללת בתיק.
                </p>
              </div>
              <div>
                <h4>3. ניצול הזדמנויות שוק</h4>
                <p>
                  שמירת רזרבת מזומן לניצול הזדמנויות כמו תיקונים בשוק או הנפקות מעניינות.
                  חשוב לפעול על פי תכנית מוגדרת מראש.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/course/stock-market/lesson3"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg"
          >
            <ChevronRight className="w-4 h-4" />
            לשיעור הקודם
          </Link>
          <div className="flex gap-4">
            <Link 
              href="/course/stock-market/quiz1"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg"
            >
              בוחן לתרגול עצמי
              <ChevronLeft className="w-4 h-4" />
            </Link>
            <Link 
              href="/course/stock-market/lesson5"
              className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
            >
              דלג לשיעור הבא ←
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 