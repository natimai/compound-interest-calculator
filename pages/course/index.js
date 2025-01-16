import Link from 'next/link';
import { BookOpen, TrendingUp, DollarSign, PieChart, Target, Shield } from 'lucide-react';

export default function CoursePage() {
  const courseModules = [
    {
      title: "מבוא לשוק ההון",
      description: "הכירו את המושגים הבסיסיים והעקרונות של שוק ההון",
      lessons: [
        { id: "1-1", title: "מהו שוק ההון?", slug: "stock-market-intro", icon: TrendingUp },
        { id: "1-2", title: "מושגי יסוד", slug: "basic-terms", icon: BookOpen },
        { id: "1-3", title: "איך להתחיל להשקיע?", slug: "how-to-start", icon: Target },
      ]
    },
    {
      title: "אסטרטגיות השקעה",
      description: "למדו את השיטות המובילות להשקעה בשוק ההון",
      lessons: [
        { id: "2-1", title: "השקעה לטווח ארוך", slug: "long-term-investment", icon: Shield },
        { id: "2-2", title: "ניתוח בסיסי", slug: "fundamental-analysis", icon: PieChart },
        { id: "2-3", title: "ניהול תיק השקעות", slug: "portfolio-management", icon: DollarSign },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 mb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            קורס שוק ההון
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            למדו את כל מה שצריך לדעת על שוק ההון והשקעות
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              התחל ללמוד
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors">
              צפה בתוכן הקורס
            </button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-4xl mx-auto px-4">
        {courseModules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {`מודול ${moduleIndex + 1}: ${module.title}`}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {module.description}
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {module.lessons.map((lesson) => (
                <Link 
                  key={lesson.id}
                  href={`/course/${lesson.slug}`}
                  className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <lesson.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {`שיעור ${lesson.id}`}
                      </p>
                      <h3 className="text-lg font-semibold mb-2">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        לחץ כדי להתחיל ללמוד
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 