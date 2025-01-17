import { Clock, ChevronLeft, ChevronRight, FileText, Calculator, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson6() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson6');
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
            <span>שיעור 6</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">מיסוי וחוקים בשוק ההון - מדריך למתחילים</h1>
          
          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              20 דקות קריאה
            </span>
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              מידע חיוני
            </span>
          </div>
        </div>

        {/* תוכן השיעור */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <div className="prose dark:prose-invert max-w-none">
            {/* מבוא */}
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mb-8">
              <h4 className="text-blue-600 dark:text-blue-400 m-0 mb-2">מה נלמד בשיעור זה?</h4>
              <ul className="mt-0 mb-0">
                <li>איך משלמים מס על רווחים בשוק ההון</li>
                <li>הטבות מס שחשוב להכיר</li>
                <li>חוקים בסיסיים שצריך לדעת</li>
                <li>טיפים לחיסכון במס באופן חוקי</li>
              </ul>
            </div>

            <h2>מיסוי בשוק ההון - הבסיס</h2>
            <p className="text-lg mb-6">
              כשמרוויחים כסף בשוק ההון, צריך לשלם על זה מס. אבל לא על הכל משלמים אותו דבר,
              וחשוב להכיר את ההבדלים כדי לחסוך כסף.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h4 className="text-gray-900 dark:text-gray-100 m-0 mb-3">מס על רווחי הון</h4>
                <p className="text-sm mb-3">
                  כשמוכרים מניה ברווח, משלמים מס על הרווח
                </p>
                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                  <strong>דוגמה פשוטה:</strong>
                  <ul className="mt-2 mb-0">
                    <li>קניתם מניה ב-1,000 ₪</li>
                    <li>מכרתם ב-1,500 ₪</li>
                    <li>הרווח: 500 ₪</li>
                    <li>המס: 25% מהרווח = 125 ₪</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h4 className="text-gray-900 dark:text-gray-100 m-0 mb-3">מס על דיבידנדים</h4>
                <p className="text-sm mb-3">
                  כשחברה מחלקת דיבידנד, משלמים מס על הסכום שמקבלים
                </p>
                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                  <strong>דוגמה פשוטה:</strong>
                  <ul className="mt-2 mb-0">
                    <li>קיבלתם דיבידנד: 1,000 ₪</li>
                    <li>המס: 25% = 250 ₪</li>
                    <li>נשאר לכם: 750 ₪</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl my-8">
              <h4 className="text-green-800 dark:text-green-400 m-0 mb-2">💰 הטבות מס חשובות</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-xl mb-3">1. קרן השתלמות</h5>
                  <p className="mb-4">
                    אפיק חיסכון מצוין שמשלב הטבות מס משמעותיות עם גמישות במשיכת הכספים.
                    מתאים במיוחד לשכירים ועצמאים שרוצים לחסוך בצורה חכמה.
                  </p>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                    <h6 className="font-bold mb-2">יתרונות עיקריים:</h6>
                    <ul className="mt-2 mb-4">
                      <li>פטור מלא ממס רווחי הון אחרי 6 שנים</li>
                      <li>הפקדות חודשיות של המעסיק (לשכירים) - עד 7.5% מהשכר</li>
                      <li>הפקדות העובד - 2.5% מהשכר מוכרות למס</li>
                      <li>אפשרות למשיכה לכל מטרה אחרי 6 שנים</li>
                      <li>ניהול השקעות מקצועי</li>
                    </ul>
                    <Link 
                      href="/investment-products/keren-hishtalmut"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      למדריך המלא על קרן השתלמות →
                    </Link>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-xl mb-3">2. קופת גמל להשקעה</h5>
                  <p className="mb-4">
                    מסלול השקעה גמיש שמאפשר ליהנות מהטבות מס משמעותיות, במיוחד אם בוחרים
                    במסלול קצבתי בגיל פרישה.
                  </p>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
                    <h6 className="font-bold mb-2">יתרונות עיקריים:</h6>
                    <ul className="mt-2 mb-4">
                      <li>אפשרות להפקיד עד 70,000 ₪ בשנה</li>
                      <li>גמישות מלאה במשיכת הכספים (כהון)</li>
                      <li>פטור ממס רווחי הון במשיכה כקצבה</li>
                      <li>אפשרות להוריש את הכספים</li>
                      <li>ניהול השקעות מקצועי</li>
                    </ul>
                    <Link 
                      href="/investment-products/kupat-gemel"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      למדריך המלא על קופת גמל להשקעה →
                    </Link>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h6 className="font-bold mb-2">💡 חשוב לדעת:</h6>
                  <p>
                    כשמשקיעים דרך פלטפורמות מוסדרות בישראל (כמו בנקים, מיטב דש, אלטשולר שחם, 
                    הראל, בלינק וכו׳), כל נושא המיסוי מטופל באופן אוטומטי. הם מנכים את המס במקור
                    ומעבירים אותו לרשויות, כך שאתם לא צריכים לדאוג לזה.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl my-8">
              <h4 className="text-purple-800 dark:text-purple-400 m-0 mb-2">🎯 איזה מסלול מתאים לי?</h4>
              <div className="space-y-4">
                <p>
                  הבחירה בין קרן השתלמות לקופת גמל להשקעה תלויה במספר גורמים:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-bold">קרן השתלמות מתאימה אם:</h6>
                    <ul className="mt-2 mb-0">
                      <li>אתם שכירים עם הטבות ממעסיק</li>
                      <li>מחפשים חיסכון לטווח של 6 שנים</li>
                      <li>רוצים ליהנות מהטבות מס מיידיות</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold">קופת גמל להשקעה מתאימה אם:</h6>
                    <ul className="mt-2 mb-0">
                      <li>רוצים גמישות במשיכת הכספים</li>
                      <li>מתכננים לטווח ארוך (פנסיה)</li>
                      <li>רוצים אפשרות להפקיד סכומים גדולים</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>חוקים חשובים שצריך להכיר</h2>
            <div className="space-y-6 my-8">
              <div className="border-r-4 border-blue-500 pr-4">
                <h4 className="m-0 mb-2">1. חובת דיווח</h4>
                <p className="mb-3">
                  חייבים לדווח לרשות המסים על רווחים בשוק ההון. 
                  בדרך כלל הברוקר או הבנק עושים את זה בשבילכם.
                </p>
              </div>

              <div className="border-r-4 border-purple-500 pr-4">
                <h4 className="m-0 mb-2">2. קיזוז הפסדים</h4>
                <p className="mb-3">
                  אם הפסדתם במניה אחת, אפשר לקזז את ההפסד מול רווחים במניות אחרות.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <strong>דוגמה:</strong>
                  <ul className="mt-2 mb-0">
                    <li>הפסד במניה א': 1,000 ₪</li>
                    <li>רווח במניה ב': 3,000 ₪</li>
                    <li>משלמים מס רק על 2,000 ₪</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl my-8">
              <h4 className="text-yellow-800 dark:text-yellow-400 m-0 mb-2">💡 טיפים לחיסכון במס</h4>
              <ul className="mt-0 mb-0">
                <li><strong>תכננו מכירות:</strong> לפעמים כדאי לחכות עם מכירה לשנת מס הבאה</li>
                <li><strong>נצלו הטבות:</strong> השתמשו במסלולים עם הטבות מס כמו קופות גמל</li>
                <li><strong>תעדו הכל:</strong> שמרו מסמכים על כל פעולה בשוק ההון</li>
                <li><strong>התייעצו:</strong> במקרים מורכבים, כדאי להתייעץ עם רואה חשבון</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl my-8">
              <h4 className="text-red-800 dark:text-red-400 m-0 mb-2">⚠️ טעויות נפוצות</h4>
              <ul className="mt-0 mb-0">
                <li>לא לשמור תיעוד של פעולות קנייה ומכירה</li>
                <li>לא לדווח על רווחים מחו"ל</li>
                <li>לא לנצל הטבות מס שמגיעות לכם</li>
                <li>לא לקזז הפסדים כשאפשר</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl my-8">
              <h4 className="text-blue-800 dark:text-blue-400 m-0 mb-2">📋 רשימת בדיקה שנתית</h4>
              <ul className="mt-0 mb-0">
                <li>✓ בדקו אם יש לכם הפסדים לקיזוז</li>
                <li>✓ וודאו שניצלתם את כל הטבות המס</li>
                <li>✓ עברו על כל המסמכים והתיעוד</li>
                <li>✓ בחנו אם כדאי לדחות מכירות לשנה הבאה</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/course/stock-market/lesson5"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg"
          >
            <ChevronRight className="w-4 h-4" />
            לשיעור הקודם
          </Link>
          <Link 
            href="/course/stock-market/lesson7"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg"
          >
            לשיעור הבא: פסיכולוגיה של המשקיע
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 