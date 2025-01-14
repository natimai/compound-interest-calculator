import { useState } from 'react'
import Link from 'next/link'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* תפריט ראשי */}
        <div className="relative flex items-center justify-between h-16">
          {/* כפתור המבורגר למובייל */}
          <div className="absolute right-0 inset-y-0 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">פתח תפריט</span>
              {/* אייקון המבורגר */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* אייקון X */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* לוגו במרכז */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              DeRibit
            </Link>
          </div>

          {/* תפריט למסך גדול */}
          <div className="hidden md:flex md:items-center md:space-x-8 absolute left-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              מחשבון ריבית דריבית
            </Link>
            <Link 
              href="/investment-products" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              מוצרי השקעה
            </Link>
            <Link 
              href="/guides" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              מדריכים
            </Link>
            <Link 
              href="/gross-to-net" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              מחשבון ברוטו לנטו
            </Link>
          </div>
        </div>

        {/* תפריט מובייל */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              מחשבון ריבית דריבית
            </Link>
            <Link 
              href="/investment-products" 
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              מוצרי השקעה
            </Link>
            <Link 
              href="/guides" 
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              מדריכים
            </Link>
            <Link 
              href="/gross-to-net" 
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              מחשבון ברוטו לנטו
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
