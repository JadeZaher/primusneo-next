# Healthcare — Engagement Model

> **Vertical:** Healthcare (hospitals, health systems, payers, pharma, biotech, public health, digital health)
> **Research brief:** [`../research/healthcare.md`](../research/healthcare.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The friction-cost anchor

Healthcare is PrimusNeo's highest-friction, highest-value vertical. The integration tax alone is staggering at scale.

**EHR implementation and integration spend:**

- Epic full IDN deployment: **$50M–$1.2B all-in** (Trinity Health ~$800M, Northwell ~$1.2B, AdventHealth ~$660M)
- EHR implementation services at large IDNs: **$50M–$500M** over 3–7 years via Deloitte/Accenture/Huron/Chartis
- Redox interop fabric: floor of **$35K/month** (~$420K/yr), plus $0.50–$2.00/message — a $1.3M+ 3-year floor before volume
- HL7/FHIR custom integration at regional health systems: **$2M–$15M per major initiative**
- Clinical data platforms (Innovaccer, Health Catalyst, Arcadia): **$200K–$3M+/yr** for mid-to-large systems

**Compliance gate costs:**

- HITRUST i1 certification (minimum viable for enterprise RFPs): **~$70K**
- HITRUST r2 (expected for core platforms): **$100K–$500K** upfront; **$400K–$800K per 3-year cycle**
- HIPAA Security Rule overhaul (effective May 2026): MFA, universal PHI encryption, 24-hr breach, annual pen testing — material uplift to every vendor's compliance COGS

**Analytics and population health:**

- PMPM analytics: **$0.50–$3 PMPM** basic, **$5–$20 PMPM** population health, **$150–$200 PMPM** intensive care management
- Veeva Vault CRM (pharma): $1,500–$1,800/user/yr list; top-20 pharma **$5M–$10M+/yr**
- IQVIA data licenses: **multi-million-dollar** annual contracts for pharma analytics

**The aggregate friction window for the vertical:** An 800-bed regional system typically runs $5M–$15M over 3 years on interoperability alone (not counting the EHR license), plus $600K–$3M/yr on analytics platforms, plus $150K–$500K/yr on governance and consent. A national IDN running Epic adds $20M–$80M over 3 years on integration and data services above and beyond the EHR license itself. **PrimusNeo's capture target: 8–20% of the integration-and-analytics friction spend** (per `01-pricing-model.md §9`).

---

## 2. PrimusNeo positioning per layer in healthcare

The central positioning principle for this vertical: **"We wrap Epic, we don't replace it."** No hospital that spent $300M–$1.2B on Epic will entertain a rip-and-replace conversation. The winning motion wraps the EHR and compresses the integration tax.

### AMP — Spatial OS: hospital operations and OR/ED command center

AMP is the OR/ED command center spatial layer — the GE HealthCare Command Center Digital Twin analog without forcing rip-and-replace of Epic or Cerner. GE Command Center covers ~500 hospitals and 55K+ beds globally; AMP's differentiation is offline-first operation, Hexon portability, and native composition with NEOS governance events and Fractal clinical-intelligence signals.

Healthcare-specific AMP use cases:

- **OR command center:** Surgical scheduling, room readiness, equipment asset tracking — spatial events become first-class Fractal signals (block utilization, turnaround forecasting)
- **ED throughput management:** Patient flow visibility attached to spatial positions (bed, bay, zone); alert surfaces to charge nurse dashboard
- **Facility/campus management:** HVAC, equipment maintenance, lockout/tagout — AMP + NEOS as the governed spatial operations layer

Pricing mechanic in healthcare: **per-bed or per-facility ELA**. For a 4-hospital regional system (800 beds total), AMP Mid at $80K–$250K/yr is positioned against GE Command Center's custom-enterprise pricing with a clear "same outcome, TEFCA-native, no EHR displacement" message.

### NEOS — Governance: consent, IRB, data governance, EHDS-ready

NEOS is the consent + IRB + change-control governance layer that satisfies HIPAA, HITRUST i1/r2, and EU EHDS (Reg EU 2025/327) simultaneously. The CCO and Privacy Officer are the primary buyers here.

Healthcare-specific NEOS use cases:

- **Patient consent management:** Signed, auditable consent events per HIPAA and GDPR special-category health rules; DPIA workflow native to NEOS governance design
- **IRB governance:** Research protocol approvals, amendment tracking, multi-site coordination (hospital + university + sponsor) as nested councils
- **Data-sharing governance:** Multi-party data use agreements for TEFCA QHINs, state HIEs, payer-provider contracts — signed event log satisfies audit requirements
- **EHDS compliance:** EU EHR interoperability and security certification requirements (Jan 2026 EHR cert deadline; March 2029 priority data exchange mandate) are addressable via NEOS consent and governance schema — a direct new revenue opportunity for EU-operating health systems and pharma

NEOS pricing in healthcare: **per-covered-life** ($0.10–$1.00/covered-life/yr) for payer/population contexts; **per-council** ($1.5K–$8K/council/yr) for hospital governance; **enterprise governance ELA** for national IDNs. OmniOne is the steward and primary delivery partner for NEOS governance design using their ETHOS methodology.

### AZOA — Interoperability Fabric: TEFCA-native FHIR, the direct Redox differentiator

AZOA is the TEFCA-native FHIR fabric that compresses the Epic/Cerner integration tax. This is PrimusNeo's most direct displacement vector in healthcare — Redox charges a $35K/month floor before any volume; AZOA at Mid tier ($80K–$250K/yr) **undercuts Redox by 35–60%** at equivalent integration scope while adding QHIN-native federation and Web3 identity anchoring that Redox does not offer.

The AZOA healthcare pitch to CIOs in one sentence: **"Epic FHIR R4 certified, App Orchard listed, TEFCA QHIN-native — and we cost less than Redox at scale."**

Healthcare-specific AZOA use cases:

- **Epic FHIR R4 + Cerner FHIR connectors:** Fixed-fee $120K–$400K per EHR connector (includes HITRUST overhead per `03-services-catalog.md §2.2`); connector library reuse amortizes for subsequent customers
- **TEFCA QHIN participation:** AZOA as the Common Agreement v2.1-compliant exchange fabric; 21,086 orgs live on TEFCA as of Jan 2025 — a massive TAM for interop-as-a-service
- **Claims and SDoH data ingest:** Payer claims feeds, social determinants data pipelines — AZOA handles transport; Fractal handles population analytics
- **Pharmacy, lab, imaging integration:** Outbound/inbound HL7 v2 → FHIR transformation via AZOA connector; replaces brittle in-house ETL

Critical path milestone: **AZOA must achieve Epic FHIR R4 certification + App Orchard listing** before any large IDN sale is closeable. The 6–18 month Epic technical review is a known friction point — begin immediately.

AZOA is the steward for AZOA and leads connector development; they are the delivery partner for Epic/Cerner/Meditech/Athenahealth connector engineering.

### Fractal Engine — Intelligence: population health, RWE, payer analytics, pharma

Fractal is the population health + RWE + operational analytics layer that doesn't require ripping out Innovaccer, Health Catalyst, or Arcadia. The canonical worked example is the Mid Fractal+AZOA regional health system engagement documented in `layers/fractal-engine.md §7.1` — reproduced and extended in §3 below.

Healthcare-specific Fractal use cases:

- **Population health / value-based care:** Risk stratification, gap-in-care identification, utilization analytics — PMPM-priced for payer and VBC contexts
- **Real-world evidence (RWE) for pharma/biotech:** Retrospective cohort analysis, comparative effectiveness, safety signal detection using Escherbridge's public corpus + customer EHR data. Fractal's per-research-query mechanic ($5–$500/query) is appropriate for pharma buyers who need episodic deep analytics rather than always-on population monitoring
- **OR/ED operational intelligence:** Fractal attached to AMP spatial events — block utilization forecasting, ED throughput prediction, workforce demand signals
- **Payer analytics:** Fraud, waste, and abuse detection; member risk scoring; network adequacy analytics at $0.50–$8 PMPM (well below the $15–$200 PMPM industry range)

**EU MDR consideration:** If Fractal outputs constitute clinical decision support (Class IIa/IIb), EU MDR conformity assessment applies — $20K–$80K per high-risk system, scoped into the engagement deliverable. Position Fractal outputs as **decision-support**, not autonomous clinical action, to maintain Class I/II SaMD pathway where possible.

Escherbridge is the steward and primary delivery partner for Fractal ML engineering and RWE model development; their specialty in population health and operational telemetry makes healthcare one of their highest-density vertical use cases.

---

## 3. Engagement tiers — Small / Mid / Large

### Small: Community Hospital (50–200 beds)

**Profile:** Critical access hospital or community hospital on Meditech Expanse or Cerner; limited IT staff; TEFCA adoption early but driven by state HIE mandates; analytics budget $200K–$600K/yr.

**Recommended bundle:** AZOA Small + Fractal Small + NEOS Small (Triad)

**Worked quote:**

```
AZOA Small:      $40K/yr   (TEFCA + state HIE + 2 external feeds, 5 integrations)
Fractal Small:  $45K/yr   (departmental utilization analytics, 3 data sources, <1TB)
NEOS Small:     $10K/yr   (consent management, 1 council, <50 clinical governance members)
                ──────
Subtotal:       $95K/yr
Triad -18%:     $78K/yr
Y1 services     (~1.8x blend, integration-heavy): $140K
                  (AZOA: Meditech FHIR $120K + state HIE $60K — discounted as 2-connector bundle)
                  (Fractal: ontology + dashboard $50K; NEOS: governance design $30K)
Y1 upkeep       (Gold SLA, healthcare default, 25%): $20K (starts Y2)
Infra           (HITRUST-compliant cloud surcharge applies): $18K–$30K/yr
                ──────
Y1 TOTAL:       ~$240K–$255K
3-yr TCO:       ~$550K–$650K
```

**Friction-cost anchor:** Redox floor alone is $420K/yr; community hospital state HIE integration historically $500K–$2M one-time. Meditech/Cerner analytics supplemented with a standalone tool runs $200K–$600K/yr. Combined 3-yr friction: $1.5M–$3M.

**Capture rate:** $650K ÷ $2.25M midpoint = **~29%** — high but defensible because AZOA is genuinely displacing Redox and the standalone analytics spend, not merely layering on.

---

### Mid: Regional System (200–2,000 beds) — Canonical Example

**Profile:** 4-hospital regional system, ~800 beds, 200K-life Medicare Advantage payer arm. On Epic at lead hospital, Cerner at acquired hospital. CDO has a population health mandate; CIO wants to reduce the Redox bill and close TEFCA gaps; CCO is watching the May 2026 HIPAA Security Rule overhaul.

This is the canonical example from `layers/fractal-engine.md §7.1`, extended to the full-stack quote:

**Recommended bundle:** Fractal Mid + AZOA Mid + NEOS Mid (Triad, with AMP Mid as Y2 upsell for OR command center)

**Worked quote:**

```
Fractal Mid:    $264K/yr  (PMPM mechanic: $1.10 PMPM × 200K MA lives; 12 data sources, 8TB)
AZOA Mid:        $140K/yr  (10 integrations: Epic FHIR + Cerner FHIR + 3 claims + 2 SDoH + 3 internal)
NEOS Mid:       $55K/yr   (consent management + IRB councils + data-sharing governance; 6 councils)
                ──────
Subtotal:       $459K/yr
Triad -18%:     $376K/yr
Y1 services     (~1.6x blend): $600K
                  (Epic FHIR connector $200K, Cerner FHIR $180K,
                   ontology + population health models $100K,
                   consent governance design OmniOne $70K, dashboards $50K)
Y1 upkeep       (Gold SLA, 25%): $94K (starts Y2)
Infra           (HITRUST-compliant cloud, multi-AZ): $80K–$180K/yr
                ──────
Y1 TOTAL:       ~$1.1M–$1.2M
3-yr TCO:       ~$2.5M–$2.9M
```

**Friction-cost anchor:** Per the research brief, interop fabric at this scale runs $5M–$15M over 3 years (Redox at $35K/mo alone is $1.26M over 3 years, before volume). Innovaccer/Arcadia population health platform $600K–$3M/yr. Combined Y1 displacement opportunity: $1.5M–$3M/yr. 3-yr friction: $4.5M–$9M.

**Capture rate:** $376K ÷ $2.2M midpoint (Y1 friction) = **~17% value share** — defensible inside the 8–20% healthcare capture band per `01-pricing-model.md §9`.

**Y2 expansion path:** Add AMP Mid ($150K/yr) for OR command center — the spatial event signal enhances Fractal's block utilization forecasting. Full-stack 3-yr TCO rises to ~$3.8M–$4.5M, still well inside the $8M–$25M Mid-tier band.

---

### Large: National IDN, AMC, or Top-20 Pharma

**Profile:** 40-hospital IDN on Epic (full Cosmos data-sharing participant) OR top-20 pharma with enterprise RWE program. IT capital committee approval required. Decision cycle 12–18 months. SI partners (Deloitte Health, Accenture Health, Optum Advisory) actively involved.

**Recommended bundle:** Full Stack (AMP Large + NEOS Large + AZOA Large + Fractal Large)

**Worked quote (IDN scenario):**

```
AMP Large:      $600K/yr  (25 hospitals, OR command center + ED spatial, ~$24K/facility)
NEOS Large:     $280K/yr  (enterprise consent + IRB + data governance, EHDS-ready)
AZOA Large:      $750K/yr  (50+ integrations: Epic ecosystem, 3 Cerner sites, claims, SDoH,
                            TEFCA QHIN participation, pharmacy, lab, imaging)
Fractal Large:  $900K/yr  (20+ data sources, cross-org population health + RWE, >20TB;
                            PMPM mechanic: $0.75 PMPM × 1.2M attributed lives)
                ──────
Subtotal:       $2.53M/yr
Full-Stack -25%: $1.9M/yr
Y1 services     (~1.8x blend): $3.4M
                  (Epic Cosmos/FHIR primary $300K, 3 Cerner sites $400K,
                   HITRUST-scope connector audit $100K, AZOA federation engine $500K,
                   AMP spatial build-out across 25 sites Lattice SKU $1.5M range,
                   Fractal RWE model training + population models $600K,
                   NEOS consent + IRB governance design OmniOne $200K)
Y1 upkeep       (Platinum SLA, custom): $560K (starts Y2)
Infra           (multi-region, HITRUST-compliant, dedicated K8s): $350K–$700K/yr
                ──────
Y1 TOTAL:       ~$6.2M–$6.6M
3-yr TCO:       ~$13M–$16M
```

**Friction-cost anchor:** Epic integration tax at large IDN = $20M–$80M over 3 years (services, connectors, governance overhead). HITRUST r2 at $400K–$800K per 3-year cycle. Innovaccer/Health Catalyst large-system contracts at $2M+/yr. Redox at scale for 50+ integrations: $3M–$6M over 3 years. Combined 3-yr friction: $25M–$90M.

**Capture rate:** $1.9M/yr ÷ $40M midpoint friction/yr implied = **~5% value share** at floor — defensible, with upside as Epic FHIR cert eliminates incremental connector costs for the customer and PMPM scales with lives attributed.

**Top-20 pharma variant (RWE focus):** Replace AMP with a Fractal Large + AZOA Large + NEOS Mid Triad. Fractal at $1.2M/yr (per-research-query mechanic for RWE; 20+ data sources including EHR network, claims, registry, genomics). 3-yr TCO $8M–$14M vs IQVIA multi-million-dollar annual licenses + Datavant/Aetion RWE SaaS. Capture rate 15–20% of the IQVIA displacement opportunity.

---

## 4. Industry-specific procurement signals

### Buyer personas and co-buy dynamics

**Hospital/Health System:**

- **CIO:** Primary economic buyer. Priorities: vendor consolidation (fewer point solutions), integration cost reduction, Epic rationalization, HITRUST compliance gate management. Will not move without CCO sign-off on HIPAA posture.
- **CMIO:** Clinical safety veto. Any system that touches clinical workflow requires CMIO endorsement. Position PrimusNeo (especially AMP + Fractal) as **decision-support**, not autonomous clinical action. Pursue Class I/II SaMD pathway proactively.
- **CDO:** Data strategy sponsor. Population health mandate drives Fractal + AZOA engagement. AI governance concerns require documented NEOS governance design.
- **CCO / Chief Privacy Officer:** HIPAA and HITRUST gating. Will not approve a demo until BAA scope, de-identification methodology, and subprocessor chain are documented. PHI flow documentation must precede all technical conversations.

**Payer:**

- CIO + Chief Actuary + VP Population Health. PMPM mechanic aligns naturally with their operating model. VBC and risk-adjustment analytics are primary value drivers.

**Pharma / Biotech:**

- VP Data Science, Head of Real-World Evidence, CTO. Budget owners are often outside IT — closer to medical affairs or R&D. Per-research-query pricing resonates; IQVIA displacement is the anchor conversation. IRB and DPIA governance via NEOS is a secondary pitch that accelerates to primary in EU-operating pharma (EHDS + GDPR Article 9 special-category health data).

### Procurement mechanics

- **Capital committee:** Any IT commitment above $1M requires board or capital committee approval. Build the CFO narrative — friction-cost math, 3-year TCO comparison against Redox + Innovaccer + HITRUST standalone.
- **Decision cycle:** 6–18 months. EHR replacement cycles: 5–10 years (do not try to enter on EHR displacement). Analytics and interop refresh cycles: 3–5 years — these are the windows PrimusNeo enters.
- **Budget timing:** Hospital fiscal years often run July–June. IT capital budgets are built July–September. **Q3–Q4 (Jan–June) is peak signing** — deals funded in the prior budget cycle close in Q1–Q2.
- **RFP process:** 68% of providers manage procurement manually (2024 HIMSS). RFPs run 6–12 months from issuance to award. Evaluation committees score: technical fit 30–35%, regulatory compliance pass/fail gate, total cost of ownership 25–30%. HITRUST cert attachment is frequently a submission prerequisite — not evaluation criteria but a gate.

---

## 5. Rejection-risk mitigations

**Risk: Patient safety objection (CMIO/patient safety officer)**

Position all Fractal analytics and AMP spatial alerts as **decision-support tools for clinicians**, not autonomous decision-makers. Pursue **Class I or Class II SaMD pathway** under FDA guidance early in the engagement. Produce a software as a medical device classification summary before any CMIO technical demo. Do not wait for the objection — preempt it in the discovery conversation.

**Risk: HIPAA fear (CCO/Privacy Officer default-reject)**

Before any technical demo: (1) deliver a written BAA scope document identifying every PHI touch point; (2) produce de-identification methodology documentation (Safe Harbor or Expert Determination per 45 CFR §164.514); (3) map the complete subprocessor chain including Escherbridge (Fractal), OmniOne (NEOS governance), AZOA (AZOA connectors), and cloud infrastructure providers. Privacy officers who receive this proactively become advocates; those who discover gaps in discovery become blockers.

**Risk: "Rip and replace" resistance**

The standard hospital objection: "We spent $300M on Epic. We're not changing it." Response: "We wrap Epic, we don't replace it. AMP adds the OR command center intelligence layer Epic doesn't offer. AZOA compresses your integration spend by 35–60% vs Redox while remaining Epic FHIR R4 certified and App Orchard listed. Fractal adds population health analytics that Epic Cosmos does not provide for your MA payer arm." Every message must reinforce the augmentation framing.

**Risk: Epic/Cerner integration lock-in**

Epic's proprietary API surface (MyChart, Hyperdrive, App Orchard) creates real friction. **Epic FHIR R4 certification + App Orchard listing for AZOA is a prerequisite for any large IDN sale** — not a differentiator, a requirement. The 6–18 month Epic technical review must begin immediately as a central PrimusNeo investment, not a per-engagement cost. Until App Orchard listing is achieved, large IDN sales require a lighthouse exception path (direct CIO sponsor, waived App Orchard requirement during pilot).

**Risk: Procurement cycle mismatch (startup credibility gap)**

12–18 month RFP cycles disadvantage early-stage vendors. Lack of healthcare segment references is a hard rejection criterion. The **lighthouse program** — securing 2–3 segment references (1 community hospital, 1 regional system, 1 pharma or payer) — is the prerequisite for substantive RFP participation. Tie Town serves as the reference architecture proof point but does not substitute for healthcare-specific references. Prioritize lighthouse deals above contract size optimization in the first 18 months.

---

## 6. Regulatory + compliance considerations

### HIPAA Security Rule (effective May 2026)

The overhaul mandates: MFA for all PHI access, universal PHI encryption at rest and in transit, 24-hour breach notification to HHS (down from 60 days for major breaches), and annual penetration testing. This is not optional and affects every PrimusNeo layer that touches PHI. **AZOA connectors carrying PHI must comply by May 2026; AMP scenes with patient location data must comply; Fractal models trained on EHR data must comply.** Document the compliance posture per layer in every BAA and customer-facing technical spec.

### HITRUST CSF

**81% of hospitals and 83% of payers require HITRUST certification** from technology vendors before RFP submission. **HITRUST i1 (~$70K) is the non-negotiable minimum** for any substantive healthcare RFP participation. HITRUST r2 ($100K–$500K, 12–15 month timeline; $400K–$800K per 3-year cycle) is expected for core platforms at large IDNs and payers. **PrimusNeo must fund HITRUST i1 as a central investment — not a per-engagement line item.** Until i1 is achieved, the healthcare pipeline is restricted to pilot-stage conversations that do not require RFP submission.

### ONC TEFCA / QHIN

Common Agreement v2.1 went into effect January 2025; 21,086 organizations are live. QHIN designation takes approximately 12 months. AZOA as TEFCA-native FHIR fabric is a **direct differentiator vs Redox** (which is not QHIN-native) and vs Health Gorilla (QHIN participant but not a full interop fabric). Pursue QHIN designation for AZOA as a network-level investment.

### EU EHDS (Reg EU 2025/327)

In force March 2025; general application March 2027. EHR vendors must certify for interoperability and security by **January 2026**. Priority health data exchange (patient summaries, ePrescriptions, lab results, medical images, hospital discharge reports, prescriptions) mandatory EU-wide by **March 2029**. **NEOS consent and governance schema is directly revenue-generative for EU-operating health systems, pharma companies, and biotech** — DPIA workflow, cross-border data-sharing governance, and patient consent management are all addressable EHDS compliance requirements via NEOS.

### EU MDR

If Fractal Engine outputs constitute clinical decision support (Class IIa/IIb SaMD under EU MDR), conformity assessment applies: **$20K–$80K per high-risk system**. Bundle into the engagement deliverable as a scoped item. Position Fractal as decision-support (not autonomous clinical action) where possible to maintain Class I pathway and minimize MDR overhead.

### FDA SaMD (US)

Fractal analytics that inform clinical treatment decisions are subject to FDA digital health guidance. Class I and Class II SaMD (low-to-moderate risk decision support) require classification documentation and potentially a 510(k) or De Novo pathway depending on intended use. Prepare the SaMD classification summary early — before the first CMIO technical demo.

---

## 7. Steward + service partner notes

### Escherbridge — Fractal Engine steward (RWE and population health specialty)

Escherbridge is the primary delivery partner for all Fractal RWE and population health model development. Their public corpus provides the pretrained baseline for health system deployments; customer EHR + claims + SDoH data fine-tunes the models under the per-engagement IP schedule (customer owns blended weights; Escherbridge retains public-corpus-derived components). Escherbridge earns **18% of Fractal Engine line-item license revenue** per the steward royalty schedule. Healthcare is one of their highest-density use cases — route all Fractal healthcare engineering and model-training SOWs through Escherbridge.

### OmniOne — NEOS steward (consent and IRB governance design)

OmniOne leads all NEOS governance design using their ETHOS methodology. Healthcare consent management, IRB governance, and EHDS-compliance data-sharing governance are high-value applications of NEOS — OmniOne's governance design workshops ($35K–$60K per engagement) are the entry point for NEOS in healthcare. OmniOne earns **18% of NEOS line-item license revenue**. For EU pharma and health systems navigating EHDS, OmniOne's DPIA and consent architecture capability is a standalone sellable service that pulls Fractal and AZOA into the engagement.

### AZOA — AZOA steward (Epic/Cerner/HIE connector engineering)

AZOA leads connector development for Epic FHIR, Cerner FHIR, Meditech, Athenahealth, and state HIE endpoints. Their connector engineering is the delivery capacity for AZOA healthcare integrations ($120K–$400K per EHR connector). AZOA earns **15% of AZOA line-item license revenue** and captures services revenue directly when they deliver connector buildouts on subcontract. The Epic App Orchard certification work must be led by AZOA with PrimusNeo investment backing.

### PLAN Systems — AMP steward (OR command center and ED spatial)

PLAN Systems delivers the AMP spatial environment for hospital operations. The OR command center and ED throughput spatial builds are their specialty; sensor/OT integration for patient flow and equipment tracking maps to their existing capability. PLAN earns **15% of AMP line-item license revenue**. Tie Town serves as the reference architecture for offline-first spatial operations — relevant for rural critical access hospitals where connectivity is unreliable.

### SI channel — delivery at scale

The healthcare SI channel commands premium day rates: Deloitte Health / Accenture Health at $4,000–$8,000/day (Principal/Director); EY Health / Optum Advisory at $3,000–$6,000/day; Chartis / Huron at $3,500–$7,000/day. Epic implementation at large IDNs runs $50M–$500M in services spend. PrimusNeo engages SI channel for: (1) large IDN deployments where SI project management is buyer-required; (2) pharma RWE programs where a Big-4 advisory relationship already exists; (3) change management at scale where Chartis/Huron clinical ops credibility is needed. **SI channel deals must be structured to preserve PrimusNeo's services margin — SI markup on PrimusNeo services is typically 40–80%; structure as a reseller or co-prime model with PrimusNeo retaining direct license relationship.**

### Tie Town reference

Tie Town [TX] provides the reference architecture proof point for the full stack in an offline-first, privacy-preserving, TEFCA-capable deployment context. While not a hospital deployment, Tie Town demonstrates the stack's composability for prospects who require a live reference before advancing an RFP. Until healthcare-specific lighthouse references exist, Tie Town is the fallback reference for proof-of-concept conversations.

### HITRUST i1 — central investment prerequisite

HITRUST i1 certification (~$70K, recurring 3-year cycle) is a central PrimusNeo investment that unlocks the healthcare pipeline. It is not a per-engagement cost and should not be billed to any customer. It is the price of admission to substantive healthcare RFPs for 81% of hospital buyers and 83% of payer buyers. Begin immediately. Do not pursue large healthcare RFPs without it.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Healthcare engagement model |
