import { z } from 'zod';
import { baseEntitySchema, imageSchema, qaSchema, seoSchema } from '../common';

export const serviceFeatureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});
export type ServiceFeature = z.infer<typeof serviceFeatureSchema>;

export const serviceProcessStepSchema = z.object({
  step: z.number().int().positive(),
  title: z.string(),
  description: z.string(),
});
export type ServiceProcessStep = z.infer<typeof serviceProcessStepSchema>;

export const serviceStatSchema = z.object({
  label: z.string(),
  value: z.string(),
});
export type ServiceStat = z.infer<typeof serviceStatSchema>;

export const serviceSchema = baseEntitySchema.extend({
  slug: z.string(),
  title: z.string(),
  tagline: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  heroImage: imageSchema.optional(),
  category: z.string().optional(),
  stats: z.array(serviceStatSchema).default([]),
  features: z.array(serviceFeatureSchema).default([]),
  process: z.array(serviceProcessStepSchema).default([]),
  deliverables: z.array(z.string()).default([]),
  techStack: z.array(z.string()).default([]),
  faqs: z.array(qaSchema).default([]),
  seo: seoSchema.optional(),
});
export type Service = z.infer<typeof serviceSchema>;
