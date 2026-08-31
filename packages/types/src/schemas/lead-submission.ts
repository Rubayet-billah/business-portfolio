import { z } from 'zod';

export const LEAD_SOURCES = ['contact', 'proposal', 'service', 'footer'] as const;
export const LEAD_STATUSES = ['new', 'contacted', 'qualified', 'closed', 'spam'] as const;

/** What the public form posts. */
export const leadInputSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(6, 'Enter a valid phone number').optional().or(z.literal('')),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Tell us a little more (10+ characters)'),
  source: z.enum(LEAD_SOURCES).default('contact'),
  /** Honeypot — must stay empty. */
  website: z.string().max(0).optional(),
});
export type LeadInput = z.infer<typeof leadInputSchema>;

/** The stored record (Stage 3b). */
export const leadSubmissionSchema = leadInputSchema.omit({ website: true }).extend({
  id: z.string(),
  status: z.enum(LEAD_STATUSES).default('new'),
  referer: z.string().optional(),
  createdAt: z.string(),
});
export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
