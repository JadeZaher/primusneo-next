"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '../_components/ui/button';
import { Home, Zap } from 'lucide-react';
import ExplorerScene from '../_components/3d/ExplorerScene';

const SpatialExplorerPage = () => {
  const splineRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function onLoad(spline) {
    splineRef.current = spline;
    setIsLoaded(true);
  }

  function triggerPulse() {
    if (splineRef.current) {
      console.log('Pulse triggered. Scene objects:', splineRef.current.getAllObjects());
      // Example: splineRef.current.emitEvent('mouseHover', 'Object Name');
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene - Full Screen */}
      <div className="absolute inset-0 z-0">
        <ExplorerScene className="h-full w-full" onLoad={onLoad} />
      </div>

      {/* Overlay UI */}
      <div className="relative z-10 flex h-full flex-col items-center justify-between p-8 pointer-events-none">
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold text-white text-glow-green opacity-80 md:text-6xl tracking-tighter">
            SPATIAL INTELLIGENCE
          </h1>
          <p className="mt-4 text-emerald-300/60 font-medium tracking-[0.5em] uppercase text-xs">
            Fractal Engine Operations
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12 pointer-events-auto">
          {isLoaded && (
            <Button
              onClick={triggerPulse}
              className="group rounded-full bg-emerald-500/10 px-8 py-6 text-emerald-400 border border-emerald-500/20 backdrop-blur-xl transition-all hover:bg-emerald-500/20 hover:border-emerald-500/50"
            >
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 animate-pulse" />
                <span className="font-bold tracking-widest uppercase text-sm">Pulse Intelligence</span>
              </div>
            </Button>
          )}

          <Link href="/">
            <Button 
              className="group relative overflow-hidden rounded-full bg-white/5 px-8 py-6 text-white border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="font-bold tracking-wide">Back to Reality</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Aesthetic Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </div>
  );
};

export default SpatialExplorerPage;
