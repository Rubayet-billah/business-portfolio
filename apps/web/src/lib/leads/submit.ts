import type { LeadInput } from '@agency/types';
import { getTransporter, readEmailEnv } from '@/lib/email/transport';
import { proposalHtml, proposalSubject, proposalText } from '@/lib/email/templates';

export interface ProcessLeadResult {
  ok: boolean;
  error?: string;
}

/**
 * Single entry point for a submitted lead — used by both the server action and
 * the `/api/contact` route handler.
 *
 * Stage 1: sends a notification email via SMTP.
 * Stage 3b: also POST the lead to `${CMS_API_BASE_URL}/leads/public` so it is
 * stored and visible in the dashboard.
 */
export async function processLead(lead: LeadInput, referer?: string): Promise<ProcessLeadResult> {
  const env = readEmailEnv();

  if (!env) {
    return {
      ok: false,
      error:
        'Email delivery is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASSWORD and CONTACT_EMAIL.',
    };
  }

  try {
    await getTransporter(env).sendMail({
      from: `"${lead.name}" <${env.user}>`,
      to: env.to,
      replyTo: lead.email,
      subject: proposalSubject(lead),
      text: proposalText(lead, referer),
      html: proposalHtml(lead, referer),
    });
    return { ok: true };
  } catch {
    return { ok: false, error: 'We could not send your message right now. Please try again shortly.' };
  }
}
