import React from 'react';

const SplineLoading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400/60 animate-pulse">
        Initializing Oasis...
      </p>
    </div>
  );
};

export default SplineLoading;
