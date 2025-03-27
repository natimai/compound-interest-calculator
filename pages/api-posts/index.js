import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function ApiPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/getPosts');
        if (!response.ok) {
          throw new Error(`שגיאה בטעינת הפוסטים: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data.posts || []);
        setError(null);
      } catch (err) {
        console.error('שגיאה בטעינת הפוסטים:', err);
        setError('לא ניתן היה לטעון את הפוסטים. אנא נסו שוב מאוחר יותר.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <NextSeo
        title="פוסטים ומאמרים | דריבית"
        description="הפוסטים והמאמרים העדכניים ביותר שלנו בנושאי השקעות, פיננסים, וחיסכון"
        canonical="https://www.deribit.co.il/api-posts"
        openGraph={{
          title: "פוסטים ומאמרים | דריבית",
          description: "הפוסטים והמאמרים העדכניים ביותר שלנו בנושאי השקעות, פיננסים, וחיסכון",
          url: "https://www.deribit.co.il/api-posts",
          site_name: "דריבית"
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">פוסטים ומאמרים</h1>

          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
              <p className="mt-4 text-lg">טוען פוסטים...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-4 rounded-md text-center">
              {error}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600 dark:text-gray-400">אין עדיין פוסטים במערכת.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map(post => (
                <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(post.date).toLocaleDateString('he-IL')}
                    </p>
                    <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                    <div className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                      {post.content.slice(0, 150)}...
                    </div>
                    <Link 
                      href={`/api-posts/${post.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      קרא עוד
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
} 