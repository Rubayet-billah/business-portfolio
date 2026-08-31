export { cn } from '@agency/ui';
import { siteConfig } from '@/config/site';

/** Prefix a path with the canonical site origin. */
export function absoluteUrl(path = ''): string {
  const base = siteConfig.url.replace(/\/$/, '');
  return path ? `${base}${path.startsWith('/') ? path : `/${path}`}` : base;
}

export function formatDate(input: string | Date): string {
  const d = typeof input === 'string' ? new Date(input) : input;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function initials(name: string): string {
  return name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : plural}`;
}
