# Energy — Engagement Model

> **Vertical:** Energy (utilities, oil & gas, renewables, grid/ISO, DERs, microgrids, carbon markets)
> **Research brief:** [`../research/energy.md`](../research/energy.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The friction-cost anchor

Energy is PrimusNeo's highest regulatory tailwind and longest sales cycle simultaneously. Four compounding friction windows define the buyer's pain and the defensible quote band.

**ADMS/DERMS software stack cost:** Full-scale Advanced Distribution Management System deployments run **$5M–$50M software-only** per investor-owned utility, before hardware and SI services (DOE ADMS Advisory). GE Vernova GridOS (ADMS + DERMS) packages for IOUs: **$8M–$20M over five-year terms**. Schneider EcoStruxure ADMS and Siemens Spectrum Power: comparable at **$6M–$15M** per IOU. This is the market PrimusNeo enters above — as interoperability and governance fabric, not as displacement.

**AVEVA PI System data historian:** At scale (1M+ tags for large refineries and grid operators), AVEVA PI System subscription + support runs **$500K–$5M/yr**. Cognite Data Fusion at supermajor scale: **$2M–$8M ARR**. AspenTech APM/Mtell entry: **$250K–$1M+/yr** for mid-size process industry. These historians are not going away; the PrimusNeo entry is to layer governance, interop, and intelligence above them.

**NERC CIP compliance burden:** CIP-015-1 (Internal Network Security Monitoring) alone carries **$13.2M/yr industry-wide** across ~1,636 registered entities (Federal Register, September 2024). CIP-013 supply-chain mandates impose structured vendor assessment and attestation workflows across every BES Cyber System. CIP-003-9, effective April 2026, extends supply-chain controls to low-impact BES assets — expanding the addressable compliance burden further. This is direct willingness-to-pay for auditable provenance: NEOS.

**Carbon + cross-border compliance overlay:** EU CSRD mandatory double-materiality disclosures began FY2024 for large EU-listed energy firms and their non-EU subsidiaries. EU CBAM definitive phase starts January 2026 — requiring certified embedded-carbon data per shipment with financial penalties for non-compliance. Article 6.4 (Paris Agreement ITMOs, finalized at COP29) demands cryptographically auditable provenance chains to prevent double-counting across Nationally Determined Contributions. These three compliance drivers are structural WTP signals for Fractal Engine + NEOS attestation.

**Aggregate friction window per engagement tier:** Small microgrid/community solar operator: $300K–$800K/yr in incumbent tooling + compliance cost. Mid municipal utility / IPP: $2M–$6M/yr. Large IOU/ISO-RTO/supermajor: $15M–$60M/yr. PrimusNeo's 5–15% capture rate against these windows is the defensible quote band.

---

## 2. PrimusNeo positioning per layer in energy

The critical positioning frame: PrimusNeo enters energy as **interoperability and governance fabric above the incumbent ADMS and PI System stacks** — not as a displacement play. Attempting to displace GE Vernova, Schneider, or AVEVA triggers the vendor-concentration objection and the OT cyber risk rejection immediately. Positioning above them as the governance, interop, and intelligence fabric sidesteps both while creating genuine additional value.

**AMP — Spatial OS (steward: PLAN Systems):** AMP's role in energy is the **plant, substation, and grid spatial scene** — the operational ground layer for gas turbine sites, offshore platforms, transmission substations, and microgrid nodes. PLAN Systems brings industrial-grade spatial scene authoring for energy assets. Where manufacturing has CAD + MES, energy has P&ID + SCADA + historian; AMP is the layer that ties them into a navigable, governed, offline-capable operational scene. Entry use cases: offshore platform digital twin for APM, substation spatial model for NERC CIP-007 change-management events, and microgrid site visualization for DER operator teams. Tie Town [TX] demonstrates the reference architecture for multi-site energy deployments.

**NEOS — Governance (steward: OmniOne):** NEOS is the **auditable governance fabric** for three energy-specific compliance domains. First, NERC CIP-013 supply-chain attestation: NEOS councils structure vendor assessment workflows and produce signed, replayable governance logs that survive a NERC audit. Second, CSRD and CBAM: NEOS provides the governance event log that underlies double-materiality ESG disclosure and embedded-carbon certification per shipment — not just a dashboard, but a signed audit trail. Third, REC and Article 6.4 ITMO provenance: NEOS + Fractal together produce the cryptographically auditable lineage chains that hourly granular REC tracking (EnergyTag) and Article 6.4 ITMOs require to prevent double-counting. OmniOne's ETHOS methodology for governance design applies directly to the multi-party council structures that cross-utility supply chains and carbon registries require.

**AZOA — Interoperability Fabric (steward: AZOA):** AZOA is the **IT/OT bridge for FERC Order 2222 and the multi-system integration fabric** that connects ADMS, SCADA, EMS, DERMS, ETRM, carbon registries, and ISO market interfaces without requiring any incumbent to be displaced. FERC Order 2222 mandates DER market participation down to 100 kW aggregated, requiring interoperable metering, telemetry, and settlement-data flows across heterogeneous utility and aggregator systems — this is AZOA's exact problem space. AZOA authors the certified DNP3, IEC 61968/70 (CIM), and ICCP connectors that utility architecture review boards require; "open APIs" without certified OT protocol connectors fail at the technical evaluation stage. Carbon registry integrations (M-RETS, PJM-EIS GATS, Article 6.4 registry APIs) are AZOA connector-class integrations. AutoGrid Flex / Uplight DERMS connector: AZOA. ETRM connectivity (Allegro/ION Group, OpenLink): AZOA.

**Fractal Engine — Intelligence (steward: Escherbridge):** Fractal is the **predictive APM, carbon MRV, and REC hourly-granularity intelligence layer**. Escherbridge's analytics depth makes Fractal the highest-value layer for energy operational telemetry: turbine degradation forecasting, transformer health scoring, renewable curtailment prediction, grid stability signal generation. For carbon markets: Fractal provides the MRV (Measurement, Reporting, Verification) intelligence layer that feeds NEOS attestation — from raw telemetry to verified tCO2e, with audit trail attached. For hourly granular RECs and Article 6.4 ITMOs, Fractal's time-series intelligence resolves the generation and consumption matching at hourly (or sub-hourly) granularity that 24/7 carbon-free energy (CFE) commitments require. Fractal also positions above Watershed ($50K–$500K/yr flat carbon SaaS) and Persefoni ($55K–$250K/yr) as the operational-intelligence layer that produces MRV data rather than simply ingesting spreadsheet exports.

---

## 3. Engagement tiers — Small / Mid / Large

### Small: single microgrid or community solar (<10 MW) — $250K–$800K over 3 years

**Profile:** Community microgrid operator, municipal solar co-op, rural electric cooperative with a DER portfolio, developer deploying a <10 MW island microgrid.

**Bundle:** AZOA Small + NEOS Small + Fractal Small (carbon MRV entry). AMP optional for microgrid with a physical site. Duet or Triad.

**Worked quote:**

| Line item | Annual | Notes |
|-----------|--------|-------|
| AZOA Small | $36K/yr | 5 integrations: SCADA, DER controller, carbon registry, ISO market API, weather |
| NEOS Small | $10K/yr | 1 council: DER operator attestation + REC provenance governance |
| Fractal Small | $40K/yr | <5 sources, carbon MRV + generation forecasting |
| Triad bundle −18% | ($16K/yr) | Net license $70K/yr |
| Y1 services (~2x AZOA-weighted blend) | $140K | Connector buildouts: SCADA DNP3, ISO API, registry |
| Y1 upkeep (Silver SLA, 22%) | $15K | Starts Y2 |
| Infra pass-through + 12% mgmt | $24K/yr | Edge node via Tie Town reference or cloud |

**Y1 total:** ~$230K | **3-yr TCO:** ~$410K–$550K

**Friction anchor:** $150K–$400K/yr in incumbent tooling (standalone SCADA dashboard, separate carbon SaaS subscription, manual REC registry submission, consultant hours for NERC CIP-003-9 compliance if grid-tied). PrimusNeo captures 15–20% of that window at Small tier.

---

### Mid: municipal utility or mid-size IPP (100–500 MW) — $2.5M–$10M over 3 years

**Profile:** Municipal electric utility (100K–500K customers), mid-size independent power producer with mixed renewable + thermal portfolio, regional co-op needing FERC Order 2222 compliance for aggregated DER dispatch.

**Bundle:** AZOA Mid + NEOS Mid + Fractal Mid + AMP Mid (substation/plant spatial). Full Stack preferred; Triad minimum.

**Worked quote:**

| Line item | Annual | Notes |
|-----------|--------|-------|
| AMP Mid | $120K/yr | 5 substation/plant sites, PLAN Systems spatial scenes |
| NEOS Mid | $55K/yr | 3 councils: CIP-013 supply-chain, REC attestation, FERC Order 2222 DER governance |
| AZOA Mid | $150K/yr | 20 integrations: ADMS, EMS, DERMS, ETRM, SCADA, DNP3 RTUs, ISO market, carbon registry, weather, AMI |
| Fractal Mid | $200K/yr | 10 sources: telemetry historian, generation data, AMI, carbon MRV, market settlement |
| Full Stack −25% | ($131K/yr) | Net license $394K/yr |
| Y1 services (~2x AZOA-weighted blend) | $788K | DNP3 connectors $200K, IEC 61968 CIM $180K, ETRM $120K, AMP substation scenes $200K, Fractal MRV models $88K |
| Y1 upkeep (Gold SLA, 25%) | $99K | Starts Y2; Gold is the regulated-industry default |
| Infra pass-through + 12% mgmt | $120K/yr | Multi-site cloud + optional Tie Town edge colo |

**Y1 total:** ~$1.3M–$1.4M | **3-yr TCO:** ~$2.8M–$3.8M

**Friction anchor:** Mid-size utility spending $1.5M–$4M/yr across ADMS SI services, AVEVA PI System subscription ($300K–$800K/yr), NERC CIP compliance overhead ($500K–$1.5M/yr at this scale), and carbon MRV software ($100K–$300K/yr). PrimusNeo captures 8–12% of the combined friction window.

---

### Large: IOU, ISO-RTO, or supermajor (1 GW+) — $18M–$80M over 3 years

**Profile:** Investor-owned utility with 1M+ customers, regional ISO/RTO managing multi-GW grid, oil and gas supermajor with global portfolio needing CSRD + CBAM compliance, large renewables developer managing 5+ GW.

**Bundle:** Full Stack (all four layers). SI channel mandatory: Black & Veatch or Accenture Resources for OT integration; McKinsey Energy Solutions or Deloitte E&R for regulatory/IRP testimony support. Deployment SKU: Tessellation or Lattice.

**Worked quote (IOU, ~$1.5B revenue, 800K customers):**

| Line item | Annual | Notes |
|-----------|--------|-------|
| AMP Large | $550K/yr | 20 substations + 2 major plants, PLAN Systems multi-site federation |
| NEOS Large | $250K/yr | CIP-013 multi-vendor attestation councils, CSRD governance log, REC Article 6.4 provenance |
| AZOA Large | $900K/yr | 60+ integrations: legacy SCADA, ADMS, EMS, DERMS, ETRM, DNP3, IEC 61968/70, ICCP, ISO market, AMI, carbon registry, workforce, ERP |
| Fractal Large | $800K/yr | 25+ sources: historian, AMI, ISO settlement, generation, carbon MRV, grid event telemetry |
| Full Stack −25% | ($625K/yr) | Net license $1.875M/yr |
| Y1 services (~2x AZOA-weighted blend, Tessellation SKU) | $4.5M–$6M | SI channel: Black & Veatch OT advisory $1.5M–$2M, AZOA OT connectors $1M–$1.5M, PLAN spatial build $800K–$1.2M, Escherbridge Fractal MRV models $600K–$900K |
| Y1 upkeep (Platinum SLA) | $600K | Named support pod, 15-min P1, weekly review |
| Infra pass-through + 12% mgmt | $800K–$1.5M/yr | Multi-region, multi-site, compliance-grade cloud; Tie Town edge reference |

**Y1 total:** ~$8M–$10M | **3-yr TCO:** ~$20M–$32M

**Friction anchor:** IOU-scale ADMS rollout SI services alone (Black & Veatch / Accenture, 500K-customer utility): **$8M–$25M over 24–36 months**. NERC CIP compliance overhead at IOU scale: $2M–$5M/yr. AVEVA PI System at IOU scale: $1M–$3M/yr subscription. CSRD/CBAM compliance infrastructure: $500K–$2M/yr. Combined friction window: $12M–$35M/yr. PrimusNeo Y1 as % of friction: 23–80% — but positioned correctly, the IOU is paying for the governance-and-interop layer above incumbents, not displacing them, so the math is additive to their existing ADMS spend, not against it. Defensible capture rate: 5–12% of total IOU technology + compliance spend.

---

## 4. Industry-specific procurement signals

**Buyer personas and decision authority:**

| Buyer | Role | Authority | Primary concern |
|-------|------|-----------|-----------------|
| Chief Grid Officer / VP Grid Operations | Grid modernization sponsor | Operational approval; PUC testimony | Reliability, NERC CIP, OT security |
| CIO / VP Technology | Platform + vendor governance | Architecture review, vendor risk | IT/OT convergence, integration complexity, vendor concentration |
| COO | Overall business case | Budget authority | TCO, risk, regulatory deadlines |
| Head of Trading / VP Commercial | ETRM, carbon, VPP | Revenue-side technology | Settlement accuracy, ISO market connectivity |
| Chief Sustainability Officer | Carbon MRV, ESG disclosure | Board-level mandate | CSRD/CBAM accuracy, auditability, Article 6.4 |
| Regulatory Affairs / General Counsel | PUC filings | Rate-case approval | Regulatory defensibility, vendor attestation records |

**Procurement pathway:** Contracts at $5M+ require PUC pre-approval or inclusion in an Integrated Resource Plan (IRP) filing before procurement can proceed. RFPs are issued via regulated competitive bidding with 3–6 month technical evaluation phases. Short-listed vendors submit detailed compliance architecture documentation before any commercial discussion proceeds.

**Sales cycle:** IOUs and ISO-RTOs: 18–36 months. Municipal utilities and mid-size IPPs: 6–18 months. Supermajors (O&G, large renewables): 12–24 months.

**Budget cycle alignment:** IOU capital plans are set annually through IRP and budget processes. Missing the capital plan submission window by one quarter delays a deal by twelve months. This is the single most preventable deal-loss in energy; sales motion must align to IRP calendar, not calendar year-end.

---

## 5. Rejection-risk mitigations

**NERC CIP / OT cyber risk:** Software that touches BES Cyber Systems must be classified, change-managed, and assessed under CIP-007 (systems security management), CIP-010 (configuration management), and CIP-013 (supply-chain risk management). Mitigation package: ship a documented CIP compliance architecture before any technical evaluation; CIP-005 jump-server and MFA topology for all vendor remote access; CIP-013 supply-chain assessments pre-populated for AZOA (AZOA) and PLAN Systems (AMP) as the OT-touching components; published security attestation pack available day one of evaluation. No documented CIP compliance architecture equals automatic rejection.

**Vendor concentration risk:** IOUs and ISOs enforce multi-vendor policies post-SolarWinds and post-Volt Typhoon disclosures. A platform simultaneously touching SCADA, ADMS, DERMS, and carbon accounting triggers vendor concentration review automatically. Mitigation: PrimusNeo enters above incumbent stacks, not as displacement. ADMS stays with GE Vernova, Schneider, or Siemens. AVEVA PI System stays as the historian. PrimusNeo is the interoperability and governance fabric above them. The federated steward structure reinforces this: AZOA (AZOA), AMP (PLAN Systems), NEOS (OmniOne), Fractal (Escherbridge) are distinct stewards — not a single vendor.

**OT integration complexity:** Legacy distribution SCADA and EMS run proprietary protocols: DNP3, IEC 61968/70 (CIM), ICCP, Modbus. Governance or interop platforms claiming "open APIs" without certified OT protocol connectors fail at utility architecture review boards. Mitigation: AZOA authors certified DNP3, IEC 61968/70, and ICCP connectors for AZOA as first-class connector-library entries. Reference architecture documentation available with every technical evaluation package.

**Regulatory approval delays:** Rate-recovery technology spend faces 18–36 month PUC evidentiary cycles. Deals stall in hearings if cost-benefit testimony is thin. Mitigation: third-party ROI validation commissioned before the rate case opens, not after. McKinsey Energy Solutions or Deloitte E&R as the validation firm adds regulatory credibility. PrimusNeo's friction-cost anchor methodology (sourced to DOE, NERC, Federal Register) provides the evidentiary backbone.

**Budget cycle mismatch:** Missing the IRP capital plan window delays deals by a full year. Mitigation: annual IRP planning calendar awareness is a sales-team requirement for IOU accounts. Enterprise deal entry must be sequenced to the preceding IRP cycle, not to the buyer's expressed urgency.

---

## 6. Regulatory + compliance considerations

**FERC Order 2222 — DER Market Participation:** Requires all ISOs and RTOs to allow aggregated DER participation in wholesale markets down to 100 kW minimum aggregated capacity. Mandatory metering, telemetry, and settlement-data interoperability is the direct tech-spend trigger. AZOA is architecturally positioned for this integration layer; NEOS governs the multi-party attestation council for the DER aggregation.

**NERC CIP — Critical Infrastructure Protection:** Standards CIP-002 through CIP-015-1 govern BES Cyber System security. CIP-015-1 (Internal Network Security Monitoring): $13.2M/yr industry-wide compliance burden across ~1,636 registered entities. CIP-013 supply-chain risk management: structured vendor assessment and attestation for BES Cyber System vendors — NEOS supply-chain council template applies directly. CIP-003-9 (effective April 2026): extends supply-chain controls to low-impact BES assets, expanding the addressable compliance population and the NEOS WTP signal.

**EU CSRD / CSDDD — Sustainability Disclosure:** Large EU-listed energy firms and their non-EU subsidiaries face mandatory double-materiality ESG disclosures from FY2024 reporting. The EU Omnibus simplification package (September 2025) reduced scope to ~900 companies at EU level but preserved core emissions disclosure requirements. NEOS provides the auditable governance event log underpinning these disclosures; Fractal provides the MRV intelligence layer feeding the disclosure data.

**EU CBAM — Carbon Border Adjustment Mechanism:** Definitive phase begins January 2026. Energy exporters with embedded-carbon products entering the EU must submit certified embedded-carbon data per shipment, backed by third-party verified MRV. Financial penalties apply for non-compliant or unverifiable data. Fractal MRV + NEOS attestation together produce the certified embedded-carbon data trail CBAM requires.

**Article 6.4 — Paris Agreement ITMOs:** COP29 (November 2024) finalized Article 6.4 rules for Internationally Transferred Mitigation Outcomes. Carbon market participants need cryptographically auditable provenance chains to prevent double-counting across NDCs. NEOS governance events + Fractal lineage attestation map directly to this requirement. Near-term land opportunity: carbon market participants seeking Article 6.4-compliant provenance infrastructure before 2027 compliance deadlines.

**State PUC Rate Recovery:** IOU technology investments in ADMS, DERMS, cybersecurity, and compliance tooling are recoverable through rate cases in most jurisdictions. California CPUC has effectively mandated ADMS deployment for large IOUs; New York REV and Illinois CEJA contain analogous provisions. Rate-payer funding de-risks vendor revenue through the procurement cycle but introduces the 18–36 month PUC approval timeline.

---

## 7. Steward + service partner notes

**PLAN Systems (AMP steward):** Leads spatial scene authoring for power plant and substation deployments. PLAN's industrial-grade 3D interface components and Hexon file standard (Apache-2.0) are the foundation for energy site twins. PLAN Systems subcontracts for spatial environment buildout and sensor/OT integration on AMP-containing engagements; royalty rate 15% of AMP license line-item.

**Escherbridge (Fractal Engine steward):** Their analytics depth is the strategic differentiator for energy APM and carbon MRV. Escherbridge delivers Fractal ML engineering, custom predictive maintenance models (turbine degradation, transformer health), and carbon MRV intelligence pipelines. They are the primary delivery partner for any Fractal-containing energy engagement with significant telemetry volume or regulatory MRV requirements. Royalty rate 18% of Fractal license line-item; Escherbridge invoices services directly when delivering.

**OmniOne (NEOS steward):** ETHOS governance methodology design for NERC CIP-013 supply-chain attestation councils, REC/Article 6.4 provenance governance structures, and CSRD double-materiality disclosure governance. OmniOne leads governance design workshops and charter authoring on NEOS-containing engagements. Royalty rate 18% of NEOS license line-item.

**AZOA (AZOA steward):** Authors certified DNP3, IEC 61968/70 (CIM), and ICCP connectors as first-class AZOA connector-library entries. Leads OT connector buildout and carbon registry integration (M-RETS, PJM-EIS GATS, Article 6.4 registry APIs) for energy engagements. Royalty rate 15% of AZOA license line-item; connector services revenue accrues to AZOA directly.

**Tie Town [TX] reference deployment:** The PrimusNeo reference architecture for multi-site energy deployments. Edge node colocation at Tie Town ($1,200–$2,500/month for 1U) provides the AMP + AZOA edge cache reference for buyers evaluating offline-first capability for remote generation or substation sites where cloud connectivity is unreliable.

**SI channel:**
- **McKinsey Energy Solutions:** Senior partner day rate $9,500–$12,000. Grid strategy, IRP testimony, energy transition regulatory advisory. Use for IOU/ISO rate-case preparation and PUC evidentiary support.
- **Deloitte E&R (Energy & Resources):** Director/Principal $4,000–$6,000/day. ADMS program management office, utility technology roadmap advisory.
- **Accenture Resources:** Managing Director $3,500–$5,500/day. OT/IT convergence, SAP IS-U integration. Strong for O&G supermajor engagements with SAP backbone.
- **Black & Veatch:** ADMS/OT Principal $2,500–$4,000/day. Deep utility engineering + OT advisory credential; turnkey ADMS rollout programs for mid-size IOU ($8M–$25M over 24–36 months). Primary SI recommendation for utility OT integration scope.
- **Worley:** Process/Digital Lead $2,000–$3,500/day. O&G, renewables EPC + digital transformation. Strong for offshore and LNG asset engagements where Worley is already the EPC.
- **IBM Consulting:** Energy Practice Lead $2,500–$4,000/day. Maximo APM integration, grid data management.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Energy engagement model |
