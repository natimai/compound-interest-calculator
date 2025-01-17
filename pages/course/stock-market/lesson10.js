import { Clock, ChevronLeft, ChevronRight, Target, ShoppingCart, AlertTriangle, ArrowUpDown, DollarSign, Timer } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson10() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson10');
    }, 1000);

    return () => clearTimeout(timer);
  }, [markAsCompleted]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>שיעור 10</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">פקודות מסחר וביצוע עסקאות</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              20 דקות קריאה
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              שיעור מעשי
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 sm:p-8">
          <div className="prose dark:prose-invert max-w-none">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-xl mb-8">
              <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0 mb-4">מה נלמד בשיעור זה?</h4>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0 mb-0">
                  <li>סוגי פקודות מסחר בסיסיות</li>
                  <li>איך לבצע קנייה ומכירה</li>
                  <li>מגבלות וכללי מסחר</li>
                  <li>טיפים לביצוע עסקאות</li>
                  <li>הגנות ומגבלות מחיר</li>
                  <li>מעקב אחר ביצועים</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">סוגי פקודות מסחר בסיסיות</h2>
            <div className="space-y-8 my-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <h4 className="text-green-800 dark:text-green-300 text-xl m-0">פקודת שוק (Market Order)</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 rounded-lg space-y-6">
                  <p className="text-lg">
                    פקודת שוק היא הפקודה הפשוטה ביותר - היא אומרת "אני רוצה לקנות/למכור עכשיו, במחיר הטוב ביותר שזמין".
                    זו כמו קנייה בסופרמרקט במחיר שרשום על המדף.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h5 className="font-bold text-lg mb-3">יתרונות:</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>ביצוע מיידי במחיר הטוב ביותר שזמין בשוק</li>
                        <li>הפקודה תתבצע כמעט תמיד (אלא אם אין בכלל מוכרים)</li>
                        <li>מתאימה למניות גדולות ונזילות (כמו בנק לאומי או טבע)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">חסרונות:</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>אין אפשרות לקבוע מחיר - מקבלים את מחיר השוק</li>
                        <li>לא יודעים מראש את המחיר המדויק שנקבל</li>
                        <li>עלולה להיות יקרה במניות עם מחזור מסחר נמוך</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0">פקודת מחיר מוגבל (Limit Order)</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 rounded-lg space-y-6">
                  <p className="text-lg">
                    פקודת לימיט היא כמו להגיד "אני מוכן לקנות, אבל רק עד מחיר מסוים".
                    למשל, אם מניה נסחרת ב-100 ₪, אתם יכולים לשים פקודת לימיט ל-98 ₪.
                    הפקודה תתבצע רק אם המחיר יגיע ל-98 ₪ או פחות.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h5 className="font-bold text-lg mb-3">יתרונות:</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>בקנייה: לא תשלמו יותר מהמחיר שקבעתם</li>
                        <li>במכירה: לא תקבלו פחות מהמחיר שקבעתם</li>
                        <li>שליטה מלאה על מחיר העסקה</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">חסרונות:</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>ייתכן שהפקודה לא תתבצע בכלל</li>
                        <li>עלולים לפספס הזדמנויות אם המחיר לא מגיע בדיוק ליעד</li>
                        <li>דורשת סבלנות וניטור מתמשך</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-4 sm:p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Timer className="w-8 h-8 text-red-600 dark:text-red-400" />
                  <h4 className="text-red-800 dark:text-red-300 text-xl m-0">פקודת הגנה (Stop Loss Order)</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 rounded-lg space-y-6">
                  <p className="text-lg">
                    פקודת סטופ היא כמו "שומר ראש" להשקעה שלכם. היא אומרת "אם המחיר יורד מתחת לרמה מסוימת - מכור מיד
                    כדי להגן עלי מהפסד גדול יותר". למשל, אם קניתם מניה ב-100 ₪, אתם יכולים לשים פקודת סטופ ב-90 ₪
                    כדי להגביל את ההפסד המקסימלי ל-10%.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h5 className="font-bold text-lg mb-3">יתרונות:</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>הגנה אוטומטית מפני הפסדים גדולים</li>
                        <li>עוזרת לשמור על משמעת מסחר</li>
                        <li>מאפשרת לישון טוב בלילה</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">חסרונות:</h5>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>לפעמים מוכרים בירידה זמנית</li>
                        <li>עלולה להתבצע במחיר נמוך מהמתוכנן בתנודתיות גבוהה</li>
                        <li>דורשת קביעת מחיר הגיונית שלא קרובה מדי למחיר השוק</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">איך מבצעים עסקה?</h2>
            <div className="space-y-6 my-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-8 rounded-xl">
                <h4 className="text-purple-800 dark:text-purple-300 text-xl mb-4">שלבי ביצוע עסקה</h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-lg mb-3">1. בחירת נייר ערך:</h5>
                      <ul className="space-y-2">
                        <li>הזנת סמל המסחר</li>
                        <li>בדיקת מחיר נוכחי</li>
                        <li>בדיקת נפח מסחר</li>
                        <li>בדיקת ספר פקודות</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">2. בחירת סוג פקודה:</h5>
                      <ul className="space-y-2">
                        <li>שוק - לביצוע מיידי</li>
                        <li>לימיט - להגבלת מחיר</li>
                        <li>סטופ - להגנה</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">3. הגדרת כמות ומחיר:</h5>
                      <ul className="space-y-2">
                        <li>כמות מניות לקנייה/מכירה</li>
                        <li>מחיר מבוקש (בפקודת לימיט)</li>
                        <li>מחיר הגנה (בפקודת סטופ)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-8 rounded-xl">
                <h4 className="text-indigo-800 dark:text-indigo-300 text-xl mb-4">דוגמאות מעשיות</h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-lg mb-3">קניית מניות בפקודת שוק:</h5>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li>סמל מסחר: לאומי</li>
                          <li>כמות: 100 מניות</li>
                          <li>סוג פקודה: שוק</li>
                          <li>מחיר: מחיר שוק נוכחי</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">קניית מניות בפקודת לימיט:</h5>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li>סמל מסחר: פועלים</li>
                          <li>כמות: 200 מניות</li>
                          <li>סוג פקודה: לימיט</li>
                          <li>מחיר מקסימלי: 2,500 ₪</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 p-8 rounded-xl my-8">
              <h4 className="text-yellow-800 dark:text-yellow-300 text-xl mb-4">טיפים חשובים לביצוע עסקאות</h4>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-lg mb-3">בקנייה:</h5>
                    <ul className="space-y-2">
                      <li>בדקו את עומק השוק</li>
                      <li>שימו לב למרווח הביקוש-היצע</li>
                      <li>הימנעו מקנייה בפתיחת מסחר</li>
                      <li>חלקו פקודות גדולות</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-3">במכירה:</h5>
                    <ul className="space-y-2">
                      <li>תמיד שימו סטופ לוס</li>
                      <li>הגדירו יעדי רווח</li>
                      <li>בדקו עמלות מסחר</li>
                      <li>שמרו על תיעוד מסודר</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-8 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                <h4 className="text-red-800 dark:text-red-300 text-xl m-0">אזהרות חשובות</h4>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <ul className="space-y-3">
                  <li>אל תשתמשו בפקודות שוק במניות דלילות</li>
                  <li>היזהרו מפקודות סטופ בתנודתיות גבוהה</li>
                  <li>בדקו עמלות לפני כל עסקה</li>
                  <li>וודאו שיש מספיק כסף בחשבון</li>
                  <li>שמרו על תיעוד מסודר של כל העסקאות</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          <Link 
            href="/course/stock-market/lesson9"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
            לשיעור הקודם
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/course/stock-market/quiz3"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium transition-all duration-200"
            >
              בוחן לתרגול עצמי
              <ChevronLeft className="w-4 h-4" />
            </Link>
            <Link 
              href="/course/stock-market/summary"
              className="text-gray-500 hover:text-gray-700 text-sm flex items-center justify-center"
            >
              דלג לסיכום הקורס ←
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 