import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract the first paragraph as description if not provided
    let description = data.description;
    if (!description) {
      const firstParagraph = content.split('\n\n')[0];
      description = firstParagraph.replace(/^#+\s+/, '').trim();
    }

    return {
      slug,
      title: data.title,
      date: data.date,
      readingTime: data.readingTime,
      tags: data.tags || [],
      description,
      content,
    };
  });

  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Extract the first paragraph as description if not provided
  let description = data.description;
  if (!description) {
    const firstParagraph = content.split('\n\n')[0];
    description = firstParagraph.replace(/^#+\s+/, '').trim();
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    readingTime: data.readingTime,
    tags: data.tags || [],
    description,
    content,
  };
} 