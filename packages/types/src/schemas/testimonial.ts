import { z } from 'zod';
import { baseEntitySchema } from '../common';

export const testimonialSchema = baseEntitySchema.extend({
  authorName: z.string(),
  authorRole: z.string().optional(),
  company: z.string().optional(),
  avatar: z.string().optional(),
  quote: z.string(),
  rating: z.number().min(0).max(5).default(5),
  /** Where the review was originally left, e.g. "Google", "Clutch". */
  platform: z.string().optional(),
  serviceSlug: z.string().optional(),
  featured: z.boolean().default(false),
});
export type Testimonial = z.infer<typeof testimonialSchema>;
