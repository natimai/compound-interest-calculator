import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, Star, Shield, Wallet, LineChart, Target } from 'lucide-react';
import Link from 'next/link';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';
import { useEffect } from 'react';

export default function Lesson2() {
  const { markAsCompleted } = useCourseProgress();

  useEffect(() => {
    const timer = setTimeout(() => {
      markAsCompleted('lesson2');
    }, 1000);

    return () => clearTimeout(timer);
  }, [markAsCompleted]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* כותרת ופרטי השיעור */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>שיעור 2</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">הכנות לפני שמתחילים להשקיע</h1>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              20 דקות קריאה
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 sm:p-8">
          <div className="prose dark:prose-invert max-w-none">
            {/* מבוא */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 sm:p-8 rounded-xl mb-6 sm:mb-8">
              <h4 className="text-blue-800 dark:text-blue-300 text-xl m-0 mb-4">לפני שמתחילים להשקיע</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                בשיעור זה נלמד על ההכנות החשובות שצריך לעשות לפני שמתחילים להשקיע.
                נבין איך לבנות תקציב, לנהל את הכסף בצורה נכונה, ולהתכונן נפשית להשקעות.
              </p>
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 sm:p-6 rounded-xl">
                <h5 className="font-bold mb-3">בשיעור זה נלמד:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-0 mb-0 text-base">
                  <li>בניית תקציב חודשי מסודר</li>
                  <li>יצירת קרן חירום</li>
                  <li>הגדרת מטרות השקעה</li>
                  <li>הערכת סיכונים</li>
                  <li>בחירת אפיקי השקעה מתאימים</li>
                  <li>הכנה מנטלית להשקעות</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">בניית תקציב חכם</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                <Wallet className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
                <h4 className="text-green-800 dark:text-green-300 m-0 mb-3">הכנסות</h4>
                <ul className="mt-0 mb-0 text-sm space-y-2">
                  <li>משכורת קבועה</li>
                  <li>הכנסות נוספות</li>
                  <li>בונוסים ומענקים</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <LineChart className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="text-blue-800 dark:text-blue-300 m-0 mb-3">הוצאות</h4>
                <ul className="mt-0 mb-0 text-sm space-y-2">
                  <li>הוצאות קבועות</li>
                  <li>הוצאות משתנות</li>
                  <li>הוצאות חד פעמיות</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                <h4 className="text-purple-800 dark:text-purple-300 m-0 mb-3">חיסכון</h4>
                <ul className="mt-0 mb-0 text-sm space-y-2">
                  <li>קרן חירום</li>
                  <li>חיסכון להשקעות</li>
                  <li>חיסכון ליעדים</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl my-8">
              <h4 className="text-yellow-800 dark:text-yellow-400 m-0 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                כלל 50/30/20 לתקציב חכם
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">50% - הוצאות הכרחיות</h5>
                  <ul className="text-sm space-y-1">
                    <li>שכר דירה/משכנתא</li>
                    <li>חשבונות שוטפים</li>
                    <li>מזון ותחבורה</li>
                  </ul>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">30% - הוצאות גמישות</h5>
                  <ul className="text-sm space-y-1">
                    <li>בילויים ופנאי</li>
                    <li>קניות ומותרות</li>
                    <li>חופשות</li>
                  </ul>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">20% - חיסכון והשקעות</h5>
                  <ul className="text-sm space-y-1">
                    <li>קרן חירום</li>
                    <li>השקעות</li>
                    <li>חיסכון פנסיוני</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">קרן חירום - הביטוח הכלכלי שלכם</h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl my-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-blue-800 dark:text-blue-300 text-xl mb-4">מהי קרן חירום?</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    קרן חירום היא סכום כסף נזיל שנשמר במיוחד למצבי חירום בלתי צפויים. זהו למעשה 
                    "כרית ביטחון" כלכלית שמגנה עלינו במקרים של אובדן הכנסה, הוצאות רפואיות פתאומיות, 
                    תיקונים דחופים וכדומה.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">כמה כסף צריך בקרן?</h5>
                    <ul className="text-sm space-y-2">
                      <li>מינימום: 3 חודשי הוצאות</li>
                      <li>מומלץ: 6 חודשי הוצאות</li>
                      <li>אידיאלי: 12 חודשי הוצאות</li>
                      <li>תלוי ביציבות התעסוקתית שלכם</li>
                    </ul>
                  </div>

                  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <h5 className="font-bold mb-3">איפה לשמור את הקרן?</h5>
                    <ul className="text-sm space-y-2">
                      <li>חשבון עו"ש נפרד</li>
                      <li>חסכון נזיל ללא סיכון</li>
                      <li>פק"מ קצר טווח</li>
                      <li>חשבון שניתן למשוך ממנו מיידית</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h5 className="font-bold flex items-center gap-2 mb-3">
                    <span className="text-xl">💡</span>
                    דוגמה מספרית
                  </h5>
                  <p className="text-sm">
                    משפחה עם הוצאות חודשיות של 12,000 ₪ צריכה קרן חירום של:
                  </p>
                  <ul className="text-sm mt-2">
                    <li>מינימום: 36,000 ₪ (3 חודשים)</li>
                    <li>מומלץ: 72,000 ₪ (6 חודשים)</li>
                    <li>אידיאלי: 144,000 ₪ (12 חודשים)</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                  <h5 className="font-bold flex items-center gap-2 mb-3">
                    <span className="text-xl">⚠️</span>
                    חשוב לזכור
                  </h5>
                  <ul className="text-sm space-y-2">
                    <li>אל תשקיעו את כספי קרן החירום בשוק ההון</li>
                    <li>שמרו על נגישות מיידית לכסף</li>
                    <li>הפרידו את הקרן מחשבון העו"ש הרגיל</li>
                    <li>חדשו את הקרן מיד לאחר שימוש בה</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
              <h4 className="text-green-800 dark:text-green-400 m-0 mb-4">סיכום השיעור</h4>
              <div className="space-y-4">
                <p>
                  למדנו איך לבנות תשתית פיננסית יציבה שתאפשר לנו להתחיל להשקיע בצורה נכונה ובטוחה.
                  זכרו: השקעה מוצלחת מתחילה בניהול פיננסי נכון.
                </p>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">משימות לביצוע:</h5>
                  <ul className="text-sm space-y-1">
                    <li>בנו תקציב חודשי מסודר</li>
                    <li>התחילו לבנות קרן חירום</li>
                    <li>מפו את כל החובות שלכם</li>
                    <li>הגדירו יעדים פיננסיים ברורים</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* סרגל התקדמות נייד */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 md:hidden">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">שיעור 2 מתוך 10</span>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/course/stock-market/lesson1"
                className="button-secondary text-sm py-2"
              >
                <ChevronRight className="w-4 h-4" />
                לשיעור הקודם
              </Link>
              <Link 
                href="/course/stock-market/lesson3"
                className="button-secondary text-sm py-2"
              >
                לשיעור הבא
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ניווט בין שיעורים */}
        <div className="flex justify-between items-center mt-8 mb-20 md:mb-8">
          <Link 
            href="/course/stock-market/lesson1"
            className="button-secondary hidden md:flex items-center gap-2"
          >
            <ChevronRight className="w-5 h-5" />
            לשיעור הקודם
          </Link>
          <Link 
            href="/course/stock-market/lesson3"
            className="button-secondary hidden md:flex items-center gap-2"
          >
            לשיעור הבא
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
} 