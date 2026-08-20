"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const stages = [
  { label: "Audit", detail: "Map the workflow, find the real bottleneck" },
  { label: "Strategy", detail: "Decide what to fix first, and what to skip" },
  { label: "Build", detail: "Ship the integration, automation, or system" },
  { label: "Scale", detail: "Hand off with the team trained to run it" },
];

export function ProcessMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-line bg-ink-soft p-6 shadow-2xl shadow-black/40">
      <span className="text-xs text-paper-dim">Engagement roadmap</span>
      <div className="mt-5 flex flex-col">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <motion.span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-line bg-ink-elevated"
                animate={
                  reduceMotion
                    ? { borderColor: "var(--color-signal)", backgroundColor: "var(--color-signal)" }
                    : {
                        borderColor: ["var(--color-line)", "var(--color-signal)", "var(--color-line)"],
                        backgroundColor: [
                          "var(--color-ink-elevated)",
                          "var(--color-signal)",
                          "var(--color-ink-elevated)",
                        ],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: (stages.length - 1) * 0.7,
                        delay: i * 0.7,
                        ease: "easeInOut",
                      }
                }
              >
                <Check size={13} className="text-ink" />
              </motion.span>
              {i < stages.length - 1 && <span className="my-1 h-10 w-px bg-line" />}
            </div>
            <div className="pb-6">
              <p className="font-display text-sm font-semibold text-paper">{stage.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-paper-dim">{stage.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
