/**
 * Field guides. Substance, figures, and source URLs come from the reviewed
 * drafts. When a fact-check correction arrives, change the figure or the URL
 * here. Do not rename a slug after publish.
 */

import type { Inline, ProseBlock } from './essays';
import type { CitedSource } from '@/lib/jsonld';

const a = (t: string, href: string): Inline => ({ t, href });
const p = (...inlines: Inline[]): ProseBlock => ({ kind: 'p', inlines });
const h2 = (text: string): ProseBlock => ({ kind: 'h2', text });

export type GuideLink = { label: string; href: string; note?: string };

export type GuideSource = CitedSource & {
  label: string;
  href: string;
  doi?: string;
};

export type GuideFigure = { lead: string; text: string };

export type Guide = {
  slug: string;
  /** H1. */
  title: string;
  /** Document title, Open Graph title, and Twitter title, including the brand. */
  seoTitle: string;
  /** Breadcrumb label. Shorter than the H1 when the draft says so. */
  crumb: string;
  eyebrow: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  lastReviewed: string;
  metric: string;
  metricLabel: string;
  /** Index card. Two sentences from the draft, not a new claim. */
  cardDescription: string;
  /** Cross-cutting card on the index. The child page carries the citation. */
  patternTitle: string;
  patternDescription: string;
  /** Opening paragraphs. The first one is the standfirst. */
  lead: ProseBlock[];
  figures: GuideFigure[];
  sections: ProseBlock[];
  /** Worked example. The template labels it as an illustrative scenario. */
  scenario: string;
  sources: GuideSource[];
  /** Shown under the source list. Not itself a citation. */
  sourceNote?: string;
  siblings: GuideLink[];
  closing: ProseBlock[];
};

export const guides: Guide[] = [
  {
    slug: 'digital-twins',
    title: 'What is a digital twin',
    seoTitle: 'What is a digital twin — Guides | PrimusNeo',
    crumb: 'What is a digital twin',
    eyebrow: 'Digital twins',
    description:
      'A digital twin, in NIST’s words, is an electronic representation you can evaluate. This guide covers that definition and the interoperability limit.',
    excerpt:
      'A digital twin, in NIST’s words, is an electronic representation you can evaluate. This guide covers that definition and the interoperability limit.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'IR 8356',
    metricLabel: 'NIST, February 2025 — an electronic representation you can evaluate',
    cardDescription:
      'A digital twin, in NIST\'s own words, is an electronic representation of a real-world entity that you can evaluate — and that entity may be a process or a conceptual model, not only a building or a device. If you cannot say what is being represented, and whether you can evaluate it, you do not yet have a twin.',
    patternTitle: 'A representation you can evaluate',
    patternDescription:
      'NIST IR 8356 defines a digital twin as an electronic representation of a real-world entity that you can evaluate. The entity may be a process or a conceptual model, not only a building or a device.',
    lead: [
      p(
        'A digital twin, in NIST\'s own words, is an electronic representation of a real-world entity that you can evaluate — and that entity may be a process or a conceptual model, not only a building or a device. If you cannot say what is being represented, and whether you can evaluate it, you do not yet have a twin. You have a slide.',
      ),
      p(
        'This is a field definition, not a product announcement, and not a claim that PrimusNeo runs a live twin. ',
        a(
          'Ground truth with a receipt, which is more than most digital twins can say',
          '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud',
        ),
        ', is a house line that already belongs next to this subject; it is quoted once here, and the argument under it is NIST\'s.',
      ),
    ],
    figures: [
      {
        lead: 'NIST IR 8356, February 2025, opening definition:',
        text: '"A digital twin (DT) is an electronic representation of a real-world entity; providing the capability to evaluate this entity. A digital twin can emulate both physical things (e.g., buildings, electronics, living things), and non-physical things (e.g., processes, conceptual models)."',
      },
      {
        lead: 'The same report on the interoperability limit:',
        text: '"The full benefits of digital twin technology will require interoperable definitions, tools, and standards as well as early consideration of digital twin" issues. The sentence is quoted only through the words actually on the page; the rest of a cut-off line is not invented here.',
      },
      {
        lead: 'NIST\'s 14 February 2025 news release',
        text: 'restates the same idea: the report "introduces the concept of a digital twin (DT), which is an electronic representation of a real-world physical (e.g., buildings, electronics, living things) or non-physical (e.g., processes, conceptual models) entity."',
      },
    ],
    sections: [
      h2('NIST\'s definition, in NIST\'s words'),
      p(
        'The useful parts are already in the opening sentence: an electronic representation; the capability to evaluate the entity; and a scope that includes processes and conceptual models, not only a machine or a building. A model you cannot evaluate is not, on this definition, a twin.',
      ),
      p(
        'The same report also quotes the Digital Twin Consortium description, including: "A digital twin is a virtual representation of real-world entities and processes synchronized at a specified frequency and fidelity." That sentence is NIST quoting the Consortium, not NIST\'s own definition. It is useful as a reminder that synchronization, when it is claimed, has to name a frequency and a fidelity. It is not a second competing lede.',
      ),
      h2('The interoperability limit'),
      p(
        'NIST says the full benefits require interoperable definitions, tools, and standards, and early consideration of digital-twin issues. That is a research finding in the report, not a PrimusNeo roadmap, and not a certification claim. A ',
        a('BIM exchange', '/guides/bim-ifc-exchange'),
        ' that names the schema actually used is related work; a model exchange is not automatically a twin.',
      ),
      p(
        'This page does not invent coverage percentages, market sizes, or "X percent of factories already have twins." It does not discuss vulnerabilities or attack steps.',
      ),
      h2('What to write down'),
      p(
        'A twin still needs a record of what it represents, how often it is synchronized, and who accepts a decision made with it. The essays ',
        a(
          'A digital twin shouldn\'t live in someone else\'s cloud',
          '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud',
        ),
        ' and ',
        a('Local-first digital twin', '/blog/local-first-digital-twin'),
        ' take up the custody side of that habit. ',
        a('What is local-first software', '/guides/local-first-software'),
        ' is the field argument those essays already lean on. The ',
        a('construction industry page', '/industries/construction'),
        ' is the sector sibling where a built-environment twin is often proposed.',
      ),
      p(
        'PrimusNeo does not claim a live twin, a deployment, or an IR 8356 implementation. ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ', and ',
        a('ArdaNova', 'https://ardanova.com'),
        ' are named here as other layers in the same stack, not as twin products.',
      ),
    ],
    scenario:
      'This is a worked example, not a customer and not a deployment. A proposal describes "a digital twin of the process" and attaches a diagram with no named entity, no evaluation method, and no synchronization frequency. The useful questions are already in NIST\'s opening sentence and in the Consortium wording NIST quotes.',
    sources: [
      {
        label:
          'Voas, Mell, Laplante, and Piroumian, Security and Trust Considerations for Digital Twin Technology, NIST IR 8356, February 2025.',
        title: 'Security and Trust Considerations for Digital Twin Technology',
        href: 'https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8356.pdf',
        doi: 'https://doi.org/10.6028/NIST.IR.8356',
        org: 'NIST',
        year: '2025',
      },
      {
        label:
          'NIST, "Security and Trust Considerations for Digital Twin Technology: NIST Releases IR 8356," 14 February 2025.',
        title:
          'Security and Trust Considerations for Digital Twin Technology: NIST Releases IR 8356',
        href: 'https://www.nist.gov/news-events/news/2025/02/security-and-trust-considerations-digital-twin-technology-nist-releases-ir',
        org: 'NIST',
        year: '2025',
      },
    ],
    siblings: [
      {
        label: 'BIM and IFC file exchange',
        href: '/guides/bim-ifc-exchange',
        note: 'say which schema the file actually is.',
      },
      {
        label: 'What is local-first software',
        href: '/guides/local-first-software',
        note: 'the copy on the device as the primary copy.',
      },
      {
        label: 'AI accountability: NIST AI RMF and the GAO framework',
        href: '/guides/ai-rmf-accountability',
        note: 'a recommendation still needs a name on it.',
      },
    ],
    closing: [
      p(
        'The useful next step is to say what is being represented and how it can be evaluated, or to read the ',
        a('industries index', '/industries'),
        '. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'bim-ifc-exchange',
    title: 'BIM and IFC file exchange: say which schema the file is',
    seoTitle: 'BIM and IFC file exchange — Guides | PrimusNeo',
    crumb: 'BIM and IFC file exchange',
    eyebrow: 'BIM exchanges',
    description:
      'A BIM file that cannot be opened later is not an exchange. This guide covers what NBIMS-US Version 3 approved for IFC, and naming the schema.',
    excerpt:
      'A BIM file that cannot be opened later is not an exchange. This guide covers what NBIMS-US Version 3 approved for IFC, and naming the schema.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'IFC 2X3',
    metricLabel: 'NBIMS-US Version 3, chapter 2.2 — the approved exchange in that edition',
    cardDescription:
      'A building information model that cannot be opened later is not an exchange. "Send the IFC" is not a complete instruction.',
    patternTitle: 'Name the schema on the file',
    patternDescription:
      'In NBIMS-US Version 3, chapter 2.2, the approved exchange is IFC 2X3 (February 2006). This guide does not name a later official IFC version.',
    lead: [
      p(
        'A building information model that cannot be opened later is not an exchange. "Send the IFC" is not a complete instruction. The record has to name the schema that was actually used, and someone has to keep a file that actually opens.',
      ),
      p(
        'This is a field note about naming the exchange, not a claim that PrimusNeo hosts models. It quotes the opened National BIM Standard–United States Version 3 reference-standards chapter. It does not name a later IFC release, because the official buildingSMART IFC page and the ISO 16739-1 catalogue page both returned HTTP 403 from the research network on 10 November 2026 and were not opened. A current official IFC version is not announced here from memory or from a search snippet.',
      ),
    ],
    figures: [
      {
        lead: 'The National Institute of Building Sciences hosts the National BIM Standard–United States (NBIMS-US™).',
        text: 'The opened landing page describes NBIMS-US as providing "consensus-based standards" and "Defining BIM uses, requirements, planning and documentation for information exchanges to deliver best business practices for the entire built environment." The same landing lists both NBIMS-US V4 and NBIMS-US V3. This page is explicit about quoting V3 chapter 2.2; it does not invent V4\'s schema list.',
      },
      {
        lead: 'NBIMS-US Version 3, chapter 2.2, "ISO 16739, Industry Foundation Class 2X3 – February 2006."',
        text: '"The scope of ISO 16739, Industry Foundation Class (IFC) 2X3, February 2006, authored by buildingSMART International, is to provide a neutral exchange format based on STEP/XML." "The approved exchanges within NBIMS-US™ is IFC 2X3."',
      },
    ],
    sections: [
      h2('What that V3 chapter actually approved'),
      p(
        'In that edition, the approved NBIMS-US exchange is IFC 2X3 (February 2006), a neutral format based on STEP/XML, authored by buildingSMART International. The chapter also says "The current international specification for IFC is 2X3-TC1." That "current" line is a statement inside the V3 chapter, not a 2026 fact, and it is not used here as one.',
      ),
      p(
        'If a later project used a later schema, the record should say so — once that schema can be cited from an opened official page. Until then, this page does not guess. It also does not invent interchange success rates, or claim that "IFC is universally supported."',
      ),
      p(
        'The narrative sibling is the live essay ',
        a('The file opened. It wasn\'t the building.', '/blog/the-file-opened-it-wasnt-the-building'),
        '. A ',
        a('digital twin', '/guides/digital-twins'),
        ' is a related idea; a model exchange is not automatically a twin. The ',
        a('construction industry page', '/industries/construction'),
        ' is the sector sibling.',
      ),
      h2('What to write down'),
      p(
        'Say which schema, which edition of the standard you are following, and keep a file that opens. PrimusNeo does not claim a model repository or a certification.',
      ),
    ],
    scenario:
      'This is a worked example, not a customer. A handover note says "IFC attached," the attachment has no schema name, and a later software version will not open it. The useful instruction was already longer than "send the IFC."',
    sources: [
      {
        label: 'National Institute of Building Sciences, National BIM Standard–United States landing.',
        title: 'National BIM Standard–United States',
        href: 'https://www.nibs.org/nbims',
        org: 'National Institute of Building Sciences',
      },
      {
        label:
          'NBIMS-US Version 3, chapter 2.2, "ISO 16739, Industry Foundation Class 2X3 – February 2006."',
        title: 'ISO 16739, Industry Foundation Class 2X3 – February 2006',
        href: 'https://nibs.org/wp-content/uploads/2025/04/NBIMS-US_V3_2.2_Industry_Foundation_Class_2X3.pdf',
        org: 'National Institute of Building Sciences',
      },
    ],
    sourceNote:
      'The official buildingSMART IFC page and the ISO 16739-1 catalogue page were not opened (HTTP 403, 10 November 2026). They are not cited.',
    siblings: [
      {
        label: 'What is a digital twin',
        href: '/guides/digital-twins',
        note: 'an electronic representation you can evaluate.',
      },
      {
        label: 'Idempotent HTTP requests',
        href: '/guides/idempotent-requests',
        note: 'a retry is safe only if the effect is the same.',
      },
      {
        label: 'What is local-first software',
        href: '/guides/local-first-software',
        note: 'the copy you can still open later.',
      },
    ],
    closing: [
      p(
        'The useful next step is to name the schema on the file, or to read the ',
        a('construction industry page', '/industries/construction'),
        '. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'idempotent-requests',
    title: 'Idempotent HTTP requests: when a retry is safe',
    seoTitle: 'Idempotent HTTP requests — Guides | PrimusNeo',
    crumb: 'Idempotent HTTP requests',
    eyebrow: 'Idempotent requests',
    description:
      'In HTTP, a method is idempotent when several identical requests are meant to have the same effect as one. This guide covers RFC 9110 and when a retry is safe.',
    excerpt:
      'In HTTP, a method is idempotent when several identical requests are meant to have the same effect as one. This guide covers RFC 9110 and when a retry is safe.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: '§9.2.2',
    metricLabel: 'RFC 9110, June 2022 — identical requests, one intended effect',
    cardDescription:
      'In HTTP, a method is idempotent when several identical requests are intended to have the same effect on the server as a single request. That is why a lost response can be retried automatically only for those methods.',
    patternTitle: 'Same effect as one request',
    patternDescription:
      'RFC 9110 calls a method idempotent when several identical requests are intended to have the same effect as a single request. In that specification, PUT, DELETE, and safe methods are idempotent.',
    lead: [
      p(
        'In HTTP, a method is idempotent when several identical requests are intended to have the same effect on the server as a single request. That is why a lost response can be retried automatically only for those methods. A lost response is not, by itself, a license to apply the same effect twice.',
      ),
      p(
        'This is a protocol page, not a payments-product page. The workflow reading of the same rule — a settlement or a recorded change that may be interrupted mid-flight — is on ',
        a(
          'AZOA\'s guide to idempotent retries',
          'https://azoa.ardanova.com/workflows/idempotent-requests',
        ),
        '. ',
        a('Settle once', 'https://azoa.ardanova.com/workflows/settle-once'),
        ', already live, is the modelled sibling. The narrative sibling here is ',
        a('Paid twice, or never', '/blog/paid-twice-or-never'),
        '.',
      ),
    ],
    figures: [
      {
        lead: 'RFC 9110, HTTP Semantics, June 2022, §9.2.2:',
        text: '"A request method is considered \'idempotent\' if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request." "Of the request methods defined by this specification, PUT, DELETE, and safe request methods are idempotent."',
      },
      {
        lead: 'The same section on logging:',
        text: '"Like the definition of safe, the idempotent property only applies to what has been requested by the user; a server is free to log each request separately…" Logging each request is allowed; that does not break idempotence.',
      },
      {
        lead: 'Why the distinction exists:',
        text: '"Idempotent methods are distinguished because the request can be repeated automatically if a communication failure occurs before the client is able to read the server\'s response." A PUT whose connection closes before any response is received may be retried on a new connection, "even if the original request succeeded, but the response was lost." By contrast, "A proxy MUST NOT automatically retry non-idempotent requests." "A client SHOULD NOT automatically retry a failed automatic retry."',
      },
    ],
    sections: [
      h2('The RFC definition, in the RFC\'s words'),
      p(
        'Intended effect of many identical requests equals the effect of one. In this specification, PUT, DELETE, and safe methods are idempotent. The RFC does not say that POST is idempotent, and this page does not say so either. It also does not invent "idempotency keys" as if RFC 9110 defined that product pattern.',
      ),
      p(
        'The rule is about the intended effect on the server, not about whether a log line appears twice. A server may log each attempt and still be idempotent, in the RFC\'s sense, if the requested effect happened once.',
      ),
      h2('Why it matters on an unreliable connection'),
      p(
        'The point of the property is automatic retry after a failure to read the response. That is a protocol habit for methods designed so that two identical requests mean one effect. Proxies must not automatically retry non-idempotent requests. A client should not automatically retry a failed automatic retry. Those two limits sit in the same section as the definition, and they are easy to skip if the only sentence anyone remembers is "just retry it."',
      ),
      p(
        'This page does not describe a live PrimusNeo payment rail. It does not use KYC, fiat, or investment language, and it does not write exploit or abuse steps.',
      ),
    ],
    scenario:
      'This is a worked example, not a customer and not a charge. A client sends a request, the connection drops before a response is read, and a proxy retries it automatically. If the method was not idempotent, the RFC\'s prohibition is the reason that automatic retry was already the wrong move.',
    sources: [
      {
        label: 'RFC 9110, HTTP Semantics, June 2022, §9.2.2 Idempotent Methods.',
        title: 'RFC 9110, HTTP Semantics, §9.2.2 Idempotent Methods',
        href: 'https://www.rfc-editor.org/rfc/rfc9110.html',
        year: '2022',
      },
    ],
    siblings: [
      {
        label: 'What is local-first software',
        href: '/guides/local-first-software',
        note: 'work that still has to exist when a connection drops.',
      },
      {
        label: 'BIM and IFC file exchange',
        href: '/guides/bim-ifc-exchange',
        note: 'a file that has to open later is a related honesty problem.',
      },
      {
        label: 'AI accountability: NIST AI RMF and the GAO framework',
        href: '/guides/ai-rmf-accountability',
        note: 'a recommendation still needs a name on it.',
      },
    ],
    closing: [
      p(
        'The workflow sibling is ',
        a(
          'AZOA\'s idempotent-requests page',
          'https://azoa.ardanova.com/workflows/idempotent-requests',
        ),
        '. The modelled "once, or not at all" page is ',
        a('Settle once', 'https://azoa.ardanova.com/workflows/settle-once'),
        '. AZOA\'s public site is a simulation and does not move value.',
      ),
      p(
        'The useful next step is to read §9.2.2, or ',
        a('Paid twice, or never', '/blog/paid-twice-or-never'),
        '. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'local-first-software',
    title: 'What is local-first software',
    seoTitle: 'What is local-first software — Guides | PrimusNeo',
    crumb: 'What is local-first software',
    eyebrow: 'Local-first software',
    description:
      'Local-first software treats the copy on your device as the primary copy. This guide covers the 2019 Ink & Switch argument, in the authors’ words.',
    excerpt:
      'Local-first software treats the copy on your device as the primary copy. This guide covers the 2019 Ink & Switch argument, in the authors’ words.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'No spinners',
    metricLabel: 'First of seven ideals, Ink & Switch, April 2019',
    cardDescription:
      'Local-first software treats the copy of the data on your device as the primary copy. Servers may still exist, but they hold secondary copies — so the work does not disappear when a service does.',
    patternTitle: 'The device copy is primary',
    patternDescription:
      'The April 2019 Ink & Switch essay treats the copy on your device as the primary copy. Servers may still hold secondary copies. The first printed ideal is "No spinners: your work at your fingertips."',
    lead: [
      p(
        'Local-first software treats the copy of the data on your device as the primary copy. Servers may still exist, but they hold secondary copies — so the work does not disappear when a service does. If the only good copy is on someone else\'s server, a shutdown is not an inconvenience. It is a loss of the work.',
      ),
      p(
        'This is a field page about where the primary copy lives, not a PrimusNeo hosting plan, and not a claim that PrimusNeo, ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', or ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ' is a local-first product.',
      ),
    ],
    figures: [
      {
        lead: 'Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan, "Local-first software: You own your data, in spite of the cloud," Ink & Switch, April 2019.',
        text: 'Cloud apps "enable real-time collaboration with colleagues" and make work available across devices. "However, by centralizing data storage on servers, cloud apps also take away ownership and agency from users. If a service shuts down, the software stops functioning, and data created with that software is lost."',
      },
      {
        lead: 'The authors\' change of perspective:',
        text: 'treat "the copy of the data on your local device — your laptop, tablet, or phone — as the primary copy. Servers still exist, but they hold secondary copies of your data in order to assist with access from multiple devices."',
      },
      {
        lead: 'The first of seven ideals, as printed:',
        text: '"1. No spinners: your work at your fingertips." The remaining six are left in the essay; they are not paraphrased from memory, and an eighth is not invented.',
      },
    ],
    sections: [
      h2('The authors\' move'),
      p(
        'The 2019 argument is not an anti-cloud manifesto that pretends servers should vanish. The authors are explicit that servers still exist, and that their job is multi-device access, as secondary copies. The change is which copy is primary. When the device copy is primary, a vendor shutdown is not automatically a loss of the work.',
      ),
      p(
        '"No spinners: your work at your fingertips" is the first ideal, and it is enough of a taste. The other six belong in the essay itself. This page does not invent performance claims, sync-conflict rates, or "local-first is always safer." It also does not quote the ACM Onward! version of the paper, which was not opened for this brief; the opened source is the Ink & Switch essay.',
      ),
      h2('What to write down'),
      p(
        'A tool that has to keep working still needs a record of where the primary copy lives. This page does not claim that CRDTs are in production here. The essays ',
        a('Local-first digital twin', '/blog/local-first-digital-twin'),
        ' and ',
        a(
          'A digital twin shouldn\'t live in someone else\'s cloud',
          '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud',
        ),
        ' take up the twin-custody version of the same habit. ',
        a('What is a digital twin', '/guides/digital-twins'),
        ' is the definition sibling. ',
        a('Idempotent HTTP requests', '/guides/idempotent-requests'),
        ' is the protocol sibling for a connection that drops mid-flight. ',
        a('Keys in the browser', 'https://neos.primusneo.com/practices/keys-in-the-browser'),
        ' is the NEOS practice sibling for a credential that is not supposed to live on someone else\'s server.',
      ),
    ],
    scenario:
      'This is a worked example, not a customer. A team writes for years in a hosted tool. The vendor winds the service down, the client stops launching, and the only export is a partial PDF. The authors\' 2019 warning is already the description of that day.',
    sources: [
      {
        label:
          'Kleppmann, Martin, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan. "Local-first software: You own your data, in spite of the cloud." Ink & Switch, April 2019.',
        title: 'Local-first software: You own your data, in spite of the cloud',
        href: 'https://www.inkandswitch.com/essay/local-first/',
        org: 'Ink & Switch',
        year: '2019',
      },
    ],
    siblings: [
      {
        label: 'What is a digital twin',
        href: '/guides/digital-twins',
        note: 'an electronic representation you can evaluate.',
      },
      {
        label: 'Idempotent HTTP requests',
        href: '/guides/idempotent-requests',
        note: 'a retry after a dropped connection.',
      },
      {
        label: 'AI accountability: NIST AI RMF and the GAO framework',
        href: '/guides/ai-rmf-accountability',
        note: 'a recommendation still needs a name on it.',
      },
    ],
    closing: [
      p(
        'The useful next step is to read the 2019 essay, or to say where the primary copy of a tool actually lives. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'ai-rmf-accountability',
    title: 'AI accountability: NIST AI RMF and the GAO framework',
    seoTitle: 'AI accountability: NIST AI RMF and GAO — Guides | PrimusNeo',
    crumb: 'AI accountability',
    eyebrow: 'AI accountability',
    description:
      'Accountability for a software recommendation is a record of roles, data, checks, and monitoring. This guide covers NIST AI RMF 1.0 and the GAO framework.',
    excerpt:
      'Accountability for a software recommendation is a record of roles, data, checks, and monitoring. This guide covers NIST AI RMF 1.0 and the GAO framework.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'AI 100-1',
    metricLabel: 'NIST, January 2023 — voluntary, and not a checklist',
    cardDescription:
      'When software produces a recommendation, accountability is not a label on the model. It is a record of who is responsible, what data went in, whether the output was checked against a stated goal, and how the thing will be watched after it is in use.',
    patternTitle: 'A recommendation needs a record',
    patternDescription:
      'NIST AI RMF 1.0 is voluntary and names four functions: GOVERN, MAP, MEASURE, and MANAGE. The actions are not a checklist. This guide does not claim an implementation.',
    lead: [
      p(
        'When software produces a recommendation, accountability is not a label on the model. It is a record of who is responsible, what data went in, whether the output was checked against a stated goal, and how the thing will be watched after it is in use. This page is the reference form of that argument: the two public frameworks, in their own words, kept close to hand. The essay ',
        a(
          'A recommendation still needs a name on it',
          '/blog/a-recommendation-still-needs-a-name',
        ),
        ' is the narrative sibling. It is not a second essay, and the live alpha note belongs in the newsroom, not as this page\'s theme.',
      ),
      p(
        'This is not legal advice, and not a certification claim. It does not say that PrimusNeo, ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', or ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ' implements either framework. It stays with the technical and audit documents. It does not invent accuracy numbers, or "X percent of AI projects fail," and it does not use Standish CHAOS rates.',
      ),
    ],
    figures: [
      {
        lead: 'NIST, Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1, January 2023:',
        text: '"The Framework is intended to be voluntary, rights-preserving, non-sector-specific, and use-case agnostic." The Core describes four functions — GOVERN, MAP, MEASURE, and MANAGE — with GOVERN applying "to all stages of organizations\' AI risk management processes and procedures." "Actions do not constitute a checklist, nor are they necessarily an ordered set of steps." "Risk management should be continuous, timely, and performed throughout the AI system lifecycle."',
      },
      {
        lead: 'Characteristics of trustworthy AI systems,',
        text: 'in the same document, "include valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy enhanced, and fair with their harmful biases managed."',
      },
      {
        lead: 'GAO, Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities, GAO-21-519SP, June 2021 (product page published 30 June 2021):',
        text: '"This framework is organized around four complementary principles, which address governance, data, performance, and monitoring." "However, AI systems pose unique challenges to such oversight because their inputs and operations are not always visible."',
      },
    ],
    sections: [
      h2('NIST AI RMF 1.0, in NIST\'s words'),
      p(
        '"As directed by the National Artificial Intelligence Initiative Act of 2020 (P.L. 116-283), the goal of the AI RMF is to offer a resource to the organizations designing, developing, deploying, or using AI systems to help manage the many risks of AI." It is voluntary. It is not a sector-specific mandate, and this page does not treat it as one.',
      ),
      p(
        'The four functions are the working structure: GOVERN, MAP, MEASURE, and MANAGE. GOVERN applies across the process. The actions are not a checklist and not necessarily an ordered set of steps. Risk management is continuous through the lifecycle. "Accountable and transparent" is one characteristic in the trustworthiness list, not a badge a vendor can print.',
      ),
      h2('GAO\'s four principles'),
      p(
        'The GAO framework is written for "federal agencies and other entities involved in the design, development, deployment, and continuous monitoring of AI systems." PrimusNeo is not a federal system, and this framework is not a certification. The four principles are governance, data, performance, and monitoring. Practice 1.1: "Define clear goals and objectives for the AI system to ensure intended outcomes are achieved." Practice 1.2: "Define clear roles, responsibilities, and delegation of authority for the AI system to ensure effective operations, timely corrections, and sustained oversight."',
      ),
      p(
        'If inputs and operations are not always visible, in GAO\'s own sentence, the record has to make roles, data, performance checks, and monitoring visible instead.',
      ),
      h2('The 2024 generative profile, briefly'),
      p(
        'NIST AI 600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, July 2024, is "a cross-sectoral profile of and companion resource for the AI Risk Management Framework (AI RMF 1.0) for Generative AI." The AI RMF "is intended for voluntary use." A profile "is an implementation of the AI RMF functions, categories, and subcategories for a specific setting, application, or technology." The same four functions have a published companion for generative systems. This page does not summarize a risk catalogue it is not quoting, and it does not detour into executive orders.',
      ),
    ],
    scenario:
      'This is a worked example, not a customer and not a deployment. A recommendation is accepted in a delivery meeting, no one can name who is responsible for it, the input data are not listed, and no one can say how the output will be watched once it is in use. The useful record is already the one GAO\'s four principles describe.',
    sources: [
      {
        label:
          'NIST, Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1, January 2023.',
        title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
        href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
        doi: 'https://doi.org/10.6028/NIST.AI.100-1',
        org: 'NIST',
        year: '2023',
      },
      {
        label:
          'U.S. Government Accountability Office, Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities, GAO-21-519SP, June 2021.',
        title:
          'Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities',
        href: 'https://www.gao.gov/products/gao-21-519sp',
        org: 'U.S. Government Accountability Office',
        year: '2021',
      },
      {
        label:
          'NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1, July 2024.',
        title:
          'Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile',
        href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf',
        doi: 'https://doi.org/10.6028/NIST.AI.600-1',
        org: 'NIST',
        year: '2024',
      },
    ],
    siblings: [
      {
        label: 'What is a digital twin',
        href: '/guides/digital-twins',
        note: 'a representation you can evaluate, and who accepts a decision made with it.',
      },
      {
        label: 'Idempotent HTTP requests',
        href: '/guides/idempotent-requests',
        note: 'a protocol habit for an effect that should happen once.',
      },
      {
        label: 'What is local-first software',
        href: '/guides/local-first-software',
        note: 'where the primary copy lives.',
      },
    ],
    closing: [
      p(
        'The essay form of this page is ',
        a(
          'A recommendation still needs a name on it',
          '/blog/a-recommendation-still-needs-a-name',
        ),
        '. The useful next step is to name the role, the data, the check, and the monitoring, or to read the two frameworks themselves. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
