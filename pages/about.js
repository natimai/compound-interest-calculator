import { NextSeo } from 'next-seo';
import { Code2, Heart, Brain, Users, AlertTriangle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// קומפוננטה של שאלה ותשובה
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-right"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 pr-4 text-gray-600 dark:text-gray-300">
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
      answer: "כן, כל המחשבונים באתר זמינים לשימוש בחינם וללא הגבלה."
    },
    {
      question: "האם אתם שומרים את המידע שאני מזין במחשבונים?",
      answer: "לא, איננו שומרים או מתעדים את הנתונים שמוזנים במחשבונים. כל החישובים מתבצעים בדפדפן שלך בלבד."
    },
    {
      question: "האם המחשבונים מדויקים?",
      answer: "המחשבונים שלנו מבוססים על נוסחאות פיננסיות מקובלות, אך חשוב לזכור שהתוצאות הן הערכות בלבד ועשויות להשתנות בהתאם לתנאי השוק ומשתנים נוספים."
    },
    {
      question: "איך אני יכול לדעת איזה מחשבון מתאים לי?",
      answer: "כל מחשבון מלווה בהסבר מפורט על השימוש שלו. אם אתם עדיין מתלבטים, אתם מוזמנים ליצור איתנו קשר ונשמח לכוון אתכם."
    },
    {
      question: "האם אתם מספקים ייעוץ פיננסי?",
      answer: "לא, אנחנו מספקים כלים לחישוב והערכה בלבד. לקבלת ייעוץ פיננסי מקצועי, אנו ממליצים לפנות ליועץ פיננסי מוסמך."
    },
    {
      question: "איך אני יכול לדווח על באג או להציע שיפור?",
      answer: "נשמח לקבל משוב! אתם מוזמנים ליצור איתנו קשר במייל netanel18999@gmail.com"
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
          <h1 className="text-4xl font-bold mb-6">
            הסיפור מאחורי דריבית
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            מפגש מושלם בין טכנולוגיה, פיננסים וחינוך
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Story */}
          <section className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              <p className="text-lg mb-6">
                היי, אני נתנאל מימון, יזם ובעל תואר ראשון בשיווק. החיבור שלי לעולם הפיננסים והטכנולוגיה הוביל אותי ליצירת דריבית - פרויקט שנולד מתוך תשוקה להנגשת ידע פיננסי לכל אחד ואחת.
              </p>
              <p className="text-lg mb-6">
                במהלך השנים זיהיתי פער משמעותי בהשכלה הפיננסית של רבים, לצד מחסור במחשבונים פיננסיים שבאמת מותאמים לצרכי המשתמשים. ערב אחד, מתוך סקרנות ורצון לשינוי, התחלתי לעבוד עם Claude (מודל AI מתקדם) ויצרתי את האתר הזה - בלי ידע מוקדם בתכנות.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              הערכים שמנחים אותנו
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600 ml-3" />
                  <h3 className="text-xl font-semibold">הנגשת ידע</h3>
                </div>
                <p>אנחנו מאמינים שידע פיננסי צריך להיות נגיש לכולם, ללא תלות ברקע או בהשכלה</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Code2 className="w-6 h-6 text-green-600 ml-3" />
                  <h3 className="text-xl font-semibold">חדשנות טכנולוגית</h3>
                </div>
                <p>שימוש בטכנולוגיות מתקדמות כדי ליצור כלים פשוטים ויעילים</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-purple-600 ml-3" />
                  <h3 className="text-xl font-semibold">קהילתיות</h3>
                </div>
                <p>יצירת קהילה של אנשים המעוניינים להרחיב את הידע הפיננסי שלהם</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
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
            <div className="bg-yellow-50 dark:bg-gray-800 rounded-xl p-6 border border-yellow-200 dark:border-gray-700">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 ml-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">הבהרה חשובה</h3>
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
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
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
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
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