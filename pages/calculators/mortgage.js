import Head from 'next/head';
import MortgageCalculator from '../../components/MortgageCalculator';
import Link from 'next/link';
import { ChevronRight, Info, Home, Calculator, Landmark, AlertTriangle, HelpCircle, TrendingDown, ListOrdered, SlidersHorizontal, Banknote, Percent, CalendarDays, FileText } from 'lucide-react';
import { WarningBox, TipBox, InfoBox } from '../../components/Boxes';

export default function MortgageCalculatorPage() {
  return (
    <>
      <Head>
        <title>מחשבון משכנתא מתקדם | דריבית - תכנון חכם של הלוואת הדיור</title>
        <meta name="description" content="מחשבון משכנתא מתקדם וחינמי מבית דריבית. השוו מסלולים, חשבו החזר חודשי, צפו בלוח סילוקין ובדקו כדאיות מחזור. כולל מדריך מקיף למשכנתאות." />
        <meta name="keywords" content="מחשבון משכנתא, חישוב משכנתא, ריבית משכנתא, מסלולי משכנתא, פריים, מדד המחירים לצרכן, ריבית קבועה, ריבית משתנה, תמהיל משכנתא, לוח סילוקין, שפיצר, מחזור משכנתא, החזר חודשי, יועץ משכנתאות, הלוואת דיור, אחוז מימון (LTV), ביטוח משכנתא" />
        <meta property="og:title" content="מחשבון משכנתא מתקדם | דריבית - תכנון חכם של הלוואת הדיור" />
        <meta property="og:description" content="קחו שליטה על המשכנתא שלכם! מחשבון מתקדם מבית דריבית עם מדריך מקיף להבנת מסלולים, ריביות, החזרים ותכנון אופטימלי." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deribit.co.il/calculators/mortgage" />
        <link rel="canonical" href="https://www.deribit.co.il/calculators/mortgage" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה למחשבונים
            </Link>
          </div>

          <MortgageCalculator />

          <article className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">המדריך המקיף למחשבון משכנתא ותכנון הלוואת דיור</h2>

              <section className="mb-12 text-center">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
                  לקיחת משכנתא היא אחת ההחלטות הפיננסיות המשמעותיות ביותר שתקבלו בחייכם. מדובר בהתחייבות ארוכת טווח בסכומים גבוהים, והבחירות שתעשו ישפיעו על מצבכם הכלכלי לשנים רבות. מחשבון משכנתא הוא כלי חיוני המסייע להבין את המספרים, להשוות בין אפשרויות ולקבל החלטה מושכלת.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  המדריך הבא, יחד עם המחשבון המתקדם של דריבית, נועד להעניק לכם את הידע והכלים הדרושים לניווט בעולם המורכב של המשכנתאות, החל מהבנת המושגים הבסיסיים ועד לשימוש נכון במחשבון ותכנון התמהיל האופטימלי עבורכם.
                </p>
              </section>

              <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <HelpCircle className="w-7 h-7 text-blue-600" />
                  נתחיל מהבסיס: מהי משכנתא?
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
                  משכנתא היא הלוואה גדולה לטווח ארוך, המיועדת בדרך כלל לרכישת נכס נדל"ן (דירה או בית). הייחוד שלה הוא שהנכס הנרכש משמש כבטוחה (משכון) לבנק המלווה. כלומר, אם הלווה אינו עומד בתשלומי ההחזר, הבנק רשאי לממש את הנכס כדי לכסות את יתרת החוב.
                </p>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  המשכנתא מורכבת ממספר מסלולים אפשריים, שלכל אחד מהם מאפייני ריבית והצמדה שונים. בניית תמהיל משכנתא נכון, המשלב בין המסלולים השונים בצורה שמתאימה ליכולת ההחזר, לרמת הסיכון ולצפי הכלכלי של הלווה, היא המפתח למשכנתא משתלמת ובטוחה.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <Home className="w-7 h-7 text-green-600" />
                  מדוע חיוני להשתמש במחשבון משכנתא?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  מחשבון משכנתא הוא הרבה יותר מסתם כלי לחישוב החזר חודשי. הוא מאפשר לכם:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>להבין את גובה ההחזר החודשי:**</strong> לחשב כמה תצטרכו לשלם מדי חודש עבור סכום, תקופה וריבית נתונים, ולבדוק אם זה מתאים ליכולת הכלכלית שלכם.</li>
                  <li><strong>להשוות בין מסלולים:**</strong> לראות כיצד שינויים בריבית, בהצמדה או בתקופה משפיעים על ההחזר החודשי ועל סך התשלום הכולל.</li>
                  <li><strong>לראות את התמונה המלאה (לוח סילוקין):**</strong> להבין כיצד התשלום החודשי מתחלק בין החזר הקרן להחזר הריבית לאורך חיי ההלוואה (רמז: בהתחלה משלמים בעיקר ריבית).</li>
                  <li><strong>לתכנן תמהיל אופטימלי:**</strong> לבנות שילוב של מספר מסלולים (למשל, חלק בריבית קבועה וחלק בריבית פריים) ולראות את ההשפעה הכוללת על ההחזר והסיכון.</li>
                  <li><strong>לבדוק כדאיות מחזור משכנתא:**</strong> להשוות את תנאי המשכנתא הקיימת שלכם מול תנאים חדשים אפשריים ולראות אם מחזור יכול לחסוך לכם כסף.</li>
                  <li><strong>לקבל החלטות מבוססות נתונים:**</strong> במקום להסתמך על תחושות בטן או הבטחות, המחשבון מספק מספרים קונקרטיים שעוזרים בקבלת החלטה מושכלת.</li>
                </ul>
              </section>

              <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <Calculator className="w-7 h-7 text-blue-600" />
                  מדריך מפורט לשימוש במחשבון המשכנתא של דריבית
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                  המחשבון מאפשר לכם להגדיר מספר מסלולים שונים ולראות את התוצאה המשולבת. הנה הסבר על השדות העיקריים בכל מסלול:
                </p>
                <ol className="space-y-5 text-gray-700 dark:text-gray-200">
                  <li className="border-b pb-4 dark:border-gray-600">
                    <strong className="block mb-1"><Banknote className="inline-block w-4 h-4 mr-1" /> 1. סכום ההלוואה במסלול (₪):</strong><br /> כמה כסף אתם לווים במסלול הספציפי הזה? סך הסכומים בכל המסלולים צריך להיות שווה לסכום המשכנתא הכולל שאתם לוקחים.
                  </li>
                  <li className="border-b pb-4 dark:border-gray-600">
                    <strong className="block mb-1"><CalendarDays className="inline-block w-4 h-4 mr-1" /> 2. תקופת ההלוואה (שנים):</strong><br /> לכמה שנים נלקח המסלול הספציפי הזה? ניתן לקחת מסלולים שונים לתקופות שונות באותה משכנתא.
                  </li>
                  <li className="border-b pb-4 dark:border-gray-600">
                    <strong className="block mb-1"><Percent className="inline-block w-4 h-4 mr-1" /> 3. שיעור הריבית השנתית (%):</strong><br /> הריבית הנומינלית המוצעת לכם במסלול זה. שימו לב אם זו ריבית קבועה או הבסיס לריבית משתנה.
                  </li>
                  <li className="border-b pb-4 dark:border-gray-600">
                    <strong className="block mb-1"><SlidersHorizontal className="inline-block w-4 h-4 mr-1" /> 4. סוג המסלול:</strong><br /> בחירת סוג המסלול משפיעה על אופן חישוב הריבית וההצמדה. המסלולים הנפוצים:
                    <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-sm">
                      <li><strong>פריים (P):</strong> הריבית משתנה בהתאם לריבית הפריים במשק (שמושפעת מריבית בנק ישראל). אין הצמדה למדד. נחשב למסלול גמיש אך עם סיכון לעליית החזרים אם ריבית הפריים עולה.</li>
                      <li><strong>קבועה לא צמודה (קל"צ):</strong> הריבית קבועה לאורך כל חיי המסלול ואין הצמדה למדד. מסלול זה מספק ודאות מלאה לגבי גובה ההחזר החודשי, אך הריבית ההתחלתית שלו היא לרוב הגבוהה ביותר. כולל לרוב עמלת פירעון מוקדם משמעותית.</li>
                      <li><strong>קבועה צמודה (ק"צ):</strong> הריבית קבועה, אך הקרן צמודה למדד המחירים לצרכן. ההחזר החודשי עולה אם המדד עולה (אינפלציה). הריבית ההתחלתית נמוכה יותר מקל"צ, אך יש סיכון לעליית ההחזרים והקרן בגלל ההצמדה.</li>
                      <li><strong>משתנה צמודה (מ"צ):</strong> הריבית משתנה במועדים קבועים (למשל, כל שנה או 5 שנים) בהתאם לעוגן שנקבע (כמו אג"ח ממשלתי), והקרן צמודה למדד. מסלול זה משלב סיכון של שינוי ריבית וסיכון של הצמדה למדד.</li>
                      <li><strong>מסלולים נוספים:</strong> קיימים מסלולים נוספים כמו ריבית משתנה לא צמודה (על בסיס פריים או עוגן אחר), מסלולי מט"ח ועוד.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="block mb-1"><ListOrdered className="inline-block w-4 h-4 mr-1" /> 5. הוספת מסלולים וחישוב:</strong><br /> 
                    ניתן להוסיף מספר מסלולים לפי תמהיל המשכנתא הרצוי. לאחר מילוי כל המסלולים, לחצו "חשב" כדי לראות את ההחזר החודשי הכולל, סך התשלום ולוח הסילוקין המשולב.
                  </li>
                </ol>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <FileText className="w-7 h-7 text-orange-500" />
                  פענוח התוצאות: מה המספרים אומרים?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  המחשבון יציג לכם מספר נתונים חשובים ולוח סילוקין:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                    <strong className="block text-center text-gray-900 dark:text-white">החזר חודשי התחלתי</strong>
                    <p className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">₪{/* Placeholder */}</p>
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">הסכום שתשלמו בחודש הראשון (עשוי להשתנות במסלולים צמודים/משתנים).</p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                    <strong className="block text-center text-gray-900 dark:text-white">סך ההחזר הכולל</strong>
                    <p className="text-center text-2xl font-bold text-red-600 dark:text-red-400 mt-1">₪{/* Placeholder */}</p>
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">הסכום הכולל שתשלמו לבנק לאורך כל חיי המשכנתא (קרן + ריבית).</p>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                    <strong className="block text-center text-gray-900 dark:text-white">סך הריבית המשולמת</strong>
                    <p className="text-center text-2xl font-bold text-red-600 dark:text-red-400 mt-1">₪{/* Placeholder */}</p>
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">ההפרש בין סך ההחזר לסכום ההלוואה המקורי - "עלות הכסף".</p>
                  </div>
                </div>
                <InfoBox title="לוח הסילוקין (שפיצר)" className="text-sm">
                  הטבלה המפורטת מציגה עבור כל תשלום ותשלום לאורך חיי ההלוואה, כיצד הוא מתחלק בין החזר על חשבון הריבית להחזר על חשבון הקרן. שימו לב שבתחילת הדרך, רוב התשלום הולך לכיסוי הריבית ורק חלק קטן מקטין את הקרן. ככל שהזמן עובר, יחס זה מתהפך. לוח הסילוקין גם מראה את יתרת הקרן העדכנית לאחר כל תשלום.
                </InfoBox>
              </section>

              <section className="mb-12 bg-green-50 dark:bg-green-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-green-800 dark:text-green-200">
                  <Landmark className="w-6 h-6 text-green-600" />
                  טיפים חשובים לבחירת תמהיל משכנתא נכון
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong className="text-gray-900 dark:text-white">1. התאמה ליכולת ההחזר:**</strong> חשבו לא רק על ההחזר ההתחלתי, אלא גם על יכולתכם לעמוד בעליות אפשריות בהחזר החודשי (במסלולים משתנים/צמודים) לאורך זמן. כלל אצבע מקובל הוא שההחזר החודשי לא יעלה על 30%-35% מההכנסה הפנויה.</li>
                  <li><strong className="text-gray-900 dark:text-white">2. פיזור סיכונים:**</strong> אל תשימו את כל הכסף במסלול אחד. שילוב של מסלולים (למשל, שליש קל"צ, שליש פריים, שליש משתנה צמודה) יכול לאזן בין הוודאות של ריבית קבועה לפוטנציאל החיסכון (והסיכון) של ריביות משתנות.</li>
                  <li><strong className="text-gray-900 dark:text-white">3. הבנת הסיכונים בכל מסלול:**</strong> דעו מהם הטריגרים לשינוי בריבית או בהחזר בכל מסלול (פריים, מדד, עוגן) ומה הצפי לעתיד (למרות שקשה לחזות).</li>
                  <li><strong className="text-gray-900 dark:text-white">4. תקופת ההלוואה:**</strong> תקופה ארוכה יותר מקטינה את ההחזר החודשי אך מגדילה משמעותית את סך הריבית שתשלמו. תקופה קצרה יותר דורשת החזר חודשי גבוה יותר אך חוסכת בריבית.</li>
                  <li><strong className="text-gray-900 dark:text-white">5. השוואת הצעות:**</strong> אל תיקחו את ההצעה הראשונה. פנו למספר בנקים, קבלו הצעות מפורטות לתמהילים שונים, והתמקחו על הריביות.</li>
                  <li><strong className="text-gray-900 dark:text-white">6. אל תוותרו על ייעוץ מקצועי:**</strong> יועץ משכנתאות בלתי תלוי יכול לעזור לכם לבנות תמהיל מותאם אישית, לנהל מו"מ מול הבנקים ולחסוך לכם הרבה כסף וטעויות יקרות.</li>
                </ul>
              </section>

              <section className="mb-12 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-yellow-800 dark:text-yellow-200">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  חשוב לזכור: מגבלות המחשבון והמציאות
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• **הערכה בלבד:** המחשבון מספק סימולציה והערכה כללית המבוססת על הנתונים שהוזנו. הוא אינו מהווה הצעה מחייבת מהבנק.</li>
                  <li>• **תנאים סופיים:** הריביות, המסלולים והתנאים הסופיים נקבעים על ידי הבנק בלבד, לאחר בחינת נתוני הלווה והנכס.</li>
                  <li>• **עלויות נלוות:** החישוב אינו כולל עלויות נוספות הכרוכות בלקיחת משכנתא, כגון: עמלת פתיחת תיק, שמאות, ביטוח חיים, ביטוח נכס, רישום ברשויות ועוד.</li>
                  <li>• **אי-ודאות:** ריבית הפריים והמדד יכולים להשתנות באופן בלתי צפוי ולהשפיע על ההחזר החודשי במסלולים הרלוונטיים.</li>
                </ul>
                 <WarningBox title="חובה להתייעץ" className="mt-4 text-sm">
                   אין לראות בתוצאות המחשבון או בתוכן המדריך תחליף לייעוץ משכנתאות מקצועי ופרטני המתחשב במכלול הנתונים האישיים שלכם. פנו ליועץ מוסמך לפני קבלת החלטה.
                 </WarningBox>
              </section>

              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                <p>
                  <strong>מושגים קשורים:</strong> מחשבון משכנתא, חישוב משכנתא, ריבית משכנתא, מסלולי משכנתא, פריים, מדד המחירים לצרכן, ריבית קבועה לא צמודה (קל"צ), ריבית קבועה צמודה (ק"צ), ריבית משתנה צמודה (מ"צ), תמהיל משכנתא, לוח סילוקין, שפיצר, קרן שווה, גרייס, עמלת פירעון מוקדם, מחזור משכנתא, החזר חודשי, יועץ משכנתאות, הלוואת דיור, אחוז מימון (LTV), ביטוח משכנתא.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 