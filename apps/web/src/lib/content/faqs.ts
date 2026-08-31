import type { Faq } from '@agency/types';
import { content } from './client';

export async function getFaqs(): Promise<Faq[]> {
  const { items } = await content.faqs.list({ sortBy: 'order', sortOrder: 'asc', limit: 100 });
  return items;
}

export async function getFaqsByScope(scope: Faq['scope']): Promise<Faq[]> {
  const all = await getFaqs();
  return all.filter((f) => f.scope === scope);
}

export async function getFaqsForService(serviceSlug: string): Promise<Faq[]> {
  const all = await getFaqs();
  return all.filter((f) => f.serviceSlug === serviceSlug);
}
