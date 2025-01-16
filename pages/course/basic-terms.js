import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, BookOpen, ChevronDown, TrendingUp, DollarSign, PieChart, Percent, Building, Scale } from 'lucide-react';

export default function BasicTerms() {
  const [openTermId, setOpenTermId] = useState(null);

  const terms = [
    {
      id: 1,
      title: "מניה",
      icon: Building,
      description: "נייר ערך המייצג בעלות בחברה. כשאתה קונה מניה, אתה הופך לשותף בחברה.",
      details: {
        "מה מקבלים?": "חלק יחסי מהבעלות בחברה",
        "זכויות": "השתתפות באסיפות בעלי מניות, קבלת דיבידנדים",
        "סיכון": "גבוה - ערך המניה יכול לעלות או לרדת משמעותית",
        "פוטנציאל": "תשואה גבוהה מעליית ערך ודיבידנדים"
      },
      example: "לדוגמה: מניית אפל (AAPL) נסחרת ב-150$ ומחלקת דיבידנד של 0.85$ לרבעון",
      tips: ["בדקו את הדוחות הכספיים של החברה", "עקבו אחר חדשות ועדכונים", "שימו לב למכפילים ומדדים פיננסיים"]
    },
    {
      id: 2,
      title: "אגרת חוב",
      icon: Scale,
      description: "הלוואה שאתה נותן לחברה או לממשלה בתמורה לריבית קבועה.",
      details: {
        "מה מקבלים?": "ריבית קבועה + החזר הקרן",
        "תקופה": "קצרה (עד שנתיים), בינונית (2-5 שנים), ארוכה (מעל 5 שנים)",
        "סיכון": "נמוך עד בינוני - תלוי בדירוג האשראי",
        "יתרונות": "הכנסה קבועה, סיכון נמוך יחסית"
      },
      example: "לדוגמה: אג״ח ממשלתי ל-10 שנים עם ריבית של 3% שנתית",
      tips: ["בדקו את דירוג האשראי", "שימו לב לתקופת ההשקעה", "השוו תשואות בין אג״חים שונים"]
    },
    {
      id: 3,
      title: "דיבידנד",
      icon: DollarSign,
      description: "חלוקת רווחים של החברה לבעלי המניות שלה.",
      details: {
        "מה זה?": "תשלום כספי שחברה מחלקת לבעלי המניות",
        "תדירות": "בדרך כלל רבעוני או שנתי",
        "יתרונות": "הכנסה שוטפת מההשקעה",
        "שיקולים": "תשואת דיבידנד, יציבות החלוקה, מדיניות חלוקה"
      },
      example: "חברת קוקה קולה מחלקת דיבידנד כבר למעלה מ-50 שנה ברציפות",
      tips: ["בדקו את היסטוריית חלוקת הדיבידנד", "שימו לב ליחס חלוקה", "בחנו את יציבות הרווחים"]
    },
    {
      id: 4,
      title: "מדד",
      icon: TrendingUp,
      description: "סל של ניירות ערך המייצג מגזר או שוק מסוים.",
      details: {
        "סוגי מדדים": "מדדי מניות, אג״ח, סקטוריאליים",
        "שימושים": "מעקב אחר ביצועי השוק, השוואת ביצועים",
        "יתרונות": "פיזור סיכונים, מעקב אחר מגמות",
        "דוגמאות": "תל אביב 35, S&P 500, נאסד״ק"
      },
      example: "מדד תל אביב 35 כולל את 35 החברות הגדולות בבורסה הישראלית",
      tips: ["השוו בין מדדים שונים", "הבינו את הרכב המדד", "בחנו את משקל החברות במדד"]
    },
    {
      id: 5,
      title: "תיק השקעות",
      icon: PieChart,
      description: "אוסף של השקעות שונות המוחזקות יחד.",
      details: {
        "מרכיבים": "מניות, אג״ח, קרנות, מזומן",
        "חשיבות": "פיזור סיכונים, התאמה אישית",
        "ניהול": "אקטיבי או פאסיבי",
        "שיקולים": "גיל, מטרות, סיכון רצוי"
      },
      example: "תיק מאוזן: 60% מניות, 30% אג״ח, 10% מזומן",
      tips: ["פזרו את ההשקעות", "התאימו לפרופיל הסיכון", "בצעו מעקב ואיזון מחדש"]
    },
    {
      id: 6,
      title: "תשואה",
      icon: Percent,
      description: "הרווח או ההפסד על ההשקעה באחוזים.",
      details: {
        "סוגי תשואה": "נומינלית, ריאלית, שנתית",
        "מרכיבים": "שינוי מחיר + דיבידנדים",
        "חישוב": "((מחיר סופי - מחיר התחלתי) / מחיר התחלתי) * 100",
        "שיקולים": "אינפלציה, מיסוי, עמלות"
      },
      example: "השקעה של 1000₪ שהפכה ל-1100₪ = תשואה של 10%",
      tips: ["השוו תשואות מתואמות סיכון", "הביטו על טווח ארוך", "התחשבו בכל ההוצאות"]
    },
    {
      id: 7,
      title: "נזילות",
      icon: DollarSign,
      description: "היכולת למכור נכס במהירות ובמחיר הוגן.",
      details: {
        "חשיבות": "גמישות פיננסית, יכולת מימוש מהירה",
        "דירוג": "גבוהה (מניות מובילות), בינונית, נמוכה (נדל״ן)",
        "שיקולים": "מחזורי מסחר, מרווח קנייה-מכירה",
        "השפעה": "על המחיר ועל היכולת לממש"
      },
      example: "מניות הנסחרות בתל אביב 35 הן בעלות נזילות גבוהה",
      tips: ["בדקו את מחזורי המסחר", "שימו לב למרווחי המסחר", "התחשבו בגודל ההשקעה"]
    },
    {
      id: 8,
      title: "תנודתיות",
      icon: TrendingUp,
      description: "מידת השינוי במחיר נכס לאורך זמן.",
      details: {
        "מדידה": "סטיית תקן, בטא",
        "משמעות": "רמת הסיכון של ההשקעה",
        "השפעות": "חדשות, מגמות שוק, ביקוש והיצע",
        "ניהול": "פיזור, גידור, תזמון"
      },
      example: "מניות טכנולוגיה נוטות להיות יותר תנודתיות ממניות צריכה בסיסית",
      tips: ["התאימו לסבילות הסיכון שלכם", "פזרו בין נכסים שונים", "הבינו את מקורות התנודתיות"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-slate-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-blue-700 dark:text-blue-500 font-medium mb-2 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5" />
              שיעור 1.2
            </p>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              מושגי יסוד בשוק ההון
            </h1>
            <div className="flex items-center gap-6 text-base mb-8">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Clock className="w-5 h-5" />
                <span>משך השיעור: 7 דקות</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="text-gray-700 dark:text-gray-300">
                קושי: קל
              </div>
            </div>

            {/* תקציר השיעור */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-3">
                על השיעור
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                בשיעור זה נלמד את המושגים הבסיסיים ביותר בשוק ההון. הבנת מושגים אלו תהווה את הבסיס להמשך הלמידה שלכם.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-blue-700 dark:text-blue-500 font-medium mb-2">
                  איך ללמוד?
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-700 dark:bg-blue-500 rounded-full"></span>
                    לחצו על כל מושג כדי לקבל הסבר מורחב
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-700 dark:bg-blue-500 rounded-full"></span>
                    קראו את הדוגמאות המעשיות להבנה טובה יותר
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-700 dark:bg-blue-500 rounded-full"></span>
                    שימו לב לטיפים החשובים בכל מושג
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* תוכן השיעור - המושגים */}
        <div className="space-y-4">
          {terms.map((term) => (
            <div 
              key={term.id}
              className="bg-blue-600 dark:bg-blue-700 rounded-2xl shadow-md hover:shadow-lg transition-all hover:bg-blue-700 dark:hover:bg-blue-800"
            >
              <button
                onClick={() => setOpenTermId(openTermId === term.id ? null : term.id)}
                className="w-full p-6 flex items-center justify-between group"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <term.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <h2 className="text-xl font-bold mb-2 text-white">
                      {term.title}
                    </h2>
                    <p className="text-white/90 text-base">
                      {term.description}
                    </p>
                  </div>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white transition-transform duration-200 ${
                    openTermId === term.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openTermId === term.id && (
                <div className="p-6 border-t border-white/10 bg-white dark:bg-gray-800">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {Object.entries(term.details).map(([key, value]) => (
                        <div key={key}>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            {key}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          דוגמה מעשית
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                          {term.example}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          טיפים חשובים
                        </h3>
                        <ul className="space-y-3">
                          {term.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="mt-2 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
                              <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                {tip}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ניווט בין שיעורים */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 mt-8">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <Link 
              href="/course/stock-market-intro"
              className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-5 py-3 rounded-xl transition-all hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">
                <span className="block text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-0.5">הקודם</span>
                מהו שוק ההון?
              </span>
            </Link>
            <Link 
              href="/course/how-to-start"
              className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-5 py-3 rounded-xl transition-all hover:scale-105"
            >
              <span className="text-sm md:text-base font-medium text-right">
                <span className="block text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-0.5">הבא</span>
                איך להתחיל להשקיע
              </span>
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 