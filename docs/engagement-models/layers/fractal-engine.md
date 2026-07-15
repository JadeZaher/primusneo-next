# Fractal Engine — Intelligence Engagement Model

> **Layer:** 04 — Intelligence / Organizational Memory
> **Steward:** Escherbridge
> **License:** **Creative Commons BY-NC 4.0** (no ShareAlike — derivative models may carry separate training-data licenses) + PrimusNeo Commercial License (PCL) for any commercial use
> **Reference deployment:** Tie Town [TX] operational telemetry + Escherbridge corpus
> **Anchors source:** [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. What Fractal Engine actually is (in the buyer's vocabulary)

Fractal Engine is the **intelligence and historical-archive layer** — the part of the stack that turns raw operational telemetry into durable archives, queryable historical context, and actionable real-time signals.

The differentiator vs Palantir / Snowflake / Databricks / Splunk / Datadog: Fractal Engine treats **NEOS governance events** and **AMP spatial events** as first-class signal types. The other intelligence platforms can ingest anything but don't *understand* governance and spatial as native concepts. Fractal does — and that is what makes "the contextualized data layer that 70% of Industry 4.0 pilots keep failing to build" actually buildable.

In the language enterprises already know:

- A **manufacturing CIO**: Fractal is the OEE + downtime + scrap + energy intelligence layer tied to live spatial events, not month-end reports.
- A **healthcare CDO**: Fractal is the population health + RWE + operational analytics layer that doesn't require ripping out Innovaccer / Health Catalyst / Arcadia.
- A **bank CRO**: Fractal is the regulatory + risk intelligence layer that produces the auditable attestation logs MiCA + OCC Letter 1184 + SAB 122 reward.
- A **utility CSO + COO**: Fractal is the predictive APM + carbon MRV + Article 6 attestation intelligence layer.
- A **DAO Treasury Council**: Fractal is the treasury policy backtesting + delegate-effectiveness + protocol KPI intelligence layer — the "Llama analytics" capability without the Llama retainer.

Fractal is **the layer that converts the federated stack into an operating intelligence**, not just a federated coordination system.

---

## 2. License posture — Creative Commons with Commercial Restrictions

| Use | License | Cost |
|-----|---------|------|
| Personal / academic / research use of platform + models trained on public corpus | CC-BY-NC 4.0 | Free |
| Nonprofit community deployment (cooperative, neighborhood, civic group) with no revenue from the deployment | CC-BY-NC 4.0 | Free |
| DAO / protocol with treasury ≤ $5M USD-equiv | CC-BY-NC 4.0 | Free |
| Small commercial entity meeting **all** de-minimis thresholds (≤$1M revenue, ≤10 FTE, ≤250 connected users, no resale) | CC-BY-NC 4.0 | Free |
| Above any de-minimis threshold | **PrimusNeo Commercial License (PCL)** | See tiered pricing below |
| Hosting Fractal as a paid analytics service | **PCL required** | Tiered |
| Embedding in any commercial product | **PCL required** | Tiered |
| Government / public-sector entity procuring through paid procurement vehicle | **PCL required** | Tiered |

**IP on derivative models:**
- Models trained on a **customer's data** remain the customer's IP, period.
- Models trained on **Escherbridge's public corpus** remain Escherbridge IP and are licensed back to the customer under PCL scope.
- Models trained on a **blend** (which is the most common case in practice) are governed by a per-engagement IP schedule attached to the PCL. Default: customer owns the blended weights for their licensed scope; Escherbridge retains rights to the public-corpus-derived components.

This is more permissive than Palantir's IP regime and more buyer-friendly than the OpenAI / Anthropic "we own the model, you license access" pattern.

---

## 3. Pricing tiers (annual commercial license, before services)

| Scale | Definition | Annual License | Services Multiplier (Y1) | Typical 3-yr TCO |
|-------|------------|----------------|--------------------------|------------------|
| **Small** | <5 data sources, departmental analytics, <1TB managed | **$30K–$75K/yr** | 1–2x | $140K–$340K |
| **Mid** | 5–20 data sources, operational telemetry + historical archive, 1–20TB | **$100K–$350K/yr** | 1–2x | $450K–$1.6M |
| **Large** | 20+ sources, cross-org intelligence, real-time + archive, >20TB | **$500K–$2M+/yr** | 1–2x | $2.2M–$9M+ |

**Pricing mechanic options** (default in bold):

- **Tiered enterprise license** (default): platform + included data-source count + included compute envelope; overages per the table below
- Per-data-source: $4K–$25K/data-source/yr (good for departmental sales motion)
- Per-compute-unit (Snowflake-style): $1.50–$3.50/Fractal-credit; useful for buyers used to Snowflake/Databricks mental model
- Per-research-query (pharma RWE / clinical analytics context): $5–$500/query depending on depth and dataset size
- PMPM (healthcare population health / payer context): $0.50–$8 PMPM depending on intensity, well below the $15–$200 PMPM industry range
- Per-tCO2e managed (energy/ag carbon MRV context): bundled into the tiered license; emerging mechanic if customer prefers

**Overage mechanics** (above tier-included envelope):
- Data sources beyond included: $4K–$15K/source/yr
- Compute credits beyond envelope: at per-credit rate
- TB beyond included: $25/TB/month (parity with Snowflake)

---

## 4. Services mix

Fractal services are **moderate** (1–2x license Y1) — lighter than AZOA/AMP but heavier than NEOS because data pipeline + model training + ontology mapping is real engineering. Typical Mid-tier SOW:

| Service | Scope | Fixed-fee range |
|---------|-------|-----------------|
| **Data source discovery + ontology mapping** | Inventory of buyer's data sources, ontology design, signal taxonomy | $50K–$150K |
| **Data pipeline buildout** | Per-source ingest + transform + signal generation (AZOA handles transport; Fractal handles semantics) | $25K–$100K per source |
| **Model training** | Per custom model: feature engineering + training + evaluation + deployment | $40K–$200K per model |
| **Operational dashboards + analyst onboarding** | Per-persona dashboards (CIO, COO, CRO, etc.) + Fractal-query training | $30K–$100K |
| **NEOS event + AMP spatial event signal integration** (the differentiator) | Wiring governance + spatial events as first-class signals into Fractal | $40K–$120K |
| **30-day hypercare** | Model tuning, dashboard polish | Included |

For pharma / regulated FS / energy: add **regulatory model validation** ($60K–$250K) and **audit-trail attestation buildout** ($40K–$120K) as separately scoped items.

---

## 5. Sustained upkeep + infra

Annual sustained upkeep = **20–25% of license** (above the all-layer floor because model retraining cadence is real ongoing work — quarterly minor retraining + annual major retraining is typical).

Infra (pass-through + 12% mgmt fee):

- **Fractal compute + query**: aligned with the buyer's cloud account preferences (BYO cloud preferred; managed-cloud available)
  - Reference: comparable Snowflake credit cost $2–$4; Databricks DBU $0.15–$0.40 — Fractal is positioned at parity with these on raw compute
- **Storage (warm + cold archive)**: $0.012/GB-mo warm S3-class; $0.004/GB-mo cold Glacier-class
- **Model serving (GPU)**: $1.10–$3.95/GPU-hr managed (Modal-class); reserved instances 30–50% off
- **Observability (Datadog/equivalent)**: pass-through at buyer's existing rates
- **Optional Escherbridge corpus access** (where the customer wants Fractal models pretrained on Escherbridge's public corpus before customer-data fine-tuning): bundled into PCL or per-engagement priced

---

## 6. Bundle interactions

Fractal is the **value-multiplier layer**. It composes with every other layer to turn coordination into insight.

| Other layer | What you unlock together |
|-------------|--------------------------|
| **+ AMP** | Spatial events become first-class signals. Predictive maintenance, OEE, capacity forecasting attach to scene positions. **Standard duo for any operational-twin engagement.** |
| **+ NEOS** | Governance events become first-class signals. Contribution accounting → workforce intelligence; council decisions → policy-effectiveness analytics; signed attestations → automated regulatory reporting. **Required duo for regulated FS, healthcare, energy.** |
| **+ AZOA** | AZOA is the data-in path; Fractal is the intelligence-out layer. **Required duo for any analytics-led engagement; Fractal without AZOA is a stranded analytics tool with no data feed.** |
| **Full Stack** | The federated coordination fabric with native intelligence. **This is the configuration that beats Palantir on TCO and beats Snowflake/Databricks on operational context.** |

---

## 7. Two worked engagement examples

### 7.1 Mid Fractal+AZOA: Regional health-system population analytics (Tier-2 Mid)

- **Buyer:** CIO + CDO + CCO at a 4-hospital regional health system with ~800 beds and a 200K-life MA payer arm
- **Scope:** Fractal for population health + utilization analytics across the 4 hospitals + payer arm; AZOA for Epic FHIR R4 + Cerner FHIR + claims feed + SDoH data ingest; PMPM-priced license
- **Quote:**
  - Fractal Mid: $220K/yr (12 data sources, 8 TB managed); priced as PMPM at $1.10 PMPM × 200K lives = $264K/yr (use the higher of tiered or PMPM)
  - AZOA Mid: $140K/yr (10 integrations: Epic + Cerner + 3 claims + 2 SDoH + 3 internal)
  - Duet bundle: -10% → $364K/yr license
  - Y1 services (~1.6x blend): $580K (Epic FHIR connector $200K, Cerner FHIR $180K, ontology mapping $80K, dashboards $90K + others)
  - Y1 upkeep (Gold SLA — healthcare default, 25%): $91K (starts Y2)
  - Infra: $80K–$180K/yr (HITRUST-compliant cloud surcharge applies)
- **Y1 total:** ~$1.1M–$1.2M · **3-yr TCO:** ~$2.4M–$2.8M
- **Friction-cost anchor:** Per the healthcare research brief: interop fabric at this scale runs $5M–$15M over 3 yrs (Redox at $35K/month floor alone is ~$1.3M over 3 yrs). Innovaccer/Arcadia at $600K–$3M/yr. Combined Y1 displacement opportunity: $1.5M–$3M/yr
- **Capture rate:** $364K ÷ $2.2M (midpoint) = **~17% value share** — defensible inside the 8–20% healthcare capture band
- **HITRUST gate:** PrimusNeo HITRUST i1 prerequisite for this RFP (the brief flags 81% of hospitals require it)

### 7.2 Large Full-Stack: Tier-1 OEM global manufacturing program (Tier-3 Large)

This is the manufacturing example from [`amp.md` §7.2](./amp.md) extended into a full-stack engagement. See that file for the AMP-side numbers; here we focus on Fractal's contribution:

- Fractal Large in the bundle: $800K/yr (20+ data sources across 12 plants: PLC + MES + historian + ERP + quality + energy + workforce)
- Custom Fractal models: predictive OEE per line, downtime root-cause classifier, scrap classifier, Scope 3 emissions estimator for DPP — typically 4–8 custom models in Y1
- Y1 Fractal services: $1.2M (significant chunk of the overall $2.8M services number)
- Y2+ steady state: Fractal upkeep + quarterly model retraining ~$200K/yr
- **Value contribution:** Fractal is the layer that converts the spatial twin from "live data viewer" into "operating intelligence" — the difference between OEE + downtime + scrap + Scope 3 being *visible* and being *predicted*. The 5–15% manufacturing capture band assumes Fractal is part of the stack; without it the capture rate drops to 1–3%.

---

## 8. Steward economics

Per [`../02-licensing-model.md` §4](../02-licensing-model.md):

- **Escherbridge royalty: 18% of Fractal Engine line-item license revenue**, paid quarterly
- Escherbridge is the primary delivery partner for Fractal ML engineering, custom model development, and ontology design; services revenue accrues to Escherbridge directly when they deliver
- The CC-NC + PCL structure preserves Escherbridge's stewardship from cloud-hyperscaler appropriation of the Fractal codebase
- Escherbridge's public corpus is a strategic asset shared across the federation; access terms are governed by the per-engagement IP schedule

---

## 9. Risks specific to Fractal Engine

| Risk | Mitigation |
|------|------------|
| Comparison to Palantir (price + capability) | We are explicitly below Palantir commercial ($250K–$500K/yr entry vs our $100K Mid start) and beat them on operational ontology native support. Lead with TCO comparison. |
| Comparison to Snowflake/Databricks (commodity perception) | We sit *above* Snowflake/Databricks raw compute in price but bring native NEOS + AMP signal types and the operational ontology layer they don't have. Position as the operating-intelligence layer that *uses* a data warehouse, not as a data warehouse |
| Model IP confusion (who owns what) | Per-engagement IP schedule in PCL spells it out. Default = customer owns blended weights for licensed scope; Escherbridge retains public-corpus-derived components |
| EU AI Act high-risk classification | If Fractal's outputs constitute high-risk decision support (Annex III), conformity assessment $20K–$80K per high-risk system is bundled into the engagement deliverable. Pursue conformity early per engagement |
| HITRUST / FedRAMP gating (healthcare, government) | HITRUST i1 cert is prerequisite for healthcare RFPs >$500K. FedRAMP Moderate for federal. Both are funded as central PrimusNeo investments, not per-engagement |
| Build-it-ourselves at hyperscaler scale | At true hyperscaler scale (>$10M/yr Fractal spend), some buyers WILL build their own. That's fine — we're not the right answer for everyone. Focus on the buyers who value time-to-value + operational context + federated steward credibility over absolute cost |
| Model drift / retraining cadence | Quarterly minor + annual major retraining baked into sustained upkeep. Drift detection metrics are native dashboards |

---

## 10. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team | Initial Fractal Engine engagement model |
