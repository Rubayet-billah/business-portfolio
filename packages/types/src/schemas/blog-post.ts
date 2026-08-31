import { z } from 'zod';
import { baseEntitySchema, imageSchema, seoSchema } from '../common';

export const blogAuthorSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  avatar: z.string().optional(),
});
export type BlogAuthor = z.infer<typeof blogAuthorSchema>;

export const blogPostSchema = baseEntitySchema.extend({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  /** Markdown body. */
  content: z.string(),
  coverImage: imageSchema.optional(),
  category: z.string().default('General'),
  tags: z.array(z.string()).default([]),
  author: blogAuthorSchema,
  readingMinutes: z.number().int().positive().default(5),
  publishedAt: z.string(),
  featured: z.boolean().default(false),
  seo: seoSchema.optional(),
});
export type BlogPost = z.infer<typeof blogPostSchema>;
