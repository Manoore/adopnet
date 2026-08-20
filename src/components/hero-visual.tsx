"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Smartphone, Sparkles, Megaphone, Bell, TrendingUp } from "lucide-react";

const bars = [45, 70, 35, 85, 55, 95, 40];

const badges = [
  { icon: Code2, label: "Web", top: "-4%", left: "-8%", delay: 0 },
  { icon: Smartphone, label: "Mobile", top: "94%", left: "-10%", delay: 0.6 },
  { icon: Sparkles, label: "AI", top: "-4%", left: "88%", delay: 1.2 },
  { icon: Megaphone, label: "Marketing", top: "94%", left: "80%", delay: 1.8 },
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[460px] py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_65%)] opacity-25 blur-2xl"
      />

      <div
        className="relative mx-auto w-full max-w-[380px]"
        style={{ perspective: "1400px" }}
      >
        <div
          className="rounded-xl border border-line bg-ink-elevated p-2 shadow-2xl shadow-black/50"
          style={{ transform: "rotateX(8deg) rotateY(-10deg)" }}
        >
          {/* screen chrome */}
          <div className="flex items-center gap-1.5 px-2 pb-2">
            <span className="h-2 w-2 rounded-full bg-paper-dim/30" />
            <span className="h-2 w-2 rounded-full bg-paper-dim/30" />
            <span className="h-2 w-2 rounded-full bg-paper-dim/30" />
          </div>

          {/* screen content */}
          <div className="space-y-3 rounded-lg bg-ink p-4">
            <div className="flex items-center justify-between">
              <span className="h-2 w-16 rounded-full bg-paper/70" />
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-signal" />
                <Bell size={11} className="text-paper-dim" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-gradient-to-br from-accent to-accent-soft p-3">
                <span className="text-[9px] text-paper/80">Revenue</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-base font-semibold text-paper">$84.2k</span>
                  <span className="flex items-center text-[9px] text-signal">
                    <TrendingUp size={9} />
                    18%
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-line bg-ink-elevated p-3">
                <span className="text-[9px] text-paper-dim">Active users</span>
                <p className="mt-1 font-display text-base font-semibold text-paper">12,904</p>
              </div>
            </div>

            <div className="rounded-lg border border-line bg-ink-elevated p-3">
              <span className="text-[9px] text-paper-dim">Growth this quarter</span>
              <div className="mt-2 flex h-14 items-end gap-1">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-accent to-signal"
                    style={{ height: `${h}%` }}
                    animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="h-2 w-full rounded-full bg-ink-elevated" />
              <div className="h-2 w-2/3 rounded-full bg-ink-elevated" />
            </div>
          </div>
        </div>

        {/* laptop base */}
        <div className="mx-auto -mt-1 h-3 w-[92%] rounded-b-2xl bg-gradient-to-b from-ink-elevated to-ink-soft" />
        <div className="mx-auto h-1 w-1/3 rounded-b-xl bg-ink-soft" />
      </div>

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
