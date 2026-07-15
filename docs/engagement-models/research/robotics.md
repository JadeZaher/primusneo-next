# PrimusNeo — Robotics Vertical: Market Research Brief

> **Status:** Draft — internal research anchor. Sourced ranges, not quotes.
> **Scope:** Industrial robotics, AMRs, humanoids, drones, surgical robotics, agricultural robotics, fleet/RaaS.

---

## 1. Comparable Vendor Pricing

### Robot OS / Middleware

| Vendor | Model | Price |
|--------|-------|-------|
| ROS 2 / Open Robotics | OSS, community-supported | Free |
| NVIDIA Isaac ROS | OSS packages on NGC; fleet mgmt via VDA5050 | Free (GPU cloud ~$3–$6/hr AWS G6e L40S) |
| Foxglove Studio | Free (3 users) / Starter $18/user/mo / Team $42/user/mo / Enterprise | **$90+/user/mo** enterprise |
| Formant | Free tier early-stage; data-vol at scale | Quote-based; expensive at high telemetry vol |
| Microsoft (ROS on Windows / Azure) | Azure cloud pass-through | Compute cost only |

**Isaac Sim** free for dev; production GPU cloud cost on EC2 G6e applies. **AWS RoboMaker deprecated for new customers Sept 2025** — teams migrate to AWS Batch or direct Isaac Sim on EC2.

### Fleet Management

| Vendor | Pricing |
|--------|---------|
| InOrbit | **~$500/robot/month** (PAYG, high-water mark); volume discounts on annual commits; Enterprise custom |
| Freedom Robotics | SMB fleets (10–20 robots); quote-based |
| Formant | Free tier → quote-based at scale; data-egress cliff |
| Anyware Robotics | Quote-based; OEM embedded licensing |

Industry range: **$50–$500/robot/month** depending on telemetry vol, modules, SLA.

### Simulation / Digital Twin

- **NVIDIA Isaac Sim:** Free software; GPU cloud $3–$10/hr per instance on EC2 G6e
- **Gazebo:** OSS, free
- **AWS RoboMaker:** deprecated Sept 2025 for new customers
- **CoppeliaSim:** free educational; Pro ~$1,500/seat/yr
- **Microsoft Project Bonsai:** Azure pass-through

### Robotics-as-a-Service (RaaS)

| Vendor | Segment | Pricing |
|--------|---------|---------|
| **Knightscope K5** | Security/patrol | ~$11/hr; **$60K–$70K/robot/year** annual contract (vs $35–$85/hr human guard) |
| **Locus Robotics** | Warehouse AMR | **$2,000–$4,000/robot/month** all-in RaaS (hw, sw, support, optimization); 2–3x picks/hr uplift |
| **Cobalt Robotics** | Security/facility | Hourly RaaS; robot + remote operator bundle; quote-based |

RaaS market: 25.52% CAGR through 2034; projected $125B.

### Safety / Certification

- **ISO 10218-1:2025 / -2:2025** (industrial): Cert via TUV Rheinland / Intertek / UL; **7–12 mo timeline**; **$50K–$200K+** for full cell certification incl engineering hours
- **ISO 13482:2014** (personal care / service): notified body engagement required for EU market
- **RIA TR R15.806** (US HRC): Technical report, no cert body; internal compliance cost
- **Riskbench / safety SW tooling:** Boutique; $10K–$50K/yr SaaS

### Computer Vision / Perception

| Vendor | Pricing |
|--------|---------|
| Roboflow | Free (public) / Core $79/mo / Enterprise custom |
| Scale AI | Self-serve $0.02/image, $0.06/annotation; Enterprise **$93K–$400K+/yr** (~$93K avg contract) |
| Encord | Custom enterprise (regulated + multimodal); SOC2/HIPAA; raised $60M (2025) |

---

## 2. Engagement Scale Tiers — 3-Year TCO for Coordination/Intelligence Layer

### Small: <10 Robots, Single Facility, Startup/Integrator
Current fleet mgmt: $0–$5K/mo (free tier or entry InOrbit). Pain: no mission-level coordination, no governance, no cross-system telemetry.
**PrimusNeo 3-yr TCO: $120K–$300K** · Y1 $60K–$120K (integration + deployment + first license year), Y2–3 $30K–$90K/yr. Primary layers: AZOA (interop to ROS/proprietary) + Fractal (telemetry/analytics).

### Mid: 50–500 Robots, Multi-Site, Mid-Size Integrator/OEM
Current spend: InOrbit/Formant $25K–$250K/yr; custom SI $200K–$800K. Pain: heterogeneous vendors, multi-site dispatch, safety audit readiness, fleet analytics.
**PrimusNeo 3-yr TCO: $750K–$2.5M** · AMP (spatial across sites) + NEOS (fleet governance, SLA councils) + AZOA (vendor-neutral API) + Fractal (predictive maintenance). Services: $250K–$600K integration; $150K–$400K/yr upkeep. Displaces 2–4 point solutions ($50K–$500K/yr combined).

### Large: 1,000+ Robots, Global OEM / National Logistics Fleet
Reference class: ABB, FANUC, KUKA, Boston Dynamics, Symbotic. Current: proprietary OEM fleet sw + SI ($1M–$5M+/yr); custom twin $500K–$3M. Pain: cross-vendor fleet interop, global compliance (EU AI Act, ISO 10218, FDA/FAA overlay).
**PrimusNeo 3-yr TCO: $3M–$12M** · All four layers; multi-tenant spatial OS; governance councils per site/region; AZOA federation; Fractal with custom model retraining. Services: $800K–$2M integration; $500K–$1.5M/yr upkeep + infra. Benchmark: NVIDIA/ABB twin programs run $2M–$8M/yr SW + SI.

---

## 3. Services Rates

| Service Type | Rate |
|--------------|------|
| Robotics SI firm (boutique US) | $150–$275/hr specialist; $100–$175/hr mid-level |
| NVIDIA partner (Isaac/Omniverse certified) | $200–$350/hr; fixed-scope projects $250K–$2M |
| AWS partner (RoboMaker→Batch/Isaac migration) | $150–$250/hr; projects $100K–$500K |
| PrimusNeo customization (Fractal model + twin schema) | $1,500–$2,500/day T&M or fixed-scope |
| PrimusNeo integration (AZOA connector per robot vendor) | **$25K–$80K per connector** fixed-fee |
| PrimusNeo deployment (per site) | $40K–$150K depending on site complexity |
| Sustained upkeep | 18–22% of annual license value |

---

## 4. Pricing Mechanics

Robotics responds to five mechanics:

1. **Per-robot/month SaaS** — dominant for fleet mgmt + RaaS overlays. Industry $50–$500/robot/mo software; $2K–$5K/robot/mo full RaaS. PrimusNeo positions **$200–$800/robot/mo** for coordination/intelligence layer (depending on Fractal depth + AZOA connector count).
2. **Per-mission / per-task** — emerging for logistics AMRs (cost/pick, cost/delivery). PrimusNeo can meter Fractal inference + AZOA API calls at $0.002–$0.01/mission event.
3. **Enterprise flat annual license** — preferred OEMs/Tier-1 integrators for predictability. PrimusNeo offers this for 500+ robot deployments with per-robot-per-yr floor.
4. **RaaS revenue share** — Knightscope/Cobalt model. PrimusNeo participates as platform partner (**3–8% of operator RaaS revenue**) where coordination layer is embedded in partner's offering.
5. **Per-site SLA** — construction, ag, surgical. NEOS governance councils map to per-facility accountability.

---

## 5. Regulatory Overlay

| Standard / Regulation | Scope | Implication |
|-----------------------|-------|-------------|
| **ISO 10218-1:2025 / -2:2025** | Industrial robots + cells | AMP must support safety-zone geofencing; Fractal audit logs cert-ready |
| **ISO 13482:2014** | Personal care / service robots (humanoids) | NEOS supports hazard accountability traceability |
| **EU AI Act (2024, enforcement 2026)** | High-risk AI in robots near humans | Fractal classified as "AI system" under Annex III; requires conformity assessment, logging, human oversight |
| **FAA Part 107** | Commercial UAS <25kg (US) | $175 knowledge test + $5/drone registration; 90–120 day waiver. AZOA must support UTM API integration |
| **FDA 510(k)** | Surgical robotics (Class II) | $6,084–$24,335 FDA fee + $20K–$30K consulting; 142-day median review. Fractal as data layer must meet SaMD if processing clinical decision data |
| **RIA TR R15.806** | Human-robot collaboration (US) | Internal compliance. Fractal risk signals support HRC safety documentation |

Any deployment touching surgical, cobot HRC, or drone fleet requires a **regulatory posture document** as engagement deliverable. **Deal gate, not nice-to-have.**

---

## 6. Procurement Signals

| Title | Authority | Entry Point |
|-------|-----------|-------------|
| **VP Robotics / Head of Automation** | Technical champion; fleet roadmap | AZOA interop demo + Fractal predictive maintenance ROI |
| **CTO** | Architecture sign-off; multi-yr platform | Full stack briefing + Tie Town reference arch |
| **COO / VP Ops** | Budget owner; RaaS opex framing | Cost/robot/mo vs current fragmented spend; downtime cost model |
| **Head of Safety / Compliance** | Veto in regulated contexts | ISO 10218 + EU AI Act + FDA compliance posture doc |

**Sales motion:**
- **RaaS motion (opex framing):** Add line item on existing monthly RaaS invoice. "Already paying $3K/robot/mo to Locus — we add $300 for coordination intelligence + cut unplanned downtime 15%." Requires RaaS vendor partnership or OEM channel.
- **Pilot-to-fleet funnel:** Single-facility pilot (3–6 mo, fixed $50K–$150K) → multi-site → enterprise MSA. McKinsey: 70% of pilots fail to scale — Tie Town reference is the counter-narrative.
- **OEM embedded licensing:** Target ABB, FANUC, KUKA, UR, Boston Dynamics — embed AZOA connector + Fractal as licensed module in their robot mgmt software. **Revenue share or $50–$200/robot/yr royalty at scale.**

---

## 7. Rejection Reasons

1. **Safety/cert gap** — "Not ISO 10218 / EU AI Act certified." Mitigation: compliance posture doc; Fractal audit logs as cert-ready evidence.
2. **Vendor concentration risk** — "Already on NVIDIA Isaac + ROS 2." Mitigation: AZOA is additive, not replacement; runs alongside Isaac without forking ROS graph.
3. **Integration with ROS / proprietary stacks** — ROS 2 DDS + proprietary controllers (FANUC KAREL, ABB RAPID, KUKA KRL) need custom connectors. Mitigation: AZOA connector library; scope/price per connector explicitly.
4. **ROI per robot unclear** — Mitigation: Fractal predictive maintenance ROI model (1 avoided downtime incident = $5K–$50K in logistics).
5. **Talent shortage** — Mitigation: managed deployment service; NVIDIA/AWS SI partner channel.
6. **Humanoid uncertainty** — Figure, 1X, Agility, Boston Dynamics Atlas pre-commercial at scale as of 2026; enterprise in "watch and wait." Avoid over-indexing RaaS models on humanoids until commercial fleet sizes materialize.

---

## Summary

Robotics is PrimusNeo's highest near-term AMP + Fractal opportunity. Fleet mgmt SaaS: $50–$500/robot/mo (InOrbit anchors at $500). RaaS bundles: $2K–$5K/robot/mo (Locus, Knightscope). Sim + OS tooling (NVIDIA Isaac, ROS 2) free — commoditizes infra layer, creating demand for differentiated coordination/intelligence above. PrimusNeo 3-yr TCO: $120K (small) → $12M (global OEM). Key deal gates: ISO 10218:2025 / EU AI Act compliance posture + clear per-robot ROI. Fastest entry: OEM embedded licensing with NVIDIA partners or major robot OEMs, then RaaS revenue-share with fleet operators. Buyer coalition: VP Robotics + COO + Head of Safety; COO's opex framing via RaaS = path of least procurement resistance.

---

## Sources

- [InOrbit Pricing](https://www.inorbit.ai/pricing) · [Knightscope K5 pricing](https://x.com/iKnightscope/status/1949936670427512997) · [Locus Robotics RaaS](https://locusrobotics.com/why-locus/robots-as-a-service)
- [Foxglove Pricing](https://foxglove.dev/pricing) · [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac/sim) · [NVIDIA Isaac ROS Fleet Mgmt VDA5050](https://developer.nvidia.com/blog/open-source-fleet-management-tools-for-autonomous-mobile-robots/)
- [AWS RoboMaker deprecation Sept 2025](https://www.oreateai.com/blog/aws-robomaker-understanding-the-pricing-model-and-its-end/)
- [Scale AI Pricing](https://scale.com/pricing) · [Roboflow Pricing](https://roboflow.com/pricing) · [Encord $60M Physical AI](https://techfundingnews.com/encord-scale-ai-rival-60m-physical-ai-data/)
- [FDA 510(k) Costs 2025](https://bluegoatcyber.com/blog/fda-medical-device-submission-costs-explained-510k-pma-and-more-2025-guide/) · [ISO 10218-1:2025](https://www.iso.org/standard/73933.html)
- [RaaS market forecast $125B by 2034](https://www.researchandmarkets.com/reports/6219219/robotics-service-raas-market-opportunity)
- [Locus per-robot pricing analysis](https://www.oreateai.com/blog/unpacking-locus-robotics-raas-how-much-does-a-robot-cost-per-month/) · [FAA Part 107 cost guide](https://www.v1dronemedia.com/v1dronemedia-blog/part-107-drone-license-cost)
- [Robotics consultant SI rates Glassdoor](https://www.glassdoor.com/Salaries/robotics-consultant-salary-SRCH_KO0,19.htm) · [EU AI Act robotics standardization 2025](https://interoperable-europe.ec.europa.eu/collection/rolling-plan-ict-standardisation/robotics-and-autonomous-systems-rp-2025)
- [Foxglove 2.0 unified observability](https://foxglove.dev/blog/foxglove-2-0-unifying-robotics-observability) · [Top 10 robotics fleet mgmt tools](https://www.scmgalaxy.com/tutorials/top-10-robotics-fleet-management-tools-features-pros-cons-comparison/)
