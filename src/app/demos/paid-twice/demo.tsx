"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import {
  actorLabel,
  faultOptions,
  listAttempts,
  nextOptions,
  outcomeLabel,
  settledUnits,
  buildScript,
  type Actor,
  type Fault,
  type NextAction,
} from "./script";

const attempts = listAttempts();
const actors: Actor[] = ["payer", "network", "ledger"];

const controlButton =
  "inline-flex min-h-11 items-center justify-center border border-white/25 px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors hover:border-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:border-white/10 disabled:text-mist";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    block: "nearest",
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

function Choice<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
  columns,
}: {
  legend: string;
  name: string;
  value: T;
  options: { value: T; label: string; hint: string }[];
  onChange: (value: T) => void;
  columns: string;
}) {
  return (
    <fieldset>
      <legend className="text-mist mb-3 font-mono text-[11px] tracking-[0.18em] uppercase">
        {legend}
      </legend>
      <div className={cn("grid gap-2", columns)}>
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <label
              key={option.value}
              className={cn(
                "has-[:focus-visible]:outline-accent flex min-h-11 cursor-pointer gap-3 border px-3 py-3 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2",
                selected
                  ? "border-paper bg-white/[0.04]"
                  : "border-white/15 hover:border-white/40",
              )}
            >
              <input
                className="accent-paper mt-1 size-4 shrink-0"
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
              />
              <span>
                <span className="text-paper block">{option.label}</span>
                <span className="text-mist mt-1 block text-sm leading-relaxed">
                  {option.hint}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function Run({
  fault,
  next,
  safe,
}: {
  fault: Fault;
  next: NextAction;
  safe: boolean;
}) {
  const script = buildScript({ fault, next, safe });
  const end = script.steps.length - 1;
  const [cursor, setCursor] = useState<number | null>(null);
  const pendingScroll = useRef<number | null>(null);
  const stepIndex = cursor === null ? end : Math.min(cursor, end);
  const step = script.steps[stepIndex];
  const done = stepIndex === end;
  const ledger = step?.ledger ?? [];
  const previousRows =
    stepIndex > 0 ? (script.steps[stepIndex - 1]?.ledger.length ?? 0) : 0;
  const justRecorded = ledger.length > previousRows;
  const balance = settledUnits(ledger);

  function go(index: number | null) {
    const nextIndex = index === null ? end : Math.max(0, Math.min(end, index));
    pendingScroll.current = nextIndex;
    setCursor(nextIndex === end ? null : nextIndex);
  }

  useEffect(() => {
    if (pendingScroll.current === null) return;
    const index = pendingScroll.current;
    pendingScroll.current = null;
    scrollToId(`paid-twice-step-${index}`);
  }, [stepIndex]);

  function onTimelineKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(stepIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(stepIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      go(0);
    } else if (event.key === "End") {
      event.preventDefault();
      go(null);
    }
  }

  if (!step) return null;

  return (
    <div className="mt-8">
      <div aria-live="polite" aria-atomic="true">
        <div
          id="paid-twice-outcome"
          className="bg-ink/95 sticky top-16 z-20 -mx-4 scroll-mt-20 border-y border-white/10 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-mist font-mono text-[11px] tracking-[0.16em] uppercase">
                {done ? "Result" : "So far"}
              </p>
              <p
                data-testid="outcome"
                className="text-paper text-[clamp(28px,4vw,40px)] leading-none font-medium tracking-[-0.03em]"
              >
                {outcomeLabel(step.outcome)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-mist font-mono text-[11px] tracking-[0.16em] uppercase">
                Payee balance
              </p>
              <p
                data-testid="balance"
                className="text-paper text-2xl font-medium tracking-[-0.03em]"
              >
                {balance}
              </p>
              <p className="text-mist text-xs">demo units</p>
            </div>
          </div>
        </div>
        <p className="text-mist mt-4 max-w-[65ch] text-[15px] leading-relaxed">
          {step.note}
        </p>
        <p className="text-mist mt-2 font-mono text-[11px] tracking-[0.16em] uppercase">
          Step {stepIndex + 1} of {script.steps.length}
          {done ? "" : " · not the end of this attempt"}
        </p>
      </div>

      <section className="mt-8" aria-labelledby="ledger-heading">
        <h3
          id="ledger-heading"
          className="text-mist font-mono text-[11px] tracking-[0.18em] uppercase"
        >
          Ledger
        </h3>
        <p className="text-mist mt-2 max-w-[65ch] text-sm leading-relaxed">
          Simulated rows for this attempt. Not a payment system. {balance} demo
          units settled so far.
        </p>
        {ledger.length === 0 ? (
          <p
            className="text-paper mt-4 border border-white/15 px-3 py-4 text-sm"
            data-testid="ledger-empty"
          >
            No rows. A timeout does not write one.
          </p>
        ) : (
          <>
            <ul className="mt-4 space-y-2 sm:hidden" data-testid="ledger-cards">
              {ledger.map((line, index) => (
                <li
                  key={line.messageId}
                  className="text-paper border border-white/15 px-3 py-3 text-sm"
                >
                  <p className="text-mist font-mono text-[11px] tracking-[0.16em] uppercase">
                    {line.messageId}
                    {justRecorded && index === ledger.length - 1
                      ? " · settled just now"
                      : ""}
                  </p>
                  <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
                    <dt className="text-mist">Key</dt>
                    <dd>{line.key}</dd>
                    <dt className="text-mist">Payee</dt>
                    <dd>{line.payee}</dd>
                    <dt className="text-mist">Amount</dt>
                    <dd>{line.amount}</dd>
                    <dt className="text-mist">Status</dt>
                    <dd>Settled</dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-4 hidden overflow-x-auto sm:block">
              <table
                className="text-paper w-full min-w-[32rem] text-left text-sm"
                data-testid="ledger-table"
              >
                <caption className="sr-only">
                  Simulated ledger. {ledger.length}{" "}
                  {ledger.length === 1 ? "row" : "rows"}. {balance} demo units.
                </caption>
                <thead>
                  <tr className="text-mist border-b border-white/15 font-mono text-[11px] tracking-[0.16em] uppercase">
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Message
                    </th>
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Key
                    </th>
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Payee
                    </th>
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Amount
                    </th>
                    <th scope="col" className="py-2 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ledger.map((line, index) => (
                    <tr
                      key={line.messageId}
                      className="border-b border-white/10"
                    >
                      <th scope="row" className="py-3 pr-4 font-medium">
                        {line.messageId}
                      </th>
                      <td className="py-3 pr-4">{line.key}</td>
                      <td className="py-3 pr-4">{line.payee}</td>
                      <td className="py-3 pr-4">{line.amount}</td>
                      <td className="py-3">
                        {justRecorded && index === ledger.length - 1
                          ? "Settled just now"
                          : "Settled"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      <section className="mt-10" aria-labelledby="sequence-heading">
        <h3
          id="sequence-heading"
          className="text-mist font-mono text-[11px] tracking-[0.18em] uppercase"
        >
          Sequence
        </h3>
        <p className="text-mist mt-2 max-w-[65ch] text-sm leading-relaxed">
          Payer, network, ledger, in order. Focus the sequence and use Left and
          Right to move one step. Home jumps to the start. End shows the result.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            className={controlButton}
            onClick={() => go(stepIndex - 1)}
            disabled={stepIndex === 0}
          >
            Previous step
          </button>
          <button
            type="button"
            className={controlButton}
            onClick={() => go(stepIndex + 1)}
            disabled={done}
          >
            Next step
          </button>
          <button
            type="button"
            className={controlButton}
            onClick={() => go(0)}
            disabled={stepIndex === 0}
          >
            Start over
          </button>
          <button
            type="button"
            className={controlButton}
            onClick={() => go(null)}
            disabled={done}
          >
            Show the result
          </button>
        </div>
        <div
          className="focus-visible:outline-accent mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          role="region"
          tabIndex={0}
          aria-label="Payout sequence. Left and right arrows move one step. Home jumps to the start. End shows the result."
          onKeyDown={onTimelineKeyDown}
        >
          <div
            className="mb-3 hidden md:grid md:grid-cols-[2.25rem_minmax(0,1fr)] md:gap-3"
            aria-hidden="true"
          >
            <div />
            <div className="text-mist grid grid-cols-3 gap-3 font-mono text-[11px] tracking-[0.16em] uppercase">
              <div>Payer</div>
              <div>Network</div>
              <div>Ledger</div>
            </div>
          </div>
          <ol className="space-y-3" aria-label="Steps revealed so far">
            {script.steps.slice(0, stepIndex + 1).map((item, index) => {
              const current = index === stepIndex;
              return (
                <li
                  key={item.id}
                  id={`paid-twice-step-${index}`}
                  aria-current={current ? "step" : undefined}
                  className="grid scroll-mt-48 grid-cols-[2.25rem_minmax(0,1fr)] gap-3"
                >
                  <div
                    className="text-mist pt-3 font-mono text-[11px]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="md:grid md:grid-cols-3 md:gap-3">
                    {actors.map((actor) => {
                      if (actor !== item.actor) {
                        return (
                          <div
                            key={actor}
                            className="hidden md:block"
                            aria-hidden="true"
                          />
                        );
                      }
                      return (
                        <div
                          key={actor}
                          className={cn(
                            "border px-3 py-3",
                            current ? "border-paper" : "border-white/15",
                          )}
                        >
                          <div className="text-mist font-mono text-[11px] tracking-[0.16em] uppercase">
                            {actorLabel[actor]}
                            {current ? " · now" : ""}
                          </div>
                          <p className="text-paper mt-2 text-sm leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}

export function PaidTwiceDemo() {
  const [fault, setFault] = useState<Fault>("reply");
  const [next, setNext] = useState<NextAction>("retry");
  const [safe, setSafe] = useState(false);
  const scenarioKey = `${fault}|${next}|${safe ? "on" : "off"}`;

  function showAttempt(attempt: (typeof attempts)[number]) {
    setFault(attempt.fault);
    setNext(attempt.next);
    setSafe(attempt.safe);
    requestAnimationFrame(() => {
      document.getElementById("paid-twice-outcome")?.scrollIntoView({
        block: "start",
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    });
  }

  return (
    <div>
      <h2 className="text-paper text-[clamp(28px,3vw,40px)] font-medium tracking-[-0.03em]">
        Run one attempt
      </h2>
      <p className="text-mist mt-3 max-w-[65ch] text-[15px] leading-relaxed">
        The payer is trying to pay the payee {`40 demo units`}. Pick where the
        timeout lands, then what the payer does with the silence. Changing a
        choice shows that attempt&apos;s result. Step through it if you want the
        sequence one beat at a time.
      </p>

      <div className="mt-6 space-y-6">
        <Choice
          legend="Inject a timeout"
          name="fault"
          value={fault}
          options={faultOptions}
          onChange={setFault}
          columns="sm:grid-cols-2"
        />
        <Choice
          legend="Then the payer will"
          name="next"
          value={next}
          options={nextOptions}
          onChange={setNext}
          columns="lg:grid-cols-3"
        />
        <div>
          <label className="has-[:focus-visible]:outline-accent flex min-h-11 cursor-pointer gap-3 border border-white/15 px-3 py-3 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2">
            <input
              className="accent-paper mt-1 size-4 shrink-0"
              type="checkbox"
              checked={safe}
              onChange={(event) => setSafe(event.target.checked)}
            />
            <span>
              <span className="text-paper block">
                Idempotency key and status lookup
              </span>
              <span className="text-mist mt-1 block text-sm leading-relaxed">
                {safe
                  ? "On. One key, pay-001. The payer asks the ledger before acting on the timeout. A retry sends again only when that key has no stored result. It cannot add a second row. It also does not pay a request that never arrived unless you send that same key again."
                  : "Off. A retry is a new message. The timeout is treated as a reason to guess."}
              </span>
            </span>
          </label>
        </div>
      </div>

      <Run key={scenarioKey} fault={fault} next={next} safe={safe} />

      <section className="mt-14" aria-labelledby="attempts-heading">
        <h3
          id="attempts-heading"
          className="text-mist font-mono text-[11px] tracking-[0.18em] uppercase"
        >
          All twelve attempts
        </h3>
        <p className="text-mist mt-2 max-w-[65ch] text-sm leading-relaxed">
          Same 40 demo units. The timeout, the next move, and the key are the
          only switches. Select one to show its result.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {attempts.map((attempt) => {
            const selected =
              attempt.fault === fault &&
              attempt.next === next &&
              attempt.safe === safe;
            return (
              <li key={attempt.id}>
                <button
                  type="button"
                  aria-pressed={selected}
                  data-testid={`attempt-${attempt.id}`}
                  onClick={() => showAttempt(attempt)}
                  className={cn(
                    "focus-visible:outline-accent flex min-h-11 w-full flex-col border px-3 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                    selected
                      ? "border-paper bg-white/[0.04]"
                      : "border-white/15 hover:border-white/40",
                  )}
                >
                  <span className="text-mist font-mono text-[11px] tracking-[0.16em] uppercase">
                    {attempt.modeLabel}
                    {selected ? " · showing" : ""}
                  </span>
                  <span className="text-paper mt-2 block">
                    {attempt.faultLabel}
                  </span>
                  <span className="text-mist mt-1 block text-sm">
                    Then {attempt.nextLabel.toLowerCase()}.
                  </span>
                  <span className="text-paper mt-3 block text-lg">
                    {outcomeLabel(attempt.outcome)}
                  </span>
                  <span className="text-mist mt-1 block font-mono text-[11px] tracking-[0.14em] uppercase">
                    {attempt.rows}{" "}
                    {attempt.rows === 1 ? "ledger row" : "ledger rows"}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
