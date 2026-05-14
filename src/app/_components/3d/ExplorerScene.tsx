"use client";

import dynamic from 'next/dynamic';
import SplineLoading from './SplineLoading';

const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => <SplineLoading />,
});

export default function ExplorerScene({ className, onLoad }: { className?: string; onLoad?: (spline: any) => void }) {
  return <SplineScene className={className} onLoad={onLoad} />;
}
