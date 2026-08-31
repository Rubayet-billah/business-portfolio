import base from './eslint/base.mjs';

/**
 * Lints this package's own source: the palette build scripts and the shared
 * flat-config modules. The generated `colors/index.ts` is covered by `base`.
 */
const config = [
  ...base,
  {
    files: ['**/*.mjs'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        URL: 'readonly',
        Buffer: 'readonly',
      },
    },
  },
];

export default config;
