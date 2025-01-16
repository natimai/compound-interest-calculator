import { NextSeo } from 'next-seo';
import { Calculator } from '../components/Calculator';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function CompoundInterestPage() {
  const breadcrumbItems = [
    { title: 'מחשבונים', href: '/calculators' },
    { title: 'מחשבון ריבית דריבית', href: '/compound-interest' }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <NextSeo
        title="מחשבון ריבית דריבית"
        description="חשב את הצמיחה של ההשקעות שלך לאורך זמן. מחשבון ריבית דריבית חכם הכולל דמי ניהול ומס רווחי הון."
        canonical="https://www.deribit.co.il/compound-interest"
        openGraph={{
          url: 'https://www.deribit.co.il/compound-interest',
          title: 'מחשבון ריבית דריבית | דריבית',
          description: 'חשב את הצמיחה של ההשקעות שלך לאורך זמן בעזרת מחשבון ריבית דריבית חכם',
          images: [
            {
              url: '/compound-interest-og.png',
              width: 1200,
              height: 630,
              alt: 'מחשבון ריבית דריבית',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'מחשבון ריבית דריבית, חישוב ריבית דריבית, תשואה על השקעות, דמי ניהול, מס רווחי הון'
          }
        ]}
      />

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