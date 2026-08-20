"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bell, MessageCircle, TrendingUp, CheckCircle2 } from "lucide-react";

function ScreenContent() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-semibold text-paper">Good morning</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-elevated">
          <Bell size={13} className="text-paper-dim" />
        </span>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-accent to-accent-soft p-4">
        <span className="text-xs text-paper/80">This week</span>
        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-semibold text-paper">248</span>
          <span className="flex items-center gap-0.5 text-xs text-signal">
            <TrendingUp size={12} /> 18%
          </span>
        </div>
        <span className="text-xs text-paper/70">new signups</span>
      </div>

      <div className="rounded-xl border border-line bg-ink-elevated p-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal/20">
            <MessageCircle size={14} className="text-signal" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-paper">New message from Sam</p>
            <p className="truncate text-[11px] text-paper-dim">Loved the last update!</p>
          </div>
        </div>
      </div>

      {["Order #4821 shipped", "Payment received — $340", "New review · 5 stars"].map((row) => (
        <div
          key={row}
          className="flex items-center gap-2.5 rounded-xl border border-line bg-ink-elevated p-3"
        >
          <CheckCircle2 size={15} className="shrink-0 text-accent-soft" />
          <span className="text-xs text-paper-dim">{row}</span>
        </div>
      ))}

      <div className="rounded-xl bg-signal px-4 py-3 text-center text-xs font-semibold text-ink">
        Get Started
      </div>

      <div className="h-24 rounded-xl border border-line bg-ink-elevated" />
      <div className="h-24 rounded-xl border border-line bg-ink-elevated" />
    </div>
  );
}

export function PhoneMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto w-[240px] rounded-[2.6rem] border-[10px] border-ink-elevated bg-ink-elevated shadow-2xl shadow-black/40">
      <div className="relative h-[500px] overflow-hidden rounded-[2rem] bg-ink">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-ink-elevated" />
        <motion.div
          animate={reduceMotion ? undefined : { y: ["0%", "-50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        >
          <ScreenContent />
          <ScreenContent />
        </motion.div>
      </div>
    </div>
  );
}
