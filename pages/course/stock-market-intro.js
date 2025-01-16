import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';

export default function StockMarketIntro() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              שיעור 1.1
            </p>
            <h1 className="text-3xl font-bold mb-4">מהו שוק ההון?</h1>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>משך השיעור: 5 דקות</span>
            </div>
          </div>
        </div>
        
        {/* תוכן השיעור */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <div className="prose dark:prose-invert max-w-3xl mx-auto">
            <p className="lead text-xl mb-6 text-gray-600 dark:text-gray-300">
              שוק ההון הוא המקום בו נפגשים משקיעים וחברות, ובו מתבצעת פעילות של קנייה ומכירה של ניירות ערך.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">למה חשוב להכיר את שוק ההון?</h2>
            <p>
              הכרת שוק ההון היא צעד ראשון והכרחי בדרך להשקעה מוצלחת. שוק ההון מאפשר:
            </p>
            <ul className="space-y-2 my-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                הזדמנויות להשקעה וצמיחה כלכלית
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                אפשרות לבנות תיק השקעות מגוון
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                דרך להתמודד עם אינפלציה
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                בניית עושר לטווח ארוך
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">מי הם השחקנים בשוק ההון?</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">משקיעים פרטיים</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  אנשים פרטיים שמשקיעים את כספם בשוק ההון
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">משקיעים מוסדיים</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  קרנות פנסיה, קופות גמל וחברות ביטוח
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">חברות ציבוריות</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  חברות שמניותיהן נסחרות בבורסה
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">ברוקרים</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  מתווכים שמבצעים את פעולות המסחר
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl my-8 border border-blue-100 dark:border-blue-800">
              <h3 className="text-blue-800 dark:text-blue-300 font-semibold mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span>
                נקודה חשובה
              </h3>
              <p className="text-blue-900 dark:text-blue-100 mb-0">
                המחירים בשוק ההון נקבעים על פי היצע וביקוש. ככל שיש יותר קונים, המחיר עולה, 
                וככל שיש יותר מוכרים, המחיר יורד.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">סיכום</h2>
            <p>
              בשיעור זה למדנו על המושגים הבסיסיים בשוק ההון והבנו את חשיבותו. 
              בשיעור הבא נלמד על המושגים המרכזיים שכל משקיע צריך להכיר.
            </p>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 mt-8">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <div className="invisible">
              {/* שומר על המרווח */}
            </div>
            <Link 
              href="/course/basic-terms"
              className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-5 py-3 rounded-xl transition-all hover:scale-105"
            >
              <span className="text-sm md:text-base font-medium text-right">
                <span className="block text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-0.5">הבא</span>
                מושגי יסוד
              </span>
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 