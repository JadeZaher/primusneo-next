/**
 * Browser-only payout simulation. No I/O.
 *
 * A timeout is not a decision. Without a key, retrying a lost reply appends
 * a second ledger row. With a key, the payer looks up the stored result and
 * a second try does not append. Giving up still does not pay a request that
 * never arrived: the key makes that zero readable, it does not invent a credit.
 */

export const DEMO_AMOUNT = 40;
export const AMOUNT_LABEL = `${DEMO_AMOUNT} demo units`;
export const DEMO_KEY = "pay-001";
export const PAYEE = "Payee";
const NO_KEY = "none";

export type Fault = "request" | "reply";
export type NextAction = "retry" | "give-up" | "ask";
export type Actor = "payer" | "network" | "ledger";
export type Outcome = "unknown" | "once" | "twice" | "never";

export type Scenario = {
  fault: Fault;
  next: NextAction;
  safe: boolean;
};

export type LedgerEntry = {
  messageId: string;
  key: string;
  payee: string;
  amount: string;
  status: "Settled";
};

export type Step = {
  id: string;
  actor: Actor;
  text: string;
  ledger: LedgerEntry[];
  outcome: Outcome;
  note: string;
};

export type Script = {
  steps: Step[];
  finalOutcome: Exclude<Outcome, "unknown">;
  finalNote: string;
};

export const actorLabel: Record<Actor, string> = {
  payer: "Payer",
  network: "Network",
  ledger: "Ledger",
};

export const faultOptions: { value: Fault; label: string; hint: string }[] = [
  {
    value: "request",
    label: "Timeout on the request",
    hint: "The payout never arrives. The ledger cannot settle what it did not receive.",
  },
  {
    value: "reply",
    label: "Timeout on the reply",
    hint: "The ledger settles the payout. The acknowledgement never comes back.",
  },
];

export const nextOptions: { value: NextAction; label: string; hint: string }[] =
  [
    {
      value: "retry",
      label: "Retry",
      hint: "Send the payout again.",
    },
    {
      value: "give-up",
      label: "Give up",
      hint: "Stop. Do not send it again.",
    },
    {
      value: "ask",
      label: "Ask the ledger",
      hint: "Look up what was recorded. Do not send another payout.",
    },
  ];

export function outcomeLabel(outcome: Outcome): string {
  if (outcome === "once") return "Paid once";
  if (outcome === "twice") return "Paid twice";
  if (outcome === "never") return "Never paid";
  return "Not decided yet";
}

export function settledUnits(entries: LedgerEntry[]): number {
  return entries.length * DEMO_AMOUNT;
}

export type AttemptSummary = {
  id: string;
  fault: Fault;
  next: NextAction;
  safe: boolean;
  faultLabel: string;
  nextLabel: string;
  modeLabel: string;
  outcome: Exclude<Outcome, "unknown">;
  rows: number;
};

function entry(messageId: string, key: string): LedgerEntry {
  return {
    messageId,
    key,
    payee: PAYEE,
    amount: String(DEMO_AMOUNT),
    status: "Settled",
  };
}

function push(
  steps: Step[],
  actor: Actor,
  text: string,
  ledger: LedgerEntry[],
  outcome: Outcome,
  note: string,
) {
  steps.push({
    id: `s${steps.length + 1}`,
    actor,
    text,
    ledger,
    outcome,
    note,
  });
}

function opening(
  safe: boolean,
  fault: Fault,
): { steps: Step[]; rows: LedgerEntry[] } {
  const steps: Step[] = [];
  push(
    steps,
    "payer",
    safe
      ? `Sends ${AMOUNT_LABEL} to ${PAYEE} with idempotency key ${DEMO_KEY}. Message msg-1.`
      : `Sends ${AMOUNT_LABEL} to ${PAYEE}. No idempotency key. Message msg-1.`,
    [],
    "unknown",
    "Waiting on a reply. A send is not a receipt.",
  );

  if (fault === "request") {
    push(
      steps,
      "network",
      "Drops the request. msg-1 never reaches the ledger.",
      [],
      "unknown",
      "The network lost the request. The ledger has not seen it.",
    );
    push(
      steps,
      "ledger",
      "Records nothing. No row, and no rejection either.",
      [],
      "unknown",
      "An empty table is not a decision. It is the absence of one.",
    );
    return { steps, rows: [] };
  }

  const rows = [entry("msg-1", safe ? DEMO_KEY : NO_KEY)];
  push(
    steps,
    "network",
    "Delivers the request to the ledger.",
    [],
    "unknown",
    "The message is across. The ledger has not answered yet.",
  );
  push(
    steps,
    "ledger",
    safe
      ? `Records one credit under ${DEMO_KEY}, stores that result, and sends an acknowledgement.`
      : "Records one credit for msg-1 and sends an acknowledgement. There is no key on the row.",
    rows,
    "once",
    `The ledger has settled the ${AMOUNT_LABEL}. The payer has not heard.`,
  );
  push(
    steps,
    "network",
    "Drops the acknowledgement. The payer sees a timeout.",
    rows,
    "once",
    "One row on the ledger. A timeout for the payer. Those are different facts.",
  );
  return { steps, rows };
}

function finish(steps: Step[]): Script {
  const last = steps[steps.length - 1];
  if (!last || last.outcome === "unknown") {
    throw new Error("Simulation ended without a decision.");
  }
  return { steps, finalOutcome: last.outcome, finalNote: last.note };
}

export function buildScript(scenario: Scenario): Script {
  const { fault, next, safe } = scenario;
  const opened = opening(safe, fault);
  const steps = [...opened.steps];
  const rows = opened.rows;

  if (fault === "request" && !safe) {
    push(
      steps,
      "payer",
      "Sees a timeout and no reply. A timeout is not a decision.",
      [],
      "unknown",
      "From here the payer can retry, stop, or ask. Those are different moves.",
    );
    if (next === "retry") {
      push(
        steps,
        "payer",
        "Retries as a new message, msg-2, still with no key.",
        [],
        "unknown",
        "This is a new message, not a question about msg-1.",
      );
      push(
        steps,
        "network",
        "Delivers msg-2.",
        [],
        "unknown",
        "The second send gets through.",
      );
      const settled = [entry("msg-2", NO_KEY)];
      push(
        steps,
        "ledger",
        "Records one credit for msg-2. It never saw msg-1.",
        settled,
        "once",
        "One row, and it belongs to the retry.",
      );
      push(
        steps,
        "network",
        "Returns the acknowledgement for msg-2.",
        settled,
        "once",
        "Paid once. Only the retry reached the ledger. The first message never became a payment.",
      );
    } else if (next === "give-up") {
      push(
        steps,
        "payer",
        "Stops. Nothing is sent again.",
        [],
        "never",
        "Never paid. The request died on the way, and the payer stopped. The timeout did not say that. The empty table does.",
      );
    } else {
      push(
        steps,
        "payer",
        "Asks the ledger whether msg-1 settled, before sending anything else.",
        [],
        "unknown",
        "The question goes out alone. No second payout is attached.",
      );
      push(
        steps,
        "ledger",
        "Reports no row for msg-1.",
        [],
        "never",
        `Never paid. Asking settled the question and did not move the ${AMOUNT_LABEL}.`,
      );
    }
    return finish(steps);
  }

  if (fault === "request" && safe) {
    if (next === "ask") {
      push(
        steps,
        "payer",
        `Asks for the status of ${DEMO_KEY}. The lookup is the whole move. Nothing else is sent.`,
        [],
        "unknown",
        "Asking is a read.",
      );
      push(
        steps,
        "ledger",
        `Status for ${DEMO_KEY}: no stored decision.`,
        [],
        "never",
        `Never paid. The status is an answer: nothing settled under ${DEMO_KEY}. The same key could be sent later. This attempt does not.`,
      );
      return finish(steps);
    }
    push(
      steps,
      "payer",
      `Sees a timeout. Looks up ${DEMO_KEY} before retrying or stopping.`,
      [],
      "unknown",
      "The key is the question: has this intent already been decided?",
    );
    push(
      steps,
      "ledger",
      `Status for ${DEMO_KEY}: no stored decision.`,
      [],
      "unknown",
      "Nothing has settled under that key.",
    );
    if (next === "retry") {
      push(
        steps,
        "payer",
        `Sends ${DEMO_KEY} again. Same key, same intent, not a new payout.`,
        [],
        "unknown",
        "The lookup came back empty, so this try is the first one that can settle.",
      );
      push(
        steps,
        "network",
        "Delivers the retry.",
        [],
        "unknown",
        "The second send gets through.",
      );
      const settled = [entry("msg-1", DEMO_KEY)];
      push(
        steps,
        "ledger",
        `First time seeing ${DEMO_KEY}. Records one credit and stores the result against the key.`,
        settled,
        "once",
        `One row, stored under ${DEMO_KEY}.`,
      );
      push(
        steps,
        "network",
        "Returns the acknowledgement.",
        settled,
        "once",
        `Exactly once. The lost request was not a payment. The retry, with ${DEMO_KEY}, was the one that settled.`,
      );
    } else {
      push(
        steps,
        "payer",
        "Stops. Not paying is a choice, made after the lookup, not a guess about the timeout.",
        [],
        "never",
        `Never paid. The request never arrived, and the payer did not send it again. The key does not pay anyone on its own. It keeps the zero from looking like a maybe.`,
      );
    }
    return finish(steps);
  }

  if (!safe) {
    if (next === "retry") {
      push(
        steps,
        "payer",
        "Treats the timeout as a failure and sends msg-2, still with no key.",
        rows,
        "once",
        "This is a new message, not a question about msg-1.",
      );
      push(
        steps,
        "network",
        "Delivers msg-2. Nothing along the way calls it a duplicate.",
        rows,
        "once",
        "A new message id looks like a new payment.",
      );
      const twice = [...rows, entry("msg-2", NO_KEY)];
      push(
        steps,
        "ledger",
        "Records a second credit. Two rows, one piece of work.",
        twice,
        "twice",
        `Paid twice. The first payout had already settled. The retry did not ask, so it paid again. The payee balance is ${DEMO_AMOUNT * 2} demo units.`,
      );
    } else if (next === "give-up") {
      push(
        steps,
        "payer",
        "Stops, and writes the attempt down as a failure.",
        rows,
        "once",
        "Paid once, on the ledger. The payer gave up and called it a failure. The row did not change.",
      );
    } else {
      push(
        steps,
        "payer",
        "Asks the ledger about msg-1 before sending anything else.",
        rows,
        "once",
        "The status question goes out. No second payout goes with it.",
      );
      push(
        steps,
        "ledger",
        "Returns the one settled row for msg-1. Does not add another.",
        rows,
        "once",
        "Paid once. The payer asked first. The ledger still had the original row, so there is no second one.",
      );
    }
    return finish(steps);
  }

  if (next === "retry") {
    push(
      steps,
      "payer",
      `Looks up ${DEMO_KEY} before sending again.`,
      rows,
      "once",
      "The timeout is a reason to ask, not a reason to guess.",
    );
    push(
      steps,
      "ledger",
      `Returns the saved result for ${DEMO_KEY}: settled, ${AMOUNT_LABEL}. Does not add a row.`,
      rows,
      "once",
      "Same key, original result. The table does not grow.",
    );
    push(
      steps,
      "payer",
      "Treats that stored result as the reply. Does not send a second payout.",
      rows,
      "once",
      `Exactly once. The retry carried ${DEMO_KEY}, the ledger returned the row it already had, and the second attempt did not become a second row.`,
    );
  } else if (next === "give-up") {
    push(
      steps,
      "payer",
      `Looks up ${DEMO_KEY} before deciding to stop.`,
      rows,
      "once",
      "Stopping can wait until the lookup comes back.",
    );
    push(
      steps,
      "ledger",
      `Returns the saved result for ${DEMO_KEY}. One row. No new credit.`,
      rows,
      "once",
      "The decision was already stored.",
    );
    push(
      steps,
      "payer",
      "Stops waiting. The row is visible, so this is not written down as a failure.",
      rows,
      "once",
      "Exactly once. Giving up ended the wait. The settlement was already in the table.",
    );
  } else {
    push(
      steps,
      "payer",
      `Asks for the status of ${DEMO_KEY}. The lookup is the whole move. No second payout is attached.`,
      rows,
      "once",
      "Asking is a read.",
    );
    push(
      steps,
      "ledger",
      `Returns the saved settlement for ${DEMO_KEY}. Still one row.`,
      rows,
      "once",
      `Exactly once. Same key, same stored result.`,
    );
  }

  return finish(steps);
}

export function listAttempts(): AttemptSummary[] {
  const faults: Fault[] = ["reply", "request"];
  const nexts: NextAction[] = ["retry", "give-up", "ask"];
  const modes = [false, true];
  const attempts: AttemptSummary[] = [];

  for (const safe of modes) {
    for (const fault of faults) {
      for (const next of nexts) {
        const script = buildScript({ fault, next, safe });
        const faultLabel =
          faultOptions.find((option) => option.value === fault)?.label ?? fault;
        const nextLabel =
          nextOptions.find((option) => option.value === next)?.label ?? next;
        attempts.push({
          id: `${safe ? "on" : "off"}-${fault}-${next}`,
          fault,
          next,
          safe,
          faultLabel,
          nextLabel,
          modeLabel: safe ? "Key and lookup" : "No key",
          outcome: script.finalOutcome,
          rows: script.steps[script.steps.length - 1]?.ledger.length ?? 0,
        });
      }
    }
  }

  return attempts;
}

function rowsFor(outcome: Outcome): 0 | 1 | 2 | null {
  if (outcome === "unknown" || outcome === "never") return 0;
  if (outcome === "once") return 1;
  if (outcome === "twice") return 2;
  return null;
}

function assertInvariants() {
  const expected: Record<string, Exclude<Outcome, "unknown">> = {
    "off-reply-retry": "twice",
    "off-reply-give-up": "once",
    "off-reply-ask": "once",
    "off-request-retry": "once",
    "off-request-give-up": "never",
    "off-request-ask": "never",
    "on-reply-retry": "once",
    "on-reply-give-up": "once",
    "on-reply-ask": "once",
    "on-request-retry": "once",
    "on-request-give-up": "never",
    "on-request-ask": "never",
  };

  const attempts = listAttempts();
  if (attempts.length !== 12) {
    throw new Error(`Expected 12 attempts, got ${attempts.length}.`);
  }

  const seen = new Set<string>();
  for (const attempt of attempts) {
    if (seen.has(attempt.id))
      throw new Error(`Duplicate attempt ${attempt.id}.`);
    seen.add(attempt.id);
    const want = expected[attempt.id];
    if (!want) throw new Error(`Unexpected attempt ${attempt.id}.`);
    if (attempt.outcome !== want) {
      throw new Error(
        `${attempt.id} ended ${attempt.outcome}, expected ${want}.`,
      );
    }
    if (attempt.safe && attempt.outcome === "twice") {
      throw new Error(`${attempt.id} paid twice with the key on.`);
    }

    const script = buildScript(attempt);
    if (script.finalOutcome !== want) {
      throw new Error(`${attempt.id} script outcome drifted.`);
    }
    if (script.finalNote !== script.steps[script.steps.length - 1]?.note) {
      throw new Error(`${attempt.id} final note is not the last step.`);
    }

    const actors = new Set<Actor>();
    let previousRows = 0;
    const ids = new Set<string>();
    for (const step of script.steps) {
      if (ids.has(step.id)) throw new Error(`Duplicate step id ${step.id}.`);
      ids.add(step.id);
      if (!step.text.trim() || !step.note.trim())
        throw new Error(`Empty copy in ${attempt.id}.`);
      actors.add(step.actor);
      if (step.ledger.length < previousRows) {
        throw new Error(`${attempt.id} dropped a ledger row.`);
      }
      previousRows = step.ledger.length;
      const allowed = rowsFor(step.outcome);
      if (allowed === null || step.ledger.length !== allowed) {
        throw new Error(
          `${attempt.id} ${step.id} has ${step.ledger.length} rows for outcome ${step.outcome}.`,
        );
      }
      for (const line of step.ledger) {
        if (
          line.amount !== String(DEMO_AMOUNT) ||
          line.payee !== PAYEE ||
          line.status !== "Settled"
        ) {
          throw new Error(`${attempt.id} has a malformed ledger row.`);
        }
        if (attempt.safe && line.key !== DEMO_KEY) {
          throw new Error(`${attempt.id} stored a row without ${DEMO_KEY}.`);
        }
        if (!attempt.safe && line.key !== NO_KEY) {
          throw new Error(
            `${attempt.id} stored a key while the toggle was off.`,
          );
        }
      }
    }

    if (
      !actors.has("payer") ||
      !actors.has("network") ||
      !actors.has("ledger")
    ) {
      throw new Error(`${attempt.id} is missing an actor.`);
    }

    const finalRows = script.steps[script.steps.length - 1]?.ledger ?? [];
    if (finalRows.length !== attempt.rows)
      throw new Error(`${attempt.id} row count drifted.`);
    if (want === "twice") {
      const idsInOrder = finalRows.map((line) => line.messageId).join(",");
      if (idsInOrder !== "msg-1,msg-2") {
        throw new Error(`${attempt.id} double pay was not msg-1 then msg-2.`);
      }
    }
  }

  for (const id of Object.keys(expected)) {
    if (!seen.has(id)) throw new Error(`Missing attempt ${id}.`);
  }
}

assertInvariants();
