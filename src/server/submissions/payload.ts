import { z } from "zod";

import { SUBMISSION_LIMITS } from "../../lib/submission-limits.mjs";

function clip(max: number) {
  return z
    .string()
    .nullish()
    .transform((value) => {
      if (!value) return null;
      const cleaned = value.replaceAll("\u0000", "").trim();
      if (!cleaned) return null;
      return cleaned.slice(0, max);
    });
}

export const submissionPayloadSchema = z.object({
  name: z
    .string()
    .transform((value) => value.replaceAll("\u0000", "").trim())
    .pipe(z.string().min(1).max(SUBMISSION_LIMITS.name)),
  email: z
    .string()
    .transform((value) => value.replaceAll("\u0000", "").trim().toLowerCase())
    .pipe(z.string().email().max(SUBMISSION_LIMITS.email)),
  org: clip(SUBMISSION_LIMITS.org),
  message: z
    .string()
    .transform((value) => value.replaceAll("\u0000", "").trim())
    .pipe(z.string().min(1).max(SUBMISSION_LIMITS.message)),
  formId: z
    .string()
    .transform((value) => value.replaceAll("\u0000", "").trim())
    .pipe(
      z
        .string()
        .min(1)
        .max(SUBMISSION_LIMITS.formId)
        .regex(/^[a-z0-9][a-z0-9_-]*$/),
    ),
  sourcePage: z
    .string()
    .nullish()
    .transform((value) => {
      if (!value) return null;
      const cleaned = value
        .replaceAll("\u0000", "")
        .trim()
        .slice(0, SUBMISSION_LIMITS.sourcePage);
      if (
        !cleaned.startsWith("/") ||
        cleaned.includes("://") ||
        /\s/.test(cleaned)
      ) {
        return null;
      }
      return cleaned;
    }),
  referrer: clip(SUBMISSION_LIMITS.referrer),
  utmSource: clip(SUBMISSION_LIMITS.utm),
  utmMedium: clip(SUBMISSION_LIMITS.utm),
  utmCampaign: clip(SUBMISSION_LIMITS.utm),
  utmTerm: clip(SUBMISSION_LIMITS.utm),
  utmContent: clip(SUBMISSION_LIMITS.utm),
});

export type SubmissionPayload = z.infer<typeof submissionPayloadSchema>;

export function isHoneypotTripped(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const value = (body as Record<string, unknown>).pn_hp;
  if (value == null || value === "") return false;
  if (typeof value === "string") return value.trim() !== "";
  return true;
}
