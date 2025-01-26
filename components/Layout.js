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
import { Accessibility } from './Accessibility';

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={router.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Accessibility />
      <Footer />
    </div>
  );
}

Layout.getInitialProps = async () => {
  return {};
};
