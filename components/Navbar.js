import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                DeRibit
              </Link>
            </div>
            <div className="hidden md:mr-8 md:flex md:space-x-8 md:items-center">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}