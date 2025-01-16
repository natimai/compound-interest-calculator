import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex mb-4 text-sm text-gray-600 dark:text-gray-400" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 space-x-reverse">
        <li>
          <Link href="/" className="hover:text-blue-600">
            דף הבית
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronLeft className="w-4 h-4 mx-2" />
            {index === items.length - 1 ? (
              <span className="text-gray-900 dark:text-gray-200">{item.title}</span>
            ) : (
              <Link href={item.href} className="hover:text-blue-600">
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}; 