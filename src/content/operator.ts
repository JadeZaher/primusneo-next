/** Public operator facts supplied by the owner. City only: do not add a street, a ZIP, a retention period, or an age rule. */
export const operator = {
  entity: "Escherbridge, LLC",
  contactName: "Ahmed Zaher",
  email: "contact@escherbridge.com",
  phoneDisplay: "(509) 578-4603",
  phoneTel: "+15095784603",
  locality: "Boise, Idaho",
} as const;

/** Schema.org PostalAddress for the operator. Locality, region, and country only. */
export const operatorPostalAddress = {
  "@type": "PostalAddress",
  addressLocality: "Boise",
  addressRegion: "ID",
  addressCountry: "US",
} as const;

export const governingLaw =
  "These terms are governed by the laws of the State of Idaho, and any dispute will be resolved in the state or federal courts located in Ada County, Idaho.";
