import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { governingLaw, operator, operatorPostalAddress } from "./operator.ts";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));

const textExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".md",
  ".mdx",
  ".txt",
  ".json",
  ".html",
]);

const street =
  /\b\d{1,6}\s+(?:[NSEW]\.?\s+)?(?:[A-Z][a-zA-Z.'-]{1,30}\s+){1,5}(?:Street|St|Avenue|Ave|Boulevard|Blvd|Road|Rd|Drive|Dr|Lane|Ln|Court|Ct|Place|Pl|Circle|Cir|Way|Terrace|Ter|Parkway|Pkwy)\.?(?!\w)/g;

const zip = /(?<![\d.=/#-])(?<!ISO )(?<!NIST )(?<!RFC )(?<!IEEE )(?<!ANSI )(?<!IEC )(?<!ASTM )\b\d{5}(?:-\d{4})?\b(?![\d.])/g;

const poBox = /\bP\.?\s*O\.?\s*Box\b/gi;

function isPublicSource(path: string): boolean {
  const rel = relative(repoRoot, path);
  if (!rel.startsWith("src/app/") && !rel.startsWith("src/content/")) return false;
  if (/\.(?:test|spec)\.[cm]?[jt]sx?$/.test(rel)) return false;
  const dot = rel.lastIndexOf(".");
  return dot >= 0 && textExtensions.has(rel.slice(dot));
}

function countIn(text: string, pattern: RegExp): number {
  pattern.lastIndex = 0;
  return [...text.matchAll(pattern)].length;
}

function countPublicAddressForms(): { streets: number; zips: number; boxes: number } {
  const counts = { streets: 0, zips: 0, boxes: 0 };
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      if (entry === "node_modules" || entry === ".next" || entry === ".git") continue;
      const path = join(dir, entry);
      const stat = statSync(path);
      if (stat.isDirectory()) {
        walk(path);
        continue;
      }
      if (!isPublicSource(path)) continue;
      const text = readFileSync(path, "utf8").replace(/https?:\/\/\S+/g, "");
      counts.streets += countIn(text, street);
      counts.zips += countIn(text, zip);
      counts.boxes += countIn(text, poBox);
    }
  };
  walk(repoRoot);
  return counts;
}

void test("operator line is the city and the email", () => {
  const operatorLine = `${operator.locality}, ${operator.email}`;
  assert.equal(operatorLine, "Boise, Idaho, contact@escherbridge.com");
  assert.equal(operator.entity, "Escherbridge, LLC");
  assert.deepEqual(Object.keys(operator).sort(), [
    "contactName",
    "email",
    "entity",
    "locality",
    "phoneDisplay",
    "phoneTel",
  ]);
  assert.deepEqual(Object.keys(operatorPostalAddress).sort(), [
    "@type",
    "addressCountry",
    "addressLocality",
    "addressRegion",
  ]);
  assert.equal(operatorPostalAddress["@type"], "PostalAddress");
  assert.equal(operatorPostalAddress.addressLocality, "Boise");
  assert.equal(operatorPostalAddress.addressRegion, "ID");
  assert.equal(operatorPostalAddress.addressCountry, "US");
  assert.match(governingLaw, /State of Idaho/);
  assert.match(governingLaw, /Ada County/);
});

void test("public pages do not match a street, a ZIP, or a postal box", () => {
  const counts = countPublicAddressForms();
  assert.equal(counts.streets, 0);
  assert.equal(counts.zips, 0);
  assert.equal(counts.boxes, 0);
});
