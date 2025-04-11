import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getAllArticles } from '../../utils/articles';
import { BookOpen } from 'lucide-react';

export default function ArticlesPage({ articles }) {
  const [selectedCategory, setSelectedCategory] = useState('הכל');

  const categories = useMemo(() => {
    const uniqueCategories = ['הכל', ...new Set(articles.map(article => article.category).filter(Boolean))];
    return uniqueCategories;
  }, [articles]);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'הכל') {
      return articles;
    }
    return articles.filter(article => article.category === selectedCategory);
  }, [articles, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">מאמרים ומידע</h1>
          <p className="text-xl text-gray-600">מידע מקצועי ועדכני על השקעות, פיננסים וניהול סיכונים</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                  <div className="p-6 flex-grow">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full mb-2">
                        {article.category}
                    </span>
                    <div className="flex items-center justify-between mb-4 text-gray-500 text-sm">
                      <span>{new Date(article.date).toLocaleDateString('he-IL')}</span>
                      <span>{article.readingTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <span className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      קרא עוד →
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">לא נמצאו מאמרים בקטגוריה שנבחרה.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const articles = getAllArticles();
  return {
    props: {
      articles,
    },
  };
} 