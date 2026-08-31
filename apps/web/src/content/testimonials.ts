import type { Testimonial } from '@agency/types';
import { base, img } from './_shared';

type Seed = [id: string, name: string, role: string, company: string, platform: string, service: string, quote: string, featured: boolean];

// Sample testimonials — fictional companies (Northwind, Contoso, …) and people.
const seeds: Seed[] = [
  ['tm-1', 'Dana Whitfield', 'Founder', 'Northwind Retail', 'Google', 'web-design-and-development',
    'They understood that our website had to do more than look good. It needed to sell, and it does. The new build paid for itself within the first quarter.', true],
  ['tm-2', 'Priya Anand', 'Marketing Manager', 'Contoso', 'Clutch', 'search-engine-optimization',
    'Working with this team feels like an extension of our own. They explain what they are doing and why, and the organic numbers keep climbing.', true],
  ['tm-3', 'Marcus Reed', 'CEO', 'Fabrikam Learning', 'Google', 'google-ads',
    'We launched faster than we thought possible and hit our enrolment target early. Their tracking setup alone was worth the engagement.', true],
  ['tm-4', 'Elena Torres', 'Head of Growth', 'Globex', 'Facebook', 'facebook-ads',
    'Creative testing at a pace we could never sustain in-house. ROAS is up and, more importantly, it is stable.', false],
  ['tm-5', 'Chris Nolan', 'Owner', 'Lumina Wellness', 'Google', 'social-media-marketing',
    'Our social finally drives bookings we can measure. The monthly content is consistent and genuinely on-brand.', true],
  ['tm-6', 'Ava Bennett', 'Product Lead', 'Initech', 'Clutch', 'ui-ux-design',
    'The redesigned ordering flow cut support tickets noticeably. Research-led, well documented, easy to build from.', false],
];

export const testimonials: Testimonial[] = seeds.map(([id, authorName, authorRole, company, platform, serviceSlug, quote, featured], i) => ({
  ...base(i + 1),
  id,
  authorName,
  authorRole,
  company,
  avatar: img(`mo-${id}`, 160, 160),
  quote,
  rating: 5,
  platform,
  serviceSlug,
  featured,
}));
