import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, PieChart, TrendingUp, Shield, Target, DollarSign, BarChart, LineChart } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson8() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson8');
    }, 1000);

    return () => clearTimeout(timer);
  }, [markAsCompleted]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* כותרת ופרטי השיעור */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>שיעור 8</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">בניית תיק השקעות מאוזן - המדריך המלא</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              30 דקות קריאה
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              שיעור מעשי
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
                  <li>איך לבנות תיק השקעות מאוזן</li>
                  <li>התאמת התיק לפרופיל הסיכון האישי</li>
                  <li>פיזור נכון בין אפיקי השקעה</li>
                  <li>כלים לניהול ומעקב אחר התיק</li>
                  <li>אסטרטגיות השקעה מתקדמות</li>
                  <li>טיפים לבחירת מניות איכותיות</li>
                </ul>
              </div>
            </div>

            {/* פרופילי סיכון */}
            <h2 className="text-2xl font-bold mb-6">שלב 1: הגדרת פרופיל הסיכון</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <h4 className="text-green-800 dark:text-green-300 text-xl m-0">פרופיל שמרני</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <ul className="mt-0 mb-0 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>סיכון נמוך</li>
                    <li>תנודתיות מינימלית</li>
                    <li>מתאים לגיל +60</li>
                    <li>טווח קצר-בינוני</li>
                    <li>50-60% אג"ח</li>
                    <li>20-30% מניות</li>
                    <li>10-20% מזומן</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <PieChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0">פרופיל מאוזן</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <ul className="mt-0 mb-0 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>סיכון בינוני</li>
                    <li>תנודתיות מתונה</li>
                    <li>מתאים לגיל 40-60</li>
                    <li>טווח בינוני-ארוך</li>
                    <li>40-50% מניות</li>
                    <li>30-40% אג"ח</li>
                    <li>10-20% נכסים אלטרנטיביים</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600 dark:text-red-400" />
                  <h4 className="text-red-800 dark:text-red-300 text-xl m-0">פרופיל אגרסיבי</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <ul className="mt-0 mb-0 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>סיכון גבוה</li>
                    <li>תנודתיות גבוהה</li>
                    <li>מתאים לגיל 25-40</li>
                    <li>טווח ארוך</li>
                    <li>70-80% מניות</li>
                    <li>10-20% אג"ח</li>
                    <li>5-10% מזומן</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* שאלון התאמה */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-8 rounded-xl my-8">
              <h4 className="text-purple-800 dark:text-purple-300 text-xl mb-4">איך לבחור את הפרופיל המתאים?</h4>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    ענו על השאלות הבאות כדי להבין איזה פרופיל מתאים לכם:
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>1. מה טווח ההשקעה שלכם?</li>
                    <li>2. האם אתם זקוקים להכנסה שוטפת מההשקעות?</li>
                    <li>3. איך תגיבו לירידה של 20% בתיק?</li>
                    <li>4. מה היחס בין ההשקעה להון הכולל שלכם?</li>
                    <li>5. האם יש לכם ניסיון קודם בהשקעות?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* דוגמאות לתיקי השקעות */}
            <h2 className="text-2xl font-bold mb-6">שלב 2: דוגמאות מעשיות לבניית תיק</h2>
            <div className="space-y-8 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0">תיק מניות ישראלי - דוגמה ל-50,000 ₪</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-lg mb-3">הרכב התיק:</h5>
                      <ul className="space-y-2">
                        <li>
                          <span className="font-medium">מניות בלו-צ'יפ (40%):</span>
                          <ul className="text-sm mt-1 space-y-1">
                            <li>לאומי - 5,000 ₪</li>
                            <li>דיסקונט - 5,000 ₪</li>
                            <li>פועלים - 5,000 ₪</li>
                            <li>עזריאלי - 5,000 ₪</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">מניות צמיחה (30%):</span>
                          <ul className="text-sm mt-1 space-y-1">
                            <li>נובה - 5,000 ₪</li>
                            <li>סלקום - 5,000 ₪</li>
                            <li>אופקו - 5,000 ₪</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">מניות דיבידנד (20%):</span>
                          <ul className="text-sm mt-1 space-y-1">
                            <li>בזק - 5,000 ₪</li>
                            <li>מליסרון - 5,000 ₪</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">מזומן (10%):</span>
                          <ul className="text-sm mt-1 space-y-1">
                            <li>5,000 ₪ לקניית הזדמנויות</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">שיקולים מרכזיים:</h5>
                      <ul className="space-y-2">
                        <li>פיזור בין סקטורים שונים</li>
                        <li>שילוב בין צמיחה ודיבידנדים</li>
                        <li>חברות עם מוניטין חזק</li>
                        <li>נזילות גבוהה</li>
                        <li>דירוג אשראי גבוה</li>
                      </ul>
                      <div className="mt-6">
                        <h5 className="font-bold text-lg mb-3">תשואה צפויה:</h5>
                        <ul className="space-y-2">
                          <li>תשואת דיבידנד: 3-4%</li>
                          <li>פוטנציאל צמיחה: 8-12%</li>
                          <li>סה"כ תשואה שנתית: 11-16%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* תיק גלובלי */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-6">
                  <LineChart className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <h4 className="text-green-800 dark:text-green-300 text-xl m-0">תיק גלובלי מאוזן - דוגמה ל-100,000 ₪</h4>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-lg mb-3">הרכב התיק:</h5>
                      <ul className="space-y-4">
                        <li>
                          <span className="font-medium">מניות ארה"ב (40%):</span>
                          <ul className="text-sm mt-1 space-y-1">
                            <li>Apple - 8,000 ₪</li>
                            <li>Microsoft - 8,000 ₪</li>
                            <li>Amazon - 8,000 ₪</li>
                            <li>Alphabet - 8,000 ₪</li>
                            <li>Nvidia - 8,000 ₪</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">אג"ח (30%):</span>
                          <ul className="text-sm mt-1 space-y-1">
                            <li>אג"ח ממשלתי - 10,000 ₪</li>
                            <li>אג"ח קונצרני - 10,000 ₪</li>
                            <li>אג"ח חו"ל - 10,000 ₪</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">קרנות סל (20%):</span>
                          <ul className="text-sm mt-1 space-y-1">
                            <li>VanEck Semiconductor ETF - 5,000 ₪</li>
                            <li>iShares Clean Energy ETF - 5,000 ₪</li>
                            <li>Global X Cloud Computing ETF - 5,000 ₪</li>
                            <li>ARK Innovation ETF - 5,000 ₪</li>
                          </ul>
                        </li>
                        <li>
                          <span className="font-medium">מזומן (10%):</span>
                          <p className="text-sm mt-1">10,000 ₪ להזדמנויות</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-3">אסטרטגיית השקעה:</h5>
                      <ul className="space-y-2">
                        <li>פיזור גלובלי</li>
                        <li>חשיפה למגמות צמיחה</li>
                        <li>איזון בין סיכון לתשואה</li>
                        <li>גידור מטבעי</li>
                      </ul>
                      <div className="mt-6">
                        <h5 className="font-bold text-lg mb-3">ניתוח סיכונים:</h5>
                        <ul className="space-y-2">
                          <li>חשיפה מטבעית: 60%</li>
                          <li>תנודתיות צפויה: בינונית</li>
                          <li>דירוג סיכון: 7/10</li>
                        </ul>
                      </div>
                      <div className="mt-6">
                        <h5 className="font-bold text-lg mb-3">תשואות צפויות:</h5>
                        <ul className="space-y-2">
                          <li>מניות: 15-20%</li>
                          <li>אג"ח: 4-6%</li>
                          <li>קרנות: 12-18%</li>
                          <li>תשואה כוללת: 12-15%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* טיפים לבחירת מניות */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 p-8 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-6">
                <BarChart className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                <h4 className="text-yellow-800 dark:text-yellow-300 text-xl m-0">טיפים לבחירת מניות איכותיות</h4>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-lg mb-3">ניתוח פיננסי:</h5>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium">P/E - יחס מחיר לרווח:</span>
                        <ul className="text-sm mt-1">
                          <li>מתחת ל-20 למניות צמיחה</li>
                          <li>מתחת ל-15 למניות ערך</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">ROE - תשואה על ההון:</span>
                        <ul className="text-sm mt-1">
                          <li>מעל 15% לחברות טכנולוגיה</li>
                          <li>מעל 10% לחברות מסורתיות</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">צמיחת הכנסות:</span>
                        <ul className="text-sm mt-1">
                          <li>מעל 20% למניות צמיחה</li>
                          <li>מעל 10% למניות ערך</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-3">ניתוח איכותי:</h5>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium">יתרון תחרותי:</span>
                        <ul className="text-sm mt-1">
                          <li>מותג חזק</li>
                          <li>פטנטים ייחודיים</li>
                          <li>נתח שוק משמעותי</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">איכות ניהול:</span>
                        <ul className="text-sm mt-1">
                          <li>ניסיון ההנהלה</li>
                          <li>שקיפות בדיווחים</li>
                          <li>היסטוריית ביצועים</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">מגמות שוק:</span>
                        <ul className="text-sm mt-1">
                          <li>צמיחת הענף</li>
                          <li>רגולציה תומכת</li>
                          <li>ביקוש יציב</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* מעקב ובקרה */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-8 rounded-xl my-8">
              <h4 className="text-indigo-800 dark:text-indigo-300 text-xl mb-4">מעקב ובקרה</h4>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-lg mb-3">תדירות המעקב</h5>
                    <ul className="space-y-2">
                      <li>בדיקה יומית: מחירי מניות</li>
                      <li>בדיקה שבועית: ביצועי תיק</li>
                      <li>בדיקה חודשית: איזון מחדש</li>
                      <li>בדיקה רבעונית: עדכון אסטרטגיה</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-3">מדדי ביצוע</h5>
                    <ul className="space-y-2">
                      <li>תשואה מול מדדי ייחוס</li>
                      <li>יחס שארפ</li>
                      <li>מקסימום דרודאון</li>
                      <li>ביטא של התיק</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/course/stock-market/lesson7"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
            לשיעור הקודם
          </Link>
          <Link 
            href="/course/stock-market/lesson9"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium transition-all duration-200"
          >
            לשיעור הבא: מיסוי ודיווח
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 