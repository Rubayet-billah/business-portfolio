import { z } from 'zod';
import { baseEntitySchema, seoSchema } from '../common';

export const industrySchema = baseEntitySchema.extend({
  slug: z.string(),
  name: z.string(),
  icon: z.string().optional(),
  blurb: z.string(),
  description: z.string().optional(),
  seo: seoSchema.optional(),
});
export type Industry = z.infer<typeof industrySchema>;
