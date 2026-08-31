import type { ApiMeta, ListParams } from '@agency/types';
import { DEFAULT_PAGE_SIZE } from '@agency/types';
import type { FixtureDataset, Transport, TransportRequest } from '../types';

const SEARCH_KEYS = [
  'title',
  'name',
  'question',
  'answer',
  'quote',
  'excerpt',
  'summary',
  'tagline',
  'shortDescription',
  'description',
  'client',
  'company',
  'authorName',
  'blurb',
  'category',
] as const;

function toSearchText(item: Record<string, unknown>): string {
  return SEARCH_KEYS.map((k) => (typeof item[k] === 'string' ? (item[k] as string) : ''))
    .join(' ')
    .toLowerCase();
}

function compare(a: unknown, b: unknown): number {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a ?? '').localeCompare(String(b ?? ''));
}

function paginate<T>(rows: T[], params: ListParams | undefined): { items: T[]; meta: ApiMeta } {
  const page = Math.max(1, params?.page ?? 1);
  const limit = Math.max(1, params?.limit ?? DEFAULT_PAGE_SIZE);
  const total = rows.length;
  const start = (page - 1) * limit;
  return {
    items: rows.slice(start, start + limit),
    meta: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) },
  };
}

function applyList<T extends Record<string, unknown>>(all: T[], params?: ListParams) {
  let rows = [...all];

  const status = params?.status ?? 'published';
  rows = rows.filter((r) => (r.status ?? 'published') === status);

  if (params?.category) {
    rows = rows.filter((r) => String(r.category ?? '') === params.category);
  }

  if (params?.search) {
    const q = params.search.toLowerCase().trim();
    rows = rows.filter((r) => toSearchText(r).includes(q));
  }

  const sortBy = params?.sortBy ?? 'order';
  const dir = params?.sortOrder === 'desc' ? -1 : 1;
  rows.sort((a, b) => compare(a[sortBy], b[sortBy]) * dir);

  return paginate(rows, params);
}

/**
 * In-memory transport over typed fixture data. Same envelope shape the HTTP
 * transport produces, so the site behaves identically when the real API lands.
 */
export function fixtureTransport(dataset: FixtureDataset): Transport {
  const collections: Record<string, Array<Record<string, unknown>>> = {
    services: dataset.services as unknown as Array<Record<string, unknown>>,
    blog: dataset.blog as unknown as Array<Record<string, unknown>>,
    portfolio: dataset.portfolio as unknown as Array<Record<string, unknown>>,
    caseStudies: dataset.caseStudies as unknown as Array<Record<string, unknown>>,
    testimonials: dataset.testimonials as unknown as Array<Record<string, unknown>>,
    faqs: dataset.faqs as unknown as Array<Record<string, unknown>>,
    industries: dataset.industries as unknown as Array<Record<string, unknown>>,
    team: dataset.team as unknown as Array<Record<string, unknown>>,
  };

  return {
    async request<T>(req: TransportRequest) {
      if (req.collection === 'siteSettings') {
        return { success: true, data: dataset.siteSettings as unknown as T };
      }

      const rows = collections[req.collection] ?? [];

      if (req.kind === 'get') {
        const found =
          rows.find((r) => r.slug === req.slugOrId || r.id === req.slugOrId) ?? null;
        return {
          success: found != null,
          message: found ? undefined : 'Not found',
          data: found as unknown as T,
        };
      }

      const { items, meta } = applyList(rows, req.params);
      return { success: true, data: items as unknown as T, meta };
    },
  };
}
