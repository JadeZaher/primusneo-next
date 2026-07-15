"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// WebGL timeline-collapse hero: many divergent "timelines" get squashed into
// one bright line above a digital-twin ground grid. Ported from the Claude
// Design project's hero3d.js custom element. See src/app/_components/AGENTS.md §hero.

function smoothstep(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

type Props = {
  speed?: number;
  density?: number;
  accent?: string;
  className?: string;
};

type Timeline = {
  sx: number;
  ampX: number;
  fX: number;
  phX: number;
  baseY: number;
  ampY: number;
  fY: number;
  phY: number;
  line: THREE.Line;
};

const PTS = 90;
const Z0 = 4;
const Z1 = -95;

export default function HeroTimelines({
  speed = 1,
  density = 42,
  accent = '#4D6BFF',
  className,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const canvas = renderer.domElement;
    canvas.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;display:block';
    host.appendChild(canvas);

    const BG = 0x0b0c0e;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(BG, 0.026);
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 300);
    camera.position.set(0, 2.0, 9);

    const grid = new THREE.GridHelper(260, 104, 0x1c212b, 0x141820);
    const gridMat = grid.material as THREE.Material;
    gridMat.transparent = true;
    gridMat.opacity = 0.42;
    grid.position.y = -1.5;
    scene.add(grid);

    const accentColor = new THREE.Color(accent);
    const N = Math.max(1, Math.round(density));
    const lines: Timeline[] = [];
    for (let i = 0; i < N; i++) {
      // Hash-style pseudo-randoms keep the field stable across mounts.
      let r1 = Math.sin(i * 127.1) * 43758.5453; r1 -= Math.floor(r1);
      let r2 = Math.sin(i * 311.7) * 12543.853; r2 -= Math.floor(r2);
      let r3 = Math.sin(i * 74.7) * 9631.31; r3 -= Math.floor(r3);
      const isAccent = i % 9 === 4;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(PTS * 3), 3));
      const mat = new THREE.LineBasicMaterial({
        color: isAccent ? accentColor : new THREE.Color(0x39404d),
        transparent: true,
        opacity: isAccent ? 0.95 : 0.45,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const line = new THREE.Line(geo, mat);
      scene.add(line);
      lines.push({
        sx: (i / Math.max(1, N - 1) - 0.5) * 2,
        ampX: 1.5 + r1 * 7,
        fX: 0.05 + r2 * 0.12,
        phX: r3 * Math.PI * 2,
        baseY: 0.1 + r2 * 2.6,
        ampY: 0.3 + r3 * 1.6,
        fY: 0.04 + r1 * 0.1,
        phY: r1 * Math.PI * 2,
        line,
      });
    }

    function update(u: number, t: number) {
      for (const L of lines) {
        const pos = (L.line.geometry.attributes.position as THREE.BufferAttribute)
          .array as Float32Array;
        for (let j = 0; j < PTS; j++) {
          const tt = j / (PTS - 1);
          const z = Z0 + (Z1 - Z0) * tt;
          const k = smoothstep(0.12, 0.92, tt) * (0.3 + 0.7 * u);
          const xd =
            L.sx * (2.2 + 7 * tt) +
            Math.sin(z * L.fX + L.phX + t * 0.22) * L.ampX * tt;
          const yd = L.baseY + Math.sin(z * L.fY + L.phY + t * 0.16) * L.ampY * tt;
          pos[j * 3] = xd * (1 - k);
          pos[j * 3 + 1] = yd * (1 - k) + 1.15 * k;
          pos[j * 3 + 2] = z;
        }
        L.line.geometry.attributes.position.needsUpdate = true;
        L.line.geometry.computeBoundingSphere();
      }
    }

    let mx = 0, my = 0, cx = 0, cy = 0;
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const resize = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    let raf = 0;
    let dead = false;
    const t0 = performance.now();
    const frame = () => {
      if (dead) return;
      const t = ((performance.now() - t0) / 1000) * speed;
      const u = 0.5 + 0.5 * Math.sin(t * 0.24 - Math.PI / 2); // slow collapse cycle ~26s
      update(u, t);
      cx += (mx - cx) * 0.04;
      cy += (my - cy) * 0.04;
      camera.position.x = cx * 0.9;
      camera.position.y = 2.0 - cy * 0.5;
      camera.lookAt(0, 1.0, -34);
      grid.position.z = (t * 0.9) % 2.5;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };

    if (reduced) {
      update(0.72, 0);
      camera.lookAt(0, 1.0, -34);
      renderer.render(scene, camera);
    } else {
      frame();
    }

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      for (const L of lines) {
        L.line.geometry.dispose();
        (L.line.material as THREE.Material).dispose();
      }
      gridMat.dispose();
      grid.geometry.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, [speed, density, accent]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`relative overflow-hidden ${className ?? ''}`}
    />
  );
}
