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

const sql = postgres(url, {
  max: 1,
  connect_timeout: 15,
  onnotice: () => {},
  connection: { application_name: "primusneo-site-submissions-migrate" },
});

let failed = false;
try {
  for (const statement of statements) {
    console.log(`Applying: ${statement}`);
    await sql.unsafe(statement);
  }
  console.log("site_submissions migration applied");
} catch (error) {
  failed = true;
  const code =
    error && typeof error === "object" && "code" in error
      ? String(error.code)
      : "unknown";
  console.error(`site_submissions migration failed (${code})`);
} finally {
  await sql.end({ timeout: 5 });
}

if (failed) process.exit(1);
