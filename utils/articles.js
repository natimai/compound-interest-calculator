import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

function formatDate(date) {
  if (!date) {
    return new Date().toISOString(); // Fallback to current date as ISO string
  }
  if (date instanceof Date) {
    return date.toISOString(); // Convert Date object to ISO string
  }
  // Try to parse the date string and return as ISO string
  try {
    return new Date(date).toISOString();
  } catch (e) {
    console.error(`Error formatting date: ${date}`, e);
    return new Date().toISOString(); // Fallback on parsing error
  }
}

export function getAllArticles() {
  let fileNames = [];
  try {
    fileNames = fs.readdirSync(articlesDirectory);
  } catch (error) {
      console.error("Error reading articles directory:", error);
      return []; // Return empty array if directory read fails
  }
  
  const articles = fileNames
    .filter((fileName) => /\.(mdx|md)$/.test(fileName)) // Filter for .mdx or .md files
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, ''); // Remove either extension
      const fullPath = path.join(articlesDirectory, fileName);
      let fileContents = '';
      try {
          fileContents = fs.readFileSync(fullPath, 'utf8');
      } catch (error) {
          console.error(`Error reading file ${fileName}:`, error);
          return null; // Skip this file if read fails
      }
      
      let data = {};
      let content = '';
      try {
        const parsed = matter(fileContents);
        data = parsed.data;
        content = parsed.content;
      } catch (e) {
        console.error(`Error parsing frontmatter for ${fileName}:`, e);
        data = { title: slug }; 
      }

      let description = data.description;
      if (!description && content) {
        const firstParagraphMatch = content.match(/^([^#\n].*?)(\n\n|$)/s);
        if (firstParagraphMatch) {
          description = firstParagraphMatch[1].replace(/\*\*/g, '').trim();
        }
      }

      const readingTime = data.readingTime || estimateReadingTime(content);

      return {
        slug,
        title: data.title || '',
        date: formatDate(data.date),
        readingTime: readingTime || null,
        tags: data.tags || [],
        category: data.category || 'כללי',
        description: description || '',
      };
    })
    .filter(article => article !== null); // Remove null entries from failed reads

  return articles.sort((a, b) => {
    try {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        return 0;
      }
      return dateB - dateA;
    } catch (e) {
      console.error(`Error comparing dates: ${a.date}, ${b.date}`, e);
      return 0;
    }
  });
}

export function getArticleBySlug(slug) {
  const mdxPath = path.join(articlesDirectory, `${slug}.mdx`);
  const mdPath = path.join(articlesDirectory, `${slug}.md`);
  let fullPath = '';

  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    console.error(`Article file not found for slug: ${slug} (checked .mdx and .md)`);
    throw new Error(`Article file not found for slug: ${slug}`);
  }

  console.log(`Attempting to read file: ${fullPath}`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log(`Successfully read file: ${path.basename(fullPath)}`);
    const { data, content } = matter(fileContents);
    console.log(`Successfully parsed frontmatter for: ${slug}`);

    let description = data.description;
    if (!description && content) {
      const firstParagraphMatch = content.match(/^([^#\n].*?)(\n\n|$)/s);
      if (firstParagraphMatch) {
        description = firstParagraphMatch[1].replace(/\*\*/g, '').trim();
      }
    }

    const readingTime = data.readingTime || estimateReadingTime(content);

    console.log(`Content for ${slug} before returning (first 100 chars):`, content.substring(0, 100));

    return {
      slug,
      title: data.title || '',
      date: formatDate(data.date),
      readingTime: readingTime || null,
      tags: data.tags || [],
      description: description || '',
      content,
    };
  } catch (error) {
    console.error(`Error processing file ${path.basename(fullPath)}:`, error);
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