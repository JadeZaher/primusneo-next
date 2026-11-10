import { captureAttribution, readAttribution } from "@/lib/attribution";

export type SubmitResult = "ok" | "invalid" | "rate" | "error";

export type LeadInput = {
  name: string;
  email: string;
  org?: string;
  message: string;
  formId: string;
  honeypot: string;
};

export async function submitLead(input: LeadInput): Promise<SubmitResult> {
  captureAttribution();
  const attribution = readAttribution();
  let response: Response;
  try {
    response = await fetch("/api/submissions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      signal: AbortSignal.timeout(15_000),
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        org: input.org ?? "",
        message: input.message,
        formId: input.formId,
        sourcePage: window.location.pathname,
        referrer: attribution.referrer,
        utmSource: attribution.utm_source,
        utmMedium: attribution.utm_medium,
        utmCampaign: attribution.utm_campaign,
        utmTerm: attribution.utm_term,
        utmContent: attribution.utm_content,
        pn_hp: input.honeypot,
      }),
    });
  } catch {
    return "error";
  }
  if (response.ok) return "ok";
  if (response.status === 429) return "rate";
  if (response.status === 400) return "invalid";
  return "error";
}

export function submitNotice(result: Exclude<SubmitResult, "ok">): string {
  if (result === "rate") {
    return "Five in ten minutes is the cap. Wait, then send the one that matters.";
  }
  if (result === "invalid") {
    return "The email or the message isn't usable yet.";
  }
  return "That didn't save. Try again. This site has no other inbox.";
}
