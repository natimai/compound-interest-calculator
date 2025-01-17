import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Head from 'next/head';
import { useTheme } from '../contexts/ThemeContext';
import { enable } from '../utils/darkreader';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Moon, Sun, Menu, Calculator, BookOpen, GraduationCap, Info, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Layout({ children }) {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark');
  };

  // מעקב אחרי גלילה
  useEffect(() => {
    const updateScroll = () => {
      // חישוב אחוז הגלילה
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      
      setProgress(isNaN(progress) ? 0 : progress);
      setShowScrollTop(window.pageYOffset > 300);
    };

    // עדכון ראשוני
    updateScroll();

    // הוספת מאזין לאירוע גלילה
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      enable(isDarkMode).catch(console.error);
    }
  }, [isDarkMode]);

  // טיפול במעברים בין דפים
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => {
      setIsLoading(false);
      setProgress(0);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <div 
      dir="rtl" 
      className={`
        flex flex-col min-h-screen
        bg-gradient-to-b from-white to-gray-50
        dark:from-gray-900 dark:to-gray-800
        transition-all duration-200 ease-in-out
        ${darkMode ? 'dark' : ''}
      `}
    >
      <Head>
        <script
          src="https://cdn.enable.co.il/licenses/enable-L36349gamb6znuqv-0125-67519/init.js"
          async
        ></script>
        <meta name="theme-color" content={darkMode ? '#111827' : '#ffffff'} />
        <title>קורס שוק ההון למתחילים</title>
        <meta name="description" content="לומדים להשקיע בצורה חכמה ואחראית" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Progress Bar - מחוץ לדיב הראשי */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-[100]">
        <motion.div 
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Loading Bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-blue-300 z-[101]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 pointer-events-none" />
      
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary bg-clip-text text-transparent">
              דריבית
            </Link>
            
            {/* תפריט ניווט */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link 
                href="/calculators"
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                מחשבונים
              </Link>
              <Link 
                href="/guides"
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                מדריכים
              </Link>
              <Link 
                href="/investment-products"
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
              >
                <DollarSign className="w-4 h-4" />
                מוצרי השקעה
              </Link>
              <Link 
                href="/course"
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                קורסים
              </Link>
              <Link 
                href="/about"
                className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                אודות
              </Link>
            </div>

            {/* כפתור תפריט נייד */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </nav>
      
      {/* תפריט מובייל */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* רקע מטושטש */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-16 inset-x-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 z-50 md:hidden"
            >
              <div className="p-4 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <Link 
                  href="/calculators"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calculator className="w-5 h-5" />
                  מחשבונים
                </Link>
                <Link 
                  href="/guides"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BookOpen className="w-5 h-5" />
                  מדריכים
                </Link>
                <Link 
                  href="/investment-products"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <DollarSign className="w-5 h-5" />
                  מוצרי השקעה
                </Link>
                <Link 
                  href="/course"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="w-5 h-5" />
                  קורסים
                </Link>
                <Link 
                  href="/about"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Info className="w-5 h-5" />
                  אודות
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        <motion.main
          className="flex-grow relative z-10"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          key={router.asPath}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>
      
      <Footer />

      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Scroll to Top Button - מעודכן */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-20 md:bottom-8 right-4 md:right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50 backdrop-blur-sm bg-opacity-90"
            aria-label="חזרה למעלה"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7-7m0 0l-7 7m7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-blue-600 dark:text-blue-400">Invest</span>
            <span className="text-gray-600 dark:text-gray-300">Academy</span>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>
    </div>
  );
}

Layout.getInitialProps = async () => {
  return {};
};
