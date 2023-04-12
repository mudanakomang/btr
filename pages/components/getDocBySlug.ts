import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

export default function getDocBySlug(slug, locale='en'){
    const fullPath = path.join(process.cwd(), 'pages/md', locale, `${slug}.md`);
    
    // const realSlug = slug.replace(/\.mdx$/, '');
    // const fullPath = path.join(fullDir, `${realSlug}.${locale}.mdx`);
     const fileContents = fs.readFileSync(fullPath, 'utf8');
     const { content, data } = matter(fileContents);
  
    return { meta: data, content };
   
}
