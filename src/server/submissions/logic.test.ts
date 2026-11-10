import assert from "node:assert/strict";
import { test } from "node:test";

import { adminAuthStatus, tokensMatch } from "./admin-auth.ts";
import { isHoneypotTripped, submissionPayloadSchema } from "./payload.ts";
import { createRateLimiter } from "./rate-limit.ts";

void test("token comparison matches equal strings and rejects others", () => {
  assert.equal(tokensMatch("alpha", "alpha"), true);
  assert.equal(tokensMatch("alpha", "beta"), false);
  assert.equal(tokensMatch("alpha", "alpha "), false);
});

void test("admin auth returns 503 when the token is unset", () => {
  assert.equal(adminAuthStatus("Bearer secret", undefined), 503);
  assert.equal(adminAuthStatus(null, undefined), 503);
  assert.equal(adminAuthStatus("Bearer secret", ""), 503);
});

void test("admin auth returns 401 for a missing or wrong token", () => {
  assert.equal(adminAuthStatus(null, "secret"), 401);
  assert.equal(adminAuthStatus("secret", "secret"), 401);
  assert.equal(adminAuthStatus("Bearer wrong", "secret"), 401);
  assert.equal(adminAuthStatus("Bearer secret extra", "secret"), 401);
});

void test("admin auth returns 200 for the matching bearer token", () => {
  assert.equal(adminAuthStatus("Bearer secret", "secret"), 200);
});

void test("honeypot trips only when the field is filled", () => {
  assert.equal(isHoneypotTripped({ pn_hp: "" }), false);
  assert.equal(isHoneypotTripped({ pn_hp: "   " }), false);
  assert.equal(isHoneypotTripped({}), false);
  assert.equal(isHoneypotTripped({ pn_hp: "https://spam.test" }), true);
  assert.equal(isHoneypotTripped({ pn_hp: 1 }), true);
});

void test("payload accepts a contact submission and drops empty attribution", () => {
  const parsed = submissionPayloadSchema.parse({
    name: "Ada Lovelace",
    email: "Ada@Example.com",
    org: "",
    message: "The record and the room disagree.",
    formId: "contact",
    sourcePage: "/contact",
    referrer: "",
    utmSource: "newsletter",
  });
  assert.equal(parsed.email, "ada@example.com");
  assert.equal(parsed.org, null);
  assert.equal(parsed.referrer, null);
  assert.equal(parsed.utmSource, "newsletter");
  assert.equal(parsed.formId, "contact");
});

void test("payload rejects a broken email", () => {
  const parsed = submissionPayloadSchema.safeParse({
    name: "Ada",
    email: "not-an-email",
    message: "hello",
    formId: "contact",
  });
  assert.equal(parsed.success, false);
});

void test("rate limiter allows five hits in a window and blocks the sixth", () => {
  const limiter = createRateLimiter(5, 10 * 60 * 1000);
  const now = 1_000_000;
  for (let i = 0; i < 5; i += 1) {
    assert.equal(limiter.allow("203.0.113.5", now + i), true);
  }
  assert.equal(limiter.allow("203.0.113.5", now + 6), false);
  assert.equal(limiter.allow("203.0.113.9", now + 6), true);
  assert.equal(limiter.allow("203.0.113.5", now + 10 * 60 * 1000 + 6), true);
});
