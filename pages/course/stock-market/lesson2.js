import Layout from '../../../components/Layout'
import CourseHeader from '../../../components/CourseHeader'

export default function Lesson2() {
  return (
    <Layout>
      <CourseHeader 
        title="הכנה להשקעה ראשונה" 
        courseTitle="קורס שוק ההון למתחילים"
        lessonNumber="2"
      />

      <div className="lesson-content">
        <section className="intro">
          <h2>מה נלמד בשיעור זה?</h2>
          <ul className="lesson-goals">
            <li>איך לבדוק את המצב הפיננסי שלנו לפני שמתחילים להשקיע</li>
            <li>למה חשוב להקים קרן חירום ואיך עושים זאת</li>
            <li>כיצד מגדירים מטרות השקעה אישיות</li>
            <li>איך בוחרים אסטרטגיית השקעה מתאימה</li>
          </ul>
        </section>

        <section className="main-content">
          <h2>בדיקת המצב הפיננסי</h2>
          <p>
            לפני שמתחילים להשקיע, חשוב לוודא שאנחנו במצב פיננסי יציב. 
            נעבור על הצעדים החשובים שצריך לבצע:
          </p>

          <div className="checklist-box">
            <h3>רשימת בדיקה לפני השקעה:</h3>
            <ul>
              <li>✓ אין חובות בריבית גבוהה (כרטיסי אשראי, הלוואות צרכניות)</li>
              <li>✓ יש הכנסה קבועה ויציבה</li>
              <li>✓ קיימת תכנית פנסיונית בסיסית</li>
              <li>✓ יש תקציב חודשי מסודר</li>
            </ul>
          </div>

          <h2>בניית קרן חירום</h2>
          <div className="important-box">
            <p>
              <strong>מהי קרן חירום?</strong> סכום כסף נזיל שיספיק ל-3-6 חודשי הוצאות, 
              למקרה של אובדן הכנסה או הוצאה גדולה בלתי צפויה.
            </p>
          </div>

          <div className="calculation-box">
            <h3>איך מחשבים את גודל קרן החירום?</h3>
            <p>הוצאות חודשיות קבועות × 6 חודשים = גודל קרן החירום המומלץ</p>
            <div className="example">
              <p>לדוגמה: 8,000 ₪ הוצאות × 6 = 48,000 ₪ קרן חירום</p>
            </div>
          </div>

          <h2>הגדרת מטרות השקעה</h2>
          <div className="terms-grid">
            <div className="term-card">
              <h3>טווח קצר</h3>
              <p>עד שנתיים</p>
              <p>למשל: חתונה, רכב</p>
            </div>
            <div className="term-card">
              <h3>טווח בינוני</h3>
              <p>2-5 שנים</p>
              <p>למשל: מקדמה לדירה</p>
            </div>
            <div className="term-card">
              <h3>טווח ארוך</h3>
              <p>מעל 5 שנים</p>
              <p>למשל: פנסיה, חיסכון לילדים</p>
            </div>
          </div>

          <h2>בחירת אסטרטגיית השקעה</h2>
          <p>
            אסטרטגיית ההשקעה צריכה להתאים למטרות שלנו, לטווח הזמן, 
            ולרמת הסיכון שאנחנו מוכנים לקחת.
          </p>

          <div className="risk-profile-box">
            <h3>פרופילי סיכון נפוצים:</h3>
            <div className="profile-grid">
              <div>
                <h4>שמרני</h4>
                <p>20% מניות, 80% אג"ח</p>
              </div>
              <div>
                <h4>מאוזן</h4>
                <p>50% מניות, 50% אג"ח</p>
              </div>
              <div>
                <h4>אגרסיבי</h4>
                <p>80% מניות, 20% אג"ח</p>
              </div>
            </div>
          </div>
        </section>

        <section className="summary">
          <h2>סיכום</h2>
          <ul>
            <li>וודאו שאתם במצב פיננסי יציב לפני תחילת ההשקעות</li>
            <li>בנו קרן חירום מספקת</li>
            <li>הגדירו מטרות ברורות</li>
            <li>בחרו אסטרטגיה שמתאימה למטרות ולאופי שלכם</li>
          </ul>
        </section>
      </div>

      <style jsx>{`
        .lesson-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .checklist-box, .important-box, .calculation-box {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }

        .important-box {
          background: #fff3cd;
          border-left: 4px solid #ffc107;
        }

        .calculation-box {
          background: #e3f2fd;
          border-left: 4px solid #2196f3;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 15px;
        }

        .risk-profile-box {
          background: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
      `}</style>
    </Layout>
  )
} 