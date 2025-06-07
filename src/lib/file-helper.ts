import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { PostMetadata } from '@/types';

export const getBlogPostList = async () => {
  const fileNames = await readDirectory('/content');

  const blogPosts: PostMetadata[] = [];

  for (const fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    const newPost: PostMetadata = {
      slug: fileName.replace('.mdx', '') as string,
      ...frontmatter,
    } as PostMetadata

    blogPosts.push(newPost);
  }

  return blogPosts.sort((p1, p2) =>
    p1.publishedOn < p2.publishedOn ? 1 : -1
  );
}

export const loadBlogPost = async (slug: string) => {
  const rawContent = await readFile(`/content/${slug}.mdx`);
  const { data: frontmatter, content } = matter(rawContent);
  return {
    frontmatter,
    content,
  }
}

export const readFile = (localPath: string) => {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8')
}

export const readDirectory = (localPath: string) => {
  return fs.readdir(path.join(process.cwd(), localPath))
}