import Head from 'next/head';
import MortgageCalculator from '../../components/MortgageCalculator';
import Link from 'next/link';
import { ChevronRight, Info, Home, Calculator, Landmark, AlertTriangle } from 'lucide-react';

export default function MortgageCalculatorPage() {
  return (
    <>
      <Head>
        <title>מחשבון משכנתא מתקדם | דריבית</title>
        <meta name="description" content="מחשבון משכנתא חינמי - השוואת מסלולי משכנתא, חישוב החזר חודשי, לוח סילוקין מפורט ובדיקת כדאיות מחזור משכנתא" />
        <meta name="keywords" content="מחשבון משכנתא, חישוב משכנתא, השוואת מסלולי משכנתא, לוח סילוקין, מחזור משכנתא, החזר חודשי משכנתא" />
        <meta property="og:title" content="מחשבון משכנתא מתקדם | דריבית" />
        <meta property="og:description" content="חשבו את המשכנתא המשתלמת ביותר עבורכם - כולל השוואת מסלולים ולוח סילוקין מפורט" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deribit.co.il/calculators/mortgage" />
        <link rel="canonical" href="https://www.deribit.co.il/calculators/mortgage" />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה למחשבונים
            </Link>
          </div>
          <MortgageCalculator />
          
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-green-500" />
              מדריך שימוש - מחשבון משכנתא
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-green-500" />
                  למה להשתמש במחשבון משכנתא?
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• חישוב ההחזר החודשי הצפוי על המשכנתא</li>
                  <li>• השוואה בין מסלולי משכנתא שונים</li>
                  <li>• בדיקת כדאיות מחזור משכנתא קיימת</li>
                  <li>• תכנון תמהיל משכנתא אופטימלי</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-500" />
                  איך להשתמש במחשבון?
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>1. הזינו את סכום המשכנתא המבוקש</li>
                  <li>2. בחרו את תקופת ההחזר בשנים</li>
                  <li>3. הגדירו את שיעור הריבית</li>
                  <li>4. בחרו את סוג מסלול המשכנתא</li>
                  <li>5. הוסיפו מסלולים נוספים לפי הצורך</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-green-500" />
                טיפים לבחירת משכנתא
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• מומלץ לשלב בין מספר מסלולים להקטנת סיכונים</li>
                <li>• בדקו את יכולת ההחזר החודשית שלכם לאורך זמן</li>
                <li>• השוו הצעות מכמה בנקים למשכנתאות</li>
                <li>• התייעצו עם יועץ משכנתאות מקצועי</li>
              </ul>
            </div>
            
            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                חשוב לדעת
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• המחשבון מספק הערכה כללית בלבד</li>
                <li>• התנאים הסופיים נקבעים על ידי הבנק</li>
                <li>• יש לקחת בחשבון עלויות נלוות</li>
                <li>• מומלץ לשמור על יחס החזר של עד 30% מההכנסה</li>
              </ul>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              <p>
                מושגים קשורים: מחשבון משכנתא, חישוב משכנתא, החזר חודשי, ריבית משכנתא, 
                מסלולי משכנתא, פריים, מדד, ריבית קבועה, ריבית משתנה, מחזור משכנתא,
                תמהיל משכנתא, לוח שפיצר, גרייס, יועץ משכנתאות, בנק למשכנתאות
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 