/**
 * Static legal copy. Not a managed content type — lives with the site. If it
 * later needs editing without a deploy, promote it to a `legal` collection in
 * `@agency/types` and the CMS.
 */
export interface LegalPage {
  slug: string;
  title: string;
  updatedAt: string;
  body: string;
}

const UPDATED = '2026-08-01';

const placeholder = (name: string) => `_Last updated: ${UPDATED}._

This is placeholder ${name.toLowerCase()} copy for the Agency website. Replace
it with content reviewed by legal counsel before launch.

## Overview

Agency ("we", "us") operates this website. This document explains the terms
that apply when you use it.

## Your information

We only collect what we need to respond to enquiries and improve the site. We do
not sell personal data.

## Contact

Questions about this policy can be sent to hello@agency.example.`;

export const LEGAL_PAGES: LegalPage[] = [
  { slug: 'privacy-policy', title: 'Privacy Policy', updatedAt: UPDATED, body: placeholder('Privacy Policy') },
  { slug: 'cookies-policy', title: 'Cookies Policy', updatedAt: UPDATED, body: placeholder('Cookies Policy') },
  { slug: 'terms-and-conditions', title: 'Terms & Conditions', updatedAt: UPDATED, body: placeholder('Terms & Conditions') },
  { slug: 'refund-policy', title: 'Refund Policy', updatedAt: UPDATED, body: placeholder('Refund Policy') },
  { slug: 'how-to-order', title: 'How to Order', updatedAt: UPDATED, body: placeholder('How to Order') },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((p) => p.slug === slug);
}
