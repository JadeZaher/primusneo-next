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
  /** Extra follow links on the same citation, such as a PDF next to a landing page. */
  more?: { label: string; href: string }[];
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
  /** Worked example. The template heading is “A situation like this.” */
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
    description: 'A digital twin, in NIST’s words, is an electronic representation you can evaluate. This guide covers that definition and the interoperability limit.',
    excerpt: 'A digital twin, in NIST’s words, is an electronic representation you can evaluate. This guide covers that definition and the interoperability limit.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'IR 8356',
    metricLabel: 'NIST, February 2025 — an electronic representation you can evaluate',
    cardDescription: 'A digital twin, in NIST\'s own words, is an electronic representation of a real-world entity that you can evaluate — and that entity may be a process or a conceptual model, not only a building or a device. If you cannot say what is being represented, and whether you can evaluate it, you do not yet have a twin.',
    patternTitle: 'A representation you can evaluate',
    patternDescription: 'NIST IR 8356 defines a digital twin as an electronic representation of a real-world entity that you can evaluate. The entity may be a process or a conceptual model, not only a building or a device.',
    lead: [
      p('A digital twin, in NIST\'s own words, is an electronic representation of a real-world entity that you can evaluate — and that entity may be a process or a conceptual model, not only a building or a device. If you cannot say what is being represented, and whether you can evaluate it, you do not yet have a twin. You have a slide.'),
      p(
        'This is a field definition, not a product announcement, and not a claim that PrimusNeo runs a live twin. ',
        a('Ground truth with a receipt, which is more than most digital twins can say', '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud'),
        ', is a house line that already belongs next to this subject; it is quoted once here, and the argument under it is NIST\'s.',
      ),
      p('NIST\'s 2021 digital twin report, February 2025, opening definition: "A digital twin (DT) is an electronic representation of a real-world entity; providing the capability to evaluate this entity. A digital twin can emulate both physical things (e.g., buildings, electronics, living things), and non-physical things (e.g., processes, conceptual models)."'),
      p('The same report on the interoperability limit: "The full benefits of digital twin technology will require interoperable definitions, tools, and standards as well as early consideration of digital twin" issues. The sentence is quoted only through the words actually on the page; the rest of a cut-off line is not invented here.'),
      p('NIST\'s 14 February 2025 news release restates the same idea: the report "introduces the concept of a digital twin (DT), which is an electronic representation of a real-world physical (e.g., buildings, electronics, living things) or non-physical (e.g., processes, conceptual models) entity."'),
    ],
    figures: [
    ],
    sections: [
      h2('NIST\'s definition, in NIST\'s words'),
      p('The useful parts are already in the opening sentence: an electronic representation; the capability to evaluate the entity; and a scope that includes processes and conceptual models, not only a machine or a building. A model you cannot evaluate is not, on this definition, a twin.'),
      p('The same report also quotes the Digital Twin Consortium description, including: "A digital twin is a virtual representation of real-world entities and processes synchronized at a specified frequency and fidelity." That sentence is NIST quoting the Consortium, not NIST\'s own definition. It is useful as a reminder that synchronization, when it is claimed, has to name a frequency and a fidelity. It is not a second competing lede.'),
      h2('The interoperability limit'),
      p(
        'NIST says the full benefits require interoperable definitions, tools, and standards, and early consideration of digital-twin issues. That is a research finding in the report, not a PrimusNeo roadmap, and not a certification claim. A ',
        a('BIM exchange', '/guides/bim-ifc-exchange'),
        ' that names the schema actually used is related work; a model exchange is not automatically a twin.',
      ),
      p('This page does not invent coverage percentages, market sizes, or "X percent of factories already have twins." It does not discuss vulnerabilities or attack steps.'),
      h2('What to write down'),
      p(
        'A twin still needs a record of what it represents, how often it is synchronized, and who accepts a decision made with it. The essays ',
        a('A digital twin shouldn\'t live in someone else\'s cloud', '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud'),
        ' and ',
        a('Local-first digital twin', '/blog/local-first-digital-twin'),
        ' take up the custody side of that habit. ',
        a('What is local-first software', '/guides/local-first-software'),
        ' is the field argument those essays already lean on. The ',
        a('construction industry page', '/industries/construction'),
        ' is the sector sibling where a built-environment twin is often proposed.',
      ),
      p(
        'PrimusNeo does not claim a live twin, a deployment, or an NIST\'s 2021 digital twin report implementation. ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ', and ',
        a('ArdaNova', 'https://ardanova.com'),
        ' are named here as other layers in the same stack, not as twin products.',
      ),
    ],
    scenario: 'A proposal describes "a digital twin of the process" and attaches a diagram with no named entity, no evaluation method, and no synchronization frequency. The useful questions are already in NIST\'s opening sentence and in the Consortium wording NIST quotes.',
    sources: [
      {
        label: 'Voas, Mell, Laplante, and Piroumian, Security and Trust Considerations for Digital Twin Technology, NIST IR 8356, February 2025.',
        href: 'https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8356.pdf',
        doi: 'https://doi.org/10.6028/NIST.IR.8356',
      },
      {
        label: 'NIST, "Security and Trust Considerations for Digital Twin Technology: NIST Releases IR 8356," 14 February 2025.',
        href: 'https://www.nist.gov/news-events/news/2025/02/security-and-trust-considerations-digital-twin-technology-nist-releases-ir',
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
      {
        label: 'Digital twins of processes and conceptual models',
        href: '/guides/process-digital-twins',
        note: 'a twin can be a process or a conceptual model.',
      },
      {
        label: 'What to write down when software recommends',
        href: '/guides/recommendation-lineage',
        note: 'the goal, the data, the check, and the name.',
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
    description: 'A BIM file that cannot be opened later is not an exchange. This guide covers what NBIMS-US Version 3 approved for IFC, and naming the schema.',
    excerpt: 'A BIM file that cannot be opened later is not an exchange. This guide covers what NBIMS-US Version 3 approved for IFC, and naming the schema.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'IFC 2X3',
    metricLabel: 'NBIMS-US Version 3, chapter 2.2 — the approved exchange in that edition',
    cardDescription: 'A building information model that cannot be opened later is not an exchange. "Send the IFC" is not a complete instruction.',
    patternTitle: 'Name the schema on the file',
    patternDescription: 'In NBIMS-US Version 3, chapter 2.2, the approved exchange is IFC 2X3 (February 2006). This guide does not name a later official IFC version.',
    lead: [
      p('A building information model that cannot be opened later is not an exchange. "Send the IFC" is not a complete instruction. The record has to name the schema that was actually used, and someone has to keep a file that actually opens.'),
      p('This is a field note about naming the exchange, not a claim that PrimusNeo hosts models. It quotes the opened National BIM Standard–United States Version 3 reference-standards chapter. It does not name a later IFC release, because the official buildingSMART IFC page and the ISO 16739-1 catalogue page both returned HTTP 403 from the research network on 10 November 2026 and were not opened. A current official IFC version is not announced here from memory or from a search snippet.'),
      p('The National Institute of Building Sciences hosts the National BIM Standard–United States (NBIMS-US™). The opened landing page describes NBIMS-US as providing "consensus-based standards" and "Defining BIM uses, requirements, planning and documentation for information exchanges to deliver best business practices for the entire built environment." The same landing lists both NBIMS-US V4 and NBIMS-US V3. This page is explicit about quoting V3 chapter 2.2; it does not invent V4\'s schema list.'),
      p('The U.S. National BIM Standard, in an earlier version, points to the February 2006 Industry Foundation Class schema, known as IFC 2X3. "The scope of ISO 16739, Industry Foundation Class (IFC) 2X3, February 2006, authored by buildingSMART International, is to provide a neutral exchange format based on STEP/XML." "The approved exchanges within NBIMS-US™ is IFC 2X3."'),
    ],
    figures: [
    ],
    sections: [
      h2('What that V3 chapter actually approved'),
      p('In that edition, the approved NBIMS-US exchange is IFC 2X3 (February 2006), a neutral format based on STEP/XML, authored by buildingSMART International. The chapter also says "The current international specification for IFC is 2X3-TC1." That "current" line is a statement inside the V3 chapter, not a 2026 fact, and it is not used here as one.'),
      p('If a later project used a later schema, the record should say so — once that schema can be cited from an opened official page. Until then, this page does not guess. It also does not invent interchange success rates, or claim that "IFC is universally supported."'),
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
      p('Say which schema, which edition of the standard you are following, and keep a file that opens. PrimusNeo does not claim a model repository or a certification.'),
    ],
    scenario: 'A handover note says "IFC attached," the attachment has no schema name, and a later software version will not open it. The useful instruction was already longer than "send the IFC."',
    sources: [
      {
        label: 'National Institute of Building Sciences, National BIM Standard–United States landing.',
        href: 'https://www.nibs.org/nbims',
      },
      {
        label: 'NBIMS-US Version 3, chapter 2.2, "ISO 16739, Industry Foundation Class 2X3 – February 2006." The official buildingSMART IFC page and the ISO 16739-1 catalogue page were not opened (HTTP 403, 10 November 2026). They are not cited.',
        href: 'https://nibs.org/wp-content/uploads/2025/04/NBIMS-US_V3_2.2_Industry_Foundation_Class_2X3.pdf',
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
        note: 'a retry is safe only if the effect is the same.',
      },
      {
        label: 'What is local-first software',
        href: '/guides/local-first-software',
        note: 'the copy you can still open later.',
      },
      {
        label: 'Architecture decision records: write down why it was decided',
        href: '/guides/architecture-decision-records',
        note: 'an interface or a dependency is often the thing being decided.',
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
    description: 'In HTTP, a method is idempotent when several identical requests are meant to have the same effect as one. This guide covers RFC 9110 and when a retry is safe.',
    excerpt: 'In HTTP, a method is idempotent when several identical requests are meant to have the same effect as one. This guide covers RFC 9110 and when a retry is safe.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: '§9.2.2',
    metricLabel: 'RFC 9110, June 2022 — identical requests, one intended effect',
    cardDescription: 'In HTTP, a method is idempotent when several identical requests are intended to have the same effect on the server as a single request. That is why a lost response can be retried automatically only for those methods.',
    patternTitle: 'Same effect as one request',
    patternDescription: 'RFC 9110 calls a method idempotent when several identical requests are intended to have the same effect as a single request. In that specification, PUT, DELETE, and safe methods are idempotent.',
    lead: [
      p('In HTTP, a method is idempotent when several identical requests are intended to have the same effect on the server as a single request. That is why a lost response can be retried automatically only for those methods. A lost response is not, by itself, a license to apply the same effect twice.'),
      p(
        'This is a protocol page, not a payments-product page. The workflow reading of the same rule — a settlement or a recorded change that may be interrupted mid-flight — is on ',
        a('AZOA\'s guide to idempotent retries', 'https://azoa.ardanova.com/workflows/idempotent-requests'),
        '. ',
        a('Settle once', 'https://azoa.ardanova.com/workflows/settle-once'),
        ', already live, is the modelled sibling. The narrative sibling here is ',
        a('Paid twice, or never', '/blog/paid-twice-or-never'),
        '.',
      ),
      p('RFC 9110, HTTP Semantics, June 2022, the HTTP standard\'s rule on idempotent methods: "A request method is considered \'idempotent\' if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request." "Of the request methods defined by this specification, PUT, DELETE, and safe request methods are idempotent."'),
      p('The same section on logging: "Like the definition of safe, the idempotent property only applies to what has been requested by the user; a server is free to log each request separately…" Logging each request is allowed; that does not break idempotence.'),
      p('Why the distinction exists: "Idempotent methods are distinguished because the request can be repeated automatically if a communication failure occurs before the client is able to read the server\'s response." The same section\'s example is: "if a client sends a PUT request and the underlying connection is closed before any response is received, then the client can establish a new connection and retry the idempotent request." By contrast, "A proxy MUST NOT automatically retry non-idempotent requests." "A client SHOULD NOT automatically retry a failed automatic retry."'),
    ],
    figures: [
    ],
    sections: [
      h2('The RFC definition, in the RFC\'s words'),
      p('Intended effect of many identical requests equals the effect of one. In this specification, PUT, DELETE, and safe methods are idempotent. The RFC does not say that POST is idempotent, and this page does not say so either. It also does not invent "idempotency keys" as if RFC 9110 defined that product pattern.'),
      p('The rule is about the intended effect on the server, not about whether a log line appears twice. A server may log each attempt and still be idempotent, in the RFC\'s sense, if the requested effect happened once.'),
      h2('Why it matters on an unreliable connection'),
      p('The point of the property is automatic retry after a failure to read the response. That is a protocol habit for methods designed so that two identical requests mean one effect. Proxies must not automatically retry non-idempotent requests. A client should not automatically retry a failed automatic retry. Those two limits sit in the same section as the definition, and they are easy to skip if the only sentence anyone remembers is "just retry it."'),
      p('This page does not describe a live PrimusNeo payment rail. It does not use KYC, fiat, or investment language, and it does not write exploit or abuse steps.'),
    ],
    scenario: 'A client sends a request, the connection drops before a response is read, and a proxy retries it automatically. If the method was not idempotent, the RFC\'s prohibition is the reason that automatic retry was already the wrong move.',
    sources: [
      {
        label: 'RFC 9110, HTTP Semantics, June 2022, §9.2.2 Idempotent Methods.',
        href: 'https://www.rfc-editor.org/rfc/rfc9110.html',
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
      {
        label: 'Architecture decision records: write down why it was decided',
        href: '/guides/architecture-decision-records',
        note: 'an interface or a dependency is often the thing being decided.',
      },
    ],
    closing: [
      p(
        'The workflow sibling is ',
        a('AZOA\'s idempotent-requests page', 'https://azoa.ardanova.com/workflows/idempotent-requests'),
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
    description: 'Local-first software treats the copy on your device as the primary copy. This guide covers the 2019 Ink & Switch argument, in the authors’ words.',
    excerpt: 'Local-first software treats the copy on your device as the primary copy. This guide covers the 2019 Ink & Switch argument, in the authors’ words.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'No spinners',
    metricLabel: 'First of seven ideals, Ink & Switch, April 2019',
    cardDescription: 'Local-first software treats the copy of the data on your device as the primary copy. Servers may still exist, but they hold secondary copies — so the work does not disappear when a service does.',
    patternTitle: 'The device copy is primary',
    patternDescription: 'The April 2019 Ink & Switch essay treats the copy on your device as the primary copy. Servers may still hold secondary copies. The first printed ideal is "No spinners: your work at your fingertips."',
    lead: [
      p('Local-first software treats the copy of the data on your device as the primary copy. Servers may still exist, but they hold secondary copies — so the work does not disappear when a service does. If the only good copy is on someone else\'s server, a shutdown is not an inconvenience. It is a loss of the work.'),
      p(
        'This is a field page about where the primary copy lives, not a PrimusNeo hosting plan, and not a claim that PrimusNeo, ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', or ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ' is a local-first product.',
      ),
      p('Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan, "Local-first software: You own your data, in spite of the cloud," Ink & Switch, April 2019. Cloud apps "enable real-time collaboration with colleagues" and make work available across devices. "However, by centralizing data storage on servers, cloud apps also take away ownership and agency from users. If a service shuts down, the software stops functioning, and data created with that software is lost."'),
      p('The authors\' change of perspective: treat "the copy of the data on your local device — your laptop, tablet, or phone — as the primary copy. Servers still exist, but they hold secondary copies of your data in order to assist with access from multiple devices."'),
      p('The first of seven ideals, as printed: "1. No spinners: your work at your fingertips." The remaining six are left in the essay; they are not paraphrased from memory, and an eighth is not invented.'),
    ],
    figures: [
    ],
    sections: [
      h2('The authors\' move'),
      p('The 2019 argument is not an anti-cloud manifesto that pretends servers should vanish. The authors are explicit that servers still exist, and that their job is multi-device access, as secondary copies. The change is which copy is primary. When the device copy is primary, a vendor shutdown is not automatically a loss of the work.'),
      p('"No spinners: your work at your fingertips" is the first ideal, and it is enough of a taste. The other six belong in the essay itself. This page does not invent performance claims, sync-conflict rates, or "local-first is always safer." It also does not quote the ACM Onward! version of the paper, which was not opened for this brief; the opened source is the Ink & Switch essay.'),
      h2('What to write down'),
      p(
        'A tool that has to keep working still needs a record of where the primary copy lives. This page does not claim that CRDTs are in production here. The essays ',
        a('Local-first digital twin', '/blog/local-first-digital-twin'),
        ' and ',
        a('A digital twin shouldn\'t live in someone else\'s cloud', '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud'),
        ' take up the twin-custody version of the same habit. ',
        a('What is a digital twin', '/guides/digital-twins'),
        ' is the definition sibling. ',
        a('Idempotent HTTP requests', '/guides/idempotent-requests'),
        ' is the protocol sibling for a connection that drops mid-flight. ',
        a('Keys in the browser', 'https://neos.primusneo.com/practices/keys-in-the-browser'),
        ' is the NEOS practice sibling for a credential that is not supposed to live on someone else\'s server.',
      ),
    ],
    scenario: 'A team writes for years in a hosted tool. The vendor winds the service down, the client stops launching, and the only export is a partial PDF. The authors\' 2019 warning is already the description of that day.',
    sources: [
      {
        label: 'Kleppmann, Martin, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan. "Local-first software: You own your data, in spite of the cloud." Ink & Switch, April 2019.',
        href: 'https://www.inkandswitch.com/essay/local-first/',
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
      {
        label: 'Digital twins of processes and conceptual models',
        href: '/guides/process-digital-twins',
        note: 'a twin can be a process, not only a building.',
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
    description: 'Accountability for a software recommendation is a record of roles, data, checks, and monitoring. This guide covers NIST AI RMF 1.0 and the GAO framework.',
    excerpt: 'Accountability for a software recommendation is a record of roles, data, checks, and monitoring. This guide covers NIST AI RMF 1.0 and the GAO framework.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'AI 100-1',
    metricLabel: 'NIST, January 2023 — voluntary, and not a checklist',
    cardDescription: 'When software produces a recommendation, accountability is not a label on the model. It is a record of who is responsible, what data went in, whether the output was checked against a stated goal, and how the thing will be watched after it is in use.',
    patternTitle: 'A recommendation needs a record',
    patternDescription: 'NIST AI RMF 1.0 is voluntary and names four functions: GOVERN, MAP, MEASURE, and MANAGE. The actions are not a checklist. This guide does not claim an implementation.',
    lead: [
      p(
        'When software produces a recommendation, accountability is not a label on the model. It is a record of who is responsible, what data went in, whether the output was checked against a stated goal, and how the thing will be watched after it is in use. This page is the reference form of that argument: the two public frameworks, in their own words, kept close to hand. The essay ',
        a('A recommendation still needs a name on it', '/blog/a-recommendation-still-needs-a-name'),
        ' is the narrative sibling. It is not a second essay, and the live alpha note belongs in the newsroom, not as this page\'s theme.',
      ),
      p(
        'This is not legal advice, and not a certification claim. It does not say that PrimusNeo, ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', or ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ' implements either framework. It stays with the technical and audit documents. It does not invent accuracy numbers, or "X percent of AI projects fail," and it does not use Standish CHAOS rates.',
      ),
      p('NIST\'s January 2023 AI Risk Management Framework says "The Framework is intended to be voluntary, rights-preserving, non-sector-specific, and use-case agnostic." The Core describes four functions — GOVERN, MAP, MEASURE, and MANAGE — with GOVERN applying "to all stages of organizations\' AI risk management processes and procedures." "Actions do not constitute a checklist, nor are they necessarily an ordered set of steps." "Risk management should be continuous, timely, and performed throughout the AI system lifecycle dimensions."'),
      p('Characteristics of trustworthy AI systems, in the same document, "include valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy enhanced, and fair with their harmful biases managed."'),
      p('GAO, Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities, the GAO\'s 2021 AI accountability framework, June 2021 (product page published 30 June 2021): "This framework is organized around four complementary principles, which address governance, data, performance, and monitoring." "However, AI systems pose unique challenges to such oversight because their inputs and operations are not always visible."'),
    ],
    figures: [
    ],
    sections: [
      h2('NIST\'s AI Risk Management Framework, in NIST\'s words'),
      p('"As directed by the National Artificial Intelligence Initiative Act of 2020 (P.L. 116-283), the goal of the AI RMF is to offer a resource to the organizations designing, developing, deploying, or using AI systems to help manage the many risks of AI." It is voluntary. It is not a sector-specific mandate, and this page does not treat it as one.'),
      p('The four functions are the working structure: GOVERN, MAP, MEASURE, and MANAGE. GOVERN applies across the process. The actions are not a checklist and not necessarily an ordered set of steps. Risk management is continuous through the lifecycle. "Accountable and transparent" is one characteristic in the trustworthiness list, not a badge a vendor can print.'),
      h2('GAO\'s four principles'),
      p('The GAO framework is written for "federal agencies and other entities involved in the design, development, deployment, and continuous monitoring of AI systems." PrimusNeo is not a federal system, and this framework is not a certification. The four principles are governance, data, performance, and monitoring. Practice 1.1: "Define clear goals and objectives for the AI system to ensure intended outcomes are achieved." Practice 1.2: "Define clear roles, responsibilities, and delegation of authority for the AI system to ensure effective operations, timely corrections, and sustained oversight."'),
      p('If inputs and operations are not always visible, in GAO\'s own sentence, the record has to make roles, data, performance checks, and monitoring visible instead.'),
      h2('The 2024 generative profile, briefly'),
      p('NIST\'s generative AI profile, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, July 2024, is "a cross-sectoral profile of and companion resource for the AI Risk Management Framework (AI RMF 1.0) for Generative AI." The AI RMF "is intended for voluntary use." A profile "is an implementation of the AI RMF functions, categories, and subcategories for a specific setting, application, or technology." The same four functions have a published companion for generative systems. This page does not summarize a risk catalogue it is not quoting, and it does not detour into executive orders.'),
    ],
    scenario: 'A recommendation is accepted in a delivery meeting, no one can name who is responsible for it, the input data are not listed, and no one can say how the output will be watched once it is in use. The useful record is already the one GAO\'s four principles describe.',
    sources: [
      {
        label: 'NIST, Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1, January 2023.',
        href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
        doi: 'https://doi.org/10.6028/NIST.AI.100-1',
      },
      {
        label: 'U.S. Government Accountability Office, Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities, GAO-21-519SP, June 2021.',
        href: 'https://www.gao.gov/products/gao-21-519sp',
      },
      {
        label: 'NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1, July 2024.',
        href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf',
        doi: 'https://doi.org/10.6028/NIST.AI.600-1',
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
      {
        label: 'SSDF: add security practices to the lifecycle',
        href: '/guides/ssdf-secure-development',
        note: 'practices inside the lifecycle, not a phase at the end.',
      },
      {
        label: 'What to write down when software recommends',
        href: '/guides/recommendation-lineage',
        note: 'what to write down, not a second framework overview.',
      },
    ],
    closing: [
      p(
        'The essay form of this page is ',
        a('A recommendation still needs a name on it', '/blog/a-recommendation-still-needs-a-name'),
        '. The useful next step is to name the role, the data, the check, and the monitoring, or to read the two frameworks themselves. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'architecture-decision-records',
    title: 'Architecture decision records: write down why it was decided',
    seoTitle: 'Architecture decision records — Guides | PrimusNeo',
    crumb: 'Architecture decision records',
    eyebrow: 'Architecture decision records',
    description: 'An architecture decision record is a short note of why a decision was made, so a later engineer need not accept or reverse that decision blindly.',
    excerpt: 'An architecture decision record is a short note of why a decision was made, so a later engineer need not accept or reverse that decision blindly.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'Two choices',
    metricLabel: 'Nygard, 15 November 2011 — blindly accept the decision, or blindly change it',
    cardDescription: 'Michael Nygard\'s 2011 practice is to keep a collection of short records for architecturally significant decisions — each one a set of forces and a single decision in response — so a later engineer does not have to accept or reverse that decision blindly. If the motivation is not written down, those are the only two choices left.',
    patternTitle: 'Write down why it was decided',
    patternDescription: 'Nygard\'s 2011 practice keeps a short record of the forces and a single decision, so a later engineer does not accept or reverse it blindly.',
    lead: [
      p('Michael Nygard\'s 2011 practice is to keep a collection of short records for architecturally significant decisions — each one a set of forces and a single decision in response — so a later engineer does not have to accept or reverse that decision blindly. If the motivation is not written down, those are the only two choices left. This is a field practice about recording why a decision was made, not a PrimusNeo process badge.'),
      p('Michael Nygard, "Documenting Architecture Decisions," 15 November 2011. "Architecture for agile projects has to be described and defined differently. Not all decisions will be made at once, nor will all of them be done when the project begins." "Agile methods are not opposed to documentation, only to valueless documentation. Documents that assist the team itself can have value, but only if they are kept up to date. Large documents are never kept up to date." "One of the hardest things to track during the life of a project is the motivation behind certain decisions." A new person, without the rationale or consequences, "has only two choices": "Blindly accept the decision," which may be wrong if the context has changed, or "Blindly change it," which may damage a requirement that has not been tested yet. "It’s better to avoid either blind acceptance or blind reversal."'),
      p('What counts, in the same essay. "We will keep a collection of records for ‘architecturally significant’ decisions: those that affect the structure, non-functional characteristics, dependencies, interfaces, or construction techniques." "An architecture decision record is a short text file in a format similar to an Alexandrian pattern." "Each record describes a set of forces and a single decision in response to those forces." "The decision is the central piece here, so specific forces may appear in multiple ADRs."'),
      p('Nygard\'s own convention, quoted as his convention, not as a PrimusNeo repository layout: keep them in the project repository under doc/arch/adr-NNN.md; use a lightweight format such as Markdown or Textile; number them "sequentially and monotonically. Numbers will not be reused." "If a decision is reversed, we will keep the old one around, but mark it as superseded." The parts: Title (a short noun phrase; his examples include "ADR 1: Deployment on Ruby on Rails 3.0.10"); Context (the forces, "value-neutral," "simply describing facts"); Decision ("stated in full sentences, with active voice. ‘We will …’"); Status ("proposed" or "accepted"; later "deprecated" or "superseded" with a reference to its replacement); Consequences ("the resulting context"). No extra sections are invented here.'),
    ],
    figures: [
    ],
    sections: [
      h2('What to write down'),
      p('A delivery program can keep this habit. It does not require a house ADR standard or a required path. Nygard\'s doc/arch/ path, Rails example, and Markdown preference are his. They are not a PrimusNeo rule. This page does not invent adoption rates or a claim that ADRs prevent a percentage of rework. It is not a certification.'),
      p(
        a('Architecture decision records on a delivery program', 'https://overseasgenai.com/guides/architecture-decision-records'),
        ' is the delivery-handover reading of the same 2011 essay. ',
        a('Idempotent HTTP requests', '/guides/idempotent-requests'),
        ' and ',
        a('BIM and IFC file exchange', '/guides/bim-ifc-exchange'),
        ' are siblings where an interface or a dependency is often the thing being decided.',
      ),
    ],
    scenario: 'A later engineer is asked to change a storage interface, and the only record is a ticket title with no forces, no decision sentence, and no status. Nygard\'s two blind choices are already the ones left.',
    sources: [
      {
        label: 'Michael Nygard, "Documenting Architecture Decisions," 15 November 2011.',
        href: 'https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions',
      },
      {
        label: 'Delivery sibling: Architecture decision records on a delivery program',
        href: 'https://overseasgenai.com/guides/architecture-decision-records',
      },
    ],
    siblings: [
      {
        label: 'BIM and IFC file exchange',
        href: '/guides/bim-ifc-exchange',
        note: 'say which schema the file actually is.',
      },
      {
        label: 'Idempotent HTTP requests',
        href: '/guides/idempotent-requests',
        note: 'when a retry is a safe move.',
      },
      {
        label: 'What is a software bill of materials',
        href: '/guides/software-bill-of-materials',
        note: 'an inventory of what the software is made of.',
      },
    ],
    closing: [
      p(
        'The useful next step is to write a short record of the next architecturally significant decision, or to read the ',
        a('guides index', '/guides'),
        '. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'software-bill-of-materials',
    title: 'What is a software bill of materials (SBOM)',
    seoTitle: 'What is a software bill of materials (SBOM) — Guides | PrimusNeo',
    crumb: 'What is a software bill of materials',
    eyebrow: 'Software bill of materials',
    description: 'CISA describes an SBOM as a nested inventory of software ingredients. The 2026 minimum elements update the 2021 NTIA baseline. An SBOM is not a safety finding.',
    excerpt: 'CISA describes an SBOM as a nested inventory of software ingredients. The 2026 minimum elements update the 2021 NTIA baseline. An SBOM is not a safety finding.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'Ingredients',
    metricLabel: 'CISA — a nested inventory, not a safety finding',
    cardDescription: 'CISA describes an SBOM as a nested inventory — a list of ingredients that make up software. The 29 July 2026 joint guidance updates and replaces the 2021 NTIA minimum elements.',
    patternTitle: 'An inventory, not a safety finding',
    patternDescription: 'CISA describes an SBOM as a nested inventory, a list of ingredients that make up software. The 29 July 2026 guidance updates and replaces the 2021 NTIA minimum elements.',
    lead: [
      p('CISA describes an SBOM as a nested inventory — a list of ingredients that make up software. The 29 July 2026 joint guidance updates and replaces the 2021 NTIA minimum elements. An SBOM is a transparency tool. It can support risk-informed decisions. It does not, by itself, make the software safe, and it is not a certification PrimusNeo holds. This page stays with the official inventory documents. It is not a vulnerability walkthrough.'),
      p('CISA, "Software Bill of Materials (SBOM)" landing. "A ‘software bill of materials’ (SBOM) has emerged as a key building block in software security and software supply chain risk management. An SBOM is a nested inventory, a list of ingredients that make up software components." The ideas and implementation "have advanced since 2018 through a number of collaborative community effort, including National Telecommunications and Information Administration’s (NTIA) multistakeholder process." CISA also names a related concept, the Vulnerability Exploitability eXchange (VEX): "A VEX document is an attestation, a form of a security advisory that indicates whether a product or products are affected by a known vulnerability or vulnerabilities." VEX is kept here as CISA\'s definition, not as a second lede and not as a house product.'),
      p('CISA and partners, 2026 Minimum Elements for a Software Bill of Materials (SBOM), publication 29 July 2026 (Version 2.1). "CISA, the National Security Agency, the Federal Bureau of Investigation, and international partners released joint guidance… that updates and replaces the minimum elements for an SBOM published by the National Telecommunications and Information Administration (NTIA) in 2021." The landing: "An SBOM serves as an ‘ingredients list’ for software." "Minimum elements for an SBOM describe the baseline technologies and practices that an SBOM should include. While the minimum elements for an SBOM apply to all software, some software types—such as artificial intelligence and software as a service in cloud environments—may require additional elements. Any effort to improve software transparency, regardless of the software type, should begin with the application of minimum elements."'),
      p('The PDF introduction (opened): "An SBOM is a nested inventory, a list of ingredients that make up software applications and systems." "The elements outlined in this document set forth the minimum expected data fields and the practices and processes for an SBOM." Intended audience, from Guidance at a Glance: "Organizations that produce software, procure software, or operate software." Key actions, as the document lists them: organizations should request SBOMs that satisfy the updated minimum elements; use available tools to generate, ingest, and analyze SBOM data; and generate SBOMs that satisfy the updated minimum elements. Appendix A, Table 1, is the official list of minimum-elements data fields. The opened table includes component dependency relationship, hash algorithm and value, identifiers, license, name, producer, version; SBOM author, author signature, data format name and version, generation context, timestamp, tool name and version, and SBOM version. This page points at that table rather than inventing a shorter "must-have" list, and does not treat the appendix as a certification checklist PrimusNeo has passed. The 2021 NTIA list was not re-opened in this pass; the brief uses the 2026 document\'s own "updates and replaces" statement.'),
    ],
    figures: [
    ],
    sections: [
      h2('What an operator can ask for'),
      p(
        'A delivery or operations program can ask for an SBOM that meets the published minimum elements. That request is not a finding that the software is safe, and it is not a claim that PrimusNeo, a client, or a stack is SBOM-certified. ',
        a('SSDF: add security practices to the lifecycle', '/guides/ssdf-secure-development'),
        ' is the practice-framework sibling. ',
        a('Asking for a software bill of materials', 'https://overseasgenai.com/guides/software-bill-of-materials'),
        ' is the delivery-firm reading of the same 2026 baseline.',
      ),
      p('This page has no exploit steps, no invented coverage percentages, and no politics.'),
    ],
    scenario: 'A procurement note says "we have an SBOM," and treats the file as proof that the software is safe, without asking whether the 2026 minimum elements are present. CISA\'s ingredients-list definition, and the 2026 document\'s own limit that the minimum elements are a baseline, are already the reason that leap does not hold.',
    sources: [
      {
        label: 'CISA, Software Bill of Materials landing.',
        href: 'https://www.cisa.gov/sbom',
      },
      {
        label: '2026 Minimum Elements for a Software Bill of Materials (SBOM), 29 July 2026, Version 2.1. Landing:',
        href: 'https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom',
        more: [
          { label: 'PDF', href: 'https://www.cisa.gov/sites/default/files/2026-07/2026_cisa_sbom_minimum_elements_508c.pdf' },
        ],
      },
      {
        label: 'Delivery sibling: Asking for a software bill of materials',
        href: 'https://overseasgenai.com/guides/software-bill-of-materials',
      },
    ],
    siblings: [
      {
        label: 'SSDF: add security practices to the lifecycle',
        href: '/guides/ssdf-secure-development',
        note: 'practices inside the lifecycle, not a phase at the end.',
      },
      {
        label: 'Architecture decision records',
        href: '/guides/architecture-decision-records',
        note: 'write down why a structural choice was made.',
      },
    ],
    closing: [
      p(
        'The useful next step is to read the 2026 minimum elements, or to ask whether an SBOM in hand actually meets them. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'ssdf-secure-development',
    title: 'SSDF: add security practices to the lifecycle',
    seoTitle: 'SSDF: add security practices to the lifecycle — Guides | PrimusNeo',
    crumb: 'SSDF: add security practices to the lifecycle',
    eyebrow: 'SSDF secure development',
    description: 'NIST’s SSDF is a core set of secure-development practices to add to each lifecycle. This is the operator and architect reading, not a certification.',
    excerpt: 'NIST’s SSDF is a core set of secure-development practices to add to each lifecycle. This is the operator and architect reading, not a certification.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'SP 800-218',
    metricLabel: 'NIST, February 2022 — practices added to each lifecycle',
    cardDescription: 'NIST\'s Secure Software Development Framework is "a core set of high-level secure software development practices that can be integrated into each SDLC implementation," because few lifecycle models address software security in detail on their own. If the lifecycle model does not already address security in detail, the practices still have to be added to each implementation.',
    patternTitle: 'Add the practices to each lifecycle',
    patternDescription: 'NIST SP 800-218 recommends a core set of high-level secure-development practices that can be integrated into each SDLC implementation. Pointing at it is not a certification.',
    lead: [
      p(
        'NIST\'s Secure Software Development Framework is "a core set of high-level secure software development practices that can be integrated into each SDLC implementation," because few lifecycle models address software security in detail on their own. If the lifecycle model does not already address security in detail, the practices still have to be added to each implementation. This is the operator and architect reading of the same official source used on ',
        a('OverseasGenAI\'s SSDF page', 'https://overseasgenai.com/guides/ssdf-secure-development'),
        '. It is not a second practice list, not a penetration-test page, and not a certification PrimusNeo holds.',
      ),
      p('NIST\'s Secure Software Development Framework, Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities, February 2022. Authors: Murugiah Souppaya, Karen Scarfone, Donna Dodson. The document "recommends the Secure Software Development Framework (SSDF) – a core set of high-level secure software development practices that can be integrated into each SDLC implementation." Following those practices "should help software producers reduce the number of vulnerabilities in released software, reduce the potential impact of the exploitation of undetected or unaddressed vulnerabilities, and address the root causes of" those vulnerabilities — only complete sentences are used here.'),
      p('The CSRC publication page: "Few software development life cycle (SDLC) models explicitly address software security in detail, so secure software development practices usually need to be added to each SDLC model to ensure that the software being developed is well-secured." Date published: February 2022; supersedes a NIST companion paper on the same framework (23 April 2020).'),
    ],
    figures: [
    ],
    sections: [
      h2('What SSDF is, and is not'),
      p('Version 1.1, February 2022; a recommended, high-level set of practices; intended to reduce vulnerabilities, reduce the impact of those that remain, and address root causes. Not a checklist badge. A program can point at the framework. Pointing at it is not a claim that PrimusNeo, NEOS, AZOA, or a named client is SSDF-aligned. Individual practice IDs (PO, PS, PW, RV, or similar) are not listed from memory; they would need to be opened and quoted from those tables. There are no vulnerability walkthroughs on this page.'),
      p(
        a('What is a software bill of materials (SBOM)', '/guides/software-bill-of-materials'),
        ' is the inventory sibling. The OSGA page is the delivery-firm reading of the same publication.',
      ),
    ],
    scenario: 'A system is already in use, and "security" is added as a later workstream, with no practices integrated into the lifecycle that produced it. The CSRC sentence about adding practices to each SDLC model is already the reason that later workstream is late.',
    sources: [
      {
        label: 'Souppaya, Murugiah, Karen Scarfone, and Donna Dodson. Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities, NIST SP 800-218, February 2022.',
        href: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf',
        doi: 'https://doi.org/10.6028/NIST.SP.800-218',
      },
      {
        label: 'NIST CSRC publication page for SP 800-218.',
        href: 'https://csrc.nist.gov/pubs/sp/800/218/final',
      },
      {
        label: 'Delivery sibling: NIST SSDF: secure software development practices',
        href: 'https://overseasgenai.com/guides/ssdf-secure-development',
      },
    ],
    siblings: [
      {
        label: 'What is a software bill of materials (SBOM)',
        href: '/guides/software-bill-of-materials',
        note: 'an inventory, not a talisman.',
      },
      {
        label: 'AI accountability: NIST AI RMF and the GAO framework',
        href: '/guides/ai-rmf-accountability',
        note: 'a recommendation still needs a name on it.',
      },
    ],
    closing: [
      p(
        'The useful next step is to read SP 800-218, or to ask whether secure-development practices are already in the lifecycle, or still waiting for a later phase. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'recommendation-lineage',
    title: 'What to write down when software recommends',
    seoTitle: 'What to write down when software recommends — Guides | PrimusNeo',
    crumb: 'What to write down when software recommends',
    eyebrow: 'Recommendation lineage',
    description: 'GAO asks for clear goals and roles when software recommends, because inputs and operations are not always visible. This guide covers what to write down.',
    excerpt: 'GAO asks for clear goals and roles when software recommends, because inputs and operations are not always visible. This guide covers what to write down.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: '1.1 / 1.2',
    metricLabel: 'GAO-21-519SP, June 2021 — clear goals and clear roles',
    cardDescription: 'GAO\'s AI accountability framework asks for clear goals and objectives, and for clear roles, responsibilities, and delegation of authority, because "inputs and operations are not always visible." If those are not visible, the record has to make the goal, the data, the check, the role, and the monitoring visible instead. This is a practice page about what to write down when software recommends, not a second framework overview.',
    patternTitle: 'Write down the goal and the name',
    patternDescription: 'GAO asks for clear goals and clear roles because inputs and operations are not always visible. NIST says risk management runs through the AI system lifecycle dimensions.',
    lead: [
      p(
        'GAO\'s AI accountability framework asks for clear goals and objectives, and for clear roles, responsibilities, and delegation of authority, because "inputs and operations are not always visible." If those are not visible, the record has to make the goal, the data, the check, the role, and the monitoring visible instead. This is a practice page about what to write down when software recommends, not a second framework overview. ',
        a('AI accountability: NIST AI RMF and the GAO framework', '/guides/ai-rmf-accountability'),
        ' is the sibling, and ',
        a('A recommendation still needs a name on it', '/blog/a-recommendation-still-needs-a-name'),
        ' is the essay. This page is not legal advice, and not a certification.',
      ),
      p('the GAO\'s 2021 AI accountability framework, Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities, June 2021 (product page: published 30 June 2021). "This framework is organized around four complementary principles, which address governance, data, performance, and monitoring." "However, AI systems pose unique challenges to such oversight because their inputs and operations are not always visible." Practice 1.1: "Define clear goals and objectives for the AI system to ensure intended outcomes are achieved." Practice 1.2: "Define clear roles, responsibilities, and delegation of authority for the AI system to ensure effective operations, timely corrections, and sustained oversight." This page does not imply that PrimusNeo is a federal system.'),
      p('NIST\'s AI Risk Management Framework, AI Risk Management Framework (AI RMF 1.0), January 2023. Characteristics of trustworthy AI systems "include valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy enhanced, and fair with their harmful biases managed." The Core\'s four functions are GOVERN, MAP, MEASURE, and MANAGE, with GOVERN applying "to all stages of organizations’ AI risk management processes and procedures." "Risk management should be continuous, timely, and performed throughout the AI system lifecycle dimensions." The Framework "is intended to be voluntary."'),
    ],
    figures: [
    ],
    sections: [
      h2('The official prompts'),
      p('Clear goals (GAO 1.1). Clear roles and delegation (GAO 1.2). Governance, data, performance, monitoring. GOVERN across the lifecycle; continuous, not a one-time label (NIST). The useful record of a recommendation is who is responsible, what data went in, whether the output was checked against a stated goal, and how it will be watched.'),
      p('This page does not claim that PrimusNeo implements either framework. The live alpha note belongs in the newsroom, not as a closer here. There are no invented deployments, accuracy numbers, "X percent of AI projects fail" lines, or CHAOS rates.'),
    ],
    scenario: 'A recommendation is accepted in a meeting, and the only record is the output itself, with no stated goal, no named data, no check, and no name on the acceptance. GAO\'s 1.1 and 1.2 are already the missing lines.',
    sources: [
      {
        label: 'U.S. Government Accountability Office, Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities, GAO-21-519SP, June 2021.',
        href: 'https://www.gao.gov/products/gao-21-519sp',
      },
      {
        label: 'NIST, Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1, January 2023.',
        href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
      },
      {
        label: 'Framework sibling: AI accountability: NIST AI RMF and the GAO framework. Essay: A recommendation still needs a name on it',
        href: '/guides/ai-rmf-accountability',
        more: [
          { label: 'A recommendation still needs a name on it', href: '/blog/a-recommendation-still-needs-a-name' },
        ],
      },
    ],
    siblings: [
      {
        label: 'AI accountability: NIST AI RMF and the GAO framework',
        href: '/guides/ai-rmf-accountability',
        note: 'the official frameworks, not a second essay.',
      },
      {
        label: 'What is a digital twin',
        href: '/guides/digital-twins',
        note: 'a representation you can evaluate.',
      },
      {
        label: 'Digital twins of processes',
        href: '/guides/process-digital-twins',
        note: 'a twin can be a process, not only a building.',
      },
    ],
    closing: [
      p(
        'The useful next step is to write down the goal, the data, the check, and the name, or to read the ',
        a('framework companion', '/guides/ai-rmf-accountability'),
        '. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
  {
    slug: 'process-digital-twins',
    title: 'Digital twins of processes and conceptual models',
    seoTitle: 'Digital twins of processes and conceptual models — Guides | PrimusNeo',
    crumb: 'Digital twins of processes',
    eyebrow: 'Process digital twins',
    description: 'NIST IR 8356 says a digital twin can represent a process or a conceptual model, not only a building. Interoperable definitions and trust still apply.',
    excerpt: 'NIST IR 8356 says a digital twin can represent a process or a conceptual model, not only a building. Interoperable definitions and trust still apply.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'IR 8356',
    metricLabel: 'NIST, February 2025 — a process or a conceptual model can be a twin',
    cardDescription: 'NIST\'s 2021 digital twin report is explicit that a digital twin can emulate non-physical things — "processes, conceptual models" — as well as physical ones, and that the full benefits "will require interoperable definitions, tools, and standards as well as early consideration of digital twin cybersecurity and trust." If the entity being represented is a process or a conceptual model, NIST still calls that a twin — and still requires a representation you can evaluate. This is a companion to What is a digital twin, not a second opening definition, and not a vulnerability write-up.',
    patternTitle: 'A process can be the entity',
    patternDescription: 'NIST IR 8356 says a digital twin can emulate processes and conceptual models, not only buildings. The full benefits still require interoperable definitions and early consideration of cybersecurity and trust.',
    lead: [
      p(
        'NIST\'s 2021 digital twin report is explicit that a digital twin can emulate non-physical things — "processes, conceptual models" — as well as physical ones, and that the full benefits "will require interoperable definitions, tools, and standards as well as early consideration of digital twin cybersecurity and trust." If the entity being represented is a process or a conceptual model, NIST still calls that a twin — and still requires a representation you can evaluate. This is a companion to ',
        a('What is a digital twin', '/guides/digital-twins'),
        ', not a second opening definition, and not a vulnerability write-up.',
      ),
      p('NIST\'s 2021 digital twin report, Security and Trust Considerations for Digital Twin Technology, February 2025. "A digital twin (DT) is an electronic representation of a real-world entity; providing the capability to evaluate this entity. A digital twin can emulate both physical things (e.g., buildings, electronics, living things), and non-physical things (e.g., processes, conceptual models)." "The full benefits of digital twin technology will require interoperable definitions, tools, and standards as well as early consideration of digital twin cybersecurity and trust." That is the complete sentence. A cut-off version appeared in a source note on the batch-1 brief; this page uses the complete line.'),
      p('NIST\'s 14 February 2025 news release restates that a twin may represent "a real-world physical (e.g., buildings, electronics, living things) or non-physical (e.g., processes, conceptual models) entity."'),
    ],
    figures: [
    ],
    sections: [
      h2('The same limit, now in a complete sentence'),
      p('Interoperable definitions, tools, and standards; early consideration of cybersecurity and trust. That is a finding in the report, not a PrimusNeo roadmap. A later companion can stay with NIST\'s published trust sections, without attack steps; this page does not preview exploits. A workflow diagram, by itself, is not treated here as a twin.'),
      p(
        'A process twin still needs a record of what process is represented, how it is synchronized, and who accepts a decision made with it. ',
        a('What to write down when software recommends', '/guides/recommendation-lineage'),
        ' is the habit sibling when a decision is made with the twin. This page does not claim a live PrimusNeo process twin, invent coverage percentages, or say that every factory already twins its process. It is not a Tie Town or stack claim, and not investment language.',
      ),
    ],
    scenario: 'A proposal is titled "digital twin of the process" and attaches a workflow diagram with no named process, no evaluation method, and no synchronization frequency. NIST\'s opening sentence already asks for a representation you can evaluate, and the complete benefits sentence already names interoperable definitions and early attention to trust.',
    sources: [
      {
        label: 'Voas, Mell, Laplante, and Piroumian, Security and Trust Considerations for Digital Twin Technology, NIST IR 8356, February 2025.',
        href: 'https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8356.pdf',
        doi: 'https://doi.org/10.6028/NIST.IR.8356',
      },
      {
        label: 'NIST, "Security and Trust Considerations for Digital Twin Technology: NIST Releases IR 8356," 14 February 2025.',
        href: 'https://www.nist.gov/news-events/news/2025/02/security-and-trust-considerations-digital-twin-technology-nist-releases-ir',
      },
      {
        label: 'Definition sibling: What is a digital twin',
        href: '/guides/digital-twins',
      },
    ],
    siblings: [
      {
        label: 'What is a digital twin',
        href: '/guides/digital-twins',
        note: 'the official definition, and the interoperability limit.',
      },
      {
        label: 'What to write down when software recommends',
        href: '/guides/recommendation-lineage',
        note: 'the goal, the data, the check, and the name.',
      },
      {
        label: 'What is local-first software',
        href: '/guides/local-first-software',
        note: 'the copy on the device as the primary copy.',
      },
    ],
    closing: [
      p(
        'The useful next step is to say what process is being represented and how it can be evaluated, or to read ',
        a('What is a digital twin', '/guides/digital-twins'),
        '. If something on this page is wrong, ',
        a('write to us', '/contact'),
        '.',
      ),
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
