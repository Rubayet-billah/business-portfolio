import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import base from './base.mjs';

/**
 * Flat ESLint config for the Next.js apps (web, dashboard).
 * Consume from an app's eslint.config.mjs:
 *
 *   import next from '@agency/config/eslint/next';
 *   export default next;
 */
export default defineConfig([
  ...base,
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
