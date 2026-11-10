import { desc, gte } from "drizzle-orm";

import { siteSubmissions } from "~/server/db/schema";
import { adminAuthStatus } from "~/server/submissions/admin-auth";
import { submissionJson } from "~/server/submissions/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 200;

export async function GET(request: Request) {
  let token: string | undefined;
  try {
    const { env } = await import("~/env");
    token = env.SUBMISSIONS_ADMIN_TOKEN;
  } catch {
    console.error("submission read failed");
    return submissionJson(503, { error: "unavailable" });
  }

  const status = adminAuthStatus(request.headers.get("authorization"), token);
  if (status === 503) {
    return submissionJson(503, { error: "unavailable" });
  }
  if (status === 401) {
    return submissionJson(401, { error: "unauthorized" });
  }

  const url = new URL(request.url);
  const sinceParam = url.searchParams.get("since");
  let since: Date | undefined;
  if (sinceParam) {
    const parsed = new Date(sinceParam);
    if (Number.isNaN(parsed.getTime())) {
      return submissionJson(400, { error: "invalid_since" });
    }
    since = parsed;
  }

  const limitParam = url.searchParams.get("limit");
  let limit = DEFAULT_LIMIT;
  if (limitParam !== null) {
    if (!/^\d+$/.test(limitParam)) {
      return submissionJson(400, { error: "invalid_limit" });
    }
    limit = Number(limitParam);
    if (limit < 1 || limit > MAX_LIMIT) {
      return submissionJson(400, { error: "invalid_limit" });
    }
  }

  try {
    const { withSubmissionsDb } = await import("~/server/submissions/db");
    const rows = await withSubmissionsDb((db) =>
      since
        ? db
            .select()
            .from(siteSubmissions)
            .where(gte(siteSubmissions.createdAt, since))
            .orderBy(desc(siteSubmissions.createdAt))
            .limit(limit)
        : db
            .select()
            .from(siteSubmissions)
            .orderBy(desc(siteSubmissions.createdAt))
            .limit(limit),
    );

    return submissionJson(200, {
      submissions: rows.map((row) => ({
        id: row.id,
        created_at: row.createdAt.toISOString(),
        name: row.name,
        email: row.email,
        org: row.org,
        message: row.message,
        form_id: row.formId,
        source_page: row.sourcePage,
        referrer: row.referrer,
        utm_source: row.utmSource,
        utm_medium: row.utmMedium,
        utm_campaign: row.utmCampaign,
        utm_term: row.utmTerm,
        utm_content: row.utmContent,
        user_agent: row.userAgent,
      })),
    });
  } catch {
    console.error("submission read failed");
    return submissionJson(503, { error: "unavailable" });
  }
}
