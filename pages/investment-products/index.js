import Head from 'next/head'
import Link from 'next/link'

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
    blue: 'bg-blue-50 border-blue-500 hover:bg-blue-100',
    green: 'bg-green-50 border-green-500 hover:bg-green-100',
    purple: 'bg-purple-50 border-purple-500 hover:bg-purple-100',
    yellow: 'bg-yellow-50 border-yellow-500 hover:bg-yellow-100',
    gray: 'bg-gray-50 border-gray-500 hover:bg-gray-100',
    indigo: 'bg-indigo-50 border-indigo-500 hover:bg-indigo-100'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>מוצרי השקעה וחיסכון | DeRibit</title>
        <meta name="description" content="מגוון מוצרי השקעה וחיסכון - השוואה מקיפה בין אפיקי השקעה שונים. כל המידע שצריך כדי לבחור את אפיק ההשקעה המתאים לך." />
        <meta name="keywords" content="השקעות, חסכונות, קרן פנסיה, קרן השתלמות, קופת גמל להשקעה, קרן כספית, פיקדון בנקאי, פוליסת חיסכון" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">מוצרי השקעה וחיסכון</h1>
          <p className="text-xl text-gray-600">השוואה מקיפה בין אפיקי ההשקעה המובילים בישראל</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              href={`/investment-products/${product.id}`}
              key={product.id}
              className={`block border-r-4 rounded-lg shadow-lg transition-all duration-300 ${colorClasses[product.color]}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{product.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">מאפיינים עיקריים:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white border-r-4 border-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">איך לבחור את אפיק ההשקעה המתאים?</h2>
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
      </div>
    </div>
  )
}