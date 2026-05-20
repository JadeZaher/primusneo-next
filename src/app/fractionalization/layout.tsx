import type { ReactNode } from 'react';

export const metadata = {
  title: 'Fractionalization — Asset-Backed Participation',
  description: 'Compliant fractional ownership, contribution accounting, and QUSDC-compatible distribution rails for real-world asset and software ecosystems.',
  alternates: { canonical: '/fractionalization' },
  openGraph: {
    title: 'Fractionalization | PrimusNeo',
    description: 'Asset-backed ownership and participation, with NEOS governance and QUSDC distribution rails.',
    url: '/fractionalization',
    type: 'website',
  },
};

export default function FractionalizationLayout({ children }: { children: ReactNode }) {
  return children;
}
