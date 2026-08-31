import { z } from 'zod';
import { linkSchema } from '../common';

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  children: z.array(linkSchema).default([]),
});
export type NavItem = z.infer<typeof navItemSchema>;

export const socialLinkSchema = z.object({
  platform: z.enum([
    'facebook',
    'instagram',
    'linkedin',
    'twitter',
    'youtube',
    'behance',
    'whatsapp',
    'telegram',
  ]),
  href: z.string(),
});
export type SocialLink = z.infer<typeof socialLinkSchema>;

export const siteSettingsSchema = z.object({
  id: z.string().default('site-settings'),
  siteName: z.string(),
  tagline: z.string(),
  description: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  registeredAddress: z.string().optional(),
  whatsapp: z.string().optional(),
  telegram: z.string().optional(),
  primaryNav: z.array(navItemSchema).default([]),
  footerNav: z
    .array(z.object({ heading: z.string(), links: z.array(linkSchema) }))
    .default([]),
  socials: z.array(socialLinkSchema).default([]),
  stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  updatedAt: z.string(),
});
export type SiteSettings = z.infer<typeof siteSettingsSchema>;
