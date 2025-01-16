import { Layout } from '../../../components/Layout';
import CourseHeader from '../../../components/CourseHeader';
import LessonNavigation from '../../../components/LessonNavigation';

function Lesson1() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        <CourseHeader 
          title="מבוא להשקעות - למה בכלל להשקיע?" 
          courseTitle="קורס שוק ההון למתחילים"
          lessonNumber="1"
        />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2>למה חשוב להשקיע?</h2>
            <p>
              בעולם שבו המחירים עולים כל הזמן (אינפלציה), השארת הכסף בעו"ש או בתכנית חיסכון בריבית נמוכה 
              משמעותה שהכסף שלנו מאבד מערכו. השקעה נכונה יכולה לא רק לשמור על ערך הכסף, אלא גם להגדיל אותו לאורך זמן.
            </p>

            <h2>מה נלמד בשיעור זה?</h2>
            <ul>
              <li>מהן השקעות ולמה חשוב להשקיע</li>
              <li>מושגי יסוד בסיסיים בעולם ההשקעות</li>
              <li>היתרונות של השקעה לטווח ארוך</li>
              <li>הבנת הסיכונים והסיכויים</li>
            </ul>
          </div>
        </div>

        <LessonNavigation currentLesson={1} />
      </div>
    </Layout>
  );
}

// הוספת getInitialProps
Lesson1.getInitialProps = async () => {
  return {};
};

export default Lesson1; 