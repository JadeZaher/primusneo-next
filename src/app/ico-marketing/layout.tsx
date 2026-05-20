import type { ReactNode } from 'react';

export const metadata = {
  title: 'ICO Refit — From Token Marketing to Asset-Backed Fractionalization',
  description: 'How PrimusNeo reframes ICO-era fundraising into compliant fractional ownership with NEOS governance and QUSDC distribution rails.',
  alternates: { canonical: '/ico-marketing' },
  openGraph: {
    title: 'ICO Refit | PrimusNeo',
    description: 'Compliance-first capital design — from token marketing to asset-backed participation.',
    url: '/ico-marketing',
    type: 'website',
  },
};

export default function IcoMarketingLayout({ children }: { children: ReactNode }) {
  return children;
}
