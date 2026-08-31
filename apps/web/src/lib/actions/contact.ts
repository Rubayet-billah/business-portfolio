'use server';

import { headers } from 'next/headers';
import { leadInputSchema, LEAD_SOURCES } from '@agency/types';
import { processLead } from '@/lib/leads/submit';

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitProposalAction(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries());
  const rawSource = typeof raw.source === 'string' ? raw.source : '';
  const source = (LEAD_SOURCES as readonly string[]).includes(rawSource) ? rawSource : 'contact';

  const parsed = leadInputSchema.safeParse({ ...raw, source });

  if (!parsed.success) {
    return {
      status: 'error',
      message: 'Please fix the highlighted fields.',
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot — silently accept bots without doing anything.
  if (parsed.data.website) {
    return { status: 'success', message: 'Thanks — we will be in touch shortly.' };
  }

  const referer = (await headers()).get('referer') ?? undefined;
  const result = await processLead(parsed.data, referer);

  return result.ok
    ? { status: 'success', message: 'Thanks — your request is in. We usually reply within one business day.' }
    : { status: 'error', message: result.error ?? 'Something went wrong. Please try again.' };
}
