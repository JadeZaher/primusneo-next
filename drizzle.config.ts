import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  // `site_submissions` is outside this filter on purpose. Do not widen it to
  // include that table, and do not run db:push or db:migrate against production.
  tablesFilter: ["primusneo-next_*"],
} satisfies Config;
