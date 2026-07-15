# Robotics — Engagement Model

> **Vertical:** Robotics (industrial, AMR, humanoid, drone, surgical, agricultural, fleet/RaaS)
> **Research brief:** [`../research/robotics.md`](../research/robotics.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The Friction-Cost Anchor

Robotics is the vertical where the infra layer has been commoditized by the largest player in the market — and that is the opportunity. NVIDIA Isaac ROS and ROS 2 are free. AWS RoboMaker deprecated for new customers in September 2025, pushing teams to AWS Batch or direct Isaac Sim on EC2 (GPU cost ~$3–$6/hr on G6e L40S instances). This commoditization of the robot OS and simulation layer creates an acute demand for a differentiated coordination and intelligence layer sitting above it.

**Comparable anchors that set the price ceiling and floor:**

| Vendor / Reference | Model | Rate |
|---|---|---|
| InOrbit | Fleet management SaaS | ~$500/robot/month (PAYG high-water; volume discounts annual) |
| Locus Robotics RaaS | Warehouse AMR all-in (hw + sw + support + optimization) | $2,000–$4,000/robot/month |
| Knightscope K5 | Security patrol RaaS | ~$60K–$70K/robot/year (~$11/hr) |
| Foxglove Studio | Robotics observability | $90+/user/month enterprise |
| Formant | Telemetry + fleet ops | Quote-based; data-egress cliff at scale |
| ROS 2 / NVIDIA Isaac ROS | Robot OS + middleware | Free (commoditized infra) |
| AWS RoboMaker | Cloud robotics runtime | Deprecated Sept 2025 for new customers |
| ISO 10218-1:2025 / -2:2025 cell certification | TUV / Intertek / UL; 7–12 mo timeline | $50K–$200K+ per certified cell |
| FDA 510(k) (surgical Class II) | FDA fee + consulting overhead | $26K–$54K + 142-day median review |
| EU AI Act conformity assessment (high-risk AI, Annex III) | Per high-risk system | $20K–$80K per system |

**Friction math:** The direct cost of running an uncoordinated heterogeneous robot fleet is $50K–$200K+ in cert overhead per cell, 70% pilot-to-fleet failure rate (McKinsey), and $5K–$50K per unplanned downtime event in logistics contexts. A 100-robot fleet at InOrbit rates alone costs $600K/yr in fleet management software before any coordination intelligence. PrimusNeo positions the coordination/intelligence layer at **$200–$800/robot/month** — above the fleet-management floor ($50–$500/robot/month) and well below the full RaaS ceiling ($2K–$4K/robot/month). For a 100-robot fleet at the midpoint ($500/robot/month), that is $600K/yr for the coordination layer — a defensible add-on when positioned against the alternative: a failed pilot ($150K sunk + 12 months lost) or a costly proprietary OEM solution.

**PrimusNeo capture band:** 10–20% of fleet coordination friction, per the pricing model's robotics row.

---

## 2. PrimusNeo Positioning Per Layer in Robotics

The four-layer stack maps cleanly onto the robotics coordination problem. The key positioning principle: PrimusNeo operates **above the robot OS** (Isaac, ROS 2, proprietary OEM stacks) and **below the full RaaS operator bundle**. It is the coordination intelligence tier that neither NVIDIA nor Locus nor the OEM provides.

### AMP — Fleet Spatial Coordination

AMP is the operational ground layer for robotics: the multi-site spatial model that attaches robot positions, mission states, safety zones, and anomaly events to a navigable scene. In robotics vocabulary it is the **fleet spatial OS** that sits above VDA5050-level fleet management and below the robot proprietary controller.

- Geofencing and safety-zone management that satisfies ISO 10218-1:2025 spatial constraints
- Multi-site dispatch: a single spatial scene spanning 3 DCs with 200 AMRs and 2 fixed-arm cells becomes navigable and governable from one pane
- Offline-first architecture makes AMP viable in low-connectivity environments (agricultural robots in the field, underground mining, edge-network industrial cells)
- Composable with NVIDIA Omniverse reference architectures (AMP is not Omniverse; it is positioned as the coordination-tier complement, not the simulation replacement)

### NEOS — Fleet Governance and Safety Attestation

NEOS is the governance and accountability layer for a robot fleet: the council structure that turns SLA commitments, safety-event attestations, and change-control approvals into signed, auditable, replayable records.

- **Safety attestation traceability:** Every ISO 10218-compliant cell inspection, lockout/tagout approval, and HRC hazard sign-off becomes a NEOS governance event — a signed record that is cert-ready evidence, not a PDF in a SharePoint folder
- **Fleet SLA councils:** For RaaS deployments, NEOS structures the operator–vendor SLA governance as a council (uptime commitments, maintenance windows, fleet rebalancing approvals) with on-chain-anchored records that support EU AI Act human oversight requirements
- **EU AI Act Annex III compliance:** Fractal classified as a high-risk AI system under Annex III requires conformity assessment documentation, logging, and human oversight — NEOS provides the governance event structure that satisfies the human oversight requirement

### AZOA — Vendor-Neutral Robot API Fabric

AZOA is the critical interoperability layer for robotics. Robot vendors ship proprietary controllers: FANUC KAREL, ABB RAPID, KUKA KRL, Universal Robots URScript, Boston Dynamics API, Agility Digit API. Each is a bespoke integration problem. AZOA provides the connector library and federation engine that abstracts these into one API surface.

**This is the connector-buildout work that defines the robotics engagement scope.** Every robot vendor added to a fleet requires a custom AZOA connector. The scope and pricing of that work is explicit (see §3 worked quotes) — it is not absorbed into the platform license.

- Runs alongside existing NVIDIA Isaac fleet management (VDA5050) without forking the ROS graph — additive, not replacement
- FAA Part 107 drone deployments: AZOA includes UTM (Unmanned Traffic Management) API integration as a robotics-vertical connector class
- Post-AWS RoboMaker deprecation, AZOA positions as the vendor-neutral integration fabric for teams migrating to AWS Batch + Isaac Sim on EC2

### Fractal Engine — Predictive Maintenance and Fleet Analytics

Fractal is the intelligence layer that converts robot telemetry into operational signals. In robotics it is the **predictive maintenance and fleet performance analytics engine** — the layer that makes a robot fleet's operational data into a durable archive and real-time decision surface.

- Predictive maintenance ROI model: 1 avoided unplanned downtime event in a logistics AMR fleet = $5K–$50K. A 500-robot fleet avoiding 2 incidents/month across the fleet justifies the Fractal license tier on its own
- Custom model retraining per robot model class (AMR, fixed arm, drone) trained on customer's sensor data; blended weights remain customer IP per the PCL default
- Fractal audit logs are **cert-ready evidence** for ISO 10218 cell certification and EU AI Act conformity assessment — the Fractal telemetry archive is the paper trail TUV/Intertek/UL reviewers require
- Per-mission metering option: $0.002–$0.01/mission event for deployments preferring consumption-based pricing over flat annual license

---

## 3. Engagement Tiers — Small / Mid / Large

### Small: Startup Fleet or Single-Facility Integrator (<10 Robots)

**Profile:** Early-stage robotics startup deploying a pilot fleet, or a systems integrator managing a single-customer fixed installation of cobots or AMRs. Current fleet management at $0–$5K/month (free tier or entry InOrbit). Pain: no mission-level coordination, no governance, no cross-system telemetry, every ISO 10218 cert event is tracked in spreadsheets.

**Bundle:** AZOA Small + Fractal Small. AZOA provides the interop to ROS 2 / proprietary controller; Fractal captures telemetry and builds the predictive maintenance baseline. AMP added at renewal if multi-site; NEOS added when they need safety attestation traceability.

**Worked quote (8-robot cobot cell, single facility, systems integrator):**

| Line item | Amount |
|---|---|
| AZOA Small license (1 domain, <1M calls/mo; 2 connectors included) | $30K/yr |
| Fractal Small license (<5 data sources, <1TB) | $45K/yr |
| Duet bundle discount (–10%) | –$7.5K |
| **License subtotal** | **$67.5K/yr** |
| AZOA connector buildout: FANUC KAREL + ROS 2 (2 connectors, fixed-fee) | $55K one-time |
| Fractal data pipeline buildout (2 sources: PLC + historian) | $40K one-time |
| Atom deployment SKU (single site, 2 layers) | $50K one-time |
| Y1 services total | **$145K** |
| Sustained upkeep Silver SLA (22% of license) | $14.8K/yr (starts Y2) |
| Infra pass-through + 12% mgmt fee | ~$800/mo (~$9.6K/yr) |

**Y1 total:** ~$222K. **3-yr TCO:** ~$290K–$320K (services taper Y2–Y3).

**Friction anchor:** ISO 10218 cert-prep spreadsheet labor ($15K–$40K/cell), InOrbit or equivalent fleet mgmt at $0–$3K/month, 1 avoided downtime incident/yr ($10K–$30K value). **Capture rate:** $67.5K license ÷ estimated $80K annual friction displacement = ~84% of direct friction displacement — high, because this buyer has almost nothing today and the connector buildout is real capability they could not otherwise buy.

---

### Mid: Multi-Site Fleet Operator or Mid-Size OEM/Integrator (50–500 Robots)

**Profile:** Mid-size logistics operator running 200 AMRs across 3 DCs, or a Tier-2 OEM integrator delivering fleet-as-a-service to 5 customers with heterogeneous robot vendors. Current spend: InOrbit or Formant $25K–$250K/yr + custom SI $200K–$800K. Pain: 3 different robot vendors (KUKA, Universal Robots, a domestic AMR brand), multi-site dispatch without a unified spatial model, safety audit readiness before an ABB/FANUC partnership requires ISO 10218 attestation, no predictive maintenance.

**Bundle:** AMP Mid + NEOS Mid + AZOA Mid + Fractal Mid (full stack). AMP handles multi-site spatial coordination. NEOS handles fleet SLA governance and safety attestation councils. AZOA handles the heterogeneous vendor API surface. Fractal handles predictive maintenance and analytics.

**Worked quote (200-robot fleet, 3 sites, 3 robot vendors):**

| Line item | Amount |
|---|---|
| AMP Mid license (4–15 sites, 50–500 concurrent spatial) | $140K/yr |
| NEOS Mid license (multi-council: SLA council × 3 sites + safety council) | $55K/yr |
| AZOA Mid license (10–50 integrations, 1M–50M calls/mo) | $160K/yr |
| Fractal Mid license (5–20 sources, 1–20TB managed) | $200K/yr |
| Full stack bundle discount (–25%) | –$138.75K |
| **License subtotal** | **$416K/yr** |
| AZOA connectors: KUKA KRL + UR URScript + domestic AMR API (3 connectors × ~$45K avg) | $135K one-time |
| AMP spatial environment buildout (3 sites) | $180K one-time |
| Fractal pipeline + 2 custom predictive maintenance models | $180K one-time |
| NEOS governance design + safety attestation council setup | $80K one-time |
| Hex deployment SKU (3 sites, full stack) | $600K one-time (midpoint) |
| Y1 services (blended ~1.8x license) | **~$750K** |
| Sustained upkeep Gold SLA (25%, robotics regulated default) | $104K/yr (starts Y2) |
| Infra pass-through + 12% mgmt fee | ~$15K/mo (~$180K/yr) |

**Y1 total:** ~$1.35M. **3-yr TCO:** ~$2.4M–$2.8M (within the $750K–$2.5M Mid research band; lands at the upper end because full-stack + 3 connector buildouts).

**Friction anchor:** Current InOrbit/Formant + SI spend: $250K–$800K/yr. 70% pilot failure rate means 1 failed pilot at this scale costs $100K–$300K in sunk SI + 9–12 months of delay. Predictive maintenance: 4 avoided AMR downtime events/month across 3 DCs × $15K/incident = $720K/yr in avoided logistics disruption. ISO 10218 cert-prep per cell: $75K avg per cell × 3 cells = $225K one-time displacement. **Capture rate:** $416K ÷ estimated $1.4M annual friction = ~30% value share — defensible inside the 10–20% capture band for robotics (the higher number reflects displacement of real line-items, not just advisory uplift).

**RaaS opex framing:** "You're already paying $2,500/robot/month to your AMR vendor all-in. We add $416K/yr ÷ 200 robots = $173/robot/month for coordination intelligence, safety attestation traceability, and predictive maintenance that cuts unplanned downtime 15%. That is a $208/robot/month net gain on your existing $2,500 RaaS invoice."

---

### Large: Global OEM or National Logistics Fleet (1,000+ Robots)

**Profile:** Global robot OEM (ABB, FANUC, KUKA, Boston Dynamics class) seeking to offer a coordination intelligence platform as an embedded SKU in their fleet management software, OR a national logistics operator (Symbotic class) running 1,000+ AMRs across 20+ facilities. Current spend: proprietary OEM fleet software + SI ($1M–$5M+/yr); custom digital twins at $500K–$3M. Pain: cross-vendor fleet interop (EU sites run KUKA; US sites run Fanuc; AMR layer is Symbotic; surgical arm in one facility is Intuitive Surgical); global compliance (ISO 10218:2025 across all cells, EU AI Act by 2026 enforcement, FDA SaMD layer for any clinical robotics); no unified fleet analytics.

**Bundle:** Full stack at Large tier. AZOA federation engine on. NEOS federated governance councils per region. AMP multi-org spatial federation. Fractal large with custom model retraining per robot class.

**Worked quote (1,200-robot global fleet, 20 sites, 5 robot vendors + OEM embedded licensing track):**

| Line item | Amount |
|---|---|
| AMP Large license (15+ sites, 500+ concurrent spatial, multi-org federation) | $700K/yr |
| NEOS Large license (federated governance councils per region + EU AI Act oversight councils) | $250K/yr |
| AZOA Large license (50+ integrations, >50M calls/mo, cross-org federation) | $900K/yr |
| Fractal Large license (20+ sources, real-time + archive, >20TB, custom retraining) | $1.2M/yr |
| Full stack bundle discount (–25%) | –$762.5K |
| **License subtotal** | **$2.29M/yr** |
| AZOA connectors: FANUC KAREL + ABB RAPID + KUKA KRL + BD API + Symbotic API (5 connectors × ~$60K avg) | $300K one-time |
| AMP federation enablement (cross-org, 20 sites) | $450K one-time |
| Fractal custom models per robot class (6 models) + regulatory validation for EU AI Act | $480K one-time |
| NEOS EU AI Act conformity assessment council architecture + audit-log buildout | $150K one-time |
| Tessellation deployment SKU (20+ sites, full stack, regulated) | $5M one-time (midpoint) |
| Y1 services (blended ~1.8x license) | **~$4.1M** |
| Sustained upkeep Platinum SLA (custom %, robotics regulated) | $600K/yr (starts Y2) |
| Infra pass-through + 12% mgmt fee | ~$60K/mo (~$720K/yr) |

**Y1 total:** ~$7.1M. **3-yr TCO:** ~$11M–$14M (within the $3M–$12M Large research band at the upper end; justified by the 5-vendor connector scope and EU AI Act regulatory depth).

**OEM embedded licensing alternative path:** Skip the services-heavy Y1 and embed AZOA + Fractal as licensed modules in the OEM's existing fleet management software. **Revenue share: $50–$200/robot/year royalty** (depending on layer depth) billed by OEM to their end customers. At 1,200 robots × $150/robot/yr = $180K/yr royalty. At 10,000 robots across the OEM's installed base = $1.5M/yr royalty. 3–8% of operator RaaS revenue for deeper platform-partner arrangements.

**Friction anchor:** NVIDIA/ABB digital twin programs run $2M–$8M/yr in software + SI. ISO 10218 cert across 20 cells: $100K avg × 20 = $2M one-time. EU AI Act conformity assessment: $50K avg per high-risk system × 15 systems = $750K. Pilot failure avoidance: 70% failure rate applied to a 3-year $8M internal build program = $5.6M risk. Estimated annual friction window: $8M–$15M/yr. **Capture rate:** $2.29M ÷ $11.5M (midpoint) = **~20% value share** — top of the 10–20% capture band, defensible for global OEM with EU AI Act exposure.

---

## 4. Industry-Specific Procurement Signals

### Buyer Coalition

| Title | Authority | Entry Point |
|---|---|---|
| **VP Robotics / Head of Automation** | Technical champion; fleet roadmap owner | AZOA interop demo across heterogeneous vendor fleet + Fractal predictive maintenance ROI model (avoided downtime = $X/incident × fleet size) |
| **CTO** | Architecture sign-off; multi-year platform decision | Full stack briefing + Tie Town reference architecture; position AMP + AZOA as the coordination fabric above Isaac, not a replacement for Isaac |
| **COO / VP Operations** | Budget owner; RaaS opex framing is the unlock | "Add $X/robot/month to your existing Locus/$3K invoice and recover it in downtime avoidance within 6 months" — CFO-friendly math, not IT capex |
| **Head of Safety / Compliance** | Veto power in any regulated engagement; ISO 10218 + EU AI Act + FDA gating | Compliance posture document as first deliverable; Fractal audit logs as cert-ready evidence; NEOS safety attestation council design |

**Head of Safety is the non-negotiable stakeholder in regulated robotics.** Any engagement touching industrial cobots (ISO 10218 HRC cells), surgical arms (FDA 510(k) SaMD exposure), or drone fleets (FAA Part 107 waiver contexts) that does not have the compliance posture doc in hand by end of discovery is a stalled deal.

### Sales Motions

**RaaS opex motion.** The fastest path for warehouse AMR and security patrol contexts. Position PrimusNeo as an add-on line item to the existing RaaS operator invoice. "You're already paying $3,000/robot/month to Locus. We add $300 for cross-site spatial coordination, safety attestation traceability, and predictive maintenance — and we target cutting your unplanned downtime rate by 15%, which on a 200-robot fleet at $15K/incident is $540K/yr." Requires a partnership or referral relationship with the RaaS operator or a direct connection to the COO who signs the RaaS contract.

**Pilot-to-fleet funnel.** Three-to-six month fixed-fee pilot at $50K–$150K (Atom or single-site Molecule SKU) covering AZOA connector buildout for 1–2 robot vendors + Fractal telemetry baseline for 1 facility. Pilot outputs: (a) connector library reusable across customer fleet, (b) Fractal downtime baseline that becomes the gainshare measurement period, (c) reference site for multi-site expansion pitch. McKinsey cites 70% pilot-to-fleet failure — Tie Town reference architecture is the counter-narrative that shortens the sales cycle from 9–18 months to 4–8 months.

**OEM embedded licensing.** Target ABB, FANUC, KUKA, Universal Robots, Boston Dynamics — embed AZOA connector library + Fractal as licensed modules in their fleet management software or cloud portal. Revenue share or per-robot-per-year royalty at scale. Entry: technical partnership agreement + co-sell on OEM's existing deals. This is the highest-leverage distribution channel for reaching 10,000+ robot deployments without proportional services overhead.

---

## 5. Rejection-Risk Mitigations

**"You're not ISO 10218 / EU AI Act certified."**
Mitigation: Compliance posture document delivered as an engagement artifact, not a post-sale promise. Fractal audit logs are architected as cert-ready evidence from day one — the telemetry schema maps to the traceability requirements in ISO 10218-1:2025 Section 5.4 and EU AI Act Article 12 logging requirements. NEOS safety attestation councils produce signed governance events that TUV/Intertek reviewers can audit. The posture doc is a deal gate, not a nice-to-have.

**"We're already on NVIDIA Isaac + ROS 2. We don't want to fork the ROS graph."**
Mitigation: AZOA is additive. It runs alongside Isaac without touching the ROS 2 DDS layer. The AZOA connector subscribes to ROS topics as a standard subscriber; it does not require modifying the robot's navigation stack or mission planner. AMP sits above the Isaac fleet manager — it consumes VDA5050 fleet state as a data source. The positioning is "coordination intelligence above Isaac, not instead of Isaac."

**"Every robot vendor we run needs a custom integration. That's expensive and risky."**
Mitigation: Explicit per-connector fixed-fee scoping ($25K–$80K per connector) before any engagement begins. Connector scope, timeline, and acceptance criteria are defined in the SOW. PrimusNeo retains rights to harden non-bespoke connectors and redistribute through the AZOA connector library — which means connector cost amortizes across multiple customers and future connector upgrades are covered under sustained upkeep. For a fleet with 3 vendors, the connector line is $75K–$180K one-time, not an open-ended integration tax.

**"We can't calculate ROI per robot."**
Mitigation: Fractal's 60-day instrumentation phase (pre-contract measurement period, optionally part of the pilot) establishes the downtime baseline. The gainshare addendum structure (base license at 80% of standard anchor + 15–30% of documented annualized savings above baseline) converts the ROI question from a sales conversation into a contractual obligation. One avoided incident in a logistics AMR fleet at $15K–$50K converts the baseline math on its own.

**"We don't have robotics engineers to manage another platform."**
Mitigation: Managed deployment service (all four services classes — customization, integration, deployment, sustained upkeep — delivered by PrimusNeo + steward partners). NVIDIA partner channel (Isaac/Omniverse certified, $200–$350/hr; projects $250K–$2M) and AWS partner network (post-RoboMaker migration projects, $100K–$500K) provide certified SI capacity that extends the engagement delivery capacity without requiring customer headcount.

**"Humanoids are the future but we don't know when they'll be commercial."**
Mitigation: Do not over-index pricing or engagement design on humanoid robotics as of 2026. Figure, 1X, Agility Robotics, and Boston Dynamics Atlas are pre-commercial at enterprise fleet scale. Humanoid positioning is appropriate for research and pilot agreements only; commercial fleet pricing models are premature. Track the space; activate humanoid-specific AZOA connector development when a reference customer has a commercial fleet above 20 units.

---

## 6. Regulatory and Compliance Considerations

Robotics sits under more regulatory overlay than any other PrimusNeo vertical except healthcare. Every engagement touching industrial cobots, surgical robotics, drones, or service robots in the EU must have a compliance posture document as a named engagement deliverable.

**ISO 10218-1:2025 / -2:2025 (Industrial Robots and Robot Cells)**
Updated 2025 revision strengthens functional safety, HRC (Human-Robot Collaboration), and force/power limiting requirements for cobot cells. Certification via TUV Rheinland, Intertek, or UL; 7–12 month timeline; $50K–$200K+ per certified cell including engineering hours.

PrimusNeo contribution: AMP provides safety-zone geofencing that maps directly to ISO 10218-2:2025 collaborative workspace definitions. Fractal audit logs provide the traceability evidence that notified body reviewers require. NEOS safety attestation governance events provide the change-control record for cell modifications.

**ISO 13482:2014 (Personal Care and Service Robots, including Humanoids)**
Applies to robots operating in proximity to humans in non-industrial settings: service robots, hospital logistics robots, and humanoids. Requires notified body engagement for EU market access.

PrimusNeo contribution: NEOS hazard accountability traceability — every human-proximity event, safety intervention, and operational exception becomes a signed governance event with replay capability for post-incident analysis.

**EU AI Act (2024, enforcement 2026)**
Fractal Engine, when processing operational decision data for robot navigation, fleet dispatch, or safety intervention recommendations, is classified as a high-risk AI system under Annex III (safety component of products covered by Union harmonisation legislation, which includes robots under the Machinery Regulation).

Requirements: conformity assessment, Article 12 logging (full audit trail of all inputs and outputs), Article 14 human oversight mechanisms, technical documentation per Annex IV.

PrimusNeo contribution: Fractal audit log architecture satisfies Article 12. NEOS human oversight councils satisfy Article 14. Conformity assessment documentation: $20K–$80K per high-risk system, bundled into the engagement deliverable as a named SOW item, not post-sale.

**FAA Part 107 (Commercial Drones <25kg, US)**
Knowledge test $175 + $5/drone registration. 90–120 day waiver for operations beyond visual line of sight (BVLOS). UTM (Unmanned Traffic Management) API integration is required for BVLOS commercial fleet operations.

PrimusNeo contribution: AZOA UTM API integration as a drone-vertical connector class. Priced per-connector ($30K–$60K fixed-fee) within the standard AZOA connector framework.

**FDA 510(k) (Surgical Robotics, Class II Medical Devices)**
FDA submission fee: $6,084–$24,335 (2025 fee schedule) + $20K–$30K consulting. 142-day median review period. Fractal Engine, if processing clinical decision data (e.g., surgical performance analytics, real-time guidance signals), may qualify as Software as a Medical Device (SaMD) under FDA guidance and require 510(k) clearance or De Novo classification.

PrimusNeo contribution: Fractal's telemetry architecture for surgical robotics is scoped to operational performance analytics (robot arm telemetry, procedure time, maintenance prediction) rather than clinical decision support, to stay below the SaMD trigger. Any surgical customer requiring clinical decision support integration must have a regulatory counsel review prior to engagement scoping. This is a deal gate.

**RIA TR R15.806 (US Human-Robot Collaboration Technical Report)**
Not a certification standard — an internal compliance reference. Fractal risk signals and AMP spatial zone mapping support HRC safety documentation under this technical report.

---

## 7. Steward and Service Partner Notes

### Layer Stewards in Robotics

**PLAN Systems (AMP)** leads AMP fleet spatial coordination buildout. PLAN's Hexon file standard is the portable spatial format for robot cell layouts, AMR path maps, and multi-site fleet spatial models. PLAN subcontracts site-walk, spatial environment buildout, and sensor/OT binding services within robotics engagements.

**Escherbridge (Fractal Engine)** leads Fractal predictive maintenance and custom robot model development. Escherbridge's analytics depth is the differentiator for the robotics vertical — their team has domain context in time-series anomaly detection on robot actuator telemetry that makes the custom model training materially faster than a generalist Fractal deployment. Escherbridge royalty: 18% of Fractal line-item license revenue.

**OmniOne (NEOS)** leads fleet governance and safety attestation council design. OmniOne's ETHOS methodology is adapted for robotics safety governance: ISO 10218 cell approval councils, EU AI Act human oversight councils, and RaaS SLA governance councils are all deliverable templates OmniOne can instantiate within a standard Governance Design Workshop ($35K–$60K).

**AZOA (AZOA)** leads robot vendor connector buildouts — the critical work in every robotics engagement. Every robot vendor added to an AZOA deployment requires a custom connector authored and maintained by AZOA. The connector library (FANUC KAREL, ABB RAPID, KUKA KRL, UR URScript, Boston Dynamics API, Symbotic API, DJI drone API, Intuitive Surgical telemetry) is the strategic moat that makes AZOA the right choice for heterogeneous fleets. AZOA royalty: 15% of AZOA line-item license revenue.

### Service Partner Channel

**Robotics SI firms (US boutique):** $150–$275/hr specialist; $100–$175/hr mid-level. These firms (Bastian Solutions, Honeywell Intelligrated, Dematic, and boutique AMR integrators) are the warm channel into mid-size fleet operators who do not have internal robotics engineering capacity. SI partnership = co-sell arrangement; PrimusNeo provides the coordination layer, SI provides the robot hardware + OEM relationship.

**NVIDIA partner network (Isaac/Omniverse certified):** $200–$350/hr; fixed-scope projects $250K–$2M. NVIDIA's certified partner channel is the fastest path into large OEM and enterprise fleet operator deals where Isaac Sim and Omniverse are already in the stack. PrimusNeo's positioning as "coordination intelligence above Isaac" makes this a complementary co-sell, not a competitive displacement.

**AWS partner network (post-RoboMaker migration):** $150–$250/hr; projects $100K–$500K. The AWS RoboMaker deprecation (September 2025) created a migration cohort of robotics teams that need a new cloud robotics runtime strategy. AZOA as the vendor-neutral integration layer for AWS Batch + Isaac Sim on EC2 G6e is a specific positioning play for this migration cohort.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Robotics engagement model |
