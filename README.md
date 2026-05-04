# Regent Technologies Website

Production website and small admin CMS for Regent Technologies.

The public site covers services, products, industries, FAQ, contact, legal pages, and an About page. The private admin area lives only under `/hidden-admin` and manages products, FAQ, and the admin profile.

## Stack

- Next.js App Router
- Better Auth for admin email/password authentication
- Drizzle ORM with Neon Postgres
- Cloudflare R2 presigned uploads for product images
- Resend for password reset and contact emails
- Cloudflare Turnstile for contact form protection

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Copy `.env.example` to `.env.local` and fill only the services you are testing locally. Public pages can build without a database, but admin actions require `DATABASE_URL`.

## Required Environment

Core production:

```bash
NEXT_PUBLIC_SITE_URL="https://www.regenttec.com"
DATABASE_URL="postgresql://..."
BETTER_AUTH_URL="https://www.regenttec.com"
BETTER_AUTH_SECRET="generate-a-32-byte-or-longer-secret"
```

Email:

```bash
RESEND_API_KEY="..."
RESEND_FROM_EMAIL="Regent Technologies <noreply@your-domain.com>"
```

Turnstile:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY="..."
TURNSTILE_SECRET_KEY="..."
```

Cloudflare R2:

```bash
R2_ACCOUNT_ID="..."
R2_ACCESS_KEY_ID="..."
R2_SECRET_ACCESS_KEY="..."
R2_BUCKET="..."
R2_PUBLIC_BASE_URL="https://cdn.example.com"
```

First admin seed only:

```bash
ADMIN_EMAIL="..."
ADMIN_INITIAL_PASSWORD="..."
```

Do not commit real admin credentials or filled env files.

## Database

Generate a migration after schema changes:

```bash
npm run db:generate
```

Apply migrations:

```bash
npm run db:migrate
```

Seed the initial admin, products, and FAQ:

```bash
npm run db:seed
```

The seed script is idempotent and reads the admin email/password from env. Sign-up is disabled during normal runtime.

## Admin

- Login: `/hidden-admin`
- Dashboard: `/hidden-admin/dashboard`
- Products: `/hidden-admin/dashboard/products`
- FAQ: `/hidden-admin/dashboard/faqs`
- Profile: `/hidden-admin/dashboard/profile`

Product fields:

- `name` and `description` are required.
- `slug`, `metaTitle`, and `metaDescription` auto-fill when left blank.
- Up to 3 images are supported.
- R2 uploads are available when R2 env vars are configured.

## Deployment Order

1. Add all production env vars in Vercel.
2. Run `npm run db:migrate` against Neon.
3. Run `npm run db:seed` once with admin seed env vars present.
4. Remove seed-only env vars from Vercel after the admin account exists.
5. Deploy and verify `/`, `/products`, `/industries`, `/contact`, `/faq`, and `/hidden-admin`.

## Verification

```bash
npm run lint
npm run build
npm audit --omit=dev
```

`npm audit --omit=dev` currently reports moderate transitive advisories from Next/PostCSS, Drizzle Kit/esbuild, and Resend/svix. Do not run `npm audit fix --force` without reviewing the resulting package changes because npm proposes breaking/downgrade fixes.
