import type { ListParams, PortfolioItem } from '@agency/types';
import { content } from './client';

export async function getPortfolioItems(params?: ListParams) {
  return content.portfolio.list({ sortBy: 'order', sortOrder: 'asc', limit: 60, ...params });
}

export async function getPortfolioItem(slug: string): Promise<PortfolioItem | null> {
  return content.portfolio.get(slug);
}

export async function getPortfolioByService(
  serviceSlug: string,
  limit = 3
): Promise<PortfolioItem[]> {
  const { items } = await content.portfolio.list({ limit: 60 });
  return items.filter((p) => p.serviceSlug === serviceSlug).slice(0, limit);
}

export async function getPortfolioDisciplines(): Promise<string[]> {
  const { items } = await content.portfolio.list({ limit: 60 });
  return [...new Set(items.map((p) => p.discipline))].sort();
}
