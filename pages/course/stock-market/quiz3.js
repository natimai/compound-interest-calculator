import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Brain } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';

export default function Quiz3() {
  const { markAsCompleted } = useCourseProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState(null);

  const allQuestions = [
    {
      question: "מהי פקודת שוק (Market Order)?",
      options: [
        "פקודה שתתבצע רק במחיר מסוים",
        "פקודה שתתבצע מיידית במחיר הטוב ביותר הקיים",
        "פקודה שתתבצע רק בסוף יום המסחר",
        "פקודה שתתבצע רק בפתיחת המסחר"
      ],
      correctAnswer: 1,
      explanation: "פקודת שוק מתבצעת מיידית במחיר הטוב ביותר הזמין בשוק, ללא הגבלת מחיר"
    },
    {
      question: "מהו היתרון העיקרי של פקודת לימיט (Limit Order)?",
      options: [
        "ביצוע מיידי מובטח",
        "עמלות נמוכות יותר",
        "שליטה מלאה על מחיר הביצוע",
        "אין צורך לעקוב אחרי המחיר"
      ],
      correctAnswer: 2,
      explanation: "פקודת לימיט מאפשרת לקבוע מראש את המחיר המקסימלי לקנייה או המינימלי למכירה"
    },
    {
      question: "מתי כדאי להשתמש בפקודת Stop Loss?",
      options: [
        "כשרוצים לקנות במחיר נמוך",
        "כשרוצים למכור במחיר גבוה",
        "כדי להגן על ההשקעה מפני הפסדים",
        "כדי להגדיל את הרווחים"
      ],
      correctAnswer: 2,
      explanation: "פקודת Stop Loss משמשת להגנה על ההשקעה מפני הפסדים גדולים"
    },
    {
      question: "איזו פקודה מבטיחה ביצוע מיידי?",
      options: [
        "פקודת לימיט",
        "פקודת שוק",
        "פקודת סטופ",
        "אף אחת מהפקודות"
      ],
      correctAnswer: 1,
      explanation: "פקודת שוק היא היחידה שמבטיחה ביצוע מיידי (כל עוד יש מוכרים/קונים)"
    },
    {
      question: "מה החיסרון העיקרי של פקודת שוק?",
      options: [
        "זמן ביצוע ארוך",
        "עמלות גבוהות",
        "אי ידיעת מחיר הביצוע מראש",
        "מורכבות בהזנת הפקודה"
      ],
      correctAnswer: 2,
      explanation: "בפקודת שוק לא יודעים מראש את המחיר המדויק שבו תתבצע העסקה"
    },
    {
      question: "מתי לא מומלץ להשתמש בפקודת שוק?",
      options: [
        "במניות עם מחזור מסחר גבוה",
        "במניות עם מחזור מסחר נמוך",
        "בשעות המסחר הרגילות",
        "כשהמחיר יציב"
      ],
      correctAnswer: 1,
      explanation: "במניות עם מחזור מסחר נמוך (דלילות) פקודת שוק עלולה להתבצע במחיר גרוע"
    },
    {
      question: "מה קורה כשפקודת לימיט לא מתבצעת?",
      options: [
        "היא מתבטלת מיד",
        "היא הופכת לפקודת שוק",
        "היא נשארת פעילה עד לביצוע או ביטול",
        "היא מתבצעת במחיר הבא הזמין"
      ],
      correctAnswer: 2,
      explanation: "פקודת לימיט נשארת פעילה בשוק עד שמגיעים למחיר המבוקש או עד שמבטלים אותה"
    },
    {
      question: "איזה אחוז מההשקעה מומלץ לסכן בעסקה בודדת?",
      options: [
        "עד 2%",
        "5-10%",
        "15-20%",
        "אין הגבלה"
      ],
      correctAnswer: 0,
      explanation: "מומלץ לא לסכן יותר מ-2% מהתיק בעסקה בודדת כדי לנהל סיכונים נכון"
    },
    {
      question: "מה חשוב לבדוק לפני הזנת פקודת מסחר?",
      options: [
        "רק את המחיר הנוכחי",
        "רק את כמות המניות",
        "את עומק השוק ומרווח הביקוש-היצע",
        "רק את שם החברה"
      ],
      correctAnswer: 2,
      explanation: "חשוב לבדוק את עומק השוק ומרווח הביקוש-היצע כדי להבין את תנאי השוק"
    },
    {
      question: "מתי מומלץ לחלק פקודה גדולה למספר פקודות קטנות?",
      options: [
        "תמיד",
        "רק במניות גדולות",
        "במניות עם מחזור מסחר נמוך",
        "אף פעם"
      ],
      correctAnswer: 2,
      explanation: "במניות עם מחזור נמוך, פקודה גדולה עלולה להשפיע על המחיר ולכן עדיף לחלק אותה"
    }
  ];

  useEffect(() => {
    // בחירת 5 שאלות רנדומליות
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 5));
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

  useEffect(() => {
    if (showResults && score >= selectedQuestions.length / 2) {
      const timer = setTimeout(() => {
        markAsCompleted('quiz3');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showResults, score, markAsCompleted]);

  if (!selectedQuestions) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600 dark:text-gray-400">
              טוען שאלות...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/course" className="hover:text-blue-600 flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              חזרה לקורס
            </Link>
            <span>•</span>
            <span>בוחן מסכם</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">בוחן מסכם - פקודות מסחר</h1>
          <p className="text-gray-600 dark:text-gray-400">
            בחן את הידע שלך בנושא פקודות מסחר וביצוע עסקאות
          </p>
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
                <p className="text-xl mb-8">
                  {score >= selectedQuestions.length / 2 
                    ? 'כל הכבוד! עברת את הבוחן בהצלחה!' 
                    : 'לא נורא, אפשר לנסות שוב!'}
                </p>
                <div className="space-y-6">
                  {selectedQuestions.map((q, index) => (
                    <div key={index} className={`p-4 rounded-lg ${
                      answers[index] ? 'bg-green-50 dark:bg-green-900/30' : 'bg-red-50 dark:bg-red-900/30'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        {answers[index] 
                          ? <CheckCircle className="w-5 h-5 text-green-500" />
                          : <AlertCircle className="w-5 h-5 text-red-500" />
                        }
                        <h3 className="font-bold">{q.question}</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {q.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                {score >= selectedQuestions.length / 2 ? (
                  <div className="flex justify-center">
                    <Link 
                      href="/course/stock-market/summary"
                      className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 
                      dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 rounded-xl font-medium
                      transition-all duration-200 transform hover:scale-105"
                    >
                      המשך לסיכום הקורס
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        אנחנו ממליצים לחזור על החומר לפני שממשיכים לסיכום הקורס
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link 
                        href="/course/stock-market/lesson10"
                        className="flex items-center justify-center gap-2 text-white bg-blue-600 
                        hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 
                        rounded-xl font-medium transition-all duration-200"
                      >
                        <ChevronRight className="w-4 h-4" />
                        חזרה לשיעור
                      </Link>
                      <Link 
                        href="/course/stock-market/summary"
                        className="flex items-center justify-center gap-2 text-gray-600 
                        hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 
                        px-6 py-3 rounded-xl font-medium border border-gray-300 
                        dark:border-gray-600 transition-all duration-200"
                      >
                        המשך לסיכום הקורס בכל זאת
                        <ChevronLeft className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 