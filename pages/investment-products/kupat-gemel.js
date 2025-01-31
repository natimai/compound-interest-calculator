import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ChevronRight, PiggyBank, TrendingUp, Clock, Shield, Calculator, AlertTriangle } from 'lucide-react'

export default function KupatGemel() {
  const currentYear = new Date().getFullYear();
  
  const pageTitle = `מדריך קופת גמל להשקעה ${currentYear} | השוואת קופות גמל - DeRibit`
  const pageDescription = `מדריך מקיף לקופת גמל להשקעה ${currentYear}: נזילות מלאה, השוואת דמי ניהול ותשואות, יתרונות וחסרונות, מסלולי השקעה והטבות מס. כל מה שצריך לדעת לפני שבוחרים קופת גמל להשקעה.`
  const pageKeywords = `קופת גמל להשקעה, קופת גמל להשקעה ${currentYear}, השוואת קופות גמל, דמי ניהול קופת גמל, מסלולי השקעה, נזילות מלאה, הטבות מס קופת גמל`

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <NextSeo
          title={pageTitle}
          description={pageDescription}
          canonical="https://www.deribit.co.il/investment-products/kupat-gemel"
          openGraph={{
            type: 'article',
            locale: 'he_IL',
            url: 'https://www.deribit.co.il/investment-products/kupat-gemel',
            siteName: 'DeRibit',
            title: pageTitle,
            description: pageDescription,
            images: [
              {
                url: 'https://www.deribit.co.il/og-image.png',
                width: 1200,
                height: 630,
                alt: 'מדריך קופת גמל להשקעה - DeRibit',
                type: 'image/png',
                secureUrl: 'https://www.deribit.co.il/og-image.png',
              }
            ],
            site_name: 'DeRibit',
          }}
          twitter={{
            handle: '@deribit',
            site: '@deribit',
            cardType: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            image: 'https://www.deribit.co.il/og-image.png'
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content: pageKeywords
            },
            {
              name: 'author',
              content: 'DeRibit'
            },
            {
              name: 'robots',
              content: 'noindex, follow'
            },
            {
              name: 'googlebot',
              content: 'noindex, follow'
            },
            {
              name: 'google',
              content: 'notranslate'
            },
            {
              name: 'format-detection',
              content: 'telephone=no'
            },
            {
              name: 'theme-color',
              content: '#ffffff'
            },
            {
              name: 'google-site-verification',
              content: 'your-google-verification-code'
            },
            {
              property: 'og:image:width',
              content: '1200'
            },
            {
              property: 'og:image:height',
              content: '630'
            },
            {
              property: 'og:image:type',
              content: 'image/png'
            }
          ]}
        />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="דריבית" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.deribit.co.il/investment-products/kupat-gemel"
            },
            "headline": `מדריך קופת גמל להשקעה ${currentYear}`,
            "description": `מדריך מקיף לקופת גמל להשקעה ${currentYear}: נזילות מלאה, השוואת דמי ניהול ותשואות, יתרונות וחסרונות, מסלולי השקעה והטבות מס.`,
            "author": {
              "@type": "Organization",
              "name": "דריבית"
            },
            "publisher": {
              "@type": "Organization",
              "name": "דריבית",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.deribit.co.il/logo.png"
              }
            },
            "datePublished": `${currentYear}-01-01`,
            "dateModified": new Date().toISOString().split('T')[0]
          })}
        </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ניווט חזרה */}
        <nav className="mb-8">
          <Link href="/investment-products" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            <ChevronRight className="w-4 h-4" />
            <span>חזרה למוצרי השקעה</span>
          </Link>
        </nav>

        {/* כותרת ראשית */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            קופת גמל להשקעה
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            אפיק חיסכון נזיל המשלב את היתרונות של קופת גמל עם גמישות מלאה במשיכת הכספים
          </p>
        </header>

        {/* מהי קופת גמל להשקעה */}
        <section id="what-is" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            מהי קופת גמל להשקעה?
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              קופת גמל להשקעה הינה מכשיר חיסכון שהושק בשנת 2016, המיועד לחיסכון לטווח בינוני וארוך. היא משלבת את היתרונות של קופות גמל יחד עם גמישות מלאה במשיכת הכספים, ללא קנסות או הגבלות.
            </p>
            <p className="mb-6">
              בניגוד לקופות גמל רגילות, קופת גמל להשקעה מאפשרת משיכת כספים בכל עת, תוך שמירה על יתרונות ההשקעה המקצועית ואפשרויות המיסוי המיוחדות.
            </p>
            <p className="mb-4">
              קופת גמל להשקעה נועדה לחיסכון לטווח בינוני-ארוך (בדומה לפיקדון בבנק או פוליסת חיסכון), בעוד קופת גמל לתגמולים היא חיסכון פנסיוני למטרת קצבה לפורשים לגמלאות.
            </p>
            <p className="mb-4">
              קופת הגמל להשקעה משקיעה את כספי החוסך בשוק ההון, במסלול השקעה לפי בחירתו, בדומה לקופות גמל משלמת לקצבה. אך היא שונה במספר אלמנטים חשובים:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>נועדה לחיסכון תוך שמירה על ערך הכסף ולא למען הפנסיה</li>
              <li>אינה זוכה לקידום ועידוד שהמדינה מעניקה לחיסכון פנסיוני</li>
              <li>אין בה הפרשת סכומים לטובת העובד מצד המעסיק</li>
              <li>אין הטבות מס בזמן ההפקדה או המשיכה</li>
            </ul>
          </div>

          {/* תיבת מידע חשוב */}
          <div className="bg-blue-50 dark:bg-blue-900/30 border-r-4 border-blue-500 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">חשוב לדעת!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  תקרת ההפקדה השנתית לשנת {currentYear} עומדת על 81,711 ₪ לכל תעודת זהות.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  סכומי ההפקדה בשנים קודמות:
                </p>
                <ul className="list-disc pl-5 mt-1">
                  <li>2024: 79,006 ₪</li>
                  <li>2023: 76,450 ₪</li>
                  <li>2022: 72,616 ₪</li>
                  <li>2021: 70,913 ₪</li>
                  <li>2020: 71,338 ₪</li>
                  <li>2019: 71,122 ₪</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

        {/* יתרונות מרכזיים */}
        <section id="advantages" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            יתרונות מרכזיים
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <PiggyBank className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">נזילות מלאה</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  משיכת כספים אפשרית בכל עת, ללא קנסות או מגבלות תקופה
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">ניהול השקעות מקצועי</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  מגוון מסלולי השקעה בניהול מקצועי ודמי ניהול תחרותיים
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">גמישות בהפקדות</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  אפשרות להפקדות חד פעמיות או חודשיות, עד לתקרה השנתית
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">הטבות מס</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  אפשרות להמרה לקצבה פטורה ממס בגיל פרישה ומעבר בין מסלולים ללא אירוע מס
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* מיסוי ודמי ניהול */}
        <section id="tax-and-fees" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            מיסוי ודמי ניהול
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">מיסוי</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-600 dark:text-gray-400">מס רווח הון של 25% בעת משיכה הונית</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-600 dark:text-gray-400">פטור ממס בהמרה לקצבה בגיל פרישה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-600 dark:text-gray-400">מעבר בין מסלולים ללא אירוע מס</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-600 dark:text-gray-400">חישוב מס על רווח ריאלי בלבד (בניכוי אינפלציה)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">דמי ניהול</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">•</span>
                  <span className="text-gray-600 dark:text-gray-400">עד 4% מההפקדות השוטפות</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">•</span>
                  <span className="text-gray-600 dark:text-gray-400">עד 1.05% מהצבירה השנתית</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">•</span>
                  <span className="text-gray-600 dark:text-gray-400">ממוצע בשוק: 0.57% מהצבירה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg">•</span>
                  <span className="text-gray-600 dark:text-gray-400">אפשרות למו"מ על דמי הניהול בהפקדות גבוהות</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">טיפ חשוב!</h4>
            <p className="text-gray-600 dark:text-gray-400">
              מומלץ להשוות דמי ניהול בין מספר חברות ולנהל משא ומתן. הבדל של 0.3% בדמי הניהול יכול להסתכם בעשרות אלפי שקלים לאורך שנות החיסכון.
            </p>
          </div>
        </section>

        {/* למי זה מתאים */}
        <section id="who-is-it-for" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            למי מתאימה קופת גמל להשקעה?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">משפחות עם ילדים</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    אפשרות לפתוח קופה נפרדת לכל ילד ולנצל את תקרת ההפקדה השנתית
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">חוסכים לטווח בינוני</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    מי שמעוניין בגמישות במשיכת הכספים תוך שמירה על אפשרויות השקעה מקצועיות
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">מתכננים לגיל פרישה</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    אפשרות להמרה לקצבה פטורה ממס בגיל פרישה כתוספת לפנסיה
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">משקיעים מתוחכמים</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    אפשרות למעבר בין מסלולי השקעה ללא אירוע מס והתאמת הסיכון לצרכים המשתנים
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* תוכן עניינים */}
        <nav className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">תוכן העניינים:</h2>
          <ul className="space-y-2">
            <li>
              <a href="#what-is" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">מהי קופת גמל להשקעה?</a>
            </li>
            <li>
              <a href="#advantages" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">יתרונות מרכזיים</a>
            </li>
            <li>
              <a href="#tax-and-fees" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">מיסוי ודמי ניהול</a>
            </li>
            <li>
              <a href="#who-is-it-for" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">למי מתאימה קופת גמל להשקעה?</a>
            </li>
            {/* המשך תוכן העניינים... */}
          </ul>
        </nav>

        {/* מסלולי השקעה */}
        <section id="investment-tracks" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            מסלולי השקעה
          </h2>
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none mb-6">
              <p>
                קופות הגמל להשקעה מציעות מגוון מסלולי השקעה המותאמים לרמות סיכון שונות ולצרכים שונים של המשקיעים.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">מסלול מנייתי</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• חשיפה של 75% ומעלה למניות</li>
                  <li>• פוטנציאל תשואה גבוה</li>
                  <li>• תנודתיות גבוהה</li>
                  <li>• מתאים לטווח ארוך</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">מסלול כללי</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• חשיפה מאוזנת למניות ואג"ח</li>
                  <li>• סיכון בינוני</li>
                  <li>• תנודתיות מתונה</li>
                  <li>• מתאים לטווח בינוני-ארוך</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">מסלול אג"ח</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• חשיפה מינימלית למניות</li>
                  <li>• סיכון נמוך יחסית</li>
                  <li>• תנודתיות נמוכה</li>
                  <li>• מתאים לטווח קצר-בינוני</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* השוואה למוצרים מתחרים */}
        <section id="comparison" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            השוואה למוצרי חיסכון אחרים
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">מאפיין</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">קרן השתלמות</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">קופת גמל להשקעה</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">פוליסת חיסכון</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">תקרת הפקדה שנתית</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">20,520 ₪ (עצמאי)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">79,006 ₪</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">ללא הגבלה</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">הטבות מס</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">פטור מלא ממס רווחי הון</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">בגיל פרישה</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">אין</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">נזילות</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">אחרי 6 שנים</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">מיידית</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">תלוי במסלול</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">דמי ניהול ממוצעים</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">0.6%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">0.57%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">1.5%-2%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* הערה חשובה */}
          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">💡 טיפ חשוב</h4>
            <p className="text-gray-600 dark:text-gray-400">
              קרן השתלמות היא המוצר המשתלם ביותר עבור עצמאים בזכות הטבות המס הייחודיות והפטור המלא ממס רווחי הון. 
              מומלץ קודם למצות את תקרת ההפקדה בקרן השתלמות (20,520 ₪ לשנה לעצמאים), ורק לאחר מכן לשקול קופת גמל להשקעה כאפיק משלים.
            </p>
          </div>
        </section>

        {/* איך לבחור קופת גמל להשקעה */}
        <section id="how-to-choose" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            איך לבחור קופת גמל להשקעה?
          </h2>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">פרמטרים להשוואה</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold block text-gray-900 dark:text-gray-100">תשואות</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        בדיקת ביצועים לאורך 5 שנים לפחות, תוך השוואה למסלולים דומים
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calculator className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold block text-gray-900 dark:text-gray-100">דמי ניהול</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        השוואת דמי ניהול מהפקדה ומצבירה בין מספר חברות
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">טיפים חשובים</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold block text-gray-900 dark:text-gray-100">התאמה אישית</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        בחירת מסלול השקעה המתאים לגיל ולמטרות החיסכון
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold block text-gray-900 dark:text-gray-100">תכנון לטווח ארוך</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        התחשבות באופק ההשקעה ובצרכי הנזילות העתידיים
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">מדד שארפ - כלי להשוואה</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  מדד שארפ מודד את התשואה העודפת ביחס לסיכון. ככל שהמדד גבוה יותר, כך הקופה השיגה תשואה טובה יותר ביחס לרמת הסיכון שלקחה.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">איך לקרוא את המדד?</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• מדד גבוה מ-1: ביצועים טובים ביחס לסיכון</li>
                    <li>• מדד בין 0 ל-1: ביצועים סבירים</li>
                    <li>• מדד שלילי: ביצועים נמוכים מהסיכון שנלקח</li>
                  </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  ניתן למצוא את מדד שארפ של כל קופה באתרי החברות המנהלות או באתר "הר הכסף" של משרד האוצר.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* סיכום */}
        <section id="summary" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            סיכום
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">
              קופת גמל להשקעה מהווה פתרון מצוין עבור חוסכים המחפשים שילוב של גמישות מקסימלית עם ניהול השקעות מקצועי. היתרונות המרכזיים כוללים:
            </p>
            <ul className="space-y-2 mb-6">
              <li>נזילות מלאה ללא קנסות</li>
              <li>דמי ניהול תחרותיים</li>
              <li>אפשרות להטבות מס בגיל פרישה</li>
              <li>מגוון מסלולי השקעה</li>
            </ul>
            <p>
              חשוב לבצע השוואה מקיפה בין הקופות השונות ולבחור את המסלול המתאים לצרכים האישיים ולאופק ההשקעה שלכם.
            </p>
          </div>

          {/* קריאה לפעולה */}
          <div className="mt-8 text-center">
            <Link 
              href="/calculators/investment-compare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
            >
              <Calculator className="w-5 h-5" />
              להשוואת מסלולי השקעה
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            שאלות נפוצות
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
                האם ניתן למשוך את הכסף בכל רגע?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                כן, קופת גמל להשקעה מאפשרת משיכת כספים בכל עת, ללא קנסות. יש לקחת בחשבון תשלום מס רווחי הון של 25% על הרווחים.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
                האם יש מינימום להפקדה חודשית?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                המינימום משתנה בין החברות המנהלות, אך בדרך כלל נע בין 150-500 ₪ להפקדה חודשית.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
                האם ניתן לקבל הלוואה כנגד הכספים?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                כן, ניתן לקבל הלוואה בתנאים נוחים של עד 80% מהיתרה הצבורה, בריבית אטרקטיבית.
              </p>
            </div>
          </div>
        </section>

        {/* המשך התוכן... */}
      </div>
    </div>
  );
}
