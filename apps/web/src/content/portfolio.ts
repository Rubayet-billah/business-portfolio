import type { PortfolioItem } from '@agency/types';
import { base, img } from './_shared';

type Seed = [id: string, slug: string, title: string, client: string, discipline: PortfolioItem['discipline'], industry: string, serviceSlug: string];

// Sample portfolio — fictional client brands.
const seeds: Seed[] = [
  ['pf-1', 'northwind-retail-storefront', 'Northwind Retail — e-commerce storefront', 'Northwind Retail', 'web', 'E-Commerce', 'web-design-and-development'],
  ['pf-2', 'contoso-brand-system', 'Contoso — product brand system', 'Contoso', 'branding', 'Internet Service', 'brand-design'],
  ['pf-3', 'verdant-identity', 'Verdant — identity & packaging', 'Verdant', 'graphic', 'Sustainable Energy', 'graphics-design'],
  ['pf-4', 'globex-campaign', 'Globex — paid social campaign', 'Globex', 'ads', 'Photography', 'facebook-ads'],
  ['pf-5', 'meridian-studio-website', 'Meridian Studio — marketing website', 'Meridian Studio', 'web', 'Creative', 'web-design-and-development'],
  ['pf-6', 'harborview-seo', 'Harborview — organic growth programme', 'Harborview', 'seo', 'Hotel & Restaurant', 'search-engine-optimization'],
  ['pf-7', 'initech-app-ui', 'Initech — ordering app UI', 'Initech', 'ui-ux', 'Cloud Kitchen', 'ui-ux-design'],
  ['pf-8', 'lumina-wellness-motion', 'Lumina Wellness — animated social pack', 'Lumina Wellness', 'motion', 'Spa & Salon', 'motion-graphics'],
  ['pf-9', 'fabrikam-learning-landing', 'Fabrikam Learning — launch page', 'Fabrikam Learning', 'web', 'Ed-Tech', 'web-design-and-development'],
];

export const portfolio: PortfolioItem[] = seeds.map(([id, slug, title, client, discipline, industry, serviceSlug], i) => ({
  ...base(i + 1),
  id,
  slug,
  title,
  client,
  summary: `A ${discipline} project for ${client} in the ${industry.toLowerCase()} space — from brief to launch with measurable outcomes.`,
  serviceSlug,
  industry,
  discipline,
  thumbnail: { url: img(`mo-${slug}`, 900, 700), alt: title, width: 900, height: 700 },
  gallery: [
    { url: img(`mo-${slug}-a`, 1400, 900), alt: `${title} — screen 1`, width: 1400, height: 900 },
    { url: img(`mo-${slug}-b`, 1400, 900), alt: `${title} — screen 2`, width: 1400, height: 900 },
  ],
  year: 2026,
}));
