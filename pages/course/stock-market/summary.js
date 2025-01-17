import Layout from '../../../components/Layout';
import { ChevronRight, BookOpen, Target, AlertTriangle, Rocket, Brain, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import confetti from 'canvas-confetti';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';

// טעינה דינמית של הקונפטי כדי למנוע בעיות SSR
const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function Summary() {
  const { markAsCompleted } = useCourseProgress();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('summary');
    }, 1000);

    return () => clearTimeout(timer);
  }, [markAsCompleted]);

  useEffect(() => {
    // עדכון גודל החלון
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // הגדרת הגודל ההתחלתי
    handleResize();
    window.addEventListener('resize', handleResize);

    // הפעלת הקונפטי בכניסה לדף
    setShowConfetti(true);
    
    // הפעלת אנימציית קונפטי מתמשכת
    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B6B', '#4ECB71', '#FFD93D', '#FF9F43', '#6C5CE7', '#FF78C4']
      });
    }, 3000);

    // הפסקת הקונפטי אחרי 8 שניות
    const timer = setTimeout(() => {
      setShowConfetti(false);
      clearInterval(confettiInterval);
    }, 2500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
      clearInterval(confettiInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={150}
          gravity={0.2}
          colors={['#FF6B6B', '#4ECB71', '#FFD93D', '#FF9F43', '#6C5CE7', '#FF78C4']}
        />
      )}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>סיכום הקורס</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">סיכום קורס שוק ההון למתחילים</h1>
          <p className="text-gray-600 dark:text-gray-400">
            זהו רק הצעד הראשון במסע שלך בעולם ההשקעות
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <div className="prose dark:prose-invert max-w-none">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-8 rounded-xl mb-8">
              <h4 className="text-purple-800 dark:text-purple-300 text-xl m-0 mb-4">כל הכבוד!</h4>
              <div className="space-y-4">
                <p>
                  סיימתם את הקורס הבסיסי לשוק ההון - זה הישג משמעותי! כבר עכשיו אתם יודעים יותר על שוק ההון 
                  מרוב האנשים, ועברתם את המחסום הראשוני של "זה נשמע מסובך מדי".
                </p>
                <p>
                  הבנתם שהשקעות הן לא רק למומחים ואנשי כספים, אלא כלי נגיש לכל מי שמוכן ללמוד ולהשקיע מזמנו. 
                  התגברתם על הפחד הראשוני והצלחתם לפרק את העולם המורכב הזה למושגים ברורים ופשוטים.
                </p>
                <p>
                  עכשיו, כשיש לכם את הבסיס, אתם יכולים להתחיל את המסע האמיתי שלכם בעולם ההשקעות - 
                  בזהירות, בחכמה, ועם הבנה טובה יותר של הסיכונים והסיכויים.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl mb-8 border-2 border-gray-200 dark:border-gray-600">
              <h4 className="text-gray-900 dark:text-gray-100 m-0 mb-4 text-lg font-bold">הצהרה חשובה</h4>
              <div className="space-y-3 text-sm">
                <p>
                  קורס זה נועד למטרות לימודיות והעשרת ידע בלבד. אין לראות בתוכן הקורס המלצות השקעה 
                  או ייעוץ פיננסי מכל סוג שהוא.
                </p>
                <p>
                  כל ההחלטות הפיננסיות שתקבלו הן באחריותכם הבלעדית. מומלץ להתייעץ עם אנשי מקצוע מורשים 
                  (יועצי השקעות, רואי חשבון וכו') לפני ביצוע כל פעולה בשוק ההון.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-xl mb-8">
              <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0 mb-4">מה למדנו בקורס?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-2 text-blue-700 dark:text-blue-400">יסודות שוק ההון</h5>
                  <ul className="text-sm space-y-2">
                    <li>מהן מניות ואיך הן עובדות</li>
                    <li>סוגי ניירות ערך שונים (מניות, אג"ח, קרנות)</li>
                    <li>מבנה הבורסה ואיך היא פועלת</li>
                    <li>מושגי יסוד בהשקעות</li>
                    <li>גורמים המשפיעים על מחירי מניות</li>
                    <li>הבנת דוחות כספיים בסיסיים</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-blue-700 dark:text-blue-400">כלים מעשיים</h5>
                  <ul className="text-sm space-y-2">
                    <li>איך לקנות ולמכור מניות בפועל</li>
                    <li>בניית תיק השקעות מאוזן</li>
                    <li>ניהול סיכונים בסיסי</li>
                    <li>שימוש בפקודות מסחר שונות</li>
                    <li>מעקב אחר ביצועי ההשקעות</li>
                    <li>הבנת עמלות ומיסוי</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl mb-8">
              <h4 className="text-yellow-800 dark:text-yellow-400 m-0 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                חשוב לזכור
              </h4>
              <div className="space-y-4">
                <p>
                  קורס זה מהווה רק את הצעד הראשון בעולם ההשקעות. המידע שנלמד הוא בסיסי ונועד לתת לכם 
                  הבנה ראשונית של עולם שוק ההון. חשוב להבין שהשקעה מוצלחת דורשת:
                </p>
                <ul className="text-sm space-y-2">
                  <li>למידה מתמדת והתעדכנות שוטפת</li>
                  <li>צבירת ניסיון מעשי (רצוי להתחיל בסכומים קטנים)</li>
                  <li>הבנה מעמיקה של הסיכונים</li>
                  <li>פיתוח גישה מחושבת ואחראית</li>
                  <li>יכולת לקבל החלטות רציונליות גם במצבי לחץ</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl mb-8">
              <h4 className="text-red-800 dark:text-red-400 m-0 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                אזהרה חשובה
              </h4>
              <div className="space-y-4">
                <p>
                  השקעה בשוק ההון כרוכה בסיכונים משמעותיים. הידע שרכשתם בקורס זה הוא בסיסי, 
                  ומומלץ:
                </p>
                <ul>
                  <li>להתחיל עם סכומים קטנים</li>
                  <li>להמשיך ללמוד ולהתפתח</li>
                  <li>להתייעץ עם אנשי מקצוע לפני החלטות משמעותיות</li>
                  <li>לא להשקיע כסף שאתם לא יכולים להרשות לעצמכם להפסיד</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl mb-8">
              <h4 className="text-green-800 dark:text-green-400 m-0 mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                צעדים להמשך
              </h4>
              <div className="space-y-4">
                <p>
                  להמשך התפתחות בעולם ההשקעות, אנו ממליצים:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold mb-2">צעדים מעשיים:</h5>
                    <ul className="text-sm space-y-2">
                      <li>פתיחת חשבון דמו לתרגול</li>
                      <li>מעקב יומי אחר חדשות כלכליות</li>
                      <li>ניהול יומן מסחר אישי</li>
                      <li>הצטרפות לקהילות משקיעים</li>
                      <li>השתתפות בוובינרים מקצועיים</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">משאבים מומלצים:</h5>
                    <ul className="text-sm space-y-2">
                      <li>אתר הבורסה לניירות ערך (TASE)</li>
                      <li>אתרי מידע פיננסי כמו Investing.com</li>
                      <li>אפליקציות מסחר מובילות</li>
                      <li>ערוצי חדשות כלכליות</li>
                      <li>פודקאסטים בנושאי השקעות</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mb-8">
              <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                רוצים לבחון את עצמכם?
              </h4>
              <div className="space-y-4">
                <p>
                  הכנו עבורכם בוחן תרגול מיוחד הכולל 5 שאלות אקראיות מכל הנושאים שלמדנו בקורס.
                  בכל פעם שתיכנסו לבוחן, תקבלו שאלות שונות כדי לתרגל את כל החומר שלמדתם.
                </p>
                <div className="flex justify-center">
                  <Link 
                    href="/course/stock-market/final-quiz"
                    className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 
                    dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium
                    transition-all duration-200 transform hover:scale-105"
                  >
                    התחל בוחן תרגול
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl mt-12 border-2 border-gray-200 dark:border-gray-600">
              <h4 className="text-gray-900 dark:text-gray-100 m-0 mb-4 text-lg font-bold">הצהרה משפטית חשובה</h4>
              <div className="space-y-3 text-sm">
                <p>
                  קורס זה נועד למטרות לימודיות והעשרת ידע בלבד. אין לראות בתוכן הקורס המלצות השקעה 
                  או ייעוץ פיננסי מכל סוג שהוא. התכנים מהווים מידע כללי בלבד ואינם מתחשבים בצרכים 
                  ובנתונים הייחודיים של כל אדם.
                </p>
                <p>
                  כל ההחלטות הפיננסיות שתקבלו הן באחריותכם הבלעדית. מומלץ להתייעץ עם אנשי מקצוע מורשים 
                  (יועצי השקעות, רואי חשבון וכו') לפני ביצוע כל פעולה בשוק ההון. אין לראות בקורס זה 
                  תחליף לייעוץ מקצועי המותאם למצבכם האישי.
                </p>
                <p>
                  השקעה בשוק ההון כרוכה בסיכונים משמעותיים, כולל אפשרות לאובדן כספים. חשוב להבין את 
                  כל הסיכונים הכרוכים בהשקעה לפני קבלת החלטות השקעה כלשהן.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/course/stock-market/final-quiz"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg"
          >
            <ChevronRight className="w-4 h-4" />
            חזרה לבוחן
          </Link>
          <Link 
            href="/course"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg"
          >
            <BookOpen className="w-4 h-4" />
            חזרה לרשימת הקורסים
          </Link>
        </div>
      </div>
    </div>
  );
} 