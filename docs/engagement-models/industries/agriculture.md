# Agriculture — Engagement Model

> **Vertical:** Agriculture (row crop, specialty, livestock, cooperatives, ag inputs, regenerative ag, MRV)
> **Research brief:** [`../research/agriculture.md`](../research/agriculture.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The friction-cost anchor

Agriculture's friction is distributed across three distinct windows — compliance overhead, coordination inefficiency, and broken data infrastructure — and they compound on one another at every tier.

**FSMA compliance tax (small/mid scale):** USDA data shows farms with $25K–$250K annual produce sales spend up to 60% of profits on FSMA compliance. A $150K-revenue specialty crop farm carrying $90K in compliance overhead is a buyer already paying enterprise-software money for paper-and-labor solutions. That's the anchor.

**Per-acre software density:** FieldView has established $4–$10/acre/yr as the mass-market baseline for FMIS. CropX (hardware + SaaS) reaches $15–$25/acre/yr. At 5,000 acres, FieldView ceiling = $50K/yr. At 100,000 acres (mid regional co-op), the comparable full-suite spend is $400K–$2M/yr blended. The per-acre market has priced the buyer; PrimusNeo captures a portion of that existing budget while displacing compliance and MRV spend they're currently absorbing separately.

**MRV cost collapse:** Traditional soil carbon verification runs $50–$100/acre. Boomitra's satellite-ML approach claims below $10/acre at continental scale — a 5–10x reduction. The voluntary ag carbon market itself contracted 57% in 2024 ($84.9M → $36.1M) driven by methodology disputes and quality concerns, with Nori's September 2024 shutdown as the visible failure event. The lesson is not that MRV is dead; it's that MRV platforms that promised returns without verifiable outcome evidence failed. The Article 6.4 UN carbon market launching 2025–2026 with UN-endorsed credits expected at premium pricing vs voluntary is the re-entry event that makes this investable again — but only for platforms that can produce third-party-verifiable attestations.

**EUDR compliance cost:** For large operators with EU-market soy, cattle, cocoa, coffee, palm oil, rubber, or wood exposure, plot-level geolocation compliance is mandatory by December 30, 2026. EUDR upstream costs — physical segregation, traceability infrastructure, geolocation data — remain substantial even after EC simplification measures, and can exceed thin ag commodity margins in high-risk origins (Mongabay, Feb 2026). For a large trader handling 500K+ acres of soy supply chain, this is a $2M–$10M/yr compliance program waiting to happen.

**Computed friction windows by scale:**

| Scale | Representative buyer | Primary friction | Annualized friction window |
|-------|---------------------|------------------|---------------------------|
| Small | 5K-acre family farm | FSMA + ad-hoc tools | $40K–$120K/yr |
| Mid | 50K-acre regional co-op | ERP interop + MRV enrollment + member data governance | $400K–$2M/yr |
| Large | National co-op federation / ag input giant | EUDR compliance + Scope 3 + multi-system interop | $5M–$25M/yr |

PrimusNeo capture band for agriculture: **8–18% of compliance + MRV spend** (per the pricing model vertical table). The per-acre software budget is the comparison anchor; the compliance and MRV spend is the friction being displaced.

---

## 2. PrimusNeo positioning per layer in agriculture

### AMP — Field and livestock spatial twin (PLAN Systems)

AMP is the authoritative field-and-facility spatial record: field boundaries, soil zones, irrigation infrastructure, livestock areas, storage facilities, and agronomic event log. In the ag buyer's vocabulary: the offline-capable operational ground layer that ties together precision guidance, sensor telemetry, satellite imagery, and field event records into one navigable scene.

**Critical requirement: offline-first.** Rural connectivity is a primary disqualifier for cloud-only platforms across large portions of the US Corn Belt, Great Plains, and international growing regions. AMP's offline-first architecture (the PLAN core runtime operates without continuous cloud connectivity) is not a feature — it is a prerequisite for any farm-edge deployment. This is the explicit point of failure for every Web-native spatial platform (Spatial.io, Microsoft Mesh) and many FMIS competitors.

AMP prices per farm site at $4K–$30K/site/yr for production deployments. For a cooperative serving 200 member farms, cooperative-friendly flat-rate site licensing at $500–$3,000/site/yr is the right mechanic — it avoids per-acre metering complexity across variable field sizes and aligns with how co-op boards think about distributing costs to members.

### NEOS — Cooperative governance and member-data sovereignty (OmniOne)

Farmer data sovereignty is the primary adoption barrier in precision agriculture. The GAO January 2024 precision agriculture report formally identified farm data sharing and ownership as the top adoption challenge. Civil Eats (March 2026) described farm data as "a hidden crop for corporate tech." Only 36% of smaller farms planned AI adoption vs 81% of large farms — the trust gap is structural and will not be resolved by privacy policy updates alone.

NEOS addresses this at the protocol layer. For a cooperative deployment, NEOS instantiates member councils where member-elected board governance controls data-sharing policies, contribution accounting tracks which member data contributed to which outputs, and signed on-chain attestation creates a verifiable, auditable record that data was not resold. The CC-NC dual-license structure is itself a signal: the governance layer ships under Creative Commons NonCommercial terms, which signals non-extractive intent to the exact audience (cooperatives, small farms, agronomists) that has been burned by extractive tech before.

For national cooperative federations, NEOS enables holonic federation — local co-op councils retain local sovereignty while participating in federation-level governance without surrendering member data control to the national entity.

### AZOA — ERP interop across cooperative member systems (AZOA)

Co-op member systems are heterogeneous by design. A regional grain co-op's technology estate typically includes AgVend (retail omnichannel), SSI cooperative software, Agris (farm accounting), one or more FMIS platforms across members, a grain-ticketing system, and commodity price feeds. AZOA is the integration layer that connects these without requiring rip-and-replace of any incumbent — the same positioning as MuleSoft for Web2 enterprise integration, extended to the ag-specific system landscape that MuleSoft's standard connector library doesn't cover.

AZOA also carries the carbon registry connectors (Verra VCS, Gold Standard, Article 6.4 national registries) that are required for MRV credit issuance. These are purpose-built AZOA connectors delivered by AZOA.

### Fractal Engine — Yield prediction, carbon attribution, MRV signal generation (Escherbridge)

Fractal Engine is the intelligence layer that turns AMP field events, NEOS governance logs, and AZOA-ingested system data into defensible analytical outputs: yield prediction models, input-cost optimization recommendations, Scope 3 carbon attribution per field/per commodity lot, and MRV signal generation for carbon credit verification.

The Escherbridge precedent in carbon attribution is relevant here: Indigo Ag's sale of 2.85M tCO2e to Microsoft represents the largest single soil carbon transaction to date, built on satellite + agronomic intelligence at scale. Fractal's analytics depth, tuned to Escherbridge's corpus, is the infrastructure that enables this class of transaction — and the explicit failure mode we cite when asked why PrimusNeo is different from Nori.

Fractal is also where EUDR plot-level geolocation compliance outputs are produced: satellite-verified field boundaries + crop identification + deforestation-risk scores, formatted for EU Due Diligence Statement submissions.

---

## 3. Engagement tiers — Small / Mid / Large

### Tier 1 — Small: Family farm or small cooperative (<5,000 acres, <$10M revenue)

**Bundle:** AMP (field spatial twin, offline-capable) + Fractal Engine (yield prediction + input optimization). NEOS and AZOA added if co-op-connected; otherwise lightweight. Cooperative-friendly site licensing.

**Worked example — Small Specialty Crop Operation (Tier 1)**

- **Buyer:** 12-member vegetable cooperative, 800 acres in the Rio Grande Valley. FSMA Produce Safety Rule compliance is costing $60K/yr in record-keeping labor + consultant fees. Considering a specialty carbon program.
- **Scope:** AMP for field boundaries + agronomic event log (FSMA audit trail); Fractal for input-cost modeling + soil health indexing; NEOS (CC-NC, free — cooperative with <$1M revenue per member, non-commercial deployment) for member governance.
- **Quote:**
  - AMP Small: $22K/yr (per-site, 3 field clusters, offline-first mode required)
  - Fractal Small: $35K/yr (4 data sources: soil tests, weather, irrigation sensors, yield history)
  - Duet bundle: -10% → $51K/yr license
  - Y1 services (Atom deployment SKU, $55K + basic field data migration, $20K): $75K
  - Y1 upkeep (Bronze SLA, 18%): $9K/yr (starts Y2)
  - Infra (edge node + cloud reference small): ~$800/mo
- **Y1 total:** ~$136K · **3-yr TCO:** ~$225K
- **Friction-cost anchor:** $60K/yr FSMA compliance labor + $15K/yr ad-hoc satellite imagery + $20K/yr failed carbon program enrollment overhead = $95K/yr. Capture rate: $51K ÷ $95K = 54% of direct friction in steady state — but the FSMA audit trail alone ($60K displaced) justifies the AMP license independently.
- **Harvest-contingent payment terms:** offered on Y1 license; 50% due at spring deployment, 50% due post-harvest.

**3-yr TCO range (Tier 1 Small):** $60K–$150K

---

### Tier 2 — Mid: Regional cooperative or mid-scale corporate farm (5K–100K acres, $10–$200M revenue)

**Bundle:** AMP + AZOA + NEOS + Fractal Engine (full stack, cooperative-optimized).

**Worked example A — Regional Grain Cooperative (Tier 2, Co-op)**

- **Buyer:** 400-member grain cooperative in Iowa, 80,000 acres across members, $120M annual revenue. Technology estate: AgVend retail platform, SSI cooperative ERP, mixed FMIS across members. Scope 3 reporting required by Walmart grain sourcing program. EUDR soy exposure for EU export customers.
- **Scope:** AMP for member field spatial twin (offline-first for farm-edge members) + cooperative facility layer; AZOA connectors to AgVend + SSI + 3 FMIS platforms (Conservis, Traction Ag, John Deere Operations Center); NEOS for cooperative board governance + member-data sovereignty assurance + on-chain attestation that member data was not resold; Fractal for Scope 3 attribution per grain lot + EUDR plot-level geolocation + yield prediction.
- **Quote:**
  - AMP Mid: $140K/yr (12 cooperative facilities + member farm aggregate spatial layer)
  - AZOA Mid: $120K/yr (15 integrations: AgVend + SSI + 3 FMIS + 3 grain ticketing + carbon registry + 7 others; per-connector + base)
  - NEOS Mid: $60K/yr (5 councils: board + 4 regional member chapters)
  - Fractal Mid: $180K/yr (12 data sources: member yield histories, soil tests, weather stations, grain tickets, Scope 3 + EUDR model)
  - Full-stack bundle: -25% → $375K/yr license
  - Y1 services (~1.8x license blend, ag-weighted): $675K (Hex deployment SKU $550K + AgVend connector $80K + SSI connector $60K + FMIS connectors $90K, with bundle discounts; governance design workshop $45K)
  - Y1 upkeep (Silver SLA, 22%): $83K/yr (starts Y2)
  - Infra (mid cloud reference + edge nodes at 4 elevator sites): $8K/mo
- **Y1 total:** ~$1.15M · **3-yr TCO:** ~$2.8M
- **Friction-cost anchor:** $180K/yr current Scope 3 reporting consultant + $120K/yr EUDR compliance work begun + $200K/yr siloed FMIS subscriptions across members + $150K/yr integration maintenance = $650K/yr. Capture rate: $375K ÷ $650K = 58% of direct friction in Y2 steady state.

**Worked example B — Mid-Scale Corporate Farm (Tier 2, Corporate)**

- **Buyer:** Corporate row-crop operation, 40,000 acres across 6 farm units in the Midwest, $80M revenue. Lead agronomist controls field data access and vendor trial permissions. ESG lead requires Scope 3 reporting for parent company's annual report.
- **Scope:** AMP for farm-unit spatial twins (no cooperative governance needed); AZOA for ERP connector (NetSuite) + 2 FMIS platforms + soil sensor network ingest; Fractal for yield prediction + Scope 3 attribution + input-cost optimization models. NEOS lightweight (internal governance only, Bronze SLA).
- **Quote:**
  - AMP Mid: $95K/yr (6 farm units, per-site)
  - AZOA Small (high end): $55K/yr (8 integrations)
  - Fractal Mid: $140K/yr (8 data sources)
  - Triad bundle: -18% → $237K/yr license
  - Y1 services (~2.0x blend): $474K
  - Y1 upkeep (Silver SLA, 22%): $52K/yr (starts Y2)
  - Infra: $5K/mo
- **Y1 total:** ~$771K · **3-yr TCO:** ~$1.9M
- **Friction-cost anchor:** $220K/yr siloed technology spend + $180K/yr Scope 3 consultant + $80K/yr MRV program overhead = $480K/yr. Capture rate: $237K ÷ $480K = 49% of direct friction.

**3-yr TCO range (Tier 2 Mid):** $1.2M–$6M

---

### Tier 3 — Large: Ag input company, global trader, or national cooperative federation ($200M+ revenue)

**Bundle:** Full stack — all four layers — with multi-region rollout, cross-commodity intelligence, and regulatory compliance infrastructure (EUDR, Article 6, FSMA, CBAM).

**Worked example — National Cooperative Federation (Tier 3, Co-op)**

- **Buyer:** National grain cooperative federation with 12 regional member co-ops, 2M aggregate member acres, $3B combined revenue. Equivalent profile: CHS or GROWMARK federated entity. Technology: Cooperative Ventures portfolio FMIS, multiple ERP systems, existing Verra VM0042 carbon program under economic pressure from Dec 2024 fee revision.
- **Scope:** AMP federated spatial layer (all 12 regional co-ops, member farm aggregation, offline-first at farm edge); AZOA federation engine (50+ integrations: co-op ERPs, FMIS platforms, grain trading systems, carbon registries including Verra VCS + Article 6.4 national registries, EUDR EU traceability API); NEOS federated governance (12 regional councils + 1 national federation council; member-data sovereignty assurance at every tier; on-chain attestation for all data sharing events); Fractal cross-commodity SC intelligence (Scope 3 per grain lot + soy deforestation risk + carbon credit MRV signal generation + yield intelligence across all regions).
- **Quote:**
  - AMP Large: $600K/yr (federation + 12 regional spatial instances)
  - AZOA Large: $800K/yr (50+ integrations, federation engine, cross-registry connectors)
  - NEOS Large: $280K/yr (federated governance, 13 councils, 2M-acre attestation scope)
  - Fractal Large: $900K/yr (20+ sources, cross-commodity intelligence, real-time + archive)
  - Full-stack bundle: -25% → $1.935M/yr license
  - Y1 services (~1.7x license blend, federation-weighted): $3.3M (Tessellation deployment SKU low end $3.5M; blended with existing co-op infrastructure = $3.3M)
  - Y1 upkeep (Gold SLA, 25%): $484K/yr (starts Y2)
  - Infra (large cloud reference, multi-region + 30 edge nodes at elevator sites): $35K/mo
- **Y1 total:** ~$5.65M · **3-yr TCO:** ~$14.5M
- **Friction-cost anchor:** EUDR compliance program $3M–$8M/yr for EU soy/cattle exposure + current VM0042 carbon program admin $1.5M/yr under fee pressure + multi-co-op interop overhead $2M/yr + Scope 3 consultant and reporting $1M/yr = $7.5M–$12.5M/yr. Capture rate: $1.935M ÷ $10M (midpoint) = 19% value share — inside the 8–18% agriculture capture band (toward the high end, justified by EUDR regulatory tailwind and clear displacement of consultant spend).

**3-yr TCO range (Tier 3 Large):** $15M–$75M

---

## 4. Industry-specific procurement signals

**Decision-maker map by segment:**

| Segment | Primary decision authority | Critical influencer | Budget cycle |
|---------|--------------------------|--------------------|----|
| Cooperative | Member-elected board (risk-averse, consensus-driven) | General manager + lead agronomist | Annual (Oct–Mar board approval) |
| National co-op federation | CEO + CTO/CIO + technology committee | Cooperative Ventures portfolio team (CHS/GROWMARK gateway) | Annual + capital program cycles |
| Corporate farm (mid) | Ops manager + CFO | Lead agronomist — controls field data access and vendor trial permissions | Fiscal year-end planning |
| Ag input company (Bayer, AGCO, CNH) | CTO/CIO + divisional president | Digital ag product team | Quarterly operating review |
| MRV/carbon program | Sustainability director + CFO | Third-party verifier relationship | Carbon program enrollment windows |

**The agronomist is the critical influencer.** At mid-sized corporate farms and cooperative tech evaluations, the lead agronomist controls field data access and vendor trial permissions. No pilot proceeds without agronomist buy-in. Motions that bypass the agronomist and go straight to the CFO reliably stall in technical evaluation. The selling motion must engage the agronomist first, produce a one-season pilot with measurable yield or input-cost data, then use that evidence for board or executive escalation.

**Sales cycle timing:**

- Co-op enterprise software: 12–24 months board-approval cycle
- MRV/carbon program enrollment at scale: 18–36 months
- Corporate farm technology adoption: 9–18 months

**Planting-cycle awareness is non-negotiable.** Technology decisions in North American grain farming are made October through February for spring deployment. A pilot that starts in March cannot generate board-credible ROI evidence until the following harvest (October–November at earliest). The sales calendar must align to this rhythm: discovery and scoping in summer, proposal and board presentation in fall, contract signature by January, deployment by planting season.

**Buying triggers that accelerate the cycle:**

- EUDR compliance deadline pressure (December 30, 2026 for large operators)
- Walmart/Unilever/Nestlé Scope 3 supplier requirements with contractual deadlines
- USDA EQIP/CSP conservation program eligibility linked to digital record-keeping
- Article 6.4 carbon market launch creating premium credit pricing window
- Co-op member demand for input cost transparency (particularly fertilizer price tracking in CBAM-adjacent supply chains)

**Cooperative Ventures (CHS + GROWMARK) is the gateway to the cooperative segment.** Both organizations route technology investment through their $50M Cooperative Ventures fund. Vendor relationships typically begin with the Cooperative Ventures portfolio team before reaching operational buyers. A fund relationship is a prioritized channel entry point.

---

## 5. Rejection-risk mitigations

**Data sovereignty — PRIMARY BARRIER**

The risk: Farmers fear that precision data (field boundaries, yield maps, soil tests, application records) shared with large-platform vendors becomes competitive intelligence for input companies or grain traders. This is not irrational; multiple documented instances of data being shared with parent company commodity desks have been reported (Civil Eats, March 2026). Only 36% of smaller farms planned AI adoption vs 81% of large farms — the trust gap is structural.

The mitigation stack:
1. **Transparent data ownership terms** in the PFEL: customer data is exportable in machine-readable form at any time, non-negotiable.
2. **Farmer-owned data by contract:** no resale, no use beyond licensed scope, no sharing with parent entity (Bayer, Corteva) without explicit opt-in.
3. **On-chain attestation via NEOS:** every data-sharing event is signed and anchored on-chain, creating a verifiable record that data was not resold. This is the protocol-level sovereignty guarantee that contractual terms alone cannot provide.
4. **CC-NC dual-license signal:** NEOS ships under Creative Commons NonCommercial terms. The license itself communicates non-extractive intent to the cooperative and smallholder audience.
5. **Member council governance:** NEOS cooperative councils give farmer-members visibility and control over data governance policy — not just a vendor promise.

**Rural connectivity**

AMP's offline-first architecture is the mitigation. Intermittent-sync mode means field operations continue without cloud connectivity; synchronization occurs when connectivity is available (at the elevator, at the farm office, at the co-op facility). This is a hard architectural requirement; it must be demonstrated in the pilot, not promised in a slide deck.

**ROI per acre too thin**

At $200–$500/acre commodity crop margins, a $10–$15/acre software stack requires demonstrable 2–5% yield lift or input cost reduction just to break even. The mitigation is a Fractal Engine-powered quantified yield-lift model: Fractal establishes a pre-deployment baseline in the instrumentation phase (60 days), then tracks yield, input spend, and variable cost per acre against the baseline across one full growing season. The model produces a per-acre ROI number the agronomist can present to the board. This is not a case study — it is a buyer-specific measurement against buyer-specific baseline data.

**Broken farm-tech promises**

Nori (shutdown September 2024), multiple failed carbon programs, John Deere data lock-in controversies, and Bayer's years of financial losses on Climate Corporation have created deep market skepticism. The mitigation is verifiable third-party outcome evidence — not vendor case studies. Cite the Nori collapse explicitly as the failure mode PrimusNeo is designed to avoid: a platform that promised MRV at scale without verifiable attestation infrastructure collapsed when buyer scrutiny increased. Fractal + NEOS produce verifiable, on-chain-attested MRV outputs that a third-party verifier can independently confirm.

**Seasonal cash flow**

Farm operations are highly seasonal with cash concentrated post-harvest. Annual subscription billing misaligned to farm cash flow creates real friction. Standard mitigation: installment billing (50% at spring deployment / 50% post-harvest) or harvest-contingent payment terms. This materially improves conversion with small and mid operators. Large co-op and corporate farm buyers are less sensitive to this but appreciate the option as a signal that PrimusNeo understands the agricultural cash cycle.

---

## 6. Regulatory and compliance considerations

**EU Deforestation Regulation (EUDR)**
Covers soy, cattle, cocoa, coffee, palm oil, rubber, and wood. Large operators: compliance mandatory by December 30, 2026. Micro and small operators: June 30, 2027. Compliance requires plot-level geolocation for all covered commodities entering the EU market, plus due diligence documentation and a risk assessment system. For any US grain co-op or ag trader with EU soy, cattle, or commodity exposure, this is a hard deadline creating a procurement event. AZOA connectors to the EU EUDR traceability system and Fractal-generated deforestation risk scores per field directly satisfy the technical compliance requirement.

**Carbon Border Adjustment Mechanism (CBAM)**
Nitrogen fertilizer is in CBAM scope. Direct commodity crops are not yet included but remain under ongoing review; inclusion would fundamentally reshape ag supply chain economics. The indirect input-cost pressure from CBAM on nitrogen fertilizer creates demand for Fractal-powered fertilizer cost optimization and Scope 3 attribution models.

**USDA NIFA and FSMA**
The FSMA Produce Safety Rule's record-keeping, traceability, and food safety plan requirements are a direct buying trigger for AMP (field event log = FSMA audit trail) and AZOA (traceability connectors to FDA systems). The USDA NIFA Food Safety Outreach Program provides technical assistance funding to specialty crop producers — a grant funding pathway for small-tier engagements.

**Article 6 / Paris Agreement**
COP29 (November 2024) finalized remaining technical guidance. As of March 2025, 97 bilateral agreements across 59 countries are active. Article 6.4 UN carbon market launch expected 2025–2026. UN-endorsed credits are expected at premium pricing vs voluntary market credits — potentially re-energizing soil carbon MRV investment after the 2024 contraction. Fractal's MRV signal generation + NEOS on-chain attestation directly produces outputs that qualify for UN-endorsed credit issuance under Article 6.4 methodology, rather than the weakened voluntary market standards that drove the 2024 collapse.

**Verra VM0042 and Gold Standard**
VM0042 v2.0 (active May 2023) is the primary compliance pathway for row-crop carbon. The December 2024 Verra fee revision ($5,000 upfront per verification review + per-credit issuance fees) squeezes developer economics at low credit prices — which is why Fractal's Boomitra-class cost reduction (below $10/acre at scale vs $50–$100/acre traditional soil sampling) is the economic enabling factor, not a nice-to-have. Gold Standard co-benefit documentation requirements add cost but serve premium buyer segments willing to pay above-market for co-benefit-verified credits.

**NEOS + Fractal attestation path:** A NEOS-attested governance event (the farmer's data-sharing consent and program enrollment) combined with Fractal's satellite-ML MRV signal generates the complete evidentiary package for both Article 6.4 submission and Verra VM0042 issuance. This is the two-layer combination that directly satisfies both regulatory regimes.

---

## 7. Steward and service partner notes

**Layer stewards:**

| Layer | Steward | Agriculture-specific role |
|-------|---------|--------------------------|
| AMP | PLAN Systems | Field and farm spatial environment buildout; offline-first edge architecture; farm-site per-site licensing mechanic |
| NEOS | OmniOne / Green Earth Vision | Cooperative governance design using ETHOS methodology; member-data sovereignty charter authoring; CC-NC license positioning |
| AZOA | AZOA | AgVend, SSI, Agris, FMIS connectors; carbon registry connectors (Verra VCS, Gold Standard, Article 6.4); EUDR traceability API connector |
| Fractal Engine | Escherbridge | Yield prediction models; Scope 3 carbon attribution; MRV signal generation; EUDR deforestation risk models; analytics depth per Indigo Ag / Microsoft 2.85M tCO2e precedent |

**SI channel:**

- **McKinsey ACRE practice** ($350K–$2M engagements): Strategic ag-digital transformation engagements at large input companies and national co-op federations. ACRE has the relationships with Bayer, AGCO, and CHS senior leadership. Route large Tier-3 opportunities through ACRE-introduced deals.
- **AGCO Digital Solutions** ($150–$300/hr dealer-delivered): AGCO's dealer channel is embedded with mid-scale corporate farm operators who already have AGCO equipment relationships. Natural mid-tier co-sell for AMP + Fractal deployments in AGCO-fleet operations.
- **ADM Outcomes** ($500K–$3M per engagement): Multi-year regenerative ag transition and Scope 3 advisory engagements. ADM Outcomes is the implementation partner for large-scale carbon and sustainability programs — a natural steward for MRV-heavy Fractal deployments.

**Cooperative Ventures (CHS + GROWMARK) as channel gateway:** Both organizations channel technology investment through their $50M Cooperative Ventures joint VC fund. Traction Ag's $10M Series A (May 2024) led by Cooperative Ventures signals which FMIS platforms are on the co-op shortlist — and demonstrates that the fund team is actively influencing technology decisions across both organizations' operational buyer networks. A fund-level relationship unlocks the cooperative segment more reliably than any direct-to-board sales motion.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Agriculture engagement model |
