import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Calculator, Clock, TrendingUp, DollarSign, BookOpen, ArrowRight, Users, ThumbsUp, BarChart2, Target, Lightbulb, Star, Sparkles } from 'lucide-react';
import { StatisticCounter } from '../components/StatisticCounter';
import Meta from '../components/Meta';

export default function Home() {
  return (
    <>
      <NextSeo
        title="דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם"
        description="מחשבונים פיננסיים חינמיים, קורס שוק ההון למתחילים, והשוואת מוצרי השקעה בעברית פשוטה. מחשבון ריבית דריבית, קרנות השתלמות, קופות גמל ועוד - הכל בחינם."
        canonical="https://www.deribit.co.il"
        openGraph={{
          type: 'website',
          locale: 'he_IL',
          url: 'https://www.deribit.co.il',
          siteName: 'דריבית',
          title: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם',
          description: 'מחשבונים פיננסיים חינמיים, קורס שוק ההון למתחילים, והשוואת מוצרי השקעה בעברית פשוטה.',
          images: [
            {
              url: 'https://www.deribit.co.il/og-preview.jpg',
              width: 1200,
              height: 630,
              alt: 'דריבית - מחשבונים פיננסיים וקורס שוק ההון',
              type: 'image/jpeg',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'מחשבון ריבית דריבית, קורס שוק ההון, קרן השתלמות, קופת גמל, מחשבונים פיננסיים, השקעות למתחילים'
          }
        ]}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Meta 
          title="דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם"
          description="מחשבונים פיננסיים חינמיים, קורס שוק ההון למתחילים, והשוואת מוצרי השקעה בעברית פשוטה. מחשבון ריבית דריבית, קרנות השתלמות, קופות גמל ועוד - הכל בחינם."
          url="https://www.deribit.co.il"
        />

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
            <div className="text-center">
              <div className="inline-block mb-6">
                <Sparkles className="w-16 h-16 text-blue-600 animate-pulse mx-auto" />
              </div>

              <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                <span className="block mb-2">דריבית</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                  כי כולם יכולים להרוויח יותר
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                לומדים את עולם הפיננסים בחינם, בעברית פשוטה ובלי מילים מפוצצות.
                <span className="block mt-2">
                  כי כל אחד יכול לקבל החלטות פיננסיות חכמות יותר ולהרוויח מאות אלפי שקלים לאורך החיים.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/guides" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
                  <BookOpen className="w-5 h-5 mr-2" />
                  למדריכים המקיפים שלנו
                </Link>
                <Link href="/calculators" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors">
                  <Calculator className="w-5 h-5 mr-2" />
                  למחשבונים הפיננסיים
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Course Section */}
        <div className="bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  קורס שוק ההון למתחילים
                  <span className="block text-blue-600 mt-2">מאפס לניהול תיק השקעות חכם</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    קורס מקיף שיעזור לכם להבין את עולם ההשקעות בצורה פשוטה וברורה, 
                    ויהפוך את הפחד מהבורסה להזדמנות אמיתית לבניית עושר.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-gray-900 dark:text-gray-100 font-medium block">מותאם במיוחד למתחילים</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">מתחילים מהבסיס ומתקדמים בקצב שלכם</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lightbulb className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-gray-900 dark:text-gray-100 font-medium block">הופכים מורכב לפשוט</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">לומדים להבין את שוק ההון בשפה פשוטה ונטולת מילים מפוצצות</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-gray-900 dark:text-gray-100 font-medium block">חינם לגמרי</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">כולל בחנים אינטרקטיביים שתוכלו לתרגל בזמנכם הפנוי 😉</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BarChart2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-gray-900 dark:text-gray-100 font-medium block">פרקטיקה ותרגול</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">לומדים איך לבנות ולנהל תיק השקעות אמיתי</span>
                      </div>
                    </li>
                  </ul>
                  <div className="pt-6">
                    <Link href="/course" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors">
                      <Star className="w-5 h-5 mr-2" />
                      לפרטים נוספים על הקורס
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/course-preview.webp" 
                    alt="תוכנית הלימודים של קורס שוק ההון למתחילים" 
                    className="w-full h-full object-cover bg-white"
                    width={1280}
                    height={720}
                  />
                </div>
                
                {/* תיבת מידע ימנית - מספר שיעורים */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-blue-600">10</div>
                    <div className="text-sm">
                      <div className="font-bold text-gray-900 dark:text-gray-100">שיעורים קצרים</div>
                      <div className="text-gray-600 dark:text-gray-400">שיהפכו פחד להזדמנות</div>
                    </div>
                  </div>
                </div>

                {/* תיבת מידע שמאלית - חינם */}
                <div className="absolute -bottom-6 -left-6 bg-green-500 text-white rounded-xl shadow-lg p-4 animate-bounce">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    <div className="font-bold">חינם לגמרי!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Popular Guides */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                מדריכים פופולריים
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/investment-products/keren-hishtalmut"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    קרן השתלמות - המדריך המקיף
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/investment-products/kupat-gemel"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    קופת גמל להשקעה
                  </Link>
                </li>
                {/* Add more popular guides */}
              </ul>
            </div>

            {/* Popular Calculators */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                מחשבונים שימושיים
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/calculators/compound-interest"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    מחשבון ריבית דריבית
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/calculators/mortgage"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    מחשבון משכנתא
                  </Link>
                </li>
                {/* Add more calculators */}
              </ul>
            </div>

            {/* Latest Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                תוכן חדש באתר
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/guides/tax-benefits"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    מדריך הטבות מס 2024
                  </Link>
                </li>
                {/* Add more new content */}
              </ul>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                למה דריבית?
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                <p>
                  אנחנו מאמינים שכל אחד צריך גישה למידע פיננסי איכותי - בחינם, בעברית פשוטה, ובלי אינטרסים.
                </p>
                
                <p>
                  <span className="text-blue-600 font-semibold">דריבית</span> נולד מתוך הבנה פשוטה: 
                  ככל שמתחילים להשקיע מוקדם יותר, כך כוחה של ריבית דריבית עובד לטובתנו יותר.
                </p>
                
                <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  המטרה שלנו היא להוריד את חסמי הכניסה לעולם ההשקעות, 
                  כי אנחנו יודעים שהזמן הוא המשאב החשוב ביותר בבניית עושר.
                </p>
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">הזמן עובד לטובתך</h3>
                  <p className="text-gray-600 dark:text-gray-400">כל שנה של דחייה עולה לנו בהזדמנויות שאבדו לנצח</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">ידע נגיש לכולם</h3>
                  <p className="text-gray-600 dark:text-gray-400">מידע פיננסי איכותי צריך להיות זמין לכל אחד, בחינם</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">כוחה של עקביות</h3>
                  <p className="text-gray-600 dark:text-gray-400">השקעה סבלנית ועקבית היא המפתח להצלחה לטווח ארוך</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
