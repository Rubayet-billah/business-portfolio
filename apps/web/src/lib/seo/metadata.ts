import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/lib/utils';

interface BuildMetadataInput {
  title?: string;
  description?: string;
  /** Absolute path, e.g. `/services/google-ads`. */
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  image,
  keywords,
  type = 'website',
  noIndex = false,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle;
  const url = absoluteUrl(path);
  const ogImage = image ?? absoluteUrl('/opengraph-image');

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      site: siteConfig.twitterHandle,
    },
  };
}
