import type { LeadInput } from '@agency/types';
import { colors } from '@agency/config/colors';

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string
  );

export function proposalSubject(lead: LeadInput): string {
  return `New ${lead.source} enquiry — ${lead.name}${lead.company ? ` (${lead.company})` : ''}`;
}

export function proposalText(lead: LeadInput, referer?: string): string {
  return [
    `Name:    ${lead.name}`,
    `Email:   ${lead.email}`,
    `Phone:   ${lead.phone || '—'}`,
    `Company: ${lead.company || '—'}`,
    `Service: ${lead.service || '—'}`,
    `Budget:  ${lead.budget || '—'}`,
    `Source:  ${lead.source}`,
    referer ? `Page:    ${referer}` : '',
    '',
    'Message:',
    lead.message,
  ]
    .filter(Boolean)
    .join('\n');
}

export function proposalHtml(lead: LeadInput, referer?: string): string {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:${colors.light.mutedForeground};font-size:13px">${esc(k)}</td><td style="padding:4px 0;font-size:13px">${esc(v)}</td></tr>`;
  return `
  <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:560px">
    <h2 style="margin:0 0 12px;font-size:18px">New ${esc(lead.source)} enquiry</h2>
    <table style="border-collapse:collapse;margin-bottom:16px">
      ${row('Name', lead.name)}
      ${row('Email', lead.email)}
      ${row('Phone', lead.phone || '—')}
      ${row('Company', lead.company || '—')}
      ${row('Service', lead.service || '—')}
      ${row('Budget', lead.budget || '—')}
      ${referer ? row('Page', referer) : ''}
    </table>
    <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;border-left:3px solid ${colors.light.primary};padding-left:12px;margin:0">${esc(
      lead.message
    )}</p>
  </div>`;
}
