import type { SiteSettings } from '@agency/types';
import { makeResource } from './resource';
import type { ContentClient, Transport } from './types';

export interface CreateContentClientOptions {
  transport: Transport;
}

/**
 * Builds the typed content client every page reads from. The transport decides
 * where the data actually comes from (fixtures now, HTTP later).
 */
export function createContentClient({ transport }: CreateContentClientOptions): ContentClient {
  return {
    services: makeResource('services', transport),
    blog: makeResource('blog', transport),
    portfolio: makeResource('portfolio', transport),
    caseStudies: makeResource('caseStudies', transport),
    testimonials: makeResource('testimonials', transport),
    faqs: makeResource('faqs', transport),
    industries: makeResource('industries', transport),
    team: makeResource('team', transport),
    async getSiteSettings(): Promise<SiteSettings | null> {
      const env = await transport.request<SiteSettings>({
        collection: 'siteSettings',
        kind: 'get',
        slugOrId: 'site-settings',
      });
      return env.success ? (env.data ?? null) : null;
    },
  };
}
