import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl">
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}