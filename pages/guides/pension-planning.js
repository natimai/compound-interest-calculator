import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Wallet, Calculator, Receipt, ArrowRight, Info, PiggyBank, Shield, Target, LineChart } from 'lucide-react';

export default function PensionPlanningGuide() {
  return (
    <>
      <NextSeo
        title="מדריך תכנון פנסיוני מקיף | דריבית"
        description="מדריך מקיף לתכנון פנסיוני - כולל סוגי מוצרים פנסיוניים, חישובי פנסיה, הטבות מס וטיפים מעשיים"
        canonical="https://www.deribit.co.il/guides/pension-planning"
        openGraph={{
          title: "מדריך תכנון פנסיוני מקיף | דריבית",
          description: "מדריך מקיף לתכנון פנסיוני - כולל סוגי מוצרים פנסיוניים, חישובי פנסיה, הטבות מס וטיפים מעשיים",
          url: "https://www.deribit.co.il/guides/pension-planning",
          site_name: "דריבית"
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/guides" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ArrowRight className="w-4 h-4" />
              חזרה למדריכים
            </Link>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <Wallet className="w-8 h-8 text-blue-500" />
              מדריך תכנון פנסיוני מקיף
            </h1>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mb-12">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                מה תלמדו במדריך הזה?
              </h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-2">• חשיבות התכנון הפנסיוני</li>
                <li className="flex items-center gap-2">• סוגי מוצרים פנסיוניים</li>
                <li className="flex items-center gap-2">• חישובי פנסיה והערכת צרכים</li>
                <li className="flex items-center gap-2">• הטבות מס בחיסכון פנסיוני</li>
                <li className="flex items-center gap-2">• טיפים לתכנון פנסיוני מוצלח</li>
              </ul>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <PiggyBank className="w-6 h-6 text-green-500" />
                חשיבות התכנון הפנסיוני
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  תכנון פנסיוני נכון הוא המפתח להבטחת איכות חיים טובה לאחר הפרישה. 
                  הנה היתרונות העיקריים של תכנון פנסיוני מוקדם:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• הבטחת הכנסה קבועה לאחר הפרישה</li>
                  <li className="flex items-start gap-2 leading-relaxed">• ניצול מקסימלי של הטבות מס</li>
                  <li className="flex items-start gap-2 leading-relaxed">• הגנה על המשפחה במקרה של אובדן כושר עבודה</li>
                  <li className="flex items-start gap-2 leading-relaxed">• אפשרות לפרישה מוקדמת</li>
                  <li className="flex items-start gap-2 leading-relaxed">• שמירה על רמת חיים גם בגיל מבוגר</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-500" />
                סוגי מוצרים פנסיוניים
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">קרן פנסיה</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    מוצר פנסיוני המשלב חיסכון לפנסיה עם כיסויים ביטוחיים.
                  </p>
                  <h4 className="font-semibold mb-3">יתרונות:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 leading-relaxed">• דמי ניהול נמוכים</li>
                    <li className="flex items-start gap-2 leading-relaxed">• כיסוי לאובדן כושר עבודה</li>
                    <li className="flex items-start gap-2 leading-relaxed">• פנסיית שארים</li>
                    <li className="flex items-start gap-2 leading-relaxed">• ערבות הדדית</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">ביטוח מנהלים</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    פוליסת ביטוח חיים המשלבת חיסכון פנסיוני.
                  </p>
                  <h4 className="font-semibold mb-3">יתרונות:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 leading-relaxed">• גמישות בבחירת מסלולי השקעה</li>
                    <li className="flex items-start gap-2 leading-relaxed">• אפשרות למקדם קצבה מובטח</li>
                    <li className="flex items-start gap-2 leading-relaxed">• התאמה אישית של כיסויים ביטוחיים</li>
                    <li className="flex items-start gap-2 leading-relaxed">• בעלות על הפוליסה</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-purple-500" />
                חישובי פנסיה והערכת צרכים
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  חישוב נכון של צרכי הפנסיה כולל מספר מרכיבים חשובים:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <strong>1. הערכת הוצאות חודשיות:</strong>
                    <ul className="space-y-2 mr-4">
                      <li>• הוצאות קבועות (דיור, חשבונות)</li>
                      <li>• הוצאות משתנות (מזון, בילויים)</li>
                      <li>• הוצאות רפואיות צפויות</li>
                    </ul>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <strong>2. חישוב הכנסה צפויה:</strong>
                    <ul className="space-y-2 mr-4">
                      <li>• קצבה מביטוח לאומי</li>
                      <li>• חסכונות פנסיוניים</li>
                      <li>• הכנסות מנכסים</li>
                    </ul>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <strong>3. חישוב הפער וקביעת יעדים:</strong>
                    <ul className="space-y-2 mr-4">
                      <li>• זיהוי פערים בחיסכון</li>
                      <li>• קביעת סכום חיסכון חודשי נדרש</li>
                      <li>• התאמת מסלולי השקעה</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Receipt className="w-6 h-6 text-yellow-500" />
                הטבות מס בחיסכון פנסיוני
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">זיכוי מס על הפקדות</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 leading-relaxed">• זיכוי של 35% על הפקדות עד 7% מההכנסה</li>
                      <li className="flex items-start gap-2 leading-relaxed">• ניכוי ממס על הפקדות נוספות</li>
                      <li className="flex items-start gap-2 leading-relaxed">• תקרות הפקדה שנתיות מוכרות</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">הטבות מס על רווחים</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 leading-relaxed">• פטור ממס רווחי הון על הרווחים</li>
                      <li className="flex items-start gap-2 leading-relaxed">• פטור ממס על הפרשי הצמדה</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">הטבות בגיל פרישה</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 leading-relaxed">• פטור ממס על חלק מהקצבה</li>
                      <li className="flex items-start gap-2 leading-relaxed">• אפשרות להיוון חלק מהקצבה</li>
                      <li className="flex items-start gap-2 leading-relaxed">• פטור מיוחד למקבלי קצבת זקנה</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-red-500" />
                טיפים לתכנון פנסיוני מוצלח
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <ol className="space-y-4">
                  <li>
                    <strong>1. התחילו מוקדם</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      ככל שמתחילים מוקדם יותר, כך גדל החיסכון בזכות ריבית דריבית.
                    </p>
                  </li>
                  <li>
                    <strong>2. בדקו את דמי הניהול</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      הפחתה של אחוז בדמי הניהול יכולה להגדיל משמעותית את החיסכון לטווח ארוך.
                    </p>
                  </li>
                  <li>
                    <strong>3. התאימו את רמת הסיכון לגיל</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      בגיל צעיר ניתן לקחת סיכונים גבוהים יותר, ולהפחית סיכון עם ההתקרבות לגיל פרישה.
                    </p>
                  </li>
                  <li>
                    <strong>4. בצעו מעקב תקופתי</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      בדקו את ביצועי החיסכון אחת לשנה והתאימו את התמהיל בהתאם.
                    </p>
                  </li>
                  <li>
                    <strong>5. הגדילו הפקדות עם העלייה בשכר</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      נצלו העלאות שכר להגדלת ההפקדות לפנסיה.
                    </p>
                  </li>
                </ol>
              </div>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mt-12">
              <h2 className="text-xl font-semibold mb-6">סיכום</h2>
              <p className="leading-relaxed text-lg">
                תכנון פנסיוני מוצלח דורש חשיבה לטווח ארוך והבנה של המוצרים השונים. 
                חשוב להתחיל מוקדם, לבחור את המוצרים המתאימים, להקפיד על הפקדות קבועות, 
                ולבצע מעקב תקופתי אחר ביצועי החיסכון. התייעצו עם אנשי מקצוע לקבלת 
                המלצות מותאמות אישית למצבכם.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 