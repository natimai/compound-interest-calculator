import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, TrendingUp, Target, AlertTriangle, Shield } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson5() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson5');
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
            <span>שיעור 5</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">ניהול סיכונים בשוק ההון</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              25 דקות קריאה
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              שיעור חיוני
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
                  <li>מה זה בכלל סיכון בהשקעות ולמה חשוב להבין אותו</li>
                  <li>איך אפשר להקטין סיכונים בתיק ההשקעות</li>
                  <li>טיפים מעשיים להגנה על הכסף שלנו</li>
                  <li>מה עושים כשהשוק יורד</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">מה זה סיכון בהשקעות?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              סיכון בהשקעות הוא הסיכוי שנפסיד חלק מהכסף שהשקענו. בדיוק כמו שבחיים אנחנו מבטחים את הרכב או הדירה, 
              גם בהשקעות חשוב להבין את הסיכונים ולהתגונן מפניהם.
            </p>

            {/* המשל להבנת סיכון */}
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl mb-8">
              <h4 className="text-purple-800 dark:text-purple-300 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                משל להבנת סיכון
              </h4>
              <p className="mb-4">
                דמיינו שיש לכם 100,000 ₪ לחסוך. יש לכם שתי אפשרויות:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold mb-2">אפשרות 1: הכל בבנק</h5>
                  <ul className="mt-0 mb-0">
                    <li>סיכון: נמוך מאוד</li>
                    <li>תשואה: 0.1% בשנה</li>
                    <li>בעיה: הכסף לא גדל</li>
                    <li>האינפלציה "אוכלת" את הכסף</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2">אפשרות 2: הכל במניה אחת</h5>
                  <ul className="mt-0 mb-0">
                    <li>סיכון: גבוה מאוד</li>
                    <li>תשואה: יכולה להיות גבוהה</li>
                    <li>בעיה: אפשר להפסיד הרבה</li>
                    <li>"כל הביצים בסל אחד"</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                הפתרון הנכון הוא בדרך כלל באמצע - לפזר את ההשקעות בצורה חכמה.
              </p>
            </div>

            {/* סוגי סיכונים */}
            <h2 className="text-2xl font-bold mb-6">סוגי סיכונים - איך זה נראה בפועל?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <h4 className="text-blue-800 dark:text-blue-300 text-xl mb-4">סיכוני שוק</h4>
                <p className="mb-3">
                  אלו סיכונים שמשפיעים על כל השוק. למשל:
                </p>
                <ul className="mt-0 mb-0">
                  <li><strong>ריבית:</strong> כשהריבית עולה, מחירי האג"ח בדרך כלל יורדים</li>
                  <li><strong>אינפלציה:</strong> כשהמחירים במשק עולים, ערך הכסף שלנו יורד</li>
                  <li><strong>מלחמה:</strong> יכולה לגרום לירידות בכל השוק</li>
                  <li><strong>מיתון:</strong> האטה כלכלית שמשפיעה על רוב החברות</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                <h4 className="text-green-800 dark:text-green-300 text-xl mb-4">סיכונים ספציפיים</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold">דוגמה 1: חברת נוקיה</h5>
                    <p>
                      פעם הייתה המובילה בשוק הסלולר. אפל הגיעה עם האייפון, 
                      ונוקיה איבדה את השוק. המניה ירדה ב-90%.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold">דוגמה 2: ענף התעופה בקורונה</h5>
                    <p>
                      כשהגיעה הקורונה, חברות התעופה קרסו כי אף אחד לא טס.
                      מי שהשקיע רק בחברות תעופה, הפסיד הרבה מאוד.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* איך מתגוננים */}
            <h2 className="text-2xl font-bold mb-6">איך מתגוננים? כלים פשוטים להגנה על הכסף</h2>
            <div className="space-y-6 my-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <h4 className="text-blue-800 dark:text-blue-300 text-xl mb-4">1. פיזור - הכלל החשוב ביותר</h4>
                <p className="mb-3">
                  במקום להשקיע הכל במקום אחד, מפזרים את הכסף בין כמה השקעות שונות.
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <strong>דוגמה מספרית:</strong><br />
                  100,000 ₪ מפוזרים כך:
                  <ul>
                    <li>40,000 ₪ בקרן מדד ת"א 125</li>
                    <li>30,000 ₪ באג"ח ממשלתי</li>
                    <li>20,000 ₪ בקרן מדד S&P500</li>
                    <li>10,000 ₪ בפיקדון נזיל</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                <h4 className="text-green-800 dark:text-green-300 text-xl mb-4">2. השקעה הדרגתית</h4>
                <p className="mb-3">
                  במקום להשקיע את כל הכסף בבת אחת, משקיעים בהדרגה לאורך זמן.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <strong>דוגמה:</strong><br />
                  יש לכם 60,000 ₪? במקום להשקיע הכל היום:
                  <ul>
                    <li>משקיעים 10,000 ₪ כל חודש</li>
                    <li>במשך 6 חודשים</li>
                    <li>ככה מקטינים את הסיכון של "קניה בשיא"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* טיפים למתחילים */}
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl my-8">
              <h4 className="text-yellow-800 dark:text-yellow-400 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                טיפים חשובים למתחילים
              </h4>
              <ul className="mt-0 mb-0">
                <li><strong>אל תשקיעו כסף שתצטרכו בקרוב</strong> - השקעות הן לטווח ארוך</li>
                <li><strong>התחילו קטן</strong> - אפשר להתחיל גם עם 500 ₪ בחודש</li>
                <li><strong>הבינו מה אתם קונים</strong> - אל תשקיעו במשהו שאתם לא מבינים</li>
                <li><strong>שמרו על רזרבת מזומנים</strong> - תמיד טוב שיש כסף זמין למקרה חירום</li>
              </ul>
            </div>

            {/* מה עושים כשהשוק יורד */}
            <h2 className="text-2xl font-bold mb-6">מה עושים כשהשוק יורד?</h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mb-8">
              <h4 className="text-blue-800 dark:text-blue-300 text-xl mb-4">צעדים מעשיים בזמן ירידות</h4>
              <ol className="mt-0 mb-0 space-y-4">
                <li>
                  <strong>לא נבהלים!</strong> ירידות הן חלק טבעי משוק ההון.
                  השוק תמיד התאושש בסופו של דבר.
                </li>
                <li>
                  <strong>בודקים את הפיזור:</strong> האם התיק שלנו מפוזר מספיק?
                  אם לא, זה הזמן לתקן.
                </li>
                <li>
                  <strong>שוקלים להגדיל השקעות:</strong> אם יש לכם כסף פנוי,
                  ירידות יכולות להיות הזדמנות טובה לקנות "בזול".
                </li>
                <li>
                  <strong>נצמדים לתכנית:</strong> אם אתם משקיעים סכום קבוע כל חודש,
                  המשיכו כרגיל. זו בדיוק המטרה של השקעה הדרגתית.
                </li>
              </ol>
            </div>

            {/* סימני אזהרה */}
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-800 dark:text-red-400 text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                סימני אזהרה - מתי צריך לדאוג?
              </h4>
              <ul className="mt-0 mb-0">
                <li>יותר מ-20% מהכסף במניה אחת</li>
                <li>אתם משקיעים כסף שתצטרכו בקרוב</li>
                <li>אתם לוקחים הלוואות בשביל להשקיע</li>
                <li>אתם לא ישנים בלילה מדאגה להשקעות</li>
                <li>אתם מרגישים שאתם חייבים להרוויח מהר</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/course/stock-market/quiz1"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 rounded-lg"
          >
            <ChevronRight className="w-4 h-4" />
            חזרה לבוחן
          </Link>
          <Link 
            href="/course/stock-market/lesson6"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 rounded-lg"
          >
            לשיעור הבא: מיסוי וחוקים
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
} 