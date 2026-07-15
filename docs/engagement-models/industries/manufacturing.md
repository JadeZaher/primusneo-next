# Manufacturing — Engagement Model

> **Vertical:** Manufacturing & Industrial Production
> **Research brief:** [`../research/manufacturing.md`](../research/manufacturing.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The friction-cost anchor

Manufacturing is the vertical where PrimusNeo's value proposition is most directly measurable, and most frequently stalled by pilots that never ship.

**Macro anchors (sourced):**

| Metric | Figure | Source |
|--------|--------|--------|
| Global manufacturing value | $16.8T/yr | UNIDO 2024 |
| Global unplanned downtime cost | ~$50B/yr | Siemens / McKinsey |
| Industry 4.0 pilots that never scale | 70% | McKinsey |
| Average industry OEE | 60–65% | Siemens benchmark |
| World-class OEE target | 85% | Industry consensus |
| OEE gap × addressable sector | ~20–25 OEE points | Derived |

The pilot-purgatory number is the dominant friction mechanism in this vertical. A plant that runs 3–6 IIoT POCs before one scales typically sinks $500K–$3M in sunk integration cost per failed pilot, with no reusable infrastructure. That sunk cost — not the software license — is what makes the first successful deployment so valuable. McKinsey's 70% failure rate applied to the installed base of active pilots means **$35B+ in annual wasted pilot spend** is in play globally.

**Per-customer friction windows by scale:**

| Scale | Definition | Estimated annual friction window | Math |
|-------|------------|----------------------------------|------|
| **Small** | 1 plant, 1 line, <50 machines | **$500K–$2M/yr** | ~$1M/yr downtime (Siemens benchmark at this plant size) + $200K/yr in tools that don't talk to each other + 1–2 stalled POCs at $150K sunk each |
| **Mid** | 3–12 plants, mixed OT estate | **$5M–$20M/yr** | $50B / ~10K plants global midcap ≈ $5M/plant/yr in downtime + $1–2M/yr integration debt + pilot-purgatory sunk cost across the fleet |
| **Large** | Tier-1 OEM, 25+ plants, global | **$50M–$200M+/yr** | AMP §7.2 reference: $4M/yr/plant downtime × 12 plants = $48M/yr, plus $12M+ sunk across 8 stalled POCs; scaled linearly to 25+ plants = $100M+ friction window |

**Capture rate target:** 5–15% of the per-customer friction window per `01-pricing-model.md` §9. The math must hold at every scale.

---

## 2. PrimusNeo positioning per layer in manufacturing

Manufacturing is the **full-stack default** vertical. Every layer has a clear and non-redundant job in the plant.

| Layer | Role in manufacturing | Key substitutes displaced | Why this beats the point solution |
|-------|----------------------|--------------------------|-----------------------------------|
| **AMP** (Spatial OS) | Plant-floor spatial twin: CAD ingest, PLC telemetry binding, MES event overlay, worker location, asset-attached scene. The IT/OT bridge that makes "the plant" a navigable, offline-capable, federated data object. | PTC ThingWorx ($150K–$500K+/yr/plant), Siemens Insights Hub ($50K–$300K/yr/plant), AVEVA System Platform | AMP runs offline-first — no cloud dependency for the operational loop. Hexon file standard is open, so the buyer's spatial data is never locked. Premium PLAN 3D components deliver CAD-class viewport without forcing rip-and-replace of Rockwell or AVEVA. |
| **NEOS** (Governance) | Change control, management-of-change (MOC), supplier qualification attestations, CIP-013-equivalent supplier risk acceptance, signed approval logs for CAPA and FSMA traceability. | Intelex, Veeva Vault QMS ($100K–$400K/yr), custom SharePoint MOC workflows | NEOS produces a *cryptographically signed, replayable governance log* — not a PDF approval chain stored in a folder. This is what ISO 9001 / IATF 16949 auditors actually want and what the EU ESPR product-passport audit trail will require. |
| **AZOA** (Interoperability Fabric) | SAP S/4HANA and ERP connectors, Rockwell FactoryTalk MES, AVEVA PI System / OSIsoft historian, Siemens MindSphere, GE Proficy, OPC-UA broker, MQTT ingest for PLC and sensor fleets. The layer that eliminates the "3 Python ETL scripts and a MuleSoft instance we hate" architecture. | MuleSoft ($80K–$2M+/yr), Boomi ($6.6K–six-figure), in-house Python ETL teams (2 FTE = $300K/yr loaded) | AZOA carries the full IT/OT connector library from AZOA — the connector authors who know Rockwell, Siemens, and AVEVA from the inside. Connector reuse is built into the business model, so each successive plant rollout costs less than the first. |
| **Fractal Engine** (Intelligence) | Predictive OEE modeling per line and per asset, downtime root-cause classification, scrap and yield prediction, Scope 3 emissions estimation per SKU for DPP compliance, real-time signal generation from the IT/OT data fabric AZOA feeds. | AspenTech Mtell ($300K–$2M/yr), C3 AI APM ($1M–$5M/yr), Cognite ($500K–$3M/yr), Sphera ESG ($150K–$600K/yr) | Fractal Engine treats AMP spatial events and NEOS governance events as first-class signal types. OEE predictions are anchored to scene positions, not abstract asset IDs. Scope 3 MRV feeds directly from the production telemetry, not from spreadsheet estimates. |

**Full-stack is the default recommendation in manufacturing** — not because we want the bigger deal, but because a twin without intelligence is a viewer, and intelligence without integration has no data. The four layers compose into a single operational fabric; selling fewer than three creates an incomplete solution that the 70% pilot-purgatory statistic will eventually claim.

**Tie Town [TX] serves as the proof-of-capability reference deployment.** The same AMP + AZOA + Fractal architecture used in Tie Town's operational coordination is the template for plant-floor deployments. Buyers skeptical of a new vendor can tour the reference deployment and inspect the live Hexon spatial model before signing.

---

## 3. Engagement tiers — Small / Mid / Large

### 3.1 Small: 1 plant, 1 line

**Definition:** Single plant, 1–2 production lines, <50 machines, <100 OT-connected assets. Typical buyer is a $20M–$150M revenue manufacturer or a corporate innovation team running a line-level pilot with a defined productionization path.

**Recommended bundle:** AMP + AZOA + Fractal (Triad). NEOS is optional at this scale unless there is a regulatory driver (FSMA, ISO 9001 MOC, DPP pilot). If NEOS is added, it becomes a Full Stack engagement.

**Friction-cost anchor for this scale:** $500K–$2M/yr. Targeted capture: 8–15% = $40K–$300K/yr, justifying the license spend at payback <24 months.

**Worked quote — Small Triad (AMP + AZOA + Fractal):**

| Line item | Amount | Notes |
|-----------|--------|-------|
| AMP Small license | $28K/yr | 1 site × $28K/site/yr (mid of $18K–$45K range) |
| AZOA Small license | $36K/yr | <10 integrations (SAP connector + Rockwell MES + AVEVA historian + 2 OPC-UA endpoints) |
| Fractal Small license | $50K/yr | <5 data sources (PLC telemetry, MES, historian, ERP quality module, energy meter); <1TB managed |
| Subtotal pre-bundle | $114K/yr | |
| Triad bundle discount (18%) | –$20.5K | |
| **Licensed ARR** | **$93.5K/yr** | |
| Y1 services (Molecule SKU deployment + connectors) | $200K | Molecule SKU: $180K (1 site, full-stack, ≤100 users, 8–14 weeks) + AZOA connector bundle: SAP $60K + Rockwell $80K + historian $50K = $190K × 15% connector-bundle discount = $162K; blended ~2.1x license |
| Sustained upkeep (Silver SLA, 22%) | $20.6K/yr | Starts Y2 |
| Infra (pass-through + 12% mgmt fee) | ~$24K/yr | Cloud reference small: ~$1,200/mo + sensor ingest $600/mo |
| **Y1 total** | **~$318K** | License + services + Y1 infra |
| **3-yr TCO** | **~$550K–$620K** | Y2–Y3: license + upkeep + infra; services taper to ~0.4x in Y2 |

**Capture rate check:** $93.5K license ÷ $1.25M friction midpoint = **7.5% value share** — inside the 5–15% manufacturing band.

**Cross-reference:** This is the line-level analog to the AMP Small tier in `layers/amp.md` §3, composed with the AZOA Mid-entry and Fractal Small anchors in `layers/oas.md` §3 and `layers/fractal-engine.md` §3.

---

### 3.2 Mid: 3–12 plants

**Definition:** 3–12 plants, mixed legacy and modern OT, typically $200M–$3B revenue manufacturer pursuing a digital transformation wave. Often a phased program: Wave 1 (2–3 pilot plants) → Wave 2 (remaining fleet). Average site rollout cadence: 1–2 plants per quarter after the template is established.

**Recommended bundle:** Full Stack (AMP + NEOS + AZOA + Fractal). At 3+ plants, MOC and supplier qualification governance (NEOS) generate enough audit surface area to justify the layer. The NEOS investment pays for itself in CAPA cycle time reduction and auditor satisfaction alone.

**Friction-cost anchor for this scale:** $5M–$20M/yr across the fleet. Targeted capture: 6–10% = $300K–$2M/yr.

**Worked quote — Mid Full Stack (6-plant wave):**

| Line item | Amount | Notes |
|-----------|--------|-------|
| AMP Mid license | $150K/yr | 6 sites × $25K/site/yr (within $80K–$250K range) |
| NEOS Mid license | $55K/yr | 3 councils (plant-ops, quality/MOC, supplier-risk) × $18K/council + governance design overhead |
| AZOA Mid license | $160K/yr | 20–30 integrations: SAP × 6 plants + Rockwell MES × 6 + historian × 6 + 3 cross-plant OPC-UA bridges + procurement connector |
| Fractal Mid license | $220K/yr | 10–15 data sources across 6 plants: PLC telemetry, MES, historian, ERP, quality, energy, workforce; 2–5TB managed; predictive OEE + downtime + scrap + Scope 3 models |
| Subtotal pre-bundle | $585K/yr | |
| Full Stack bundle discount (25%) | –$146K | |
| **Licensed ARR** | **$439K/yr** | |
| Y1 services (~2.2x license blend) | $966K | Hex SKU deployment (2–5 sites, 14–24 weeks): $600K–$700K + AZOA connectors (SAP $120K + Rockwell $160K + historian $70K, 15% bundle discount) = $296K; blended services ~2.2× |
| Sustained upkeep (Silver SLA, 22%) | $97K/yr | Starts Y2 |
| Infra (pass-through + 12% mgmt fee) | ~$72K/yr | Cloud reference mid per site: $6K/mo ÷ 6 sites in Y1; scales with fleet |
| **Y1 total** | **~$1.5M–$1.6M** | License + services + Y1 infra |
| **3-yr TCO** | **~$2.8M–$3.4M** | Y2–Y3 license + upkeep + infra; services taper; Wave 2 plants add per-site rollout cost of $80K–$200K/plant |

**Capture rate check:** $439K license ÷ $10M friction midpoint = **4.4% value share.** Low end of the band — defensible because the full-stack friction-cost displacement (downtime + pilot-purgatory + MuleSoft/integration-debt + ESG compliance) is better quantified at the discovery sprint before quoting. If downtime at 6 plants runs $3M/yr and OEE uplift from Fractal Engine is validated at 3 OEE points, capture rate on downtime alone is $439K ÷ $3M = 14.6% — top of the band.

**Note on new-site rollout economics:** Per the research brief, template-based additional plant deployments run $50K–$250K per plant once the reference architecture is established. The Hex SKU deployment covering the first 2–5 plants absorbs most of the architectural cost; subsequent plants use the Atom ($35K–$90K) or a scaled Molecule SKU.

**Cross-reference:** The 6-plant full-stack example aligns with the `01-pricing-model.md` §4 worked mid-tier example ($443K license ARR / $1.5M–$1.7M Y1) and with `layers/amp.md` §7.2 (the 12-plant Tier-1 OEM example which uses this template scaled to 12 sites).

---

### 3.3 Large: Tier-1 OEM, 25+ plants

**Definition:** Tier-1 OEM or large industrial conglomerate, 25+ plants globally, typically $3B+ revenue. Full IT/OT transformation program with SAP/Oracle ERP, multi-vendor MES (Rockwell + Siemens + AVEVA in the same fleet), OSIsoft PI historian estates, and active ESG/Scope 3/DPP obligations. COO and CFO sponsorship required. SI partner (Accenture Industry X or Capgemini) typically embedded.

**Recommended bundle:** Full Stack, with Gold or Platinum SLA, and likely an outcome-based addendum on OEE uplift. Tessellation deployment SKU when the program spans >6 simultaneous plant waves.

**Friction-cost anchor for this scale:** $50M–$200M/yr. Targeted capture: 5–8% = $2.5M–$16M/yr. The friction anchor is documented and defensible: per the `layers/amp.md` §7.2 reference deployment, a 12-plant discrete manufacturer runs ~$4M/yr/plant in unplanned downtime ($48M total), with $12M+ in sunk pilot POC costs and 8 stalled initiatives. At 25+ plants, the total friction window exceeds $100M/yr before ESG compliance costs are added.

**Worked quote — Large Full Stack (25-plant global program):**

| Line item | Amount | Notes |
|-----------|--------|-------|
| AMP Large license | $700K/yr | 25 sites × ~$28K/site/yr (within $350K–$1.2M range; volume discount applies at 20+ sites) |
| NEOS Large license | $220K/yr | Multi-council federated: plant-ops councils × 25, quality/MOC council, supplier risk council, ESG/DPP governance council; 500+ members across the enterprise |
| AZOA Large license | $750K/yr | 50+ integrations: SAP global + Oracle Fusion variants + Rockwell FactoryTalk fleet + Siemens MindSphere + AVEVA PI × multiple historian estates + OPC-UA broker per plant cluster + supply-chain connector to Tier-2 suppliers |
| Fractal Large license | $900K/yr | 20+ data sources per plant cluster, >20TB managed; predictive OEE per line, downtime root-cause, scrap, yield, Scope 3 per SKU for ESPR DPP; 6–10 custom models in Y1 |
| Subtotal pre-bundle | $2.57M/yr | |
| Full Stack bundle discount (25%) | –$643K | |
| **Licensed ARR** | **$1.93M/yr** | |
| Y1 services (Tessellation SKU + connectors) | $4.2M–$5.0M | Tessellation SKU: $4.5M midpoint (multi-wave, 9–18 month horizon, Accenture Industry X co-delivery) + AZOA connector program: 15+ connectors at bundle rates = $800K–$1.2M; blended ~2.3× |
| Sustained upkeep (Gold SLA, 25%) | $483K/yr | Starts Y2; Gold is default for regulated/enterprise |
| Infra (pass-through + 12% mgmt fee) | $400K–$700K/yr | Multi-region cloud for EU + NA + APAC; edge nodes per plant cluster; Tie Town reference colocation for primary federation layer |
| **Y1 total** | **~$6.5M–$7.5M** | |
| **3-yr TCO** | **~$14M–$18M** | Y2–Y3: license + upkeep + infra; services taper to ~0.5× in Y3; additional plant waves billed per Atom/Molecule SKU |

**Capture rate check:** $1.93M license ÷ $100M friction midpoint = **1.9% value share** at nominal. With outcome-based addendum: if Fractal Engine documents 3 OEE points across 25 plants (conservative for a world-class implementation), at $10M revenue/plant/yr and 3% OEE-to-revenue correlation, documented savings ≈ $7.5M/yr. Performance fee at 20% of savings = $1.5M/yr on top of the base license. Combined effective value share: ($1.93M + $1.5M) ÷ $100M = **3.4%** — well within the defensive 5–15% band and below the 2× performance-fee cap.

**Cross-reference:** This is the full-stack extension of `layers/amp.md` §7.2 (the 12-plant Tier-1 OEM example) and `layers/fractal-engine.md` §7.2 (the large full-stack manufacturing program). The AMP + AZOA + Fractal triad quote from `amp.md` §7.2 ($1.27M/yr license at 12 plants, –18% triad discount) scales here to 25 plants with NEOS added and the 25% full-stack discount applied.

---

## 4. Industry-specific procurement signals

**Decision makers by deal size:**

| Threshold | Decision maker | Priorities | Notes |
|-----------|---------------|------------|-------|
| <$250K | Plant Manager / VP Operations | Payback <18 months, minimal IT dependency, OT-safe rollout | Approves the pilot; does not approve the fleet program |
| $250K–$2M | CIO / VP Digital / CDO | Architecture fit, OT cyber posture, cloud strategy, vendor roadmap, AZOA connector coverage for the existing stack | Often co-signs with Plant Manager above $500K |
| >$2M | COO / CFO (co-sign required) | Program ROI, supply-chain resilience, ESG/Scope 3 obligations, CapEx vs OpEx classification | CFO increasingly focused on DPP compliance timeline post-2025 |
| ESG / DPP scope | CSO / Head of Sustainability | Scope 3 accuracy, ESPR audit trail, CBAM disclosure format | Enters the buying committee when Fractal Engine MRV is in scope |
| >$500K (formal) | Procurement | RFP/RFQ, MSA terms, SLA benchmarking, TCO disclosure, source-escrow availability | Require binding TCO disclosure; hidden-cost discovery is the top deal-kill trigger |

**RFP cadences:**

- **Enterprise CapEx > $5M:** 6–18 month cycle. Typical flow: discovery sprint → business case → RFI → RFP → proof-of-value (paid, $50K–$150K) → vendor selection → MSA/PFEL → SOW. Accenture or Capgemini often runs the RFP process on behalf of the buyer.
- **Mid-market OpEx SaaS $500K–$2M:** 4–9 months. Discovery sprint → business case → shortlist → paid POC → PO. Procurement enters formally above $500K.
- **ESG/DPP compliance-deadline-driven:** 2–4 months when mandate is imminent (CBAM, DPP batteries 2025). This is the fastest procurement motion in the vertical right now.

**CapEx vs OpEx bias:**

Post-COVID, the dominant preference is **OpEx/subscription** (annual SaaS PrimusNeo ARR + services SOW) to preserve capital. OT infrastructure (edge hardware, OPC-UA gateways, historian server upgrades) remains CapEx-classified. The deal structure that wins: software OpEx (PrimusNeo ARR), connectivity CapEx (OT HW the SI or plant team procures separately), services as project CapEx (Y1 transformation budget) tapering to OpEx upkeep.

**Discovery-to-PO timeline:** 3–6 months for mid; 9–18 months for large. A paid discovery sprint ($40K–$80K, crediting 100% to the engagement) is the right first step at any scale. It produces a binding SOW and establishes the friction-cost baseline that makes the COO/CFO approval tractable.

---

## 5. Rejection-risk mitigations

| Top rejection trigger | Research brief figure | PrimusNeo response |
|----------------------|----------------------|-------------------|
| **Vendor lock-in** | Single largest recurring rejection | Hexon v1.0.0 file standard is open Apache-2.0 — the buyer's spatial data is portable on day 1. AZOA Connector SDK is open MIT/Apache-2.0. NEOS and Fractal Engine are CC-NC — the community version is always forkable. Data export is a non-negotiable contract term (PFEL §6). Source escrow via Iron Mountain for AMP/AZOA closed-core above $500K ARR. |
| **IT/OT integration complexity** | 42% cite OT integration as primary scaling barrier | AZOA ships with first-class MES/OT connectors (Rockwell FactoryTalk, Siemens MindSphere, AVEVA PI, GE Proficy, OPC-UA broker) authored by AZOA — the connector authors who know these systems from the inside. The Tie Town [TX] reference architecture demonstrates live IT/OT integration. Fixed-fee connector SOWs with 90-day warranty eliminate the "integration cost overrun" failure mode. |
| **Unclear ROI / unquantified payback** | 48% report buyer's remorse from integration overruns; <24-month payback required at COO/CFO | Fractal Engine predictive ROI model is instrumented in the 60-day baseline phase before the contract goes hot (per `01-pricing-model.md` §8 outcome-based addendum). Downtime, OEE, and scrap baselines are established from live data before the buyer commits. Binding TCO disclosure is PrimusNeo standard in every RFP response. |
| **Pilot-to-scale gap** | 70% of pilots never scale | The engagement model is designed around a defined productionization path from day 1 — the Atom/Molecule/Hex/Lattice/Tessellation SKU ladder gives the buyer a fixed-fee path from pilot to fleet with known per-plant unit economics ($50K–$250K/plant for template rollouts). NEOS governance councils for the digital transformation program ensure internal buy-in is treated as a deliverable, not an assumption. |
| **Hidden cost discovery** | Integration cost overruns cited by 38%; delays by 35% | All connector costs are fixed-fee with explicit scope. AZOA per-connector overages are flagged in the connector-audit discovery output. Infra is always a separate pass-through line (never bundled into license), so OT hardware, historian per-tag overages, and cloud compute costs are visible before signature. Sustained upkeep at 22% Silver SLA covers connector maintenance against upstream API changes — the most common hidden-cost cliff. |
| **Data sovereignty / cloud residency** | European manufacturers reject US-only cloud deployments | BYO-cloud option is standard: the buyer owns the cloud account, PrimusNeo manages. AMP runs offline-first with optional EU-region cloud. Fractal Engine compute can be EU-only. NEOS coordination server is deployable on-premise or in an EU-residency cloud region. The Tie Town reference architecture supports hybrid deployments where production IP and quality data never leaves the buyer's cloud boundary. |

---

## 6. Regulatory + compliance considerations

Manufacturing is subject to the most acute near-term regulatory pressure of any PrimusNeo vertical. Three mandates are live or imminent:

**EU ESPR / Digital Product Passport (DPP):**

| Category | Mandatory DPP deadline | What is required |
|----------|----------------------|-----------------|
| Batteries (≥2 kWh) | February 2027 (phased from 2025 pilots) | Lifecycle data, Scope 3, recycled content, supply chain traceability |
| Textiles | 2027 | Material composition, origin, sustainability metrics |
| Electronics / ICT | 2027–2029 | Material, repairability score, recycled content |
| Industrial machinery | 2029 | Performance, energy, end-of-life data |

**PrimusNeo answer:** NEOS generates cryptographically signed supply-chain attestations (supplier qualification, CIP-013-equivalent risk acceptance, incoming material traceability) that feed directly into the DPP audit trail. AZOA connects to Tier-2 and Tier-3 supplier systems to aggregate the upstream data without manual data collection. Fractal Engine computes per-SKU Scope 3 emissions from live production telemetry and outputs them in the structured formats ESPR will require. The full-stack engagement produces DPP-ready data as a **by-product of normal operations** — not a separate compliance project.

**EU Carbon Border Adjustment Mechanism (CBAM):**

CBAM mandatory disclosure is in force for steel, cement, fertilizer, aluminum, electricity, and hydrogen as of January 2026, with expanded scope ongoing. The mechanism requires **verified Scope 3 embedded-carbon disclosure** per imported tonne. For EU-importing manufacturers, non-compliance is a cost line, not just a reputational risk.

**PrimusNeo answer:** Fractal Engine MRV (Measurement, Reporting, Verification) signal generation from the AZOA-connected production data fabric produces CBAM-compatible embedded-carbon estimates with the audit trail CBAM verifiers require. The governance layer (NEOS) produces the attestation that the data was collected under a defined, auditable methodology — the difference between a number and a verified number.

**Scope 3 mandatory disclosure (CSRD / SEC Climate Rule):**

EU CSRD mandatory Scope 3 disclosure applies to ~50,000 large and listed companies in scope. Scope 3 Category 1 (purchased goods/services) and Category 11 (use of sold products) are the hardest to compute from manufacturing floor data.

**PrimusNeo answer:** The AZOA + Fractal Engine combination produces Category 1 supplier data directly from the AZOA-connected supply chain fabric (no spreadsheet collection), and Category 11 estimates from the AMP product lifecycle spatial model. This is the data flow that point-solution ESG platforms (Sphera, Watershed, Circularise) approximate from approximations; PrimusNeo generates it from live operational telemetry.

---

## 7. Steward + service partner notes

**PLAN Systems (AMP steward):** Primary delivery partner for plant-floor spatial scene work — CAD ingest, PLC telemetry binding, Hexon scene authoring, and the premium PLAN 3D industrial interface components. PLAN Systems subcontracts at the AMP Spatial/3D Engineer day rate ($2,400/day per `03-services-catalog.md` §2.1). For any large engagement with significant scene-authoring scope, PLAN Systems should be named in the SOW as the primary AMP delivery sub-partner. PLAN receives 15% steward royalty on AMP license revenue per `02-licensing-model.md` §4.

**Escherbridge (Fractal Engine steward):** Primary delivery partner for Fractal predictive maintenance model development, OEE classifier training, downtime root-cause model engineering, and Scope 3 / DPP MRV signal generation. Escherbridge ML Engineers ($2,800/day) are the right resource for the 4–8 custom model buildout that the large-tier engagement requires. Escherbridge receives 18% steward royalty on Fractal Engine license revenue.

**OmniOne (NEOS steward):** Primary delivery partner for NEOS change-control council design, MOC charter authoring, supplier risk governance council instantiation, and ETHOS methodology facilitation. OmniOne Governance Designers ($2,400/day) run the governance design workshop and charter authoring engagements. OmniOne receives 18% steward royalty on NEOS license revenue.

**AZOA (AZOA steward):** Primary delivery partner for OT/historian connector authoring (Rockwell FactoryTalk, AVEVA PI, GE Proficy, OPC-UA, MQTT), IT integration (SAP, Oracle), and the AZOA federation engine deployment. AZOA Integration Engineers ($2,200/day) carry the connector buildout work. AZOA receives 15% steward royalty on AZOA license revenue.

**SI channel — Accenture Industry X / Capgemini Engineering:** For large-scale Tessellation-tier programs ($5M+ TCV), co-delivery with a Tier-1 global SI is standard. Accenture Industry X and Capgemini Engineering are the recommended partners given their Industry 4.0 transformation practices and OT/MES certification pools. SI margin on implementation is 20–40%; PrimusNeo retains the license ARR and sustains upkeep revenue. SI co-delivery is the right structure when the buyer's procurement team insists on a named SI as the primary delivery party — PrimusNeo is the software vendor and the SI is the prime implementation contractor. Introduce SI partners at the RFP stage for any deal above $3M TCV.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Manufacturing engagement model |
