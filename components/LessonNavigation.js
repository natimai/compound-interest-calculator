import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function LessonNavigation({ currentLesson }) {
  const lessons = [
    {
      id: 1,
      title: "מבוא להשקעות - למה בכלל להשקיע?",
      path: "/course/stock-market/lesson1"
    },
    {
      id: 2,
      title: "הכנה להשקעה ראשונה",
      path: "/course/stock-market/lesson2"
    }
  ];

  const currentIndex = lessons.findIndex(lesson => lesson.id === currentLesson);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 mt-8">
      <div className="flex justify-between items-center max-w-3xl mx-auto">
        {prevLesson ? (
          <Link 
            href={prevLesson.path}
            className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-5 py-3 rounded-xl transition-all hover:scale-105"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="text-sm md:text-base font-medium">
              <span className="block text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-0.5">הקודם</span>
              {prevLesson.title}
            </span>
          </Link>
        ) : <div />}
        
        {nextLesson ? (
          <Link 
            href={nextLesson.path}
            className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-5 py-3 rounded-xl transition-all hover:scale-105"
          >
            <span className="text-sm md:text-base font-medium text-right">
              <span className="block text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-0.5">הבא</span>
              {nextLesson.title}
            </span>
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
} 