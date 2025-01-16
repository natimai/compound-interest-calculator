import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  Moon, 
  Sun, 
  Home, 
  Calculator, 
  BookOpen, 
  Info, 
  Menu, 
  X,
  TrendingUp
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme();
  const router = useRouter();

  // מעקב אחר גלילה
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    // Prevent scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'דף הבית', href: '/', icon: Home },
    { name: 'מחשבונים פיננסיים', href: '/calculators', icon: Calculator },
    { name: 'מוצרי השקעה', href: '/investment-products', icon: TrendingUp },
    { name: 'מדריכים', href: '/guides', icon: BookOpen },
    { name: 'אודות', href: '/about', icon: Info },
  ]

  const isActive = (path) => router.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' 
        : 'bg-white dark:bg-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* כפתור המבורגר למובייל */}
          <div className="absolute right-0 inset-y-0 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* לוגו */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Link 
              href="/" 
              className="group flex items-center gap-2 text-2xl font-bold transition-transform hover:scale-105"
            >
              <span className="text-blue-600 dark:text-blue-400">דריבית</span>
              <span className="text-gray-400 dark:text-gray-500">|</span>
              <span className="text-blue-500 dark:text-blue-300 text-xl">DeRibit</span>
            </Link>
          </div>

          {/* תפריט דסקטופ */}
          <div className="hidden md:flex md:items-center md:space-x-1 absolute left-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 
                       hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-all duration-200"
              aria-label="החלף מצב תצוגה"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Updated with slide-down animation */}
        <div 
          className={`
            md:hidden fixed inset-0 bg-gray-800/50 backdrop-blur-sm z-40
            transition-opacity duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className={`
              fixed top-0 right-0 w-full bg-white dark:bg-gray-900 shadow-xl z-50
              transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
            `}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                         transition-transform duration-200 hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile menu content with fade-in animation */}
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium
                    transition-all duration-200 transform
                    ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
                    ${isActive(item.href)
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }
                  `}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
              
              {/* Theme toggle with animation */}
              <button
                onClick={() => {
                  toggleDarkMode();
                  setIsMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium
                  text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
                  transition-all duration-200 transform
                  ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
                `}
                style={{ transitionDelay: `${navigation.length * 50}ms` }}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>מצב בהיר</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>מצב כהה</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
