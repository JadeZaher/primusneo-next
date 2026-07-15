# PrimusNeo Services Catalog

> **Status:** Draft v0.1.
> **Scope:** Defines the five service classes, SKUs, day rates, and bundling
> rules that wrap PrimusNeo license / subscription revenue.

---

## 1. Why services matter (and how they relate to license)

Across our four layer comparables (Palantir, Cognite, Aveva, AspenTech,
Innovaccer, Procore, MuleSoft, Snowflake), the services-to-license ratio in
year one ranges from **0.5x to 5x**. PrimusNeo's structural target is
**1.5x – 2.5x in year one**, taping to **0.3x – 0.6x by year three** as the
customer's internal team takes over. Anything outside that band is a signal
to revisit the engagement design.

```
Year 1:  License $1.00  ::  Services $1.50–$2.50
Year 2:  License $1.00  ::  Services $0.80–$1.20
Year 3+: License $1.00  ::  Services $0.30–$0.60   ← steady-state upkeep only
```

Services are sold under the same **PrimusNeo Federated Engagement License
(PFEL)** as the bundle, with a Statement of Work (SOW) per engagement.

---

## 2. The five service classes

### 2.1 Customization

**What it covers:** Vertical-specific schemas, council templates, twin
extensions, custom Fractal Engine models, NEOS charters, AMP scene
authoring, AZOA connector buildouts, WASM extension development.

**Pricing mechanic:** T&M day rate OR fixed-fee scope after a paid
discovery sprint.

**Day rates (standard):**

| Role | Day rate (USD) | Notes |
|------|----------------|-------|
| Principal Architect | $3,200 | Founding team, capped allocation per engagement |
| Senior Engineer (any layer) | $2,200 | Federated steward orgs share this rate |
| Engineer | $1,600 | |
| Fractal Engine ML Engineer | $2,800 | Specialty: Escherbridge talent |
| NEOS Governance Designer | $2,400 | Specialty: OmniOne ETHOS methodology |
| AMP Spatial / 3D Engineer | $2,400 | Specialty: PLAN systems |
| AZOA Integration Engineer | $2,200 | Specialty: AZOA connector authors |
| Project Manager | $1,800 | |
| Trainer / Change Management | $1,400 | |

**Day rates are floors. Premium up to +50% for:** sub-30-day rush, hostile
deadlines, on-site travel >50%, regulated-industry compliance scope (FedRAMP
High, HIPAA, NERC CIP, etc.), and weekend cutover windows.

**Discovery sprint:** 2-week paid engagement, $40–80K depending on scope.
Output: a fixed-fee SOW the buyer can sign. Discovery fee credits 100%
against the resulting engagement if signed within 90 days.

---

### 2.2 Integration

**What it covers:** Net-new connectors and bridges between PrimusNeo and
the buyer's existing stack. The most common categories:

| Connector class | Typical examples | Default fixed fee (USD) |
|-----------------|------------------|-------------------------|
| **ERP** | SAP S/4HANA, Oracle Fusion, NetSuite, Microsoft D365 | $60K – $180K |
| **MES / OT** | Rockwell FactoryTalk, Siemens MindSphere, Aveva, GE Proficy, OPC UA | $80K – $250K |
| **EHR / Clinical** | Epic, Cerner/Oracle Health, Meditech, Athenahealth | $120K – $400K (HITRUST overhead) |
| **TMS / WMS** | Manhattan, Blue Yonder, Oracle OTM, SAP TM | $60K – $200K |
| **CRM** | Salesforce, HubSpot, MS Dynamics CE | $30K – $80K |
| **Identity / IdP** | Okta, Azure AD, Auth0, Ping, SSI Verified Credentials | $25K – $90K |
| **Chain / RPC** | EVM, Solana, Cosmos, Hedera, Polkadot, custom L2 | $20K – $75K per chain |
| **Storage** | S3-compatible, IPFS, Filecoin, Ceramic, Arweave | $15K – $50K per backend |
| **BIM / CAD** | Autodesk ACC, Bentley iTwin, Trimble Connect | $80K – $250K |
| **Custom REST / GraphQL** | bespoke buyer system | $20K – $120K |

**Mechanic:** Fixed-fee per connector with a 90-day warranty period.
Discount tiers for connector bundles (3 connectors → 10% off, 5+ → 15% off).

**Connector reuse:** PrimusNeo retains the right to harden, generalize, and
redistribute any non-bespoke connector through the AZOA connector library.
Bespoke customer logic is held back per the SOW.

---

### 2.3 Deployment

**What it covers:** Reference-architecture rollout, environment provisioning,
data migration, cutover, training, change management.

**SKUs:**

| SKU | Scope | Fixed fee (USD) | Duration |
|-----|-------|-----------------|----------|
| **Atom** | Single-site, single-layer pilot, ≤25 users, dev + prod environments | $35K – $90K | 4–8 weeks |
| **Molecule** | Single-site, full-stack (all 4 layers), ≤100 users | $120K – $320K | 8–14 weeks |
| **Hex** | Multi-site (2–5 sites), full-stack, ≤500 users, federated identity | $400K – $900K | 14–24 weeks |
| **Lattice** | Enterprise (6+ sites or 500+ users), full-stack, global federation, change-management program | $1.0M – $3.5M | 24–48 weeks |
| **Tessellation** | Industry-program scale (national rollout, regulated sector, multi-tenant inside one enterprise) | $3.5M – $12M+ | 9–18 months |

**Each SKU includes:**

- Environment provisioning (dev / staging / prod / DR).
- Reference data migration (up to a stated volume).
- Cutover plan and rehearsal.
- Operator training (standard hours per scope).
- 30-day hypercare post-cutover.

**Excludes** (priced separately): integration SOW, custom development, infra
pass-through, ongoing upkeep.

---

### 2.4 Sustained Upkeep

**What it covers:** Tier-1/2/3 support, version upgrades, security patching,
AZOA connector maintenance, Fractal model retraining cadence, NEOS charter
evolution, AMP scene/world upgrades, on-call.

**Pricing mechanic:** Annual % of license value, **18–25%** depending on
SLA tier. This is the industry default for enterprise software (Oracle 22%,
SAP 22%, Microsoft 20%, AspenTech ~20%, Snowflake bundled).

**SLA tiers:**

| Tier | Coverage | Annual % of license | Notes |
|------|----------|---------------------|-------|
| **Bronze** | Business hours (your tz), 1 business-day P1 response | 18% | Most CC-NC entities |
| **Silver** | 24×5, 4-hour P1 response, named TAM, quarterly review | 22% | Default for commercial mid-market |
| **Gold** | 24×7, 1-hour P1 response, named TAM + on-call rotation, monthly review | 25% | Default for regulated / enterprise |
| **Platinum** | 24×7, 15-min P1, dedicated support pod, weekly review, custom escrow | Quoted | Bank, hospital system, ISO, federal |

**Inclusions across all tiers:**

- Security patches and CVE response per SLA.
- Minor and patch version upgrades.
- Up to two major version upgrades over a 3-year MSA.
- Up to N hours/quarter of Tier-3 engineering time per the tier (4 / 12 /
  24 / 48 respectively).

**Outside inclusions (T&M at standard rates):** schema migrations,
governance redesign, major customization changes, integration to new
external systems.

---

### 2.5 Infra (pass-through + management fee)

**What it covers:** Cloud (AWS / Azure / GCP), edge compute, storage tiers,
observability, chain gas, optional Tie Town reference colocation.

**Pricing mechanic:** **Pass-through at cost + 10–18% management fee.**
Lower fee for transparent direct-pay arrangements where the customer owns
the cloud account; higher fee for fully-managed PrimusNeo-owned-and-billed.

**Standard infra SKUs (Tie Town reference):**

| SKU | Description | Typical monthly cost (USD) |
|-----|-------------|----------------------------|
| **Edge node (Tie Town)** | 1U colocated, AMP + AZOA edge cache, 99.95% target | $1,200 – $2,500 |
| **Cloud reference (small)** | t3-equivalent, 4 vCPU, 16GB, 500GB SSD, 2TB egress | $800 – $1,500 |
| **Cloud reference (mid)** | 16 vCPU, 64GB, 2TB SSD, 10TB egress, multi-AZ | $4,500 – $9,000 |
| **Cloud reference (large)** | 64+ vCPU, 256GB+, 10TB+ SSD, dedicated K8s nodes, multi-region | $18K – $45K |
| **Chain gas reserve** | Estimated monthly burn for governance txs + signature anchoring | Variable; quote per chain |
| **Storage tier (Fractal archive)** | Cold + warm Fractal historical archive (S3 + Glacier or equivalent) | $0.012 – $0.025 per GB-month |

---

## 3. Bundling rules

- **License + Deployment + Upkeep is the minimum viable bundle.**
  Selling license without Deployment is allowed but quoted with a "no-cutover
  warranty" clause that explicitly disclaims rollout risk.
- **Customization is sold only after Discovery.** Discovery is the only
  T&M sale we will do without a fixed-fee follow-on signed within 90 days,
  and even then the fee credits back.
- **Integration is bundled at a discount** when 3+ connectors are signed in
  the same SOW (see §2.2 discount tiers).
- **Infra is never bundled into license** for accounting cleanliness and
  customer trust. Always a separate line item.

---

## 4. Margin targets

| Service class | Target gross margin |
|---------------|---------------------|
| Customization | 55–65% (founders 70%+) |
| Integration (fixed-fee) | 50–60% |
| Deployment (fixed-fee) | 45–55% |
| Sustained Upkeep | 75–85% (the gold mine) |
| Infra mgmt fee | 85%+ (the fee is mostly margin; cost is mostly pass-through) |

License gross margin runs 80–92% per layer per the comparables in
[`research/layer-comparables.md`](./research/layer-comparables.md).

---

## 5. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team | Initial catalog |
