import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Brain, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';

export default function Quiz1() {
  const { markAsCompleted } = useCourseProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState(null);

  useEffect(() => {
    if (showResults && score >= selectedQuestions.length / 2) {
      const timer = setTimeout(() => {
        markAsCompleted('quiz1');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showResults, score, markAsCompleted, selectedQuestions?.length]);

  const questions = [
    {
      question: "מהי אסטרטגיית השקעת ערך (Value Investing)?",
      options: [
        "חיפוש חברות עם צמיחה מהירה",
        "חיפוש מניות הנסחרות במחיר נמוך ביחס לשווין האמיתי",
        "השקעה רק במניות דיבידנד",
        "השקעה לטווח קצר בלבד"
      ],
      correctAnswer: 1,
      explanation: "השקעת ערך מתמקדת במציאת חברות שנסחרות במחיר נמוך ביחס לשווין האמיתי, תוך שימוש בניתוח פיננסי מעמיק."
    },
    {
      question: "מהו היתרון העיקרי של השקעה במדדים רחבים?",
      options: [
        "תשואה גבוהה יותר מהשוק",
        "סיכון נמוך יותר מהשוק",
        "פיזור אוטומטי ודמי ניהול נמוכים",
        "גמישות מקסימלית בניהול ההשקעה"
      ],
      correctAnswer: 2,
      explanation: "השקעה במדדים רחבים מספקת פיזור אוטומטי על פני מספר רב של חברות, ובדרך כלל עם דמי ניהול נמוכים משמעותית."
    },
    {
      question: "מהי קרן חירום ומה גודלה המומלץ?",
      options: [
        "כסף להשקעות בשוק ההון, כ-50% מההון",
        "כסף נזיל למצבי חירום, 3-6 חודשי הוצאות",
        "חיסכון פנסיוני, לפחות 20% מההכנסה",
        "השקעה בנדל\"ן, לפחות 100,000 ₪"
      ],
      correctAnswer: 1,
      explanation: "קרן חירום היא סכום כסף נזיל שנשמר למצבי חירום, והגודל המומלץ הוא בין 3 ל-6 חודשי הוצאות."
    }
  ];

  const handleAnswer = (answerIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(answers).forEach(questionIndex => {
      if (answers[questionIndex] === questions[questionIndex].correctAnswer) {
        correct++;
      }
    });
    return (correct / questions.length) * 100;
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* כותרת */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>בוחן 1</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">בוחן: אסטרטגיות השקעה ומושגי יסוד</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              10 דקות
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              3 שאלות
            </span>
            <span className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              ציון עובר: 70
            </span>
          </div>
        </div>

        {/* תוכן הבוחן */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          {!showResults ? (
            <div className="space-y-8">
              {/* מספר שאלה נוכחית */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">שאלה {currentQuestion + 1}</span>
                <span>מתוך</span>
                <span className="font-medium">{questions.length}</span>
              </div>

              {/* שאלה */}
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  {questions[currentQuestion].question}
                </h2>
                
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full text-right p-4 rounded-xl transition-all ${
                        answers[currentQuestion] === index
                          ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* כפתורי ניווט */}
              <div className="flex justify-between items-center pt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    currentQuestion === 0
                      ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                      : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                  שאלה קודמת
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 rounded-lg"
                >
                  {currentQuestion === questions.length - 1 ? 'סיים בוחן' : 'שאלה הבאה'}
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* תוצאות */}
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">תוצאות הבוחן</h2>
                <div className="text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {calculateScore()}%
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {calculateScore() >= 70 ? 'כל הכבוד! עברת את הבוחן בהצלחה' : 'לא נורא, אפשר לנסות שוב'}
                </p>
              </div>

              {/* סקירת תשובות */}
              <div className="space-y-6">
                {questions.map((q, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="font-bold mb-4 text-gray-900 dark:text-white">{q.question}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">התשובה שלך:</span>
                      <span className={`flex items-center ${
                        answers[index] === q.correctAnswer 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {q.options[answers[index]]}
                        {answers[index] === q.correctAnswer ? (
                          <Check className="w-4 h-4 mr-2" />
                        ) : (
                          <X className="w-4 h-4 mr-2" />
                        )}
                      </span>
                    </div>
                    {answers[index] !== q.correctAnswer && (
                      <div className="text-green-600 dark:text-green-400 mb-2">
                        <span className="font-medium">התשובה הנכונה:</span> {q.options[q.correctAnswer]}
                      </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm border-r-4 border-blue-500 pr-4">
                      {q.explanation}
                    </p>
                  </div>
                ))}
              </div>

              {/* כפתורי ניווט */}
              <div className="flex justify-between items-center pt-8">
                <Link 
                  href="/course/stock-market/lesson4"
                  className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 rounded-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                  חזור לשיעור
                </Link>
                <Link 
                  href="/course/stock-market/lesson5"
                  className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-4 py-2 rounded-lg"
                >
                  המשך לשיעור הבא
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 