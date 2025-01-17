import { BookOpen, Clock, Target, CheckCircle, Lock, Play, Award, Brain, ChevronLeft, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCourseProgress } from '../../contexts/CourseProgressContext';

// קומפוננטת כרטיס שיעור
const LessonCard = ({ number, title, description, duration, href }) => {
  const { progress } = useCourseProgress();
  const isCompleted = progress[`lesson${number}`];

  return (
    <Link href={href}>
      <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 transition-all duration-200 
        border border-gray-100 dark:border-gray-700
        ${isCompleted ? 'border-green-500 dark:border-green-500' : 'hover:border-blue-500 dark:hover:border-blue-500'}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
            ${isCompleted 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
            }`}
          >
            {isCompleted ? <CheckCircle className="w-5 h-5" /> : number}
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4" />
          {duration}
        </div>
      </div>
    </Link>
  );
};

// קומפוננטת כרטיס בוחן
const QuizCard = ({ title, description, href }) => {
  const { progress } = useCourseProgress();
  const isCompleted = progress[href.split('/').pop()];

  return (
    <Link href={href}>
      <div className={`bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 
        rounded-xl p-6 transition-all duration-200 border-2
        ${isCompleted 
          ? 'border-green-500 dark:border-green-500' 
          : 'border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          {isCompleted ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <Brain className="w-6 h-6 text-purple-500" />
          )}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </Link>
  );
};

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            קורס שוק ההון למתחילים
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            מדריך מקיף להבנת עולם ההשקעות וניהול תיק השקעות חכם
          </p>
        </header>

        {/* חלק ראשון - יסודות שוק ההון */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            חלק ראשון: יסודות שוק ההון
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LessonCard
              number="1"
              title="מבוא לשוק ההון"
              description="הכרות עם מושגי יסוד, מבנה הבורסה ואיך היא פועלת"
              duration="20 דקות"
              href="/course/stock-market/lesson1"
            />
            <LessonCard
              number="2"
              title="סוגי ניירות ערך"
              description="מניות, אגרות חוב וקרנות נאמנות - הכרות מעמיקה"
              duration="25 דקות"
              href="/course/stock-market/lesson2"
            />
            <LessonCard
              number="3"
              title="ניתוח בסיסי"
              description="הבנת דוחות כספיים ומכפילים פיננסיים"
              duration="30 דקות"
              href="/course/stock-market/lesson3"
            />
            <LessonCard
              number="4"
              title="אסטרטגיות השקעה"
              description="אסטרטגיות השקעה מובילות ובניית תיק מאוזן"
              duration="30 דקות"
              href="/course/stock-market/lesson4"
            />
            <QuizCard
              title="בוחן - חלק ראשון"
              description="בוחן על שיעורים 1-4"
              href="/course/stock-market/quiz1"
            />
          </div>
        </section>

        {/* חלק שני - ניהול סיכונים ופסיכולוגיה */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
            <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            חלק שני: ניהול סיכונים ופסיכולוגיה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LessonCard
              number="5"
              title="ניהול סיכונים"
              description="עקרונות ניהול סיכונים וכלים מעשיים"
              duration="25 דקות"
              href="/course/stock-market/lesson5"
            />
            <LessonCard
              number="6"
              title="מיסוי וחוקים"
              description="היבטי מיסוי והיבטים חוקיים בהשקעות"
              duration="20 דקות"
              href="/course/stock-market/lesson6"
            />
            <LessonCard
              number="7"
              title="פסיכולוגיה של המשקיע"
              description="הטיות פסיכולוגיות וקבלת החלטות"
              duration="25 דקות"
              href="/course/stock-market/lesson7"
            />
            <QuizCard
              title="בוחן - חלק שני"
              description="בוחן על שיעורים 5-7"
              href="/course/stock-market/quiz2"
            />
          </div>
        </section>

        {/* חלק שלישי - מתקדמים */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
            <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            חלק שלישי: נושאים מתקדמים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LessonCard
              number="8"
              title="בניית תיק השקעות"
              description="עקרונות לבניית תיק השקעות מאוזן"
              duration="30 דקות"
              href="/course/stock-market/lesson8"
            />
            <LessonCard
              number="9"
              title="מעקב וניהול תיק"
              description="כלים למעקב וניהול תיק ההשקעות"
              duration="25 דקות"
              href="/course/stock-market/lesson9"
            />
            <LessonCard
              number="10"
              title="השקעות מתקדמות"
              description="אפיקי השקעה מתקדמים ושיטות מסחר"
              duration="30 דקות"
              href="/course/stock-market/lesson10"
            />
          </div>
        </section>

        {/* סיכום ובוחן מסכם */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
            <Rocket className="w-6 h-6 text-red-600 dark:text-red-400" />
            סיכום ובוחן מסכם
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LessonCard
              number="11"
              title="סיכום הקורס"
              description="סיכום הנושאים העיקריים וצעדים להמשך"
              duration="15 דקות"
              href="/course/stock-market/summary"
            />
            <QuizCard
              title="בוחן מסכם"
              description="בוחן מקיף על כל חומר הקורס"
              href="/course/stock-market/final-quiz"
            />
          </div>
        </section>
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