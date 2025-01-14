import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
      category: 'חישובים פיננסיים'
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
      category: 'חישובים פיננסיים'
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

      <div className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">מדריכים פיננסיים</h1>
            <p className="text-xl text-gray-600">מדריכים מקיפים להבנת עולם ההשקעות והחיסכון</p>
          </header>

          {categories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-r-4 border-blue-500 pr-4">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guides
                  .filter(guide => guide.category === category)
                  .map(guide => (
                    <div
                      key={guide.id}
                      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${
                        guide.comingSoon ? 'opacity-70' : ''
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{guide.icon}</span>
                          <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{guide.description}</p>
                        {guide.sections.length > 0 && (
                          <div className="space-y-2">
                            {guide.sections.map((section, index) => (
                              <div key={index} className="text-sm">
                                <h4 className="font-semibold text-gray-700">{section.title}</h4>
                                <p className="text-gray-500">{section.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {!guide.comingSoon ? (
                          <Link 
                            href={`/guides/${guide.id}`}
                            className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                          >
                            למדריך המלא
                          </Link>
                        ) : (
                          <div className="mt-4 text-center text-gray-500 border border-gray-300 rounded-lg py-2">
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