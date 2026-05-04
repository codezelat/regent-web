# Regent Technologies Website

Next.js App Router site with a small admin CMS for products and FAQ.

## Getting Started

Install dependencies and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment

Create `.env.local` from `.env.example`.

Required for production:

- `DATABASE_URL`: Neon Postgres connection string.
- `BETTER_AUTH_URL`: Production origin.
- `BETTER_AUTH_SECRET`: 32+ character secret.
- `RESEND_API_KEY` and `RESEND_FROM_EMAIL`: contact and password reset email.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`: contact form protection.

Required only for first admin seed:

- `ADMIN_EMAIL`
- `ADMIN_INITIAL_PASSWORD`

Required for product image uploads:

- `R2_ACCOUNT_ID`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_BUCKET`
- `R2_PUBLIC_BASE_URL`

## Database

Generate and apply migrations:

```bash
npm run db:generate
npm run db:migrate
```

Seed the initial admin, products, and FAQ after the database is ready:

```bash
npm run db:seed
```

The admin area is at `/hidden-admin`. Sign-up is disabled outside the seed command.

## Deployment

On Vercel, set all production env vars before running the seed. Do not store admin credentials in source files, docs, or committed env files.
