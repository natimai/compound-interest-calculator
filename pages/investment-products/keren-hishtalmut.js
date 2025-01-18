import Head from 'next/head'
import Link from 'next/link'
import { ChevronRight, PiggyBank, TrendingUp, Clock, Shield, Calculator, AlertTriangle, Sparkles } from 'lucide-react'

export default function KerenHishtalmut() {
  const currentYear = new Date().getFullYear();
  
  const pageTitle = `קרן השתלמות ${currentYear} - המדריך המקיף להטבת המס הטובה בישראל | דריבית`;
  const pageDescription = `מדריך מקיף לקרן השתלמות ${currentYear}: הטבת המס המשתלמת ביותר בישראל ללא תקרת רווחים. תקרות הפקדה, פטור ממס רווחי הון, מסלולי השקעה והשוואת קרנות. כל מה שצריך לדעת על קרן השתלמות לשכירים ועצמאים.`;
  const pageKeywords = `קרן השתלמות, קרן השתלמות ${currentYear}, תקרת הפקדה קרן השתלמות ${currentYear}, הטבות מס קרן השתלמות, קרן השתלמות לעצמאים, קרן השתלמות לשכירים, פטור ממס רווחי הון, השוואת קרנות השתלמות, מסלולי השקעה קרן השתלמות`;
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>מדריך קרן השתלמות 2024 | הטבת המס הטובה בישראל - דריבית</title>
        <meta name="description" content="המדריך המקיף לקרן השתלמות: הטבת המס המשתלמת ביותר בישראל, פטור ממס רווחי הון, השוואת דמי ניהול ותשואות, מסלולי השקעה ומשיכה מקרן השתלמות." />
        <meta name="keywords" content="קרן השתלמות, השוואת קרנות השתלמות, דמי ניהול קרן השתלמות, מסלולי השקעה, הטבות מס" />
        <link rel="canonical" href="https://www.deribit.co.il/investment-products/keren-hishtalmut" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://www.deribit.co.il/investment-products/keren-hishtalmut" />
        <meta property="og:site_name" content="דריבית - השוואת מוצרים פיננסיים" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.deribit.co.il/investment-products/keren-hishtalmut" />

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
              "@id": "https://www.deribit.co.il/investment-products/keren-hishtalmut"
            },
            "headline": `קרן השתלמות ${currentYear} - המדריך המקיף`,
            "description": pageDescription,
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
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/investment-products" className="text-blue-600 hover:text-blue-800">
            ← חזרה למוצרי השקעה
          </Link>
        </nav>

        <header className="mb-16 text-center">
          <div className="inline-block mb-4">
            <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
              קרן השתלמות
            </span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            הפלא הכלכלי הגדול ביותר שישראל ידעה
            <span className="block text-lg mt-2 text-gray-500">
              אפיק חיסכון המשלב ניהול השקעות מקצועי עם הטבות מס חסרות תקדים
            </span>
          </p>
        </header>

        <div className="space-y-8">
          {/* מהי קרן השתלמות */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              מהי קרן השתלמות?
            </h2>
            <div className="prose dark:prose-invert max-w-none space-y-4">
              <p>
                קרן השתלמות היא אפיק חיסכון לטווח בינוני המציע שילוב ייחודי של הטבות מס משמעותיות עם גמישות במשיכת הכספים. 
                למרות שמה, אין חובה להשתמש בכספים להשתלמות, וניתן למשוך אותם לכל מטרה לאחר 6 שנות חיסכון.
              </p>
              <p>
                היתרונות העיקריים של קרן השתלמות:
              </p>
              <ul className="space-y-2">
                <li>• פטור מלא ממס רווחי הון לאחר 6 שנים</li>
                <li>• הטבות מס על ההפקדות השוטפות</li>
                <li>• אפשרות למשיכה מוקדמת לאחר 3 שנים במקרים מיוחדים</li>
                <li>• ניהול השקעות מקצועי במגוון מסלולי השקעה</li>
                <li>• אפשרות לקבלת הלוואה בתנאים נוחים</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">למי מתאימה?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <span className="text-gray-600 dark:text-gray-400">שכירים - דרך המעסיק</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <span className="text-gray-600 dark:text-gray-400">עצמאים - הפקדות עצמאיות</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <span className="text-gray-600 dark:text-gray-400">עובדי הוראה - במסלול ייחודי</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">תנאי משיכה</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-600 dark:text-gray-400">משיכה מלאה - לאחר 6 שנים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-600 dark:text-gray-400">משיכה להשתלמות - לאחר 3 שנים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-600 dark:text-gray-400">משיכה בגיל פרישה - לאחר 3 שנים</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* הטבות מס */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              הטבות מס משמעותיות
            </h2>
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  קרן השתלמות מציעה שילוב ייחודי של הטבות מס בהפקדה ובמשיכה, מה שהופך אותה לאחד 
                  ממכשירי החיסכון האטרקטיביים ביותר בישראל.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">הטבות בהפקדה:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">פטור ממס על הפקדות המעסיק (עד 7.5%)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">הוצאה מוכרת לעצמאים (עד 4.5%)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">הטבות במשיכה:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">פטור מלא ממס רווחי הון לאחר 6 שנים</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">אפשרות למשיכה מוקדמת בתנאים מסוימים</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* טיפ מקצועי */}
          <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">טיפ מקצועי 💡</h3>
            <p className="text-gray-700">
              בבחירת קרן השתלמות, מומלץ להתייחס לשלושה פרמטרים עיקריים: תשואות היסטוריות (לטווח של 5 שנים לפחות),
              דמי ניהול, ואיכות השירות. ניתן להשוות בין קרנות באתר משרד האוצר.
            </p>
          </div>

          {/* מסלולי השקעה */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              מסלולי השקעה
            </h2>
            <div className="prose dark:prose-invert max-w-none mb-6">
              <p>
                קרנות ההשתלמות מציעות מגוון מסלולי השקעה המותאמים לרמות סיכון שונות ולצרכים שונים של החוסכים.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">מסלול מנייתי</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  לפחות 75% מנכסי המסלול מושקעים במניות. מתאים לחוסכים המעוניינים בחשיפה גבוהה לשוק ההון.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">מסלול אג"ח</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  מרבית ההשקעות באגרות חוב ממשלתיות וקונצרניות. מתאים לחוסכים המעדיפים סיכון נמוך יחסית.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <PiggyBank className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">מסלול כללי</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  שילוב מאוזן של אפיקי השקעה שונים. מתאים לרוב החוסכים המעוניינים בפיזור סיכונים.
                </p>
              </div>
            </div>
          </section>

          {/* תקרות הפקדה */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              תקרות הפקדה {currentYear}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">שכירים</h3>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <div>
                        <span className="font-bold text-gray-900 dark:text-gray-100">תקרת שכר חודשית:</span>
                        <p className="text-gray-600 dark:text-gray-400">15,712 ₪</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <div>
                        <span className="font-bold text-gray-900 dark:text-gray-100">הפקדת עובד:</span>
                        <p className="text-gray-600 dark:text-gray-400">עד 2.5% (393 ₪)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <div>
                        <span className="font-bold text-gray-900 dark:text-gray-100">הפקדת מעסיק:</span>
                        <p className="text-gray-600 dark:text-gray-400">עד 7.5% (1,178 ₪)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">עצמאים</h3>
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <div>
                        <span className="font-bold text-gray-900 dark:text-gray-100">תקרת הכנסה שנתית:</span>
                        <p className="text-gray-600 dark:text-gray-400">293,397 ₪</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <div>
                        <span className="font-bold text-gray-900 dark:text-gray-100">הפקדה מוכרת לניכוי:</span>
                        <p className="text-gray-600 dark:text-gray-400">עד 4.5% (13,203 ₪ בשנה)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <div>
                        <span className="font-bold text-gray-900 dark:text-gray-100">תקרת הפקדה שנתית:</span>
                        <p className="text-gray-600 dark:text-gray-400">20,520 ₪</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* טיפ חשוב - מועבר לכאן */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border-r-4 border-blue-500 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">💡 טיפ חשוב!</h3>
              <p className="text-gray-700 dark:text-gray-300">
                שכירים שהם גם עצמאים יכולים להנות מ<span className="font-bold">שתי תקרות ההפקדה במקביל</span>:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
                <li>• תקרה כשכיר: עד 15,712 ₪ בחודש (הפקדות עובד ומעסיק)</li>
                <li>• תקרה כעצמאי: עד 20,520 ₪ בשנה</li>
                <li>• סה"כ אפשרות לחיסכון משמעותי עם פטור מלא ממס רווחי הון!</li>
              </ul>
            </div>
          </section>

          {/* תנאי משיכה */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              תנאי משיכה מקרן השתלמות
            </h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  קרן השתלמות מציעה מספר אפשרויות למשיכת הכספים, כאשר כל אפשרות מלווה בתנאים והטבות מס שונות.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">משיכה בפטור מלא ממס</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">לאחר 6 שנים מההפקדה הראשונה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">לאחר 3 שנים למטרת השתלמות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">לאחר 3 שנים בהגעה לגיל פרישה</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">משיכה מוקדמת</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">חיוב במס של 47% על הרווחים</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          (ניתן לקבל החזר בהגשת דוח שנתי למס הכנסה)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-6">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">אפשרויות נוספות</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">הלוואה מהקרן:</span>
                      <p className="text-gray-600 dark:text-gray-400">עד 50% מהיתרה הצבורה בריבית אטרקטיבית</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">משיכה חלקית:</span>
                      <p className="text-gray-600 dark:text-gray-400">אפשרית לאחר 6 שנים, אך תחסום הפקדות חדשות</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-lg">•</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">העברת כספים:</span>
                      <p className="text-gray-600 dark:text-gray-400">ניתן לנייד לקרן אחרת ללא אובדן ותק</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* מצבים מיוחדים */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              מצבים מיוחדים
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">חופשת לידה</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">המעסיק ממשיך להפריש למשך 15 שבועות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">אפשרות להשלמת הפקדות עובד רטרואקטיבית</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">חל"ת</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">אין חובת הפקדה מצד המעסיק</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">ניתן להשלים הפקדות עד סוף שנת המס</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">החלפת מעסיק</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">אפשרות להמשיך באותה קרן</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-indigo-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">שמירה על ותק והטבות</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">פטירה</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-pink-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">העברה למוטבים ללא מס</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">חשיבות בעדכון מוטבים</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* השוואת קרנות השתלמות */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              איך לבחור קרן השתלמות?
            </h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  בחירת קרן השתלמות מתאימה מחייבת השוואה מקיפה של מספר פרמטרים מרכזיים:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">תשואות</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">בדיקת תשואות ל-5 שנים לפחות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">השוואה למדד הייחוס הרלוונטי</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">בחינת יציבות התשואות</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">דמי ניהול</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">דמי ניהול מהצבירה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">דמי ניהול מההפקדות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">אפשרויות להנחות</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">שירות</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">זמינות שירות לקוחות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">ממשק דיגיטלי מתקדם</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">מגוון ערוצי שירות</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl mt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  טיפים להשוואה נכונה
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-lg">💡</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">השוואת מסלולים דומים:</span>
                      <p className="text-gray-600 dark:text-gray-400">יש להשוות בין מסלולי השקעה בעלי רמת סיכון דומה</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-lg">💡</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">בדיקת מדד שארפ:</span>
                      <p className="text-gray-600 dark:text-gray-400">מדד המשקלל תשואה מול סיכון</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500 text-lg">💡</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">שימוש במחשבון דמי ניהול:</span>
                      <p className="text-gray-600 dark:text-gray-400">לחישוב ההשפעה המצטברת של דמי הניהול לאורך זמן</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* מידע לעובדי הוראה */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              קרן השתלמות לעובדי הוראה
            </h2>
            
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  קרנות השתלמות לעובדי הוראה מציעות תנאים ייחודיים המותאמים לצרכי המורים והגננות.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">תנאים מיוחדים</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">הפקדות: 4.2% עובד + 8.4% מעסיק</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">אפשרות ליציאה לשנת שבתון</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">מימון השתלמויות מקצועיות</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">קרנות ייעודיות</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">קרן למורים וגננות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">קרן למורי תיכון ומפקחים</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-lg">•</span>
                      <span className="text-gray-600 dark:text-gray-400">קרן עגור למורי על-יסודי</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* טיפים מתקדמים */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              טיפים מתקדמים לניהול קרן השתלמות
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">אסטרטגיות חיסכון</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">💡</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">פיצול קרנות:</span>
                      <p className="text-gray-600 dark:text-gray-400">פתיחת מספר קרנות במועדים שונים ליצירת נזילות מדורגת</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-500 text-lg">💡</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">התאמת מסלול לגיל:</span>
                      <p className="text-gray-600 dark:text-gray-400">הפחתת רמת הסיכון ככל שמתקרבים למועד המשיכה</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">ניצול הטבות מס</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-lg">💡</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">תזמון הפקדות:</span>
                      <p className="text-gray-600 dark:text-gray-400">הפקדה בתחילת השנה לניצול מקסימלי של הטבות המס</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-lg">💡</span>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-gray-100">שילוב מעמדות:</span>
                      <p className="text-gray-600 dark:text-gray-400">ניצול תקרות הפקדה כשכיר וכעצמאי במקביל</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* כלים ומחשבונים */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              כלים ומחשבונים
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/calculators/keren-hishtalmut" className="block">
                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="w-6 h-6 text-blue-500" />
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">מחשבון חיסכון</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    חישוב החיסכון הצפוי בקרן השתלמות לפי סכום הפקדה ותקופה
                  </p>
                </div>
              </Link>

              <Link href="/calculators/management-fees" className="block">
                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="w-6 h-6 text-green-500" />
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">מחשבון דמי ניהול</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    השוואת עלויות דמי ניהול בין קרנות שונות
                  </p>
                </div>
              </Link>

              <Link href="/tools/keren-hishtalmut-comparison" className="block">
                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="w-6 h-6 text-purple-500" />
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">השוואת קרנות</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    כלי להשוואת תשואות ודמי ניהול בין קרנות שונות
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* שאלות נפוצות */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              שאלות נפוצות
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">האם ניתן לפתוח יותר מקרן השתלמות אחת?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  כן, ניתן לפתוח מספר קרנות השתלמות במקביל. שכירים יכולים לפתוח קרן נוספת כעצמאים, 
                  ועצמאים יכולים לפתוח מספר קרנות לפי בחירתם.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">מה קורה עם הקרן בעת החלפת מעסיק?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ניתן להמשיך עם אותה קרן השתלמות גם אצל המעסיק החדש. יש לעדכן את המעסיק החדש לגבי פרטי הקרן הקיימת.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">האם חייבים למשוך את הכספים אחרי 6 שנים?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  לא, ניתן להמשיך לחסוך בקרן גם לאחר 6 שנים. הכספים ימשיכו ליהנות מפטור ממס רווחי הון.
                </p>
              </div>
            </div>
          </section>

          {/* סיכום - חדש */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              סיכום: למה קרן השתלמות היא הטבת המס המשתלמת ביותר?
            </h2>
            
            <div className="prose dark:prose-invert max-w-none space-y-4">
              <p>
                קרן השתלמות היא למעשה ההטבה הכלכלית המשמעותית ביותר שהמדינה מעניקה לציבור החוסכים. 
                בניגוד למוצרי חיסכון אחרים, אין תקרה לרווחים שניתן לצבור בקרן השתלמות בפטור ממס.
              </p>
              
              <p>
                <strong>המלצתנו:</strong> להימנע ככל הניתן ממשיכת כספים מקרן ההשתלמות, גם אם היא נזילה. 
                עדיף להשתמש במקורות כספיים אחרים ולתת לכספי הקרן להמשיך ולצבור רווחים פטורים ממס לאורך שנים.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-xl mt-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  💰 כמה כסף תוכלו לחסוך?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  באמצעות מחשבון ריבית דריבית שלנו תוכלו לראות את ההשפעה המדהימה של חיסכון ארוך טווח בקרן השתלמות.
                  למשל, חיסכון של 20 שנה יכול להניב רווחים משמעותיים - הכל פטור ממס!
                </p>
                
                <Link 
                  href="/calculators/compound-interest"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  לחישוב הרווח הפוטנציאלי בקרן השתלמות
                </Link>
              </div>
            </div>
          </section>

          {/* כפתור למחשבון */}
          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              לחישוב החיסכון העתידי בקרן השתלמות →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}