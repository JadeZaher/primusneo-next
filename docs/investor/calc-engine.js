// Monthly replica of the PrimusNeo Innovation Lab Financial Model v2 plus investment pools and an enterprise path (see conductor/ecosystem.md §Investment calculator).
const LabModel = (() => {
  const MONTHS = 60;
  const MODEL = { unitFee: 20000, fteCost: 9000, overhead: 18000, annualRaise: 0.03, setup: 50000, reserve: 150000, scaleTarget: 1000000 };

  // Mid-size organization and government tiers: the model's presets (annual volumes spread evenly per month).
  const CASES = {
    conservative: { label: 'Conservative', deploy: [1, 3, 6, 12, 18], fee: [250e3, 250e3, 250e3, 250e3, 250e3], units: [20, 24, 28, 30, 32], baseCost: 0.45, unitCost: 0.55, lab: [2, 6], ei: [4, 9], lag: 2 },
    reference: { label: 'Reference', deploy: [2, 5, 10, 20, 30], fee: [325e3, 325e3, 325e3, 325e3, 350e3], units: [30, 32, 35, 38, 40], baseCost: 0.35, unitCost: 0.45, lab: [2, 7], ei: [4, 11], lag: 1 },
    ambitious: { label: 'Ambitious', deploy: [3, 7, 14, 26, 40], fee: [400e3, 400e3, 400e3, 400e3, 400e3], units: [35, 40, 45, 50, 55], baseCost: 0.35, unitCost: 0.45, lab: [2, 10], ei: [4, 16], lag: 1 },
  };

  // Fixed needs are dollar budgets; growth pools share whatever is left after needs and the reserve.
  const NEEDS = [
    { key: 'leadership', label: 'Leadership & core team' },
    { key: 'partners', label: 'Partnership retention' },
    { key: 'infrastructure', label: 'Infrastructure (OPQPWR)' },
    { key: 'research', label: 'Research & integration' },
  ];
  const GROWTH = [
    { key: 'sales', label: 'Sales', channel: 'mid' },
    { key: 'marketing', label: 'Marketing', channel: 'mid' },
    { key: 'acquisition', label: 'Customer acquisition', channel: 'mid' },
    { key: 'enterprise', label: 'Large-deal sales', channel: 'enterprise' },
  ];
  // PrimusNeo platform modules, licence midpoints per year by size (docs/engagement-models/01-pricing-model.md).
  // Year-one services use the low end of each module's multiple, matching the engagement models' Mid full-stack worked example.
  const MODULES = [
    { key: 'amp', label: 'AMP', licence: { S: 52500, M: 300000, L: 1550000 }, services: 1.5, layer: true },
    { key: 'neos', label: 'NEOS', licence: { S: 12000, M: 60000, L: 260000 }, services: 0.5, layer: true },
    { key: 'azoa', label: 'AZOA', licence: { S: 42000, M: 165000, L: 925000 }, services: 2.0, layer: true },
    { key: 'fractal', label: 'Fractal Engine', licence: { S: 52500, M: 225000, L: 1250000 }, services: 1.0, layer: true },
    { key: 'ei', label: 'Elevate Impact', licence: { S: 80000, M: 80000, L: 80000 }, services: 0, layer: false },
  ];
  const BUNDLE_DISCOUNT = [0, 0, 0.10, 0.18, 0.25]; // by number of the four layers licensed together
  const DEAL_COSTS = { licence: 0.25, services: 0.60, support: 0.20 }; // licence GM ~75%, services 35-50% margin, upkeep 75-85%
  const DEFAULT_DEAL = { size: 'M', modules: { amp: true, neos: true, azoa: true, fractal: true, ei: false } };

  // One platform deal: discounted licences + year-one services (on list) + support; later years renew licence + support.
  function priceDeal(deal, size, supportRate) {
    const chosen = MODULES.filter(m => deal.modules[m.key]);
    const layers = chosen.filter(m => m.layer).length;
    const discount = BUNDLE_DISCOUNT[layers] || 0;
    let licence = 0, services = 0;
    chosen.forEach(m => { const list = m.licence[size]; licence += m.layer ? list * (1 - discount) : list; services += list * m.services; });
    const support = licence * supportRate;
    return {
      size, modules: chosen.length, layers, discount, licence, services, support,
      firstYear: licence + services + support, renewal: licence + support,
      firstYearCost: licence * DEAL_COSTS.licence + services * DEAL_COSTS.services + support * DEAL_COSTS.support,
      renewalCost: licence * DEAL_COSTS.licence + support * DEAL_COSTS.support,
    };
  }

  const DEFAULT_PLAN = {
    needs: { leadership: 450000, partners: 150000, infrastructure: 150000, research: 150000 },
    reservePct: 10,
    growth: { sales: 30, marketing: 15, acquisition: 15, enterprise: 40 },
  };
  // Growth response is illustrative; deal prices come from the module ladder. Enterprise = the same modules at Large size.
  const DEFAULT_ASSUMPTIONS = {
    cac: 300000, saturation: 4000000, cycle: 6, period: 24,
    entCac: 800000, entSaturation: 10000000, entCycle: 12, entMin: 1500000,
    supportRate: 0.22, // Silver SLA, the engagement models' default for commercial mid-market
  };
  const HOLD_PLAN = { needs: { leadership: 0, partners: 0, infrastructure: 0, research: 0 }, reservePct: 100, growth: DEFAULT_PLAN.growth };
  // The lab's base plan (model v2) carries no platform deals, so the hold plan alone reproduces it.
  const PLAN_ASSUMPTIONS = { ...DEFAULT_ASSUMPTIONS };

  const yearIndex = m => Math.ceil(m / 12) - 1;
  const inflation = m => Math.pow(1 + MODEL.annualRaise, yearIndex(m));
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, Number(v) || 0));
  // Michaelis–Menten diminishing returns: ~spend/cost when small, saturating at saturation/cost.
  const wins = (spend, cost, saturation) => spend > 0 ? (spend / cost) / (1 + spend / saturation) : 0;

  function allocate(investment, plan) {
    const reserve = investment * clamp(plan.reservePct, 0, 100) / 100;
    const available = investment - reserve;
    const needsTotal = NEEDS.reduce((s, n) => s + clamp(plan.needs[n.key], 0, Infinity), 0);
    const needsScale = needsTotal > available ? (needsTotal ? available / needsTotal : 0) : 1;
    const spend = { reserve };
    NEEDS.forEach(n => { spend[n.key] = clamp(plan.needs[n.key], 0, Infinity) * needsScale; });
    const growthBudget = Math.max(0, available - needsTotal * needsScale);
    const shareTotal = GROWTH.reduce((s, g) => s + clamp(plan.growth[g.key], 0, 100), 0) || 1;
    GROWTH.forEach(g => { spend[g.key] = growthBudget * clamp(plan.growth[g.key], 0, 100) / shareTotal; });
    return { spend, available, growthBudget, needsFunded: needsScale };
  }

  function simulate({ caseKey = 'reference', investment = 0, plan = DEFAULT_PLAN, assumptions = DEFAULT_ASSUMPTIONS, deal = DEFAULT_DEAL, compare = true } = {}) {
    const c = CASES[caseKey];
    const a = { ...DEFAULT_ASSUMPTIONS, ...assumptions };
    const p = { ...DEFAULT_PLAN, ...plan, needs: { ...DEFAULT_PLAN.needs, ...(plan.needs || {}) }, growth: { ...DEFAULT_PLAN.growth, ...(plan.growth || {}) } };
    const period = Math.max(1, Math.min(MONTHS, Math.round(a.period)));
    const { spend, available, growthBudget, needsFunded } = allocate(investment, p);
    const d = { size: ['S', 'M', 'L'].includes(deal.size) ? deal.size : 'M', modules: { ...DEFAULT_DEAL.modules, ...(deal.modules || {}) } };
    const supportRate = clamp(a.supportRate, 0, 1);
    const platformDeal = priceDeal(d, d.size, supportRate), largeDeal = priceDeal(d, 'L', supportRate);

    // The enterprise path opens only with a dedicated budget; below the minimum, that money sells to mid-size and government instead.
    const enterpriseOpen = spend.enterprise >= a.entMin && spend.enterprise > 0;
    const midSpend = spend.sales + spend.marketing + spend.acquisition + (enterpriseOpen ? 0 : spend.enterprise);
    const midDeployments = wins(midSpend, a.cac, a.saturation);
    const enterpriseDeployments = enterpriseOpen && largeDeal.firstYear > 0 ? wins(spend.enterprise, a.entCac, a.entSaturation) : 0;
    const platformDeployments = platformDeal.firstYear > 0 ? midDeployments : 0;

    const revenue = new Float64Array(MONTHS + 1), direct = new Float64Array(MONTHS + 1), platformRevenue = new Float64Array(MONTHS + 1);
    const fixed = new Float64Array(MONTHS + 1);
    const poolPerMonth = available / period;
    for (let m = 1; m <= MONTHS; m++) {
      const y = yearIndex(m);
      const base = c.deploy[y] * c.fee[y] / 12, unitRev = c.deploy[y] * c.units[y] * MODEL.unitFee / 12;
      revenue[m] += base + unitRev;
      direct[m] += base * c.baseCost + unitRev * c.unitCost;
      const fte = c.lab[0] + (c.lab[1] - c.lab[0]) * (m - 1) / (MONTHS - 1) + c.ei[0] + (c.ei[1] - c.ei[0]) * (m - 1) / (MONTHS - 1);
      fixed[m] = fte * MODEL.fteCost * inflation(m) + MODEL.overhead * inflation(m) + (m <= period ? poolPerMonth : 0);
    }
    // Platform deals won evenly after their sales cycle: year-one value over 12 months, then licence + support renewals.
    const spread = (cycle, total, earn) => {
      const start = Math.round(cycle) + 1, end = Math.min(MONTHS, Math.round(cycle) + period), months = Math.max(0, end - start + 1);
      for (let w = start; w <= end; w++) earn(w, months ? total / months : 0);
    };
    const book =(cycle, count, price) => spread(cycle, count, (w, n) => {
      for (let k = w; k <= MONTHS; k++) {
        const first = k <= w + 11;
        revenue[k] += n * (first ? price.firstYear : price.renewal) / 12;
        platformRevenue[k] += n * (first ? price.firstYear : price.renewal) / 12;
        direct[k] += n * (first ? price.firstYearCost : price.renewalCost) / 12;
      }
    });
    book(a.cycle, platformDeployments, platformDeal);
    book(a.entCycle, enterpriseDeployments, largeDeal);

    const operating = new Float64Array(MONTHS + 1), cash = new Float64Array(MONTHS + 1);
    cash[0] = investment;
    let cumulative = 0, earnedBack = null, scaleMonth = null, lastLoss = 0, minCash = Infinity, minMonth = 0, shortfall = null;
    for (let m = 1; m <= MONTHS; m++) {
      const costs = direct[m] + fixed[m];
      operating[m] = revenue[m] - costs;
      if (operating[m] < 0) lastLoss = m;
      if (scaleMonth === null && operating[m] >= MODEL.scaleTarget) scaleMonth = m;
      cumulative += operating[m];
      if (earnedBack === null && investment > 0 && cumulative >= investment) earnedBack = m;
      const collected = m - c.lag >= 1 ? revenue[m - c.lag] : 0;
      cash[m] = cash[m - 1] + collected - costs - (m === 1 ? MODEL.setup : 0);
      if (cash[m] < minCash) { minCash = cash[m]; minMonth = m; }
      if (shortfall === null && cash[m] < 0) shortfall = m;
    }
    // Model definition: at least six consecutive non-negative months with no later loss.
    const breakEven = lastLoss === 0 ? 1 : (lastLoss + 1 <= MONTHS - 5 ? lastLoss + 1 : null);
    const sum = arr => arr.reduce((s, v) => s + v, 0);
    const result = {
      caseKey, investment, spend, available, growthBudget, needsFunded,
      enterpriseOpen, platformDeployments, enterpriseDeployments, platformDeal, largeDeal,
      deployments: sum(c.deploy) + platformDeployments + enterpriseDeployments,
      revenue, operating, cash, platformRevenue,
      revenue5: sum(revenue), operating5: sum(operating), platform5: sum(platformRevenue), cash60: cash[MONTHS],
      breakEven, earnedBack, scaleMonth, minCash, minMonth, shortfall,
      belowReserve: minCash < MODEL.reserve,
    };
    // Profit each spent dollar adds over five years, against holding the same money as cash.
    if (compare) {
      const held = simulate({ caseKey, investment, plan: HOLD_PLAN, assumptions: a, deal: d, compare: false });
      result.profitAdded = result.operating5 - held.operating5;
      result.multiple = available > 0 ? (result.profitAdded + available) / available : null;
    }
    return result;
  }

  return { MONTHS, MODEL, CASES, NEEDS, GROWTH, MODULES, BUNDLE_DISCOUNT, DEFAULT_DEAL, DEFAULT_PLAN, DEFAULT_ASSUMPTIONS, HOLD_PLAN, PLAN_ASSUMPTIONS, priceDeal, simulate };
})();
