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
    let data = {};
    let content = '';
    try {
      const parsed = matter(fileContents);
      data = parsed.data;
      content = parsed.content;
    } catch (e) {
      console.error(`Error parsing frontmatter for ${fileName}:`, e);
      // Provide default data if parsing fails
      data = { title: slug }; // Use slug as fallback title
    }

    // Extract the first paragraph as description if not provided
    let description = data.description;
    if (!description && content) {
      const firstParagraphMatch = content.match(/^([^#\n].*?)(\n\n|$)/s);
      if (firstParagraphMatch) {
        description = firstParagraphMatch[1].replace(/\*\*/g, '').trim();
      }
    }

    // Calculate reading time if not provided
    const readingTime = data.readingTime || estimateReadingTime(content);

    return {
      slug,
      title: data.title || '', // Provide empty string as fallback title
      date: data.date || new Date().toISOString(), // Provide current date as fallback
      readingTime: readingTime || null, // Ensure it's serializable, use null as fallback
      tags: data.tags || [],
      description: description || '', // Ensure description is always a string
    };
  });

  return articles.sort((a, b) => {
    // Handle cases where date might be invalid
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      return 0; // Don't sort if dates are invalid
    }
    return dateB - dateA;
  });
}

export function getArticleBySlug(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  console.log(`Attempting to read file: ${fullPath}`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log(`Successfully read file: ${slug}.mdx`);
    const { data, content } = matter(fileContents);
    console.log(`Successfully parsed frontmatter for: ${slug}.mdx`);

    // Extract the first paragraph as description if not provided
    let description = data.description;
    if (!description && content) {
      const firstParagraphMatch = content.match(/^([^#\n].*?)(\n\n|$)/s);
      if (firstParagraphMatch) {
        description = firstParagraphMatch[1].replace(/\*\*/g, '').trim();
      }
    }
    
    const readingTime = data.readingTime || estimateReadingTime(content);

    // Log the content before returning to ensure frontmatter is removed
    console.log(`Content for ${slug} before returning (first 100 chars):`, content.substring(0, 100));

    return {
      slug,
      title: data.title || '', // Add fallback for title
      date: data.date || new Date().toISOString(), // Add fallback for date
      readingTime: readingTime || null, // Ensure readingTime is serializable
      tags: data.tags || [],
      description: description || '', 
      content, // Content is needed for the individual article page
    };
  } catch (error) {
    console.error(`Error processing file ${slug}.mdx:`, error);
    // It might be better to return null or an error object here
    // so getStaticProps can handle it (e.g., return notFound: true)
    // For now, rethrowing to see the error.
    throw new Error(`Failed to process article ${slug}: ${error.message}`);
  }
}

function estimateReadingTime(text) {
  if (!text) return 'N/A';
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} דק' קריאה`;
} 