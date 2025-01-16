import { useTheme } from '../contexts/ThemeContext';

export const Footer = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="space-y-8">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">דריבית</span>
                <span className="text-lg text-gray-300 dark:text-gray-600">|</span>
                <span className="text-xl font-bold text-blue-500 dark:text-blue-300">DeRibit</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} דריבית | DeRibit. כל הזכויות שמורות
              </p>
            </div>
            
            {/* Credits */}
            <div className="flex items-center justify-center space-x-2 space-x-reverse">
              <span className="text-sm text-gray-500 dark:text-gray-400">נבנה על ידי</span>
              <a 
                href="https://www.linkedin.com/in/netanel-maimon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
              >
                נתי מימון
              </a>
            </div>

            {/* Legal Disclaimer - גרסה קומפקטית */}
            <div className="max-w-3xl mx-auto">
              <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
                  הצהרת אחריות משפטית
                </h3>
                
                <div className="space-y-4">
                  {/* הצהרה כללית */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                    האתר "דריבית" מספק מידע כללי בלבד. השימוש באתר ובתכניו כפוף לתנאים הבאים:
                  </p>

                  {/* פירוט התנאים בפורמט קומפקטי */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {[
                      { title: 'אי קבלת אחריות', content: 'המידע מוצג "כפי שהוא" למטרות אינפורמטיביות בלבד.' },
                      { title: 'לא ייעוץ מקצועי', content: 'התוכן אינו מהווה תחליף לייעוץ מקצועי מכל סוג.' },
                      { title: 'החלטות אישיות', content: 'כל החלטה המתבצעת על סמך המידע הינה באחריותך.' },
                      { title: 'דיוק המידע', content: 'איננו מתחייבים שהמידע מלא, מדויק, או מעודכן.' }
                    ].map((item, index) => (
                      <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800/80 rounded-lg">
                        <p><span className="font-semibold">{index + 1}. {item.title}:</span> {item.content}</p>
                      </div>
                    ))}
                  </div>

                  {/* אזהרה מודגשת - קומפקטית */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-100 dark:border-yellow-800/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 text-center">
                      יש להתייעץ עם אנשי מקצוע מוסמכים לפני קבלת החלטות פיננסיות או משפטיות.
                    </p>
                  </div>

                  {/* הערת שוליים */}
                  <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                    * השימוש באתר מהווה הסכמה לתנאים אלה.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};