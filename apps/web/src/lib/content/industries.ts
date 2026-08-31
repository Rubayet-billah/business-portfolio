import type { Industry } from '@agency/types';
import { content } from './client';

export async function getIndustries(): Promise<Industry[]> {
  const { items } = await content.industries.list({ sortBy: 'order', sortOrder: 'asc', limit: 100 });
  return items;
}

export async function getIndustry(slug: string): Promise<Industry | null> {
  return content.industries.get(slug);
}
