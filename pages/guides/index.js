import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Book, ArrowLeft, Sparkles, Target, Shield } from 'lucide-react';

const GuidesPage = () => {
  const guides = [
    {
      id: 'compound-interest',
      title: 'חישוב ריבית דריבית',
      description: 'מדריך מקיף להבנת חישובי ריבית דריבית, השפעת דמי ניהול ומס על התשואה',
      icon: '📈',
      sections: [
        {
          title: 'מה זו ריבית דריבית?',
          content: 'הסבר על העיקרון של ריבית דריבית וכיצד היא מביאה לגידול מואץ של הכסף לאורך זמן'
        },
        {
          title: 'השפעת דמי ניהול',
          content: 'ניתוח ההשפעה של דמי ניהול על התשואה המצטברת לאורך זמן'
        },
        {
          title: 'חישוב נכון של תשואה',
          content: 'כיצד לחשב תשואה בצורה נכונה תוך התחשבות בכל הפרמטרים'
        }
      ],
      category: 'חישובים פיננסיים',
      href: '/guides/compound-interest'
    },
    {
      id: 'mortgage-calculator',
      title: 'חישוב משכנתא',
      description: 'מדריך מקיף להבנת חישובי משכנתא, השוואת מסלולים, והשפעת הריבית על ההחזר החודשי',
      icon: '🏠',
      sections: [
        {
          title: 'סוגי מסלולי משכנתא',
          content: 'הסבר על המסלולים השונים - פריים, קבועה, צמודה ומשתנה'
        },
        {
          title: 'חישוב החזר חודשי',
          content: 'איך מחשבים את ההחזר החודשי והגורמים המשפיעים עליו'
        },
        {
          title: 'בניית תמהיל נכון',
          content: 'טיפים לבניית תמהיל משכנתא מאוזן ומותאם אישית'
        }
      ],
      category: 'חישובים פיננסיים',
      href: '/guides/mortgage-calculator'
    },
    {
      id: 'balanced-portfolio',
      title: 'בניית תיק השקעות מאוזן',
      description: 'מדריך מקיף לבניית תיק השקעות מאוזן - עקרונות הפיזור, ניהול סיכונים, והתאמה אישית של התיק',
      icon: '💼',
      sections: [
        {
          title: 'עקרונות היסוד',
          content: 'הבנת מושגי היסוד בבניית תיק השקעות - סיכון, תשואה ופיזור'
        },
        {
          title: 'סוגי נכסים והתאמתם',
          content: 'סקירת סוגי הנכסים השונים והתאמתם לפרופילי סיכון שונים'
        },
        {
          title: 'אסטרטגיות פיזור',
          content: 'שיטות מתקדמות לפיזור השקעות וניהול סיכונים בתיק'
        },
        {
          title: 'ניהול ומעקב',
          content: 'כלים ושיטות למעקב אחר ביצועי התיק ועדכונו לאורך זמן'
        }
      ],
      category: 'השקעות',
      href: '/guides/balanced-portfolio'
    },
    {
      id: 'investment-basics',
      title: 'יסודות ההשקעות',
      description: 'בקרוב - מדריך בסיסי להשקעות, סוגי נכסים ואסטרטגיות השקעה',
      icon: '🎯',
      sections: [],
      category: 'השקעות',
      comingSoon: true
    },
    {
      id: 'tax-planning',
      title: 'תכנון מס',
      description: 'בקרוב - מדריך להבנת היבטי המס בהשקעות וחיסכון',
      icon: '📊',
      sections: [],
      category: 'מיסוי',
      comingSoon: true
    }
  ];

  const categories = [...new Set(guides.map(guide => guide.category))];

  return (
    <>
      <Head>
        <title>מדריכים פיננסיים | DeRibit</title>
        <meta name="description" content="מדריכים מקיפים להבנת עולם ההשקעות והחיסכון - ריבית דריבית, השקעות, תכנון מס ועוד" />
        <meta name="keywords" content="מדריכים פיננסיים, ריבית דריבית, משכנתא, השקעות, תכנון מס, חיסכון" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              מדריכים פיננסיים
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              מדריכים מקיפים להבנת עולם ההשקעות והחיסכון
            </p>
          </header>

          {categories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Book className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides
                  .filter(guide => guide.category === category)
                  .map(guide => (
                    <div
                      key={guide.id}
                      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                        border border-gray-100 dark:border-gray-700 transition-all duration-300 
                        hover:border-blue-500 dark:hover:border-blue-500 
                        ${guide.comingSoon ? 'opacity-70' : ''}`}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl mr-3">
                            <span className="text-2xl">{guide.icon}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{guide.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{guide.description}</p>
                        {guide.sections.length > 0 && (
                          <div className="space-y-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl mb-4">
                            {guide.sections.map((section, index) => (
                              <div key={index} className="text-sm">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{section.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {!guide.comingSoon ? (
                          <Link 
                            href={guide.href}
                            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 
                              text-base font-medium rounded-xl text-white 
                              bg-gradient-to-r from-blue-600 to-purple-600 
                              hover:from-blue-700 hover:to-purple-700 
                              transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            למדריך המלא
                            <ArrowLeft className="w-5 h-5" />
                          </Link>
                        ) : (
                          <div className="mt-4 text-center text-gray-500 dark:text-gray-400 
                            border border-gray-300 dark:border-gray-600 rounded-xl py-3 
                            flex items-center justify-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            בקרוב...
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GuidesPage;