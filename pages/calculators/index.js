import Head from 'next/head';
import Link from 'next/link';
import { Calculator, Home, DollarSign, ArrowRight, ChevronRight, TrendingUp, PiggyBank, Lightbulb, Building2 } from 'lucide-react';

export default function CalculatorsPage() {
  return (
    <>
      <Head>
        <title>מחשבונים פיננסיים | דריבית</title>
        <meta name="description" content="מחשבונים פיננסיים חינמיים - ריבית דריבית, משכנתא, שכר ברוטו נטו ועוד. כלים מתקדמים לניהול כספים חכם" />
        <meta name="keywords" content="מחשבונים פיננסיים, מחשבון ריבית דריבית, מחשבון משכנתא, מחשבון שכר, כלים פיננסיים, ניהול כספים" />
        <meta property="og:title" content="מחשבונים פיננסיים | דריבית" />
        <meta property="og:description" content="מגוון מחשבונים פיננסיים חינמיים לניהול כספים חכם יותר" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deribit.co.il/calculators" />
        <link rel="canonical" href="https://www.deribit.co.il/calculators" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm inline-flex">
              <ChevronRight className="w-4 h-4" />
              חזרה לדף הבית
            </Link>
          </div>

          <header className="text-center mb-16 relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              מחשבונים פיננסיים
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              כלים חכמים לניהול כספים והחלטות פיננסיות מושכלות
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur px-6 py-3 rounded-xl shadow-sm">
                <TrendingUp className="w-5 h-5 text-blue-500 mb-1" />
                <p className="text-sm text-gray-600 dark:text-gray-400">חישובים מדויקים</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur px-6 py-3 rounded-xl shadow-sm">
                <PiggyBank className="w-5 h-5 text-green-500 mb-1" />
                <p className="text-sm text-gray-600 dark:text-gray-400">חינמי לחלוטין</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur px-6 py-3 rounded-xl shadow-sm">
                <Lightbulb className="w-5 h-5 text-yellow-500 mb-1" />
                <p className="text-sm text-gray-600 dark:text-gray-400">טיפים והסברים</p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Link href="/calculators/compound-interest">
              <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl 
                border border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700 
                transition-all duration-300 transform hover:-translate-y-1">
                <Calculator className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">מחשבון ריבית דריבית</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  חשב את התשואה על ההשקעות שלך לאורך זמן, כולל הפקדות חודשיות
                </p>
                <span className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  נסה עכשיו <ArrowRight className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            <Link href="/calculators/mortgage">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <Home className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">מחשבון משכנתא</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  השווה בין מסלולי משכנתא שונים וחשב החזרים חודשיים
                </p>
                <span className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                  נסה עכשיו <ArrowRight className="mr-2 w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/calculators/real-estate">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <Building2 className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">מחשבון נדל״ן</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  חשב תשואה, כדאיות, מינוף פיננסי והכנסה חודשית מהשקעות נדל״ן
                </p>
                <span className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center">
                  נסה עכשיו <ArrowRight className="mr-2 w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/calculators/salary">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <DollarSign className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">מחשבון שכר</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  המר ברוטו לנטו וחשב את כל הניכויים והזיכויים
                </p>
                <span className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                  נסה עכשיו <ArrowRight className="mr-2 w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6">איך המחשבונים יכולים לעזור לכם?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold mb-2 text-blue-600">מחשבון ריבית דריבית</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    מאפשר לכם לראות את כוח הריבית דריבית בפעולה ולתכנן את החיסכון וההשקעות שלכם לטווח ארוך
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-green-600">מחשבון משכנתא</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    עוזר לכם להבין את ההחזר החודשי הצפוי ולהשוות בין מסלולי משכנתא שונים
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-orange-600">מחשבון נדל״ן</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    מחשב תשואה, כדאיות, מינוף פיננסי והכנסה חודשית מהשקעות נדל״ן
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-purple-600">מחשבון שכר</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    מחשב את השכר נטו שלכם כולל כל הניכויים והזיכויים, ומראה בדיוק כמה כסף יכנס לחשבון
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 