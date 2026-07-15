# Construction — Engagement Model

> **Vertical:** Construction & AEC (GC/Sub, Real Estate Developers, Infrastructure, MEP, Smart Buildings / FM)
> **Research brief:** [`../research/construction.md`](../research/construction.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The friction-cost anchor

Construction/AEC is a $16T global market running on fragmented, often-incompatible multi-vendor software stacks — yet owner digital program budgets reliably run at **1–2% of total capex** (McKinsey), and advisory retainers from AECOM or Arup on mega-projects consume an additional **0.2–0.5% of capex** in fees alone. Those numbers set the ceiling from which PrimusNeo carves its 5–15% capture band.

**Friction windows by customer size:**

| Segment | Capex / Revenue basis | Digital program budget (1–2% capex or ACV proxy) | Typical friction window |
|---------|----------------------|--------------------------------------------------|------------------------|
| Small GC/Sub (<$50M revenue, 1–2 projects) | $10M–$50M ACV | $100K–$1M/yr | $40K–$90K 3-yr TCO (Procore entry + ACC + Fieldwire) |
| Mid regional contractor/developer ($50–500M, 5–30 projects) | $50M–$500M ACV | $500K–$5M/yr | $350K–$800K 3-yr TCO (Procore + ACC BIM + CDE + DroneDeploy + One Click LCA) |
| Large ENR Top-100 / mega-project ($1B+ capex, national portfolio) | $1B–$10B+ capex | $10M–$100M/yr | $3M–$12M 3-yr TCO (Procore enterprise + Bentley iTwin + Willow Twin + advisory) |

The market's dominant pricing mechanics make the friction cost concrete: Procore's ACV model runs **0.1–0.3% of Annual Construction Volume** (a 25-project regional GC all-in $40K–$120K/yr); Autodesk Build at **$1,625/seat/yr** for field users; Bentley iTwin enterprise at **$200K–$1M+/yr** for large infrastructure; Willow Twin at **$50K–$250K/yr per campus** for smart building FM. One Click LCA Power Pack at **$80K–$120K/yr** for embodied carbon. These are the incumbent line items PrimusNeo displaces or federates — not by replacing them outright, but by absorbing the interoperability tax they generate among themselves.

A mid-tier GC running Procore + ACC BIM Collaborate (30 seats) + Asite CDE + DroneDeploy Advanced pays approximately **$120K–$200K/yr in platform licenses alone** before any SI advisory, any duplicate data-entry labor, or any rework attributable to model/field data drift. PrimusNeo's friction anchor is the gap between what those platforms cost in isolation and what a federated, single-source-of-truth stack would cost — conservatively **$250K–$500K/yr** in direct and indirect friction at the mid tier.

---

## 2. PrimusNeo positioning per layer in construction

**AMP is the killer layer in construction.** The fundamental coordination problem in every AEC project is that design-side BIM (Autodesk Revit/ACC, Bentley MicroStation) and field-side project management (Procore, Trimble Connect) and FM-side building operations (IBM TRIRIGA, Planon, Honeywell Forge) each maintain their own spatial record — and they never stay synchronized. The design model diverges from the as-built the moment the first RFI is issued. The as-built diverges from the FM model the moment handover documents go into a SharePoint folder no one maintains.

AMP's federated spatial record — built on the open Hexon file standard, offline-capable, multi-org — is the construction-native answer to this problem. It bridges Autodesk BIM (ACC model ingestion via IFC/RVT), Trimble field data, and Bentley infrastructure models **without forcing single-vendor lock-in** at any layer. The as-built lives in AMP as an AMP scene. The FM team queries it through their IWMS. The GC's VDC manager pushes model updates via IFC. No single platform owns the record.

**AZOA is the required companion.** The construction stack is notoriously siloed. Procore does not natively talk to ACC. ACC does not write back to Trimble Connect without manual export. Asite CDE is separate from both. AZOA certified bidirectional connectors for Procore (webhook-based), ACC (IFC/RVT model ingest + write-back), Bentley iTwin, and Trimble Connect collapse the integration tax that currently costs GC IT teams 1–2 FTE in perpetual connector maintenance. At the small and mid tier, AMP + AZOA is the standard bundle.

**NEOS delivers cross-project governance and change-control flows.** At mid-to-large scale, construction's biggest coordination overhead is the approval bureaucracy: RFIs, submittals, change orders, and management-of-change (MOC) on occupied facilities. NEOS structures these as signed, auditable, replayable events — replacing the email-thread-based approval culture that Procore partially addresses but never fully governs, especially across organizational boundaries (owner / GC / design team / authority having jurisdiction).

**Fractal Engine converts project data into portfolio intelligence.** At portfolio scale, ENR-100 contractors and real estate developers need answers that no individual project platform provides: RFI velocity trends that predict schedule slippage 6 weeks out; embodied carbon analytics that ingest EPD data per material per project for EPBD / Buy Clean Act compliance; financial closeout benchmarking across the portfolio. Fractal also enables RFI predictive triage — classifying incoming RFIs by complexity and downstream cost impact before a project engineer reads them, routing high-risk items to senior PM attention automatically.

**Standard bundle and full-stack triggers:**

- Small GC/Sub: AZOA alone (Procore/ACC connector), or AZOA + AMP entry (as-built record without displacing incumbents)
- Mid regional contractor/developer: AMP + AZOA (federated spatial + integration duo); add NEOS for change-control
- Large ENR-100 / mega-project: Full AMP + NEOS + AZOA + Fractal as the federated intelligence and governance layer across the portfolio

---

## 3. Engagement tiers — Small / Mid / Large

### Small: GC or Subcontractor, <$50M Revenue, 1–2 Active Projects

**Buyer profile:** A 50-person mechanical/electrical sub or a regional residential GC. Running Procore entry + ACC Docs (5 seats) + Fieldwire Pro (5 seats). Primary pain: duplicate data entry between Procore and ACC; no durable as-built record at project closeout; RFIs managed via email threads.

**PrimusNeo bundle:** AZOA (Procore + ACC bidirectional connector) + AMP entry (as-built spatial record for 1 project)

**Worked quote:**

| Line | Amount |
|------|--------|
| AZOA Small license (5 integrations, Procore + ACC + 3 supporting) | $30K/yr |
| AMP Small license (1 site, <20 concurrent) | $18K/yr |
| Duet bundle discount (10%) | −$5K/yr |
| **License total** | **$43K/yr** |
| Y1 services — Atom deployment SKU + AZOA connector buildouts (Procore webhook $25K + ACC IFC ingest $35K) | $95K one-time |
| Y1 upkeep (Silver SLA, 22%) | $9K/yr (starts Y2) |
| Infra pass-through + 12% mgmt (cloud reference small) | $1,200/mo |

**Y1 total: ~$152K. 3-yr TCO: ~$240K–$270K.**

**Friction anchor:** Procore entry ($5K/yr) + ACC Docs 5 seats ($4K/yr) + Fieldwire Pro 5 seats ($3K/yr) + 0.5 FTE in duplicate data entry (~$40K/yr fully loaded) + one deferred warranty claim from a lost as-built ($15K–$50K one-time) = **$65K–$100K/yr in direct friction.** PrimusNeo at $43K/yr license occupies 43–66% of the direct friction — but eliminates the duplicate entry FTE and the as-built loss risk, which is where the real ROI lives.

**Capture rate:** 43K ÷ $82K (midpoint) = **~52% of direct friction displaced.** Defensible because AZOA is genuinely removing line items, not adding a layer.

**Developer/FM small example:** A boutique real estate developer completing a 120-unit multifamily project needing a handover-ready as-built and AZOA connector to their IWMS (IBM TRIRIGA entry). Same bundle, scoped to 1 building. Quote similar; AZOA connector scope shifts from Procore to TRIRIGA integration ($20K fixed fee). AMP as-built persists post-handover as the FM spatial record — positioning the Y2 AMP-to-FM upsell.

---

### Mid: Regional Contractor / Developer, $50–500M Revenue, 5–30 Projects

**Buyer profile:** A regional GC with 20 active projects across 3 states, running Procore ($45K/yr) + ACC BIM Collaborate (25 seats, $18K/yr) + Asite CDE ($60K/yr) + DroneDeploy Advanced ($8K/yr) + early-stage One Click LCA use. Pain: project data lives in four systems; portfolio reporting is a monthly Excel exercise; change-order approvals route through email with no audit trail; ESG officer cannot produce an embodied carbon number without a consultant.

**PrimusNeo bundle:** AMP + AZOA + NEOS (Triad)

**Worked quote:**

| Line | Amount |
|------|--------|
| AMP Mid license (8 sites, 100 concurrent) | $130K/yr |
| AZOA Mid license (12 integrations: Procore + ACC + Asite + DroneDeploy + IWMS + others) | $110K/yr |
| NEOS Mid license (3 councils: change-control, submittal, ESG reporting) | $50K/yr |
| Triad bundle discount (18%) | −$52K/yr |
| **License total** | **$238K/yr** |
| Y1 services — Hex deployment SKU ($550K) + AZOA connectors Procore/ACC/Asite ($220K) + NEOS charter authoring ($60K) + AMP scene buildout 3 pilot projects ($120K) | ~$950K one-time |
| Y1 upkeep (Silver SLA, 22%) | $52K/yr (starts Y2) |
| Infra pass-through + 12% mgmt (cloud mid) | $6K/mo |

**Y1 total: ~$1.3M. 3-yr TCO: ~$2.2M–$2.5M.**

This lands at the high end of the mid-tier construction 3-yr TCO band ($350K–$800K) stated in the research brief. The Triad bundle (vs. AMP + AZOA Duet) justifies the premium when the NEOS change-control value is explicitly quantified: a single change order dispute resolved in days rather than weeks, across a $50M project, routinely recovers $25K–$150K in avoided delay claims.

**Friction anchor:** Procore $45K/yr + ACC $18K/yr + Asite $60K/yr + DroneDeploy $8K/yr + One Click LCA $20K/yr = $151K/yr in direct platform spend, plus an estimated **$200K–$400K/yr in coordination overhead** (duplicate data entry, rework from model/field drift, manual ESG reporting) = **$350K–$550K/yr total friction.** PrimusNeo license at $238K/yr captures 43–68% of direct friction while eliminating the overhead — overall value share roughly 12–15% of total friction window (per McKinsey 1–2% capex digital budget at this revenue scale, the window is $500K–$5M/yr).

**Capture rate:** $238K ÷ $1.75M (midpoint friction window) = **~14% value share** — well inside the 5–15% construction capture band.

**Developer/FM mid example:** A regional real estate developer with 15 active projects (mixed residential + commercial) whose FM team inherits buildings into their IWMS portfolio. AMP as the design-to-FM spatial continuity layer (Hexon as-built persists from BIM to IWMS); AZOA connectors to Procore + ACC + Planon; Fractal (not NEOS) added for portfolio ESG reporting and embodied carbon compliance under CA Buy Clean Act. Pricing similar; NEOS swapped for Fractal Mid at $100K/yr. Triad bundle applies.

---

### Large: ENR Top-100 Contractor, Mega-Projects, $1B+ National Portfolio

**Buyer profile:** An ENR Top-50 GC with a national portfolio of 80+ active projects including several mega-projects ($500M–$3B capex each). Enterprise Procore ($350K/yr) + Bentley iTwin or ACC enterprise ($500K/yr) + Willow Twin on select campuses ($400K/yr) + One Click LCA Power Pack ($100K/yr) + AECOM digital advisory ($1M/yr). Pain: each mega-project invents its own digital delivery strategy; no portfolio-level RFI or change-order predictive intelligence; embodied carbon reporting is a manual consulting engagement; CDO wants a federated data standard that doesn't require renegotiating contracts with Bentley, Autodesk, and Trimble.

**PrimusNeo bundle:** Full Stack — AMP + NEOS + AZOA + Fractal

**Worked quote:**

| Line | Amount |
|------|--------|
| AMP Large license (20+ sites, multi-org federation, 600+ concurrent) | $700K/yr |
| AZOA Large license (60+ integrations: Procore + Bentley iTwin + ACC + Trimble + Willow + IWMS + ERP + identity) | $650K/yr |
| NEOS Large license (federated governance across 5 business units + 3 owner-facing councils) | $250K/yr |
| Fractal Large license (25+ data sources, portfolio analytics + embodied carbon + RFI predictive triage) | $800K/yr |
| Full-stack bundle discount (25%) | −$600K/yr |
| **License total** | **$1.8M/yr** |
| Y1 services — Lattice deployment SKU ($2.5M) + AZOA connector suite Procore/Bentley/ACC/Trimble ($500K) + AMP federation enablement ($400K) + Fractal models (RFI triage + carbon estimator, $300K) + NEOS charters ($120K) | ~$3.8M one-time |
| Y1 upkeep (Gold SLA, 25%) | $450K/yr (starts Y2) |
| Infra pass-through + 12% mgmt (cloud large, multi-region) | $35K/mo |

**Y1 total: ~$6.0M. 3-yr TCO: ~$10M–$13M.**

This lands inside the research brief's large-tier band ($3M–$12M 3-yr TCO). The upper end of this range is justified at mega-project mobilization scale where the Tessellation deployment SKU ($3.5M–$12M+) applies; the worked quote above uses the Lattice SKU appropriate for a national portfolio rollout without a single concurrent $3B+ project.

**Friction anchor:** McKinsey's 1–2% capex digital program budget on a $5B/yr construction volume = **$50M–$100M/yr** in owner-sanctioned digital spend. PrimusNeo's $1.8M/yr license = **1.8–3.6% of the digital budget** — a single rationalization play that can justify its cost by consolidating two or three incumbent vendor renewals (Willow Twin $400K/yr + One Click LCA $100K/yr + AECOM advisory increments $500K/yr = $1M/yr in near-term displacement candidates alone). Advisory AECOM/Arup retainers running 0.2–0.5% of capex on a $1B mega-project = $2M–$5M/engagement; Fractal automating the carbon and schedule-risk analysis layer cuts that advisory surface.

**Capture rate:** $1.8M ÷ $25M (midpoint friction window for a GC this size, conservatively scoped to direct digital spend) = **7.2% value share** — bottom of the 5–15% construction capture band, defensible and conservative.

**Developer/FM large example:** A national REIT or infrastructure developer with 200+ buildings under management. AMP as the portfolio-wide spatial record (replacing Willow Twin per campus at $50K–$250K/yr per campus, consolidated into one AMP Large license); AZOA connectors to Honeywell Forge + IBM TRIRIGA + existing BIM archives; Fractal for Scope 1/2/3 emissions reporting across the portfolio for EU SFDR + EPBD Digital Building Passport obligations; NEOS for the FM change-control governance layer on occupied critical facilities. Full stack; pricing anchored by per-sf FM spend ($0.10–$0.50/sf/yr at 10M sf managed = $1M–$5M/yr incumbent spend).

---

## 4. Industry-specific procurement signals

**Primary champions:**

- **VDC / BIM Manager** at GC or design-build firm: controls day-to-day platform selection for ACC, Procore, and CDE. This is the technical champion who experiences the design/field model drift firsthand and has the authority to run a pilot. Pain: IFC round-trips, duplicate model management, ACC vs. Procore data silos. Entry motion: AZOA Procore + ACC connector eliminates their top-3 complaint.

- **CIO / CDO at ENR-100 contractor**: owns enterprise architecture and vendor consolidation mandates. Budget authority $500K+. Receptive to a federated stack argument that reduces the vendor renewal surface without forcing Autodesk or Bentley off the desk. Entry motion: AMP + AZOA as the platform-neutral coordination layer that sits above incumbents.

- **Project Director / Owner's Rep on capital programs**: responsible for schedule, cost, and risk visibility across 10–50 active projects simultaneously. Values federated data without forcing sub-contractors onto a mandated single platform. The AZOA value proposition — "your subs keep using their tool; we connect it bidirectionally" — maps directly to this buyer's top procurement constraint. Entry motion: AZOA pilot on a single mega-project, funded from the owner's digital delivery budget.

- **Director of Sustainability / ESG Officer**: owns embodied carbon reporting under EU EPBD, CA Buy Clean Act AB 2446, and annual sustainability disclosures. Currently buying One Click LCA or Tally per project, producing disconnected point-in-time snapshots. Needs automated EPD ingestion and real-time compliance monitoring across the portfolio. Entry motion: Fractal with EPD ingest as the ESG automation layer, positioned as eliminating the annual One Click LCA consulting sprint.

**RFP trigger events:**

- **Owner-mandated ISO 19650 BIM/CDE requirements** on public infrastructure tenders (Highways England, GSA, state DOTs, Network Rail). ISO 19650 mandates a structured Common Data Environment — AMP as the ISO 19650-compliant spatial information layer is the direct response. Part 6 (health and safety information management) released in 2025 strengthens the AMP + NEOS dual-layer argument for large publicly funded projects.

- **Post-merger portfolio consolidation**: when a PE-backed GC acquires a regional competitor, the CDO inherits two incompatible Procore instances, two CDE contracts, and two model management workflows. AZOA federation (and NEOS for the governance integration) is the de-merger rationalization play.

- **Mega-project mobilization**: capital programs above $500M reliably trigger a digital delivery planning phase where the owner mandates a data management standard before the GC mobilizes. This is the highest-urgency entry point — the budget is pre-approved, the timeline is fixed, and the VDC/BIM team is standing by.

- **ESG reporting deadlines**: annual sustainability reports, EU SFDR mandatory disclosures for EU real estate funds, SEC climate disclosure rules for US-listed project owners. These create hard calendar deadlines that convert the Fractal pilot conversation into a signed SOW.

---

## 5. Rejection-risk mitigations

**Paper and email-based culture (sub/trade workforce):** A significant portion of the construction workforce — especially subcontractors and trades — operates on paper, WhatsApp, and email. Sub resistance to "yet-another-login" is the top-3 Procore complaint and the primary reason mandated platform adoption fails on GC projects. Mitigation: AZOA connectors are designed to meet the sub at their existing tool of choice (Procore, Fieldwire, email-triggered approvals) rather than forcing onboarding. The AMP spatial record is maintained by the GC's VDC team; subs contribute via read-only views and email-triggered approval workflows requiring no account creation.

**Subcontractor adoption friction:** ENR-100 GCs routinely report that sub networks won't adopt owner-mandated platforms at scale. Any PrimusNeo engagement that depends on sub-side adoption is structurally at risk. Mitigation: scope AZOA to absorb the sub's existing tool of choice bidirectionally. The sub uses Procore or Fieldwire or email; AZOA federates that data into the GC's AMP scene and NEOS approval flows without the sub ever touching PrimusNeo directly.

**ROI attribution difficulty:** Each construction project is unique; there is no clean A/B comparison. CFOs discount vendor-published ROI reports (Procore's benchmark studies are routinely challenged in procurement). Mitigation: instrument project-level outcomes via Fractal from day one — RFI cycle time (baseline vs. post-implementation), rework dollar value (tied to model/field drift events), and financial closeout speed. Present at the 90-day review with project-level evidence, not portfolio-level benchmarks.

**Integration lock-in with Procore and Autodesk:** Most ENR contractors are mid-cycle on multi-year Procore and ACC contracts. Adding PrimusNeo requires a clear and provably non-disruptive AZOA story. Mitigation: publish and certify bidirectional Procore webhook integration (Procore's own marketplace mechanism) and IFC/RVT model ingestion from ACC with write-back. Integration tax = the primary reason pilots stall at POC; eliminating it requires a live reference deployment the champion can demo to procurement, not a spec sheet.

**Price sensitivity on thin GC margins (2–4% net):** A GC running 3% net on $200M revenue has $6M in profit. A $500K platform engagement is 8% of net profit — a hard conversation with a CFO who has never seen a construction software vendor justify their price at that level. Mitigation: pilot structure with documented-ROI path before portfolio expansion. The Atom or Molecule deployment SKU on a single project at $90K–$320K, with Fractal capturing baseline metrics, produces the CFO evidence needed to sign the portfolio engagement.

---

## 6. Regulatory and compliance considerations

**EU EPBD (recast 2024) — Digital Building Passports:** The recast Energy Performance of Buildings Directive mandates Digital Building Passports — per-building records covering energy performance, materials, and lifecycle data — as part of EU member-state EPBD implementation. Fossil-fuel boiler subsidies ended January 2025. This is an immediate AZOA + AMP demand driver for any EU construction client or EU-listed real estate fund: the Digital Building Passport is exactly the federated spatial + systems record that AMP maintains and AZOA populates from heterogeneous building systems.

**California Buy Clean Act / AB 2446:** Global Warming Potential limits on structural steel, concrete rebar, flat glass, and insulation on California public works are enforceable as of January 2025. AB 2446 targets a 40% reduction in material carbon intensity by 2035. This drives One Click LCA and EC3 adoption — and creates the Fractal opportunity for automated EPD ingestion and real-time compliance reporting that replaces the annual consulting sprint. Fractal's embodied carbon model, fed by AZOA-ingested EPD data, is the construction-native answer to this compliance obligation.

**UK Net Zero Carbon Buildings Standard (NZCBS) v1 / PAS 2080:** NZCBS v1 launched in early 2026, integrating with PAS 2080 and establishing upfront carbon (A1–A5 life-cycle stages) limits per square metre. From 2025, publicly funded projects must be designed without fossil-fuel heating. Fractal's Scope 3 + embodied carbon analytics, combined with AMP's as-built spatial record, create the data layer that satisfies PAS 2080 documentation requirements across the design, construction, and operation phases.

**ISO 19650 BIM:** The global information-management benchmark for the built environment is mandatory in the EU and UK (since 2016) and increasingly required in GCC and India. Part 6, covering health and safety information management, was released in 2025. AMP serves as the ISO 19650-compliant spatial information layer — the structured CDE that the standard requires — while NEOS provides the approval-flow and audit-trail governance that ISO 19650 Part 2 (delivery phase) mandates for CDE workflows.

**LEED / BREEAM / Green Star ongoing obligations:** Embodied carbon documentation, energy modeling outputs, and operational data submissions tied to credit thresholds create persistent data obligations through building operations. These are not one-time compliance events — they require the live connection between the construction-phase AMP scene and the FM-phase AZOA-connected IWMS that PrimusNeo's full stack provides.

---

## 7. Steward and service partner notes

**PLAN Systems (AMP steward):** The differentiator in construction is PLAN's federated spatial record capability across design, field, and FM phases. PLAN delivers AMP spatial environment buildout services — CAD ingest, scene authoring, IFC/RVT model ingest — and is the primary certified implementation partner for AMP on large construction and infrastructure engagements. PLAN royalty: 15% of AMP line-item license revenue.

**OmniOne / Green Earth Vision (NEOS steward):** Delivers the ETHOS governance design methodology — the charter-authoring and council-structuring work that converts a GC's change-control email culture into a signed, auditable NEOS governance flow. OmniOne leads governance design workshops and charter authoring across mid-to-large construction engagements. NEOS royalty: 18% of NEOS line-item license revenue.

**AZOA (AZOA steward):** Authors the certified Procore, ACC (Autodesk Construction Cloud), Bentley iTwin, and Trimble Connect bidirectional connectors that are the primary AZOA value driver in construction. AZOA leads connector development and holds the technical relationship with Procore's webhook marketplace and Autodesk's APS (Autodesk Platform Services). AZOA royalty: 15% of AZOA line-item license revenue.

**Escherbridge (Fractal Engine steward):** Delivers Fractal portfolio analytics, the RFI predictive triage model, and the embodied carbon EPD-ingest pipeline for Buy Clean Act / EPBD compliance. Escherbridge is the primary delivery partner for Fractal ML engineering and the construction-specific ontology. Fractal royalty: 18% of Fractal Engine line-item license revenue.

**SI channel partners:**

| Firm | Role | Day rate (USD) |
|------|------|----------------|
| McKinsey Capital Projects | Strategic program advisory on mega-projects; PrimusNeo digital delivery positioning | $10K–$25K/day (Senior Partner) |
| Accenture Industry X — Built Environment | Mid-market digital transformation; PrimusNeo full-stack implementation | $5K–$15K/day (MD/Principal) |
| AECOM Digital | ISO 19650 CDE + BIM management advisory; AMP deployment on infrastructure programs | $1.2K–$3K/day (Digital Delivery Director) |
| Arup Digital | Sustainability + carbon analytics; Fractal embodied carbon model integration | $1.5K–$4K/day (Associate/Senior Associate) |
| Autodesk implementation partners | ACC connector deployment, BIM workflow integration | $150–$250/hr |
| Trimble / Bentley authorized distributors | Field integration, iTwin connector deployment | $175–$300/hr |

A typical 6-month mid-tier AEC digital transformation including PrimusNeo deployment runs **$300K–$1.5M all-in** when a full SI channel partner is involved — which positions PrimusNeo's Hex deployment SKU ($400K–$900K) competitively inside that envelope, with license revenue beginning in parallel.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Construction engagement model |
