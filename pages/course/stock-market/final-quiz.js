import Layout from '../../../components/Layout';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Brain } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useCourseProgress } from '../../../contexts/CourseProgressContext';

export default function FinalQuiz() {
  const { markAsCompleted } = useCourseProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState(null);

  const allQuestions = [
    // שיעור 1-3: מבוא ומושגי יסוד
    {
      question: "מהו שוק ההון?",
      options: [
        "מקום פיזי למכירת מניות",
        "מערכת המאפשרת מפגש בין משקיעים לחברות הזקוקות למימון",
        "בנק להלוואות בלבד",
        "מקום למסחר במטבעות בלבד"
      ],
      correctAnswer: 1,
      explanation: "שוק ההון הוא מערכת המאפשרת לחברות לגייס כסף ממשקיעים באמצעות מכירת ניירות ערך"
    },
    {
      question: "מהי מניה?",
      options: [
        "הלוואה לחברה",
        "חלק מהבעלות בחברה",
        "אגרת חוב ממשלתית",
        "פיקדון בנקאי"
      ],
      correctAnswer: 1,
      explanation: "מניה מייצגת חלק מהבעלות בחברה ומקנה למחזיק בה זכויות בעלות"
    },
    {
      question: "מהו דיבידנד?",
      options: [
        "סוג של מניה",
        "הלוואה מהבנק",
        "חלק מרווחי החברה המחולק לבעלי המניות",
        "עמלת מסחר"
      ],
      correctAnswer: 2,
      explanation: "דיבידנד הוא חלוקת רווחים שחברה מעבירה לבעלי מניותיה"
    },
    // שיעור 4-5: ניתוח בסיסי
    {
      question: "מהו מכפיל רווח (P/E)?",
      options: [
        "מחיר המניה חלקי הרווח למניה",
        "רווח החברה כפול מספר המניות",
        "סך ההכנסות של החברה",
        "שווי השוק של החברה"
      ],
      correctAnswer: 0,
      explanation: "מכפיל רווח הוא היחס בין מחיר המניה לרווח למניה, ומשמש להערכת שווי החברה"
    },
    {
      question: "מהו מחזור מסחר?",
      options: [
        "מספר העסקאות ביום",
        "הסכום הכולל של המניות שנסחרו",
        "מחיר הפתיחה של המניה",
        "הרווח היומי של החברה"
      ],
      correctAnswer: 1,
      explanation: "מחזור מסחר מייצג את הערך הכספי הכולל של המניות שנסחרו בתקופה מסוימת"
    },
    // שיעור 6-7: ניהול תיק השקעות
    {
      question: "מהו פיזור השקעות?",
      options: [
        "השקעה במניה אחת בלבד",
        "השקעה במספר מניות מענפים שונים",
        "השקעה רק באג\"ח",
        "השקעה רק במט\"ח"
      ],
      correctAnswer: 1,
      explanation: "פיזור השקעות הוא אסטרטגיה להקטנת סיכון על ידי השקעה במגוון נכסים"
    },
    {
      question: "מהי קרן נאמנות?",
      options: [
        "חשבון בנק משותף",
        "הלוואה בנקאית",
        "כלי השקעה המנוהל על ידי מנהל מקצועי עבור משקיעים רבים",
        "תכנית חיסכון"
      ],
      correctAnswer: 2,
      explanation: "קרן נאמנות היא כלי השקעה המאפשר למשקיעים קטנים להשקיע בתיק מפוזר בניהול מקצועי"
    },
    // שיעור 8-9: אסטרטגיות מסחר
    {
      question: "מהי אסטרטגיית Buy and Hold?",
      options: [
        "קניה ומכירה יומית",
        "השקעה לטווח ארוך ללא מסחר תכוף",
        "מסחר בשעות מסוימות",
        "השאלת מניות"
      ],
      correctAnswer: 1,
      explanation: "Buy and Hold היא אסטרטגיה של השקעה לטווח ארוך תוך התעלמות מתנודות קצרות טווח"
    },
    {
      question: "מהו ניתוח טכני?",
      options: [
        "בדיקת הדוחות הכספיים",
        "ניתוח מחירי המניה וגרפים היסטוריים",
        "בדיקת איכות המוצרים",
        "ניתוח כלכלי של המשק"
      ],
      correctAnswer: 1,
      explanation: "ניתוח טכני הוא שיטה לחיזוי מחירים עתידיים על בסיס תבניות מחירים היסטוריות"
    },
    // שיעור 10: פקודות מסחר
    {
      question: "מהי פקודת שוק (Market Order)?",
      options: [
        "קניה במחיר מוגדר מראש",
        "קניה במחיר הטוב ביותר הזמין כרגע",
        "מכירה בסוף יום",
        "הזמנה לעתיד"
      ],
      correctAnswer: 1,
      explanation: "פקודת שוק היא הוראה לקנות או למכור מיידית במחיר הטוב ביותר הזמין בשוק"
    },
    // המשך שאלות על פקודות מסחר
    {
      question: "מהי פקודת לימיט (Limit Order)?",
      options: [
        "פקודה שתתבצע בכל מחיר",
        "פקודה שתתבצע רק במחיר שהוגדר או טוב ממנו",
        "פקודה למכירה בלבד",
        "פקודה לקנייה בלבד"
      ],
      correctAnswer: 1,
      explanation: "פקודת לימיט מאפשרת לקבוע מחיר מקסימום לקנייה או מינימום למכירה"
    },
    {
      question: "מהי פקודת סטופ (Stop Loss)?",
      options: [
        "פקודה לקניית מניות",
        "פקודה להגבלת רווחים",
        "פקודה להגבלת הפסדים",
        "פקודה לביטול עסקה"
      ],
      correctAnswer: 2,
      explanation: "פקודת סטופ משמשת להגנה מפני הפסדים על ידי מכירה אוטומטית כשהמחיר יורד לרמה מסוימת"
    },
    // שאלות על ניהול סיכונים
    {
      question: "מהו היתרון העיקרי של פיזור השקעות?",
      options: [
        "הגדלת הסיכון",
        "הקטנת הסיכון",
        "הגדלת העמלות",
        "הקטנת הרווחים"
      ],
      correctAnswer: 1,
      explanation: "פיזור השקעות מקטין את הסיכון על ידי חלוקת ההשקעה בין נכסים שונים"
    },
    {
      question: "מהו אחוז ההשקעה המומלץ במניה בודדת מתוך התיק?",
      options: [
        "עד 5%",
        "50%",
        "100%",
        "75%"
      ],
      correctAnswer: 0,
      explanation: "מומלץ לא להשקיע יותר מ-5% מהתיק במניה בודדת כדי להקטין סיכון"
    },
    // שאלות על מיסוי
    {
      question: "מתי משלמים מס על רווחי הון?",
      options: [
        "בכל חודש",
        "בעת מכירת נייר הערך",
        "בסוף השנה",
        "בעת קניית נייר הערך"
      ],
      correctAnswer: 1,
      explanation: "מס רווחי הון משולם רק בעת מימוש ההשקעה (מכירה)"
    },
    // שאלות על אסטרטגיות מסחר
    {
      question: "מהי המטרה של ניתוח בסיסי?",
      options: [
        "לנתח גרפים",
        "להעריך את השווי האמיתי של החברה",
        "לבדוק מחירים היסטוריים",
        "לחזות תנודות יומיות"
      ],
      correctAnswer: 1,
      explanation: "ניתוח בסיסי נועד להעריך את השווי הכלכלי האמיתי של החברה"
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
        markAsCompleted('final-quiz');
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
          
          <h1 className="text-3xl font-bold mb-4">בוחן מסכם - קורס שוק ההון</h1>
          <p className="text-gray-600 dark:text-gray-400">
            בחן את הידע שלך בכל הנושאים שלמדנו בקורס
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
                    ? 'כל הכבוד! סיימת את הקורס בהצלחה!' 
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
                      <button
                        onClick={() => {
                          setCurrentQuestion(0);
                          setShowResults(false);
                          setScore(0);
                          setAnswers([]);
                          const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
                          setSelectedQuestions(shuffled.slice(0, 5));
                        }}
                        className="flex items-center justify-center gap-2 text-white bg-blue-600 
                        hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-6 py-3 
                        rounded-xl font-medium transition-all duration-200"
                      >
                        נסה שוב
                      </button>
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