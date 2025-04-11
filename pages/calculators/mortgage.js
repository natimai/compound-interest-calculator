import Head from 'next/head';
import MortgageCalculator from '../../components/MortgageCalculator';
import Link from 'next/link';
import { ChevronRight, Info, Home, Calculator, Landmark, AlertTriangle, HelpCircle, TrendingDown, ListOrdered, SlidersHorizontal, Banknote, Percent, CalendarDays, FileText, Scale, CheckSquare, ShieldCheck, Shuffle, Target, Wallet, Library } from 'lucide-react';
import { WarningBox, TipBox, InfoBox } from '../../components/Boxes';

export default function MortgageCalculatorPage() {
  return (
    <>
      <Head>
        <title>מחשבון משכנתא | דריבית - המדריך המקיף לתכנון הלוואת דיור</title>
        <meta name="description" content="תכננו את המשכנתא שלכם עם המחשבון המתקדם והמדריך המקיף בישראל מבית דריבית. הסברים מעמיקים על מסלולים, ריביות, תמהיל, מחזור, מיסוי וטיפים חיוניים." />
        <meta name="keywords" content="מחשבון משכנתא, חישוב משכנתא, ריבית משכנתא, מסלולי משכנתא, פריים, מדד המחירים לצרכן, קלצ, ריבית קבועה, ריבית משתנה, תמהיל משכנתא, לוח סילוקין, שפיצר, מחזור משכנתא, החזר חודשי, יועץ משכנתאות, הלוואת דיור, LTV, אחוז מימון, אישור עקרוני, ביטוח משכנתא" />
        <meta property="og:title" content="מחשבון משכנתא | דריבית - המדריך המקיף לתכנון הלוואת דיור" />
        <meta property="og:description" content="המדריך האולטימטיבי למשכנתאות בישראל ומחשבון מתקדם מבית דריבית. הבינו לעומק מסלולים, ריביות, תמהילים, סיכונים וקבלו החלטה מושכלת." />
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
            <div className="p-8 md:p-12 lg:p-16 prose prose-lg dark:prose-invert max-w-none space-y-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white !mb-12">המדריך המעמיק למשכנתא: מהחזר חודשי ועד תמהיל אופטימלי</h2>

              <section>
                <p className="lead">
                  רכישת דירה היא צעד מרגש, אך לקיחת משכנתא היא התחייבות פיננסית כבדה וארוכת טווח. הבנה מעמיקה של המנגנונים, המסלולים, הסיכונים והאפשרויות היא קריטית כדי להימנע מטעויות יקרות ולהבטיח שההלוואה תתאים לכם לא רק היום, אלא גם בעוד 10, 20 או 30 שנה. מחשבון המשכנתא של דריבית, יחד עם מדריך זה, נועדו לספק לכם את כל המידע הדרוש.
                </p>
              </section>

              <section className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg !mt-8">
                <h3 className="flex items-center gap-3 !mt-0">
                  <HelpCircle className="w-7 h-7 text-blue-600" />
                  תזכורת: מהי משכנתא?
                </h3>
                <p>משכנתא היא הלוואה לרכישת נדל"ן, כאשר הנכס עצמו משמש כבטוחה לבנק. היא מורכבת לרוב ממספר "מסלולים" בעלי מאפייני ריבית והצמדה שונים, המשולבים יחד ל"תמהיל" אחד.</p>
              </section>

              <section>
                <h3 className="flex items-center gap-3">
                  <Home className="w-7 h-7 text-green-600" />
                  תפקידו הקריטי של מחשבון המשכנתא
                </h3>
                <p>אל תסתפקו בהצעה הראשונה או בתחושת בטן. מחשבון משכנתא איכותי מאפשר לכם:</p>
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
                <h3 className="flex items-center gap-3 !mt-0">
                  <Calculator className="w-7 h-7 text-blue-600" />
                  שימוש במחשבון ופירוט מעמיק של מסלולי המשכנתא
                </h3>
                <p>הכניסו את פרטי כל מסלול בתמהיל המשכנתא המתוכנן שלכם:</p>
                <h4>1. סכום ההלוואה במסלול (₪) <Banknote className="inline-block w-5 h-5 ml-1" /></h4>
                <p>חלק המשכנתא הכולל שאתם מייעדים למסלול זה.</p>
                <h4>2. תקופת ההלוואה (שנים) <CalendarDays className="inline-block w-5 h-5 ml-1" /></h4>
                <p>משך הזמן להחזר מסלול זה. תקופות ארוכות יותר מקטינות החזר חודשי אך מגדילות את סך הריבית המשולמת.</p>
                <h4>3. שיעור הריבית השנתית (%) <Percent className="inline-block w-5 h-5 ml-1" /></h4>
                <p>הריבית הנקובה שהוצעה לכם למסלול זה.</p>
                <h4>4. סוג המסלול <SlidersHorizontal className="inline-block w-5 h-5 ml-1" /></h4>
                <p>כאן טמונה מורכבות המשכנתא. נפרט את הנפוצים:</p>
                <div className="space-y-4 mt-4">
                  <div className="p-4 border rounded dark:border-gray-600">
                    <strong className="text-blue-700 dark:text-blue-300">א. ריבית פריים (P)</strong>
                    <p className="text-sm">ריבית זו צמודה לריבית בנק ישראל בתוספת מרווח קבוע (לרוב 1.5%). היא משתנה רק כאשר בנק ישראל משנה את הריבית במשק. <strong>יתרונות:</strong> גמישות גבוהה לפירעון מוקדם (ללא עמלות משמעותיות), אין הצמדה למדד, היסטורית הייתה זולה יחסית. <strong>חסרונות:</strong> סיכון לעליית החזרים אם ריבית בנק ישראל עולה. <strong>למי מתאים?</strong> למי שמאמין שהריבית תרד או תישאר נמוכה, או למי שמתכנן לסלק חלק זה מוקדם. <strong>דוגמה:</strong> אם הפריים 6% והמסלול הוא P-0.5, הריבית היא 5.5%. אם בנק ישראל יעלה ריבית והפריים יעלה ל-7%, הריבית תהיה 6.5% וההחזר החודשי יגדל.</p>
                  </div>
                  <div className="p-4 border rounded dark:border-gray-600">
                    <strong className="text-green-700 dark:text-green-300">ב. ריבית קבועה לא צמודה (קל"צ)</strong>
                    <p className="text-sm">הריבית נשארת זהה לאורך כל חיי המסלול, והקרן אינה צמודה למדד. <strong>יתרונות:</strong> ודאות מוחלטת לגבי גובה ההחזר החודשי לכל התקופה, הגנה מלאה מאינפלציה ושינויי ריבית. <strong>חסרונות:</strong> הריבית ההתחלתית היא הגבוהה ביותר מבין המסלולים, קיימת עמלת פירעון מוקדם משמעותית אם תרצו לסלק לפני הזמן והריבית במשק ירדה. <strong>למי מתאים?</strong> לשונאי סיכון, למי שחשוב לו לדעת בדיוק כמה ישלם כל חודש, ולטווחים ארוכים כ"עוגן" בתמהיל. <strong>דוגמה:</strong> אם לקחתם קל"צ ב-5%, תשלמו 5% לכל אורך התקופה, לא משנה מה יקרה לריביות או למדד.</p>
                  </div>
                  <div className="p-4 border rounded dark:border-gray-600">
                    <strong className="text-red-700 dark:text-red-300">ג. ריבית קבועה צמודה למדד (ק"צ)</strong>
                    <p className="text-sm">הריבית קבועה, אך יתרת הקרן צמודה למדד המחירים לצרכן. <strong>יתרונות:</strong> הריבית ההתחלתית נמוכה משמעותית מקל"צ. <strong>חסרונות:</strong> ההחזר החודשי ויתרת הקרן עולים יחד עם האינפלציה (המדד). בתקופות אינפלציה גבוהה, ההחזר יכול לעלות משמעותית, ואף ייתכן מצב שבו אתם משלמים כל חודש אך הקרן גדלה (הצמדה שלילית). כולל גם עמלת פירעון מוקדם. <strong>למי מתאים?</strong> פחות מומלץ כיום עקב האינפלציה, אך יכול להתאים למי שצופה שהכנסתו תעלה ריאלית (מעל המדד) לאורך זמן, או לטווחים קצרים יחסית. <strong>דוגמה:</strong> לקחתם ק"צ ב-3%. בשנה הראשונה המדד עלה ב-4%. יתרת הקרן שלכם גדלה ב-4%, והריבית לשנה הבאה תחושב על הקרן הגבוהה יותר, מה שיגדיל את ההחזר.</p>
                  </div>
                   <div className="p-4 border rounded dark:border-gray-600">
                    <strong className="text-purple-700 dark:text-purple-300">ד. ריבית משתנה צמודה למדד (מ"צ)</strong>
                    <p className="text-sm">הקרן צמודה למדד, והריבית משתנה כל תקופה קבועה (לרוב כל 5 שנים) בהתאם לעוגן שנקבע (למשל, ממוצע תשואות אג"ח ממשלתיות צמודות). <strong>יתרונות:</strong> ריבית התחלתית נמוכה יחסית, נקודות יציאה ללא עמלה משמעותית במועדי שינוי הריבית. <strong>חסרונות:</strong> חשיפה כפולה לסיכון - גם סיכון עליית המדד (אינפלציה) וגם סיכון עליית הריבית במועד השינוי. <strong>למי מתאים?</strong> למי שמוכן לקחת סיכון גבוה יותר בתמורה לריבית התחלתית נמוכה, או כחלק מפיזור בתמהיל. <strong>דוגמה:</strong> לקחתם מ"צ משתנה כל 5 שנים. במשך 5 שנים אתם חשופים לעליית המדד. לאחר 5 שנים, הריבית תתעדכן לפי העוגן - היא יכולה לעלות, לרדת או להישאר דומה, בנוסף להשפעת המדד על הקרן.</p>
                  </div>
                </div>
                <h4 className="mt-6">5. הוספת מסלולים וחישוב <ListOrdered className="inline-block w-5 h-5 ml-1" /></h4>
                <p>לאחר שהזנתם את כל פרטי המסלול הראשון, תוכלו ללחוץ על "הוסף מסלול" ולהזין את פרטי המסלולים הנוספים בתמהיל שלכם. בסיום, לחצו "חשב".</p>
              </section>

              <section>
                <h3 className="flex items-center gap-3">
                  <FileText className="w-7 h-7 text-orange-500" />
                  פענוח תוצאות המחשבון - מבט מעמיק
                </h3>
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
                <h3 className="flex items-center gap-3">
                    <Shuffle className="w-7 h-7 text-indigo-500" />
                    חשיבות תמהיל המשכנתא הנכון
                </h3>
                <p>כמעט אף פעם לא מומלץ לקחת משכנתא במסלול אחד בלבד. בניית תמהיל נכון, המשלב מספר מסלולים, מאפשרת לפזר סיכונים ולהתאים את המשכנתא למצבכם וליכולותיכם:</p>
                <ul>
                    <li><strong>פיזור סיכון ריבית:</strong> שילוב מסלולים בריבית קבועה (קל"צ) עם מסלולים בריבית משתנה (פריים, מ"צ) מאפשר ליהנות מיציבות חלקית לצד פוטנציאל לחיסכון אם הריביות ירדו (ולהיפך).</li>
                    <li><strong>פיזור סיכון אינפלציה:</strong> שילוב מסלולים צמודי מדד (ק"צ, מ"צ) עם מסלולים לא צמודים (קל"צ, פריים) מאזן את החשיפה לעליית מדד המחירים לצרכן.</li>
                    <li><strong>התאמה לתזרים:</strong> ניתן לבנות תמהיל עם החזר התחלתי נמוך יותר (למשל, עם יותר פריים או תקופות ארוכות יותר) אם צופים עלייה בהכנסות בעתיד, או תמהיל יציב יותר אם מעדיפים ודאות.</li>
                </ul>
                <TipBox className="mt-4 text-sm">
                    <strong>דוגמאות לתמהילים (להמחשה בלבד!):</strong>
                    *   <strong>שמרני/יציב:</strong> אחוז גבוה של קל"צ (למשל 50%), והיתרה בפריים ו/או מ"צ לטווחים קצרים יותר.
                    *   <strong>מאוזן:</strong> חלוקה יחסית שווה בין קל"צ, פריים ומשתנה צמודה (למשל, שליש כל אחד).
                    *   <strong>נוטה לסיכון/גמישות:</strong> אחוז גבוה של פריים (עד המגבלה של בנק ישראל, כיום 2/3 מהמשכנתא) ואחוז גבוה של משתנות, עם חלק קטן יחסית בקל"צ.
                    <strong>חובה להתאים את התמהיל למצבכם האישי ולהתייעץ!</strong>
                </TipBox>
            </section>

              <section>
                  <h3 className="flex items-center gap-3">
                      <Library className="w-7 h-7 text-cyan-500" />
                      מושגי יסוד נוספים במשכנתא
                  </h3>
                  <div className="space-y-3">
                      <p><strong className="text-gray-900 dark:text-white">אחוז מימון (LTV - Loan to Value):</strong> היחס בין סכום המשכנתא לשווי הנכס. בנק ישראל מטיל מגבלות על אחוז המימון (למשל, עד 75% לדירה ראשונה, 50% למשפרי דיור, וכו'). ככל שאחוז המימון נמוך יותר, הריביות המוצעות לרוב טובות יותר.</p>
                      <p><strong className="text-gray-900 dark:text-white">יחס החזר מהכנסה (PTI - Payment to Income):</strong> היחס בין ההחזר החודשי הכולל על כל ההלוואות (לא רק משכנתא) להכנסה הפנויה נטו של משק הבית. מומלץ לא לעבור יחס של 30%-35% כדי לשמור על יציבות כלכלית.</p>
                      <p><strong className="text-gray-900 dark:text-white">עמלת פירעון מוקדם:**</strong> קנס שהבנק עשוי לגבות אם תרצו לסלק את המשכנתא (או חלק ממנה) לפני תום התקופה. רלוונטית בעיקר במסלולים בריבית קבועה (קל"צ, ק"צ) כאשר הריבית הממוצעת במשק נמוכה מהריבית שלכם. במסלול פריים אין עמלה משמעותית.</p>
                      <p><strong className="text-gray-900 dark:text-white">תקופת גרייס (חסד):**</strong> תקופה (לרוב קצרה) בתחילת המשכנתא שבה משלמים רק את הריבית ולא את הקרן. מקטין את ההחזר ההתחלתי אך מגדיל את סך התשלום הכולל. יכול להתאים במקרים ספציפיים (למשל, בבנייה).</p>
                      <p><strong className="text-gray-900 dark:text-white">מחזור משכנתא:**</strong> החלפת המשכנתא הקיימת במשכנתא חדשה בתנאים טובים יותר (ריבית נמוכה יותר, תמהיל שונה). כדאי לבדוק כדאיות מחזור אחת לכמה שנים, או כאשר חל שינוי משמעותי בריביות במשק או במצבכם הכלכלי.</p>
                  </div>
              </section>

               <section>
                 <h3 className="flex items-center gap-3">
                     <ListOrdered className="w-7 h-7 text-lime-500" />
                     שלבי התהליך בלקיחת משכנתא (בקצרה)
                 </h3>
                 <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>קבלת **אישור עקרוני** מהבנק (מסגרת אשראי למשכנתא).</li>
                    <li>מציאת נכס וחתימת חוזה רכישה.</li>
                    <li>הזמנת **שמאות** לנכס (דרך הבנק או באופן פרטי).</li>
                    <li>קבלת **אישור סופי** למשכנתא מהבנק בהתאם לשמאות ולחוזה.</li>
                    <li>**חתימה** על מסמכי ההלוואה והבטוחות בבנק.</li>
                    <li>רכישת **ביטוח חיים וביטוח נכס** למשכנתא.</li>
                    <li>רישום הערת אזהרה ו/או משכון ברשויות.</li>
                    <li>**העברת כספי המשכנתא** למוכר הנכס.</li>
                 </ol>
                 <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">זהו תהליך מורכב, ומומלץ להיעזר באנשי מקצוע (עו"ד, יועץ משכנתאות) בכל שלב.</p>
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

               <WarningBox title="אזהרה וגילוי נאות" className="mb-10 text-base">
                 המידע המוצג בעמוד זה ובמחשבון המשכנתא נועד להמחשה, לימוד והרחבת ידע בלבד. הוא אינו מהווה ייעוץ השקעות, ייעוץ מס, ייעוץ משכנתאות או המלצה כלשהי לביצוע פעולה. התוצאות המוצגות הן סימולציות תיאורטיות המבוססות על הנחות והנתונים שהוזנו, ואינן מהוות הבטחה לתוצאה עתידית או הצעה מחייבת מהבנק. תנאי המשכנתא בפועל ייקבעו באופן פרטני על ידי הגוף המלווה. לקיחת משכנתא היא החלטה מורכבת בעלת השלכות ארוכות טווח. **חובה להתייעץ עם יועץ משכנתאות מוסמך ובלתי תלוי ו/או יועץ פיננסי לפני קבלת החלטות.**
               </WarningBox>

              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                <p>
                  <strong>מושגים קשורים:</strong> מחשבון משכנתא, חישוב משכנתא, ריבית משכנתא, מסלולי משכנתא, פריים, מדד המחירים לצרכן, ריבית קבועה לא צמודה (קל"צ), ריבית קבועה צמודה (ק"צ), ריבית משתנה צמודה (מ"צ), תמהיל משכנתא, לוח סילוקין, שפיצר, קרן שווה, גרייס, עמלת פירעון מוקדם, מחזור משכנתא, החזר חודשי, יועץ משכנתאות, הלוואת דיור, אחוז מימון (LTV), יחס החזר מהכנסה (PTI), ביטוח משכנתא, אישור עקרוני, שמאות מקרקעין.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 