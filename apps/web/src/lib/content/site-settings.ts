import { cache } from 'react';
import type { SiteSettings } from '@agency/types';
import { content } from './client';
import { siteSettings as fallback } from '@/content/site-settings';

/**
 * Site-wide editorial settings (nav, socials, contact, headline stats).
 * `cache()` de-dupes the lookup within a single render pass. Falls back to the
 * local fixture if the transport ever returns nothing, so layout never breaks.
 */
export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const settings = await content.getSiteSettings();
  return settings ?? fallback;
});
