# Site forms

`/contact` is the form. Newsroom, papers, and the “Talk to us” links send people there. Papers do not put a field in front of the PDF. `InlineContactForm` posts the same way, with `formId` `inline`, and no page mounts it today.

A submission stores `name`, `email`, `org`, `message`, `form_id`, `source_page`, `referrer`, the five `utm_*` values, and `user_agent`. The multi-step form folds job title, interest, stage, and “heard via” into `message`. UTMs and the referrer are read from the landing URL and kept in `sessionStorage` under `primusneo.attribution`, so a later click through to `/contact` still has them. `source_page` is the path of the page that submitted.

Nothing in the app logs the body, the email, or the admin token.

## Environment

| Variable                  | Role                                                                                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`            | Already set on the production service. Postgres connection string. The site build does not need it (`SKIP_ENV_VALIDATION`).                               |
| `SUBMISSIONS_ADMIN_TOKEN` | The only new variable. Bearer token for `GET /api/admin/submissions`. If it is unset or empty, that route returns 503 and forms still accept submissions. |

Generate a token with `openssl rand -hex 32` and set it on the Railway service. Do not commit it.

## Table

The table is `site_submissions`. It is not one of the `primusneo-next_*` Drizzle tables. Drizzle reads and writes it. Drizzle Kit does not manage it: `tablesFilter` stays `primusneo-next_*`.

Do not run `npm run db:push`, `npm run db:migrate`, or `npm run db:generate` against production for this. Those commands can plan changes to the auth tables that already live in the shared database.

## SQL that runs

This is the whole migration, from `scripts/sql/001_site_submissions.sql`. It creates one table and one index. It does not alter, rename, or drop anything else.

```sql
CREATE TABLE IF NOT EXISTS site_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  name text,
  email text NOT NULL,
  org text,
  message text NOT NULL,
  form_id text NOT NULL,
  source_page text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  user_agent text
);

CREATE INDEX IF NOT EXISTS site_submissions_created_at_idx
  ON site_submissions (created_at);
```

## How it runs on Railway

The production image starts with `npm run start`, which runs the migration and then `next start`. The migration runs at container start, not during the image build. The build still uses `SKIP_ENV_VALIDATION` and does not connect to Postgres.

If `DATABASE_URL` is unset, the script logs that it skipped and the process still starts. If the URL is set and the SQL fails, the container exits and `next start` does not run. The script refuses to execute the file if it contains a drop, alter, rename, truncate, delete, update, insert, grant, or revoke.

The same command can be run once by hand, from a shell that already has `DATABASE_URL`:

```bash
npm run db:migrate:submissions
```

## Spam

A hidden field, `pn_hp`, is the honeypot. If it is filled, the route returns 200 and stores nothing.

Each IP may store 5 submissions per 10 minutes. The counter is in memory in the Node process. One Railway instance is one counter. A second instance would keep its own.

Name, email, organization, message, and `form_id` over the length limits are rejected. Referrer, UTMs, and user agent are clipped.

## Read them back

`GET /api/admin/submissions?since=<ISO>&limit=<n>` returns JSON, newest first. `limit` defaults to 50 and cannot exceed 200. The response sets `Cache-Control: no-store` and `X-Robots-Tag: noindex, nofollow`. `/robots.txt` disallows `/api/`, and the sitemap does not list the route.

```bash
curl -sS -X POST https://primusneo.com/api/submissions \
  -H 'content-type: application/json' \
  -d '{"name":"Ada Lovelace","email":"ada@example.com","org":"Example","message":"The record and the room disagree.","formId":"contact","sourcePage":"/contact","pn_hp":""}'

curl -sS 'https://primusneo.com/api/admin/submissions?since=2026-11-01T00:00:00.000Z&limit=20' \
  -H 'authorization: Bearer YOUR_SUBMISSIONS_ADMIN_TOKEN'
```

A missing or wrong token is 401. An unset `SUBMISSIONS_ADMIN_TOKEN` is 503.
