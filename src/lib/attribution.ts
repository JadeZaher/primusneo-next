const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type Attribution = {
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
};

const STORAGE_KEY = "primusneo.attribution";

function emptyAttribution(): Attribution {
  return {
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  };
}

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const next = emptyAttribution();
    next.referrer = document.referrer ?? "";
    for (const key of UTM_KEYS) {
      next[key] = params.get(key) ?? "";
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage can be blocked. The form still submits.
  }
}

export function readAttribution(): Attribution {
  if (typeof window === "undefined") return emptyAttribution();
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyAttribution();
    const parsed = JSON.parse(raw) as Partial<Attribution>;
    const next = emptyAttribution();
    if (typeof parsed.referrer === "string") next.referrer = parsed.referrer;
    for (const key of UTM_KEYS) {
      const value = parsed[key];
      if (typeof value === "string") next[key] = value;
    }
    return next;
  } catch {
    return emptyAttribution();
  }
}
