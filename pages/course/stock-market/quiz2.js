import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Brain } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';

export default function Quiz2() {
  const { markAsCompleted } = useCourseProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState(null);

  const allQuestions = [
    {
      question: "מהי הטעות הפסיכולוגית הנפוצה ביותר בשוק ההון?",
      options: [
        "לקנות מניות זולות",
        "למכור בפאניקה כשהשוק יורד",
        "להשקיע לטווח ארוך",
        "לפזר השקעות"
      ],
      correctAnswer: 1,
      explanation: "מכירה בפאניקה היא אחת הטעויות הנפוצות ביותר, שנובעת מרגשות פחד וחרדה במקום חשיבה רציונלית."
    },
    {
      question: "מהי 'הטיית העדר'?",
      options: [
        "לקנות רק מניות מובילות",
        "לעקוב אחרי המלצות מומחים",
        "לחקות את התנהגות הרוב",
        "להשקיע רק בחברות גדולות"
      ],
      correctAnswer: 2,
      explanation: "הטיית העדר היא הנטייה לחקות את התנהגות הרוב, גם כשזה לא רציונלי או מתאים למצבנו."
    },
    {
      question: "מהי 'הטיית האישור' (Confirmation Bias)?",
      options: [
        "לחפש רק מידע שתומך בדעה שלנו",
        "לאשר כל עסקה עם יועץ",
        "לבדוק את התיק כל יום",
        "להאמין שהשוק תמיד עולה"
      ],
      correctAnswer: 0,
      explanation: "הטיית האישור היא הנטייה שלנו לחפש ולהתמקד במידע שתומך בדעות שכבר יש לנו, תוך התעלמות ממידע סותר."
    },
    {
      question: "מהי 'הטיית הזמינות'?",
      options: [
        "להשקיע רק בחברות מוכרות",
        "לתת משקל יתר לאירועים שקל לזכור",
        "לסחור רק בשעות המסחר",
        "להחזיק רק מניות נזילות"
      ],
      correctAnswer: 1,
      explanation: "הטיית הזמינות גורמת לנו לתת משקל יתר לאירועים שקל לזכור או שקרו לאחרונה."
    },
    {
      question: "מהי 'הטיית הביטחון היתר'?",
      options: [
        "להאמין שאנחנו יודעים יותר מהשוק",
        "לבטוח רק במניות גדולות",
        "להשקיע רק בחברות רווחיות",
        "לסמוך על המלצות אנליסטים"
      ],
      correctAnswer: 0,
      explanation: "הטיית ביטחון היתר גורמת לנו להעריך ביתר את היכולות שלנו ולחשוב שאנחנו יכולים לנצח את השוק."
    }
  ];

  useEffect(() => {
    if (showResults && score >= selectedQuestions.length / 2) {
      const timer = setTimeout(() => {
        markAsCompleted('quiz2');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showResults, score, markAsCompleted, selectedQuestions?.length]);

  useEffect(() => {
    // בחירת שאלות רנדומליות בכל טעינה של הדף
    const getRandomQuestions = () => {
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };
    
    setSelectedQuestions(getRandomQuestions());
  }, []);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === selectedQuestions[currentQuestion].correctAnswer;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = isCorrect;
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < selectedQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      if (score >= selectedQuestions.length / 2) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {!selectedQuestions ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600 dark:text-gray-400">
              טוען שאלות...
            </div>
          </div>
        ) : (
          <>
            <div className="mb-12">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  חזרה לקורס
                </Link>
                <span>•</span>
                <span>בוחן לתרגול עצמי</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">בוחן לתרגול - שיעורים 5-7</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  5 דקות
                </span>
                <span className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  3 שאלות
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
              {!showResults ? (
                <div>
                  <div className="mb-8">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      שאלה {currentQuestion + 1} מתוך {selectedQuestions.length}
                    </div>
                    <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                      {selectedQuestions[currentQuestion].question}
                    </h2>
                    <div className="space-y-4">
                      {selectedQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          className="w-full text-right p-4 rounded-xl transition-all 
                          bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
                          text-white font-medium border border-transparent hover:border-blue-300
                          dark:border-blue-400 shadow-sm hover:shadow-md"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-8">
                    <div className={`text-6xl font-bold mb-4 ${
                      score >= selectedQuestions.length / 2 
                        ? 'text-green-500 dark:text-green-400' 
                        : 'text-red-500 dark:text-red-400'
                    }`}>
                      {score}/{selectedQuestions.length}
                    </div>
                    <p className="text-xl text-gray-900 dark:text-white font-medium">
                      {score >= selectedQuestions.length / 2 
                        ? '🎉 כל הכבוד! עברת את הבוחן בהצלחה!' 
                        : 'לא נורא, כדאי לחזור על החומר ולנסות שוב'}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {selectedQuestions.map((q, index) => (
                      <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl border
                      border-gray-200 dark:border-gray-600">
                        <div className="flex items-center gap-2 mb-4">
                          {answers[index] === q.correctAnswer ? (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          )}
                          <h3 className="font-bold text-gray-900 dark:text-white">{q.question}</h3>
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-700 dark:text-gray-300">
                            התשובה שלך: {q.options[answers[index]]}
                          </p>
                          {answers[index] !== q.correctAnswer && (
                            <p className="text-green-600 dark:text-green-400 font-medium">
                              התשובה הנכונה: {q.options[q.correctAnswer]}
                            </p>
                          )}
                          <p className="text-sm border-r-4 border-blue-500 pr-4 mt-2 
                          bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-gray-700 dark:text-gray-300">
                            {q.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    {score >= selectedQuestions.length / 2 ? (
                      <div className="flex justify-center">
                        <Link 
                          href="/course/stock-market/lesson8"
                          className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 
                          dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium
                          transition-all duration-200 transform hover:scale-105"
                        >
                          המשך לשיעור הבא
                          <ChevronLeft className="w-4 h-4" />
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="text-center">
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            אנחנו ממליצים לחזור על החומר לפני שממשיכים לשיעור הבא
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <Link 
                            href="/course/stock-market/lesson7"
                            className="flex items-center justify-center gap-2 text-white bg-blue-600 
                            hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 
                            rounded-xl font-medium transition-all duration-200"
                          >
                            <ChevronRight className="w-4 h-4" />
                            חזרה לשיעור הקודם
                          </Link>
                          <Link 
                            href="/course/stock-market/lesson8"
                            className="flex items-center justify-center gap-2 text-gray-600 
                            hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 
                            px-6 py-3 rounded-xl font-medium border border-gray-300 
                            dark:border-gray-600 transition-all duration-200"
                          >
                            המשך לשיעור הבא בכל זאת
                            <ChevronLeft className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
} 