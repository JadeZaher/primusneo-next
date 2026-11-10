import { createHash, timingSafeEqual } from "node:crypto";

export function tokensMatch(provided: string, expected: string): boolean {
  const a = createHash("sha256").update(provided, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

export function adminAuthStatus(
  authorization: string | null,
  expected: string | undefined,
): 200 | 401 | 503 {
  if (!expected) return 503;
  const match = authorization
    ? /^Bearer\s+(\S+)\s*$/.exec(authorization)
    : null;
  if (!match?.[1]) return 401;
  if (!tokensMatch(match[1], expected)) return 401;
  return 200;
}
