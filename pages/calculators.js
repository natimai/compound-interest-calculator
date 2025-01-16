import Head from 'next/head';
import Link from 'next/link';
import { Calculator, DollarSign, Home, TrendingUp, PlusCircle } from 'lucide-react';

const calculators = [
  {
    id: 'compound-interest',
    title: 'מחשבון ריבית דריבית',
    description: 'חישוב תשואה על השקעות וריבית דריבית כולל דמי ניהול ומס רווחי הון',
    icon: Calculator,
    href: '/compound-interest',
    color: 'blue'
  },
  {
    id: 'mortgage',
    title: 'מחשבון משכנתא',
    description: 'השוואה בין מסלולי משכנתא שונים וחישוב החזרים חודשיים',
    icon: Home,
    href: '/mortgage-calculator',
    color: 'green'
  },
  {
    id: 'salary',
    title: 'מחשבון שכר',
    description: 'חישוב שכר נטו מברוטו כולל כל הניכויים והזיכויים',
    icon: DollarSign,
    href: '/gross-to-net',
    color: 'purple'
  },
  {
    id: 'investment',
    title: 'מחשבון השקעות מתקדם',
    description: 'השוואת אפיקי השקעה שונים ובניית תיק השקעות מותאם אישית',
    icon: TrendingUp,
    href: '/investment-calculator',
    color: 'orange',
    comingSoon: true
  }
];

export default function Calculators() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>מחשבונים פיננסיים | DeRibit</title>
        <meta
          name="description"
          content="מגוון מחשבונים פיננסיים לתכנון כלכלי חכם - משכנתא, שכר, השקעות ועוד"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
            מחשבונים פיננסיים
          </h1>
          <p className="text-xl text-gray-600">
            כלים חכמים לתכנון וניהול פיננסי
          </p>
        </div>

        {/* Calculators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <div
              key={calc.id}
              className={`
                relative overflow-hidden
                bg-white rounded-xl shadow-sm
                border border-gray-100
                transition-all duration-300
                hover:shadow-lg hover:scale-[1.02]
                ${calc.comingSoon ? 'opacity-75' : ''}
              `}
            >
              <Link
                href={calc.comingSoon ? '#' : calc.href}
                className="block p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    p-3 rounded-lg
                    bg-${calc.color}-50
                    text-${calc.color}-500
                  `}>
                    <calc.icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {calc.title}
                    </h2>
                    <p className="text-gray-600">
                      {calc.description}
                    </p>
                  </div>
                </div>
              </Link>

              {calc.comingSoon && (
                <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                  בקרוב
                </div>
              )}
            </div>
          ))}

          {/* Add New Calculator Card */}
          <div className="
            border-2 border-dashed border-gray-200 rounded-xl
            flex items-center justify-center
            p-6 text-center
            bg-gray-50
          ">
            <div className="space-y-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <PlusCircle className="text-gray-400" size={24} />
              </div>
              <h3 className="text-gray-500 font-medium">מחשבונים נוספים</h3>
              <p className="text-sm text-gray-400">
                מחשבונים חדשים מתווספים בקביעות
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 