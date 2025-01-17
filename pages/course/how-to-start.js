import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Building2, 
  Wallet, 
  LineChart, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export default function HowToStart() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      icon: Building2,
      title: "בחירת חשבון מסחר",
      description: "פתיחת חשבון בבנק או בברוקר",
      details: {
        "אפשרויות בישראל": [
          "חשבון מסחר בבנק - יתרון: נוחות ואמינות. חיסרון: עמלות גבוהות יחסית",
          "ברוקרים מקומיים - למשל: מיטב דש, פסגות. יתרון: שירות בעברית ותמיכה מקומית",
          "ברוקרים בינלאומיים - למשל: Interactive Brokers. יתרון: עמלות נמוכות וגישה לשווקים רבים"
        ],
        "מה צריך להביא?": [
          "תעודת זהות",
          "הוכחת כתובת מגורים",
          "פרטי חשבון בנק",
          "הצהרת מס (טופס W8 למסחר בארה\"ב)"
        ]
      },
      tips: [
        "השוו עמלות בין הפלטפורמות השונות",
        "בדקו את איכות הממשק והתמיכה",
        "ודאו שיש אפשרות למסחר בשווקים שמעניינים אתכם"
      ]
    },
    {
      id: 2,
      icon: Wallet,
      title: "תקציב והפקדה ראשונית",
      description: "קביעת סכום ההשקעה הראשוני",
      details: {
        "שיקולים חשובים": [
          "השקעה רק בכסף שלא נזדקק לו בטווח הקרוב",
          "מומלץ להתחיל עם סכום שמאפשר פיזור סביר (לפחות 10,000 ש\"ח)",
          "לשמור כרית ביטחון של 3-6 חודשי הוצאות"
        ],
        "אפשרויות הפקדה": [
          "הפקדה חד פעמית",
          "הוראת קבע חודשית",
          "שילוב של השניים"
        ]
      },
      tips: [
        "התחילו עם סכום שנוח לכם להפסיד",
        "הפקדות קבועות עוזרות לבנות משמעת",
        "אל תשכחו להשאיר כסף נזיל לחירום"
      ]
    },
    {
      id: 3,
      icon: LineChart,
      title: "בחירת אפיק השקעה",
      description: "הכרת אפשרויות ההשקעה השונות",
      details: {
        "S&P 500 - מידע כללי": [
          "מדד ה-S&P 500 עוקב אחר 500 החברות הגדולות בארה\"ב",
          "תשואה היסטורית ממוצעת של כ-10% בשנה (לפני אינפלציה)*",
          "אפשרות השקעה דרך תעודת הסל SPY - הנסחרת בבורסה האמריקאית",
          "פיזור בין 500 חברות כמו אפל, מיקרוסופט, אמזון ועוד"
        ],
        "מאפייני השקעה ב-SPY": [
          "נזילות גבוהה - אפשרות קנייה ומכירה בקלות",
          "דמי ניהול של 0.09% בשנה",
          "פיזור רחב בין חברות שונות",
          "מעקב אחר ביצועי המדד",
          "חלוקת דיבידנדים רבעונית"
        ],
        "אפשרויות השקעה נוספות": [
          "תעודות סל על מדדים בישראל (תל אביב 35)",
          "קרנות נאמנות",
          "מניות של חברות בודדות",
          "אגרות חוב ממשלתיות"
        ],
        "נקודות לבחינה": [
          "רמת הסיכון המתאימה עבורך",
          "טווח זמן ההשקעה המתוכנן",
          "מידת המעורבות הרצויה בניהול התיק",
          "חשיפה למטבע חוץ (דולר)"
        ]
      },
      tips: [
        "חשוב להבין את מאפייני המוצר לפני ההשקעה",
        "ניתן לבצע הפקדות קבועות לאורך זמן",
        "כדאי לבחון השקעה לטווח ארוך (5 שנים ומעלה)",
        "חשוב לקחת בחשבון את השפעת שער הדולר",
        "רצוי להתייעץ עם איש מקצוע לפני קבלת החלטות"
      ]
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: "ניהול סיכונים",
      description: "הגנה על ההשקעה שלכם",
      details: {
        "כללי זהב": [
          "לא להשקיע יותר ממה שאפשר להפסיד",
          "פיזור בין מספר השקעות",
          "הימנעות ממינוף (הלוואות להשקעה)",
          "שמירה על אופק השקעה ארוך טווח"
        ],
        "טעויות נפוצות": [
          "ריכוז כל הכסף במניה אחת",
          "מסחר תכוף מדי",
          "רדיפה אחרי טרנדים חמים",
          "קבלת החלטות על בסיס רגשי"
        ]
      },
      tips: [
        "קבעו מראש כמה אתם מוכנים להפסיד",
        "בדקו את התיק שלכם לפחות פעם ברבעון",
        "אל תנסו לתזמן את השוק"
      ]
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
              שיעור 1.3
            </p>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              איך להתחיל להשקיע בשוק ההון?
            </h1>
            <div className="flex items-center gap-6 text-base mb-8">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Clock className="w-5 h-5" />
                <span>משך השיעור: 8 דקות</span>
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
                בשיעור זה נכיר את הצעדים המעשיים להתחלת השקעה בשוק ההון. נסקור אפשרויות שונות הקיימות בשוק הישראלי ונלמד על דרכי השקעה שונות.
              </p>
              
              {/* תיבת מידע על SPY */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <LineChart className="w-5 h-5 text-blue-700 dark:text-blue-500" />
                  <h3 className="font-bold text-blue-800 dark:text-blue-400">
                    מידע על S&P 500
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  נלמד על אחד המדדים המרכזיים בשוק האמריקאי - S&P 500, ועל תעודת הסל SPY 
                  שעוקבת אחריו. נבין את המאפיינים, היתרונות והסיכונים של השקעה במדד זה.
                </p>
              </div>

              {/* הצהרת אי אחריות */}
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                * ביצועי עבר אינם מעידים על ביצועים עתידיים. המידע המוצג אינו מהווה המלצה להשקעה או ייעוץ השקעות.
              </div>
            </div>
          </div>
        </div>

        {/* תוכן השיעור - צעדים */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="bg-blue-600 dark:bg-blue-700 rounded-2xl shadow-md hover:shadow-lg transition-all hover:bg-blue-700 dark:hover:bg-blue-800"
            >
              <button
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className="w-full p-6 flex items-center justify-between group"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <h2 className="text-xl font-bold mb-2 text-white">
                      {step.title}
                    </h2>
                    <p className="text-white/90 text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white transition-transform duration-200 ${
                    activeStep === step.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {activeStep === step.id && (
                <div className="p-6 border-t border-white/10 bg-white dark:bg-gray-800">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {Object.entries(step.details).map(([key, value]) => (
                        <div key={key}>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            {key}
                          </h3>
                          <ul className="space-y-2">
                            {value.map((item, index) => (
                              <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                <span className="mt-2 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
                                <span className="text-base leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          טיפים חשובים
                        </h3>
                        <ul className="space-y-3">
                          {step.tips.map((tip, index) => (
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

        {/* Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 mt-8">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <Link 
              href="/course/basic-terms"
              className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-5 py-3 rounded-xl transition-all hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">
                <span className="block text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-0.5">הקודם</span>
                מושגי יסוד
              </span>
            </Link>
            <Link 
              href="/course/investment-types"
              className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-5 py-3 rounded-xl transition-all hover:scale-105"
            >
              <span className="text-sm md:text-base font-medium text-right">
                <span className="block text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-0.5">הבא</span>
                סוגי השקעות
              </span>
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 