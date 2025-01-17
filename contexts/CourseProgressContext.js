import { createContext, useContext, useState, useEffect } from 'react';

const CourseProgressContext = createContext();

export function CourseProgressProvider({ children }) {
  const [progress, setProgress] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // טעינת ההתקדמות בטעינה ראשונית
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('courseProgress');
      if (savedProgress) {
        try {
          setProgress(JSON.parse(savedProgress));
        } catch (error) {
          console.error('Error parsing progress:', error);
          localStorage.removeItem('courseProgress');
        }
      }
      setIsLoading(false);
    }
  }, []);

  const markAsCompleted = (lessonId) => {
    if (!lessonId) return;
    
    setProgress(prevProgress => {
      const newProgress = {
        ...prevProgress,
        [lessonId]: true
      };
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('courseProgress', JSON.stringify(newProgress));
      }
      
      return newProgress;
    });
  };

  const resetProgress = () => {
    setProgress({});
    if (typeof window !== 'undefined') {
      localStorage.removeItem('courseProgress');
    }
  };

  if (isLoading) {
    return null; // או תצוגת טעינה
  }

  return (
    <CourseProgressContext.Provider value={{ progress, markAsCompleted, resetProgress }}>
      {children}
    </CourseProgressContext.Provider>
  );
}

export function useCourseProgress() {
  const context = useContext(CourseProgressContext);
  if (!context) {
    throw new Error('useCourseProgress must be used within a CourseProgressProvider');
  }
  return context;
} 