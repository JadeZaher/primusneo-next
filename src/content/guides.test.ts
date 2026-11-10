import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { Inline, ProseBlock } from './essays';
import { guides, type Guide } from './guides.ts';

const REQUIRED_URLS = [
  'https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8356.pdf',
  'https://doi.org/10.6028/NIST.IR.8356',
  'https://www.nist.gov/news-events/news/2025/02/security-and-trust-considerations-digital-twin-technology-nist-releases-ir',
  'https://www.nibs.org/nbims',
  'https://nibs.org/wp-content/uploads/2025/04/NBIMS-US_V3_2.2_Industry_Foundation_Class_2X3.pdf',
  'https://www.rfc-editor.org/rfc/rfc9110.html',
  'https://www.inkandswitch.com/essay/local-first/',
  'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
  'https://doi.org/10.6028/NIST.AI.100-1',
  'https://www.gao.gov/products/gao-21-519sp',
  'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf',
  'https://doi.org/10.6028/NIST.AI.600-1',
  'https://azoa.ardanova.com/workflows/idempotent-requests',
  'https://azoa.ardanova.com/workflows/settle-once',
  'https://neos.primusneo.com/practices/keys-in-the-browser',
  '/blog/paid-twice-or-never',
  '/blog/the-file-opened-it-wasnt-the-building',
  '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud',
  '/blog/local-first-digital-twin',
  '/blog/a-recommendation-still-needs-a-name',
  '/industries/construction',
  '/industries',
  '/contact',
];

function inlineText(part: Inline): string {
  return typeof part === 'string' ? part : part.t;
}

function blockText(block: ProseBlock): string {
  if (block.kind === 'h2') return block.text;
  if (block.kind === 'ul') {
    return block.items
      .map((item) => (typeof item === 'string' ? item : item.map(inlineText).join('')))
      .join('\n');
  }
  return block.inlines.map(inlineText).join('');
}

function guideText(guide: Guide): string {
  return [
    guide.title,
    guide.description,
    ...guide.lead.map(blockText),
    ...guide.figures.flatMap((figure) => [figure.lead, figure.text]),
    ...guide.sections.map(blockText),
    guide.scenario,
    ...guide.sources.map((source) => [source.label, source.href, source.doi ?? ''].join(' ')),
    guide.sourceNote ?? '',
    ...guide.closing.map(blockText),
  ].join('\n');
}

function hrefs(guide: Guide): string[] {
  const found: string[] = [];
  const take = (part: Inline) => {
    if (typeof part !== 'string' && part.href) found.push(part.href);
  };
  for (const block of [...guide.lead, ...guide.sections, ...guide.closing]) {
    if (block.kind === 'p') block.inlines.forEach(take);
    if (block.kind === 'ul') {
      for (const item of block.items) {
        if (typeof item !== 'string') item.forEach(take);
      }
    }
  }
  for (const source of guide.sources) {
    found.push(source.href);
    if (source.doi) found.push(source.doi);
    for (const extra of source.more ?? []) found.push(extra.href);
  }
  for (const sibling of guide.siblings) found.push(sibling.href);
  return found;
}

void test('field guides keep the reviewed drafts hooked up', () => {
  assert.deepEqual(
    guides.map((guide) => guide.slug),
    [
      'digital-twins',
      'bim-ifc-exchange',
      'idempotent-requests',
      'local-first-software',
      'ai-rmf-accountability',
      'architecture-decision-records',
      'software-bill-of-materials',
      'ssdf-secure-development',
      'recommendation-lineage',
      'process-digital-twins',
    ],
  );

  const allHrefs = guides.flatMap(hrefs);
  for (const url of REQUIRED_URLS) {
    assert.ok(allHrefs.includes(url), `missing ${url}`);
  }

  const batch1 = new Set([
    'digital-twins',
    'bim-ifc-exchange',
    'idempotent-requests',
    'local-first-software',
    'ai-rmf-accountability',
  ]);
  for (const guide of guides) {
    assert.ok(guide.lead.length >= 1, guide.slug);
    assert.ok(guide.sources.length >= 1, guide.slug);
    assert.ok(guide.scenario.length > 40, guide.slug);
    if (batch1.has(guide.slug)) {
      assert.ok(guide.seoTitle.length <= 60, `${guide.seoTitle} (${guide.seoTitle.length})`);
    }
    assert.ok(guide.siblings.length >= 2, guide.slug);
  }

  const bim = guides.find((guide) => guide.slug === 'bim-ifc-exchange');
  assert.ok(bim);
  const bimText = guideText(bim);
  assert.match(bimText, /IFC 2X3/);
  assert.match(bimText, /2X3-TC1/);
  assert.doesNotMatch(bimText, /IFC\s*4/i);
  assert.doesNotMatch(bimText, /16739-1:20/);
  assert.match(bimText, /They are not cited/);
  assert.match(bimText, /does not claim a model repository or a certification/);

  const twins = guides.find((guide) => guide.slug === 'digital-twins');
  assert.ok(twins);
  assert.match(
    guideText(twins),
    /does not claim a live twin, a deployment, or an implementation that follows NIST IR 8356/,
  );

  const ai = guides.find((guide) => guide.slug === 'ai-rmf-accountability');
  assert.ok(ai);
  const aiText = guideText(ai);
  assert.match(aiText, /not a certification claim/);
  assert.match(aiText, /does not use Standish CHAOS rates/);
  assert.doesNotMatch(aiText, /CHAOS[^.\n]*%|%\s*CHAOS/i);
  assert.ok(hrefs(ai).includes('/blog/a-recommendation-still-needs-a-name'));

  const idempotent = guides.find((guide) => guide.slug === 'idempotent-requests');
  assert.ok(idempotent);
  assert.match(guideText(idempotent), /does not invent "idempotency keys"/);
  assert.match(guideText(idempotent), /does not move value/);
  assert.ok(hrefs(idempotent).includes('/guides/architecture-decision-records'));

  const adr = guides.find((guide) => guide.slug === 'architecture-decision-records');
  assert.ok(adr);
  const adrText = guideText(adr);
  assert.match(adrText, /doc\/arch\/adr-NNN\.md/);
  assert.match(adrText, /They are not a PrimusNeo rule/);
  assert.match(adrText, /It is not a certification/);
  assert.ok(hrefs(adr).includes('https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions'));

  const sbom = guides.find((guide) => guide.slug === 'software-bill-of-materials');
  assert.ok(sbom);
  const sbomText = guideText(sbom);
  assert.match(
    sbomText,
    /component dependency relationship, hash algorithm and value, identifiers, license, name, producer, version; SBOM author, author signature, data format name and version, generation context, timestamp, tool name and version, and SBOM version/,
  );
  assert.doesNotMatch(sbomText, /\b(purl|CPE|cpe23|serial number)\b/);
  assert.match(sbomText, /not a claim that PrimusNeo, a client, or a stack is SBOM-certified/);
  assert.ok(
    hrefs(sbom).includes(
      'https://www.cisa.gov/sites/default/files/2026-07/2026_cisa_sbom_minimum_elements_508c.pdf',
    ),
  );

  const ssdf = guides.find((guide) => guide.slug === 'ssdf-secure-development');
  assert.ok(ssdf);
  assert.match(guideText(ssdf), /not a certification PrimusNeo holds/);
  assert.match(guideText(ssdf), /not a claim that PrimusNeo, NEOS, AZOA/);
  assert.ok(hrefs(ssdf).includes('https://doi.org/10.6028/NIST.SP.800-218'));

  const lineage = guides.find((guide) => guide.slug === 'recommendation-lineage');
  assert.ok(lineage);
  assert.match(guideText(lineage), /AI system lifecycle dimensions/);
  assert.match(guideText(lineage), /not a certification/);
  assert.match(guideText(lineage), /or CHAOS rates/);
  assert.ok(hrefs(lineage).includes('/blog/a-recommendation-still-needs-a-name'));

  const processTwin = guides.find((guide) => guide.slug === 'process-digital-twins');
  assert.ok(processTwin);
  assert.match(
    guideText(processTwin),
    /early consideration of digital twin cybersecurity and trust/,
  );
  assert.match(guideText(processTwin), /does not claim a live PrimusNeo process twin/);
  assert.ok(hrefs(processTwin).includes('/guides/digital-twins'));
  assert.ok(hrefs(twins).includes('/guides/process-digital-twins'));
});
