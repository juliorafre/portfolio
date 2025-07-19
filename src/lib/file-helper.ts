'use server';

import fs from 'fs/promises';
import matter from 'gray-matter';
import { unstable_cache } from 'next/cache';
import path from 'path';
import type { PostMetadata } from '@/types';

export const getBlogPostList = unstable_cache(
  async () => {
    const fileNames = await readDirectory('/content');

    const blogPosts: PostMetadata[] = [];

    for (const fileName of fileNames) {
      const rawContent = await readFile(`/content/${fileName}`);

      const { data: frontmatter } = matter(rawContent);

      if (frontmatter.published === false) {
        continue;
      }

      const newPost: PostMetadata = {
        slug: fileName.replace('.mdx', '') as string,
        ...frontmatter,
      } as PostMetadata;

      blogPosts.push(newPost);
    }

    return blogPosts.sort((p1, p2) =>
      p1.publishedOn < p2.publishedOn ? 1 : -1
    );
  },
  ['blog-post-list'],
  {
    revalidate: 86_400, // Revalidate every day
    tags: ['blog-posts'],
  }
);

export const loadBlogPost = unstable_cache(
  async (slug: string) => {
    const rawContent = await readFile(`/content/${slug}.mdx`);
    const { data: frontmatter, content } = matter(rawContent);
    return {
      frontmatter,
      content,
    };
  },
  ['blog-post'],
  {
    revalidate: 86_400, // Revalidate every day
    tags: ['blog-posts'],
  }
);

export const readFile = async (localPath: string) => {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
};

export const readDirectory = async (localPath: string) => {
  return fs.readdir(path.join(process.cwd(), localPath));
};
