import { BookOpen, Clock, Target, CheckCircle, Lock, Play, Award, Brain, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCourseProgress } from '../../contexts/CourseProgressContext';

export default function CoursePage() {
  const { progress, resetProgress } = useCourseProgress();

  // חישוב אחוז ההתקדמות הכללי
  const calculateTotalProgress = () => {
    if (!progress) return 0;
    const totalItems = courseContent.reduce((acc, section) => acc + section.lessons.length, 0);
    const completedItems = Object.values(progress).filter(val => val).length;
    return Math.round((completedItems / totalItems) * 100);
  };

  const courseContent = [
    {
      id: 'intro',
      title: 'מבוא לשוק ההון',
      lessons: [
        {
          id: 'lesson1',
          title: 'מהו שוק ההון?',
          duration: '15 דקות',
          path: '/course/stock-market/lesson1'
        },
        {
          id: 'lesson2',
          title: 'מושגי יסוד',
          duration: '20 דקות',
          path: '/course/stock-market/lesson2'
        },
        {
          id: 'lesson3',
          title: 'סוגי ניירות ערך',
          duration: '25 דקות',
          path: '/course/stock-market/lesson3'
        },
        {
          id: 'quiz1',
          title: 'בוחן - מבוא ומושגים',
          type: 'quiz',
          path: '/course/stock-market/quiz1'
        }
      ]
    },
    {
      id: 'analysis',
      title: 'ניתוח והערכת שווי',
      lessons: [
        {
          id: 'lesson4',
          title: 'ניתוח בסיסי',
          duration: '30 דקות',
          path: '/course/stock-market/lesson4'
        },
        {
          id: 'lesson5',
          title: 'קריאת דוחות כספיים',
          duration: '35 דקות',
          path: '/course/stock-market/lesson5'
        },
        {
          id: 'quiz2',
          title: 'בוחן - ניתוח כספי',
          type: 'quiz',
          path: '/course/stock-market/quiz2'
        }
      ]
    },
    {
      id: 'practice',
      title: 'מסחר בפועל',
      lessons: [
        {
          id: 'lesson8',
          title: 'בניית תיק השקעות',
          duration: '25 דקות',
          path: '/course/stock-market/lesson8'
        },
        {
          id: 'lesson9',
          title: 'אסטרטגיות מסחר',
          duration: '30 דקות',
          path: '/course/stock-market/lesson9'
        },
        {
          id: 'lesson10',
          title: 'פקודות מסחר וביצוע עסקאות',
          duration: '20 דקות',
          path: '/course/stock-market/lesson10'
        },
        {
          id: 'final-quiz',
          title: 'בוחן מסכם',
          type: 'quiz',
          path: '/course/stock-market/final-quiz'
        },
        {
          id: 'summary',
          title: 'סיכום הקורס',
          type: 'summary',
          path: '/course/stock-market/summary'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">קורס שוק ההון למתחילים</h1>
          <div className="grid grid-cols-2 sm:flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              3 שעות לימוד
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              10 שיעורים
            </span>
            <span className="flex items-center gap-2">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
              3 בחני תרגול
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              מתאים למתחילים
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold">התקדמות בקורס</h2>
            <span className="text-xl sm:text-2xl font-bold text-blue-600">{calculateTotalProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${calculateTotalProgress()}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {courseContent.map((section, sectionIndex) => (
            <div key={section.id} className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm">
                  {sectionIndex + 1}
                </span>
                {section.title}
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {section.lessons.map((lesson) => {
                  const isCompleted = progress[lesson.id];
                  return (
                    <Link 
                      key={lesson.id}
                      href={lesson.path}
                      className={`block p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-200 ${
                        isCompleted 
                          ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
                          : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4">
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          ) : lesson.type === 'quiz' ? (
                            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          ) : lesson.type === 'summary' ? (
                            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                          ) : (
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                          )}
                          <div className="min-w-0">
                            <h3 className="font-medium text-sm sm:text-base truncate">{lesson.title}</h3>
                            {lesson.duration && (
                              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                {lesson.duration}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-gray-400 flex-shrink-0">
                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={resetProgress}
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          איפוס התקדמות
        </button>
      </div>
    </div>
  );
} 