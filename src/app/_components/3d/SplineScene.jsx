"use client";
import { useState } from 'react';
import { useEffect } from 'react'
import Spline from '@splinetool/react-spline';

export default function SplineScene({ className }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`${className} relative w-full h-full min-h-[400px]`}>
      <div className="absolute inset-0 gradient opacity-30 mix-blend-overlay pointer-events-none" />
      {isMobile ? (
        <Spline
          scene="https://prod.spline.design/8CfiV6v9LT7De-78/scene.splinecode"
          width={414}
          height={736}
        />
      ) : (
        <Spline
          scene="https://prod.spline.design/reXWt-ggCDoEl04o/scene.splinecode"
        />
      )}
    </div>
  );
}
