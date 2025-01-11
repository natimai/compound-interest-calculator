export const Guide = () => {
    return (
      <div className="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8">המדריך המלא למחשבון ריבית דריבית</h2>
  
        {/* פתיח */}
        <div className="mb-8">
          <p className="mb-4">
            האם פעם ניסיתם לחשב כמה כסף תחסכו בעוד 20 שנה? זו יכולה להיות משימה מאתגרת, במיוחד כשמדובר בהפקדות חודשיות
            ותשואות משתנות. המחשבון שלנו נועד בדיוק בשביל זה - לעזור לכם לתכנן את העתיד הפיננסי שלכם בקלות ובדייקנות.
          </p>
        </div>
  
        {/* תוכן עניינים */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4">במדריך זה תלמדו:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>הבנת העוצמה של ריבית דריבית</li>
            <li>השפעת החיסכון השוטף על העושר העתידי</li>
            <li>כיצד דמי ניהול ומיסוי משפיעים על החיסכון</li>
            <li>שימוש נכון במחשבון התשואות</li>
            <li>קריאה והבנה של התוצאות</li>
          </ol>
        </div>
  
        {/* העוצמה של ריבית דריבית */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">העוצמה של ריבית דריבית</h3>
          <p className="mb-4">
            ריבית דריבית היא אחד הכלים החזקים ביותר בעולם הפיננסי. כאשר אתם משקיעים כסף, אתם לא רק מרוויחים על ההשקעה המקורית,
            אלא גם על הרווחים שהצטברו. למשל, אם השקעתם 10,000 ₪ בתשואה של 7% בשנה, בשנה הראשונה תרוויחו 700 ₪. 
            בשנה השנייה, אם לא משכתם את הרווחים, תרוויחו כבר על 10,700 ₪, וכך הלאה.
          </p>
        </div>
  
        {/* השפעת החיסכון השוטף */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">חיסכון שוטף: המפתח להצלחה</h3>
          <p className="mb-4">
            הפקדות חודשיות קבועות הן המפתח לבניית עושר לטווח ארוך. גם סכומים קטנים יחסית, כמו 500 ₪ בחודש,
            יכולים להצטבר לסכומים משמעותיים לאורך זמן. המחשבון מאפשר לכם לראות את ההשפעה המצטברת של ההפקדות השוטפות
            בשילוב עם ריבית דריבית.
          </p>
        </div>
  
        {/* שימוש במחשבון */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">איך להשתמש במחשבון בצורה נכונה?</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold mb-3">השדות במחשבון והמשמעות שלהם:</h4>
            <ul className="list-disc pr-5 space-y-3">
              <li>
                <strong>סכום הפקדה ראשוני:</strong> 
                הסכום שכבר חסכתם או שאתם מתכננים להשקיע בבת אחת בתחילת הדרך
              </li>
              <li>
                <strong>סכום הפקדה חודשי:</strong>
                הסכום שאתם מתכננים להפקיד באופן קבוע מדי חודש (למשל, הפקדות לפנסיה או חיסכון שוטף)
              </li>
              <li>
                <strong>תשואה שנתית ממוצעת:</strong>
                <ul className="list-disc pr-5 mt-2">
                  <li>תיק מניות מבוזר: בממוצע היסטורי כ-7%-8% בשנה</li>
                  <li>תיק מעורב מניות ואג"ח: בממוצע היסטורי כ-5%-6% בשנה</li>
                  <li>תיק סולידי: בממוצע היסטורי כ-3%-4% בשנה</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
  
        {/* דמי ניהול ומיסוי */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">השפעת דמי ניהול ומיסוי</h3>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="font-bold mb-3">גורמים המשפיעים על התשואה נטו:</h4>
            <ul className="list-disc pr-5 space-y-3">
              <li>
                <strong>דמי ניהול מהפקדה:</strong>
                עמלה חד-פעמית שנגבית מכל הפקדה חדשה. חשוב להשוות בין גופים פיננסיים שונים - הטווח נע בין 0% ועד 4%
              </li>
              <li>
                <strong>דמי ניהול מצבירה:</strong>
                עמלה שנתית שנגבית מסך הכספים שנצברו. משפיעה משמעותית לטווח ארוך - חשוב לשאוף לדמי ניהול נמוכים
              </li>
              <li>
                <strong>מס רווחי הון:</strong>
                בהשקעות בשוק ההון (שאינן במסגרת פנסיונית) יש מס של 25% על הרווחים. המחשבון מאפשר לכם לראות את ההשפעה
              </li>
            </ul>
          </div>
        </div>
  
        {/* קריאת התוצאות */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">הבנת התוצאות</h3>
          <ul className="list-disc pr-5 space-y-3">
            <li><strong>סך ההפקדות:</strong> כמה כסף הפקדתם בפועל לאורך כל התקופה</li>
            <li><strong>רווחי הריבית:</strong> הרווח הנקי שנוצר מהתשואות על ההשקעה</li>
            <li><strong>עלות דמי הניהול:</strong> כמה שילמתם בפועל על ניהול ההשקעה</li>
            <li><strong>תשלום מס רווחי הון:</strong> המס על הרווחים (אם בחרתם באפשרות זו)</li>
            <li><strong>הסכום הסופי בקופה:</strong> מה שבאמת יישאר לכם אחרי כל העלויות</li>
          </ul>
        </div>
  
        {/* טיפים חשובים */}
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4">טיפים לשימוש חכם במחשבון</h3>
          <ul className="list-disc pr-5 space-y-2">
            <li>נסו תרחישים שונים עם סכומי הפקדה שונים כדי למצוא את התמהיל המתאים לכם</li>
            <li>השוו בין דמי ניהול שונים כדי להבין את ההשפעה ארוכת הטווח שלהם</li>
            <li>בדקו כיצד שינויים קטנים בתשואה משפיעים על התוצאה הסופית</li>
          </ul>
        </div>
  
        {/* אזהרה */}
        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="font-bold mb-3">הערות חשובות:</h4>
          <ul className="list-disc pr-5 space-y-2">
            <li>המחשבון מבוסס על הנחת תשואה קבועה, אך בפועל התשואות משתנות משנה לשנה</li>
            <li>התוצאות מיועדות להמחשה בלבד ואינן מהוות ייעוץ השקעות</li>
            <li>מומלץ להתייעץ עם איש מקצוע מוסמך לגבי החלטות השקעה משמעותיות</li>
          </ul>
        </div>
      </div>
    )
  }