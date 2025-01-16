import { Navbar } from './Navbar'
import { Footer } from './Footer'
import Head from 'next/head'
import { useTheme } from '../contexts/ThemeContext'

export const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div dir="rtl" className={`flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200`}>
      <Head>
        <script
          src="https://cdn.enable.co.il/licenses/enable-L36349gamb6znuqv-0125-67519/init.js"
          async
        ></script>
      </Head>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
