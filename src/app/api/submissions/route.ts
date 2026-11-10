import { siteSubmissions } from "~/server/db/schema";
import { submissionJson } from "~/server/submissions/http";
import {
  isHoneypotTripped,
  submissionPayloadSchema,
} from "~/server/submissions/payload";
import { allowSubmission, clientIp } from "~/server/submissions/rate-limit";
import { SUBMISSION_LIMITS } from "~/lib/submission-limits";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return submissionJson(400, { ok: false, error: "invalid" });
  }

  if (isHoneypotTripped(body)) {
    return submissionJson(200, { ok: true });
  }

  const parsed = submissionPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return submissionJson(400, { ok: false, error: "invalid" });
  }

  if (!allowSubmission(clientIp(request))) {
    return submissionJson(429, { ok: false, error: "slow_down" });
  }

  const userAgentHeader = request.headers.get("user-agent");
  const userAgent = userAgentHeader
    ? userAgentHeader
        .replaceAll("\u0000", "")
        .trim()
        .slice(0, SUBMISSION_LIMITS.userAgent) || null
    : null;

  try {
    const { withSubmissionsDb } = await import("~/server/submissions/db");
    await withSubmissionsDb((db) =>
      db.insert(siteSubmissions).values({
        name: parsed.data.name,
        email: parsed.data.email,
        org: parsed.data.org,
        message: parsed.data.message,
        formId: parsed.data.formId,
        sourcePage: parsed.data.sourcePage,
        referrer: parsed.data.referrer,
        utmSource: parsed.data.utmSource,
        utmMedium: parsed.data.utmMedium,
        utmCampaign: parsed.data.utmCampaign,
        utmTerm: parsed.data.utmTerm,
        utmContent: parsed.data.utmContent,
        userAgent,
      }),
    );
  } catch {
    console.error("submission insert failed");
    return submissionJson(503, { ok: false, error: "unavailable" });
  }

  return submissionJson(200, { ok: true });
}
