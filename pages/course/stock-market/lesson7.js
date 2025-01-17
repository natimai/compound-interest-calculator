import { Clock, ChevronLeft, ChevronRight, Brain, TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson7() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson7');
    }, 1000);

    return () => clearTimeout(timer);
  }, [markAsCompleted]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* כותרת ופרטי השיעור */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
            <ChevronRight className="w-4 h-4" />
            חזרה לקורס
          </Link>
          <span>•</span>
          <span>שיעור 7</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">פסיכולוגיה של המשקיע - איך להתגבר על הרגשות</h1>
        
        <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            25 דקות קריאה
          </span>
          <span className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
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
                <li>למה רגשות משפיעים על החלטות השקעה</li>
                <li>הטעויות הפסיכולוגיות הנפוצות בשוק ההון</li>
                <li>כלים מעשיים לקבלת החלטות רציונלית</li>
                <li>איך להתמודד עם לחץ ופחד בזמן ירידות</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">למה רגשות הם האויב הגדול ביותר שלנו בשוק ההון?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            רוב המשקיעים מפסידים כסף לא בגלל שהם לא מבינים את השוק, אלא בגלל שהם נותנים לרגשות 
            להוביל את ההחלטות שלהם. בואו נבין למה זה קורה ואיך מתגברים על זה.
          </p>

          {/* רגשות מרכזיים */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl">
              <h4 className="text-red-800 dark:text-red-300 text-xl mb-4">פחד</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                הרגש שגורם לנו למכור בפאניקה כשהשוק יורד
              </p>
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-white">דוגמה מהחיים:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  במרץ 2020, כשהקורונה הגיעה, המון משקיעים מכרו בפאניקה בשפל. 
                  מי שהתגבר על הפחד והחזיק מעמד (או אפילו קנה), הרוויח הרבה כסף בחודשים שאחרי.
                </p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-800 dark:text-green-300 text-xl mb-4">חמדנות</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                הרגש שגורם לנו לקנות בלי חשיבה כשהשוק עולה
              </p>
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-white">דוגמאות מהחיים:</strong>
                <div className="space-y-4 mt-2 text-gray-700 dark:text-gray-300">
                  <div>
                    <h6 className="font-bold">בועת הקריפטו 2021:</h6>
                    <p className="text-sm">
                      המוני משקיעים קנו מטבעות קריפטו מפוקפקים כמו SHIBA INU, SAFEMOON, ו-DOGE 
                      בשיא רק בגלל שראו אחרים "מתעשרים". רוב המטבעות האלה איבדו 90% מערכם.
                    </p>
                    <div className="bg-yellow-50 p-3 rounded mt-2">
                      <p className="text-sm">
                        <strong>חשוב להבדיל:</strong> מטבעות כמו ביטקוין ואיתריום, שיש להם אימוץ 
                        רחב בעולם ושימושים אמיתיים, שונים מהותית ממטבעות ספקולטיביים שנוצרו 
                        רק בשביל "להתעשר מהר".
                      </p>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-bold">מניות מימים:</h6>
                    <p className="text-sm">
                      ב-2021 אנשים קנו מניות כמו GameStop ו-AMC רק בגלל פוסטים ברשתות חברתיות, 
                      בלי להבין את המצב הפיננסי של החברות. רבים קנו בשיא והפסידו הרבה כסף.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* טעויות פסיכולוגיות */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 p-8 rounded-xl my-8">
            <h4 className="text-yellow-800 dark:text-yellow-300 text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              הטעויות הפסיכולוגיות הנפוצות
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-bold">1. עדר הכבשים</h5>
                <p>
                  הנטייה ללכת אחרי ההמון במקום לחשוב בעצמנו. למשל, לקנות מניה רק כי "כולם קונים".
                </p>
              </div>
              <div>
                <h5 className="font-bold">2. הטיית האישור</h5>
                <p>
                  לחפש רק מידע שתומך בדעה שלנו. למשל, להתעלם מאזהרות על מניה שאנחנו אוהבים.
                </p>
              </div>
              <div>
                <h5 className="font-bold">3. אשליית השליטה</h5>
                <p>
                  להאמין שאנחנו יכולים לנבא את השוק. למשל, להיות בטוחים שהשוק יעלה/ירד בקרוב.
                </p>
              </div>
            </div>
          </div>

          {/* כלים מעשיים */}
          <h2 className="text-2xl font-bold mb-6">כלים מעשיים להתמודדות עם רגשות</h2>
          <div className="space-y-6 my-8">
            <div className="border-r-4 border-blue-500 pr-4">
              <h4 className="m-0 mb-2">1. תכנית השקעה כתובה</h4>
              <p className="mb-3">
                כתבו מראש את האסטרטגיה שלכם: מתי קונים, מתי מוכרים, כמה משקיעים.
                היצמדו לתכנית גם כשקשה.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <strong>דוגמה לתכנית:</strong>
                <ul className="mt-2 mb-0">
                  <li>משקיע 1,000 ₪ כל חודש במדד ת"א 125</li>
                  <li>לא מוכר לפני 5 שנים</li>
                  <li>אם מניה יורדת 20%, שוקל להגדיל השקעה</li>
                </ul>
              </div>
            </div>

            <div className="border-r-4 border-green-500 pr-4">
              <h4 className="m-0 mb-2">2. יומן מסחר</h4>
              <p className="mb-3">
                תעדו כל החלטת השקעה: למה קניתם/מכרתם, מה הציפיות, איך הרגשתם.
                זה יעזור לכם ללמוד מטעויות.
              </p>
            </div>

            <div className="border-r-4 border-purple-500 pr-4">
              <h4 className="m-0 mb-2">3. כלל 24 השעות</h4>
              <p className="mb-3">
                לפני כל החלטה משמעותית, חכו 24 שעות. זה נותן זמן לחשיבה רציונלית
                במקום החלטה רגשית.
              </p>
            </div>
          </div>

          {/* רשימת בדיקה */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl my-8">
            <h4 className="text-blue-800 dark:text-blue-300 text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              רשימת בדיקה לפני כל החלטת השקעה
            </h4>
            <ul className="mt-0 mb-0">
              <li>האם ההחלטה תואמת את התכנית שלי?</li>
              <li>האם אני פועל מתוך רגש או היגיון?</li>
              <li>האם בדקתי גם דעות מנוגדות?</li>
              <li>האם הסיכון מתאים ליכולת שלי?</li>
              <li>האם חשבתי על זה 24 שעות?</li>
            </ul>
          </div>

          {/* סימני אזהרה */}
          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl my-8">
            <h4 className="text-red-800 dark:text-red-300 text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              סימני אזהרה - מתי לעצור ולחשוב מחדש
            </h4>
            <ul className="mt-0 mb-0">
              <li>כשאתם מרגישים לחץ לקנות/למכור מהר</li>
              <li>כשאתם לא מצליחים לישון בגלל השקעה</li>
              <li>כשאתם בטוחים ב-100% שמשהו יקרה בשוק</li>
              <li>כשאתם מרגישים קנאה בהצלחות של אחרים</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl my-8">
            <h4 className="text-purple-800 dark:text-purple-300 text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              איך החמדנות משפיעה על ההחלטות שלנו?
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-bold">1. FOMO (Fear Of Missing Out)</h5>
                <p>
                  הפחד "לפספס את הרכבת" גורם לנו לקנות בשיא, כשכולם כבר הרוויחו. 
                  למשל, אנשים שקנו דירות להשקעה ב-2022-2023 במחירי שיא, רק כי פחדו שהמחירים ימשיכו לעלות.
                </p>
              </div>
              <div>
                <h5 className="font-bold">2. אשליית העושר המהיר</h5>
                <p>
                  הרצון להתעשר מהר מוביל להחלטות מסוכנות. למשל, אנשים שלקחו הלוואות כדי 
                  להשקיע במטבעות קריפטו מפוקפקים או באופציות בינאריות.
                </p>
              </div>
              <div>
                <h5 className="font-bold">3. לחץ חברתי</h5>
                <p>
                  כשחברים מספרים על רווחים גדולים, קשה להישאר מהצד. זה מוביל להשקעות 
                  לא מחושבות, כמו קניית מניות "חמות" בלי מחקר מעמיק.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ניווט בין שיעורים */}
      <div className="flex justify-between items-center mt-8">
        <Link 
          href="/course/stock-market/lesson6"
          className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 rounded-lg"
        >
          <ChevronRight className="w-4 h-4" />
          לשיעור הקודם
        </Link>
        <div className="flex gap-4">
          <Link 
            href="/course/stock-market/quiz2"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 rounded-lg"
          >
            בוחן לתרגול עצמי
            <ChevronLeft className="w-4 h-4" />
          </Link>
          <Link 
            href="/course/stock-market/lesson8"
            className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
          >
            דלג לשיעור הבא ←
          </Link>
        </div>
      </div>
    </div>
  );
} 