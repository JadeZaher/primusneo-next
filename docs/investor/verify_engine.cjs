// Checks calc-engine.js against the Innovation Lab Financial Model v2 outputs. Run: node docs/investor/verify_engine.cjs
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
  const got = LabModel.simulate({ caseKey, investment: 1500000, plan: LabModel.HOLD_PLAN });
  for (const field of ['revenue5', 'operating5', 'minCash', 'cash60']) {
    assert.ok(Math.abs(got[field] - want[field]) < 1, `${caseKey}.${field}: got ${got[field]}, want ${want[field]}`);
  }
  assert.equal(got.minMonth, want.minMonth, `${caseKey}.minMonth`);
  assert.equal(got.breakEven, want.breakEven, `${caseKey}.breakEven`);
}

// The enterprise path stays closed below its minimum budget and opens above it, shortening the wait for a $1M month.
const small = LabModel.simulate({ investment: 1500000 });
const large = LabModel.simulate({ investment: 10000000 });
assert.equal(small.enterpriseOpen, false, 'enterprise closed at $1.5M');
assert.equal(small.enterpriseDeployments, 0, 'no enterprise deployments while closed');
assert.equal(large.enterpriseOpen, true, 'enterprise open at $10M');
assert.ok(large.scaleMonth < small.scaleMonth, 'more capital reaches a $1M month sooner');
assert.ok(large.multiple > small.multiple, 'each dollar brings back more once enterprise opens');

// Growth spend has diminishing returns: doubling it buys fewer than double the deployments.
const plan = { ...LabModel.DEFAULT_PLAN, growth: { sales: 1, marketing: 0, acquisition: 0, enterprise: 0 } };
const g1 = LabModel.simulate({ investment: 3000000, plan }), g2 = LabModel.simulate({ investment: 5100000, plan });
assert.ok(g2.midDeployments > g1.midDeployments && g2.midDeployments < 2 * g1.midDeployments, 'returns diminish');

// With no investment the reference plan runs short of cash, and the shortfall month is reported.
const none = LabModel.simulate({ investment: 0 });
assert.ok(none.shortfall !== null && none.minCash < 0, 'zero investment shows a shortfall');

console.log('engine matches model v2 for all three cases; enterprise, growth and shortfall checks pass');
