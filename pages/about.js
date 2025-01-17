import { NextSeo } from 'next-seo';
import { Code2, Heart, Brain, Users, AlertTriangle, ChevronDown, Lightbulb, Shield, Target } from 'lucide-react';
import { useState } from 'react';

// קומפוננטה של שאלה ותשובה
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className={`flex justify-between items-center w-full p-4 text-right rounded-xl transition-all duration-200
          ${isOpen 
            ? 'bg-blue-50 dark:bg-blue-900/30' 
            : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-lg font-medium text-right flex items-center gap-3
          text-gray-900 dark:text-white`}>
          <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm
            ${isOpen 
              ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}>
            {isOpen ? '-' : '+'}
          </span>
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen 
              ? 'text-blue-600 dark:text-white transform rotate-180' 
              : 'text-gray-400 dark:text-gray-600'
            } ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 p-4 pr-16 text-gray-600 dark:text-gray-300 leading-relaxed
          bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/30
          animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function AboutPage() {
  const faqItems = [
    {
      question: "האם השימוש במחשבונים הוא בחינם?",
      answer: "כן! כל המחשבונים והתכנים באתר זמינים לשימוש בחינם וללא הגבלה. אנחנו מאמינים שידע פיננסי צריך להיות נגיש לכולם."
    },
    {
      question: "האם אתם שומרים את המידע שאני מזין במחשבונים?",
      answer: "לא. הפרטיות שלכם חשובה לנו. כל החישובים מתבצעים בדפדפן שלכם בלבד ואיננו שומרים או מתעדים שום מידע אישי."
    },
    {
      question: "האם המחשבונים מדויקים?",
      answer: "המחשבונים שלנו מבוססים על נוסחאות פיננסיות מקובלות ומדויקות. עם זאת, חשוב לזכור שהתוצאות הן הערכות בלבד ועשויות להשתנות בהתאם לתנאי השוק, אינפלציה, ומשתנים נוספים. אנו ממליצים להשתמש בהם ככלי עזר לקבלת החלטות ולא כמקור יחיד."
    },
    {
      question: "איך אני יכול לדעת איזה מחשבון מתאים לי?",
      answer: "כל מחשבון באתר מלווה בהסבר מפורט על השימוש שלו והמקרים בהם כדאי להשתמש בו. בנוסף, יש לנו מדריכים וטיפים שיעזרו לכם להבין איזה כלי הכי מתאים למטרות שלכם. אם אתם עדיין מתלבטים, אתם מוזמנים ליצור איתנו קשר ונשמח לכוון אתכם."
    },
    {
      question: "האם אתם מספקים ייעוץ פיננסי?",
      answer: "לא. אנחנו מספקים כלים חינוכיים וכלי עזר לחישוב והערכה בלבד. המידע באתר נועד להעשרה ולימוד כללי ואינו מהווה תחליף לייעוץ פיננסי, משפטי או מקצועי אחר. לקבלת ייעוץ מותאם אישית, אנו ממליצים להתייעץ עם אנשי מקצוע מוסמכים."
    },
    {
      question: "איך אני יכול לדווח על באג או להציע שיפור?",
      answer: "נשמח לקבל משוב! אתם מוזמנים ליצור איתנו קשר במייל netanel18999@gmail.com. המשוב שלכם חשוב לנו ועוזר לנו להשתפר ולהתאים את הכלים לצרכים שלכם."
    }
  ];

  return (
    <>
      <NextSeo
        title="אודות דריבית - הסיפור שלנו"
        description="הכירו את הסיפור מאחורי דריבית - פלטפורמה שנוצרה מתוך תשוקה להנגשת ידע פיננסי לכולם"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            הסיפור מאחורי דריבית
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            מפגש מושלם בין טכנולוגיה, פיננסים וחינוך
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Story */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <p className="text-lg mb-6">
                היי, אני נתנאל מימון, יזם ובעל תואר ראשון בשיווק. החיבור שלי לעולם הפיננסים והטכנולוגיה הוביל אותי ליצירת דריבית - פרויקט שנולד מתוך תשוקה להנגשת ידע פיננסי לכל אחד ואחת.
              </p>
              <p className="text-lg mb-6">
                במהלך השנים זיהיתי פער משמעותי בהשכלה הפיננסית של רבים, לצד מחסור במחשבונים פיננסיים שבאמת מותאמים לצרכי המשתמשים. ערב אחד, מתוך סקרנות ורצון לשינוי, התחלתי לעבוד עם Claude (מודל AI מתקדם) ויצרתי את האתר הזה - בלי ידע מוקדם בתכנות.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-8">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6" />
                  החזון שלנו
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  אנחנו מאמינים שכל אחד צריך להבין איך לנהל את הכסף שלו בצורה חכמה. המטרה שלנו היא להנגיש ידע פיננסי באמצעות כלים פשוטים, ברורים ונוחים לשימוש.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              הערכים שמנחים אותנו
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600 ml-3" />
                  <h3 className="text-xl font-semibold">הנגשת ידע</h3>
                </div>
                <p>אנחנו מאמינים שידע פיננסי צריך להיות נגיש לכולם, ללא תלות ברקע או בהשכלה</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-colors">
                <div className="flex items-center mb-4">
                  <Code2 className="w-6 h-6 text-green-600 ml-3" />
                  <h3 className="text-xl font-semibold">חדשנות טכנולוגית</h3>
                </div>
                <p>שימוש בטכנולוגיות מתקדמות כדי ליצור כלים פשוטים ויעילים</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-purple-600 ml-3" />
                  <h3 className="text-xl font-semibold">קהילתיות</h3>
                </div>
                <p>יצירת קהילה של אנשים המעוניינים להרחיב את הידע הפיננסי שלהם</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-colors">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-red-600 ml-3" />
                  <h3 className="text-xl font-semibold">שקיפות</h3>
                </div>
                <p>מחויבות לשקיפות מלאה ומתן מידע אמין ומדויק למשתמשים שלנו</p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-16">
            <div className="bg-yellow-50 dark:bg-gray-800 rounded-xl p-8 border border-yellow-200 dark:border-gray-700">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 ml-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">הבהרה חשובה</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    חשוב לנו להדגיש שהמידע והכלים באתר נועדו להעשרת הידע בלבד ואינם מהווים תחליף לייעוץ פיננסי מקצועי. אנו ממליצים להתייעץ עם אנשי מקצוע מוסמכים לפני קבלת החלטות פיננסיות משמעותיות.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                שאלות נפוצות
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 
                border border-gray-100 dark:border-gray-700">
                {faqItems.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                רוצים לדבר?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                יש לכם שאלות, הצעות או רעיונות לשיפור? נשמח לשמוע מכם
              </p>
              <a 
                href="mailto:netanel18999@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                צרו קשר
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 