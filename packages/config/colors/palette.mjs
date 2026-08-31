/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  THE PALETTE — single source of truth for every colour in the project.
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit values here, then run:  pnpm --filter @agency/config gen
 *
 * That regenerates:
 *   - tailwind/tokens.css      (consumed by Tailwind v4 — the utility classes)
 *   - colors/index.ts          (typed hex/oklch export — consumed by code:
 *                               viewport themeColor, OG images, email, charts)
 *
 * Values are CSS `oklch()` strings: `oklch(L C H)` with L in 0..1, or
 * `oklch(L C H / A)` for alpha. Hue is degrees.
 *
 * @typedef {Record<
 *   'background'|'foreground'|'card'|'cardForeground'|'popover'|'popoverForeground'|
 *   'primary'|'primaryForeground'|'secondary'|'secondaryForeground'|
 *   'muted'|'mutedForeground'|'accent'|'accentForeground'|
 *   'destructive'|'destructiveForeground'|
 *   'success'|'successForeground'|'warning'|'warningForeground'|
 *   'border'|'input'|'ring'|'brandNavy'|'brandNavyForeground',
 *   string
 * >} SemanticSet
 */

/** Brand hue — rotate this one number to re-tint the whole system. */
export const BRAND_HUE = 264; // cobalt / blue

/** @type {{ light: SemanticSet, dark: SemanticSet }} */
export const semantic = {
  light: {
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.16 0.02 264)',

    card: 'oklch(1 0 0)',
    cardForeground: 'oklch(0.16 0.02 264)',
    popover: 'oklch(1 0 0)',
    popoverForeground: 'oklch(0.16 0.02 264)',

    primary: 'oklch(0.55 0.233 264)',
    primaryForeground: 'oklch(0.985 0.005 264)',

    secondary: 'oklch(0.968 0.007 264)',
    secondaryForeground: 'oklch(0.22 0.02 264)',

    muted: 'oklch(0.968 0.007 264)',
    mutedForeground: 'oklch(0.52 0.02 264)',

    accent: 'oklch(0.95 0.02 264)',
    accentForeground: 'oklch(0.22 0.03 264)',

    destructive: 'oklch(0.58 0.223 27)',
    destructiveForeground: 'oklch(0.985 0.005 264)',

    success: 'oklch(0.6 0.14 160)',
    successForeground: 'oklch(0.985 0.01 160)',
    warning: 'oklch(0.75 0.15 80)',
    warningForeground: 'oklch(0.28 0.05 80)',

    border: 'oklch(0.922 0.006 264)',
    input: 'oklch(0.922 0.006 264)',
    ring: 'oklch(0.55 0.233 264)',

    brandNavy: 'oklch(0.28 0.055 264)',
    brandNavyForeground: 'oklch(0.97 0.01 264)',
  },
  dark: {
    background: 'oklch(0.16 0.02 264)',
    foreground: 'oklch(0.97 0.01 264)',

    card: 'oklch(0.2 0.022 264)',
    cardForeground: 'oklch(0.97 0.01 264)',
    popover: 'oklch(0.2 0.022 264)',
    popoverForeground: 'oklch(0.97 0.01 264)',

    primary: 'oklch(0.68 0.17 264)',
    primaryForeground: 'oklch(0.16 0.02 264)',

    secondary: 'oklch(0.27 0.025 264)',
    secondaryForeground: 'oklch(0.97 0.01 264)',

    muted: 'oklch(0.27 0.025 264)',
    mutedForeground: 'oklch(0.68 0.02 264)',

    accent: 'oklch(0.3 0.03 264)',
    accentForeground: 'oklch(0.97 0.01 264)',

    destructive: 'oklch(0.66 0.19 27)',
    destructiveForeground: 'oklch(0.97 0.01 264)',

    success: 'oklch(0.68 0.14 160)',
    successForeground: 'oklch(0.18 0.03 160)',
    warning: 'oklch(0.8 0.14 80)',
    warningForeground: 'oklch(0.2 0.04 80)',

    border: 'oklch(1 0 0 / 12%)',
    input: 'oklch(1 0 0 / 15%)',
    ring: 'oklch(0.68 0.17 264)',

    brandNavy: 'oklch(0.22 0.045 264)',
    brandNavyForeground: 'oklch(0.97 0.01 264)',
  },
};

/**
 * Seeds for the absolute numeric scales (`primary-50..950`, `neutral-50..950`).
 * Only hue + chroma are read from the seed; lightness per stop comes from the
 * generator's fixed ramp. These scales do NOT theme-switch — they are the same
 * in light and dark (use them for bespoke tints; use the semantic tokens above
 * for anything that should respond to the theme).
 */
export const ramps = {
  primary: 'oklch(0.55 0.233 264)',
  neutral: 'oklch(0.55 0.012 264)',
};

/** Categorical chart colours (recharts, etc.). Distinct in both themes. */
export const chart = {
  light: [
    'oklch(0.62 0.19 264)', // blue
    'oklch(0.68 0.13 190)', // teal
    'oklch(0.58 0.2 300)', // violet
    'oklch(0.75 0.15 70)', // amber
    'oklch(0.64 0.2 15)', // rose
  ],
  dark: [
    'oklch(0.7 0.17 264)',
    'oklch(0.75 0.12 190)',
    'oklch(0.68 0.18 300)',
    'oklch(0.8 0.14 70)',
    'oklch(0.72 0.18 15)',
  ],
};

/** Base border radius in rem. sm/md/lg/xl are derived by the generator. */
export const radius = 0.625;
