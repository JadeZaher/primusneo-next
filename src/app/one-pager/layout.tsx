import type { ReactNode } from 'react';

export const metadata = {
  title: 'Stack Overview — The PrimusNeo One-Pager',
  description: 'Executive summary of the PrimusNeo federated operational infrastructure stack: a physical base (OPQPWR), four coordination layers (AMP, NEOS, AZOA, Fractal Engine) and a research module (Elevate Impact) in one page.',
  alternates: { canonical: '/one-pager' },
  openGraph: {
    title: 'Stack Overview | PrimusNeo',
    description: 'The complete PrimusNeo platform at a glance — a physical base (OPQPWR), four coordination layers and a research module.',
    url: '/one-pager',
    type: 'website',
  },
};

export default function OnePagerLayout({ children }: { children: ReactNode }) {
  return children;
}
