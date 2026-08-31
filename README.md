# Agency

Monorepo for the agency platform. Built in three stages — this repo is currently
at **Stage 3, first pass (web-first)**: the full monorepo structure is in place,
`apps/web` is the live focus, `apps/api` / `apps/dashboard` are declared stubs
for later passes.

> **Name note:** `@agency` / "Agency" is a **placeholder** — the real name is
> undecided. See [`contexts/context-2026-08-31.md`](contexts/context-2026-08-31.md).

## Layout

```
apps/
  web/          Public marketing website (Next.js 16, App Router)      [ACTIVE]
  dashboard/    CMS / admin dashboard (Next.js 16)                     [stub]
  api/          Shared backend (Express + MongoDB)                     [stub]
packages/
  config/       ESLint / TS / Tailwind presets + generated colour palette   @agency/config
  types/        Domain types + zod schemas (the frozen content contract)    @agency/types
  sdk/          Typed content client + swappable transports                 @agency/sdk
  ui/           shadcn/Radix component primitives                           @agency/ui
```

## Requirements

- Node `>=20` (`.nvmrc` pins 22)
- pnpm `10.x` (`corepack enable` or install manually)

## Getting started

```bash
pnpm install
cp apps/web/.env.local.example apps/web/.env.local   # optional; needed only for the contact form
pnpm dev:web          # http://localhost:3000
```

Workspace-wide checks (run before pushing — CI runs the same):

```bash
pnpm type-check       # turbo run type-check
pnpm lint             # turbo run lint   (web is --max-warnings=0)
pnpm test             # turbo run test
pnpm build            # turbo run build  (regenerates the colour palette first)
```

---

## The data seam — read this first

`apps/web` **never** calls a database or `fetch` directly. Every page reads
content through `apps/web/src/lib/content/*`, backed by `@agency/sdk`. The client
is built once, with a **transport**, in **`apps/web/src/lib/content/client.ts`**:

- **now** — `fixtureTransport(dataset)` over typed placeholder content in
  `apps/web/src/content/*`
- **Stage 3b** — `httpTransport({ baseUrl: process.env.CMS_API_BASE_URL })`
  against `apps/api`

Swapping transports is that one file plus an env var. Pages, components,
`@agency/types` and the `src/lib/content/*` accessors never change.

---

## Where things live — how to make common changes

### Add or edit website copy / sample data

Everything the site renders is in **`apps/web/src/content/`**, one file per type:
`services.ts`, `blog.ts`, `portfolio.ts`, `case-studies.ts`, `testimonials.ts`,
`faqs.ts`, `industries.ts`, `team.ts`, `site-settings.ts`, `legal.ts`.

- **Nav, footer, socials, phone/email/address, headline stats** →
  `apps/web/src/content/site-settings.ts`
- **Legal page bodies** → `apps/web/src/content/legal.ts` (static, not a managed type)
- Edit values only. If a field doesn't exist on the type, add it in
  `packages/types` first (next section).

### Add a field to a content type

1. `packages/types/src/schemas/<type>.ts` — add the zod field (+ inferred type
   flows automatically).
2. `packages/types/src/index.ts` re-exports it; no other wiring.
3. Use it in `apps/web/src/content/<type>.ts` and in the component that renders it.
4. `pnpm --filter @agency/types type-check`.

The contract is **extended, never reshaped** — don't rename or remove fields.

### Add a new content type

1. New `packages/types/src/schemas/<type>.ts` + add to `schemas/index.ts` and
   the `CONTENT_COLLECTIONS` list in `packages/types/src/index.ts`.
2. `packages/sdk/src/types.ts` — add the collection to `TransportCollection`,
   `FixtureDataset`, `ContentClient`; `packages/sdk/src/client.ts` — add the
   `makeResource(...)` line; `packages/sdk/src/transports/{fixture,http}.ts` —
   add the endpoint mapping.
3. `apps/web/src/content/<type>.ts` (fixture data) + add to
   `apps/web/src/content/index.ts` `dataset`.
4. `apps/web/src/lib/content/<type>.ts` — thin accessors (`get<Type>s`, `get<Type>`).
5. Pages/components as needed.

### Add / change a page or route

- Routes live in **`apps/web/src/app/(marketing)/`** (public) and
  `apps/web/src/app/(marketing)/(legal)/` (legal). Each `page.tsx` is an `async`
  Server Component: fetch via `@/lib/content/*`, pass data to section components.
- Per-route SEO: `export const metadata` / `generateMetadata` using
  `@/lib/seo/metadata` (`buildMetadata`). JSON-LD helpers in
  `@/lib/seo/structured-data`.
- Add the path to `apps/web/src/app/sitemap.ts` (dynamic slugs are pulled from
  the content accessors automatically).

### Build / restyle a UI block

- **Section blocks** (Hero, ServiceGrid, Testimonials, FaqAccordion, …) →
  `apps/web/src/components/sections/`
- **Shared chrome** (SiteHeader, MegaMenu, MobileNav, SiteFooter,
  FloatingContact, cards) → `apps/web/src/components/shared/`
- **Primitives** (Button, Card, Input, Accordion, …) → `packages/ui/src/components/`
  (shared with the future dashboard). Add new shadcn parts here; keep them
  headless/presentational.
- Global CSS (base layer, `.container-page`, `.section-pad`) →
  `apps/web/src/styles/globals.css`.

### Change colours / the theme

**Edit one file:** `packages/config/colors/palette.mjs` (semantic light/dark,
ramp seeds, chart hues, `BRAND_HUE`, radius). Then:

```bash
pnpm --filter @agency/config gen     # regenerates the two files below
```

- `packages/config/tailwind/tokens.css` — **generated**, drives Tailwind
  utilities (`bg-primary`, `text-muted-foreground`, `bg-success`,
  `text-success-foreground`, `bg-chart-1`, `bg-primary-100`, `border-neutral-200`).
- `packages/config/colors/index.ts` — **generated**, `import { colors, cssVar }
from '@agency/config/colors'` for colour _values_ (viewport `themeColor`, OG
  images, email, charts). Never hardcode hex; the only exception is the
  third-party WhatsApp/Telegram brand colours in `floating-contact.tsx`.

Semantic tokens are theme-aware; numeric scales (`primary-50..950`,
`neutral-50..950`) are absolute. `turbo build` runs the generator automatically.

### Change lint / TypeScript / formatting rules

- ESLint: `packages/config/eslint/base.mjs` (all packages) and `next.mjs` (the
  Next apps). Each package's `eslint.config.mjs` just re-exports one of these.
- TypeScript: `packages/config/typescript/{base,nextjs,react-library}.json`.
  Each package's `tsconfig.json` `extends` one.
- Prettier: `.prettierrc` / `.prettierignore` at the repo root.
- Commit message rules: `commitlint.config.js` (Conventional Commits; scopes:
  `web api dashboard config types sdk ui repo deps ci`).

### The contact form

`apps/web/src/app/api/contact/route.ts` (JSON endpoint) and
`apps/web/src/lib/actions/contact.ts` (Server Action) both call
`apps/web/src/lib/leads/submit.ts` → `apps/web/src/lib/email/*` (nodemailer).
Needs `SMTP_*` + `CONTACT_EMAIL` in `apps/web/.env.local`; without them it
returns a clear "not configured" error.

---

## Turborepo

`turbo.json` defines `build / dev / start / lint / type-check / test`.
`^build` dependencies mean `@agency/config#build` (the palette generator) runs
before anything that consumes it. Filter a single package with
`pnpm --filter @agency/web <script>` or `pnpm turbo run <task> --filter=@agency/web`.

## Hosting

Each app is its own Vercel project (root directory `apps/<name>`). Database
(Stage 3b) is MongoDB Atlas.
