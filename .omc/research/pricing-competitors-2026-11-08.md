# Competitor pricing mechanics — 2026-11-08
Intent: how Palantir, Azure and comparable platforms price, to set PrimusNeo stack pricing competitively.
Method: researcher agent, web search summaries 2026-11-08; only Microsoft's savings-plan and free-account pages fetched directly. Confidence per row.

## Palantir
- Consumption metering: LLM usage in compute-seconds per 10k tokens by model/region (e.g. 36 s per 10k input tokens); AIP Logic metered per block execution and tool call. https://www.palantir.com/docs/foundry/aip/aip-compute-usage (high)
- No public list price; custom enterprise pricing (medium).
- AIP Bootcamps: ~75% convert within five days per a negotiation consultancy; unconfirmed by Palantir; no price found (low).
- AIP Developer Tier: free per Palantir staff; limits in Control Panel (medium).
- US Army enterprise agreement: consolidates 75 contracts, ceiling up to $10B over 10 years, a cap not a commitment, volume discounts, reviewed every 18–24 months. army.mil Jul 2025; Washington Technology (high)
- NHS Federated Data Platform: up to £330M over 7 years (Nov 2023), 3 years committed plus extensions; year one ≥ £25.6M; July 2026 report of reconsideration (single source). (high on award)
- Q3 2025: 530 US commercial customers; top-20 average $83M TTM; NDR 134%; TCV $2.76B (SEC 8-K; high). Q2 2026: NDR 157%; 653 US commercial customers (medium).

## Azure
- Free account: $200 credit for 30 days + always-free and 12-month free services; disabled if not upgraded (high).
- Reservations: up to 72% off pay-as-you-go; 36–72% for 1–3 years (high on "up to").
- Savings plan: fixed hourly commitment, 1 or 3 years; discount by product/term, not size; no rollover, non-cancellable. Microsoft Learn Oct 2026 (high).
- MACC: eligible Marketplace purchases count toward the commitment if the offer is enrolled (high).
- Azure Government: typically ~10–15% over commercial; GCC High estimates +50–80% (medium/low).
- Founders Hub: $1,000 rising to up to $150,000 credits (medium; tiers conflict).

## Comparisons
- Snowflake: $2/$3/$4 per credit by edition; capacity commitments ~15–40% off; overage at on-demand (list high; discount low).
- Databricks: per-second pay-as-you-go; up to 37% off for 3-year commitment on Azure; shortfalls owed (medium).
- Salesforce Agentforce Flex Credits: $500 per 100k credits, 20 credits per action ($0.10); also $2 per conversation or $5/user/month (high).
- MongoDB Atlas: M0 free forever (512 MB); prepaid commitments and marketplace billing (high on M0).
- GSA schedule: price anchored to most-favored commercial customer; price-reductions clause forces GSA price down if that customer is discounted (GSAM 538.2; medium).

## Synthesis for PrimusNeo
1. Open-source engine free + a managed free tier (MongoDB M0 model).
2. Meter intelligence/memory and settlement actions in credits with a public rate card (Salesforce $0.10/action reference).
3. Committed-spend discount ladder ~15–40%, overage at list, with rollover or shortfall cap.
4. Paid pilots that credit forward against year one.
5. Per-module / per-site licences as the fixed anchor; meter the rest.
6. Enterprise agreements with a ceiling separate from the commitment (Army, NHS).
7. Marketplace private offers that burn down buyers' existing cloud commitments.
8. Government: anchor to best commercial price (GSA price-reductions clause); expect 10–15% premium for sovereign/hosted environments.
