import Head from 'next/head';
import MortgageCalculator from '../../components/MortgageCalculator';
import Link from 'next/link';
import {
  ChevronRight, Info, Home, Calculator, Landmark, AlertTriangle,
  HelpCircle, TrendingDown, ListOrdered, SlidersHorizontal, Banknote,
  Percent, CalendarDays, FileText, Scale, CheckSquare, ShieldCheck,
  Shuffle, Target, Wallet, Library, Repeat, AlertOctagon, Paperclip, Layers
} from 'lucide-react';
import { WarningBox, TipBox, InfoBox } from '../../components/Boxes';

export default function MortgageCalculatorPage() {
  return (
    <>
      <Head>
        <title>מחשבון משכנתא | דריבית - המדריך האולטימטיבי לתכנון הלוואת דיור 2024</title>
        <meta name="description" content="תכננו את המשכנתא שלכם עם המחשבון המתקדם והמדריך המקיף והמעמיק בישראל מבית דריבית. כל מה שצריך לדעת על מסלולים, ריביות, תמהיל, מחזור, עלויות נלוות, סיכונים ו-SEO." />
        <meta name="keywords" content="מחשבון משכנתא, חישוב משכנתא, ריבית משכנתא, מסלולי משכנתא, פריים, מדד המחירים לצרכן, קלצ, קצ, ריבית קבועה, ריבית משתנה, תמהיל משכנתא, לוח סילוקין, שפיצר, מחזור משכנתא, כדאיות מחזור, עמלת פירעון מוקדם, עלויות נלוות למשכנתא, החזר חודשי, יועץ משכנתאות, הלוואת דיור, LTV, אחוז מימון, אישור עקרוני, ביטוח משכנתא, בנק ישראל, SEO" />
        <meta property="og:title" content="מחשבון משכנתא | דריבית - המדריך האולטימטיבי (2024)" />
        <meta property="og:description" content="המדריך המקיף ביותר למשכנתאות בישראל ומחשבון חינמי מתקדם מבית דריבית. כל המידע על מסלולים, תמהיל, מחזור, עלויות וסיכונים - לתכנון חכם." />
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
            <div className="p-8 md:p-12 lg:p-16 prose prose-lg dark:prose-invert max-w-none space-y-12">
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white !mb-12">המדריך המקיף והמעמיק למשכנתאות בישראל (2024)</h1>

              <section>
                 <p className="lead">
                  החלטתם לרכוש דירה? מזל טוב! כעת עומדת בפניכם אחת ההחלטות הפיננסיות המורכבות והמשמעותיות בחייכם: לקיחת משכנתא. זו לא רק הלוואה גדולה, זו התחייבות ארוכת טווח שתלווה אתכם שנים רבות. הבנה מעמיקה של התהליך, המסלולים, הריביות, הסיכונים והמושגים הקשורים היא קריטית כדי להימנע מטעויות יקרות, לחסוך עשרות ואף מאות אלפי שקלים, ולהבטיח שהמשכנתא תתאים ליכולות ולצרכים המשתנים שלכם. מחשבון המשכנתא המתקדם של דריבית, יחד עם מדריך מקיף זה, נועדו לצייד אתכם בכל הידע הדרוש.
                 </p>
              </section>

              <section className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                 <h2 className="flex items-center gap-3 !mt-0">
                  <HelpCircle className="w-7 h-7 text-blue-600" />
                  מהי משכנתא ומה מייחד אותה?
                 </h2>
                 <p>משכנתא היא הלוואה המיועדת לרכישת נכס נדל"ן, והנכס עצמו משמש כבטוחה לבנק. ייחודה הוא במורכבותה: היא מורכבת לרוב ממספר מסלולים שונים (תמהיל), שלכל אחד מהם תנאי ריבית והצמדה אחרים, וניתנת לתקופות ארוכות (עד 30 שנה).</p>
              </section>

              <section>
                 <h2 className="flex items-center gap-3">
                  <Target className="w-7 h-7 text-green-600" />
                  תפקידו המרכזי של מחשבון המשכנתא בתכנון
                 </h2>
                 <p>בעולם המשכנתאות המורכב, המחשבון הוא כלי הניווט שלכם. הוא מאפשר לכם:</p>
                 <ul>
                   <li>לחשב במדויק את ההחזר החודשי ההתחלתי והצפוי.</li>
                   <li>להשוות באופן אובייקטיבי בין ריביות ומסלולים שונים.</li>
                   <li>לראות את השפעת שינויים עתידיים (בריבית/מדד) על ההחזר.</li>
                   <li>להבין את חלוקת התשלום בין קרן וריבית (לוח סילוקין).</li>
                   <li>לבנות ולבדוק תמהילים שונים עד למציאת האיזון הנכון עבורכם.</li>
                   <li>להעריך כדאיות של מחזור משכנתא קיימת.</li>
                   <li>לקבל החלטות פיננסיות מבוססות נתונים ולא על השערות.</li>
                 </ul>
              </section>

              <section className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h2 className="flex items-center gap-3 !mt-0">
                  <Calculator className="w-7 h-7 text-blue-600" />
                  שימוש במחשבון וצלילה לעומק מסלולי המשכנתא
                </h2>
                <p>הזינו את פרטי כל מסלול בתמהיל שלכם. נפרט את השדות ואת המסלולים הנפוצים:</p>
                <h4 className="!mt-6">1. סכום ההלוואה במסלול (₪) <Banknote className="inline-block w-5 h-5 ml-1" /></h4>
                <p>חלק המשכנתא הכולל שאתם מייעדים למסלול זה.</p>
                <h4 className="!mt-6">2. תקופת ההלוואה (שנים) <CalendarDays className="inline-block w-5 h-5 ml-1" /></h4>
                <p>משך הזמן להחזר מסלול זה. תקופות ארוכות יותר מקטינות החזר חודשי אך מגדילות את סך הריבית המשולמת.</p>
                <h4 className="!mt-6">3. שיעור הריבית השנתית (%) <Percent className="inline-block w-5 h-5 ml-1" /></h4>
                <p>הריבית הנקובה שהוצעה לכם למסלול זה.</p>
                <h4 className="!mt-6">4. סוג המסלול <SlidersHorizontal className="inline-block w-5 h-5 ml-1" /></h4>
                <p>בחירת המסלול היא ההחלטה המרכזית שקובעת את הסיכון והפוטנציאל של המשכנתא שלכם:</p>
                <div className="space-y-5 mt-4">
                  <div className="p-4 border rounded dark:border-gray-600 bg-white dark:bg-gray-800">
                    <strong className="text-blue-700 dark:text-blue-300 block mb-2 text-lg">א. מסלול ריבית פריים (P)</strong>
                    <p className="text-sm mb-2"><strong>מנגנון:</strong> הריבית היא ריבית בנק ישראל + 1.5%, ומשתנה רק כאשר בנק ישראל משנה את הריבית. הבנק מוסיף או מפחית מרווח מהפריים (למשל, P-0.5%). המסלול אינו צמוד למדד.</p>
                    <p className="text-sm mb-2"><strong>יתרונות:</strong> גמישות מירבית לפירעון מוקדם (עמלה נמוכה/סמלית), הגנה מפני אינפלציה, ריבית התחלתית לרוב נמוכה יחסית (אם הפריים נמוך).</p>
                    <p className="text-sm mb-2"><strong>חסרונות:</strong> סיכון לעלייה משמעותית בהחזר החודשי אם ריבית בנק ישראל עולה.</p>
                    <p className="text-sm mb-2"><strong>מגבלת בנק ישראל:</strong> ניתן לקחת עד שני שלישים (כ-66.7%) מסך המשכנתא במסלול פריים.</p>
                    <p className="text-sm"><strong>למי מתאים?</strong> כמעט לכולם כחלק מהתמהיל, במיוחד למי שמאמין שהריבית תישאר נמוכה או תרד, או למי שמעוניין בגמישות לסילוק מוקדם.</p>
                  </div>
                  <div className="p-4 border rounded dark:border-gray-600 bg-white dark:bg-gray-800">
                    <strong className="text-green-700 dark:text-green-300 block mb-2 text-lg">ב. מסלול ריבית קבועה לא צמודה (קל"צ)</strong>
                    <p className="text-sm mb-2"><strong>מנגנון:</strong> הריבית נשארת זהה ונעולה לאורך כל חיי המסלול, וגם הקרן אינה צמודה למדד.</p>
                    <p className="text-sm mb-2"><strong>יתרונות:</strong> "ראש שקט" - ודאות מוחלטת לגבי גובה ההחזר החודשי, ללא תלות בשינויי ריבית או אינפלציה.</p>
                    <p className="text-sm mb-2"><strong>חסרונות:</strong> הריבית ההתחלתית היא הגבוהה ביותר, ועמלת הפירעון המוקדם עלולה להיות גבוהה מאוד אם הריבית הממוצעת במשק יורדת משמעותית ביחס לריבית שלכם.</p>
                    <p className="text-sm"><strong>למי מתאים?</strong> לשונאי סיכון מובהקים, למי שחשוב לו תכנון תקציבי יציב וארוך טווח, וכרכיב "עוגן" משמעותי בתמהיל (לפחות שליש לפי הנחיות בנק ישראל).</p>
                  </div>
                  <div className="p-4 border rounded dark:border-gray-600 bg-white dark:bg-gray-800">
                    <strong className="text-red-700 dark:text-red-300 block mb-2 text-lg">ג. מסלול ריבית קבועה צמודה למדד (ק"צ)</strong>
                    <p className="text-sm mb-2"><strong>מנגנון:</strong> הריבית קבועה, אך יתרת הקרן מתעדכנת מדי חודש בהתאם לשינוי במדד המחירים לצרכן (אינפלציה).</p>
                    <p className="text-sm mb-2"><strong>יתרונות:</strong> ריבית התחלתית נמוכה מקל"צ.</p>
                    <p className="text-sm mb-2"><strong>חסרונות:</strong> חשיפה מלאה לסיכון האינפלציה - ההחזר החודשי ויתרת הקרן עולים כשהמדד עולה. בתקופות אינפלציה גבוהה, הקרן עלולה לגדול למרות התשלומים החודשיים. כולל עמלת פירעון מוקדם.</p>
                    <p className="text-sm"><strong>למי מתאים?</strong> פחות פופולרי בסביבת אינפלציה גבוהה. יכול להתאים לטווחים קצרים יותר, או למי שצופה עלייה משמעותית בהכנסה שתפצה על עליית ההחזרים.</p>
                  </div>
                   <div className="p-4 border rounded dark:border-gray-600 bg-white dark:bg-gray-800">
                    <strong className="text-purple-700 dark:text-purple-300 block mb-2 text-lg">ד. מסלול ריבית משתנה צמודה למדד (מ"צ)</strong>
                    <p className="text-sm mb-2"><strong>מנגנון:</strong> הקרן צמודה למדד, והריבית מתעדכנת כל תקופה קבועה (למשל, כל 2, 3, 5 שנים) בהתאם ל"עוגן" חיצוני (כמו ממוצע ריביות אג"ח ממשלתי צמוד) בתוספת מרווח.</p>
                    <p className="text-sm mb-2"><strong>יתרונות:</strong> ריבית התחלתית לרוב נמוכה, גמישות יחסית בפירעון ב"תחנות היציאה" (מועד שינוי הריבית).</p>
                    <p className="text-sm mb-2"><strong>חסרונות:</strong> חשיפה כפולה לסיכון: גם סיכון אינפלציה (הצמדה למדד) וגם סיכון עליית הריבית בתחנת העדכון.</p>
                    <p className="text-sm"><strong>למי מתאים?</strong> למי שמוכן לקחת סיכון גבוה יותר בתמורה לריבית התחלתית נמוכה, או כרכיב קטן יחסית בתמהיל לפיזור. חשוב לבדוק מהו העוגן ומה צפי השינוי בו.</p>
                  </div>
                </div>
                <h4 className="!mt-6">5. הוספת מסלולים וחישוב <ListOrdered className="inline-block w-5 h-5 ml-1" /></h4>
                <p>לאחר שהזנתם את כל פרטי המסלול הראשון, תוכלו ללחוץ על "הוסף מסלול" ולהזין את פרטי המסלולים הנוספים בתמהיל שלכם. בסיום, לחצו "חשב".</p>
              </section>

              <section>
                 <h2 className="flex items-center gap-3">
                   <FileText className="w-7 h-7 text-orange-500" />
                   פענוח תוצאות המחשבון - מבט מעמיק
                 </h2>
                 <p>התוצאות יציגו לכם את הנתונים המשולבים של כל המסלולים שהזנתם:</p>
                 <div className="grid md:grid-cols-3 gap-4 my-6">
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                      <strong className="block text-center text-gray-900 dark:text-white">החזר חודשי התחלתי</strong>
                      <p className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">₪{/* Placeholder */}</p>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">סך התשלום בחודש הראשון. זכרו שהוא ישתנה במסלולים צמודים/משתנים.</p>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                      <strong className="block text-center text-gray-900 dark:text-white">סך ההחזר הכולל</strong>
                      <p className="text-center text-2xl font-bold text-red-600 dark:text-red-400 mt-1">₪{/* Placeholder */}</p>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">הסכום הכולל שתשלמו לבנק על פני כל שנות המשכנתא.</p>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                      <strong className="block text-center text-gray-900 dark:text-white">סך הריבית המשולמת</strong>
                      <p className="text-center text-2xl font-bold text-red-600 dark:text-red-400 mt-1">₪{/* Placeholder */}</p>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">ההפרש בין סך ההחזר לסכום ההלוואה - עלות ההלוואה שלכם.</p>
                    </div>
                  </div>
                  <InfoBox title="ניתוח לוח הסילוקין (שפיצר)" className="text-sm">
                    לוח הסילוקין הוא טבלה המפרטת כל תשלום עתידי. שיטת שפיצר הנפוצה מבטיחה החזר חודשי קבוע (במסלולים לא צמודים ולא משתנים), אך שימו לב לחלוקה הפנימית: בתחילת חיי המשכנתא, רוב מוחלט של התשלום מופנה לכיסוי הריבית ורק חלק זעיר מקטין את הקרן. ככל שמתקדמים בהחזרים, חלק הריבית בתשלום קטן וחלק הקרן גדל. הבנה זו חשובה, במיוחד כששוקלים פירעון מוקדם.
                  </InfoBox>
               </section>

              <section>
                 <h2 className="flex items-center gap-3">
                    <Shuffle className="w-7 h-7 text-indigo-500" />
                    אמנות התמהיל: פיזור סיכונים והתאמה אישית
                 </h2>
                 <p>בניית תמהיל משכנתא נכון היא קריטית. במקום להמר על מסלול אחד, משלבים מספר מסלולים כדי להשיג איזון בין יציבות, גמישות ועלות, תוך פיזור סיכונים:</p>
                 <ul>
                    <li><strong>פיזור סיכון ריבית:</strong> הגנה חלקית מעליית ריבית הפריים או הריביות המשתנות, תוך שמירה על פוטנציאל ליהנות מיציבות חלקית לצד פוטנציאל לחיסכון אם הריביות ירדו (ולהיפך).</li>
                    <li><strong>פיזור סיכון אינפלציה:</strong> הגנה חלקית מעליית מדד המחירים לצרכן באמצעות שילוב מסלולים צמודים ולא צמודים.</li>
                    <li><strong>התאמה ליכולת ולצפי:</strong> תמהיל יכול להיות מותאם ליכולת ההחזר הנוכחית והצפויה (למשל, החזר נמוך יותר בהתחלה אם צופים עליית שכר), ולרמת הסיכון שנוח לכם איתה.</li>
                 </ul>
                 <TipBox className="mt-4 text-sm">
                    <strong>דוגמאות לתמהילים (הנחיות כלליות, לא המלצה!):</strong>
                    *   **רגולציה כבסיס:** בנק ישראל מחייב שלפחות שליש מהמשכנתא יהיה בריבית קבועה (קל"צ או ק"צ). כמו כן, מגביל את רכיב הפריים לעד שני שלישים. רוב התמהילים נבנים סביב מגבלות אלו.
                    *   **התמהיל הנפוץ (לשעבר):** 1/3 קל"צ, 1/3 פריים, 1/3 משתנה צמודה (לרוב כל 5 שנים). תמהיל זה סיפק פיזור סביר, אך הפופולריות שלו ירדה עקב עליית הריביות והאינפלציה.
                    *   **תמהיל מוטה יציבות:** אחוז גבוה יותר בקל"צ (למשל, 50%-60%), והיתרה בעיקר בפריים (עד המגבלה) כדי לשמור על גמישות.
                    *   **תמהיל מוטה גמישות/סיכון:** מקסימום פריים (2/3), מינימום קל"צ (1/3), ואולי שילוב משתנה קצרה אם מאמינים בירידת ריבית מהירה.
                    <strong>התאמת התמהיל היא אישית ביותר ותלויה במשתנים רבים. חובה להתייעץ עם יועץ משכנתאות בלתי תלוי!</strong>
                 </TipBox>
               </section>

              <section>
                   <h2 className="flex items-center gap-3">
                       <Library className="w-7 h-7 text-cyan-500" />
                       מילון מונחי משכנתא חיוניים
                   </h2>
                   <div className="space-y-4">
                       <p><strong className="text-gray-900 dark:text-white block">אחוז מימון (LTV - Loan to Value):</strong> היחס באחוזים בין סכום המשכנתא לשווי הנכס (לפי הנמוך מבין מחיר החוזה או הערכת השמאי). בנק ישראל מגביל את ה-LTV המקסימלי (75% לדירה ראשונה/יחידה, 70% למשפרי דיור, 50% למשקיעים). ככל שה-LTV נמוך יותר (כלומר, יש יותר הון עצמי), כך הבנק רואה בכם לווים פחות מסוכנים והריביות המוצעות יהיו לרוב טובות יותר.</p>
                       <p><strong className="text-gray-900 dark:text-white block">יחס החזר מהכנסה (PTI / DTI):</strong> היחס בין ההחזר החודשי על המשכנתא (ולעיתים כלל ההלוואות) להכנסה הפנויה נטו של הלווים. בנק ישראל והבנקים מגבילים יחס זה (לרוב עד 40%-50% כתלות בגובה ההכנסה), אך מומלץ לשאוף ליחס נמוך יותר (כ-30%) כדי לשמור על "אוויר לנשימה" בתקציב המשפחתי.</p>
                       <p><strong className="text-gray-900 dark:text-white block">עמלת פירעון מוקדם:</strong> קנס שהבנק עשוי לגבות אם תרצו לסלק את ההלוואה (או חלק ממנה) לפני המועד. מחושבת בעיקר במסלולים בריבית קבועה (קל"צ וק"צ) על בסיס הפרשי הריביות בין הריבית שלכם לריבית הממוצעת במשק ביום הפירעון. יכולה להגיע לסכומים משמעותיים ולהשפיע על כדאיות המחזור.</p>
                       <p><strong className="text-gray-900 dark:text-white block">תקופת גרייס (חסד):</strong> דחיית תשלומי הקרן (ולעיתים גם הריבית) לתקופה מסוימת בתחילת ההלוואה. ההחזר החודשי נמוך יותר בתקופת הגרייס, אך הריבית ממשיכה להצטבר על הקרן הגדלה, מה שמייקר את ההלוואה בסופו של דבר. מתאים למקרים ספציפיים כמו רכישת דירה מקבלן עם תשלומים מדורגים.</p>
                       <p><strong className="text-gray-900 dark:text-white block">ביטוח משכנתא:</strong> כולל שני מרכיבים שחובה לרכוש כתנאי לקבלת המשכנתא: **ביטוח חיים** (שמבטיח סילוק המשכנתא במקרה פטירה של אחד הלווים) ו**ביטוח נכס** (מבטח את המבנה מפני נזקים כמו שריפה או רעידת אדמה). חשוב להשוות מחירים גם עבור ביטוחים אלו.</p>
                   </div>
               </section>

               <section>
                 <h2 className="flex items-center gap-3">
                     <Repeat className="w-7 h-7 text-pink-500" />
                     מחזור משכנתא: מתי ולמה לשקול?
                 </h2>
                 <p>מחזור משכנתא הוא תהליך של לקיחת משכנתא חדשה כדי לסלק את המשכנתא הקיימת, לרוב בתנאים טובים יותר. מתי כדאי לשקול זאת?</p>
                 <ul>
                    <li>**ירידה משמעותית בריביות** במשק מאז שלקחתם את המשכנתא המקורית.</li>
                    <li>**שינוי במצבכם הכלכלי:** עלייה בהכנסות המאפשרת קיצור תקופה או הגדלת החזר, או ירידה בהכנסות המצריכה הקטנת החזר.</li>
                    <li>**רצון לשנות את התמהיל:** אם התמהיל המקורי כבר לא מתאים לכם (למשל, יותר מדי סיכון במסלולים משתנים).</li>
                    <li>**צורך בכסף נוסף:** ניתן לעיתים למחזר ולהגדיל את סכום המשכנתא (בכפוף למגבלות LTV) לטובת שיפוץ או מטרה אחרת.</li>
                 </ul>
                 <h4 className="!mt-4">איך בודקים כדאיות מחזור?</h4>
                 <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>בדקו את יתרת המשכנתא הנוכחית ואת התנאים שלה (ריביות, תקופות).</li>
                    <li>קבלו **דוח יתרות לסילוק** מהבנק שלכם, הכולל הערכה של **עמלת הפירעון המוקדם** הצפויה (אם קיימת).</li>
                    <li>קבלו **הצעות למשכנתא חדשה** ממספר בנקים.</li>
                    <li>השתמשו במחשבון משכנתא (כמו זה) כדי **להשוות** את סך התשלום הצפוי במשכנתא החדשה + עמלת הפירעון המוקדם, לעומת סך התשלום הנותר במשכנתא הישנה.</li>
                    <li>שקלו גם את **העלויות הנלוות** למחזור (שמאות מחודשת, פתיחת תיק, רישומים וכו').</li>
                 </ol>
                 <InfoBox className="mt-4 text-sm">
                  מחזור משכנתא הוא תהליך מורכב. מומלץ להתייעץ עם יועץ משכנתאות כדי לבדוק כדאיות באופן מקצועי.
                 </InfoBox>
               </section>

                <section>
                  <h2 className="flex items-center gap-3">
                      <ListOrdered className="w-7 h-7 text-lime-500" />
                      תהליך לקיחת המשכנתא: המדריך המהיר
                  </h2>
                  <p>לקיחת משכנתא היא תהליך בירוקרטי שיכול להימשך מספר שבועות. השלבים העיקריים:</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                     <li><strong>קבלת אישור עקרוני:</strong> פנייה לבנק (או למספר בנקים) עם נתונים ראשוניים (הכנסות, הון עצמי, סכום מבוקש) לקבלת אישור מסגרת אשראי ותנאים ראשוניים. מאפשר לדעת בערך כמה תוכלו ללוות ובאיזה ריביות.</li>
                     <li><strong>מציאת נכס וחתימת חוזה:</strong> איתור הדירה הרצויה וחתימה על חוזה רכישה (בליווי עו"ד!).</li>
                     <li><strong>הזמנת שמאות:</strong> הבנק דורש הערכת שמאי מטעמו כדי לוודא את שווי הנכס המשמש כבטוחה.</li>
                     <li><strong>אישור סופי (אובליגו):</strong> הגשת כל המסמכים לבנק (חוזה, שמאות, תלושי שכר, עו"ש וכו') לקבלת אישור סופי ומחייב למשכנתא ולתנאיה.</li>
                     <li><strong>חתימות וביטחונות:</strong> הגעה לסניף הבנק לחתימה על כל מסמכי ההלוואה והשיעבודים.</li>
                     <li><strong>ביטוחים:</strong> רכישת פוליסות ביטוח חיים וביטוח נכס מתאימות לדרישות הבנק.</li>
                     <li><strong>רישומים:</strong> רישום הערת אזהרה לטובת הבנק בטאבו/רמ"י ו/או רישום משכון ברשם המשכונות.</li>
                     <li><strong>העברת הכספים:</strong> לאחר השלמת כל התנאים והביטחונות, הבנק מעביר את כספי ההלוואה ישירות לחשבון המוכר.</li>
                  </ol>
                </section>

                <section>
                   <h2 className="flex items-center gap-3">
                       <Paperclip className="w-7 h-7 text-gray-500" />
                       מעבר לריבית: העלויות הנלוות למשכנתא
                   </h2>
                   <p>חשוב לזכור שההחזר החודשי הוא לא ההוצאה היחידה. ישנן עלויות נלוות משמעותיות שיש לקחת בחשבון בתקציב:</p>
                   <ul>
                       <li><strong>עמלת פתיחת תיק:**</strong> עמלה חד-פעמית לבנק (ניתן לעיתים להתמקח עליה).</li>
                       <li><strong>שמאות:**</strong> תשלום לשמאי המקרקעין.</li>
                       <li><strong>רישום משכון/הערת אזהרה:**</strong> אגרות לרשויות.</li>
                       <li><strong>ייפוי כוח נוטריוני:**</strong> עלות חתימת נוטריון.</li>
                       <li><strong>ביטוח חיים למשכנתא:**</strong> פרמיה חודשית לאורך כל חיי ההלוואה.</li>
                       <li><strong>ביטוח נכס למשכנתא:**</strong> פרמיה שנתית/חודשית.</li>
                       <li><strong>שכר טרחת עורך דין:**</strong> עבור ליווי עסקת הרכישה.</li>
                   </ul>
                   <p>עלויות אלו יכולות להצטבר לאלפי ואף עשרות אלפי שקלים ויש להיערך להן מראש.</p>
                </section>

                <section>
                   <h2 className="flex items-center gap-3">
                       <AlertOctagon className="w-7 h-7 text-red-500" />
                       סיכונים מרכזיים שכדאי להכיר
                   </h2>
                   <p>לקיחת משכנתא כרוכה בסיכונים שיש להיות מודעים אליהם ולנהל אותם:</p>
                   <ul>
                       <li><strong>סיכון ריבית:**</strong> עליית ריבית הפריים או העוגנים של המסלולים המשתנים תייקר את ההחזר החודשי.</li>
                       <li><strong>סיכון אינפלציה (מדד):**</strong> עליית מדד המחירים לצרכן תגדיל את יתרת הקרן ואת ההחזר החודשי במסלולים הצמודים.</li>
                       <li><strong>סיכון פירעון מוקדם:**</strong> עמלות גבוהות עלולות למנוע מכם למחזר את המשכנתא או לסלק אותה מוקדם כשתרצו.</li>
                       <li><strong>סיכון אי-עמידה בתשלומים:**</strong> שינוי לרעה במצב הכלכלי (פיטורים, מחלה) עלול להקשות על עמידה בהחזרים ולסכן את הנכס.</li>
                   </ul>
                   <p>בניית תמהיל נכון, שמירה על יחס החזר סביר וניהול תקציב אחראי הם המפתח להתמודדות עם סיכונים אלו.</p>
                </section>

               <section className="mb-12 bg-green-50 dark:bg-green-900/30 rounded-xl p-6">
                 <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-green-800 dark:text-green-200">
                   <CheckSquare className="w-6 h-6 text-green-600" />
                   סיכום טיפים לבחירת משכנתא חכמה
                 </h3>
                 <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                   <li><strong className="text-gray-900 dark:text-white">• תכננו לטווח ארוך:</strong> חשבו על שינויים עתידיים בהכנסות, הוצאות וריביות.</li>
                   <li><strong className="text-gray-900 dark:text-white">• התאימו את התמהיל לפרופיל הסיכון שלכם.</strong></li>
                   <li><strong className="text-gray-900 dark:text-white">• שמרו על יחס החזר סביר (עד 30-35% מההכנסה הפנויה).</strong></li>
                   <li><strong className="text-gray-900 dark:text-white">• בצעו סקר שוק מקיף והשוו הצעות ממספר בנקים.</strong></li>
                   <li><strong className="text-gray-900 dark:text-white">• אל תתמקדו רק בריבית - בחנו את כל תנאי המסלול והתמהיל.</strong></li>
                   <li><strong className="text-gray-900 dark:text-white">• אל תוותרו על ייעוץ מקצועי בלתי תלוי.</strong></li>
                   <li><strong className="text-gray-900 dark:text-white">• קראו את כל האותיות הקטנות לפני החתימה.</strong></li>
                 </ul>
               </section>

                <WarningBox title="אזהרה וגילוי נאות - חובה לקרוא!" className="mb-10 text-base">
                  המידע המפורט בעמוד זה, כולל תוצאות מחשבון המשכנתא, מיועד למטרות אינפורמטיביות, לימודיות והמחשה בלבד. אין לראות במידע זה משום ייעוץ השקעות, ייעוץ פנסיוני, ייעוץ מס, ייעוץ משכנתאות או המלצה לביצוע פעולה ספציפית כלשהי. התוצאות המוצגות במחשבון הן סימולציה תיאורטית המבוססת אך ורק על ההנחות והנתונים שהוזנו על ידכם, ואינן מהוות הבטחה לתוצאה עתידית, תחליף לבדיקה פרטנית מול הגופים הפיננסיים, או הצעה מחייבת לקבלת הלוואה. תנאי המשכנתא בפועל, לרבות ריביות, מסלולים, עמלות ותנאי זכאות, ייקבעו באופן בלעדי ופרטני על ידי הגוף המלווה (הבנק) בהתאם למדיניותו, לנתוני האשראי של הלווה, לשווי הנכס ולשיקולים נוספים. לקיחת משכנתא היא החלטה פיננסית מורכבת בעלת השלכות משמעותיות וארוכות טווח. טרם קבלת החלטות כלשהן בנוגע למשכנתא, **חובה להיוועץ באופן אישי עם יועץ משכנתאות מוסמך ובלתי תלוי ו/או עם יועץ פיננסי/פנסיוני מורשה.**
                </WarningBox>

                <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  <p>
                    <strong>מושגים קשורים:</strong> מחשבון משכנתא, חישוב משכנתא, ריבית משכנתא, מסלולי משכנתא, פריים, מדד המחירים לצרכן, ריבית קבועה לא צמודה (קל"צ), ריבית קבועה צמודה (ק"צ), ריבית משתנה צמודה (מ"צ), ריבית משתנה לא צמודה, תמהיל משכנתא, בניית תמהיל, לוח סילוקין, שפיצר, קרן שווה, גרייס, עמלת פירעון מוקדם, מחזור משכנתא, כדאיות מחזור, החזר חודשי, יועץ משכנתאות, הלוואת דיור, אחוז מימון (LTV), יחס החזר מהכנסה (PTI), ביטוח משכנתא, ביטוח חיים למשכנתא, ביטוח נכס, אישור עקרוני למשכנתא, שמאות מקרקעין, עלויות נלוות למשכנתא, בנק ישראל, SEO למחשבון משכנתא.
                  </p>
                </div>
              </div>
            </article>
        </div>
      </div>
    </>
  );
} 