export * from './api';
export * from './common';
export * from './schemas';

/**
 * Canonical list of content collections the SDK exposes and the future API
 * serves. Keep in sync with `resources` in `@agency/sdk`.
 */
export const CONTENT_COLLECTIONS = [
  'services',
  'blog',
  'portfolio',
  'caseStudies',
  'testimonials',
  'faqs',
  'industries',
  'team',
] as const;
export type ContentCollection = (typeof CONTENT_COLLECTIONS)[number];
