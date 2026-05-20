import type { ReactNode } from 'react';

export const metadata = {
  title: 'Stack Overview — The PrimusNeo One-Pager',
  description: 'Executive summary of the PrimusNeo federated operational infrastructure stack: AMP, NEOS, OASIS Web4, and Fractal Engine in one page.',
  alternates: { canonical: '/one-pager' },
  openGraph: {
    title: 'Stack Overview | PrimusNeo',
    description: 'The complete PrimusNeo platform at a glance — AMP, NEOS, OASIS Web4, Fractal Engine.',
    url: '/one-pager',
    type: 'website',
  },
};

export default function OnePagerLayout({ children }: { children: ReactNode }) {
  return children;
}
