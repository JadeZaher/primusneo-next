"use client";

import dynamic from 'next/dynamic';
import SplineLoading from './SplineLoading';

const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => <SplineLoading />,
});

export default function HeroScene({ className }: { className?: string }) {
  return <SplineScene className={className} />;
}
