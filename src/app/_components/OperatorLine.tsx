import { operator } from "@/content/operator";

const linkClass =
  "text-paper underline decoration-white/30 underline-offset-4 hover:text-accent";

export function OperatorLine() {
  return (
    <>
      <a className={linkClass} href={`mailto:${operator.email}`}>
        {operator.email}
      </a>
      {", "}
      <a className={linkClass} href={`tel:${operator.phoneTel}`}>
        {operator.phoneDisplay}
      </a>
      {", "}
      {operator.street}, {operator.locality}
    </>
  );
}
