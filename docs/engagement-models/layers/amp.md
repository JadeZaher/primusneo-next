# AMP — Spatial OS + Operational Access Management Engagement Model

> **Layer:** 01 — Operational Runtime / Spatial OS / Operational Access Management
> **Steward:** PLAN Systems
> **License:** Closed-core / partial-OSS (community runtime open Apache-2.0; enterprise spatial + multi-tenant federation + OAM kernel closed)
> **Maturity:** The most mature layer in the stack — multi-year hardening through PLAN Systems plus the live Tie Town [TX] deployment
> **Reference deployment:** Tie Town [TX]
> **Anchors source:** [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. What AMP actually is (in the buyer's vocabulary)

AMP is the **operational ground layer** — and it does **two jobs in one runtime**, which is why it is the highest-priced layer in the PrimusNeo stack:

1. **Spatial OS.** The privacy-first spatial collaboration runtime that ties together physical sites, devices, people, and the contextualized data layer that makes everything above it (NEOS governance decisions, AZOA interop events, Fractal Engine signals) attach to a *place* and a *moment*.
2. **Operational Access Management (OAM).** The runtime that decides — for every action, every device, every spatial zone, every shift — *who is allowed to do what, here, now*. AMP issues, scopes, revokes, and audits operational access against the same spatial scene the work actually happens in. It is the layer that replaces the patchwork of physical badges + OT VPNs + plant-floor permission spreadsheets + drone-clearance forms + facility access lists most operations run today.

This dual role — spatial OS *and* OAM in one runtime — is what makes AMP the load-bearing layer in any operational engagement, and it is why AMP commands the highest license and services anchors in the stack.

In the language enterprises already know:

- A **plant floor** to a manufacturing CIO: AMP is the IT/OT-bridging spatial model that combines CAD, PLC telemetry, MES events, and worker location into one navigable scene — *and* the lockout/tagout + MOC + shift-handoff access system that decides who can touch which line at which moment.
- A **hospital** to a healthcare CMIO: AMP is the OR/ED command center spatial layer (a GE Command Center analog without forcing Epic rip-and-replace) *and* the role-and-zone-based access system gating who scrubs into which suite, who reads which chart from which workstation, and who can override which alarm.
- A **port** to a CSCO: AMP is the terminal-and-yard spatial twin (Navis N4-adjacent but vendor-neutral) *and* the operational access system that decides which driver, which crane operator, which inspector, which carrier rep is authorized in which apron zone for which time window.
- An **energy utility** to a CGO: AMP is the substation + plant spatial twin *and* the NERC CIP-013-equivalent operational access kernel that gates physical and logical access to BES Cyber Assets with cryptographic audit trail.
- A **DAO** or **cooperative** to a community steward: AMP is the offline-capable shared space where members coordinate *and* the contribution-based access system that determines who can sign for the treasury, who can deploy code, who can propose a charter change.

Crucially, AMP runs **offline-first** in both roles. The OAM kernel issues and validates access locally even when disconnected; access decisions reconcile to the federated audit log when the link comes back. This is what distinguishes AMP from every Web-native spatial collaboration tool (Spatial.io, Microsoft Mesh, Meta Workplace) *and* from every cloud-only IAM/PAM product (Okta, CyberArk, BeyondTrust), and it is the requirement set for regulated, low-connectivity, or sovereignty-conscious environments.

---

## 2. License posture

**Closed-core / partial-OSS** — the runtime, file standard, and client SDKs are open; the enterprise spatial server, multi-tenant federation layer, **and the OAM kernel** are closed.

| Component | License | Notes |
|-----------|---------|-------|
| PLAN core runtime | Apache-2.0 | Community-maintained; forkable |
| Hexon (v1.0.0) file standard | Apache-2.0 | The portable spatial file format |
| Client SDKs (web, mobile, desktop) | Apache-2.0 | Free for any use |
| WASM extension interface | Apache-2.0 | Free; extensions can be commercial or OSS at extension author's choice |
| Reference 3D viewer scaffold | Apache-2.0 | Free baseline UI |
| Community OAM policy DSL | Apache-2.0 | The open policy language; closed runtime evaluates it |
| **Enterprise spatial server** | **Closed (PEL)** | Multi-tenant; production SLA; required for >5 sites or >50 concurrent |
| **Federation engine** | **Closed (PEL)** | Cross-org spatial federation; required for multi-entity deployments |
| **OAM kernel** | **Closed (PEL)** | The operational access management kernel — issuance, scoping, revocation, cryptographic audit trail, offline policy evaluation. The second pillar of AMP's value |
| **Premium PLAN 3D interface components** | **Closed (PEL)** | Industrial-grade UI; CAD-class viewport; OEM-licensed assets |
| **Privacy-preserving mesh routing** | **Closed (PEL)** | The privacy-first networking that makes "offline-capable spatial collaboration" actually work without leaking position data |

See [`../02-licensing-model.md` §3](../02-licensing-model.md) for the closed-core / PEL mechanics.

---

## 3. Pricing tiers (annual license, before services)

AMP carries the **highest license anchors in the stack** because (a) it is the most mature layer (years of PLAN Systems development plus a live Tie Town deployment), and (b) it is the only layer that delivers two enterprise-grade capabilities — Spatial OS *and* Operational Access Management — in one runtime. From the layer anchors in [`../01-pricing-model.md` §3.1](../01-pricing-model.md):

| Scale | Definition | Annual License | Services Multiplier (Y1) | Typical 3-yr TCO |
|-------|------------|----------------|--------------------------|------------------|
| **Small** | 1–3 sites, <50 concurrent spatial users, <200 OAM identities | **$30K–$75K/yr** | 1.5–2.5x | $150K–$370K |
| **Mid** | 4–15 sites, 50–500 concurrent, 200–2,500 OAM identities | **$150K–$450K/yr** | 1.5–2.5x | $850K–$2.5M |
| **Large** | 15+ sites or multi-org federation, 500+ concurrent, 2,500+ OAM identities | **$600K–$2.5M/yr** | 1.5–2.5x | $3.0M–$12M |

**Pricing mechanic options** (choose one per engagement; default in bold):

- **Per-site + per-OAM-identity** (default for industrial / multi-facility): $6K–$45K/site/yr plus $36–$180/OAM-identity/yr (volume tiered)
- Per-concurrent-user license: $200–$1,000/concurrent-user/yr (for office/collab-heavy deployments)
- Per-spatial-asset license (Hexon files under management): $0.75–$4/asset/yr at scale
- Enterprise unlimited (Large tier only): flat annual commit

> **OAM-only entry SKU:** Buyers who want the OAM kernel without the full spatial OS surface area can adopt AMP as a pure operational-access-management product at **70% of the Spatial OS line-item**. This is the recommended motion for buyers (e.g., regulated FS, defense-adjacent, NERC CIP-driven utilities) where the access-management value lands before the spatial twin value.

---

## 4. Services mix

AMP is service-intensive in Y1. The typical Mid-tier full-deployment SOW:

| Service | Scope | Fixed-fee range |
|---------|-------|-----------------|
| **Discovery sprint** | Site walks, scene scoping, integration inventory, success metrics | $40K–$80K (credits to engagement) |
| **Spatial environment buildout** | CAD ingest, scene authoring, scale calibration, asset library setup | $80K–$300K per site |
| **Sensor / OT integration** | Live telemetry binding (PLCs via OPC UA, sensors via MQTT, location tracking) | $40K–$180K per site |
| **Premium 3D component installation** | Industrial-grade viewers, CAD-class viewport, premium UI library | $25K–$60K bundled |
| **Operator training + change management** | Hands-on for plant ops, dispatchers, facility managers | $30K–$120K per site |
| **Federation enablement** (Large only) | Cross-org spatial federation, identity bridging to NEOS + AZOA | $150K–$500K one-time |
| **30-day hypercare** | Post-cutover stabilization | Included in deployment SKU |

Services delivered by a mix of PrimusNeo, PLAN Systems contractors, and certified spatial-integration partners.

---

## 5. Sustained upkeep + infra

Annual sustained upkeep = **18–25% of license**, per [`../03-services-catalog.md` §2.4](../03-services-catalog.md). Tier choice (Bronze/Silver/Gold/Platinum) drives the percentage and the SLA.

Infra typical components (pass-through + 12% mgmt fee):

- **Spatial server hosting** (per-site edge or regional cloud): $300–$2,500/mo/site
- **Hexon archive storage** (S3-equivalent + Glacier cold tier): $0.012–$0.025/GB-month
- **Sensor/IoT ingest bandwidth**: variable; typically $200–$1,500/mo/site
- **Optional Tie Town reference colocation**: $1,200–$2,500/mo for 1U edge node

---

## 6. Bundle interactions

AMP is the **anchor layer** for any operational engagement. It composes most powerfully with:

| Other layer | What you unlock together |
|-------------|--------------------------|
| **+ Fractal Engine** | Spatial events become first-class signals; predictive maintenance, OEE, capacity forecasting attach to scene positions. **Standard duo for manufacturing, energy, healthcare ops, logistics.** |
| **+ AZOA** | Connects the spatial scene to ERP/MES/EHR/TMS/etc. without forcing rip-and-replace of any incumbent. **Required duo for buyers with substantial legacy IT/OT stacks.** |
| **+ NEOS** | Spatial actions become governed actions — "this approval was issued from this location on this asset by this signed identity." **Required duo for regulated industries (healthcare HITRUST, energy NERC CIP, finance MiCA).** |
| **Full Stack** | The federated coordination fabric. **Triad → Full Stack upsell is the dominant Y2 expansion motion.** |

---

## 7. Two worked engagement examples

### 7.1 Small AMP-only: 60-acre regenerative ag co-op (Tier-1 Small)

- **Buyer:** Co-op board of a 12-member regenerative cooperative running 60 acres in Vermont
- **Scope:** Single farm site, 8 concurrent spatial users (board + members during planning windows), ~120 OAM identities (members + seasonal workers + visiting agronomists), offline-capable, BYO connectivity
- **Quote:** $42K/yr AMP license (Small tier midpoint — spatial OS + OAM kernel) · $60K Atom deployment SKU · $8K/yr Bronze SLA · ~$400/mo edge node hosting
- **Y1 total:** ~$115K · **3-yr TCO:** ~$235K
- **Friction-cost anchor:** Cooperative spending $40K/yr on ad-hoc tools (Google Drive, Loomio, paper records, satellite imagery) *plus* an estimated $25K/yr in informal access management (member onboarding, key handoffs, contractor approvals, shift handoffs) — combined $65K/yr friction
- **Why they sign:** Member sovereignty (offline, self-hosted), Hexon file portability (no lock-in), unified OAM removing the patchwork of paper sign-in sheets + Slack channels, Tie Town reference proves the stack works

### 7.2 Large AMP+Fractal+AZOA: 12-plant discrete manufacturer (Tier-3 Large)

- **Buyer:** CIO + COO of a $3B discrete manufacturer with 12 plants across NA + EU
- **Scope:** All 12 plants on AMP spatial twin + AMP OAM (~4,800 OAM identities: operators + maintenance + contractors + EHS + management), federated; AZOA connectors to SAP S/4HANA, Rockwell FactoryTalk MES, AVEVA PI System; Fractal Engine OEE + downtime prediction
- **Quote:**
  - AMP Large: $1.5M/yr (12 sites × ~$95K/site for combined spatial-OS + OAM; well below the $2.5M ceiling but above the floor given identity count and federation scope)
  - AZOA Large: $550K/yr (50+ integrations, ERP + MES + historian)
  - Fractal Mid (high end): $300K/yr
  - Triad bundle discount: -18% → $1.93M/yr license
  - Y1 services (~2.2x license blend): $4.25M
  - Y1 upkeep (Gold SLA, 25%): $483K (starts Y2)
  - Infra pass-through + 12% mgmt: $400K–$700K/yr
- **Y1 total:** ~$6.6M–$7.0M · **3-yr TCO:** ~$13M–$15M
- **Friction-cost anchor:** McKinsey pilot-purgatory 70% on 8 stalled IIoT POCs = $12M sunk + $50M/yr unplanned downtime (Siemens benchmark) + ~$3–6M/yr across legacy IAM/PAM stack and lockout-tagout/MOC paperwork that AMP OAM displaces → capture window of **~$25M/yr in friction**
- **Capture rate:** ~$1.93M ÷ $25M = **7.7% value share** — defensible inside the 5–15% manufacturing capture band, with the OAM displacement value (Okta + CyberArk equivalents at ~$200–$400K/yr for a workforce this size) underwriting the AMP premium

---

## 8. Steward economics

Per [`../02-licensing-model.md` §4](../02-licensing-model.md):

- **PLAN Systems royalty: 15% of AMP line-item license revenue**, paid quarterly
- Services revenue carries no royalty unless PLAN delivers the work on subcontract
- AMP is the highest-services-multiplier layer; PLAN benefits indirectly when they subcontract services delivery
- Tie Town deployment serves as the reference architecture both stewards benefit from

---

## 9. Risks specific to AMP

| Risk | Mitigation |
|------|------------|
| Vendor lock-in fear | Hexon v1.0.0 is open; client SDKs are open; data export is non-negotiable contract term; OAM policy DSL is Apache-2.0 |
| Spatial competitors (Omniverse, Unity Industrial) priced lower per-seat | Position on **operational + offline + federated + OAM-bundled** characteristics they don't deliver; per-seat math is irrelevant when AMP replaces two product categories at once |
| "Why is AMP more expensive than Fractal/AZOA?" | Because it ships two production-grade capabilities — Spatial OS *and* Operational Access Management — in one runtime, and it is the most mature layer with multi-year Tie Town hardening. Compare against Spatial vendor + IAM/PAM vendor combined cost (typically $4,500/GPU/yr Omniverse + $5–$15/user/mo Okta + $50–$150/user/yr CyberArk-class PAM); AMP undercuts the sum |
| IAM/PAM incumbent displacement (Okta, CyberArk, BeyondTrust) | AMP OAM is positioned as **operational** access management — bound to spatial zones, time windows, OT assets, and physical-world context. It complements rather than fully displaces workforce IdP/IAM for office IT; the AZOA layer handles bridging if both are needed |
| Talent shortage (spatial-OT integration) | PLAN partner channel + certified integrator network; managed deployment service |
| Performance at scale (very large plants, complex CAD) | Edge-first architecture; Hexon designed for streaming partial loads; reference deployments demonstrate the envelope |
| "We already have a digital twin" | Most "digital twins" are PowerBI dashboards over historian data — not actual spatial-event-graph systems. Discovery sprint shows the gap, and the OAM kernel is a second-vector value-add the dashboard tools cannot match |

---

## 10. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team | Initial AMP engagement model |
