import { z } from 'zod';
import { baseEntitySchema, imageSchema, seoSchema } from '../common';

export const caseStudyMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
  delta: z.string().optional(),
});
export type CaseStudyMetric = z.infer<typeof caseStudyMetricSchema>;

export const caseStudySchema = baseEntitySchema.extend({
  slug: z.string(),
  title: z.string(),
  client: z.string(),
  industry: z.string().optional(),
  serviceSlugs: z.array(z.string()).default([]),
  heroImage: imageSchema.optional(),
  challenge: z.string(),
  approach: z.string(),
  outcome: z.string(),
  metrics: z.array(caseStudyMetricSchema).default([]),
  testimonialId: z.string().optional(),
  publishedAt: z.string(),
  seo: seoSchema.optional(),
});
export type CaseStudy = z.infer<typeof caseStudySchema>;
