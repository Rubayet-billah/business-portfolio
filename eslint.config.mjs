// Relative import — @agency/config is not symlinked into the repo-root
// node_modules (it is a workspace package, not a root dependency).
import next from './packages/config/eslint/next.mjs';

/**
 * Root ESLint config — used when ESLint runs from the repo root (lint-staged in
 * the pre-commit hook, or `pnpm exec eslint` at the top level). Each app and
 * package also has its own `eslint.config.mjs` that Turbo uses when linting that
 * workspace in isolation; this mirrors them so both paths agree.
 */
const config = [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/*.tsbuildinfo',
    ],
  },
  ...next,
  {
    // The Next.js pages-router link rule is irrelevant when linting from the
    // monorepo root (there is no app/ or pages/ dir here).
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  {
    // Repo-root CommonJS tooling files (commitlint, etc.).
    files: ['*.{js,cjs}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'writable',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
];

export default config;
