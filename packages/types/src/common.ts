import { z } from 'zod';
import { contentStatusSchema } from './api';

export const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  ogImage: z.string().optional(),
  keywords: z.array(z.string()).default([]),
});
export type Seo = z.infer<typeof seoSchema>;

export const imageSchema = z.object({
  url: z.string(),
  alt: z.string().default(''),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});
export type ImageRef = z.infer<typeof imageSchema>;

export const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
  external: z.boolean().default(false),
});
export type LinkRef = z.infer<typeof linkSchema>;

export const qaSchema = z.object({
  question: z.string(),
  answer: z.string(),
});
export type QA = z.infer<typeof qaSchema>;

/** Fields shared by every managed content entity. */
export const baseEntitySchema = z.object({
  id: z.string(),
  status: contentStatusSchema.default('published'),
  order: z.number().int().default(0),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type BaseEntity = z.infer<typeof baseEntitySchema>;
