import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Calculator, Clock, TrendingUp, DollarSign, BookOpen, ArrowRight, Users, ThumbsUp, BarChart2, Target, Lightbulb } from 'lucide-react';
import { StatisticCounter } from '../components/StatisticCounter';

export default function Home() {
  return (
    <>
      <NextSeo
        title="דריבית - מחשבונים פיננסיים חכמים"
        description="כלים פיננסיים חכמים לניהול כספים, תכנון משכנתא, חישוב השקעות ותכנון פיננסי"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              קבלו החלטות פיננסיות חכמות יותר
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              מחשבונים פיננסיים מתקדמים שיעזרו לכם לתכנן את העתיד הכלכלי שלכם
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/calculators"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                התחל עכשיו
              </Link>
              <Link 
                href="/guides"
                className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                למד עוד
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">המחשבונים שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <Calculator className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">מחשבון ריבית דריבית</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                חשב את התשואה על ההשקעות שלך לאורך זמן
              </p>
              <Link 
                href="/compound-interest"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                נסה עכשיו <ArrowRight className="mr-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">מחשבון משכנתא</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                השווה בין מסלולי משכנתא שונים וחשב החזרים חודשיים
              </p>
              <Link 
                href="/mortgage-calculator"
                className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
              >
                נסה עכשיו <ArrowRight className="mr-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <DollarSign className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">מחשבון שכר</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                חשב שכר נטו מברוטו כולל כל הניכויים והזיכויים
              </p>
              <Link 
                href="/gross-to-net"
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
              >
                נסה עכשיו <ArrowRight className="mr-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <Calculator className="w-8 h-8 mx-auto text-blue-100" />
              <div>
                <StatisticCounter end={12567} suffix="+" />
                <div className="text-blue-100">חישובים בוצעו החודש</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Target className="w-8 h-8 mx-auto text-blue-100" />
              <div>
                <StatisticCounter end={42} suffix="%" />
                <div className="text-blue-100">מהמשתמשים מתכננים משכנתא</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Lightbulb className="w-8 h-8 mx-auto text-blue-100" />
              <div>
                <StatisticCounter end={65} suffix="%" />
                <div className="text-blue-100">משתמשים בריבית דריבית</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <BarChart2 className="w-8 h-8 mx-auto text-blue-100" />
              <div>
                <StatisticCounter end={3} />
                <div className="text-blue-100">מחשבונים פיננסיים</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-blue-100">
            * הנתונים מעודכנים לחודש {new Date().toLocaleString('he-IL', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      </section>

      {/* Latest Guides */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">מדריכים פיננסיים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              href="/guides/compound-interest"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">מדריך לריבית דריבית</h3>
              <p className="text-gray-600 dark:text-gray-300">
                הבנת העקרונות של ריבית דריבית והשפעתה על החיסכון ארוך הטווח
              </p>
            </Link>

            <Link 
              href="/guides/mortgage-calculator"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <BookOpen className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">מדריך למשכנתא</h3>
              <p className="text-gray-600 dark:text-gray-300">
                כל מה שצריך לדעת על לקיחת משכנתא חכמה ומשתלמת
              </p>
            </Link>

            <Link 
              href="/guides/balanced-portfolio"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <BookOpen className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">בניית תיק מאוזן</h3>
              <p className="text-gray-600 dark:text-gray-300">
                איך לבנות תיק השקעות מאוזן המתאים לצרכים שלך
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              מוכנים להתחיל לתכנן את העתיד הפיננסי שלכם?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              הצטרפו לאלפי משתמשים שכבר משתמשים במחשבונים שלנו
            </p>
            <Link 
              href="/calculators"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium inline-block transition-colors"
            >
              התחל עכשיו
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
