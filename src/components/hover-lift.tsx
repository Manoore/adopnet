"use client";

import { motion } from "framer-motion";

export function HoverLift({
  children,
  className,
  glow = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={className}
      whileHover={
        glow
          ? { y: -6, boxShadow: "0 24px 48px -20px rgba(124, 92, 255, 0.25)" }
          : { y: -4 }
      }
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
