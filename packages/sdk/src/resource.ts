import type { ListParams, Paginated } from '@agency/types';
import { emptyMeta } from '@agency/types';
import type { ContentResource, Transport, TransportCollection } from './types';

/**
 * Turns a transport + collection name into a typed `{ list, get }` resource.
 * `list` always resolves to `{ items, meta }` (never throws); `get` resolves
 * to the entity or `null`.
 */
export function makeResource<T>(
  collection: Exclude<TransportCollection, 'siteSettings'>,
  transport: Transport
): ContentResource<T> {
  return {
    async list(params?: ListParams): Promise<Paginated<T>> {
      const env = await transport.request<T[]>({ collection, kind: 'list', params });
      const items = Array.isArray(env.data) ? env.data : [];
      return { items, meta: env.meta ?? emptyMeta(params?.limit) };
    },
    async get(slugOrId: string): Promise<T | null> {
      const env = await transport.request<T | null>({ collection, kind: 'get', slugOrId });
      return env.success ? (env.data ?? null) : null;
    },
  };
}
