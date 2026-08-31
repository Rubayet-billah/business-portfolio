import { createContentClient, fixtureTransport /* , httpTransport */ } from '@agency/sdk';
import { dataset } from '@/content';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  THE DATA SEAM
 * ─────────────────────────────────────────────────────────────────────────────
 * Every page reads content through this client. Right now it is backed by the
 * in-memory `fixtureTransport` over typed placeholder data in `src/content/*`.
 *
 * When the Express API lands (Stage 3b), swap the transport below — nothing
 * else in the app changes:
 *
 *   import { httpTransport } from '@agency/sdk';
 *
 *   export const content = createContentClient({
 *     transport: httpTransport({
 *       baseUrl: process.env.CMS_API_BASE_URL!,
 *       revalidate: 300,
 *     }),
 *   });
 */
export const content = createContentClient({
  transport: fixtureTransport(dataset),
});
