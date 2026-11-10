import type { Metadata } from "next";
import Link from "next/link";
import { getEssay } from "@/content/essays";
import { PaidTwiceDemo } from "./demo";

const POST_PATH = "/blog/paid-twice-or-never";

const fallbackSources = [
  {
    label: "Stripe Docs, Idempotent requests",
    href: "https://docs.stripe.com/api/idempotent_requests",
  },
  {
    label:
      "Federal Reserve Banks, FedNow Service Readiness Guide: Understanding the Payment Timeout Clock",
    href: "https://explore.fednow.org/resources/readiness-guide-understanding-the-payment-timeout-clock.pdf",
  },
  {
    label:
      "AZOA README (JadeZaher/azoa-autonomous-zones-of-action), Status and value-rail notes",
    href: "https://github.com/JadeZaher/azoa-autonomous-zones-of-action",
  },
];

export const metadata: Metadata = {
  title: "Paid twice, or never — simulation",
  description:
    "A browser-only simulation of a payout over a flaky network. No real money and no network calls. The ledger is a table in the browser.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: "/demos/paid-twice",
  },
  openGraph: {
    title: "Paid twice, or never — simulation",
    description:
      "A browser-only simulation. No real money and no network calls.",
    url: "/demos/paid-twice",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Paid twice, or never — simulation",
    description:
      "A browser-only simulation. No real money and no network calls.",
  },
};

const linkClass =
  "text-paper underline decoration-white/30 underline-offset-4 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const textButton =
  "inline-flex min-h-11 items-center border border-white/25 px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function PaidTwicePage() {
  const essay = getEssay("paid-twice-or-never");
  const sources = essay?.sources?.length ? essay.sources : fallbackSources;
  const stripe =
    sources.find((source) => source.href.includes("stripe.com")) ?? sources[0];
  const fednow =
    sources.find((source) => source.href.includes("fednow.org")) ?? sources[1];
  const azoaRepo =
    sources.find((source) => source.href.includes("github.com")) ?? sources[2];
  const title = essay?.title ?? "Paid twice, or never, is the same bug";

  return (
    <article className="mx-auto max-w-[1040px] px-4 pt-28 pb-24 sm:px-6 sm:pt-32">
      <p className="bg-ink-deep text-paper border border-white/20 px-4 py-3 text-sm leading-relaxed">
        <span className="font-mono text-[11px] tracking-[0.16em] uppercase">
          Simulation.
        </span>{" "}
        No real money. No network calls. The payout, the timeout, and the ledger
        run in this browser and are not sent anywhere.
      </p>

      <header className="mt-10">
        <p className="text-accent font-mono text-[11px] tracking-[0.22em] uppercase">
          Demo
        </p>
        <h1 className="text-paper mt-4 max-w-[16ch] text-[clamp(36px,6vw,64px)] leading-[1.02] font-medium tracking-[-0.035em] text-balance">
          {title}
        </h1>
        <p className="text-mist mt-6 max-w-[62ch] text-lg leading-relaxed">
          A payer sends 40 demo units to a payee. The network drops the request
          or the reply. You choose the next move: retry, give up, or ask the
          ledger. The table shows whether that pays once, twice, or not at all.
        </p>
        <p className="text-mist mt-4 max-w-[62ch] text-[15px] leading-relaxed">
          It pairs with the note{" "}
          <Link href={POST_PATH} className={linkClass}>
            {title}
          </Link>
          . A timeout is not a decision. This page lets you make the usual
          mistakes on purpose, and then turn on the habit that stops them.
        </p>
      </header>

      <div className="mt-12">
        <PaidTwiceDemo />
      </div>

      <section
        className="mt-16 max-w-[65ch]"
        aria-labelledby="explainer-heading"
      >
        <h2
          id="explainer-heading"
          className="text-paper text-[clamp(28px,3vw,40px)] font-medium tracking-[-0.03em]"
        >
          What the note already says
        </h2>
        <div className="text-mist mt-6 space-y-5 text-[17px] leading-relaxed">
          <p>
            A payment that times out is not a payment that failed. It is a
            payment whose outcome you do not know. Most systems treat that
            uncertainty as a reason to try again. That is how the same work gets
            paid twice, or not at all. They are the same bug, seen from opposite
            ends of the ledger. Nobody has to be cheating. A timeout and a retry
            will do it.
          </p>
          <p>
            <a
              className={linkClass}
              href={stripe?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe&apos;s API documentation
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            is plain about the lost reply. The client is supposed to retry with
            the same idempotency key. In Stripe&apos;s words, &quot;For API v1,
            Stripe saves the status code and body of the first request made with
            a given idempotency key after endpoint execution begins. Retries
            with the same key return the saved response, including 500
            errors.&quot; The key is the record of a
            decision, not a courtesy header. Stripe refuses a retry when the
            parameters do not match the original request, and it prunes keys
            after at least twenty-four hours, after which the same key is
            treated as new. The design assumes the client keeps a constant key
            for as long as it is still asking the same question. That is a test
            written down in advance: this request, once.
          </p>
          <p>
            <a
              className={linkClass}
              href={fednow?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              The FedNow readiness guide
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            puts the same problem on a clock. The payment timeout clock is
            twenty seconds long, configurable by the Reserve Banks, and it stops
            counting just before settlement. A receiving institution can reserve
            up to five of those seconds to answer a request for confirmation. If
            the clock runs out before settlement begins, the service rejects the
            payment and tells the sender. It does not guess. If the sender
            resubmits a message the service has already received, it must use a
            new unique message identification number, or the service rejects the
            duplicate. A timeout can still leave the sender without an advice,
            an acknowledgement, or a rejection, so the guide says to ask for the
            payment&apos;s status — an ISO pacs.028 request — before sending it
            again. &quot;FIs that submit request for payment status messages
            (pacs.028) before resending a payment message through the service
            are able to limit their risk of sending duplicate payments.&quot; It
            also says to wait a little longer than the clock, twenty-five
            seconds in the twenty-second example, so a late acknowledgement is
            not mistaken for silence.
          </p>
          <p>
            Assume no, when the other side said yes, and someone is paid twice.
            Assume yes, when the other side said no, and someone is never paid.
            Both come from a missing record of whether this has already been
            decided. Idempotency is the prior: the same intent, the same key,
            the same result. A system that can start a payment and cannot later
            ask what became of it is not a payment system. It is a hope with a
            retry loop. Before a system is allowed to pay anyone, it should be
            able to answer three questions from its own records: what was
            intended, whether a decision was reached, and what that decision
            was. A timeout is not an answer. A retry is not an answer. A
            dashboard that says &quot;pending&quot; is not an answer. The answer
            is a stored result a second attempt can find.
          </p>
          <p>
            The toggle above is that habit, acted out with fake units. On, a
            retry of a lost reply finds the first row and stops. A retry of a
            lost request settles that same key once. Giving up, or only asking,
            does not invent a payment that never arrived, and it does not hide
            one that did.
          </p>
        </div>
        <h3 className="text-mist mt-10 font-mono text-[11px] tracking-[0.18em] uppercase">
          Sources, as cited in the note
        </h3>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed">
          {sources.map((source) => (
            <li key={source.href}>
              <a
                className={linkClass}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mt-16 max-w-[65ch] border-t border-white/10 pt-12"
        aria-labelledby="azoa-heading"
      >
        <h2
          id="azoa-heading"
          className="text-paper text-[clamp(28px,3vw,40px)] font-medium tracking-[-0.03em]"
        >
          AZOA, with the rail off
        </h2>
        <div className="text-mist mt-6 space-y-5 text-[17px] leading-relaxed">
          <p>
            AZOA is the layer in this stack meant to keep that kind of record
            for identity, consent, and settlement. It is pre-launch. The public
            repository calls that status Alpha Gate. Real-value rails are off.{" "}
            <a
              className={linkClass}
              href={azoaRepo?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              The README
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            says no provider currently implements the complete reviewed lock,
            mint, burn, and release path plus a production custody lifecycle,
            and that wallet creation is limited to a development simulation
            until a reviewed production custody adapter exists. Governance votes
            and credential revocation are listed among action types that are not
            enabled.
          </p>
          <p>
            That is the same rule the FedNow guide writes for banks: do not move
            value until you can say, later, what happened to it. Turning the
            rail on before the custody review and the complete lifecycle are in
            place would be a way to invent the bug this page is about. Leaving
            the rail off is less exciting. It is also the test, written first.
          </p>
          <p>
            This demo does not call AZOA, a bank, or a network. The fix in the
            note is not courage. It is a key, a status check, and a yes or a no
            you can find later.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <Link href="/roadmap/azoa" className={textButton}>
            AZOA on the roadmap
          </Link>
          <Link href="/azoa" className={linkClass}>
            AZOA layer page
          </Link>
          <Link href={POST_PATH} className={linkClass}>
            The note
          </Link>
        </div>
      </section>
    </article>
  );
}
