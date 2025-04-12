import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, BookText } from 'lucide-react';

// Placeholder data for now - we can move this to a separate file later
const glossaryTerms = [
  {
    term: "ריבית דריבית",
    definition: "ריבית המחושבת לא רק על הקרן המקורית, אלא גם על הריבית שנצברה בתקופות קודמות. יוצרת אפקט \"כדור שלג\" של צמיחה לאורך זמן.",
    slug: "compound-interest" // Optional: for potential future linking
  },
  {
    term: "מדד המחירים לצרכן",
    definition: "מדד המודד את השינוי הממוצע במחירים של סל מוצרים ושירותים קבוע הנצרך על ידי משקי הבית בישראל. משמש למדידת אינפלציה ולהצמדת הלוואות וחוזים.",
    slug: "cpi"
  },
  {
    term: "ריבית פריים",
    definition: "ריבית הבסיס הנקבעת על ידי הבנקים המסחריים, המבוססת על ריבית בנק ישראל בתוספת מרווח קבוע (לרוב 1.5%). משמשת כבסיס לתמחור הלוואות ופיקדונות רבים.",
    slug: "prime-rate"
  },
  // Add more terms here...
];

// Sort terms alphabetically
glossaryTerms.sort((a, b) => a.term.localeCompare(b.term, 'he'));

export default function GlossaryPage() {
  return (
    <>
      <Head>
        <title>מילון מונחים פיננסיים | דריבית</title>
        <meta name="description" content="מילון מונחים פיננסיים מקיף בעברית. הסברים פשוטים למושגי יסוד בהשקעות, חיסכון, ריביות, משכנתאות ועוד. למדו את השפה הפיננסית עם דריבית." />
        <meta name="keywords" content="מילון מונחים פיננסיים, מושגים פיננסיים, לקסיקון פיננסי, ריבית דריבית, מדד המחירים לצרכן, פריים, השקעות, חיסכון, משכנתא" />
        <meta property="og:title" content="מילון מונחים פיננסיים | דריבית" />
        <meta property="og:description" content="הסברים פשוטים וברורים למושגים החשובים בעולם הפיננסים וההשקעות. המילון המקיף של דריבית." />
        <meta property="og:url" content="https://www.deribit.co.il/glossary" />
        <link rel="canonical" href="https://www.deribit.co.il/glossary" />
        {/* Add og:image later if needed */}
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb/Back link could be added here if desired */}
          {/* <div className="mb-8">
            <Link href="/" className="text-sm ...">חזרה</Link>
          </div> */} 

          <div className="text-center mb-12">
            <BookText className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">מילון מונחים פיננסיים</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">הסברים פשוטים וברורים למושגים החשובים בעולם הפיננסים</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-8">
              {glossaryTerms.map((item) => (
                <div key={item.slug || item.term} id={item.slug || item.term} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.term}</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.definition}
                  </p>
                  {/* Potential future link: */}
                  {/* {item.relatedArticle && <Link href={item.relatedArticle}><a className="text-sm text-blue-600 hover:underline">קרא עוד...</a></Link>} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 