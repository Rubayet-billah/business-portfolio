import type { BlogPost, Service, SiteSettings } from '@agency/types';
import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/lib/utils';

type Json = Record<string, unknown>;

export function organizationSchema(settings: SiteSettings): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: settings.siteName,
    url: siteConfig.url,
    email: settings.email,
    telephone: settings.phone,
    description: settings.description,
    slogan: settings.tagline,
    address: { '@type': 'PostalAddress', streetAddress: settings.address },
    sameAs: settings.socials.map((s) => s.href),
  };
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}

export function serviceSchema(service: Service): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.category,
    description: service.shortDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    areaServed: 'BD',
  };
}

export function articleSchema(post: BlogPost): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Person', name: post.author.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    image: post.coverImage?.url,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

export function itemListSchema(name: string, items: Array<{ name: string; url: string }>): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: absoluteUrl(it.url),
    })),
  };
}
