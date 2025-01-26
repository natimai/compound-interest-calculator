export default function AccessibilityStatement() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">הצהרת נגישות</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">התאמות הנגישות באתר</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>תמיכה בתקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA</li>
          <li>תמיכה בהנחיות WCAG 2.1 ברמה AA</li>
          <li>התאמת האתר לשימוש בעזרת מקלדת וטכנולוגיות מסייעות</li>
          <li>אפשרות להגדלת הטקסט עד 150%</li>
          <li>אפשרות לשינוי ניגודיות צבעים</li>
          <li>תמיכה בקורא מסך</li>
          <li>תיאורי תמונות חלופיים</li>
          <li>מבנה דפים ברור וקבוע</li>
          <li>אפשרות לניווט באמצעות מקלדת</li>
          <li>תמיכה בגופן מותאם לדיסלקציה</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">אמצעי נגישות נוספים באתר</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>הגדלת סמן העכבר</li>
          <li>הדגשת קישורים</li>
          <li>שינוי ריווח בין שורות</li>
          <li>אפשרות להסתרת אלמנטים מיותרים</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">דרכי פנייה לבקשות והתאמות נגישות</h2>
        <p>
          רכז הנגישות באתר: ישראל ישראלי<br />
          טלפון: 03-1234567<br />
          דוא"ל: <a href="mailto:accessibility@deribit.co.il" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">accessibility@deribit.co.il</a>
        </p>

        <p className="mt-4">
          פניות בנושא נגישות יטופלו ויענו תוך 14 ימי עבודה.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">הסדרי נגישות חלופיים</h2>
        <p>
          במידה ונתקלתם בבעיית נגישות או שאתם זקוקים להתאמות נגישות נוספות, אנא פנו אלינו ונשמח לסייע.
        </p>

        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          הצהרת הנגישות עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}
        </p>
      </div>
    </div>
  );
} 