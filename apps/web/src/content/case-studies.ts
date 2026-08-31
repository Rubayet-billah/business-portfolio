import type { CaseStudy } from '@agency/types';
import { base, img } from './_shared';

// Sample case studies — fictional clients, illustrative metrics.
export const caseStudies: CaseStudy[] = [
  {
    ...base(1),
    id: 'cs-1',
    slug: 'northwind-retail-ecommerce-growth',
    title: 'Rebuilding Northwind Retail for conversion',
    client: 'Northwind Retail',
    industry: 'E-Commerce',
    serviceSlugs: ['web-design-and-development', 'search-engine-optimization'],
    heroImage: { url: img('mo-cs-1', 1400, 900), alt: 'Northwind Retail storefront', width: 1400, height: 900 },
    challenge:
      'A slow, hard-to-navigate storefront was leaking revenue: mobile conversion sat at 0.8% and organic traffic had plateaued.',
    approach:
      'We rebuilt the site on a fast modern stack, restructured the catalogue and information architecture, fixed technical SEO issues and shipped a conversion-focused product and checkout experience.',
    outcome:
      'Within three months mobile conversion more than doubled and non-brand organic sessions returned to growth.',
    metrics: [
      { label: 'Mobile conversion', value: '1.9%', delta: '+138%' },
      { label: 'Organic sessions', value: '+64%', delta: 'QoQ' },
      { label: 'LCP', value: '1.4s', delta: 'from 4.1s' },
    ],
    testimonialId: 'tm-1',
    publishedAt: '2026-06-10T09:00:00.000Z',
  },
  {
    ...base(2),
    id: 'cs-2',
    slug: 'fabrikam-learning-launch',
    title: 'Launching Fabrikam Learning with a demand engine',
    client: 'Fabrikam Learning',
    industry: 'Ed-Tech',
    serviceSlugs: ['web-design-and-development', 'google-ads', 'content-writing'],
    heroImage: { url: img('mo-cs-2', 1400, 900), alt: 'Fabrikam Learning launch page', width: 1400, height: 900 },
    challenge: 'A pre-launch EdTech product with no site, no tracking and an aggressive enrolment target.',
    approach:
      'We shipped a launch page, stood up analytics and conversion tracking, built a Google Ads account around high-intent queries and produced a launch content series.',
    outcome: 'Hit the first-cohort enrolment target two weeks early at a blended CAC 22% under plan.',
    metrics: [
      { label: 'Cohort target', value: '112%', delta: 'of goal' },
      { label: 'Blended CAC', value: '-22%', delta: 'vs plan' },
      { label: 'Time to launch', value: '5 weeks' },
    ],
    testimonialId: 'tm-3',
    publishedAt: '2026-05-02T09:00:00.000Z',
  },
  {
    ...base(3),
    id: 'cs-3',
    slug: 'lumina-wellness-social-growth',
    title: 'Turning social into bookings for Lumina Wellness',
    client: 'Lumina Wellness',
    industry: 'Spa & Salon',
    serviceSlugs: ['social-media-marketing', 'motion-graphics', 'facebook-ads'],
    heroImage: { url: img('mo-cs-3', 1400, 900), alt: 'Lumina Wellness social content', width: 1400, height: 900 },
    challenge: 'Inconsistent posting, low engagement and no link between social activity and bookings.',
    approach:
      'We built a monthly content engine with animated posts, added a booking-linked offer and amplified top performers with a small paid budget.',
    outcome: 'Engagement rate up 120% and a steady stream of attributed bookings from social.',
    metrics: [
      { label: 'Engagement rate', value: '+120%' },
      { label: 'Attributed bookings', value: '48 / mo' },
      { label: 'Cost per booking', value: '$6.40' },
    ],
    testimonialId: 'tm-5',
    publishedAt: '2026-04-14T09:00:00.000Z',
  },
];
