import Head from 'next/head'
import Link from 'next/link'
import { BarChart2 } from 'lucide-react'

export default function InvestmentProducts() {
  const products = [
    {
      id: 'pension-fund',
      title: 'קרן פנסיה',
      description: 'חיסכון פנסיוני ארוך טווח המשלב כיסויים ביטוחיים',
      features: ['חיסכון לגיל פרישה', 'ביטוח נכות', 'ביטוח שאירים', 'הטבות מס משמעותיות'],
      icon: '👵',
      color: 'blue'
    },
    {
      id: 'keren-hishtalmut',
      title: 'קרן השתלמות',
      description: 'חיסכון לטווח בינוני עם הטבות מס ייחודיות',
      features: ['פטור ממס רווחי הון', 'הפקדות מוכרות למס', 'נזילות אחרי 6 שנים', 'דמי ניהול נמוכים'],
      icon: '💰',
      color: 'green'
    },
    {
      id: 'kupat-gemel',
      title: 'קופת גמל להשקעה',
      description: 'חיסכון גמיש לכל מטרה עם אופציה לקצבה פטורה ממס',
      features: ['נזילות מלאה', 'אפשרות להמרה לקצבה', 'תקרת הפקדה שנתית', 'ניהול השקעות מקצועי'],
      icon: '🏦',
      color: 'purple'
    },
    {
      id: 'money-fund',
      title: 'קרן כספית',
      description: 'השקעה סולידית המתאימה לתקופות של ריבית גבוהה',
      features: ['סיכון נמוך', 'נזילות גבוהה', 'דמי ניהול נמוכים', 'מיסוי מופחת'],
      icon: '📈',
      color: 'yellow'
    },
    {
      id: 'bank-deposit',
      title: 'פיקדון בנקאי',
      description: 'חיסכון בנקאי בסיכון מינימלי עם ריבית קבועה מראש',
      features: ['סיכון מינימלי', 'ריבית מובטחת', 'מיסוי של 15%', 'אפשרות להצמדה למדד'],
      icon: '🏛️',
      color: 'gray'
    },
    {
      id: 'savings-policy',
      title: 'פוליסת חיסכון',
      description: 'חיסכון גמיש בניהול חברת ביטוח עם מגוון מסלולי השקעה',
      features: ['נזילות מלאה', 'ניהול השקעות מקצועי', 'גמישות בהפקדות', 'מגוון מסלולי השקעה'],
      icon: '📊',
      color: 'indigo'
    }
  ]

  const colorClasses = {
    blue: 'bg-white dark:bg-gray-800 border-primary-500 hover:bg-gray-50 dark:hover:bg-gray-700',
    green: 'bg-white dark:bg-gray-800 border-green-500 hover:bg-gray-50 dark:hover:bg-gray-700',
    purple: 'bg-white dark:bg-gray-800 border-purple-500 hover:bg-gray-50 dark:hover:bg-gray-700',
    yellow: 'bg-white dark:bg-gray-800 border-yellow-500 hover:bg-gray-50 dark:hover:bg-gray-700',
    gray: 'bg-white dark:bg-gray-800 border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700',
    indigo: 'bg-white dark:bg-gray-800 border-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-700'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Head>
        <title>השוואת מוצרי השקעה 2024 | קרנות השתלמות וקופות גמל - דריבית</title>
        <meta name="description" content="השוואה מקיפה של מוצרי השקעה בישראל - קרנות השתלמות, קופות גמל להשקעה, קופות גמל לחיסכון. השוואת דמי ניהול, תשואות ומסלולי השקעה." />
        <meta name="keywords" content="השוואת קרנות השתלמות, השוואת קופות גמל, דמי ניהול, תשואות, מסלולי השקעה" />
        <link rel="canonical" href="https://www.deribit.co.il/investment-products" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary/10 rounded-3xl" />
          <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary-600 to-secondary bg-clip-text text-transparent">
              מוצרי השקעה וחיסכון
            </h1>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-0 max-w-3xl mx-auto">
              השוואה מקיפה בין אפיקי השקעה שונים לבחירת המסלול המתאים לך
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              href={`/investment-products/${product.id}`}
              key={product.id}
              className={`group block border-r-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${colorClasses[product.color]}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform">{product.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{product.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">מאפיינים עיקריים:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-r-4 border-primary-500 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            איך לבחור את אפיק ההשקעה המתאים?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold mb-2">טווח זמן</h3>
              <p className="text-gray-600">התאימו את אפיק ההשקעה לתקופה שבה לא תזדקקו לכסף</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">רמת סיכון</h3>
              <p className="text-gray-600">בחרו ברמת הסיכון המתאימה ליכולת שלכם לספוג תנודות</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">הטבות מס</h3>
              <p className="text-gray-600">בדקו אילו הטבות מס מציע כל אפיק ואיך זה משפיע על התשואה</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">נזילות</h3>
              <p className="text-gray-600">שקלו את היכולת למשוך את הכסף כשתזדקקו לו</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/investment-products/compare"
            className="button inline-flex items-center gap-2 px-8 py-4 text-lg"
          >
            <BarChart2 className="w-5 h-5" />
            השוואת מוצרי השקעה
          </Link>
        </div>
      </div>
    </div>
  )
}