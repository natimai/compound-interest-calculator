import Head from 'next/head';
import Link from 'next/link';
import { ChevronRight, BookOpen } from 'lucide-react';
import { useMemo } from 'react';

// Expanded list of terms - can be moved to a separate file later
const glossaryTerms = [
  // Existing terms
  {
    term: "ריבית דריבית",
    definition: "ריבית המחושבת לא רק על הקרן המקורית, אלא גם על הריבית שנצברה בתקופות קודמות. הרווחים הופכים לחלק מהקרן ומייצרים רווחים נוספים, מה שיוצר אפקט \"כדור שלג\" של צמיחה אקספוננציאלית לאורך זמן.",
    slug: "compound-interest"
  },
  {
    term: "מדד המחירים לצרכן",
    definition: "מדד סטטיסטי המודד את השינוי הממוצע במחירים של סל מוצרים ושירותים קבוע הנצרך על ידי משקי הבית בישראל. משמש כמדד המרכזי לאינפלציה וכהצמדה להלוואות (כמו משכנתא), חוזים ושכר מסוים.",
    slug: "cpi"
  },
  {
    term: "ריבית פריים",
    definition: "ריבית הבסיס הנקבעת על ידי הבנקים המסחריים, ומוגדרת כיום כריבית בנק ישראל בתוספת מרווח קבוע של 1.5%. משמשת כבסיס לתמחור הלוואות רבות (כולל חלק מהמשכנתא) ופיקדונות בריבית משתנה.",
    slug: "prime-rate"
  },
  // New terms - General Finance & Investment
  {
    term: "אינפלציה",
    definition: "תהליך מתמשך של עליית רמת המחירים הכללית במשק, הגורם לשחיקת כוח הקנייה של המטבע. נמדדת לרוב באמצעות השינוי במדד המחירים לצרכן.",
    slug: "inflation"
  },
  {
    term: "תשואה",
    definition: "הרווח או ההפסד על השקעה לאורך תקופה מסוימת, מבוטא לרוב באחוזים מהסכום המקורי. יכולה לנבוע מעליית ערך הנכס ו/או מקבלת תשלומים (כמו ריבית או דיבידנד).",
    slug: "return-on-investment"
  },
  {
    term: "תשואה ריאלית",
    definition: "התשואה על השקעה לאחר ניכוי השפעת האינפלציה. זוהי התשואה המשקפת את העלייה האמיתית בכוח הקנייה של המשקיע.",
    slug: "real-return"
  },
  {
    term: "תשואה נומינלית",
    definition: "התשואה על השקעה לפני התחשבות בהשפעת האינפלציה. זהו שיעור התשואה הנקוב בדרך כלל.",
    slug: "nominal-return"
  },
  {
    term: "סיכון",
    definition: "אי-ודאות לגבי התשואה העתידית של השקעה, ובפרט האפשרות להפסד חלק מהקרן או כולה. קיים יחס ישיר כללי בין רמת הסיכון לפוטנציאל התשואה.",
    slug: "risk"
  },
  {
    term: "גיוון (פיזור) השקעות",
    definition: "אסטרטגיה להפחתת סיכון על ידי חלוקת ההשקעות בין מספר רב של נכסים שונים (כמו מניות, אג'ח, נדל'ן), סקטורים שונים, אזורים גיאוגרפיים שונים וכו'. המטרה היא לא לשים את כל הביצים בסל אחד.",
    slug: "diversification"
  },
  {
    term: "נזילות",
    definition: "הקלות והמהירות שבה ניתן להמיר נכס למזומן מבלי להשפיע משמעותית על מחירו. מניות בבורסה נחשבות נזילות, בעוד נדל'ן נחשב פחות נזיל.",
    slug: "liquidity"
  },
  {
    term: "אג'ח (איגרת חוב)",
    definition: "נייר ערך המייצג הלוואה שנתן המשקיע לגוף מסוים (ממשלה או חברה). מחזיק האג'ח זכאי לקבל תשלומי ריבית תקופתיים (קופון) ובסוף התקופה לקבל חזרה את ערך הקרן (הערך הנקוב). נחשב לרוב להשקעה סולידית יותר ממניות.",
    slug: "bond"
  },
  {
    term: "מניה (Stock/Share)",
    definition: "נייר ערך המייצג בעלות חלקית בחברה ציבורית. מחזיק המניה הוא שותף בחברה וזכאי לחלק יחסי ברווחיה (כדיבידנד, אם מחולק) ובעליית ערכה הפוטנציאלית.",
    slug: "stock"
  },
  {
    term: "שוק ההון",
    definition: "השוק שבו נסחרים ניירות ערך לטווח ארוך, בעיקר מניות ואג'ח. כולל את הבורסה לניירות ערך ושחקנים נוספים כמו בתי השקעות, קרנות נאמנות ועוד.",
    slug: "capital-market"
  },
  {
    term: "קרן נאמנות",
    definition: "מכשיר השקעה המאגד כספים ממשקיעים רבים ומשקיע אותם בסל מגוון של ניירות ערך (מניות, אג'ח וכו') בהתאם למדיניות השקעה מוגדרת. מנוהלת על ידי מנהל קרן מקצועי וגובה דמי ניהול.",
    slug: "mutual-fund"
  },
  {
    term: "תעודת סל (ETF - Exchange Traded Fund)",
    definition: "סוג של קרן נאמנות הנסחרת בבורסה באופן רציף כמו מניה. לרוב עוקבת אחר מדד מסוים (כמו ת'א 125 או S&P 500) ומתאפיינת בדמי ניהול נמוכים.",
    slug: "etf"
  },
  {
    term: "קופת גמל",
    definition: "תוכנית חיסכון פנסיוני לטווח ארוך המיועדת לשכירים ועצמאים. ההפקדות מושקעות בשוק ההון ומיועדות לתשלום קצבה בגיל פרישה. נהנית מהטבות מס משמעותיות.",
    slug: "provident-fund"
  },
  {
    term: "קרן השתלמות",
    definition: "תוכנית חיסכון לטווח בינוני (6 שנים, או 3 שנים למטרות השתלמות מקצועית) לשכירים ועצמאים. נהנית מפטור ממס רווחי הון על הרווחים (עד תקרה מסוימת) וההפקדות אליה (חלק המעסיק לשכירים, או עד תקרה לעצמאים) מוכרות לעיתים כהוצאה או מזכות בהטבת מס.",
    slug: "study-fund"
  },
  {
    term: "קרן פנסיה",
    definition: "תוכנית חיסכון פנסיוני מקיפה הכוללת גם כיסויים ביטוחיים למקרה נכות (אובדן כושר עבודה) ומוות (פנסיית שארים), בנוסף לקצבת הזקנה בגיל פרישה.",
    slug: "pension-fund"
  },
  {
    term: "דמי ניהול",
    definition: "עמלה שגובה הגוף המנהל (כמו חברת ביטוח או בית השקעות) עבור ניהול החיסכון או ההשקעה שלכם (למשל, בקופת גמל, קרן השתלמות, קרן נאמנות). לרוב מחושבים כאחוז מסך הצבירה ו/או כאחוז מההפקדות השוטפות.",
    slug: "management-fees"
  },
  // New terms - Mortgage Specific
  {
    term: "תמהיל משכנתא",
    definition: "השילוב של מסלולי הלוואה שונים (כמו פריים, קל'צ, ק'צ, משתנה) המרכיבים את הלוואת המשכנתא הכוללת. בניית תמהיל נכון מאפשרת פיזור סיכונים והתאמה אישית.",
    slug: "mortgage-mix"
  },
  {
    term: "ריבית קבועה לא צמודה (קל'צ)",
    definition: "מסלול משכנתא שבו הריבית נשארת קבועה לאורך כל חיי ההלוואה והקרן אינה צמודה למדד המחירים לצרכן. מספק ודאות מלאה אך לרוב עם ריבית התחלתית גבוהה יותר.",
    slug: "fixed-unlinked-rate"
  },
  {
    term: "ריבית קבועה צמודה (ק'צ)",
    definition: "מסלול משכנתא שבו הריבית קבועה, אך הקרן צמודה למדד המחירים לצרכן. ההחזר החודשי יכול לעלות עקב האינפלציה.",
    slug: "fixed-linked-rate"
  },
  {
    term: "ריבית משתנה צמודה (מ'צ)",
    definition: "מסלול משכנתא שבו הקרן צמודה למדד והריבית מתעדכנת כל תקופה קבועה (למשל, כל 5 שנים) לפי עוגן חיצוני בתוספת מרווח.",
    slug: "variable-linked-rate"
  },
  {
    term: "לוח סילוקין שפיצר",
    definition: "שיטת החזר הלוואה נפוצה במשכנתאות, שבה ההחזר החודשי הכולל (קרן+ריבית) נשאר קבוע (במסלולים לא צמודים/משתנים), אך היחס בין תשלום הריבית לתשלום הקרן משתנה לאורך זמן (בהתחלה משלמים יותר ריבית ופחות קרן).",
    slug: "spitzer-amortization-schedule"
  },
  {
    term: "אחוז מימון (LTV - Loan to Value)",
    definition: "היחס באחוזים בין סכום המשכנתא לשווי הנכס הנרכש. בנק ישראל קובע מגבלות על אחוז המימון המקסימלי המותר.",
    slug: "ltv"
  },
  {
    term: "מחזור משכנתא",
    definition: "תהליך של סילוק המשכנתא הקיימת באמצעות לקיחת משכנתא חדשה, לרוב בתנאים טובים יותר (ריבית נמוכה יותר או תמהיל מתאים יותר).",
    slug: "mortgage-refinancing"
  },
  {
    term: "עמלת פירעון מוקדם",
    definition: "קנס שהבנק עשוי לגבות אם הלווה פורע את ההלוואה (או חלק ממנה) לפני תום התקופה, בעיקר במסלולים בריבית קבועה. נועד לפצות את הבנק על הפסד ריבית עתידי.",
    slug: "prepayment-penalty"
  }
];

// Sort terms alphabetically
glossaryTerms.sort((a, b) => a.term.localeCompare(b.term, 'he'));

export default function GlossaryPage() {

  // Group terms by the first letter
  const groupedTerms = useMemo(() => {
    return glossaryTerms.reduce((acc, item) => {
      const firstLetter = item.term[0].toUpperCase(); // Use uppercase for consistency
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(item);
      return acc;
    }, {});
  }, []); // Dependency array is empty as glossaryTerms is constant within the module scope

  const alphabet = useMemo(() => Object.keys(groupedTerms).sort((a,b) => a.localeCompare(b, 'he')), [groupedTerms]);

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
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <BookOpen className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">מילון מונחים פיננסיים</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">הסברים פשוטים וברורים למושגים החשובים בעולם הפיננסים</p>
          </div>

          {/* Alphabet Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-4 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm py-3 z-10 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            {alphabet.map((letter) => (
              <a 
                key={letter}
                href={`#letter-${letter}`}
                className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                // Smooth scroll might require JS, keeping it simple with href for now
              >
                {letter}
              </a>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-10">
              {/* Iterate through grouped terms */}
              {alphabet.map((letter) => (
                <section key={letter} id={`letter-${letter}`}>
                  <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 border-b border-blue-200 dark:border-blue-800 pb-2 mb-6">
                    {letter}
                  </h2>
                  <div className="space-y-8">
                    {groupedTerms[letter].map((item) => (
                      <div key={item.slug || item.term} id={item.slug || item.term} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{item.term}</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 