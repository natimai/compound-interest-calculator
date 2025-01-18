import Head from 'next/head';
import { GrossToNetCalculator } from '../../components/GrossToNetCalculator';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function SalaryCalculator() {
  return (
    <>
      <Head>
        <title>מחשבון שכר ברוטו נטו | דריבית</title>
        <meta name="description" content="מחשבון שכר חינמי - המרת ברוטו לנטו, חישוב מס הכנסה, ביטוח לאומי וכל הניכויים. כולל נקודות זיכוי והטבות מס" />
        <meta name="keywords" content="מחשבון שכר, ברוטו נטו, חישוב משכורת, מס הכנסה, ביטוח לאומי, נקודות זיכוי, הטבות מס" />
        <meta property="og:title" content="מחשבון שכר ברוטו נטו | דריבית" />
        <meta property="og:description" content="חשבו את השכר נטו שלכם - כולל כל הניכויים, נקודות זיכוי והטבות מס" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deribit.co.il/calculators/salary" />
        <link rel="canonical" href="https://www.deribit.co.il/calculators/salary" />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה למחשבונים
            </Link>
          </div>
          <GrossToNetCalculator />
        </div>
      </div>
    </>
  );
} 