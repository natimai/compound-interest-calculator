import { useTheme } from '../contexts/ThemeContext'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useEffect } from 'react'
import { enable } from '../utils/darkreader'
import dynamic from 'next/dynamic'
import Head from 'next/head'

// יצירת גרסה דינמית של הקומפוננטה עם האנימציות
const AnimatedLayout = dynamic(() => import('./AnimatedLayout'), {
  ssr: false
});

export const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      enable(isDarkMode).catch(console.error);
    }
  }, [isDarkMode]);

  return (
    <div 
      className={isDarkMode ? 'dark' : ''}
      style={{
        colorScheme: isDarkMode ? 'dark' : 'light'
      }}
    >
      <Head>
        <script
          src="https://cdn.enable.co.il/licenses/enable-L36349gamb6znuqv-0125-67519/init.js"
          async
        ></script>
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
        <Footer />
      </div>
    </div>
  )
}
