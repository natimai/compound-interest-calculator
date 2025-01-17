import Layout from '../components/Layout';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';
import { CourseProgressProvider } from '../contexts/CourseProgressContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CourseProgressProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CourseProgressProvider>
    </ThemeProvider>
  );
}

export default MyApp;