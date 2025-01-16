import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './PageTransition';

const AnimatedLayout = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <main>
          {children}
        </main>
      </PageTransition>
    </AnimatePresence>
  );
};

export default AnimatedLayout; 