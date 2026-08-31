import type { ListParams, Service } from '@agency/types';
import { content } from './client';

export async function getServices(params?: ListParams) {
  return content.services.list({ sortBy: 'order', sortOrder: 'asc', limit: 100, ...params });
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return content.services.get(slug);
}

export async function getFeaturedServices(limit = 10): Promise<Service[]> {
  const { items } = await content.services.list({ sortBy: 'order', sortOrder: 'asc', limit });
  return items;
}

export async function getServiceSlugs(): Promise<string[]> {
  const { items } = await content.services.list({ limit: 100 });
  return items.map((s) => s.slug);
}
