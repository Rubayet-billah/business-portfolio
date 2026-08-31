import { z } from 'zod';

/** Publication lifecycle for every managed content type. */
export const CONTENT_STATUSES = ['draft', 'published', 'archived'] as const;
export const contentStatusSchema = z.enum(CONTENT_STATUSES);
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

/** Dashboard user roles (used from Stage 3b onward). */
export const ROLES = ['admin', 'editor', 'viewer'] as const;
export const roleSchema = z.enum(ROLES);
export type Role = (typeof ROLES)[number];

/** Pagination block returned alongside every list response. */
export interface ApiMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * The single response envelope every transport (fixture now, HTTP later)
 * resolves to. Mirrors the shape the future Express API returns.
 */
export interface ApiEnvelope<T> {
  success: boolean;
  message?: string;
  data: T;
  meta?: ApiMeta;
}

export interface Paginated<T> {
  items: T[];
  meta: ApiMeta;
}

export type SortOrder = 'asc' | 'desc';

/** Query parameters accepted by every `list()` resource method. */
export interface ListParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  sortBy?: string;
  sortOrder?: SortOrder;
  status?: ContentStatus;
}

export const DEFAULT_PAGE_SIZE = 12;

export function emptyMeta(limit: number = DEFAULT_PAGE_SIZE): ApiMeta {
  return { page: 1, limit, total: 0, totalPages: 0 };
}
