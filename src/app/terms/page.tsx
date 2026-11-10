import Link from "next/link";
import { OperatorLine } from "@/app/_components/OperatorLine";
import { governingLaw, operator } from "@/content/operator";

export const metadata = {
  title: "Terms",
  description:
    "Terms for primusneo.com, operated by Escherbridge, LLC. Governed by the laws of the State of Idaho. Disputes are resolved in the state or federal courts in Ada County, Idaho.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms | PrimusNeo",
    description:
      "Operator, contact, and the Idaho governing-law clause for primusneo.com.",
    url: "/terms",
    type: "website",
  },
};

const TermsPage = () => {
  return (
    <article className="bg-ink text-paper px-7 pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-[68ch]">
        <div className="text-faint font-mono text-[11px] tracking-[0.22em] uppercase">
          Terms
        </div>
        <h1 className="mt-4 text-[clamp(40px,6vw,72px)] leading-[0.98] font-medium tracking-[-0.035em]">
          Operator, site, courts.
        </h1>
        <div className="text-mist mt-8 space-y-6 text-[17px] leading-relaxed">
          <p>
            primusneo.com is operated by {operator.entity}.{" "}
            {operator.contactName}
            : <OperatorLine />.
          </p>
          <p>
            The site publishes pages about the stack — AMP, NEOS, AZOA, and
            Fractal Engine — and the notes, papers, and roadmap beside them.
            Status lives on the roadmap: shipped, in alpha, building, or
            exploring. Opening a page does not start a pilot, a license, or a
            purchase.
          </p>
          <p>
            Papers download as files. The form is not in front of the file. What
            the form stores is on the{" "}
            <Link
              href="/privacy"
              className="text-paper hover:text-accent underline decoration-white/30 underline-offset-4"
            >
              privacy page
            </Link>
            .
          </p>
          <p>These terms cover use of this website.</p>
          <p>{governingLaw}</p>
        </div>
      </div>
    </article>
  );
};

export default TermsPage;
