import Head from 'next/head';
import { Calculator } from '../../components/Calculator';
import Link from 'next/link';
import { ChevronRight, Info, TrendingUp, PiggyBank, Clock } from 'lucide-react';

export default function CompoundInterestCalculator() {
  return (
    <>
      <Head>
        <title>מחשבון ריבית דריבית | דריבית</title>
        <meta name="description" content="מחשבון ריבית דריבית חינמי - חשבו את התשואה על ההשקעות שלכם לאורך זמן, כולל הפקדות חודשיות והתחשבות באינפלציה" />
        <meta name="keywords" content="מחשבון ריבית דריבית, חישוב ריבית דריבית, תשואה על השקעות, הפקדות חודשיות, חיסכון ארוך טווח, כוח הריבית דריבית" />
        <meta property="og:title" content="מחשבון ריבית דריבית | דריבית" />
        <meta property="og:description" content="חשבו את כוח הריבית דריבית על ההשקעות שלכם - כולל הפקדות חודשיות והתחשבות באינפלציה" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deribit.co.il/calculators/compound-interest" />
        <link rel="canonical" href="https://www.deribit.co.il/calculators/compound-interest" />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה למחשבונים
            </Link>
          </div>
          <Calculator />
          
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-blue-500" />
              מדריך שימוש - מחשבון ריבית דריבית
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  למה חשוב להשתמש במחשבון ריבית דריבית?
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• הבנת כוח הריבית דריבית והשפעתה על החיסכון ארוך הטווח</li>
                  <li>• תכנון אסטרטגיית השקעות והפקדות חודשיות</li>
                  <li>• חישוב התשואה הצפויה על ההשקעות לאורך זמן</li>
                  <li>• הבנת ההשפעה של דמי ניהול על התשואה הסופית</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-blue-500" />
                  איך להשתמש במחשבון?
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>1. הזינו את סכום ההשקעה ההתחלתי</li>
                  <li>2. הגדירו את סכום ההפקדה החודשית</li>
                  <li>3. בחרו את התשואה השנתית הצפויה</li>
                  <li>4. הוסיפו דמי ניהול אם רלוונטי</li>
                  <li>5. הגדירו את תקופת ההשקעה בשנים</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                טיפים חשובים
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• השקעה לטווח ארוך מגדילה משמעותית את אפקט הריבית דריבית</li>
                <li>• הפקדות חודשיות קבועות מגדילות את פוטנציאל הרווח</li>
                <li>• דמי ניהול נמוכים משפיעים משמעותית על התשואה הסופית</li>
                <li>• חשוב להתחשב באינפלציה בתכנון ארוך טווח</li>
              </ul>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              <p>
                מושגים קשורים: ריבית דריבית, חיסכון ארוך טווח, תשואה שנתית, הפקדות חודשיות,
                דמי ניהול, אפקט הריבית דריבית, תכנון פיננסי, השקעות לטווח ארוך, חיסכון פנסיוני,
                קופות גמל, קרנות השתלמות, תיק השקעות, תשואה מצטברת, כוח הריבית
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 