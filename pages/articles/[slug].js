import React from 'react';
import { useRouter } from 'next/router';
import { getAllArticles, getArticleBySlug } from '../../utils/articles';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Callout, InfoBox, WarningBox, TipBox } from '../../components/Boxes';
import { Table } from '../../components/Table';

const components = {
  Callout,
  InfoBox,
  WarningBox,
  TipBox,
  Table
};

export default function ArticlePage({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(article.date).toLocaleDateString('he-IL')}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readingTime}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none prose-blue">
              <MDXRemote {...article.content} components={components} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">תגיות</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);
  const mdxSource = await serialize(article.content);
  return {
    props: {
      article: {
        ...article,
        content: mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const articles = getAllArticles();
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));
  return {
    paths,
    fallback: false,
  };
} 