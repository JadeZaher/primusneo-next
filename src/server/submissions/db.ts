import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "~/env";
import * as schema from "~/server/db/schema";

function openSubmissions() {
  const sql = postgres(env.DATABASE_URL, {
    max: 1,
    connect_timeout: 5,
    connection: { application_name: "primusneo-site-submissions" },
  });
  return { sql, db: drizzle(sql, { schema }) };
}

// A socket that accepts and then drops the connection makes postgres.js
// reconnect forever. Bound the call, then close the client so the request
// returns and the process does not keep dialing.
const DEADLINE_MS = 8_000;

export async function withSubmissionsDb<T>(
  run: (db: ReturnType<typeof openSubmissions>["db"]) => Promise<T>,
): Promise<T> {
  const { sql, db } = openSubmissions();
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const running = run(db);
    // The deadline can win. Closing the client then rejects `running`, and that
    // second rejection must not escape as an unhandled error.
    void running.catch(() => undefined);
    return await Promise.race([
      running,
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error("unavailable")), DEADLINE_MS);
      }),
    ]);
  } finally {
    clearTimeout(timer);
    try {
      await sql.end({ timeout: 1 });
    } catch {
      // A failed close must not replace the query result or the 503.
    }
  }
}
