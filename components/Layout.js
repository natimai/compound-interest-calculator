import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Head from 'next/head';
import { useTheme } from '../contexts/ThemeContext';
import { enable } from '../utils/darkreader';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [progress, setProgress] = useState(0);
  
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
        ${isDarkMode ? 'dark' : ''}
      `}
    >
      <Head>
        <script
          src="https://cdn.enable.co.il/licenses/enable-L36349gamb6znuqv-0125-67519/init.js"
          async
        ></script>
        <meta name="theme-color" content={isDarkMode ? '#111827' : '#ffffff'} />
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
      
      <Navbar />
      
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
            className="fixed bottom-8 left-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
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
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

Layout.getInitialProps = async () => {
  return {};
};

export { Layout };
export default Layout;
