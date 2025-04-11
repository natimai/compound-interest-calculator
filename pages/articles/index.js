import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getAllArticles } from '../../utils/articles';

export default function ArticlesPage({ articles }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">מאמרים</h1>
          <p className="text-xl text-gray-600">מידע מקצועי ועדכני על השקעות ופיננסים</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString('he-IL')}</span>
                    <span className="text-sm text-gray-500">{article.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
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
          ))}
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