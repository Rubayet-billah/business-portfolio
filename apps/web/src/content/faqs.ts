import type { Faq } from '@agency/types';
import { base } from './_shared';

type Seed = [q: string, a: string, scope: Faq['scope'], serviceSlug?: string];

const seeds: Seed[] = [
  ['Why do I need a website for my business?',
    'A website is your always-on storefront — where prospects learn what you do, judge your credibility and take the next step. It is also the foundation every other marketing channel points to.',
    'general'],
  ['How long does it take to develop a website?',
    'A typical marketing site takes 4–8 weeks depending on scope and how ready your content is. We share a schedule with milestones after discovery.',
    'web', 'web-design-and-development'],
  ['Do you provide website hosting?',
    'Yes. We set up managed hosting, connect your domain and hand over full ownership and access.',
    'web', 'web-design-and-development'],
  ['Can you make my website mobile-friendly?',
    'Every site we build is fully responsive and tested across phones, tablets and desktops before launch.',
    'web', 'web-design-and-development'],
  ['What is the cost of a project?',
    'Most engagements start at $1,000+ per month or per project. We scope against your goals and budget and send a fixed proposal.',
    'pricing'],
  ['How soon will I see SEO results?',
    'Expect early movement in 6–10 weeks and compounding gains from month four onward.',
    'seo', 'search-engine-optimization'],
  ['What is the minimum ad budget you work with?',
    'We recommend at least $1,000 per month in media spend so campaigns can gather statistically useful data.',
    'ads', 'google-ads'],
  ['Do you work with businesses outside your home market?',
    'Yes — we work with clients across South Asia, the Middle East, the UK and North America.',
    'general'],
  ['How do we communicate during a project?',
    'You get a shared channel, a single point of contact and a recurring check-in. Reporting is monthly and in plain language.',
    'services'],
  ['Can we start with one service and expand later?',
    'Absolutely. Many clients begin with web or SEO and add paid media and creative once the foundation is in place.',
    'services'],
];

export const faqs: Faq[] = seeds.map(([question, answer, scope, serviceSlug], i) => ({
  ...base(i + 1),
  id: `faq-${i + 1}`,
  question,
  answer,
  scope,
  serviceSlug,
}));
