import type { BlogPost, ListParams } from '@agency/types';
import { content } from './client';

export async function getBlogPosts(params?: ListParams) {
  return content.blog.list({ sortBy: 'publishedAt', sortOrder: 'desc', ...params });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return content.blog.get(slug);
}

export async function getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  const { items } = await content.blog.list({ sortBy: 'publishedAt', sortOrder: 'desc', limit: 50 });
  const featured = items.filter((p) => p.featured);
  return (featured.length ? featured : items).slice(0, limit);
}

export async function getBlogSlugs(): Promise<string[]> {
  const { items } = await content.blog.list({ limit: 200 });
  return items.map((p) => p.slug);
}

export async function getBlogCategories(): Promise<string[]> {
  const { items } = await content.blog.list({ limit: 200 });
  return [...new Set(items.map((p) => p.category))].sort();
}
