import { z } from 'zod';
import { baseEntitySchema } from '../common';

export const FAQ_SCOPES = ['general', 'services', 'web', 'seo', 'ads', 'pricing'] as const;

export const faqSchema = baseEntitySchema.extend({
  question: z.string(),
  answer: z.string(),
  scope: z.enum(FAQ_SCOPES).default('general'),
  /** Optional service slug when the FAQ belongs to one service page. */
  serviceSlug: z.string().optional(),
});
export type Faq = z.infer<typeof faqSchema>;
