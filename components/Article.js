import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { formatDate } from '../utils/date';
import { Callout, InfoBox, WarningBox, TipBox } from './Boxes';
import { Table } from './Table';

export default function Article({ article }) {
  const router = useRouter();
  const canonicalUrl = `https://yourdomain.com${router.asPath}`;
  
  // Generate schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || "https://yourdomain.com/images/default-article.jpg",
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "Your Company Name"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png"
      }
    }
  };

  return (
    <>
      <Head>
        <title>{article.title} | Your Company Name</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.tags.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image || "https://yourdomain.com/images/default-article.jpg"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.image || "https://yourdomain.com/images/default-article.jpg"} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="mx-2">•</span>
            <span>{article.readingTime} קריאה</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {article.content}
        </div>

        <footer className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Your Company Name. כל הזכויות שמורות.
            </div>
            <div className="text-sm text-gray-600">
              עודכן לאחרונה: {formatDate(article.date)}
            </div>
          </div>
        </footer>
      </article>
    </>
  );
} 