import type { ContentStatus } from '@agency/types';

export const CREATED_AT = '2026-01-15T09:00:00.000Z';
export const UPDATED_AT = '2026-08-01T09:00:00.000Z';

/** Common entity fields for every fixture record. */
export function base(order: number, status: ContentStatus = 'published') {
  return { status, order, createdAt: CREATED_AT, updatedAt: UPDATED_AT };
}

/** Deterministic placeholder image URL. */
export function img(seed: string, w = 1200, h = 800) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
