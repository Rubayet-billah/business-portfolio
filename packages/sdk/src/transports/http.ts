import type { ApiEnvelope, ListParams } from '@agency/types';
import type { Transport, TransportCollection, TransportRequest } from '../types';

/**
 * HTTP transport against the Express API (wired in Stage 3b). Not used yet —
 * it exists so the swap in `apps/web/src/lib/content/client.ts` is a one-liner.
 *
 * Lifted from the resilience pattern in jikmunn-portfolio's `fetchEnvelope`:
 * timeout, graceful degradation, envelope pass-through.
 */

const ENDPOINT: Record<Exclude<TransportCollection, 'siteSettings'>, string> = {
  services: 'services',
  blog: 'blog',
  portfolio: 'portfolio',
  caseStudies: 'case-studies',
  testimonials: 'testimonials',
  faqs: 'faq',
  industries: 'industries',
  team: 'team',
};

export interface HttpTransportOptions {
  baseUrl: string;
  /** Next.js ISR revalidation seconds for GETs. */
  revalidate?: number;
  timeoutMs?: number;
}

function toQuery(params: ListParams | undefined): string {
  if (!params) return '';
  const sp = new URLSearchParams();
  if (params.page) sp.set('page', String(params.page));
  if (params.limit) sp.set('limit', String(params.limit));
  if (params.search) sp.set('searchTerm', params.search);
  if (params.category) sp.set('category', params.category);
  sp.set('sortBy', params.sortBy ?? 'order');
  sp.set('sortOrder', params.sortOrder ?? 'asc');
  const s = sp.toString();
  return s ? `?${s}` : '';
}

export function httpTransport(options: HttpTransportOptions): Transport {
  const base = options.baseUrl.replace(/\/$/, '');
  const timeoutMs = options.timeoutMs ?? 10_000;

  async function call<T>(path: string): Promise<ApiEnvelope<T>> {
    try {
      // `next` is a Next.js extension to RequestInit; typed loosely so the SDK
      // does not need to depend on Next's ambient types.
      const init: RequestInit & { next?: { revalidate?: number } } = {
        signal: AbortSignal.timeout(timeoutMs),
      };
      if (options.revalidate != null) init.next = { revalidate: options.revalidate };
      const res = await fetch(`${base}${path}`, init);
      if (!res.ok) throw new Error(`${path} -> ${res.status}`);
      return (await res.json()) as ApiEnvelope<T>;
    } catch {
      return { success: false, data: null as unknown as T };
    }
  }

  return {
    async request<T>(req: TransportRequest) {
      if (req.collection === 'siteSettings') {
        return call<T>('/site-settings/public');
      }
      const resource = ENDPOINT[req.collection];
      if (req.kind === 'get') {
        return call<T>(`/${resource}/public/${encodeURIComponent(req.slugOrId)}`);
      }
      return call<T>(`/${resource}/public${toQuery(req.params)}`);
    },
  };
}
