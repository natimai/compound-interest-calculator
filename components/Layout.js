import { Navbar } from './Navbar'
import { Footer } from './Footer'
import Head from 'next/head'

export const Layout = ({ children }) => {
  return (
    <div dir="rtl" className="flex flex-col min-h-screen">
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
