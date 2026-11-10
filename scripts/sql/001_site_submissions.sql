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
