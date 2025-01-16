import Link from 'next/link';
import { BookOpen, Clock, ChevronLeft, Star, Shield, TrendingUp, Check, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseIndex() {
  const lessons = [
    {
      id: 1,
      title: "מבוא להשקעות - למה בכלל להשקיע?",
      duration: "5 דקות",
      path: "/course/stock-market/lesson1",
      description: "נלמד על חשיבות ההשקעות ומושגי היסוד בשוק ההון"
    },
    {
      id: 2,
      title: "הכנה להשקעה ראשונה",
      duration: "8 דקות",
      path: "/course/stock-market/lesson2",
      description: "צעדים מעשיים להכנת תשתית פיננסית נכונה לפני תחילת ההשקעות"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section - משופר */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-transparent to-white/90 dark:to-gray-900/90" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
              קורס חדש
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              קורס שוק ההון למתחילים
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              למדו איך להשקיע בשוק ההון בצורה חכמה ואחראית, 
              <br className="hidden md:block" />
              עם כלים מעשיים והסברים פשוטים
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-lg shadow-lg shadow-blue-500/25"
              >
                התחל ללמוד עכשיו
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl font-medium text-lg shadow-lg"
              >
                קרא עוד
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-3xl font-bold">1,000+</span>
                <span className="text-gray-600 dark:text-gray-400">תלמידים</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-3xl font-bold">10</span>
                <span className="text-gray-600 dark:text-gray-400">שעות תוכן</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-3xl font-bold">4.9/5</span>
                <span className="text-gray-600 dark:text-gray-400">דירוג ממוצע</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section - משופר */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">למה ללמוד אצלנו?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">הקורס שלנו מציע חווית למידה ייחודית</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "מותאם למתחילים",
                description: "הסברים פשוטים וברורים, ללא מושגים מורכבים",
                color: "blue"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "ידע פרקטי",
                description: "כלים מעשיים שתוכלו ליישם מיד",
                color: "purple"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "מסלול מובנה",
                description: "למידה הדרגתית מהבסיס ועד להשקעות מתקדמות",
                color: "indigo"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className={`text-${feature.color}-500 mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Content Section - משופר */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 justify-center">
              <BookOpen className="w-8 h-8 text-blue-500" />
              תוכן הקורס
            </h2>
            <div className="space-y-6">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={lesson.path}
                    className="block p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                          שיעור {lesson.id}
                        </span>
                        <h3 className="text-xl font-bold mt-1">{lesson.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                          {lesson.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              הצטרפו לאלפי התלמידים שכבר לומדים איתנו
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium text-lg shadow-xl"
            >
              התחל ללמוד עכשיו
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 