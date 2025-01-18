import Head from 'next/head'
import { Clock, BookOpen, TrendingUp, Target, Users, Sparkles, ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>אודות דריבית | מידע פיננסי חינמי בעברית פשוטה</title>
        <meta name="description" content="החזון שלנו הוא להנגיש מידע פיננסי איכותי בחינם ובעברית פשוטה. מחשבונים פיננסיים, השוואת מוצרי השקעה וקורס שוק ההון למתחילים - הכל ללא עלות." />
        <meta name="keywords" content="דריבית, מידע פיננסי, השקעות למתחילים, מחשבונים פיננסיים, קורס שוק ההון חינם" />
        <link rel="canonical" href="https://www.deribit.co.il/about" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <Sparkles className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            החזון שלנו
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            להנגיש את המידע הפיננסי החשוב ביותר, בחינם ובשפה פשוטה
          </p>
        </div>

        <div className="space-y-16">
          <section className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              למה הקמנו את דריבית?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
              <p>
                כשהתחלנו את דרכנו בעולם ההשקעות, נתקלנו באינספור מקורות מידע שהיו או יקרים מדי, או מסובכים מדי, 
                או גרוע מכל - מונעים מאינטרסים מסחריים. האמנו שחייב להיות פתרון טוב יותר.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-gray-100">דריבית</strong> נולד מתוך הרצון לרכז את המידע 
                הקריטי ביותר שכל אחד צריך לדעת על עולם ההשקעות. בלי להכביד, בלי מילים מפוצצות, ובלי לבזבז זמן על דברים שפחות חשובים בהתחלה.
              </p>
              <p>
                המטרה שלנו היא פשוטה - לתת לכם את הידע הבסיסי החשוב ביותר, שכבר יציב אתכם במקום טוב יותר מ-90% מהאוכלוסייה בישראל מבחינת הבנה פיננסית.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <Target className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">המשימה שלנו</h3>
              <p className="text-gray-600 dark:text-gray-400">
                להנגיש את המידע הפיננסי החשוב ביותר בצורה פשוטה וברורה, כדי שתוכלו להתחיל לקבל החלטות פיננסיות טובות יותר - כבר מחר בבוקר
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <TrendingUp className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">הדרך שלנו</h3>
              <p className="text-gray-600 dark:text-gray-400">
                מתמקדים במידע הקריטי באמת, מסבירים אותו בשפה פשוטה, ומספקים כלים פרקטיים ליישום - הכל בחינם וללא אינטרסים
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <Clock className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">החזון שלנו</h3>
              <p className="text-gray-600 dark:text-gray-400">
                לאפשר לכל אחד להתחיל להשקיע מוקדם ככל האפשר ולנצל את כוחה של ריבית דריבית לבניית עתיד כלכלי טוב יותר
              </p>
            </div>
          </section>

          <section className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              חלק מקהילה גדולה יותר
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                חשוב לנו לציין שיש בישראל מגוון רחב של אתרים, קהילות ויוצרי תוכן מעולים בתחום הפיננסי. 
                אנחנו לא מתיימרים להחליף אותם - להיפך, אנחנו ממליצים להמשיך ולהעמיק את הידע דרכם.
              </p>
              <p>
                הייחודיות של דריבית היא בפישוט והנגשת המידע הבסיסי והקריטי ביותר, 
                שיאפשר לכם להתחיל לפעול כבר עכשיו ולהמשיך להתפתח בקצב שלכם.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              שאלות נפוצות
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  למה המידע באתר מספיק? הרי עולם ההשקעות מורכב הרבה יותר
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  נכון, עולם ההשקעות הוא עמוק ומורכב. אבל האמת המפתיעה היא שרוב האנשים בישראל לא מכירים אפילו את הבסיס - 
                  כמו קרן השתלמות, קופת גמל להשקעה או עקרונות בסיסיים בהשקעות. המידע שאנחנו מספקים יציב אתכם במקום טוב יותר 
                  מרוב האוכלוסייה, ויאפשר לכם להתחיל לקבל החלטות פיננסיות טובות יותר כבר עכשיו.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  חשוב להבין: רוב האנשים לא צריכים להיות מומחי השקעות כדי לקבל החלטות פיננסיות טובות. 
                  הם פשוט צריכים להבין את העקרונות הבסיסיים ולהתחיל לפעול.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  למה בחינם? מה האינטרס שלכם?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  אנחנו מאמינים שידע פיננסי בסיסי הוא זכות בסיסית שצריכה להיות נגישה לכולם. 
                  המטרה שלנו היא להגדיל את האוריינות הפיננסית בישראל ולעזור לאנשים להתחיל לבנות את עתידם הכלכלי מוקדם ככל האפשר.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  חשוב לנו להיות שקופים: כרגע אין לנו שום הכנסות מהאתר ואנחנו לא מחפשים כאלה. 
                  אולי בעתיד זה ישתנה, אבל כרגע המטרה היחידה שלנו היא להנגיש את המידע הבסיסי הזה לכמה שיותר אנשים.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  איפה אפשר ללמוד עוד?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  אחרי שתלמדו את הבסיס כאן, אנחנו ממליצים להמשיך ולהעמיק את הידע דרך קהילות וערוצי תוכן מצוינים שקיימים בישראל. 
                  העיקר להתחיל - וזה בדיוק מה שאנחנו עוזרים לכם לעשות.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  יש המון מקורות מידע מעולים בעברית - מקהילות פייסבוק ועד ערוצי יוטיוב וטלגרם. 
                  אחרי שתבינו את הבסיס, תוכלו להעמיק בתחומים שמעניינים אתכם במיוחד.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  האם המידע באתר מעודכן?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  כן, אנחנו משתדלים לעדכן את המידע באופן שוטף, במיוחד בכל הנוגע לתקרות, מספרים ושינויי רגולציה. 
                  עם זאת, חשוב לזכור שהעקרונות הבסיסיים של השקעות נכונות נשארים יציבים לאורך זמן.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  האם אתם נותנים ייעוץ השקעות?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  לא. אנחנו מספקים מידע כללי בלבד ולא נותנים המלצות ספציפיות להשקעה. 
                  המטרה שלנו היא לתת לכם את הכלים להבין את עולם ההשקעות, אבל ההחלטות הספציפיות צריכות להתקבל על ידכם, 
                  או בהתייעצות עם אנשי מקצוע מורשים.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 