import Head from 'next/head'
import Link from 'next/link'

export default function InvestmentProducts() {
  const products = [
    {
      id: 'keren-hishtalmut',
      title: 'קרן השתלמות',
      description: 'חיסכון לטווח בינוני עם הטבות מס משמעותיות',
      advantages: ['פטור ממס רווחי הון', 'הפקדות מוכרות למס', 'נזילות אחרי 6 שנים'],
      icon: '💰'
    },
    {
      id: 'kupat-gemel',
      title: 'קופת גמל להשקעה',
      description: 'חיסכון גמיש עם אפשרות למשיכה בכל עת',
      advantages: ['גמישות במשיכה', 'אפשרות להמרה לקצבה פטורה', 'ניהול השקעות מקצועי'],
      icon: '🏦'
    },
    {
      id: 'pension',
      title: 'קרן פנסיה',
      description: 'חיסכון ארוך טווח לגיל פרישה הכולל כיסויים ביטוחיים',
      advantages: ['הטבות מס משמעותיות', 'כיסוי אובדן כושר עבודה', 'פנסיית שארים'],
      icon: '👵'
    },
    {
      id: 'advanced-study-fund',
      title: 'פוליסת חיסכון',
      description: 'מסלול חיסכון גמיש באמצעות חברות ביטוח',
      advantages: ['נזילות מלאה', 'מגוון מסלולי השקעה', 'אפשרויות הורשה גמישות'],
      icon: '📈'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab]">
      <Head>
        <title>מוצרי השקעה וחיסכון | DeRibit</title>
        <meta name="description" content="מדריך מקיף למוצרי השקעה וחיסכון - קרנות השתלמות, קופות גמל, פנסיה ועוד. השוואה, יתרונות וחסרונות של כל מוצר." />
        <meta name="keywords" content="קרן השתלמות, קופת גמל להשקעה, קרן פנסיה, פוליסת חיסכון, השקעות, חיסכון פנסיוני" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">מוצרי השקעה וחיסכון</h1>
          <p className="text-xl text-gray-600">השוואה מקיפה בין מסלולי החיסכון וההשקעה המובילים בישראל</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link 
              href={`/investment-products/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{product.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mt-auto">
                  <h3 className="font-semibold text-gray-900 mb-2">יתרונות בולטים:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.advantages.map((advantage, index) => (
                      <li key={index} className="text-gray-600">{advantage}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-3">טיפ מקצועי 💡</h3>
          <p className="text-gray-700">
            שילוב נכון בין מוצרי השקעה שונים יכול למקסם את התשואה ולמזער את הסיכונים.
            מומלץ להתייעץ עם איש מקצוע לבניית תיק השקעות מאוזן המותאם לצרכים האישיים שלך.
          </p>
        </div>
      </div>
    </div>
  )
}