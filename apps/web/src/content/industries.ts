import type { Industry } from '@agency/types';
import { base } from './_shared';

type Seed = [name: string, slug: string, icon: string, blurb: string];

const seeds: Seed[] = [
  ['Internet Service', 'internet-service', 'Wifi', 'Acquisition funnels and coverage-area landing pages for ISPs.'],
  ['Sustainable Energy', 'sustainable-energy', 'Sun', 'Lead generation and trust-building for solar and clean-energy brands.'],
  ['Leather', 'leather', 'Briefcase', 'E-commerce and export storytelling for leather goods makers.'],
  ['Buying House', 'buying-house', 'Building2', 'B2B sites and sourcing enquiry pipelines for buying houses.'],
  ['E-Commerce', 'e-commerce', 'ShoppingBag', 'Conversion-focused storefronts and performance marketing.'],
  ['Photography', 'photography', 'Camera', 'Portfolio sites and booking flows for studios and creators.'],
  ['Tours & Travels', 'tours-and-travels', 'Plane', 'Package pages, enquiry capture and seasonal campaigns.'],
  ['Spa & Salon', 'spa-and-salon', 'Sparkles', 'Local SEO, bookings and social content for wellness brands.'],
  ['Cloud Kitchen', 'cloud-kitchen', 'UtensilsCrossed', 'Menu UX, ordering apps and delivery-app optimisation.'],
  ['Hotel & Restaurant', 'hotel-and-restaurant', 'ConciergeBell', 'Direct-booking sites and reputation-driven local marketing.'],
  ['Ed-Tech', 'ed-tech', 'GraduationCap', 'Enrolment funnels, launch pages and content programmes.'],
  ['Health & Wellness', 'health-and-wellness', 'HeartPulse', 'Compliant, trust-first sites and demand generation.'],
];

export const industries: Industry[] = seeds.map(([name, slug, icon, blurb], i) => ({
  ...base(i + 1),
  id: `ind-${i + 1}`,
  slug,
  name,
  icon,
  blurb,
  description: `${blurb} We tailor strategy, creative and measurement to the way ${name.toLowerCase()} buyers actually research and decide.`,
}));
