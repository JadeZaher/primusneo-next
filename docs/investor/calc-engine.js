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
    { key: 'enterprise', label: 'Enterprise sales', channel: 'enterprise' },
  ];
  const DEFAULT_PLAN = {
    needs: { leadership: 450000, partners: 150000, infrastructure: 150000, research: 150000 },
    reservePct: 10,
    growth: { sales: 30, marketing: 15, acquisition: 15, enterprise: 40 },
  };
  // Mid-size growth response is illustrative. Enterprise defaults sit inside the engagement models' Large-tier and Lattice ranges.
  const DEFAULT_ASSUMPTIONS = {
    cac: 200000, saturation: 4000000, cycle: 6, period: 24,
    entValue: 2500000, entCost: 0.40, entCac: 400000, entSaturation: 8000000, entCycle: 9, entMin: 750000, entRenewal: 0.45,
    // Maintained platform support: engagement-model upkeep is 18–25% of licence a year at 75–85% margin.
    supportRate: 0.20, supportCost: 0.20,
  };
  const HOLD_PLAN = { needs: { leadership: 0, partners: 0, infrastructure: 0, research: 0 }, reservePct: 100, growth: DEFAULT_PLAN.growth };
  // Model v2 has no support renewals: matching the fixed plan also turns support off.
  const PLAN_ASSUMPTIONS = { ...DEFAULT_ASSUMPTIONS, supportRate: 0 };

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

  function simulate({ caseKey = 'reference', investment = 0, plan = DEFAULT_PLAN, assumptions = DEFAULT_ASSUMPTIONS, compare = true } = {}) {
    const c = CASES[caseKey];
    const a = { ...DEFAULT_ASSUMPTIONS, ...assumptions };
    const p = { ...DEFAULT_PLAN, ...plan, needs: { ...DEFAULT_PLAN.needs, ...(plan.needs || {}) }, growth: { ...DEFAULT_PLAN.growth, ...(plan.growth || {}) } };
    const period = Math.max(1, Math.min(MONTHS, Math.round(a.period)));
    const { spend, available, growthBudget, needsFunded } = allocate(investment, p);

    // The enterprise path opens only with a dedicated budget; below the minimum, that money sells to mid-size and government instead.
    const enterpriseOpen = spend.enterprise >= a.entMin && spend.enterprise > 0;
    const midSpend = spend.sales + spend.marketing + spend.acquisition + (enterpriseOpen ? 0 : spend.enterprise);
    const midDeployments = wins(midSpend, a.cac, a.saturation);
    const enterpriseDeployments = enterpriseOpen ? wins(spend.enterprise, a.entCac, a.entSaturation) : 0;

    const revenue = new Float64Array(MONTHS + 1), direct = new Float64Array(MONTHS + 1), enterpriseRevenue = new Float64Array(MONTHS + 1), supportRevenue = new Float64Array(MONTHS + 1);
    // Support: each mid-size deployment pays supportRate of its base fee a year, from 12 months after delivery.
    const addSupport = (m, n, fee) => {
      const monthly = n * fee * clamp(a.supportRate, 0, 1) / 12;
      for (let k = m + 12; k <= MONTHS; k++) { revenue[k] += monthly; supportRevenue[k] += monthly; direct[k] += monthly * a.supportCost; }
    };
    let midCount = 0, midValue = 0, midFees = 0;
    const fixed = new Float64Array(MONTHS + 1);
    const poolPerMonth = available / period;
    for (let m = 1; m <= MONTHS; m++) {
      const y = yearIndex(m);
      const base = c.deploy[y] * c.fee[y] / 12, unitRev = c.deploy[y] * c.units[y] * MODEL.unitFee / 12;
      revenue[m] += base + unitRev;
      direct[m] += base * c.baseCost + unitRev * c.unitCost;
      addSupport(m, c.deploy[y] / 12, c.fee[y]);
      midCount += c.deploy[y] / 12; midValue += base + unitRev; midFees += base;
      const fte = c.lab[0] + (c.lab[1] - c.lab[0]) * (m - 1) / (MONTHS - 1) + c.ei[0] + (c.ei[1] - c.ei[0]) * (m - 1) / (MONTHS - 1);
      fixed[m] = fte * MODEL.fteCost * inflation(m) + MODEL.overhead * inflation(m) + (m <= period ? poolPerMonth : 0);
    }
    // Extra mid-size deployments: won evenly after the sales cycle, each earning its year's fee and units over the next 12 months.
    const spread = (cycle, total, earn) => {
      const start = Math.round(cycle) + 1, end = Math.min(MONTHS, Math.round(cycle) + period), months = Math.max(0, end - start + 1);
      for (let w = start; w <= end; w++) earn(w, months ? total / months : 0);
    };
    spread(a.cycle, midDeployments, (w, n) => {
      const y = yearIndex(w);
      const base = n * c.fee[y] / 12, unitRev = n * c.units[y] * MODEL.unitFee / 12;
      for (let k = w; k <= Math.min(MONTHS, w + 11); k++) { revenue[k] += base + unitRev; direct[k] += base * c.baseCost + unitRev * c.unitCost; }
      addSupport(w + 11, n, c.fee[y]);
      midCount += n; midValue += n * (c.fee[y] + c.units[y] * MODEL.unitFee); midFees += n * c.fee[y];
    });
    // Enterprise deployments: first-year contract over 12 months, then renewals at entRenewal of that value per year.
    spread(a.entCycle, enterpriseDeployments, (w, n) => {
      for (let k = w; k <= MONTHS; k++) {
        const r = n * a.entValue / 12 * (k <= w + 11 ? 1 : a.entRenewal);
        revenue[k] += r; enterpriseRevenue[k] += r; direct[k] += r * a.entCost;
      }
    });

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
      enterpriseOpen, midDeployments, enterpriseDeployments,
      deployments: sum(c.deploy) + midDeployments + enterpriseDeployments,
      revenue, operating, cash, enterpriseRevenue,
      revenue5: sum(revenue), operating5: sum(operating), enterprise5: sum(enterpriseRevenue), support5: sum(supportRevenue), cash60: cash[MONTHS],
      // Average first-year value of a mid-size deployment, and the support price it carries each later year.
      avgDeployment: midCount ? midValue / midCount : 0,
      avgSupport: midCount ? midFees / midCount * clamp(a.supportRate, 0, 1) : 0,
      breakEven, earnedBack, scaleMonth, minCash, minMonth, shortfall,
      belowReserve: minCash < MODEL.reserve,
    };
    // Profit each spent dollar adds over five years, against holding the same money as cash.
    if (compare) {
      const held = simulate({ caseKey, investment, plan: HOLD_PLAN, assumptions: a, compare: false });
      result.profitAdded = result.operating5 - held.operating5;
      result.multiple = available > 0 ? (result.profitAdded + available) / available : null;
    }
    return result;
  }

  return { MONTHS, MODEL, CASES, NEEDS, GROWTH, DEFAULT_PLAN, DEFAULT_ASSUMPTIONS, HOLD_PLAN, PLAN_ASSUMPTIONS, simulate };
})();
