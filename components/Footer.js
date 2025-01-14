export const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center text-sm">
              <p className="mb-4">
                © {new Date().getFullYear()} DeRibit. כל הזכויות שמורות
              </p>
              <div className="max-w-3xl mx-auto">
                <p className="mb-2 font-semibold">הצהרת אחריות חוקית:</p>
                <p className="mb-4 text-gray-400">
                  כל המידע המוצג באתר זה הינו למטרות מידע והשכלה בלבד ואינו מהווה המלצה, ייעוץ השקעות, ייעוץ פיננסי, חוות דעת מקצועית או תחליף לייעוץ מקצועי.
                  יש להתייעץ עם איש מקצוע מוסמך לפני ביצוע כל פעולה פיננסית או השקעה.
                  מפעילי האתר לא יישאו באחריות לכל נזק, הפסד או חבות אשר יגרמו, במישרין או בעקיפין, כתוצאה מהסתמכות על המידע המופיע באתר.
                </p>
                <p className="text-gray-500 text-xs">
                  * התוכן באתר אינו מהווה תחליף לייעוץ מקצועי מוסמך בתחומי המיסוי, המשפט, ההשקעות, הפנסיה או הפיננסים.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };