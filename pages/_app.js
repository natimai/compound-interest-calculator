import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { Layout } from '../components/Layout';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;