import Link from "next/link";
import { OperatorLine } from "@/app/_components/OperatorLine";
import { operator } from "@/content/operator";

export const metadata = {
  title: "Privacy",
  description:
    "primusneo.com is operated by Escherbridge, LLC. The contact form stores name, email, organization, message, page, referrer, UTM parameters, and user agent in Postgres.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy | PrimusNeo",
    description:
      "What the contact form stores, and who operates primusneo.com.",
    url: "/privacy",
    type: "website",
  },
};

const PrivacyPage = () => {
  return (
    <article className="bg-ink text-paper px-7 pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-[68ch]">
        <div className="text-faint font-mono text-[11px] tracking-[0.22em] uppercase">
          Privacy
        </div>
        <h1 className="mt-4 text-[clamp(40px,6vw,72px)] leading-[0.98] font-medium tracking-[-0.035em]">
          What the form keeps.
        </h1>
        <div className="text-mist mt-8 space-y-6 text-[17px] leading-relaxed">
          <p>
            primusneo.com is operated by {operator.entity}. The person on the
            mailbox is {operator.contactName}: <OperatorLine />.
          </p>
          <p>
            The contact form is the only place these pages collect what you
            type. A submission is stored in Postgres. The row holds your name,
            email, organization, and message. The longer form folds job title,
            interest, stage, and how you heard about the site into that message.
            The row also holds the page path, the referrer, the UTM parameters
            (source, medium, campaign, term, and content), the user agent sent
            with the request, and which form it was.
          </p>
          <p>
            The referrer and those UTM parameters sit in session storage in your
            browser first, under the key{" "}
            <span className="text-paper">primusneo.attribution</span>, so they
            are still there if you walk to the form from another page. Session
            storage is not a cookie. The public pages do not set a cookie, and
            they do not load an analytics script.
          </p>
          <p>
            The server reads the IP address to count submissions: five in ten
            minutes, held in memory on that process. The address is not a column
            in the table.
          </p>
          <p>
            The other page is the{" "}
            <Link
              href="/terms"
              className="text-paper hover:text-accent underline decoration-white/30 underline-offset-4"
            >
              terms
            </Link>
            . It has the Idaho sentence.
          </p>
        </div>
      </div>
    </article>
  );
};

export default PrivacyPage;
