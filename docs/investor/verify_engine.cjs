// Checks calc-engine.js against the Innovation Lab Financial Model v2 and the engagement-model price ladder. Run: node docs/investor/verify_engine.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
// Evaluate the engine as the deck inlines it: a plain script that defines LabModel.
const LabModel = vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'calc-engine.js'), 'utf8') + '\nLabModel;', {});

// Holding the whole raise as cash must reproduce the model's three presets exactly.
const expected = {
  reference: { revenue5: 73125000, operating5: 34361135.70, minCash: 1283505.52, minMonth: 13, cash60: 32936135.70, breakEven: 13 },
  conservative: { revenue5: 33920000, operating5: 9034641, minCash: 41878, minMonth: 26, cash60: 7814641, breakEven: 25 },
  ambitious: { revenue5: 126300000, operating5: 62606205, minCash: 1264250, minMonth: 1, cash60: 59056205, breakEven: 1 },
};
for (const [caseKey, want] of Object.entries(expected)) {
  const got = LabModel.simulate({ caseKey, investment: 1500000, plan: LabModel.HOLD_PLAN, assumptions: LabModel.PLAN_ASSUMPTIONS });
  for (const field of ['revenue5', 'operating5', 'minCash', 'cash60']) {
    assert.ok(Math.abs(got[field] - want[field]) < 1, `${caseKey}.${field}: got ${got[field]}, want ${want[field]}`);
  }
  assert.equal(got.minMonth, want.minMonth, `${caseKey}.minMonth`);
  assert.equal(got.breakEven, want.breakEven, `${caseKey}.breakEven`);
}

// A Mid full-stack deal prices like the engagement models' worked example: ~$555K licence after 25% off,
// ~$1.11M services, ~$122K Silver upkeep, $1.85-2.0M year one including $60-180K of infrastructure we do not book.
const mid = LabModel.priceDeal(LabModel.DEFAULT_DEAL, 'M', 0.22);
assert.equal(mid.discount, 0.25, 'four layers earn the full-stack discount');
assert.ok(Math.abs(mid.licence - 555000) / 555000 < 0.03, `licence ${mid.licence}`);
assert.ok(mid.services > 950000 && mid.services < 1150000, `services ${mid.services}`);
assert.ok(Math.abs(mid.support - 122000) / 122000 < 0.03, `support ${mid.support}`);
assert.equal(mid.renewal, mid.licence + mid.support, 'renewals are licence plus support');
const twoLayers = LabModel.priceDeal({ modules: { amp: true, fractal: true } }, 'M', 0.22);
assert.equal(twoLayers.discount, 0.10, 'two layers earn 10% off');

// Large deals stay closed below their minimum budget and open above it, shortening the wait for a $1M month.
const small = LabModel.simulate({ investment: 1500000 });
const large = LabModel.simulate({ investment: 10000000 });
assert.equal(small.enterpriseOpen, false, 'large deals closed at $1.5M');
assert.equal(small.enterpriseDeployments, 0, 'no large deals while closed');
assert.equal(large.enterpriseOpen, true, 'large deals open at $10M');
assert.ok(large.scaleMonth < small.scaleMonth, 'more capital reaches a $1M month sooner');
assert.ok(large.multiple > small.multiple, 'each dollar brings back more once large deals open');

// Growth spend has diminishing returns: doubling it buys fewer than double the deals.
const plan = { ...LabModel.DEFAULT_PLAN, growth: { sales: 1, marketing: 0, acquisition: 0, enterprise: 0 } };
const g1 = LabModel.simulate({ investment: 3000000, plan }), g2 = LabModel.simulate({ investment: 5100000, plan });
assert.ok(g2.platformDeployments > g1.platformDeployments && g2.platformDeployments < 2 * g1.platformDeployments, 'returns diminish');

// Choosing no modules sells nothing, so selling spend adds no revenue.
const none = LabModel.simulate({ investment: 3000000, deal: { size: 'M', modules: { amp: false, neos: false, azoa: false, fractal: false, ei: false } } });
assert.equal(none.platform5, 0, 'an empty deal books no platform revenue');

// With no investment the reference plan runs short of cash, and the shortfall month is reported.
const zero = LabModel.simulate({ investment: 0 });
assert.ok(zero.shortfall !== null && zero.minCash < 0, 'zero investment shows a shortfall');

console.log('engine matches model v2 and the price ladder; large-deal, growth and shortfall checks pass');
