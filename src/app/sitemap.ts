import type {MetadataRoute} from 'next'
import {getBlogPostList} from '@/lib/file-helper';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = 'https://juliorafre.com'
  const blogPosts = await getBlogPostList();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseURL}/crafts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseURL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  const generatedBlogPostsEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedOn),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticPages, ...generatedBlogPostsEntries];
}
