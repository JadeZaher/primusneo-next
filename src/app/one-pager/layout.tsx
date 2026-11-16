import type { ReactNode } from 'react';

const onePagerTitle = 'PrimusNeo at a Glance · Many Timelines, One Line';
const onePagerDescription =
  'A one-page look at how PrimusNeo helps owners, operators and boards set clear decision rights, ease the friction between teams, turn everyday work into insight, and keep oversight where the responsible people can see it.';

export const metadata = {
  title: { absolute: onePagerTitle },
  description: onePagerDescription,
  alternates: { canonical: '/one-pager' },
  openGraph: {
    title: { absolute: onePagerTitle },
    description: onePagerDescription,
    url: '/one-pager',
    type: 'website',
  },
};

export default function OnePagerLayout({ children }: { children: ReactNode }) {
  return children;
}
