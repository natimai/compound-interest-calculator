import Head from 'next/head';
import Link from 'next/link';
import { Calculator, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              מחשבונים פיננסיים
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              כלים חכמים לניהול כספים והחלטות פיננסיות מושכלות
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/calculators/compound-interest">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <Calculator className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">מחשבון ריבית דריבית</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  חשב את התשואה על ההשקעות שלך לאורך זמן, כולל הפקדות חודשיות
                </p>
                <span className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  נסה עכשיו <ArrowRight className="mr-2 w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/calculators/mortgage">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">מחשבון משכנתא</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  השווה בין מסלולי משכנתא שונים וחשב החזרים חודשיים
                </p>
                <span className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
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
        </div>
      </div>
    </>
  );
} 