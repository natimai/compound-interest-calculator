import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Layout } from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </Layout>
  )
}