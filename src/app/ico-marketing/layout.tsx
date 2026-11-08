import type { ReactNode } from 'react';

export const metadata = {
  title: 'Asset-Backed Fractionalization — Compliance-First Capital Design',
  description: 'How PrimusNeo frames asset-backed participation: fractional ownership with NEOS governance and QUSDC-compatible distribution rails, subject to securities law and counsel.',
  alternates: { canonical: '/ico-marketing' },
  openGraph: {
    title: 'Asset-Backed Fractionalization | PrimusNeo',
    description: 'Compliance-first capital design — asset-backed participation with compliance first.',
    url: '/ico-marketing',
    type: 'website',
  },
};

export default function IcoMarketingLayout({ children }: { children: ReactNode }) {
  return children;
}
