import { SpeedInsights } from '@vercel/speed-insights/next'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}