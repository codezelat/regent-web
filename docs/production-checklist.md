# Production Checklist

Use this before a Regent Technologies deployment.

## Content

- Product names, descriptions, slugs, and meta descriptions are reviewed.
- Arden Router Bits stays featured on the products page.
- Industries have index and detail pages.
- Contact address, phone numbers, email, Facebook, and Instagram are correct.
- Legal pages match the current service model.

## Environment

- `NEXT_PUBLIC_SITE_URL` and `BETTER_AUTH_URL` use the production domain.
- `BETTER_AUTH_SECRET` is a strong secret and is not reused from local development.
- Neon `DATABASE_URL` is set.
- Resend sender domain is verified.
- Turnstile site key and secret are set.
- R2 bucket, credentials, and public base URL are set.

## Database

- `npm run db:migrate` completed.
- `npm run db:seed` completed once.
- Seed-only admin env vars were removed after seeding.
- `/hidden-admin` login works.
- Product create, edit, delete, publish, search, and image fields work.
- FAQ create, edit, delete, and publish work.

## Final Checks

- `npm run lint`
- `npm run build`
- Public route checks: `/`, `/about`, `/products`, `/industries`, `/contact`, `/faq`
- Admin route checks: `/hidden-admin`, `/hidden-admin/dashboard`
- Contact form sends to the configured admin mailbox.
- Password reset email is delivered.
- No real admin password is stored in code, docs, or committed env files.
