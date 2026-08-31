import type { CaseStudy, ListParams } from '@agency/types';
import { content } from './client';

export async function getCaseStudies(params?: ListParams) {
  return content.caseStudies.list({ sortBy: 'publishedAt', sortOrder: 'desc', ...params });
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  return content.caseStudies.get(slug);
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const { items } = await content.caseStudies.list({ limit: 100 });
  return items.map((c) => c.slug);
}
