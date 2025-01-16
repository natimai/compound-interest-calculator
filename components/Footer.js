import { useTheme } from '../contexts/ThemeContext';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              דריבית
            </div>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              DeRibit
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-md">
            מחשבונים פיננסיים מתקדמים לקבלת החלטות חכמות יותר
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              קישורים מהירים
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  מחשבונים
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  מדריכים
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              צור קשר
            </h3>
            <a 
              href="mailto:netanel18999@gmail.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              netanel18999@gmail.com
            </a>
          </div>

          {/* Social Links - אם יהיו בעתיד */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              עקבו אחרינו
            </h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              בקרוב...
            </div>
          </div>
        </div>

        {/* Legal Disclaimer - עיצוב מחדש בצבעי אזהרה */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6 shadow-md">
            <h4 className="text-base font-bold text-red-600 dark:text-red-400 mb-4 text-center flex items-center justify-center gap-2">
              <span className="text-xl">⚠️</span>
              הצהרה משפטית חשובה
              <span className="text-xl">⚠️</span>
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-red-700 dark:text-red-300 text-center leading-relaxed">
                המידע המוצג באתר זה הינו למטרות אינפורמטיביות בלבד ואינו מהווה המלצה, ייעוץ פיננסי, 
                ייעוץ השקעות, שיווק השקעות או חוות דעת מקצועית. 
                <span className="font-bold text-red-800 dark:text-red-400 block mt-1">
                  אין להסתמך על המידע לצורך קבלת החלטות פיננסיות או השקעה ללא התייעצות עם איש מקצוע מוסמך.
                </span>
              </p>
              <p className="text-sm text-red-700 dark:text-red-300 text-center leading-relaxed">
                השימוש במחשבונים ובכלים באתר הינו 
                <span className="font-bold text-red-800 dark:text-red-400"> באחריות המשתמש בלבד</span>. 
                התוצאות המתקבלות הן הערכות בלבד ועשויות להשתנות בהתאם לתנאי השוק ומשתנים נוספים.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} דריבית. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};