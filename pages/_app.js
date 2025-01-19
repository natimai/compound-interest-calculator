import Layout from '../components/Layout';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';
import { CourseProgressProvider } from '../contexts/CourseProgressContext';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider>
        <CourseProgressProvider>
          <DefaultSeo {...SEO} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CourseProgressProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;