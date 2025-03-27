import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ChevronRight, Info, Calculator, Home, TrendingUp, PiggyBank, Shield } from 'lucide-react';
import { RealEstateCalculator } from '../../components/RealEstateCalculator';

export default function RealEstateCalculatorPage() {
  return (
    <>
      <NextSeo
        title="מחשבון נדל״ן | דריבית"
        description="מחשבון נדל״ן מקיף - חשבו תשואה, כדאיות, מינוף פיננסי והכנסה חודשית מהשקעות נדל״ן"
        canonical="https://www.deribit.co.il/calculators/real-estate"
        openGraph={{
          title: "מחשבון נדל״ן | דריבית",
          description: "מחשבון נדל״ן מקיף - חשבו תשואה, כדאיות, מינוף פיננסי והכנסה חודשית מהשקעות נדל״ן",
          url: "https://www.deribit.co.il/calculators/real-estate",
          site_name: "דריבית"
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה למחשבונים
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
                <Home className="w-8 h-8 text-blue-500" />
                מחשבון נדל״ן
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                חשבו את כדאיות ההשקעה בנדל״ן, כולל תשואה, מינוף פיננסי והכנסה חודשית.
              </p>
            </div>

            <RealEstateCalculator />

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-500" />
                מדריך שימוש במחשבון
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    פרמטרים עיקריים
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li>• מחיר הנכס</li>
                    <li>• סכום הון עצמי</li>
                    <li>• תנאי המשכנתא</li>
                    <li>• הכנסה חודשית משכירות</li>
                    <li>• עלויות תחזוקה</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <PiggyBank className="w-5 h-5 text-blue-500" />
                    תוצאות המחשבון
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li>• תשואה שנתית (ROI)</li>
                    <li>• תשואה על ההון העצמי</li>
                    <li>• תזרים מזומנים חודשי</li>
                    <li>• נקודת איזון</li>
                    <li>• מינוף פיננסי</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  טיפים חשובים
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• התחשבו בכל העלויות הנסתרות</li>
                  <li>• חשבו גם תקופות ריקות</li>
                  <li>• התחשבו באינפלציה</li>
                  <li>• בדקו את היסטוריית המחירים באזור</li>
                  <li>• חשבו על עלויות תחזוקה עתידיות</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 