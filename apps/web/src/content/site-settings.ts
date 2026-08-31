import type { SiteSettings } from '@agency/types';
import { UPDATED_AT } from './_shared';

export const siteSettings: SiteSettings = {
  id: 'site-settings',
  siteName: 'Agency',
  tagline: 'Marketing that delivers.',
  description:
    'Agency is a full-service digital marketing studio — SEO, paid media, web design, branding and content that turn traffic into measurable revenue.',
  email: 'hello@agency.example',
  phone: '+1 (555) 010-0100',
  address: 'Corporate office: 1 Market Street, Suite 400, Metropolis',
  registeredAddress: 'Registered office: 200 Example Road, Metropolis',
  whatsapp: '+15550100100',
  telegram: 'agencyhq',
  primaryNav: [
    { label: 'About Us', href: '/about-us', children: [] },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Search Engine Optimization', href: '/services/search-engine-optimization', external: false },
        { label: 'Google Ads', href: '/services/google-ads', external: false },
        { label: 'Facebook Advertising', href: '/services/facebook-ads', external: false },
        { label: 'Social Media Marketing', href: '/services/social-media-marketing', external: false },
        { label: 'Web Design & Development', href: '/services/web-design-and-development', external: false },
        { label: 'UI/UX Design', href: '/services/ui-ux-design', external: false },
        { label: 'Content Writing', href: '/services/content-writing', external: false },
        { label: 'Brand Design', href: '/services/brand-design', external: false },
        { label: 'Graphics Design', href: '/services/graphics-design', external: false },
        { label: 'Motion Graphics', href: '/services/motion-graphics', external: false },
      ],
    },
    { label: 'Portfolio', href: '/portfolio', children: [] },
    { label: 'Industries', href: '/industries', children: [] },
    { label: 'Blog', href: '/blog', children: [] },
    { label: 'Contact Us', href: '/contact-us', children: [] },
  ],
  footerNav: [
    {
      heading: 'Services',
      links: [
        { label: 'SEO', href: '/services/search-engine-optimization', external: false },
        { label: 'Google Ads', href: '/services/google-ads', external: false },
        { label: 'Facebook Ads', href: '/services/facebook-ads', external: false },
        { label: 'Social Media Marketing', href: '/services/social-media-marketing', external: false },
        { label: 'Web Design & Development', href: '/services/web-design-and-development', external: false },
        { label: 'All Services', href: '/services', external: false },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Agency', href: '/about-us', external: false },
        { label: 'Case Studies', href: '/case-studies', external: false },
        { label: 'Portfolio', href: '/portfolio', external: false },
        { label: 'Industries We Serve', href: '/industries', external: false },
        { label: 'Blog & Resources', href: '/blog', external: false },
        { label: 'Careers', href: '/career', external: false },
        { label: 'Contact Us', href: '/contact-us', external: false },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy', external: false },
        { label: 'Cookies Policy', href: '/cookies-policy', external: false },
        { label: 'Terms & Conditions', href: '/terms-and-conditions', external: false },
        { label: 'Refund Policy', href: '/refund-policy', external: false },
        { label: 'How to Order', href: '/how-to-order', external: false },
      ],
    },
  ],
  socials: [
    { platform: 'facebook', href: 'https://facebook.com/agency' },
    { platform: 'instagram', href: 'https://instagram.com/agency' },
    { platform: 'linkedin', href: 'https://www.linkedin.com/company/agency' },
    { platform: 'twitter', href: 'https://twitter.com/agency' },
    { platform: 'youtube', href: 'https://youtube.com/@agency' },
    { platform: 'behance', href: 'https://behance.net/agency' },
  ],
  stats: [
    { label: 'Projects delivered', value: '650+' },
    { label: 'Years of experience', value: '10+' },
    { label: 'Worldwide clients', value: '400+' },
    { label: 'Client satisfaction', value: '99%' },
  ],
  updatedAt: UPDATED_AT,
};
