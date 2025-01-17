import { Clock, ChevronLeft, ChevronRight, Star, TrendingUp, DollarSign, Shield, Target } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson1() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson1');
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
            <span>שיעור 1</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">מבוא להשקעות - למה בכלל להשקיע?</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              15 דקות קריאה
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <div className="prose dark:prose-invert max-w-none">
            {/* מבוא */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-xl mb-8">
              <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0 mb-4">ברוכים הבאים לעולם ההשקעות!</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                בשיעור הראשון נלמד את היסודות החשובים ביותר בעולם ההשקעות. נבין למה חשוב להשקיע, 
                איך הכסף שלנו יכול לעבוד בשבילנו, ומה ההבדל בין חיסכון להשקעה.
              </p>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h5 className="font-bold mb-3">בשיעור זה נלמד:</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0 mb-0">
                  <li>למה חשוב להשקיע את הכסף שלנו</li>
                  <li>ההבדל המהותי בין חיסכון להשקעה</li>
                  <li>השפעת האינפלציה על החסכונות</li>
                  <li>עקרונות בסיסיים בעולם ההשקעות</li>
                  <li>איך להתחיל לחשוב כמשקיע</li>
                  <li>טעויות נפוצות של מתחילים</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">למה חשוב להשקיע?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
                <h4 className="text-green-800 dark:text-green-300 m-0 mb-3">שמירה על ערך הכסף</h4>
                <ul className="mt-0 mb-0 text-sm space-y-2">
                  <li>הגנה מפני אינפלציה</li>
                  <li>שמירה על כוח הקנייה</li>
                  <li>יצירת ביטחון כלכלי</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="text-blue-800 dark:text-blue-300 m-0 mb-3">צמיחה כלכלית</h4>
                <ul className="mt-0 mb-0 text-sm space-y-2">
                  <li>הגדלת ההון לאורך זמן</li>
                  <li>ניצול כוח הריבית דריבית</li>
                  <li>בניית עושר לטווח ארוך</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                <h4 className="text-purple-800 dark:text-purple-300 m-0 mb-3">עצמאות כלכלית</h4>
                <ul className="mt-0 mb-0 text-sm space-y-2">
                  <li>יצירת הכנסה פסיבית</li>
                  <li>הקטנת התלות במשכורת</li>
                  <li>הגשמת יעדים כלכליים</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl my-8">
              <h4 className="text-yellow-800 dark:text-yellow-400 m-0 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                דוגמה מספרית: כוחה של ריבית דריבית
              </h4>
              <div className="space-y-6">
                <p className="mb-4">
                  בואו נראה מה קורה ל-100,000 ₪ לאורך 20 שנה בתרחישים שונים:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">ללא השקעה (רק אינפלציה 3%)</h5>
                    <ul className="text-sm space-y-1">
                      <li>אחרי 5 שנים: 86,000 ₪</li>
                      <li>אחרי 10 שנים: 74,000 ₪</li>
                      <li>אחרי 20 שנה: 55,000 ₪</li>
                      <li className="text-red-600 dark:text-red-400 font-bold">הפסד של 45% מהערך!</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">עם השקעה (תשואה 7% בשנה)</h5>
                    <ul className="text-sm space-y-1">
                      <li>אחרי 5 שנים: 140,000 ₪</li>
                      <li>אחרי 10 שנים: 196,000 ₪</li>
                      <li>אחרי 20 שנה: 386,000 ₪</li>
                      <li className="text-green-600 dark:text-green-400 font-bold">רווח של 286%!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl my-8">
              <h4 className="text-red-800 dark:text-red-400 m-0 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                טעויות נפוצות של מתחילים
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2">מה לא לעשות:</h5>
                  <ul className="text-sm space-y-2">
                    <li>להשקיע בלי ידע מספק</li>
                    <li>להשקיע כספים שנזדקק להם בקרוב</li>
                    <li>לקחת סיכונים לא מחושבים</li>
                    <li>להיסחף אחרי "טיפים חמים"</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2">מה כן לעשות:</h5>
                  <ul className="text-sm space-y-2">
                    <li>ללמוד לפני שמשקיעים</li>
                    <li>להתחיל בהדרגה עם סכומים קטנים</li>
                    <li>לבנות תוכנית השקעה מסודרת</li>
                    <li>להתייעץ עם אנשי מקצוע</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-800 dark:text-green-400 m-0 mb-4">סיכום השיעור</h4>
              <div className="space-y-4">
                <p>
                  למדנו שהשקעה היא לא מותרות אלא הכרח כלכלי בימינו. ראינו את ההשפעה הדרמטית של 
                  אינפלציה על החסכונות שלנו ואת הפוטנציאל העצום של השקעה נבונה לטווח ארוך.
                </p>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">נקודות מפתח להמשך:</h5>
                  <ul className="text-sm space-y-1">
                    <li>השקעה היא דרך לשמור ולהגדיל את ערך הכסף</li>
                    <li>חשוב להתחיל מוקדם ככל האפשר</li>
                    <li>ידע והבנה הם המפתח להשקעה מוצלחת</li>
                    <li>בשיעור הבא נלמד על ההכנות הנדרשות לפני שמתחילים להשקיע</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="flex justify-between items-center mt-8">
          <div></div>
          <Link 
            href="/course/stock-market/lesson2"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg"
          >
            לשיעור הבא: הכנה להשקעה ראשונה
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 