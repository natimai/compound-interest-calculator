import Head from 'next/head';
import { Calculator } from '../../components/Calculator';
import Link from 'next/link';
import { ChevronRight, Info, TrendingUp, PiggyBank, Clock, HelpCircle, BarChart2, Users } from 'lucide-react';
import { WarningBox } from '../../components/Boxes';

export default function CompoundInterestCalculator() {
  return (
    <>
      <Head>
        <title>מחשבון ריבית דריבית | דריבית - חשבו את כוח ההשקעה שלכם</title>
        <meta name="description" content="מחשבון ריבית דריבית המתקדם בישראל - חשבו את התשואה הפוטנציאלית על ההשקעות שלכם לאורך זמן, כולל הפקדות חודשיות, דמי ניהול והמחשה ויזואלית." />
        <meta name="keywords" content="מחשבון ריבית דריבית, חישוב ריבית דריבית, תשואה על השקעות, הפקדות חודשיות, חיסכון ארוך טווח, כוח הריבית דריבית, מחשבון תשואה, חישוב תשואה, קופת גמל, קרן השתלמות, פנסיה" />
        <meta property="og:title" content="מחשבון ריבית דריבית | דריבית - חשבו את כוח ההשקעה שלכם" />
        <meta property="og:description" content="גלו את הפוטנציאל האמיתי של ההשקעות שלכם עם מחשבון ריבית דריבית מבית דריבית. כולל הפקדות, דמי ניהול והמחשה." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deribit.co.il/calculators/compound-interest" />
        <link rel="canonical" href="https://www.deribit.co.il/calculators/compound-interest" />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה למחשבונים
            </Link>
          </div>
          <Calculator />
          
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">הכל על מחשבון ריבית דריבית</h2>
            
            <div className="mb-10 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                מחשבון ריבית דריבית הוא כלי עוצמתי שיכול לשנות את הדרך בה אתם חושבים על כסף וחיסכון. הוא מאפשר לנו לבצע חישוב שכמעט בלתי אפשרי לבצע באופן אינטואיטיבי, ולהבין את **כוחה האמיתי של הריבית המצטברת** על ההשקעות שלנו לאורך זמן.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                המחשבון של דריבית נועד להמחיש לכם כמה תוכלו לצבור לאורך שנים, בהשקעה עקבית וחכמה. התכוננו להיות מופתעים מהתוצאות!
              </p>
            </div>
            
            <section className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                <HelpCircle className="w-6 h-6 text-blue-500" />
                מהי ריבית דריבית?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                ריבית דריבית היא למעשה "ריבית על ריבית". זהו הרווח שנוצר לא רק מהסכום המקורי שהשקעתם (הקרן), אלא גם מהרווחים שנצברו על הקרן לאורך התקופה. כאשר הרווחים הללו מתווספים לקרן ומתחילים גם הם לייצר רווחים נוספים, נוצר אפקט "כדור שלג".
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                לדוגמה: אם תשקיעו 1,000 ₪ בתשואה של 10% לשנה, בשנה הראשונה תרוויחו 100 ₪. אם תמשכו את הרווח, יישארו לכם 1,000 ₪. אך אם לא תמשכו, בשנה השנייה תתחילו עם 1,100 ₪, וה-10% יחושבו על הסכום הזה, כך שתרוויחו 110 ₪. בשנה השלישית תרוויחו 121 ₪, וכן הלאה. ככל שהזמן עובר, הצמיחה הופכת מהירה יותר ויותר.
              </p>
            </section>
            
            <section className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                <TrendingUp className="w-6 h-6 text-green-500" />
                למה חשוב להכיר את עיקרון הריבית דריבית?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                הבנת העיקרון הזה היא קריטית לניהול פיננסי נכון. מי שלא מבין את כוחה של הריבית דריבית, לרוב משלם אותה - בריביות על הלוואות, משכנתאות, מינוס בבנק וכרטיסי אשראי. הריבית הזו פועלת נגדו.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                לעומת זאת, מי שמבין את העיקרון יכול לרתום אותו לטובתו וליהנות ממנו דרך השקעות בשוק ההון, תוכניות חיסכון פנסיוני, נדל"ן מניב ועוד. הריבית הזו פועלת עבורו ומצמיחה את הונו.
              </p>
            </section>
            
            <section className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                <Users className="w-6 h-6 text-purple-500" />
                למי המחשבון רלוונטי?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                במילה אחת: <strong>לכולם.</strong> <br />
                בפירוט: המחשבון מתאים לכל מי שחוסך או משקיע לטווח ארוך, ובמיוחד למשקיעים פסיביים בשוק ההון.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-3">
                גם אם אינכם משקיעים באופן עצמאי, סביר להניח שיש לכם חיסכון פנסיוני (קרן פנסיה, ביטוח מנהלים או קופת גמל) וייתכן שיש לכם גם קרן השתלמות. כל הכספים הללו מושקעים בשוק ההון, בדרך כזו או אחרת, ומנגנון הריבית דריבית הוא המנוע המרכזי לצמיחתם לאורך שנים. לכן, הבנת הפוטנציאל באמצעות המחשבון רלוונטית לכל חוסך בישראל.
              </p>
            </section>
            
            <section className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                <PiggyBank className="w-6 h-6 text-blue-500" />
                איך להשתמש במחשבון?
              </h3>
              <ol className="space-y-4 text-gray-600 dark:text-gray-300 list-decimal list-inside">
                <li>
                  <strong>סכום השקעה ראשוני:</strong> הזינו את הסכום הנוכחי שיש לכם בחיסכון/השקעה הרלוונטית, או את הסכום הראשוני שאתם מתכננים להפקיד. אם אתם מתחילים מאפס, הזינו 0.
                </li>
                <li>
                  <strong>סכום הפקדה חודשית:</strong> הזינו את הסכום הקבוע שאתם מתכננים להפקיד מדי חודש לאותה השקעה/חיסכון. אם אינכם מתכננים הפקדות נוספות, הזינו 0.
                  <TipBox className="mt-2 text-sm">
                    <strong>טיפ:</strong> בחיסכון פנסיוני או קרן השתלמות, תוכלו למצוא את סכום ההפקדה החודשית (עובד + מעסיק) בדוחות הרבעוניים/שנתיים או בתלוש השכר.
                  </TipBox>
                </li>
                <li>
                  <strong>מספר שנות ההשקעה:</strong> כמה שנים אתם מתכננים להמשיך ולהפקיד ולהשאיר את הכסף מושקע? ככל שהטווח ארוך יותר, כך אפקט הריבית דריבית משמעותי יותר.
                </li>
                <li>
                  <strong>תשואה שנתית ממוצעת (%):</strong> זהו הנתון המורכב ביותר להערכה, מכיוון שתשואות העתיד אינן ידועות. מה שמזינים כאן הוא *הנחה* מבוססת ציפיות או נתוני עבר.
                  <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                    <li><strong>תלוי מסלול/רמת סיכון:</strong> ככלל, מסלולים עם חשיפה גבוהה יותר למניות (כמו מסלולים מחקי מדדים גלובליים כמו S&P 500 או MSCI World) צפויים להניב תשואה שנתית ממוצעת גבוהה יותר בטווח הארוך, אך גם יהיו תנודתיים יותר. מסלולים סולידיים יותר (אג"ח, פקדונות) או מסלולים תלויי גיל צפויים להניב תשואה נמוכה יותר אך עם תנודתיות נמוכה יותר.</li>
                    <li><strong>ממוצע היסטורי כנקודת ייחוס (לא הבטחה!):</strong> לדוגמה, התשואה השנתית הממוצעת הנומינלית (לפני אינפלציה) של מדד S&P 500 לאורך עשרות שנים הייתה היסטורית סביב 9%-11%. מסלולים כלליים בפנסיה/גמל הניבו היסטורית ממוצע נמוך יותר, סביב 4%-6%.
                    </li>
                  </ul>
                  <WarningBox title="אזהרה חשובה לגבי תשואה צפויה" className="mt-3">
                    הנתונים ההיסטוריים אינם ערובה לתשואות עתידיות! השווקים יכולים להשתנות. הזינו כאן את ההנחה שלכם, אך זכרו שזוהי רק תחזית תיאורטית. אל תבססו החלטות פיננסיות קריטיות רק על תוצאת המחשבון.
                  </WarningBox>
                </li>
                <li>
                  <strong>דמי ניהול שנתיים (%):</strong> אם רלוונטי (בעיקר בקופות גמל, קרנות השתלמות, פנסיה, קרנות נאמנות מסוימות), הזינו את אחוז דמי הניהול השנתיים שגובים מכם (לרוב מסך הצבירה). דמי ניהול, גם אם נראים נמוכים, יכולים "לנגוס" משמעותית בתשואה לאורך זמן.
                </li>
              </ol>
            </section>
            
            <section className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                <BarChart2 className="w-6 h-6 text-orange-500" />
                איך לקרוא נכון את התוצאות?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                לאחר הזנת הנתונים, המחשבון יציג לכם תחזית וגרף. הנה הסבר לנתונים העיקריים:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• <strong>היתרה הסופית:</strong> הסכום הכולל הצפוי בסוף תקופת ההשקעה שהוגדרה.</li>
                <li>• <strong>סך ההפקדות:</strong> סכום ההשקעה הראשוני + סך כל ההפקדות החודשיות שתבצעו לאורך התקופה. זה הכסף שאתם הכנסתם מכיסכם.</li>
                <li>• <strong>סך הריבית (רווח):</strong> ההפרש בין היתרה הסופית לסך ההפקדות. זהו הרווח נטו שנצבר בזכות הריבית דריבית (לאחר דמי ניהול, אם הוזנו). שימו לב כמה הרווח גדל ביחס להפקדות ככל ששנות ההשקעה מתארכות!</li>
                <li>• <strong>הגרף והטבלה (אם קיימים):</strong> מראים את התפתחות הצבירה והרווחים לאורך השנים, וממחישים את אפקט כדור השלג של הריבית דריבית.</li>
              </ul>
            </section>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 mb-10">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                טיפים למיקסום הריבית דריבית
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• <strong>התחילו מוקדם ככל האפשר:</strong> זמן הוא המרכיב החשוב ביותר בריבית דריבית.</li>
                <li>• <strong>היו עקביים:</strong> הפקדות חודשיות קבועות, גם אם קטנות, מצטברות לסכומים משמעותיים.</li>
                <li>• <strong>השקיעו לטווח ארוך:</strong> אפקט הריבית דריבית מתעצם משמעותית ככל שטווח ההשקעה ארוך יותר. אל תיבהלו מתנודות קצרות טווח.</li>
                <li>• <strong>שימו לב לדמי ניהול:</strong> בדקו והשוו דמי ניהול. הפרש קטן באחוזים הופך לסכום גדול לאורך שנים.</li>
                <li>• <strong>הגדילו הפקדות כשניתן:</strong> אם ההכנסה שלכם עולה, שקלו להגדיל את ההפקדה החודשית.</li>
              </ul>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              <p>
                <strong>מושגים קשורים:</strong> ריבית דריבית, חיסכון ארוך טווח, תשואה שנתית, הפקדות חודשיות,
                דמי ניהול, אפקט הריבית דריבית, תכנון פיננסי, השקעות לטווח ארוך, חיסכון פנסיוני,
                קופות גמל, קרנות השתלמות, תיק השקעות, תשואה מצטברת, כוח הריבית, מדד S&P 500, חישוב תשואה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 