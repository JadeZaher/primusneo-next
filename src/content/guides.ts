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
    title: 'What makes a digital twin worth maintaining',
    seoTitle: 'What is a digital twin — Guides | PrimusNeo',
    crumb: 'What is a digital twin',
    eyebrow: 'Digital twins',
    description: 'Why most 3D dashboards decay after pilot handoff, and how NIST IR 8356 defines a twin as an electronic representation you can evaluate.',
    excerpt: 'Why most 3D dashboards decay after pilot handoff, and how NIST IR 8356 defines a twin as an electronic representation you can evaluate.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'IR 8356',
    metricLabel: 'NIST, February 2025 — evaluate the real entity',
    cardDescription: 'Half the "digital twins" pitched to cities and facilities are static 3D dashboards wrapped around a stale pilot export. A real twin lets engineers evaluate live state against the physical asset or process after handoff.',
    patternTitle: 'Evaluation beats visualization',
    patternDescription: 'NIST IR 8356 defines a digital twin as an electronic representation of a real-world physical or process entity that lets you evaluate it.',
    lead: [
      p('Half the "digital twins" pitched to cities and plant operators are static 3D viewers bolted onto a spreadsheet export that nobody has updated since the pilot ended. The shader looks impressive in an executive demo; six months later, a valve gets replaced, a field crew files a work order on paper, and the model quietly drifts away from reality.'),
      p('What makes a digital twin worth maintaining is not the geometry viewport—it is whether engineers can evaluate real operational state against it after vendor handoff. NIST IR 8356 (February 2025), Security and Trust Considerations for Digital Twin Technology, puts that boundary in two plain sentences: "A digital twin (DT) is an electronic representation of a real-world entity; providing the capability to evaluate this entity. A digital twin can emulate both physical things (e.g., buildings, electronics, living things), and non-physical things (e.g., processes, conceptual models)."'),
      p(
        'If a model cannot be queried or checked against what is happening on site—or if it lives solely inside a third-party SaaS viewer you cannot export from—you do not have an operational twin. You have an interactive brochure. That ownership problem is what we unpack in ',
        a('A digital twin shouldn\'t live in someone else\'s cloud', '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud'),
        '.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('Where evaluation and synchronization actually break'),
      p('NIST IR 8356 also quotes the Digital Twin Consortium description: "A digital twin is a virtual representation of real-world entities and processes synchronized at a specified frequency and fidelity." Every failure in production lives inside those last three words—specified frequency and fidelity. Does the facility pipe telemetry update every ten seconds or once a quarter when a contractor uploads CSVs? Without an explicit contract for what synchronizes, how often, and which team owns reconciliation when two feeds conflict, dashboards quietly present stale readings as live truth.'),
      p(
        'NIST further warns that "The full benefits of digital twin technology will require interoperable definitions, tools, and standards as well as early consideration of digital twin" trust and security considerations—and extends that scope in ',
        a('Digital twins of processes and conceptual models', '/guides/process-digital-twins'),
        '. Passing an opaque vendor file around breaks interoperability fast; even basic ',
        a('BIM and IFC file exchanges', '/guides/bim-ifc-exchange'),
        ' collapse when teams skip naming the exact schema edition on export.',
      ),
      h2('Custody and decision logs matter more than rendering'),
      p(
        'Once a representation drives maintenance budgets or inspection calls, custody becomes the hard systems question. Keeping the authoritative state close to the operator—explored in ',
        a('What is local-first software', '/guides/local-first-software'),
        ' and ',
        a('Local-first digital twin', '/blog/local-first-digital-twin'),
        '—ensures a cancelled SaaS subscription never locks an owner out of their own building history. On the organizational side, teams still need to record who approved a change suggested by the model, which feeds directly into ',
        a('construction site workflows', '/industries/construction'),
        '.',
      ),
      h2('Scope and boundaries'),
      p(
        'This guide is an architecture reference grounded in NIST IR 8356 (and its 14 February 2025 summary release), not a maturity claim or market survey—it does not invent adoption rates, percentages, or vulnerability walkthroughs. PrimusNeo does not claim a live twin, a deployment, or an implementation that follows NIST IR 8356 here; ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ', and ',
        a('ArdaNova', 'https://ardanova.com'),
        ' serve as neighboring governance, workflow, and record layers rather than off-the-shelf twin products, and nothing in this note is a certification claim.',
      ),
    ],
    scenario: 'A vendor pitches a "process digital twin" anchored to a static architectural diagram—with no named physical or workflow entity, no defined sync cadence, and no test showing how operators evaluate drift. Applying NIST IR 8356 immediately exposes that gap before procurement signs off.',
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
    title: 'BIM and IFC file exchange: pin the schema on export',
    seoTitle: 'BIM and IFC file exchange — Guides | PrimusNeo',
    crumb: 'BIM and IFC file exchange',
    eyebrow: 'BIM exchanges',
    description: 'Why "send the IFC" breaks downstream building tools years later, and how NBIMS-US V3 pins the approved schema edition.',
    excerpt: 'Why "send the IFC" breaks downstream building tools years later, and how NBIMS-US V3 pins the approved schema edition.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'IFC 2X3',
    metricLabel: 'NBIMS-US V3 §2.2 — name the exact schema edition',
    cardDescription: 'Handing over "building-final.ifc" without pinning the schema edition or exporter settings turns multi-year asset records into unreadable blobs when downstream software moves on.',
    patternTitle: 'Pin the schema on the handoff',
    patternDescription: 'In NBIMS-US Version 3 chapter 2.2, the approved exchange is IFC 2X3 (2X3-TC1). Unpinned exports silently rot across software upgrades.',
    lead: [
      p('Someone emails "site-model-final.ifc" at project closeout, your structural viewer renders half the MEP runs as untyped bounding boxes, and three years later a maintenance team discovers nobody recorded which exporter profile or schema edition produced the file. "Send the IFC" is not an engineering specification—it is how spatial metadata quietly disappears between handoffs.'),
      p('The National Institute of Building Sciences hosts the National BIM Standard–United States (NBIMS-US™) to give built-environment teams "consensus-based standards" and unambiguous exchange documentation. In NBIMS-US Version 3 chapter 2.2, the approved neutral STEP/XML exchange format is pinned explicitly to Industry Foundation Class (IFC) 2X3 (February 2006), authored by buildingSMART International—including its technical corrigendum line naming "2X3-TC1" as that edition\'s baseline.'),
      p(
        'A building file that cannot be inspected reliably by the next custodian is not a handoff; it is an archive trap. We trace how schema drift happens on real jobs in ',
        a('The file opened. It wasn\'t the building.', '/blog/the-file-opened-it-wasnt-the-building'),
        '.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('Why naming the edition prevents silent data loss'),
      p('Every BIM exporter carries subtle assumptions about coordinate origins, property-set mappings, and geometry fallbacks. When two teams agree only on "IFC" in the contract—while NBIMS-US lists distinct major editions such as V3 and V4—nobody knows whether a missing thermal zone or structural parameter came from field omission or parser mismatch.'),
      p(
        'Recording the schema edition alongside the deliverable is basic operational hygiene, similar to pinning dependencies in software engineering. An open exchange file is also only one piece of a ',
        a('digital twin', '/guides/digital-twins'),
        '—geometry export alone does not evaluate live facility state—though both rely on the same custody discipline across ',
        a('construction programs', '/industries/construction'),
        '.',
      ),
      h2('What to put in every handover manifest'),
      p('Include four plain facts next to every delivered model: the exact NBIMS-US edition and schema identifier (such as IFC 2X3 / 2X3-TC1 when following V3 §2.2), the exporter software build, the project coordinate reference, and a checksummed copy verified to open outside the authoring tool.'),
      h2('Scope and source boundaries'),
      p('This guide cites strictly from the published NBIMS-US landing page and NBIMS-US Version 3 chapter 2.2 specification; downstream ISO and buildingSMART catalogue editions are excluded rather than extrapolated from memory. They are not cited here. PrimusNeo does not claim a model repository or a certification, and does not invent universal interchange pass rates.'),
    ],
    scenario: 'A subcontractor handoff drops an unlabelled ".ifc" archive into shared storage with zero manifest. Eighteen months later a retrofit crew opens it in a different toolchain, loses property sets, and cannot tell whether the omissions are field reality or translation loss.',
    sources: [
      {
        label: 'National Institute of Building Sciences, National BIM Standard–United States landing.',
        href: 'https://www.nibs.org/nbims',
      },
      {
        label: 'NBIMS-US Version 3, chapter 2.2, "ISO 16739, Industry Foundation Class 2X3 – February 2006."',
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
    title: 'Idempotent HTTP requests: why a dropped timeout cannot be guessed',
    seoTitle: 'Idempotent HTTP requests — Guides | PrimusNeo',
    crumb: 'Idempotent HTTP requests',
    eyebrow: 'Idempotent requests',
    description: 'When a network drops the reply after commit, blind retries double-settle and blind aborts drop work. How RFC 9110 §9.2.2 bounds safe retries.',
    excerpt: 'When a network drops the reply after commit, blind retries double-settle and blind aborts drop work. How RFC 9110 §9.2.2 bounds safe retries.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: '§9.2.2',
    metricLabel: 'RFC 9110, June 2022 — identical requests, one server effect',
    cardDescription: 'A timed-out POST does not mean "failed"—it means you never heard the answer. Understanding what HTTP makes idempotent versus what your application must deduplicate stops double-charges.',
    patternTitle: 'One intended effect across retries',
    patternDescription: 'RFC 9110 defines PUT, DELETE, and safe methods as idempotent—not POST—and warns proxies never to auto-retry non-idempotent writes.',
    lead: [
      p('A service fires a state-changing request across an unreliable link, the TCP socket resets before the response arrives, and the retry loop fires again three seconds later. If the server already committed the first attempt, your retry just billed a contractor twice or minted duplicate ledger state. If it didn\'t commit and your client gave up, the payout silently vanished. A lost HTTP reply does not tell you what happened on the server.'),
      p('RFC 9110 (HTTP Semantics, June 2022, §9.2.2) draws the exact protocol line: "A request method is considered \'idempotent\' if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request." Under the standard, "PUT, DELETE, and safe request methods are idempotent"—which is why a client can safely replay a PUT after a broken socket, whereas "A proxy MUST NOT automatically retry non-idempotent requests."'),
      p(
        'You can break this exact failure mode on purpose in our interactive ',
        a('Paid-Twice browser simulator', '/demos/paid-twice'),
        ', or read the post-mortem on timeouts in ',
        a('Paid twice, or never', '/blog/paid-twice-or-never'),
        '.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('Where protocol idempotence stops and application keys begin'),
      p('HTTP\'s §9.2.2 definition is strict about the intended state mutation on the server: logging each duplicate request attempt is fine ("a server is free to log each request separately"), provided the effect stays identical. Crucially, the RFC does not make POST idempotent, and it does not invent "idempotency keys" as a built-in protocol header. When APIs accept POST for payments or multi-step workflow triggers, the application layer itself must enforce deduplication using a stored client key and status check before mutating state.'),
      p(
        'RFC 9110 also adds an easily overlooked safety brake: "A client SHOULD NOT automatically retry a failed automatic retry." Endless exponential retries on ambiguous network errors turn localized blips into thundering-herd outages. Writing down the exact retry boundary between caller and receiver prevents future engineers from "fixing" timeouts by loosening proxy retries—which is why this decision belongs in ',
        a('architecture decision records', '/guides/architecture-decision-records'),
        '.',
      ),
      h2('How this maps to stateful workflow engines'),
      p(
        'In multi-step orchestration, an interrupted step has to reconcile against persisted state before acting again. ',
        a('AZOA\'s workflow model for idempotent requests', 'https://azoa.ardanova.com/workflows/idempotent-requests'),
        ' and its companion pattern ',
        a('Settle once', 'https://azoa.ardanova.com/workflows/settle-once'),
        ' model exactly that reconcile-before-retry boundary.',
      ),
      h2('Scope and boundaries'),
      p('This guide summarizes RFC 9110 §9.2.2 and protocol retry hazards; it does not describe a live PrimusNeo payment rail, financial custody onboarding, or exploit mechanics. AZOA\'s public workflow sandbox is a simulation and does not move value.'),
    ],
    scenario: 'A reverse proxy sees a 504 gateway timeout on an unkeyed POST checkout call and automatically replays it upstream. The original request actually committed 200ms after the proxy cutoff—leaving one customer charged twice because nobody respected the non-idempotent retry rule.',
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
    title: 'Local-first software: keeping custody when the cloud disappears',
    seoTitle: 'What is local-first software — Guides | PrimusNeo',
    crumb: 'What is local-first software',
    eyebrow: 'Local-first software',
    description: 'When a SaaS tool shuts down, server-only records vanish with it. How Ink & Switch\'s local-first model keeps your device copy primary.',
    excerpt: 'When a SaaS tool shuts down, server-only records vanish with it. How Ink & Switch\'s local-first model keeps your device copy primary.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'No spinners',
    metricLabel: 'Ink & Switch, April 2019 — device copy as primary',
    cardDescription: 'If the only live database belongs to a vendor you rent by the seat, a shutdown or expired invoice locks you out of your own operational history. Local-first flips which copy is canonical.',
    patternTitle: 'The device copy is canonical',
    patternDescription: 'Kleppmann, Wiggins, van Hardenberg, and McGranaghan argue for treating local device data as primary while servers assist sync.',
    lead: [
      p('Years of land-trust maintenance logs, sensor annotations, and field photos accumulate inside a polished SaaS workspace. Then the vendor gets acquired, sunsetted, or prices out small stewards—and overnight the desktop client stops booting, leaving an engineer scrubbing through a mangled JSON or PDF dump at the eleventh hour. When the only canonical database lives on someone else\'s server, losing the subscription means losing operational memory.'),
      p('That failure mode is the exact starting point of Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan\'s April 2019 Ink & Switch essay, "Local-first software: You own your data, in spite of the cloud." As they note, cloud tools make collaboration fast—yet "by centralizing data storage on servers, cloud apps also take away ownership and agency from users. If a service shuts down, the software stops functioning, and data created with that software is lost." Their answer starts with one architectural inversion: treat "the copy of the data on your local device — your laptop, tablet, or phone — as the primary copy," while servers "hold secondary copies of your data in order to assist with access from multiple devices." Its first of seven ideals says it in five words: "1. No spinners: your work at your fingertips."'),
      p(
        'We dig into what that custody boundary means for field infrastructure in ',
        a('Local-first digital twin', '/blog/local-first-digital-twin'),
        ' and ',
        a('A digital twin shouldn\'t live in someone else\'s cloud', '/blog/digital-twin-shouldnt-live-in-someone-elses-cloud'),
        '.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('Real trade-offs behind treating the device as primary'),
      p('Local-first is not an anti-server ideology—remote nodes are still vital for backups, relays, and multi-party sync. What changes is failure behavior: reads and writes succeed against local storage even on a flaky rural link, and when a sync network disappears temporarily, ',
        a('idempotent protocol retries', '/guides/idempotent-requests'),
        ' and deterministic conflict handling keep state converging without holding the operator hostage. The real cost moves into engineering discipline: schema migrations outlive central control, key custody stays with the member (explored for browser passkeys in ',
        a('NEOS Keys in the browser', 'https://neos.primusneo.com/practices/keys-in-the-browser'),
        '), and conflict resolution rules must be explicit rather than hidden behind "last write wins."'),
      h2('Where custody connects across the architecture'),
      p(
        'Whether an organization stores facility state as a ',
        a('digital twin', '/guides/digital-twins'),
        ' or coordinates field crews offline, the first architectural question is identical: if the host goes offline permanently tomorrow, does the operator still hold a runnable, verifiable copy?',
      ),
      h2('Scope and boundaries'),
      p(
        'This note is grounded directly in the Ink & Switch essay rather than claiming CRDTs are deployed across every stack surface or inventing synthetic sync-conflict rates. PrimusNeo, ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', and ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ' are distinct infrastructure layers—this guide does not claim any of them as an off-the-shelf local-first consumer product.',
      ),
    ],
    scenario: 'A regional land stewardship team runs three years of site surveys in a proprietary hosted app. When the startup winds down on 60 days\' notice, exported files break internal links because local custody was never part of the data model.',
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
    title: 'AI accountability: tying every automated call to a named owner',
    seoTitle: 'AI accountability: NIST AI RMF and GAO — Guides | PrimusNeo',
    crumb: 'AI accountability',
    eyebrow: 'AI accountability',
    description: 'When software makes a recommendation nobody can trace, accountability evaporates. How NIST AI RMF 1.0 and GAO-21-519SP structure verifiable oversight.',
    excerpt: 'When software makes a recommendation nobody can trace, accountability evaporates. How NIST AI RMF 1.0 and GAO-21-519SP structure verifiable oversight.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'AI 100-1',
    metricLabel: 'NIST AI RMF 1.0 + GAO-21-519SP — continuous lifecycle oversight',
    cardDescription: 'A score on a screen tells operators what a model guessed, not who stands behind the decision or how wrong calls get caught. Both NIST AI RMF and GAO treat ownership and monitoring as continuous engineering structure.',
    patternTitle: 'Trace recommendations to an owner',
    patternDescription: 'NIST AI RMF 1.0 (GOVERN, MAP, MEASURE, MANAGE) and GAO\'s four principles turn invisible model inputs into inspectable governance and monitoring.',
    lead: [
      p('An internal triage system flags a contractor invoice or recommends a maintenance deferral, an operator clicks approve in a hurried morning standup, and three months later an auditor asks why the call was made. Nobody can point to the input snapshot, what threshold was active, which human delegated authority, or whether anyone was tracking drift after launch.'),
      p('Two widely cited public references tackle that exact visibility gap without reducing it to compliance theater. NIST\'s Artificial Intelligence Risk Management Framework (AI RMF 1.0, NIST AI 100-1, January 2023) organizes ongoing risk work around four continuous functions—GOVERN, MAP, MEASURE, and MANAGE—explicitly noting that "Actions do not constitute a checklist, nor are they necessarily an ordered set of steps," and that "Risk management should be continuous, timely, and performed throughout the AI system lifecycle dimensions."'),
      p(
        'Before turning oversight into process jargon, the U.S. Government Accountability Office (GAO-21-519SP, June 2021) identifies why AI oversight breaks in the real world: "AI systems pose unique challenges to such oversight because their inputs and operations are not always visible." We pair that framework analysis with the engineering essay ',
        a('A recommendation still needs a name on it', '/blog/a-recommendation-still-needs-a-name'),
        '.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('How GOVERN, MAP, MEASURE, MANAGE, and GAO principles work in practice'),
      p('Directed under the National Artificial Intelligence Initiative Act of 2020 (P.L. 116-283), NIST AI RMF 1.0 is "voluntary, rights-preserving, non-sector-specific, and use-case agnostic," listing trustworthy system traits including valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy enhanced, and fair with harmful biases managed. Its generative companion, NIST AI 600-1 (July 2024), extends those same four functions specifically for generative models.'),
      p('Meanwhile GAO-21-519SP frames operational accountability across governance, data, performance, and monitoring—opening with two deceptively sharp engineering practices: Practice 1.1 ("Define clear goals and objectives for the AI system to ensure intended outcomes are achieved") and Practice 1.2 ("Define clear roles, responsibilities, and delegation of authority for the AI system to ensure effective operations, timely corrections, and sustained oversight"). If an engineer cannot point to an owner when an output drifts, Practice 1.2 already failed.'),
      h2('Operationalizing the paper trail'),
      p(
        'Reading the frameworks only takes an afternoon; wiring them into release workflows takes disciplined logging—capturing what to write down in ',
        a('What to write down when software recommends', '/guides/recommendation-lineage'),
        ' alongside integrating security controls across ',
        a('SSDF lifecycles', '/guides/ssdf-secure-development'),
        '.',
      ),
      h2('Scope and boundaries'),
      p(
        'This guide is an architecture reference, not legal advice and not a certification claim. It does not claim that PrimusNeo, ',
        a('NEOS', 'https://neos.primusneo.com'),
        ', or ',
        a('AZOA', 'https://azoa.ardanova.com'),
        ' implements either federal framework, treats PrimusNeo as a federal agency system, invents failure statistics, or does not use Standish CHAOS rates.',
      ),
    ],
    scenario: 'A team deploys an automated priority scorer for field repairs, hits a miscalibration after seasonal sensor changes, and discovers no owner or evaluation baseline was logged at launch—leaving nobody authorized to freeze the model.',
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
    title: 'Architecture decision records: why engineers repeat bad migrations',
    seoTitle: 'Architecture decision records — Guides | PrimusNeo',
    crumb: 'Architecture decision records',
    eyebrow: 'Architecture decision records',
    description: 'Without why a structural boundary was chosen, new engineers either accept broken invariants blindly or rip them out blindly. Nygard\'s ADR practice.',
    excerpt: 'Without why a structural boundary was chosen, new engineers either accept broken invariants blindly or rip them out blindly. Nygard\'s ADR practice.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'Two choices',
    metricLabel: 'Nygard, Nov 2011 — blind acceptance or blind reversal',
    cardDescription: 'A year after launch, nobody remembers why a weird retry cap or storage constraint exists. Michael Nygard\'s ADR habit prevents teams from breaking load-bearing constraints they don\'t understand.',
    patternTitle: 'Capture the forces behind structural calls',
    patternDescription: 'Nygard\'s ADR practice records the forces, the single active-voice decision, and the status so teams can reverse choices intentionally.',
    lead: [
      p('A new staff engineer opens a repository six months after handoff, sees a rigid retry queue or an unconventional SurrealDB schema boundary, and finds zero explanation in tickets or commit titles. Without the historical context, she has only the two bad moves Michael Nygard warned about in November 2011: blindly leave an outdated constraint in place, or rip it out blindly and re-break an edge case that took two outages to discover.'),
      p('In "Documenting Architecture Decisions" (15 November 2011), Nygard noted why heavy architecture wikis rot while motivation gets lost: "Large documents are never kept up to date," whereas "An architecture decision record is a short text file in a format similar to an Alexandrian pattern." Each ADR captures "a set of forces and a single decision in response to those forces" for architecturally significant choices—anything shaping dependencies, interfaces, construction rules, or non-functional boundaries. When context shifts, old records stay in git marked deprecated or superseded rather than overwritten.'),
      p(
        'Whether your call governs ',
        a('idempotent HTTP retries', '/guides/idempotent-requests'),
        ' or pins schema boundaries for ',
        a('BIM and IFC file exchanges', '/guides/bim-ifc-exchange'),
        ', the operational cost is identical: five minutes of clear writing beats five days debugging why an invariant existed.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('Anatomy of a decision record engineers actually read'),
      p('Nygard\'s lightweight structure splits into five focused sections: Title ("ADR 1: Deployment on Ruby on Rails 3.0.10" is his canonical example), Context (the constraints and pressures, described neutrally), Decision (active voice: "We will …"), Status ("proposed", "accepted", "deprecated", or "superseded" pointing to its replacement), and Consequences (the resulting trade-offs). Stored monotonically as numbered Markdown files—Nygard\'s own convention sits at doc/arch/adr-NNN.md—they live right next to code diffs instead of vanishing in slide decks.'),
      p(
        'That handoff habit pairs directly with ',
        a('Architecture decision records on a delivery program', 'https://overseasgenai.com/guides/architecture-decision-records'),
        ' when external engineering vendors transfer live systems to internal operators.',
      ),
      h2('Scope and boundaries'),
      p('Nygard\'s doc/arch/ layout, Rails example, and Markdown format are his conventions. They are not a PrimusNeo rule, and teams can organize files wherever maintainers look. This guide does not invent rework-savings metrics. It is not a certification.'),
    ],
    scenario: 'An engineer simplifies a settlement consumer to retry failed POSTs automatically, unaware a three-year-old gateway quirk causes double debits—because the original guard lived only in a closed Slack thread instead of a decision record.',
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
    title: 'Software bill of materials: why "we generated an SBOM" proves nothing alone',
    seoTitle: 'What is a software bill of materials (SBOM) — Guides | PrimusNeo',
    crumb: 'What is a software bill of materials',
    eyebrow: 'Software bill of materials',
    description: 'CISA defines an SBOM as an ingredients list—not a clean bill of health. What the 2026 minimum elements require before triage works.',
    excerpt: 'CISA defines an SBOM as an ingredients list—not a clean bill of health. What the 2026 minimum elements require before triage works.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'Ingredients',
    metricLabel: 'CISA 2026 baseline — nested inventory, not safety badge',
    cardDescription: 'During an upstream CVE alert, teams discover their procurement "SBOM" is a stale PDF missing dependency depth, hashes, or author signatures—turning triage back into manual archaeology.',
    patternTitle: 'Inventory first, exploitability second',
    patternDescription: 'CISA\'s 29 July 2026 guidance updates the 2021 NTIA baseline with exact metadata fields, paired separately with VEX for exploitability status.',
    lead: [
      p('When a critical vulnerability drops in a transitive compression or crypto package, operations teams rush to find out which production services actually ship the affected dependency. Too often, the "SBOM" a vendor handed over during procurement turns out to be an unverified dependency dump with missing versions, zero cryptographic hashes, or opaque transitive trees—turning a five-minute lookup into days of manual lockfile archaeology.'),
      p('CISA\'s definition cuts straight through that hype: "An SBOM is a nested inventory, a list of ingredients that make up software components"—not a clean safety stamp. On 29 July 2026, CISA, the NSA, the FBI, and international partners published Version 2.1 of the 2026 Minimum Elements for a Software Bill of Materials (SBOM), formally updating and replacing the 2021 NTIA minimum baseline. That same resource pairs SBOM inventories with Vulnerability Exploitability eXchange (VEX) advisories—attestations indicating whether shipped products are actually impacted by a disclosed CVE.'),
      p(
        'An inventory tells operators what is in the binary; integrating automated generation and signing into the build itself connects directly to ',
        a('SSDF lifecycle practices', '/guides/ssdf-secure-development'),
        ' and delivery program requirements tracked on ',
        a('Asking for a software bill of materials', 'https://overseasgenai.com/guides/software-bill-of-materials'),
        '.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('The 2026 minimum-elements baseline in concrete fields'),
      p('Instead of rubber-stamping "we have an SBOM," technical leads should inspect artifacts against Appendix A, Table 1 of the July 2026 guidance. The minimum baseline requires component dependency relationship, hash algorithm and value, identifiers, license, name, producer, version; SBOM author, author signature, data format name and version, generation context, timestamp, tool name and version, and SBOM version. CISA also notes that cloud SaaS and AI systems often require additional context beyond this baseline.'),
      h2('Scope and boundaries'),
      p('Asking for CISA\'s minimum elements raises visibility across produced, procured, and operated software, yet an inventory is never proof a codebase is vulnerability-free, and it is not a claim that PrimusNeo, a client, or a stack is SBOM-certified. This guide intentionally omits exploit walkthroughs, synthetic coverage percentages, and invented shortcuts beyond the published PDF.'),
    ],
    scenario: 'A security team triggers incident response on a zero-day package and opens the vendor\'s delivered SBOM—only to find top-level packages listed with zero dependency relationships, no hash values, and no timestamp showing which build artifact it matched.',
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
    title: 'SSDF: why bolting security on after launch fails',
    seoTitle: 'SSDF: add security practices to the lifecycle — Guides | PrimusNeo',
    crumb: 'SSDF: add security practices to the lifecycle',
    eyebrow: 'SSDF secure development',
    description: 'Most SDLC models skip security details until release week. How NIST SP 800-218 integrates concrete practices directly into engineering lifecycles.',
    excerpt: 'Most SDLC models skip security details until release week. How NIST SP 800-218 integrates concrete practices directly into engineering lifecycles.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'SP 800-218',
    metricLabel: 'NIST, February 2022 — security built into each SDLC',
    cardDescription: 'Treating security as a pre-launch pentest ticket catches hardcoded credentials after architectural damage is done. NIST SSDF lays out lifecycle practices meant to run alongside builds from day one.',
    patternTitle: 'Integrate practices before release',
    patternDescription: 'NIST SP 800-218 embeds core secure-development practices into each SDLC rather than bolting on late-stage audits.',
    lead: [
      p('Almost every engineering organization has lived through the same fire drill: a service ships through eight sprints focused solely on features, someone books a two-week security review right before cutover, and auditors immediately flag missing build signing, unsanitized input seams, and dependency rot that would have cost an hour to prevent in week two—now requiring a three-week rewrite under launch pressure.'),
      p('NIST\'s Secure Software Development Framework (SSDF) Version 1.1 (SP 800-218, February 2022, authored by Murugiah Souppaya, Karen Scarfone, and Donna Dodson; superseding CSWP 13) starts with that exact diagnosis: "Few software development life cycle (SDLC) models explicitly address software security in detail, so secure software development practices usually need to be added to each SDLC model to ensure that the software being developed is well-secured." Its practices target three clear outcomes: reduce the number of vulnerabilities shipped in releases, reduce the blast radius of vulnerabilities that still slip through, and eliminate root causes across future builds.'),
      p(
        'SSDF pairs naturally with build provenance and ',
        a('software bills of materials (SBOM)', '/guides/software-bill-of-materials'),
        ', alongside our delivery-team perspective at ',
        a('OverseasGenAI\'s SSDF page', 'https://overseasgenai.com/guides/ssdf-secure-development'),
        '.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('How engineers keep lifecycle security boring and real'),
      p('Because SP 800-218 is SDLC-agnostic, teams don\'t need to abandon trunk-based CI or existing release pipelines. What changes is moving verification—reproducible dependency manifests, fail-closed auth defaults, automated static checks, and clear patch response—inside normal pull requests rather than leaving them for an external review team right before go-live.'),
      h2('Scope and boundaries'),
      p('Reference to SP 800-218 here is not a certification PrimusNeo holds, not a claim that PrimusNeo, NEOS, AZOA, or any customer program has passed a formal audit, and intentionally excludes vulnerability walkthroughs or unverified practice-table summaries from memory.'),
    ],
    scenario: 'A municipal integration hits acceptance testing with zero signed release artifacts, unpinned base images, and manual secret handoffs—turning a scheduled Monday launch into a multi-week remediation scramble because security sat outside the SDLC.',
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
    title: 'What to log when software makes a recommendation',
    seoTitle: 'What to write down when software recommends — Guides | PrimusNeo',
    crumb: 'What to write down when software recommends',
    eyebrow: 'Recommendation lineage',
    description: 'GAO Practices 1.1 and 1.2 cut through black-box AI recommendations: log the stated goal, inputs, validation check, owner, and ongoing monitoring.',
    excerpt: 'GAO Practices 1.1 and 1.2 cut through black-box AI recommendations: log the stated goal, inputs, validation check, owner, and ongoing monitoring.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: '1.1 / 1.2',
    metricLabel: 'GAO-21-519SP — explicit goals and named ownership',
    cardDescription: 'If a model recommends deferring bridge maintenance or rejecting a member application without logging inputs, evaluation checks, and a human owner, nobody can audit or fix mistakes later.',
    patternTitle: 'Log the goal, inputs, and human owner',
    patternDescription: 'GAO Practices 1.1 & 1.2 and NIST AI RMF 1.0 turn opaque model scores into verifiable recommendation records across system lifecycles.',
    lead: [
      p('An operational console surfaces a clean confidence score telling a steward which site inspection to defer next quarter. Six months later, equipment fails on the deferred node—and the post-mortem hits a wall because all the database kept was "score: 0.24, status: approved." Which sensor tables fed that score? What validation test checked whether winter noise skewed it? Which person held delegated authority to act on it?'),
      p('Both GAO-21-519SP (June 2021) and NIST AI RMF 1.0 (NIST AI 100-1, January 2023) address that audit hole directly. GAO highlights why oversight fails without explicit metadata: "inputs and operations are not always visible." Its opening practices require engineers and operators to "Define clear goals and objectives for the AI system to ensure intended outcomes are achieved" (Practice 1.1) and "Define clear roles, responsibilities, and delegation of authority for the AI system to ensure effective operations, timely corrections, and sustained oversight" (Practice 1.2), structured across governance, data, performance, and monitoring.'),
      p(
        'NIST reinforces the same cadence across its four functions—GOVERN, MAP, MEASURE, and MANAGE—noting that risk checks run continuously across the "AI system lifecycle dimensions." Read the full framework breakdown in ',
        a('AI accountability: NIST AI RMF and the GAO framework', '/guides/ai-rmf-accountability'),
        ' or the companion essay ',
        a('A recommendation still needs a name on it', '/blog/a-recommendation-still-needs-a-name'),
        '.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('Five fields every recommendation record needs'),
      p('When automated tooling proposes a decision with real operational consequences, storing the five fields implied by GAO and NIST turns an opaque nudge into an auditable trail: the stated goal the model was optimizing for, the input snapshot or query reference, the evaluation check run against ground truth, the named human who approved or overrode it, and how ongoing drift is monitored afterward.'),
      h2('Scope and boundaries'),
      p('This guide is a practical engineering logging pattern derived from public GAO and NIST documents—not legal advice, not a certification, and not an implication that PrimusNeo is a federal system or claims full agency compliance. It includes zero fabricated deployment figures, project failure percentages, or CHAOS rates.'),
    ],
    scenario: 'A field coordinator inherits an alert feed that ranks asset maintenance weekly, discovers false negatives piling up, and finds zero historical record of what objective function, feature set, or supervisor authorized the ranking rule.',
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
    title: 'Process digital twins: a flowchart is not an evaluable twin',
    seoTitle: 'Digital twins of processes and conceptual models — Guides | PrimusNeo',
    crumb: 'Digital twins of processes',
    eyebrow: 'Process digital twins',
    description: 'NIST IR 8356 explicitly covers processes and conceptual models as digital twins—if and only if you can evaluate real state and plan trust early.',
    excerpt: 'NIST IR 8356 explicitly covers processes and conceptual models as digital twins—if and only if you can evaluate real state and plan trust early.',
    publishedAt: '2026-11-10',
    lastReviewed: '2026-11-10',
    metric: 'IR 8356',
    metricLabel: 'NIST, February 2025 — processes need measurable sync too',
    cardDescription: 'Slapping "digital twin" on a static workflow diagram hides the hard systems engineering: synchronization cadence, state evaluation, and early trust boundaries across boundaries.',
    patternTitle: 'State machines require real evaluation',
    patternDescription: 'NIST IR 8356 includes processes and conceptual models alongside buildings, demanding interoperable definitions and early cybersecurity and trust.',
    lead: [
      p('At least once a month, a procurement slide deck attaches a static Swimlane flowchart, slaps "Digital Twin of Permitting Operations" in the subtitle, and treats the diagram as software architecture. A drawing you can\'t query against live queue state or replay against production logs isn\'t a twin—it\'s wall art.'),
      p('NIST IR 8356 (Security and Trust Considerations for Digital Twin Technology, February 2025, plus its 14 February 2025 summary release) is explicit that digital twins are not restricted to turbines and buildings: "A digital twin can emulate both physical things (e.g., buildings, electronics, living things), and non-physical things (e.g., processes, conceptual models)." Yet the exact same engineering bar still applies: it must provide "the capability to evaluate this entity," and "The full benefits of digital twin technology will require interoperable definitions, tools, and standards as well as early consideration of digital twin cybersecurity and trust."'),
      p(
        'If your entity is an approval pipeline, settlement graph, or permit routing state machine rather than concrete walls, the base definition in ',
        a('What makes a digital twin worth maintaining', '/guides/digital-twins'),
        ' still governs whether you actually built anything testable.',
      ),
    ],
    figures: [
    ],
    sections: [
      h2('What separates a testable process twin from a static diagram'),
      p('A real process twin needs an unambiguous sync boundary—how state events enter from the field—an explicit way to evaluate queue bottlenecks or stalled approvals against reality, and early trust controls deciding who is allowed to propose or override transitions. Whenever automated tooling acts on that state, logging the decision path belongs right alongside ',
        a('what to write down when software recommends', '/guides/recommendation-lineage'),
        '.',
      ),
      h2('Scope and boundaries'),
      p('NIST\'s warning on interoperable standards and early trust is a technical engineering standard, not a PrimusNeo roadmap guarantee. This page does not claim a live PrimusNeo process twin, does not fabricate throughput or factory numbers, does not detail exploit steps, and is not investment or customer-deployment prose.'),
    ],
    scenario: 'A proposal labels an onboarding flowchart a "process digital twin" while omitting event ingestion, lag tolerance, rollback semantics, and an evaluation check—leaving teams unable to verify whether the diagram matches production tickets.',
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
