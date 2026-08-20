"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Smartphone, Sparkles, Megaphone } from "lucide-react";

const nodes = [
  { cx: 240, cy: 90 },
  { cx: 90, cy: 200 },
  { cx: 390, cy: 200 },
  { cx: 150, cy: 340 },
  { cx: 330, cy: 340 },
];

const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [1, 2],
  [3, 4],
];

const badges = [
  { icon: Code2, label: "Web", top: "4%", left: "2%", delay: 0 },
  { icon: Smartphone, label: "Mobile", top: "62%", left: "-4%", delay: 0.6 },
  { icon: Sparkles, label: "AI", top: "10%", left: "78%", delay: 1.2 },
  { icon: Megaphone, label: "Marketing", top: "70%", left: "72%", delay: 1.8 },
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_65%)] opacity-25 blur-2xl"
      />

      <svg viewBox="0 0 480 430" className="relative h-full w-full" aria-hidden="true">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="var(--color-accent-soft)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.45"
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={i === 0 ? 10 : 7}
            fill={i === 0 ? "var(--color-signal)" : "var(--color-accent)"}
            animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {badges.map(({ icon: Icon, label, top, left, delay }) => (
        <motion.div
          key={label}
          className="absolute flex items-center gap-2 rounded-xl border border-line bg-ink-elevated/90 px-3 py-2 text-xs font-medium text-paper shadow-lg shadow-black/30 backdrop-blur"
          style={{ top, left }}
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={14} className="text-accent-soft" />
          {label}
        </motion.div>
      ))}
    </div>
  );
}
