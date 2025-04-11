import Head from 'next/head';
import { Calculator } from '../../components/Calculator';
import Link from 'next/link';
import { ChevronRight, Info, TrendingUp, PiggyBank, Clock, HelpCircle, BarChart2, Users, Scale, AlertTriangle, CheckSquare } from 'lucide-react';
import { WarningBox, TipBox, InfoBox } from '../../components/Boxes';

export default function CompoundInterestCalculator() {
  return (
    <>
      <Head>
        <title>מחשבון ריבית דריבית | דריבית - המדריך המקיף לכוח ההשקעה שלכם</title>
        <meta name="description" content="גלו את כוחה של הריבית דריבית עם המחשבון המתקדם של דריבית. מדריך מקיף, דוגמאות, השפעת אינפלציה, מיסוי וטיפים לחיסכון והשקעה חכמה לטווח ארוך." />
        <meta name="keywords" content="מחשבון ריבית דריבית, חישוב ריבית דריבית, כוח הריבית דריבית, תשואה על השקעות, הפקדות חודשיות, חיסכון ארוך טווח, תכנון פרישה, קופת גמל, קרן השתלמות, פנסיה, השקעות פסיביות, דמי ניהול, אינפלציה, מיסוי השקעות" />
        <meta property="og:title" content="מחשבון ריבית דריבית | דריבית - המדריך המקיף לכוח ההשקעה שלכם" />
        <meta property="og:description" content="המדריך המלא לכוח הריבית דריבית ומחשבון מתקדם מבית דריבית לחישוב פוטנציאל הצמיחה של החיסכון וההשקעות שלכם לאורך זמן." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deribit.co.il/calculators/compound-interest" />
        <link rel="canonical" href="https://www.deribit.co.il/calculators/compound-interest" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה למחשבונים
            </Link>
          </div>
          
          <Calculator />

          <article className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">המדריך המקיף לריבית דריבית וכוחה של הצמיחה המצטברת</h2>

              <section className="mb-12 text-center">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
                  מחשבון ריבית דריבית הוא לא סתם עוד כלי חישוב – הוא חלון הצצה לעתיד הפיננסי שלכם. הוא חושף את "הקסם" של הריבית המצטברת, עיקרון פיננסי יסודי שאלברט איינשטיין כינה אותו (לפי האגדה) "הכוח החזק ביותר ביקום". הבנה ויישום של עיקרון זה יכולים להיות ההבדל בין ביטחון כלכלי לדאגות פיננסיות.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  במדריך זה, יחד עם המחשבון של דריבית, נצלול לעומק המושג, נבין מדוע הוא קריטי לכל אחד, נלמד כיצד להשתמש במחשבון בצורה נכונה, ונדון בהיבטים נוספים כמו אינפלציה, מיסים והנחות היסוד של החישוב.
                </p>
              </section>

              <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <HelpCircle className="w-7 h-7 text-blue-600" />
                  מהי ריבית דריבית (ריבית מצטברת)?
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
                  בפשטות, ריבית דריבית היא **ריבית שמרוויחים על הריבית**. בניגוד לריבית פשוטה, שמחושבת רק על סכום הקרן המקורי, ריבית דריבית מחושבת בכל תקופה מחדש על הקרן *בתוספת* כל הריבית שנצברה עד כה. הרווחים מהתקופה הקודמת הופכים לחלק מהקרן בתקופה הבאה, ומתחילים גם הם לייצר רווחים.
                </p>
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">דוגמה מספרית להמחשה:</h4>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-2">
                  נניח שהשקעתם 10,000 ₪ בתשואה שנתית של 8%.
                </p>
                <div className="space-y-1 text-gray-700 dark:text-gray-200 mb-3">
                  <p><strong className="text-gray-900 dark:text-white">שנה 1:</strong> הקרן היא 10,000 ₪. הרווח הוא 800 ₪ (8% מ-10,000). היתרה בסוף השנה: 10,800 ₪.</p>
                  <p><strong className="text-gray-900 dark:text-white">שנה 2:</strong> הקרן היא 10,800 ₪. הרווח הוא 864 ₪ (8% מ-10,800). היתרה בסוף השנה: 11,664 ₪.</p>
                  <p><strong className="text-gray-900 dark:text-white">שנה 3:</strong> הקרן היא 11,664 ₪. הרווח הוא 933.12 ₪ (8% מ-11,664). היתרה בסוף השנה: 12,597.12 ₪.</p>
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  שימו לב כיצד סכום הרווח השנתי גדל משנה לשנה. זוהי תמצית אפקט "כדור השלג": ככל שיש יותר זמן וככל שהתשואה גבוהה יותר, כך הצמיחה הופכת אקספוננציאלית.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <TrendingUp className="w-7 h-7 text-green-600" />
                  חשיבות עליונה: מדוע חובה להבין ריבית דריבית?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  הבנת העיקרון הזה היא אבן יסוד באוריינות פיננסית. הסיבה פשוטה: **ריבית דריבית פועלת תמיד - או לטובתכם או נגדכם.**
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-700">
                    <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">כשהיא פועלת נגדכם:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-600 dark:text-red-200">
                      <li>חובות בכרטיסי אשראי</li>
                      <li>הלוואות בריבית גבוהה</li>
                      <li>מינוס (אוברדרפט) בבנק</li>
                      <li>משכנתאות (אם כי כאן הריבית לרוב נמוכה יותר)</li>
                    </ul>
                    <p className="mt-2 text-sm text-red-500 dark:text-red-400">כאן, אתם משלמים "ריבית על ריבית" לגופים הפיננסיים, והחוב עלול לתפוח במהירות.</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">כשהיא פועלת לטובתכם:</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-600 dark:text-green-200">
                      <li>חיסכון פנסיוני (פנסיה, גמל, השתלמות)</li>
                      <li>השקעות בשוק ההון (מניות, אג"ח, קרנות)</li>
                      <li>פקדונות בנקאיים (אם כי התשואה נמוכה)</li>
                      <li>השקעות אלטרנטיביות (נדל"ן מניב וכו')</li>
                    </ul>
                    <p className="mt-2 text-sm text-green-500 dark:text-green-400">כאן, הכסף שלכם "עובד בשבילכם" ומייצר עוד כסף לאורך זמן.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <Users className="w-7 h-7 text-purple-600" />
                  למי מיועד מחשבון ריבית דריבית?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  לכל מי שרוצה להבין את פוטנציאל הצמיחה של כספו לאורך זמן. זה רלוונטי במיוחד עבור:
                </p>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong className="text-gray-900 dark:text-white">חוסכים לטווח ארוך:</strong> פרישה, חיסכון לילדים, קניית דירה בעתיד.</p>
                  <p><strong className="text-gray-900 dark:text-white">משקיעים בשוק ההון:</strong> להמחשת הצמיחה הפוטנציאלית של תיק ההשקעות.</p>
                  <p><strong className="text-gray-900 dark:text-white">בעלי חיסכון פנסיוני:</strong> להבנת הצפי לצבירה בקופת הגמל, קרן ההשתלמות או הפנסיה.</p>
                  <p><strong className="text-gray-900 dark:text-white">כל מי שרוצה לקבל החלטות פיננסיות מושכלות:</strong> המחשבון עוזר לכמת את ההשפעה של החלטות כמו סכום הפקדה, בחירת מסלול השקעה (תשואה צפויה) ודמי ניהול.</p>
                  <p><strong className="text-gray-900 dark:text-white">הורים המלמדים את ילדיהם על כסף:</strong> כלי ויזואלי מצוין להמחשת חשיבות החיסכון וההשקעה מגיל צעיר.</p>
                </div>
              </section>

              <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <PiggyBank className="w-7 h-7 text-blue-600" />
                  מדריך מפורט לשימוש במחשבון דריבית
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                  המחשבון שלנו פשוט וידידותי, אך חשוב להזין את הנתונים הנכונים כדי לקבל תחזית רלוונטית. הנה פירוט השדות:
                </p>
                <ol className="space-y-5 text-gray-700 dark:text-gray-200">
                  <li className="border-b pb-4 dark:border-gray-600">
                    <strong className="block mb-1">1. סכום השקעה ראשוני (₪):</strong><br /> הסכום ההתחלתי שעומד לרשותכם. אם אתם מחשבים עבור חיסכון קיים (כמו קופת גמל), הזינו את היתרה הנוכחית. אם אתם מתחילים מאפס, הזינו 0.
                  </li>
                  <li className="border-b pb-4 dark:border-gray-600">
                    <strong className="block mb-1">2. סכום הפקדה חודשית (₪):</strong><br /> הסכום שאתם מתכננים להפקיד באופן קבוע מדי חודש. עקביות בהפקדות מגבירה משמעותית את הצבירה הסופית. אם אין הפקדות נוספות, הזינו 0.
                    <TipBox className="mt-2 text-sm">
                      לחיסכון פנסיוני, בדקו בתלוש השכר את סך ההפרשות (עובד+מעסיק+פיצויים) או בדוח התקופתי מהגוף המנהל.
                    </TipBox>
                  </li>
                  <li className="border-b pb-4 dark:border-gray-600">
                    <strong className="block mb-1">3. מספר שנות ההשקעה:</strong><br /> טווח הזמן (בשנים) שבו אתם מתכננים להשאיר את הכסף מושקע ולבצע הפקדות. זמן הוא בעל הברית החזק ביותר של הריבית דריבית.
                  </li>
                  <li className="border-b pb-4 dark:border-gray-600">
                    <strong className="block mb-1">4. תשואה שנתית ממוצעת (%):</strong><br /> הנקודה המאתגרת ביותר. איש אינו יודע מה תהיה התשואה העתידית. הזינו כאן את התשואה *הממוצעת* שאתם *מניחים* שתתקבל לאורך כל התקופה.
                    <InfoBox title="איך להעריך תשואה? (נקודות למחשבה)" className="mt-3 text-sm">
                      <div className="space-y-1 mt-2">
                        <p><strong className="text-indigo-800 dark:text-indigo-200">• רמת סיכון:</strong> ככל שההשקעה מסוכנת יותר (למשל, חשיפה גבוהה למניות), פוטנציאל התשואה לטווח ארוך גבוה יותר, אך כך גם התנודתיות והסיכון להפסדים.</p>
                        <p><strong className="text-indigo-800 dark:text-indigo-200">• נתוני עבר:</strong> ניתן להסתכל על ממוצעים היסטוריים של מדדים רלוונטיים (כמו S&P 500 שהניב כ-10% נומינלית בממוצע היסטורי ארוך טווח, או ביצועי המסלול הספציפי שלכם בפנסיה/גמל), אך חשוב לזכור: <strong>ביצועי העבר אינם ערובה לביצועי העתיד.</strong></p>
                        <p><strong className="text-indigo-800 dark:text-indigo-200">• שמרנות:</strong> ייתכן שכדאי להזין הנחה שמרנית יותר (למשל, 6%-8% למסלול מנייתי) מאשר הנחה אופטימית מדי.</p>
                        <p><strong className="text-indigo-800 dark:text-indigo-200">• התייעצות:</strong> יועץ פיננסי יכול לעזור לכם לגבש הנחת תשואה סבירה בהתאם למטרות ורמת הסיכון שלכם.</p>
                      </div>
                    </InfoBox>
                  </li>
                  <li>
                    <strong className="block mb-1">5. דמי ניהול שנתיים (%):</strong><br /> רלוונטי בעיקר למוצרי חיסכון מנוהלים (פנסיה, גמל, השתלמות, קרנות נאמנות אקטיביות). הזינו את אחוז דמי הניהול השנתיים מהצבירה. תוכלו למצוא נתון זה בדוחות או באתר הגוף המנהל.
                    <TipBox className="mt-2 text-sm">
                      אל תזלזלו בדמי הניהול! אפילו 0.5% לשנה יכולים להצטבר לסכומים עצומים לאורך עשרות שנים. השוואת דמי ניהול היא צעד חשוב.
                    </TipBox>
                  </li>
                </ol>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <BarChart2 className="w-7 h-7 text-orange-500" />
                  הבנת התוצאות: מה המחשבון מראה לנו?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  לאחר לחיצה על "חשב", תקבלו פירוט מספרי וגרף הממחישים את התחזית:
                </p>
                <div className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                  <p><strong className="text-gray-900 dark:text-white">יתרה סופית משוערכת:</strong> זהו הסכום הכולל החזוי שיהיה לכם בסוף תקופת ההשקעה, בהתאם לנתונים שהוזנו.</p>
                  <p><strong className="text-gray-900 dark:text-white">סך כל ההפקדות:</strong> הסכום הראשוני + (הפקדה חודשית * 12 * מספר שנים). זה הכסף שאתם הכנסתם.</p>
                  <p><strong className="text-gray-900 dark:text-white">סך הריבית (רווח נטו):</strong> היתרה הסופית פחות סך כל ההפקדות. זהו הרווח שנצבר נטו (לאחר דמי ניהול, אם הוזנו), כולו בזכות הריבית דריבית. שימו לב ליחס בין הרווח להפקדות – ככל שהשנים עוברות, הרווח הופך לחלק גדול יותר ויותר מהסכום הכולל.</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-300">הגרף הויזואלי:</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-200">הגרף ממחיש את הצמיחה לאורך זמן. תוכלו לראות כיצד הקו המייצג את היתרה הכוללת הופך תלול יותר ויותר ככל שהשנים חולפות – זוהי ההמחשה הויזואלית של כוח הריבית דריבית בפעולה.</p>
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                  <Scale className="w-7 h-7 text-teal-500" />
                  גורמים נוספים שיש לקחת בחשבון
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  המחשבון הוא כלי מצוין להמחשה, אך המציאות מורכבת יותר. חשוב להיות מודעים לגורמים נוספים:
                </p>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong className="block text-gray-900 dark:text-white">אינפלציה:</strong> אינפלציה היא העלייה הכללית במחירים לאורך זמן, ששוחקת את כוח הקנייה של הכסף. 100 ש"ח היום קונים פחות ממה שקנו לפני 10 שנים. לכן, התשואה החשובה באמת היא **התשואה הריאלית** - התשואה הנומינלית (מה שהמחשבון מראה) פחות שיעור האינפלציה. אם התשואה שלכם היא 7% והאינפלציה היא 3%, התשואה הריאלית שלכם היא כ-4%. חשוב לשאוף לתשואה שתנצח את האינפלציה לאורך זמן.
                  </p>
                  <p>
                    <strong className="block text-gray-900 dark:text-white">מיסוי:</strong> במדינת ישראל, רווחים מהשקעות (כמו אלה שנוצרים מריבית דריבית בשוק ההון) חייבים במס רווחי הון (כ-25% על הרווח הריאלי, נכון ל-2024). המס משולם בעת מימוש (מכירת ההשקעה). במוצרים פנסיוניים כמו קופות גמל או קרנות השתלמות קיימים פטורים או הטבות מס משמעותיות בתנאים מסוימים. תוצאות המחשבון אינן כוללות מיסוי, ויש לקחת זאת בחשבון בתכנון הפיננסי הכולל.
                    <WarningBox title="לא ייעוץ מס" className="mt-2 text-sm">תמיד התייעצו עם רואה חשבון או יועץ מס לגבי השלכות המיסוי הספציפיות למצבכם.</WarningBox>
                  </p>
                  <p>
                    <strong className="block text-gray-900 dark:text-white">תנודתיות ותשואות לא קבועות:</strong> המחשבון מניח תשואה שנתית ממוצעת קבועה. בפועל, תשואות בשוק ההון משתנות מאוד משנה לשנה ויכולות להיות גם שליליות. הריבית דריבית פועלת גם על הפסדים! השקעה לטווח ארוך עוזרת "להחליק" את התנודות האלה, אך חשוב להיות מוכנים לתקופות של ירידות.
                  </p>
                  <p>
                    <strong className="block text-gray-900 dark:text-white">עמלות נוספות:</strong> המחשבון מאפשר להזין דמי ניהול שנתיים, אך ייתכנו עמלות נוספות בהשקעות מסוימות (כמו עמלות קנייה/מכירה של ניירות ערך, דמי נאמן, עמלות העברה וכו') שיכולות להשפיע על התשואה נטו.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-800 dark:text-white">
                      <AlertTriangle className="w-7 h-7 text-yellow-500" />
                      הנחות יסוד ומגבלות המחשבון
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      חשוב להבין את הנחות היסוד של המחשבון כדי להשתמש בו בחוכמה:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>הוא מניח שהתשואה השנתית שהוזנה היא קבועה לאורך כל התקופה.</li>
                      <li>הוא מניח שההפקדות החודשיות מבוצעות באופן עקבי ורציף.</li>
                      <li>הוא מחשב את הריבית על בסיס שנתי (או חודשי, תלוי במימוש הספציפי, אך התוצאה מוצגת שנתית).</li>
                      <li>הוא לוקח בחשבון דמי ניהול שנתיים מהצבירה, אך לא עמלות אחרות או מיסים.</li>
                      <li>הוא אינו מתחשב באינפלציה (מציג תוצאה נומינלית).</li>
                  </ul>
                  <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      לכן, יש להתייחס לתוצאות כאל <strong>הערכה ותחזית תיאורטית</strong> המבוססת על ההנחות שהוזנו, ולא כאל הבטחה לתוצאה עתידית.
                  </p>
              </section>

              <section className="mb-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-blue-800 dark:text-blue-200">
                  <CheckSquare className="w-6 h-6 text-blue-600" />
                  טיפים למיקסום כוחה של הריבית דריבית
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong className="text-gray-900 dark:text-white">1. התחילו מוקדם ככל האפשר:</strong> הזמן הוא המרכיב הקריטי ביותר. גם סכומים קטנים המושקעים לאורך זמן רב יכולים לצמוח משמעותית.</li>
                  <li><strong className="text-gray-900 dark:text-white">2. היו עקביים בהפקדות:</strong> הפקדות קבועות (למשל, בהוראת קבע) מבטיחות חיסכון רציף ומסייעות למצע את תנודות השוק (Dollar Cost Averaging).</li>
                  <li><strong className="text-gray-900 dark:text-white">3. חשבו לטווח ארוך:</strong> אל תיבהלו מירידות זמניות בשוק. השקעה היא מרתון, לא ספרינט. תנו לזמן לעשות את שלו.</li>
                  <li><strong className="text-gray-900 dark:text-white">4. מזערו עלויות:</strong> בחרו מוצרי השקעה וחיסכון עם דמי ניהול נמוכים ככל האפשר. השוואת דמי ניהול יכולה לחסוך לכם עשרות ואף מאות אלפי שקלים לאורך חיי החיסכון.</li>
                  <li><strong className="text-gray-900 dark:text-white">5. הגדילו הפקדות כשמתאפשר:</strong> העלאת שכר? בונוס? שקלו להפנות חלק מהתוספת להגדלת החיסכון החודשי.</li>
                   <li><strong className="text-gray-900 dark:text-white">6. גוונו את השקעותיכם:</strong> אל תשימו את כל הביצים בסל אחד. פיזור ההשקעות בין אפיקים שונים (מניות, אג"ח, נדל"ן וכו') יכול להפחית את הסיכון הכולל.</li>
                  <li><strong className="text-gray-900 dark:text-white">7. למדו והתעדכנו:</strong> המשיכו ללמוד על אפשרויות השקעה וניהול פיננסי. ידע הוא כוח.</li>
                </ul>
              </section>

               <WarningBox title="חשוב לזכור" className="mb-10">
                 התוכן בעמוד זה והמחשבון נועדו למטרות המחשה ולימוד בלבד ואין לראות בהם ייעוץ השקעות, ייעוץ מס או המלצה לביצוע פעולות. התוצאות המוצגות הן תחזית תיאורטית המבוססת על ההנחות שהוזנו. השקעות כרוכות בסיכון, כולל אפשרות לאובדן הקרן. לפני קבלת החלטות פיננסיות, מומלץ בחום להתייעץ עם יועץ פיננסי או פנסיוני מוסמך ו/או יועץ מס.
               </WarningBox>

              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                <p>
                  <strong>מושגים קשורים:</strong> ריבית דריבית, חישוב ריבית דריבית, כוח הריבית דריבית, תשואה על השקעות, הפקדות חודשיות, חיסכון ארוך טווח, תכנון פרישה, קופת גמל, קרן השתלמות, פנסיה, השקעות פסיביות, דמי ניהול, אינפלציה, מיסוי השקעות, תשואה ריאלית, תשואה נומינלית, אפקט כדור השלג, תכנון פיננסי, תיק השקעות, תשואה מצטברת, S&P 500, גיוון השקעות.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 