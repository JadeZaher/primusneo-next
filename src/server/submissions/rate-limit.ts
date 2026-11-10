import {
  RATE_LIMIT_MAX,
  RATE_LIMIT_WINDOW_MS,
} from "../../lib/submission-limits.mjs";

type Limiter = {
  allow: (ip: string, now?: number) => boolean;
};

export function createRateLimiter(
  limit = RATE_LIMIT_MAX,
  windowMs = RATE_LIMIT_WINDOW_MS,
): Limiter {
  const buckets = new Map<string, number[]>();
  return {
    allow(ip: string, now = Date.now()) {
      const recent = (buckets.get(ip) ?? []).filter(
        (hit) => now - hit < windowMs,
      );
      if (recent.length >= limit) {
        buckets.set(ip, recent);
        return false;
      }
      recent.push(now);
      buckets.set(ip, recent);
      if (buckets.size > 5000) {
        for (const [key, times] of buckets) {
          const fresh = times.filter((hit) => now - hit < windowMs);
          if (fresh.length === 0) buckets.delete(key);
          else buckets.set(key, fresh);
        }
      }
      return true;
    },
  };
}

const globalForLimit = globalThis as typeof globalThis & {
  __pnSubmissionLimiter?: Limiter;
};

function limiter() {
  globalForLimit.__pnSubmissionLimiter ??= createRateLimiter();
  return globalForLimit.__pnSubmissionLimiter;
}

export function allowSubmission(ip: string): boolean {
  return limiter().allow(ip);
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  const raw = first || request.headers.get("x-real-ip")?.trim() || "unknown";
  return raw.slice(0, 128) || "unknown";
}
