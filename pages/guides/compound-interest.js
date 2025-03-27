import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { TrendingUp, Info, ArrowRight, Calculator, LineChart, PiggyBank, Clock } from 'lucide-react';

export default function CompoundInterestGuide() {
  return (
    <>
      <NextSeo
        title="מדריך מקיף לריבית דריבית והצמיחה של כסף | דריבית"
        description="מדריך מקיף להבנת עקרון ריבית דריבית, כיצד לחשב אותה, שימושים מעשיים וטיפים להגדלת החיסכון הפנסיוני באמצעותה"
        canonical="https://www.deribit.co.il/guides/compound-interest"
        openGraph={{
          title: "מדריך מקיף לריבית דריבית והצמיחה של כסף | דריבית",
          description: "מדריך מקיף להבנת עקרון ריבית דריבית, כיצד לחשב אותה, שימושים מעשיים וטיפים להגדלת החיסכון הפנסיוני באמצעותה",
          url: "https://www.deribit.co.il/guides/compound-interest",
          site_name: "דריבית"
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/guides" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ArrowRight className="w-4 h-4" />
              חזרה למדריכים
            </Link>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              מדריך מקיף לריבית דריבית
            </h1>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mb-12">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                מה תלמדו במדריך הזה?
              </h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-2">• מהי ריבית דריבית ולמה היא כל כך חשובה</li>
                <li className="flex items-center gap-2">• הנוסחה לחישוב ריבית דריבית והדגמות מעשיות</li>
                <li className="flex items-center gap-2">• גורמים המשפיעים על צמיחת הכסף</li>
                <li className="flex items-center gap-2">• שימושים מעשיים של ריבית דריבית</li>
                <li className="flex items-center gap-2">• טיפים להגדלת החיסכון באמצעות ריבית דריבית</li>
                <li className="flex items-center gap-2">• דוגמאות ותרחישים מחיי היומיום</li>
              </ul>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                מהי ריבית דריבית?
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  ריבית דריבית היא אחד העקרונות החזקים ביותר בעולם הפיננסי. היא מתארת את התהליך בו 
                  הריבית שנצברת על השקעה מתווספת לקרן ומתחילה אף היא להרוויח ריבית. 
                  למעשה, זוהי "ריבית על הריבית".
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  במילים פשוטות, כאשר אתם משקיעים כסף ומרוויחים ריבית, הריבית הזו מתווספת 
                  לסכום המקורי שהשקעתם. בתקופה הבאה, גם הריבית שהצטברה מתחילה להרוויח ריבית, 
                  וכך הסכום גדל בקצב מואץ יותר ככל שחולף הזמן.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">היתרונות של ריבית דריבית</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>האצת גידול ההשקעה</strong> - ככל שחולף הזמן, ההשקעה גדלה בקצב מהיר יותר</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>כוח הזמן</strong> - ככל שתקופת ההשקעה ארוכה יותר, כך האפקט גדול יותר</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>אפקט כדור השלג</strong> - הצמיחה נעשית משמעותית יותר ככל שהסכום גדל</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>פוטנציאל לעצמאות פיננסית</strong> - באמצעות השקעה עקבית וזמן</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>פתרון לחיסכון פנסיוני</strong> - מקסום החיסכון לטווח ארוך</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-500" />
                איך מחשבים ריבית דריבית?
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  חישוב ריבית דריבית מבוסס על נוסחה מתמטית פשוטה, שמביאה בחשבון את הסכום ההתחלתי, 
                  שיעור הריבית, ומספר תקופות הריבית.
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3">הנוסחה הבסיסית לחישוב ריבית דריבית:</h3>
                  <p className="font-mono text-lg">A = P(1 + r)^n</p>
                  <ul className="mt-4 space-y-2">
                    <li><strong>A</strong> = הסכום הסופי</li>
                    <li><strong>P</strong> = ההשקעה הראשונית (הקרן)</li>
                    <li><strong>r</strong> = שיעור הריבית השנתית (באחוזים, מחולק ב-100)</li>
                    <li><strong>n</strong> = מספר השנים</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">דוגמה מספרית</h3>
                <p className="mb-4">נניח שהשקעתם 10,000 ₪ בהשקעה המניבה 5% בשנה למשך 20 שנה:</p>
                <ul className="space-y-3 mb-6">
                  <li>• <strong>P</strong> = 10,000 ₪</li>
                  <li>• <strong>r</strong> = 5% = 0.05</li>
                  <li>• <strong>n</strong> = 20 שנים</li>
                </ul>
                <p className="mb-4">בהצבה בנוסחה:</p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-6">
                  <p className="font-mono">A = 10,000 × (1 + 0.05)^20 = 10,000 × 2.6533 = 26,533 ₪</p>
                </div>
                <p className="text-green-600 dark:text-green-400 font-semibold">כלומר, אחרי 20 שנה, ההשקעה שלכם תגדל לכ-26,533 ₪, למרות שהשקעתם רק 10,000 ₪.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mt-4">
                <h3 className="text-xl font-semibold mb-4">ריבית דריבית עם הפקדות חודשיות</h3>
                <p className="text-lg leading-relaxed mb-6">
                  בחיסכון פנסיוני או בתוכניות חיסכון רבות, נהוג להפקיד סכום קבוע מדי חודש. 
                  הנוסחה במקרה כזה מעט מורכבת יותר:
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-6">
                  <p className="font-mono text-lg">A = P(1 + r)^n + PMT × [(1 + r)^n - 1] / r</p>
                  <ul className="mt-4 space-y-2">
                    <li><strong>PMT</strong> = ההפקדה החודשית</li>
                    <li>יתר המשתנים זהים לנוסחה הקודמת</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">דוגמה עם הפקדות חודשיות</h3>
                <p className="mb-4">נניח שמלבד ההשקעה הראשונית של 10,000 ₪, אתם מפקידים 500 ₪ מדי חודש במשך 20 שנה, בריבית של 5% שנתית:</p>
                <ul className="space-y-2 mb-6">
                  <li>• <strong>P</strong> = 10,000 ₪</li>
                  <li>• <strong>PMT</strong> = 500 ₪ בחודש = 6,000 ₪ בשנה</li>
                  <li>• <strong>r</strong> = 5% = 0.05</li>
                  <li>• <strong>n</strong> = 20 שנים</li>
                </ul>
                <p className="mb-4">חישוב מקורב לפי הנוסחה:</p>
                <p className="font-mono mb-2 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  A = 10,000 × (1 + 0.05)^20 + 6,000 × [(1 + 0.05)^20 - 1] / 0.05
                </p>
                <p className="font-mono mb-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  A = 26,533 + 6,000 × 33.066 = 26,533 + 198,396 = 224,929 ₪
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  כלומר, עם הפקדות חודשיות, ההשקעה שלכם תגיע לכ-225,000 ₪ לאחר 20 שנה, 
                  למרות שהשקעתם באופן ישיר רק 130,000 ₪ (10,000 ₪ בהתחלה + 6,000 ₪ × 20 שנים).
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-purple-500" />
                גורמים המשפיעים על ריבית דריבית
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  ישנם מספר גורמים מרכזיים המשפיעים על העוצמה של ריבית דריבית. הבנה שלהם תעזור לכם למקסם את התשואה על השקעותיכם:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">1. אורך תקופת ההשקעה</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      זהו הגורם המשמעותי ביותר. ככל שתקופת ההשקעה ארוכה יותר, כך אפקט הריבית דריבית משמעותי יותר.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                      <p className="flex items-center gap-2">
                        <Info className="w-5 h-5 text-yellow-500 shrink-0" />
                        <span>אלברט איינשטיין כינה את ריבית דריבית "הכוח הגדול ביותר ביקום" וציין שמי שמבין אותה - מרוויח אותה, ומי שלא - משלם אותה.</span>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">2. שיעור הריבית</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      הבדל של אחוזים בודדים בריבית יכול להשפיע דרמטית על התוצאה הסופית בטווח הארוך. 
                      לדוגמה, השקעה של 10,000 ₪ למשך 30 שנה בריבית של 4% תניב כ-32,434 ₪, 
                      בעוד שבריבית של 8% היא תניב כ-100,627 ₪ - פי שלושה!
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">3. תדירות חישוב הריבית</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      ככל שהריבית מחושבת לעיתים קרובות יותר (חודשית במקום שנתית, למשל), 
                      כך הסכום הסופי יהיה גבוה יותר. זה נקרא "ריבית אפקטיבית".
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">4. סכום ההשקעה וההפקדות השוטפות</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      ככל שתשקיעו יותר בהתחלה ותוסיפו הפקדות גדולות יותר באופן שוטף, 
                      כך הבסיס לחישוב הריבית יהיה גדול יותר וההשפעה של ריבית דריבית תהיה משמעותית יותר.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <PiggyBank className="w-6 h-6 text-red-500" />
                שימושים מעשיים של ריבית דריבית
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">חיסכון פנסיוני</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      ריבית דריבית היא הסיבה העיקרית לכך שחשוב להתחיל לחסוך לפנסיה מוקדם. 
                      ההפרשות המוקדמות מרוויחות ריבית למשך תקופה ארוכה יותר.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <p>
                        לדוגמה: אדם שמתחיל לחסוך בגיל 25 יכול להגיע לאותו סכום בפנסיה כמו אדם שמתחיל בגיל 35, 
                        אך עם פחות מחצית מההפקדות החודשיות!
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">השקעות בשוק ההון</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      רווחים מהשקעות במניות או קרנות נאמנות מושקעים מחדש ומייצרים תשואה נוספת. 
                      אסטרטגיית "קנה והחזק" לטווח ארוך מבוססת על עקרון זה.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <p>
                        שוק המניות האמריקאי הניב תשואה ממוצעת של כ-10% בשנה לאורך המאה ה-20, 
                        כולל תקופות משבר. השקעה של 10,000$ ב-1900 הייתה שווה מיליונים בסוף המאה.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">משכנתאות והלוואות</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      ריבית דריבית פועלת גם בכיוון ההפוך - בהלוואות ומשכנתאות אתם משלמים ריבית על הריבית. 
                      לכן כדאי לשלם מוקדם ככל האפשר.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <p>
                        תשלום נוסף של 10% ממשכנתא של 30 שנה בשנים הראשונות יכול לקצר את תקופת ההחזר בשנים רבות 
                        ולחסוך עשרות אלפי שקלים בריבית.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">תוכניות חיסכון לילדים</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      הפקדה קטנה בעבור ילד בגיל צעיר תצמח משמעותית עד הגיעו לבגרות, 
                      בזכות תקופת הצמיחה הארוכה.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <p>
                        הפקדה חודשית של 200 ₪ מלידה ועד גיל 18, בריבית של 5%, 
                        תצבור סכום של כ-77,000 ₪, מתוכם רק 43,200 ₪ הופקדו ישירות.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <LineChart className="w-6 h-6 text-blue-500" />
                טיפים להגדלת החיסכון באמצעות ריבית דריבית
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <ol className="space-y-4">
                  <li>
                    <strong>1. התחילו מוקדם ככל האפשר</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      הזמן הוא המשאב החשוב ביותר בניצול ריבית דריבית. 10 שנים נוספות יכולות להכפיל את סכום החיסכון הסופי.
                    </p>
                  </li>
                  <li>
                    <strong>2. הגדילו את שיעור החיסכון שלכם</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      נסו להפריש לפחות 10%-15% מההכנסה החודשית שלכם לחיסכון והשקעות. 
                      כל אחוז נוסף משפיע דרמטית לאורך זמן.
                    </p>
                  </li>
                  <li>
                    <strong>3. בחרו אפיקי השקעה עם תשואה גבוהה יותר לטווח ארוך</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      ככל שהמועד בו תזדקקו לכסף רחוק יותר, כך תוכלו להשקיע באפיקים תנודתיים יותר, 
                      אך עם פוטנציאל תשואה גבוה יותר (כמו מניות).
                    </p>
                  </li>
                  <li>
                    <strong>4. השקיעו באופן אוטומטי וקבוע</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      הגדירו הוראות קבע להפקדות חודשיות לחיסכון. זה מבטיח שלא תדלגו על חודשים 
                      ותמשיכו לבנות את הבסיס לריבית דריבית.
                    </p>
                  </li>
                  <li>
                    <strong>5. השקיעו מחדש את הרווחים</strong>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      אל תמשכו דיבידנדים או רווחים מהשקעות, אלא השקיעו אותם מחדש. 
                      כך תמקסמו את אפקט הריבית דריבית.
                    </p>
                  </li>
                </ol>
              </div>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mt-12">
              <h2 className="text-xl font-semibold mb-6">סיכום</h2>
              <p className="leading-relaxed text-lg mb-4">
                ריבית דריבית היא אחד הכלים החזקים ביותר לבניית עושר לטווח ארוך. היא הבסיס 
                להשקעות מוצלחות, חיסכון פנסיוני, ועצמאות פיננסית.
              </p>
              <p className="leading-relaxed text-lg">
                העקרונות המרכזיים להצלחה הם פשוטים: התחילו מוקדם, חסכו באופן קבוע, 
                השקיעו את הכסף בחוכמה, והתאזרו בסבלנות. אם תעקבו אחרי עקרונות אלו, 
                תוכלו להפוך סכומים קטנים להון משמעותי לאורך זמן.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}