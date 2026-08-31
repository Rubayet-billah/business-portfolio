/**
 * Build-time site constants. Editorial content (nav, socials, contact details,
 * headline stats) lives in the `siteSettings` fixture and is fetched through
 * `@/lib/content/site-settings`, so it can move to the CMS later without a
 * code change.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? 'Agency',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  defaultTitle: 'Agency — Full-Service Digital Marketing',
  description:
    'Agency is a full-service digital marketing studio — SEO, paid media, web design, branding and content that turn traffic into measurable revenue.',
  locale: 'en_US',
  ogImage: '/opengraph-image',
  twitterHandle: '@agency',
} as const;

export type SiteConfig = typeof siteConfig;
