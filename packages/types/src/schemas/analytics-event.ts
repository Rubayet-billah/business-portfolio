import { z } from 'zod';

export const ANALYTICS_CONTENT_TYPES = [
  'page',
  'service',
  'blog',
  'portfolio',
  'case-study',
  'testimonial',
  'faq',
] as const;

export const ANALYTICS_EVENT_TYPES = [
  'page_view',
  'impression',
  'click',
  'share',
  'download',
  'lead_submit',
] as const;

export const analyticsEventInputSchema = z.object({
  contentType: z.enum(ANALYTICS_CONTENT_TYPES),
  eventType: z.enum(ANALYTICS_EVENT_TYPES),
  entityId: z.string().optional(),
  path: z.string(),
  referer: z.string().optional(),
  sessionId: z.string().optional(),
});
export type AnalyticsEventInput = z.infer<typeof analyticsEventInputSchema>;

export const analyticsEventSchema = analyticsEventInputSchema.extend({
  id: z.string(),
  createdAt: z.string(),
});
export type AnalyticsEvent = z.infer<typeof analyticsEventSchema>;
