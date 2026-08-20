"use client";

import { motion, useReducedMotion } from "framer-motion";

const bars = [40, 65, 30, 80, 55, 90, 45, 70, 35, 60];

function DashboardScreen() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-signal" />
          <span className="text-xs font-medium text-paper">Overview</span>
        </div>
        <div className="flex gap-3">
          <span className="h-2 w-10 rounded-full bg-ink-elevated" />
          <span className="h-2 w-10 rounded-full bg-ink-elevated" />
          <span className="h-2 w-10 rounded-full bg-ink-elevated" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          ["Revenue", "$84.2k"],
          ["Active users", "12,904"],
          ["Conversion", "4.8%"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-line bg-ink-elevated p-3">
            <span className="text-[10px] text-paper-dim">{label}</span>
            <p className="mt-1 font-display text-sm font-semibold text-paper">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-line bg-ink-elevated p-4">
        <span className="text-[10px] text-paper-dim">Growth this quarter</span>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent to-accent-soft"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {["Project Nova — on track", "Q3 campaign — in review", "API migration — 82% done"].map(
          (row) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-lg border border-line bg-ink-elevated px-3 py-2.5"
            >
              <span className="text-xs text-paper-dim">{row}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            </div>
          ),
        )}
      </div>

      <div className="h-28 rounded-xl border border-line bg-ink-elevated" />
    </div>
  );
}

export function BrowserMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line bg-ink-elevated px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-paper-dim/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper-dim/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper-dim/30" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-ink" />
      </div>
      <div className="relative h-[340px] overflow-hidden bg-ink">
        <motion.div
          animate={reduceMotion ? undefined : { y: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <DashboardScreen />
          <DashboardScreen />
        </motion.div>
      </div>
    </div>
  );
}
