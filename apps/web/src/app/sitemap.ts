import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { LEGAL_PAGES } from '@/content/legal';
import {
  getBlogSlugs,
  getCaseStudySlugs,
  getServiceSlugs,
} from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date();

  const staticPaths = [
    '',
    '/about-us',
    '/services',
    '/portfolio',
    '/case-studies',
    '/blog',
    '/industries',
    '/contact-us',
    '/career',
    ...LEGAL_PAGES.map((p) => `/${p.slug}`),
  ];

  const [serviceSlugs, blogSlugs, caseSlugs] = await Promise.all([
    getServiceSlugs(),
    getBlogSlugs(),
    getCaseStudySlugs(),
  ]);

  const dynamicPaths = [
    ...serviceSlugs.map((s) => `/services/${s}`),
    ...blogSlugs.map((s) => `/blog/${s}`),
    ...caseSlugs.map((s) => `/case-studies/${s}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
