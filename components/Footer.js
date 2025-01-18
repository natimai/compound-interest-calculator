import { useTheme } from '../contexts/ThemeContext';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Calculator, BookOpen, Home, Mail, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              <Home className="w-5 h-5 text-blue-400" />
              דריבית
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              כלים פיננסיים חינמיים לניהול כספים חכם
            </p>
            <div className="relative">
              <div className="absolute -top-2 -right-2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  חדש! 🎉
                </span>
              </div>
              <Link 
                href="/course"
                className="group block p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      קורס שוק ההון למתחילים
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      למד איך להשקיע נכון בבורסה
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              <Calculator className="w-5 h-5 text-green-400" />
              מחשבונים
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/calculators/compound-interest" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  מחשבון ריבית דריבית
                </Link>
              </li>
              <li>
                <Link href="/calculators/mortgage" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  מחשבון משכנתא
                </Link>
              </li>
              <li>
                <Link href="/calculators/salary" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  מחשבון שכר
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              <BookOpen className="w-5 h-5 text-yellow-400" />
              מדריכים
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/guides/compound-interest" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  מדריך ריבית דריבית
                </Link>
              </li>
              <li>
                <Link href="/guides/mortgage" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  מדריך משכנתאות
                </Link>
              </li>
              <li>
                <Link href="/guides/salary" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  מדריך חישובי שכר
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              <Mail className="w-5 h-5 text-purple-400" />
              צור קשר
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="mailto:contact@deribit.co.il" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  contact@deribit.co.il
                </a>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} דריבית. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                מדיניות פרטיות
              </Link>
              <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                תנאי שימוש
              </Link>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-red-600 dark:text-red-400 text-sm font-medium bg-red-50 dark:bg-red-900/10 py-2 px-4 rounded-lg inline-block">
              התוכן באתר הינו מידע כללי בלבד ואינו מהווה המלצה פיננסית. יש להתייעץ עם אנשי מקצוע לפני ביצוע כל פעולה!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};