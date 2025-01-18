import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>מדיניות פרטיות | דריבית</title>
        <meta name="description" content="מדיניות הפרטיות של דריבית - כיצד אנו מגנים על המידע שלכם" />
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לדף הבית
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-blue-500" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                מדיניות פרטיות
              </h1>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. כללי</h2>
                <p>
                  אנו בדריבית מכבדים את פרטיותך ומחויבים להגן על המידע האישי שלך. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלך.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. איסוף מידע</h2>
                <p>אנו אוספים את המידע הבא:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>מידע שאתה מספק בעת השימוש במחשבונים</li>
                  <li>נתוני שימוש אנונימיים לצורך שיפור השירות</li>
                  <li>מידע טכני כגון כתובת IP וסוג הדפדפן</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. שימוש במידע</h2>
                <p>אנו משתמשים במידע למטרות הבאות:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>הספקת השירותים המבוקשים</li>
                  <li>שיפור ופיתוח השירותים שלנו</li>
                  <li>תקשורת עם המשתמשים</li>
                  <li>ניתוח וסטטיסטיקה</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. אבטחת מידע</h2>
                <p>
                  אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלך, כולל הצפנת SSL, גיבוי מאובטח ובקרת גישה.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. זכויותיך</h2>
                <p>יש לך את הזכויות הבאות בנוגע למידע שלך:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>גישה למידע האישי שלך</li>
                  <li>תיקון מידע לא מדויק</li>
                  <li>מחיקת המידע שלך</li>
                  <li>התנגדות לעיבוד המידע</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. יצירת קשר</h2>
                <p>
                  לכל שאלה או בקשה בנוגע למדיניות הפרטיות, ניתן ליצור קשר בכתובת:{' '}
                  <a href="mailto:privacy@deribit.co.il" className="text-blue-600 hover:text-blue-700">
                    privacy@deribit.co.il
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 