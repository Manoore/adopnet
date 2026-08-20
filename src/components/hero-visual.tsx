"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const circuitLines = [
  "M40,140 L100,140 L100,110",
  "M40,220 L90,220 L90,260",
  "M55,90 L95,90",
  "M120,60 L120,95",
  "M150,240 L180,240 L180,270",
  "M60,180 L110,180",
  "M130,290 L160,290",
];

const circuitDots = [
  { cx: 100, cy: 110, r: 3, delay: 0 },
  { cx: 90, cy: 260, r: 2.5, delay: 0.4 },
  { cx: 55, cy: 90, r: 2.5, delay: 0.8 },
  { cx: 120, cy: 60, r: 2.5, delay: 1.2 },
  { cx: 180, cy: 270, r: 3, delay: 1.6 },
  { cx: 60, cy: 180, r: 2.5, delay: 2 },
  { cx: 160, cy: 290, r: 2.5, delay: 0.6 },
  { cx: 190, cy: 130, r: 2.5, delay: 1 },
];

const profilePath =
  "M70,40 Q130,8 180,58 Q197,90 186,120 Q212,142 222,166 Q200,182 188,190 Q196,206 180,216 Q164,236 154,260 L150,300 Q138,322 90,322 L40,322 L34,110 Q34,58 70,40 Z";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 22);
    rotateX.set(py * -22);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div className="relative mx-auto w-full max-w-[420px] py-8" style={{ perspective: "1200px" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,_var(--color-accent)_0%,_transparent_60%)] opacity-30 blur-2xl"
      />

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <svg viewBox="0 0 260 340" className="mx-auto h-auto w-full max-w-[300px]">
          <defs>
            <clipPath id="profileClip">
              <path d={profilePath} />
            </clipPath>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="profileFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-ink-elevated)" />
              <stop offset="100%" stopColor="var(--color-ink-soft)" />
            </linearGradient>
          </defs>

          {/* profile silhouette */}
          <path d={profilePath} fill="url(#profileFill)" stroke="var(--color-accent-soft)" strokeWidth="1.5" />

          {/* circuit texture, clipped to the silhouette */}
          <g clipPath="url(#profileClip)">
            {circuitLines.map((d, i) => (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="var(--color-accent-soft)"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
            {circuitDots.map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                fill="var(--color-signal)"
                animate={reduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
              />
            ))}
            <motion.circle
              cx="120"
              cy="105"
              r="30"
              fill="url(#coreGlow)"
              animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>

          {/* profile outline on top for crispness */}
          <path d={profilePath} fill="none" stroke="var(--color-accent-soft)" strokeWidth="1.5" opacity="0.8" />
        </svg>
      </motion.div>
    </div>
  );
}
