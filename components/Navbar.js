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

        {/* תפריט מובייל */}
        <div className={`
          md:hidden 
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
            
            {/* כפתור החלפת מצב במובייל */}
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium
                       text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
                       transition-all duration-200"
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
    </nav>
  )
}
