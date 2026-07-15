# Logistics — Engagement Model

> **Vertical:** Logistics (freight forwarders, 3PLs, shipping lines, port operators, last-mile, warehouse, supply chain control towers)
> **Research brief:** [`../research/logistics.md`](../research/logistics.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The Friction-Cost Anchor

Logistics technology costs are a useful fiction. Published list prices mask the total friction: failed consortium bets, integration debt, and compliance liability that compound into a per-buyer friction window large enough to make PrimusNeo's value capture defensible at every tier.

**TMS ($400K–$3M/yr enterprise).** Oracle OTM runs ~$450/user/month; enterprise TCV commonly $400K–$2M/yr. SAP TM embedded in S/4HANA estates reaches $500K–$3M/yr before implementation, which Blue Yonder alone prices at $1M–$5M. For freight forwarders, CargoWise has become the de facto operating system at **$6–$10/shipment** bundled — a per-shipment anchor that calibrates AZOA conversations at every tier.

**Visibility platforms ($100K–$1M+/yr).** project44 platform fees run $150K–$600K/yr mid-market, $1M+ at enterprise; FourKites $100K–$500K/yr. Shippers paying $300K+/yr for a visibility point solution arrive at PrimusNeo conversations already aware they're paying for fragmented intelligence.

**WMS ($500K–$3M Y1 large; $150K–$500K mid).** Manhattan Active WMS at $2,000/user/yr quickly reaches $1.5M–$4M/yr for enterprise DC estates. Blue Yonder is comparable. Ongoing costs run $150K–$500K/yr after implementation.

**Port/terminal OS ($300K–$1.5M/yr mid-size terminal).** Navis N4-as-a-Service occupies this band; Octopi (lower-tier Navis) runs $50K–$200K/yr for simpler terminals. Awake.AI and Portchain target AI planning overlays with custom pricing.

**TradeLens: the canonical failure.** The November 2022 shutdown of the IBM/Maersk TradeLens consortium represents $1B+ of collectively lost value across four years. The failure was not technical — it was governance. Maersk's perceived ownership meant MSC, CMA CGM, and Evergreen never joined; Asian carriers cited governance concerns and never trusted the platform. This is the shadow every logistics network play must address head-on.

**Per-buyer friction window (worked):** A national 3PL paying $200K/yr to a TMS, $150K/yr to a visibility platform, $300K/yr to a WMS, and carrying $500K/yr in EU CBAM compliance costs (effective Jan 2026) faces a $1.15M/yr coordination and compliance cost baseline before any consortium ambition. A port operator running 8 terminals — already burned by TradeLens — faces $3M–$8M/yr in visibility-spend, customs-integration, and carrier-SLA-friction across its network. These windows establish the capture band.

**PrimusNeo capture band: 10–20% of consolidated platform spend** (per the pricing model). At $1.15M/yr friction, a mid-tier target is $115K–$230K/yr in defensible license capture — well inside the Mid-tier pricing anchor.

---

## 2. PrimusNeo Positioning Per Layer in Logistics

The framing per layer must be precise because logistics buyers will compare against existing point solutions and will ask exactly where PrimusNeo fits or displaces.

### AMP — Port/Terminal/Yard Spatial Twin + Control Tower
AMP is the **terminal-and-yard spatial twin that Navis N4 describes in static data but cannot render as a live operational scene**. For port operators, last-mile depot managers, and warehouse control towers, AMP provides the navigable spatial layer that ties vessel positions, crane allocations, yard slot state, inbound rail manifests, and truck gate queues into a single scene that ops teams can actually work from. AMP's offline-first architecture matters for port edge cases (spotty connectivity on the quay, terminal edge nodes, cold-store environments). The pitch to a CSCO at a port operator: "AMP is the terminal-and-yard spatial twin — Navis N4-adjacent but vendor-neutral, and it runs on the dock."

### NEOS — Cross-Org Consortium Governance + the TradeLens Answer
NEOS is **the explicit, deployable answer to the question every logistics consortium must now answer before signing**: "Who owns the network?" The answer is nobody, or rather, the council does — and the council is governed by a NEOS charter that no single carrier, 3PL, or port operator controls. NEOS enforces SLA agreements, dispute resolution workflows, data-sharing policies, and contribution accounting across the consortium, with every governance event signed, anchored, and replayable. DCSA, GS1, and OpenAPI alignment is built in from day one, not retrofitted after the governance crisis.

The NEOS pitch in the carrier-shipper-3PL triangle: "No single party owns the network. You don't trust Maersk to run TradeLens. You shouldn't. NEOS governance means the charter owns the network — and the charter is yours, collectively, on day one."

### AZOA — Carrier-Shipper-3PL Integration Fabric
AZOA is the **governance-neutral integration layer the entire carrier-shipper-3PL triangle runs across**. Its critical differentiator in logistics is coverage depth: AZOA uniquely spans Web2 TMS/WMS/ERP connectors AND Web3 chain interop AND identity/SSI credentials AND IoT/device ingest under one API surface. No incumbent iPaaS (MuleSoft, Boomi, Workato) covers the Web3 + identity + IoT surface. project44 and FourKites cover the carrier-integration surface but not governance or cross-org data fabric.

Pricing mechanic: per-connector + base platform fee (default) or per-API-call/per-integration-event metered overage ($0.001–$0.05/call at volume). The CargoWise $6–$10/shipment anchor calibrates per-shipment equivalence for AZOA conversations with freight forwarders.

For the EU Maritime Single Window (effective 2025, per IMO FAL and EU regulation), AZOA is the port-operator and shipping-line integration play: pre-arrival data, port clearance, customs Single Window — all flowing through AZOA connectors rather than bespoke EDI integrations.

### Fractal Engine — Predictive ETA + Emissions Optimization + Demand Sensing
Fractal is the **operating intelligence layer** that converts raw AMP spatial events and AZOA integration events into predictions that inform actual decisions. Three use cases anchor the logistics pitch:

1. **IMO CII compliance and voyage optimization.** Vessels rated D or E for three consecutive years face mandatory corrective action. CII tightens ~2%/yr through 2026. Fractal's voyage optimization model — fed by AMP spatial data and AZOA carrier/weather/port-call feeds — produces slow-steaming recommendations and route alternatives that close the CII gap before the next annual reporting window.

2. **EU ETS emissions cost reduction.** At €60–70/tonne CO₂, large carriers face tens of millions of euros per year in ETS compliance from 2024. AMP-informed route and speed optimization, quantified by Fractal, converts into direct cost avoidance — the kind of CFO-legible ROI that unlocks budget in Q3–Q4 planning cycles.

3. **Demand sensing and ETA prediction across the global network.** Fractal aggregates multi-carrier, multi-3PL, multi-port data (via AZOA ingest) into network-wide ETA predictions and demand signals that individual participants cannot produce from their own data alone. The data-value-exchange mechanic — carriers contribute raw feeds, receive aggregate benchmarking in return — is how Fractal addresses the carrier-data-hoarding rejection risk.

**AZOA + NEOS is the consortium-savior duo.** Neither alone solves the TradeLens problem. AZOA provides the integration fabric so data flows; NEOS provides the governance layer so the terms of that flow are trusted. Together, they are what TradeLens needed and didn't have.

---

## 3. Engagement Tiers — Small / Mid / Large

### Small: Regional 3PL / Freight Forwarder (<$50M revenue)

**Profile:** Regional freight forwarder or 3PL running CargoWise or a legacy TMS, handling 5K–50K shipments/yr, small compliance and IT team, 1–3 warehouse or depot sites.

**Current 3-yr TCO:** $120K–$400K (CargoWise subscription, EDI middleware, manual compliance, spreadsheet-based reporting).

**PrimusNeo bundle:** AZOA Small (TMS/customs connectors, <10 integrations) + Fractal Small (shipment ETA model, emissions reporting for CBAM, <5 data sources).

**Worked quote:**
- AZOA Small: $40K/yr (8 integrations: CargoWise + customs authority + 3 carrier APIs + 2 shipper portals + 1 IoT tracker feed)
- Fractal Small: $45K/yr (4 data sources: shipment feed, carrier API, customs data, emissions reference data)
- Duet bundle: -10% → $76K/yr license
- Y1 services (~2.3x AZOA-weighted blend): $175K (connector buildout: TMS $80K, customs $60K, ontology mapping $35K)
- Y1 upkeep (Silver SLA, 22%): starts Y2 at $17K
- Infra: $1,500/mo

**Y1 total: ~$270K — 3-yr TCV: ~$480K**

**Friction anchor:** CargoWise at $8/shipment × 20K shipments/yr = $160K/yr + manual compliance FTE at $80K/yr = $240K/yr direct. Capture: $76K ÷ $240K = **32% value share** on direct displacement — aggressive, defended by the combined displacement of manual compliance + carrier EDI middleware. If the buyer retains CargoWise, frame AZOA as the enrichment layer (+ EU CBAM readiness, + ETA prediction) at 32% of the cost being displaced.

**PrimusNeo target:** $60K–$180K/yr; **3-yr TCV $180K–$540K** (per research brief).

---

### Mid: National 3PL ($50–500M) / Port Operator

**Profile:** National 3PL with regional DC network (5–10 sites), or a port operator running 3–8 terminals with cross-carrier, rail, and customs coordination needs. Existing stack: TMS, WMS, point visibility platform, legacy EDI, manual customs. EU CBAM exposure growing.

**Current 3-yr TCO:** $1.5M–$6M (TMS $600K–$2M, WMS $500K–$1.5M, visibility $300K–$900K, customs middleware $200K–$600K, IT/integration overhead).

**PrimusNeo bundle:** AZOA Mid + NEOS Mid + Fractal Mid (Triad). Port operator variant replaces Fractal with AMP Mid for terminal spatial twin.

**Worked quote (national 3PL variant):**
- AZOA Mid: $160K/yr (20 integrations: TMS + WMS + 8 carrier APIs + 3 shipper portals + CBAM data + customs + 3 internal)
- NEOS Mid: $55K/yr (3 councils: carrier SLA council, data-sharing council, compliance council)
- Fractal Mid: $180K/yr (12 data sources, network-wide ETA model + CBAM emissions reporting)
- Triad bundle: -18% → $323K/yr license
- Y1 services (~2.0x blend): $646K (TMS connector $120K, WMS $100K, carrier connectors $200K, ontology $80K, governance design $35K, dashboards $60K + others)
- Y1 upkeep (Silver SLA, 22%): starts Y2 at $71K
- Infra: $8K/mo

**Y1 total: ~$1.06M — 3-yr TCV: ~$2.1M**

**Friction anchor:** TMS $900K + WMS $750K + visibility $400K + CBAM compliance cost $400K–$1.5M (definitive Jan 2026) = $2.45M–$3.55M/yr mid-range. Capture: $323K ÷ $3M = **~11% value share** — inside the 10–20% logistics band.

**Port operator variant (AZOA+NEOS canonical example, per `layers/oas.md §7.2`):** AZOA Large $720K/yr + NEOS Large $220K/yr, Duet -10% → $846K/yr license. Y1 services ~2.2x: $1.86M. 3-yr TCO $6.5M–$8M. Friction anchor: TradeLens collective loss precedent + $3M–$8M/yr standing visibility + compliance friction. Capture: 17% value share.

**PrimusNeo target:** $300K–$900K/yr; **3-yr TCV $900K–$2.7M** (per research brief).

---

### Large: Top-20 Ocean Carrier / Top-5 3PL / Global Integrator

**Profile:** Tier-1 ocean carrier (Maersk, MSC, CMA CGM, Evergreen, Hapag-Lloyd) or top-5 3PL (DHL Supply Chain, Kuehne+Nagel, DB Schenker, XPO, CEVA) or global integrator (FedEx, UPS). Existing stack: proprietary TMS, WMS, visibility, and often internally built platform capabilities. EU ETS exposure: tens of millions of euros/yr. CSCO procurement cycle 9–18 months.

**Current 3-yr TCO:** $15M–$80M+ globally (TMS, WMS, visibility, customs, IT integration, internal-build programs).

**PrimusNeo bundle:** Full Stack (AMP Large + NEOS Large + AZOA Large + Fractal Large). Paid pilot ($250K–$500K) precedes full rollout.

**Worked quote (top-20 carrier — Full Stack):**
- AMP Large: $600K/yr (port/terminal spatial twins across 6 primary hub terminals + control tower)
- NEOS Large: $260K/yr (cross-carrier consortium governance: SLA, dispute resolution, data-sharing, eBL attestation councils)
- AZOA Large: $800K/yr (60+ integrations: Navis N4, customs single-window, 15 carrier APIs, rail carriers, IoT vessel/container tracking, CBAM declarant flows)
- Fractal Large: $900K/yr (20+ data sources: vessel telemetry, port-call data, weather, ETS pricing, customs, carrier network; CII optimization + EU ETS cost modeling + demand sensing)
- Full Stack bundle: -25% → $1.92M/yr license
- Paid pilot (Y0): $350K (Atom + connector audit, 90-day, credits to Y1 services)
- Y1 services (~2.0x blend, minus pilot credit): $3.49M
- Y1 upkeep (Gold SLA, 25%): $480K (starts Y2)
- Infra: $400K–$900K/yr

**Y1 total: ~$5.8M–$6.3M (including pilot) — 3-yr TCV: ~$10M–$14M**

**Friction anchor:** EU ETS compliance at €65/tonne for a 100-vessel fleet running 2M TEUs/yr → $30M–$80M/yr ETS liability. CII corrective action plans at D/E-rated vessels: $500K–$5M per vessel-class remediation. TradeLens-pattern internal build programs: $50M–$200M sunk in failed or stalled digital platforms. Combined friction window: $50M–$150M/yr. Capture: $1.92M ÷ $100M = **~2% value share** — conservative by design at this scale; the pilot ROI story (3-month CII optimization + EU ETS avoidance demo) does the commercial work before the full commitment.

**Co-sell/embed motion for internally built platforms** (Maersk Captain, CMA CGM CEVA, MSC One, DHL myDHLi, UPS): white-label Fractal Engine for network intelligence, or AZOA as the cross-platform integration fabric behind the carrier's own consumer-facing product. This is not displacement; it's a revenue-share embed.

**PrimusNeo target:** $1.5M–$5M+/yr; **3-yr TCV $4.5M–$15M** (per research brief).

---

## 4. Industry-Specific Procurement Signals

**Buyers and cycles:**

| Buyer | Cycle | Agenda |
|-------|-------|--------|
| CSCO / CPO | 9–18 months (large) | 2024/2025 agenda: resilience + tech ROI + sustainability. TradeLens hangover: governance neutrality is table stakes before any cross-org network conversation. EU ETS + CBAM as hard financial drivers. |
| COO / Head of Network Ops | 6–12 months (mid) | Operational pain: visibility gaps, carrier SLA disputes, customs delays. Responds to demonstrated friction-cost math and peer-operator reference. |
| CTO / VP Engineering | Integration veto | AZOA connector library depth and pre-built TMS/WMS integrations are the technical proof-point. Publish connector library for top-5 TMS + top-5 WMS before enterprise sales scale. |
| Head of Trade Compliance / VP Customs | 3–9 months (specific tooling) | NEOS + AZOA for 21CCF-compliant data flows. EU CBAM declarant workflows (definitive Jan 2026). EU Maritime Single Window (2025 mandate). Responds to concrete compliance-gap analysis. |

**Carrier-shipper-3PL triangle dynamic:** No single party controls the network. Carriers own vessel and container position data; 3PLs own last-mile and warehouse data; shippers own cargo and purchase-order data. TradeLens failed because Maersk tried to be the hub in a network where its competitors were the spokes. PrimusNeo's answer is structural: NEOS governance is charter-owned from day one; AZOA is the neutral integration fabric; no party sees competitor raw data — only what the charter permits.

**Entry motion:** The NEOS + AZOA consortium-savior framing wins the first conversation with a CSCO burned by TradeLens. The CII/ETS Fractal use case wins the CFO's attention. AMP terminal spatial twin wins the COO's curiosity. Run them in parallel during the discovery sprint.

**RFP cycles:** Top-20 carriers and top-5 3PLs run formal tech RFPs annually or biannually, typically Q1 for budget alignment. Target Q3–Q4 budget season conversations to be on the shortlist before the Q1 RFP issues.

---

## 5. Rejection-Risk Mitigations

**Consortium fatigue (TradeLens precedent):** This is the dominant rejection risk in any cross-org logistics play. Mitigation is structural, not rhetorical: NEOS governance neutrality must be demonstrable — no single carrier may access competitor data; charter terms are cryptographically enforced, not contractually promised; DCSA/GS1/OpenAPI alignment is documented and published before the first enterprise sales conversation, not promised as a roadmap item. The correct objection-handler is not a slide — it is a signed reference charter with a neutral third-party port operator or freight association as the founding council steward.

**Legacy TMS/WMS integration complexity:** Oracle OTM, SAP TM, Manhattan, Blue Yonder implementations at large accounts are deeply customized. The only credible response is a published AZOA connector library for the top-5 TMS (OTM, SAP TM, Blue Yonder, MercuryGate, JDA/BluJay) and top-5 WMS (Manhattan, Blue Yonder, Körber, SAP EWM, Infor WMS) — certified, maintained, and demonstrable in a 30-day pilot window. This must exist before enterprise sales scale, not be built during each enterprise deal.

**Carrier data hoarding:** Ocean carriers treat real-time vessel and container position as competitive. project44 and FourKites spent years building carrier network agreements with persistent gaps. PrimusNeo's route is a data-value-exchange model: carriers contribute raw feeds via AZOA connectors; Fractal aggregates across the network and returns benchmarking intelligence (CII performance vs peer fleet, ETA accuracy vs port benchmarks, EU ETS cost-avoidance modeling) that no individual carrier can produce from its own data. This is the model that converts a competitive instinct into a network participation incentive.

**Overlap with existing visibility spend:** A shipper or 3PL paying $400K/yr to project44 or FourKites is not going to add another layer on top. The conversation must position AZOA + Fractal as a superset (spatial context from AMP + governance from NEOS + intelligence from Fractal) that either displaces the point solution or absorbs it via an AZOA connector, making the total cost comparable while expanding the value surface. Displacement is the preferred outcome; augmentation is the fallback.

**"We built it ourselves" at top carriers:** Maersk (Captain Peter), CMA CGM (CEVA), MSC (MSC One), DHL (myDHLi), UPS — all have internal platforms. The motion here is co-sell or embed, not displacement. White-label Fractal Engine network intelligence behind the carrier's own product; offer AZOA as the cross-platform fabric for carrier-to-shipper or carrier-to-3PL integrations that the carrier's internal team doesn't want to build. Revenue-share embed agreements are more likely to succeed than head-on displacement conversations at these names.

---

## 6. Regulatory + Compliance Considerations

**IMO CII / EEXI (in force January 2023).** Vessels of 5,000 GT and above must calculate and report their Carbon Intensity Indicator annually. A D rating for three consecutive years or an E rating triggers a mandatory corrective action plan. CII tightens approximately 2% per year through 2026. This is a direct Fractal Engine voyage-optimization use case: model slow-steaming alternatives, route options, and port-call sequences against CII targets, and surface the optimal decision in real time via the AMP control tower.

**EU ETS — Maritime (2024 onward).** The EU Emissions Trading System now covers 100% of intra-EU voyages and 50% of extra-EU voyages calling EU ports. At approximately €60–70 per tonne of CO₂, compliance costs reach tens of millions of euros per year for large carriers. This is the hardest financial pressure in maritime logistics today and the most compelling entry point for a Fractal + AMP ROI conversation with a CFO or sustainability officer.

**EU CBAM (definitive phase January 2026).** The Carbon Border Adjustment Mechanism in its definitive phase requires authorized declarants for covered goods (steel, aluminium, cement, fertilizers, electricity, hydrogen) to purchase CBAM certificates tied to the EU ETS price. This creates new documentation workflows, customs classification requirements, and supplier carbon-data collection needs — all addressable by NEOS (governance of declarant workflows) and AZOA (customs and supplier data integration). National 3PLs and freight forwarders handling covered commodities must be CBAM-ready; this is a procurement trigger for the mid tier from mid-2025 onward.

**US 21st Century Customs Framework (21CCF).** Mandatory e-record-keeping, expanded supply chain data sharing requirements, and ACE 2.0 are in progress. Customs brokers face breach reporting obligations. AZOA is positioned for 21CCF-compliant data flows: structured, auditable, machine-readable customs data pipelines that satisfy expanded reporting requirements without bespoke broker-by-broker integration.

**Single Window Mandates — IMO FAL + EU Maritime Single Window (2025).** Both frameworks require pre-arrival and port clearance data submission via national single-window systems. AZOA port-operator and shipping-line integration is the direct play: standardized pre-arrival data, port state control submissions, and departure manifests flowing through AZOA connectors into the national single-window, displacing the current patchwork of EDI, email, and portal submissions.

**DCSA / BIMCO eBL target (100% by 2030).** The digital bill of lading sector is in pre-consolidation. WaveBL, CargoX, essDOCS, and Bolero operate at varying scales; TradeLens' eBL function died with the platform. NEOS governance event anchoring provides a path to DCSA-aligned eBL attestation without requiring a new platform — the eBL event is a NEOS-signed, AZOA-transported document that any party in the charter network can verify.

---

## 7. Steward + Service Partner Notes

**PLAN Systems (AMP steward, 15% royalty on AMP license).** PLAN delivers AMP terminal/yard spatial environment buildouts — the specialized 3D scene authoring, Navis N4 data ingest, crane/berth asset modeling, and IoT binding that logistics spatial twins require. PLAN is the primary subcontract channel for AMP deployment services in logistics; their domain expertise in operational spatial environments is not replicable by a generalist SI in a short engagement window.

**OmniOne (NEOS steward, 18% royalty on NEOS license).** OmniOne brings the ETHOS governance-design methodology — the specific intellectual work of structuring a carrier-shipper-3PL consortium charter that no single party controls. The TradeLens-failure answer is not a product feature; it is a governance-design capability. OmniOne's ETHOS method is the delivery vehicle for that capability. Every mid and large logistics consortium engagement should open with an OmniOne ETHOS workshop ($35K–$60K) as the first SOW line.

**AZOA (AZOA steward, 15% royalty on AZOA license).** AZOA's integration depth is the commercial value. Their connector authors are the fastest path to certified TMS/WMS/customs integrations. The pre-built connector library for top-5 TMS and top-5 WMS — built and maintained by AZOA — is the technical proof-point that displaces the "integration complexity" rejection. AZOA integration engineers ($2,200/day) should be staffed on every mid and large AZOA engagement in logistics.

**Escherbridge (Fractal Engine steward, 18% royalty on Fractal license).** Escherbridge delivers Fractal ETA prediction, CII optimization, and EU ETS cost-modeling — the three Fractal use cases that anchor the logistics pitch. Their ML engineers ($2,800/day) build the voyage optimization models; their public corpus provides the pre-training base for network-level benchmarking. Escherbridge is the primary delivery partner for any Fractal engagement where predictive logistics and emissions analytics are the primary use cases.

**SI channel:**

| Firm | Relevant practice | Day rate (USD) | Note |
|------|------------------|----------------|------|
| Accenture SC&O | Supply chain digital transformation, TMS/WMS implementation | Analyst $1,500–$2,000; Manager $2,500–$3,500; Partner $5,000–$8,000 | Preferred SI for large-carrier and top-5-3PL engagements; Accenture has carrier relationships PrimusNeo does not yet have |
| Deloitte SC | Strategy + digital transformation, sustainability | Manager $2,500–$3,500; Partner $5,500–$8,500 | Strong on CSCO advisory and regulatory compliance framing (CBAM, ETS) |
| BCG / McKinsey Logistics | Pure strategy, network optimization | BCG Associate $2K–$3K, Partner $8K–$12K; McKinsey EM $6K–$9K, Senior Partner $10K–$15K+ | Engage for the friction-cost math validation; their imprimatur on the ROI model unlocks CSCO sign-off |
| GEP | Procurement + SC managed services | $1,500–$4,000 | Mid-market 3PL channel; strong CPO relationships |
| Maersk Consulting | Logistics-specific advisory | $2,000–$5,000 | Ex-Maersk operators; carrier-negotiation credibility; paradoxically credible precisely because they know where TradeLens failed |

Comprehensive SC transformation programs with these firms run $250K–$2M+ for 3–6 month engagements and typically precede or accompany a PrimusNeo platform decision at the large tier. Position PrimusNeo as the platform the SI's transformation strategy runs on.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Logistics engagement model |
