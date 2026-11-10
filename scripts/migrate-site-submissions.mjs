import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) {
  console.log("DATABASE_URL is unset; site_submissions migration skipped");
  process.exit(0);
}

const sqlPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "sql",
  "001_site_submissions.sql",
);
const sqlText = readFileSync(sqlPath, "utf8");

// Refuse anything that is not the additive create script. This runs against a
// shared production database, so an edited file must not be able to drop or
// rewrite existing tables.
if (
  /\b(drop|alter|rename|truncate|delete|update|insert|grant|revoke)\b/i.test(
    sqlText,
  )
) {
  console.error(
    "site_submissions migration refused: statement is not additive",
  );
  process.exit(1);
}

const statements = sqlText
  .split(";")
  .map((part) => part.trim())
  .filter((part) => part.length > 0);

if (statements.length === 0) {
  console.error("site_submissions migration refused: no statements");
  process.exit(1);
}

// A dead database must not hold the container open. `npm start` runs Next after
// this script, and a dropped socket otherwise reconnects without rejecting.
const MIGRATION_DEADLINE_MS = 10_000;

let sql;
let timer;
const timedOut = new Promise((_, reject) => {
  timer = setTimeout(() => {
    const error = new Error("site_submissions migration timed out");
    error.code = "CONNECT_TIMEOUT";
    reject(error);
  }, MIGRATION_DEADLINE_MS);
});

try {
  sql = postgres(url, {
    max: 1,
    connect_timeout: 8,
    onnotice: () => {},
    connection: { application_name: "primusneo-site-submissions-migrate" },
  });
  const applying = (async () => {
    for (const statement of statements) {
      console.log(`Applying: ${statement}`);
      await sql.unsafe(statement);
    }
  })();
  // Promise.race handles the rejection that wins. The loser can still reject
  // after sql.end(), and that second rejection must not crash the process.
  void applying.catch(() => undefined);
  await Promise.race([applying, timedOut]);
  console.log("site_submissions migration applied");
} catch (error) {
  const code =
    error && typeof error === "object" && "code" in error && error.code
      ? String(error.code)
      : "unknown";
  console.error(
    `site_submissions migration failed (${code}); the site will start without it`,
  );
} finally {
  clearTimeout(timer);
  if (sql) {
    try {
      await sql.end({ timeout: 2 });
    } catch {
      console.error(
        "site_submissions migration could not close the connection",
      );
    }
  }
}
