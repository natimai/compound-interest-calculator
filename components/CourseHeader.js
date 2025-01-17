import Layout from './Layout';
import { BookOpen, Clock } from 'lucide-react';

export default function CourseHeader({ title, courseTitle, lessonNumber }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-2">
          <BookOpen className="w-4 h-4" />
          <span>{courseTitle}</span>
          <span className="mx-2">•</span>
          <span>שיעור {lessonNumber}</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          <span>משך השיעור: 5 דקות</span>
        </div>
      </div>
    </div>
  );
} 