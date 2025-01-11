import Head from 'next/head'
import { Calculator } from '../components/Calculator'
import { Guide } from '../components/Guide'

export default function Home() {
  const title = 'מחשבון ריבית דריבית | חשב את הרווחים העתידיים שלך'
  const description = 'מחשבון ריבית דריבית מתקדם לחישוב השקעות עתידיות.'

  return (
    <div dir="rtl">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="מחשבון ריבית דריבית, חישוב ריבית דריבית" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-[#eef2f3] to-[#8e9eab] p-5">
        <Calculator />
        <Guide />
      </main>
    </div>
  )
}