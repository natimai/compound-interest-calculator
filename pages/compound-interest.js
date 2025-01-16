import Head from 'next/head';
import { Calculator } from '../components/Calculator';

export default function CompoundInterestPage() {
  return (
    <>
      <Head>
        <title>מחשבון ריבית דריבית | דריבית - DeRibit</title>
        <meta 
          name="description" 
          content="מחשבון ריבית דריבית חכם לחישוב הצמיחה של ההשקעות שלך לאורך זמן. כלי פשוט ויעיל לתכנון פיננסי." 
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* כותרת העמוד */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              מחשבון ריבית דריבית
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              חשב את הצמיחה של ההשקעות שלך לאורך זמן בעזרת הכלי החכם שלנו
            </p>
          </div>

          {/* קומפוננטת המחשבון */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 md:p-8">
            <Calculator />
          </div>

          {/* מידע נוסף */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              איך זה עובד?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              המחשבון מאפשר לך לחשב את הערך העתידי של השקעה בהתחשב בריבית דריבית.
              הזן את סכום ההשקעה ההתחלתי, שיעור הריבית השנתית, תקופת ההשקעה והפקדות חודשיות (אופציונלי)
              כדי לקבל תחזית מדויקת של הצמיחה הפוטנציאלית של ההשקעה שלך.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 