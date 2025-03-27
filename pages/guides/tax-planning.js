import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ReceiptText, ArrowRight, Info, Calculator, ShieldCheck, TrendingDown, Clock } from 'lucide-react';

export default function TaxPlanningGuide() {
  return (
    <>
      <NextSeo
        title="מדריך מקיף לתכנון מס ונקודות זיכוי בישראל | דריבית"
        description="מדריך מקיף לתכנון מס חכם ומיצוי נקודות זיכוי בישראל - כולל טיפים להפחתת חבות המס, הטבות שכדאי להכיר, ואסטרטגיות מס חוקיות"
        canonical="https://www.deribit.co.il/guides/tax-planning"
        openGraph={{
          title: "מדריך מקיף לתכנון מס ונקודות זיכוי בישראל | דריבית",
          description: "מדריך מקיף לתכנון מס חכם ומיצוי נקודות זיכוי בישראל - כולל טיפים להפחתת חבות המס, הטבות שכדאי להכיר, ואסטרטגיות מס חוקיות",
          url: "https://www.deribit.co.il/guides/tax-planning",
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
              <ReceiptText className="w-8 h-8 text-blue-500" />
              מדריך מקיף לתכנון מס ונקודות זיכוי בישראל
            </h1>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mb-12">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                מה תלמדו במדריך הזה?
              </h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-2">• עקרונות בסיסיים בתכנון מס חכם ומותאם אישית</li>
                <li className="flex items-center gap-2">• נקודות זיכוי ממס הכנסה - למי מגיעות וכיצד לנצל אותן</li>
                <li className="flex items-center gap-2">• הטבות מס משמעותיות שרבים אינם מודעים אליהן</li>
                <li className="flex items-center gap-2">• אסטרטגיות להפחתת חבות המס באופן חוקי</li>
                <li className="flex items-center gap-2">• תכנון מס לעצמאים ובעלי עסקים קטנים</li>
                <li className="flex items-center gap-2">• מועדים חשובים והתנהלות מול רשויות המס</li>
              </ul>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-green-500" />
                עקרונות בסיסיים בתכנון מס
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  תכנון מס הוא תהליך חוקי שמטרתו למזער את חבות המס שלכם, באמצעות ניצול 
                  הטבות, פטורים וניכויים שמעניק החוק. תכנון מס נכון עשוי לחסוך לכם 
                  אלפי שקלים בשנה ולהגדיל את ההכנסה הפנויה שלכם.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">ההבדל בין התחמקות ממס לתכנון מס חוקי</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-700 dark:text-red-400">התחמקות ממס (לא חוקי)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 leading-relaxed">• אי דיווח על הכנסות</li>
                      <li className="flex items-start gap-2 leading-relaxed">• הצהרות כוזבות בדוחות</li>
                      <li className="flex items-start gap-2 leading-relaxed">• הסתרת נכסים או הכנסות</li>
                      <li className="flex items-start gap-2 leading-relaxed">• שימוש בחשבוניות פיקטיביות</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">תכנון מס (חוקי)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 leading-relaxed">• ניצול פטורים והטבות בחוק</li>
                      <li className="flex items-start gap-2 leading-relaxed">• תזמון הכנסות והוצאות</li>
                      <li className="flex items-start gap-2 leading-relaxed">• הפרדת הכנסות בין בני משפחה</li>
                      <li className="flex items-start gap-2 leading-relaxed">• תכנון מסלולי השקעה מועדפים</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">עקרונות מפתח בתכנון מס אפקטיבי</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>תכנון מוקדם:</strong> אל תחכו לסוף השנה - תכנון מס אפקטיבי מתחיל בתחילת שנת המס</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>תיעוד מדויק:</strong> שמירת קבלות ומסמכים רלוונטיים להוצאות שניתן לדרוש בגינן הטבות</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>היכרות עם החוק:</strong> הבנת ההטבות והפטורים הרלוונטיים למצבכם האישי והעסקי</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>קבלת ייעוץ מקצועי:</strong> התייעצות עם רואה חשבון או יועץ מס בהתאם לצורך</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>עדכון שוטף:</strong> מעקב אחר שינויים בחקיקת המס הרלוונטית לכם</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
                נקודות זיכוי ממס הכנסה
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  נקודות זיכוי הן הטבת מס משמעותית המפחיתה את סכום המס שעליכם לשלם. 
                  כל נקודת זיכוי שווה 2,832 ₪ בשנה (נכון ל-2024). חשוב להכיר את כל נקודות 
                  הזיכוי המגיעות לכם כדי למקסם את החיסכון במס.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">נקודות זיכוי בסיסיות</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>תושב ישראל:</strong> 2.25 נקודות זיכוי לכל תושב ישראל</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>נשים:</strong> 0.5 נקודת זיכוי נוספת לנשים (סה"כ 2.75)</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>הורים:</strong> נקודות זיכוי בגין ילדים (משתנה לפי גיל הילדים ומספרם)</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>חד הוריים:</strong> נקודת זיכוי נוספת להורה במשפחה חד הורית</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">נקודות זיכוי בגין השכלה</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>תואר אקדמי ראשון:</strong> נקודת זיכוי אחת למשך 3 שנים מסיום התואר</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>תואר אקדמי שני:</strong> 1/2 נקודת זיכוי למשך שנתיים מסיום התואר</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>תואר ברפואה/רפואת שיניים:</strong> 3 נקודות זיכוי למשך 3 שנים מסיום התואר</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>לימודי מקצוע:</strong> נקודת זיכוי אחת למשך 3 שנים בגין לימודי מקצוע שהסתיימו בשנת 2014 ואילך (1,200 שעות לימוד)</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">נקודות זיכוי להורים</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border p-2">גיל הילד</th>
                        <th className="border p-2">אבות</th>
                        <th className="border p-2">אמהות</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">שנת לידה עד 5</td>
                        <td className="border p-2">1.5 נקודות לכל ילד</td>
                        <td className="border p-2">1.5 נקודות לכל ילד</td>
                      </tr>
                      <tr>
                        <td className="border p-2">6-17</td>
                        <td className="border p-2">1 נקודה לכל ילד</td>
                        <td className="border p-2">1 נקודה לכל ילד</td>
                      </tr>
                      <tr>
                        <td className="border p-2">18</td>
                        <td className="border p-2">-</td>
                        <td className="border p-2">0.5 נקודות לכל ילד</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-500" />
                    כיצד לוודא שאתם מקבלים את כל נקודות הזיכוי
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 leading-relaxed">• עדכנו את טופס 101 אצל המעסיק בכל שינוי במצב האישי (נישואין, לידה וכדומה)</li>
                    <li className="flex items-start gap-2 leading-relaxed">• הגישו דו"ח שנתי למס הכנסה גם אם אינכם חייבים בהגשה</li>
                    <li className="flex items-start gap-2 leading-relaxed">• בדקו זכאות להחזר מס רטרואקטיבי עבור 6 השנים האחרונות</li>
                    <li className="flex items-start gap-2 leading-relaxed">• שמרו תעודות ואישורים (תארים אקדמיים, לימודי מקצוע, שירות מילואים)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingDown className="w-6 h-6 text-purple-500" />
                הטבות מס משמעותיות שכדאי להכיר
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">1. הפקדות לפנסיה וקרנות השתלמות</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>פנסיה:</strong> זיכוי מס של 35% על הפקדות עד 7% מהשכר המבוטח (עד תקרה מסוימת)</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>ביטוח אובדן כושר עבודה:</strong> הטבת מס על הפקדות עד 3.5% מהשכר</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>קרן השתלמות לשכירים:</strong> הפקדות עד 2.5% מהשכר (עד תקרה) פטורות ממס</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>קרן השתלמות לעצמאים:</strong> הפקדות עד 4.5% מההכנסה החייבת (עד תקרה) מוכרות כהוצאה</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">2. הטבות להורים</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>סבסוד מעונות יום וצהרונים:</strong> בהתאם לרמת הכנסה ומספר ילדים</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>מענק עבודה (מס הכנסה שלילי):</strong> עבור הורים עובדים ברמת הכנסה נמוכה</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>זיכוי בגין הוצאות החזקת קרוב במוסד:</strong> עבור ילדים עם מוגבלויות</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">3. הטבות מס בתחום הנדל"ן</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>פטור ממס שבח במכירת דירת מגורים:</strong> בהתאם לכללים (בדרך כלל אחת ל-4 שנים)</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>ניכוי הוצאות ריבית על משכנתא:</strong> בנדל"ן להשקעה</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>פחת:</strong> הוצאה מוכרת על נדל"ן להשקעה (בד"כ 2%-4% מערך המבנה)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">4. הטבות בחיסכון והשקעות</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>פטור ממס על קופות גמל:</strong> בתנאים מסוימים לאחר גיל הפרישה</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>פטור ממס על קרנות השתלמות:</strong> לאחר 6 שנים (3 שנים למטרות השתלמות)</li>
                      <li className="flex items-start gap-2 leading-relaxed">• <strong>קיזוז הפסדי הון:</strong> כנגד רווחי הון באותה שנת מס ובשנים הבאות</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-red-500" />
                מועדים חשובים והתנהלות מול רשויות המס
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">מועדים חשובים</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border p-2">תאריך</th>
                        <th className="border p-2">פעולה</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">31 בדצמבר</td>
                        <td className="border p-2">סיום שנת המס וביצוע פעולות לתכנון מס לשנה הנוכחית</td>
                      </tr>
                      <tr>
                        <td className="border p-2">30 באפריל</td>
                        <td className="border p-2">הגשת דוח שנתי מקוון לשכירים החייבים בדיווח</td>
                      </tr>
                      <tr>
                        <td className="border p-2">31 במאי</td>
                        <td className="border p-2">הגשת דוח שנתי מקוון לעצמאים ובעלי שליטה</td>
                      </tr>
                      <tr>
                        <td className="border p-2">30 ביוני</td>
                        <td className="border p-2">תשלום מקדמה על רווחי הון ממכירת ניירות ערך (לחציון ראשון)</td>
                      </tr>
                      <tr>
                        <td className="border p-2">31 בדצמבר</td>
                        <td className="border p-2">תשלום מקדמה על רווחי הון ממכירת ניירות ערך (לחציון שני)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">טיפים להתנהלות יעילה מול רשויות המס</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>שמירת מסמכים:</strong> שמרו קבלות, אישורים ומסמכים רלוונטיים למשך 7 שנים לפחות</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>דיווח בזמן:</strong> הקפידו על הגשת דוחות ותשלומים במועדם כדי להימנע מקנסות</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>אתר רשות המסים:</strong> השתמשו בשירותים המקוונים לבדיקת זכאות להחזרי מס ומידע אישי</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>בדיקת החזרי מס:</strong> בחנו אפשרות להגיש בקשה להחזר מס רטרואקטיבית (עד 6 שנים אחורה)</li>
                  <li className="flex items-start gap-2 leading-relaxed">• <strong>ייעוץ מקצועי:</strong> התייעצו עם רואה חשבון או יועץ מס במקרים מורכבים</li>
                </ul>
              </div>
            </section>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-8 mt-12">
              <h2 className="text-xl font-semibold mb-6">סיכום</h2>
              <p className="leading-relaxed text-lg mb-4">
                תכנון מס נכון אינו רק לבעלי הון או לעצמאים - כל אזרח יכול להפחית את נטל המס באופן 
                חוקי באמצעות הכרת הזכויות וההטבות המגיעות לו. השקעת זמן בהבנת המערכת יכולה 
                לחסוך אלפי שקלים בשנה ולהגדיל את ההכנסה הפנויה.
              </p>
              <p className="leading-relaxed text-lg">
                זכרו כי חוקי המס משתנים מעת לעת, ולכן חשוב להתעדכן. במקרים מורכבים, שקלו לפנות 
                לייעוץ מקצועי שיכול להחזיר את עצמו פי כמה באמצעות החיסכון במס. מיצוי זכויותיכם 
                במס אינו רק חוקי - זו זכותכם המלאה.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 