import { useState, useEffect } from 'react';
import { 
  Eye, 
  Type, 
  ZoomIn, 
  ZoomOut, 
  Minimize2, 
  X,
  ChevronUp,
  MousePointer2,
  Link2,
  Underline,
  Accessibility as AccessibilityIcon
} from 'lucide-react';

export const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [biggerCursor, setBiggerCursor] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [lineSpacing, setLineSpacing] = useState(1);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  // טעינת העדפות משתמש
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      setFontSize(settings.fontSize || 100);
      setHighContrast(settings.highContrast || false);
      setBiggerCursor(settings.biggerCursor || false);
      setHighlightLinks(settings.highlightLinks || false);
      setLineSpacing(settings.lineSpacing || 1);
      setDyslexicFont(settings.dyslexicFont || false);
      setIsHidden(settings.isHidden || false);
    }
  }, []);

  // שמירת העדפות משתמש
  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify({
      fontSize,
      highContrast,
      biggerCursor,
      highlightLinks,
      lineSpacing,
      dyslexicFont,
      isHidden
    }));

    // עדכון הסגנונות
    document.documentElement.style.fontSize = `${fontSize}%`;
    document.documentElement.style.lineHeight = lineSpacing;
    
    // עדכון המחלקות
    const classList = document.documentElement.classList;
    highContrast ? classList.add('high-contrast') : classList.remove('high-contrast');
    biggerCursor ? classList.add('bigger-cursor') : classList.remove('bigger-cursor');
    highlightLinks ? classList.add('highlight-links') : classList.remove('highlight-links');
    dyslexicFont ? classList.add('dyslexic-font') : classList.remove('dyslexic-font');
    
  }, [fontSize, highContrast, biggerCursor, highlightLinks, lineSpacing, dyslexicFont, isHidden]);

  if (isHidden) {
    return (
      <button
        onClick={() => setIsHidden(false)}
        className="fixed left-4 bottom-4 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
        aria-label="הצג אפשרויות נגישות"
      >
        <AccessibilityIcon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
        aria-label={isOpen ? 'סגור אפשרויות נגישות' : 'פתח אפשרויות נגישות'}
      >
        <AccessibilityIcon className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">הגדרות נגישות</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="סגור תפריט"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between mb-2">
                <span>גודל טקסט</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFontSize(prev => Math.min(prev + 10, 150))}
                    className="p-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                    aria-label="הגדל טקסט"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setFontSize(prev => Math.max(prev - 10, 80))}
                    className="p-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                    aria-label="הקטן טקסט"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setFontSize(100)}
                    className="p-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                    aria-label="אפס גודל טקסט"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                </div>
              </label>
            </div>

            <div>
              <label className="flex items-center justify-between mb-2">
                <span>ריווח בין שורות</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLineSpacing(prev => Math.min(prev + 0.2, 2))}
                    className="p-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                    aria-label="הגדל ריווח"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setLineSpacing(1)}
                    className="p-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                    aria-label="אפס ריווח"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                </div>
              </label>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="rounded"
                />
                <span>ניגודיות גבוהה</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={biggerCursor}
                  onChange={(e) => setBiggerCursor(e.target.checked)}
                  className="rounded"
                />
                <span>סמן עכבר מוגדל</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={highlightLinks}
                  onChange={(e) => setHighlightLinks(e.target.checked)}
                  className="rounded"
                />
                <span>הדגשת קישורים</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={dyslexicFont}
                  onChange={(e) => setDyslexicFont(e.target.checked)}
                  className="rounded"
                />
                <span>גופן מותאם דיסלקציה</span>
              </label>
            </div>

            <div className="pt-4 border-t">
              <button
                onClick={() => setIsHidden(true)}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                הסתר כפתור נגישות
              </button>
            </div>

            <div>
              <a
                href="/accessibility-statement"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                הצהרת נגישות
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 