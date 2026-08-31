# @agency/dashboard

**Status: stub.** Declared as a workspace so the monorepo shape is complete;
implemented in **Stage 3c** (after `@agency/api`).

## Planned stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind v4
- `@agency/ui` primitives · `@agency/sdk` (authenticated calls) ·
  `@agency/types`
- Custom JWT auth (argon2 on the API side), role-gated routes
- `react-hook-form` + zod · `@dnd-kit` (reorder) · `react-dropzone` (Cloudinary
  uploads) · `recharts` (analytics) · `sonner`
- Jest + Testing Library · Playwright

## Planned layout

```
src/app/
  (auth)/{login,register,forgot-password,reset-password,verify-email}/
  dashboard/
    layout.tsx                       # sidebar + auth guard
    <type>/                          # list + [id]/edit + new, for every managed type
    site-settings/  leads/  analytics/  users/  trash/
src/components/{forms,data-table,media,reorder,shadcn,shared}/
src/lib/{api,auth,utils}/  src/store/  src/providers/
```

## Contract

CRUD every content type defined in `@agency/types`, writing through
`@agency/api`'s authenticated routes. Publishing a document flips its
`status` to `published`, which is the only status `apps/web` renders.
