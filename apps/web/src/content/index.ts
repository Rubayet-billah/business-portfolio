import type { FixtureDataset } from '@agency/sdk';
import { services } from './services';
import { blog } from './blog';
import { portfolio } from './portfolio';
import { caseStudies } from './case-studies';
import { testimonials } from './testimonials';
import { faqs } from './faqs';
import { industries } from './industries';
import { team } from './team';
import { siteSettings } from './site-settings';

/**
 * The placeholder dataset the fixture transport is seeded with. When the
 * Express API lands (Stage 3b) this file becomes the source for a one-off
 * database seed and is no longer imported at runtime — the swap happens in
 * `@/lib/content/client.ts`, not here.
 */
export const dataset: FixtureDataset = {
  services,
  blog,
  portfolio,
  caseStudies,
  testimonials,
  faqs,
  industries,
  team,
  siteSettings,
};
