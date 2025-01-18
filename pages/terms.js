import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';

export default function Terms() {
  return (
    <>
      <Head>
        <title>תנאי שימוש | דריבית</title>
        <meta name="description" content="תנאי השימוש באתר דריבית - הזכויות והחובות שלך כמשתמש" />
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
              <FileText className="w-8 h-8 text-blue-500" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                תנאי שימוש
              </h1>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
              </p>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. הסכמה לתנאים</h2>
                <p>
                  השימוש באתר דריבית ובשירותים המוצעים בו מהווה הסכמה לתנאי השימוש המפורטים להלן.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. השימוש במחשבונים</h2>
                <p>
                  המחשבונים באתר מספקים הערכות כלליות בלבד ואינם מהווים ייעוץ פיננסי, משפטי או מקצועי.
                  התוצאות המתקבלות הן להמחשה בלבד ואין להסתמך עליהן כבסיס בלעדי לקבלת החלטות פיננסיות.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. קניין רוחני</h2>
                <p>
                  כל התכנים באתר, לרבות טקסטים, תמונות, לוגו, מחשבונים וקוד מחשב, הם קניינה הרוחני של דריבית
                  ומוגנים בזכויות יוצרים. אין להעתיק, לשכפל או להפיץ תכנים אלה ללא אישור מפורש בכתב.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. הגבלת אחריות</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>השירות מסופק "כפי שהוא" (AS IS) ללא כל אחריות מכל סוג</li>
                  <li>איננו אחראים לכל נזק ישיר או עקיף שעלול להיגרם משימוש באתר</li>
                  <li>המידע באתר אינו מהווה תחליף לייעוץ מקצועי</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. שינויים בשירות</h2>
                <p>
                  אנו שומרים לעצמנו את הזכות לשנות, להשהות או להפסיק את השירות בכל עת וללא הודעה מוקדמת.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. דין חל וסמכות שיפוט</h2>
                <p>
                  על תנאי שימוש אלה יחולו דיני מדינת ישראל. סמכות השיפוט הבלעדית בכל עניין הנוגע לתנאים אלה
                  תהיה נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. יצירת קשר</h2>
                <p>
                  לשאלות בנוגע לתנאי השימוש, ניתן ליצור קשר בכתובת:{' '}
                  <a href="mailto:legal@deribit.co.il" className="text-blue-600 hover:text-blue-700">
                    legal@deribit.co.il
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