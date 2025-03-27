import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SinglePost() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // אם ה-slug לא זמין עדיין, לא נבצע בקשה
    if (!slug) return;

    async function fetchPost() {
      try {
        const response = await fetch(`/api/getPost?slug=${slug}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('הפוסט המבוקש לא נמצא');
          }
          throw new Error(`שגיאה בטעינת הפוסט: ${response.statusText}`);
        }
        
        const data = await response.json();
        setPost(data.post);
        setError(null);
      } catch (err) {
        console.error('שגיאה בטעינת הפוסט:', err);
        setError(err.message || 'לא ניתן היה לטעון את הפוסט. אנא נסו שוב מאוחר יותר.');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  // מחלק את התוכן לפסקאות
  const formatContent = (content) => {
    if (!content) return '';
    return content.split('\n').map((paragraph, index) => (
      paragraph.trim() && <p key={index} className="mb-4">{paragraph}</p>
    ));
  };

  // בנייה של ה-SEO בהתאם לפוסט הנטען
  const renderSEO = () => {
    if (!post) {
      return (
        <NextSeo
          title="טוען פוסט... | דריבית"
          description="מאמרים ומדריכים בתחום הפיננסי"
          noindex={true}
        />
      );
    }

    return (
      <NextSeo
        title={`${post.title} | דריבית`}
        description={post.content.substring(0, 160)}
        canonical={`https://www.deribit.co.il/api-posts/${post.slug}`}
        openGraph={{
          title: `${post.title} | דריבית`,
          description: post.content.substring(0, 160),
          url: `https://www.deribit.co.il/api-posts/${post.slug}`,
          type: 'article',
          article: {
            publishedTime: post.date,
            modifiedTime: post.date,
            section: post.type || 'מאמר',
          },
          site_name: "דריבית"
        }}
      />
    );
  };

  return (
    <>
      {renderSEO()}

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/api-posts" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 flex items-center gap-1">
              <ArrowRight className="w-4 h-4" />
              חזרה לכל המאמרים
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
              <p className="mt-4 text-lg">טוען את המאמר...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-4 rounded-md mb-6">
              <h2 className="text-xl font-bold mb-2">שגיאה</h2>
              <p>{error}</p>
              <div className="mt-4">
                <Link href="/api-posts" className="text-blue-600 dark:text-blue-400 hover:underline">
                  חזרה לכל המאמרים
                </Link>
              </div>
            </div>
          ) : post ? (
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
              
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                פורסם: {new Date(post.date).toLocaleDateString('he-IL')}
                {post.type && <span className="mr-4">סוג: {post.type}</span>}
              </div>
              
              <div className="text-gray-800 dark:text-gray-200 space-y-4 leading-relaxed">
                {formatContent(post.content)}
              </div>
            </article>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600 dark:text-gray-400">לא נמצא פוסט עם המזהה המבוקש.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 