# @agency/api

**Status: stub.** Declared as a workspace so the monorepo shape is complete;
implemented in **Stage 3b**.

## Planned stack

- Node + **Express**, TypeScript
- **MongoDB + Mongoose**
- zod validation · argon2 password hashing · JWT (access + refresh)
- Cloudinary media uploads
- nodemailer (transactional email) · Winston logging
- Swagger (`swagger-jsdoc` + `swagger-ui-express`) at `/api/docs`
- Jest + `mongodb-memory-server`
- Deploys to Vercel (serverless) · MongoDB Atlas

## Planned layout

```
src/
  app.ts  index.ts  vercel.ts
  app/
    <domain>/{routes,controllers,services,models,validations,interfaces}
      # services, blog, portfolio, case-studies, testimonials, faq,
      # industries, team, site-settings, leads, analytics, auth, users
    shared/{middleware,enums,utils}
    mappers/
  config/   scripts/   templates/   tests/
```

## Contract

Every `<domain>` exposes a public read route (`GET /api/v1/<domain>/public`,
published only, unauthenticated) matching what `@agency/sdk`'s `httpTransport`
already calls, plus authenticated dashboard routes (`verifyToken` + role guard).
Types come from `@agency/types` — do not redefine them here.

## Bring-up checklist (Stage 3b)

1. Scaffold Express app + per-domain modules from the layout above.
2. Model each `@agency/types` schema in Mongoose.
3. Port `seed-from-web-content` to import `apps/web/src/content/*`.
4. Point `apps/web`'s `CMS_API_BASE_URL` at this service and flip
   `apps/web/src/lib/content/client.ts` from `fixtureTransport` to
   `httpTransport`.
