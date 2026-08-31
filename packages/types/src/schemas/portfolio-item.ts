import { z } from 'zod';
import { baseEntitySchema, imageSchema, seoSchema } from '../common';

export const portfolioItemSchema = baseEntitySchema.extend({
  slug: z.string(),
  title: z.string(),
  client: z.string(),
  summary: z.string(),
  /** Which service produced this work, e.g. "web-design-and-development". */
  serviceSlug: z.string().optional(),
  industry: z.string().optional(),
  discipline: z.enum(['web', 'graphic', 'seo', 'ads', 'branding', 'ui-ux', 'motion']),
  thumbnail: imageSchema,
  gallery: z.array(imageSchema).default([]),
  externalUrl: z.string().optional(),
  year: z.number().int().optional(),
  seo: seoSchema.optional(),
});
export type PortfolioItem = z.infer<typeof portfolioItemSchema>;
