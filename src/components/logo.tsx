import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={cn("h-7 w-7 shrink-0", className)}
      aria-hidden="true"
    >
      <line x1="14" y1="6" x2="6" y2="21" stroke="var(--color-accent-soft)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="14" y1="6" x2="22" y2="21" stroke="var(--color-accent-soft)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="6" y1="21" x2="22" y2="21" stroke="var(--color-accent-soft)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      <circle cx="14" cy="6" r="3" fill="var(--color-signal)" />
      <circle cx="6" cy="21" r="3" fill="var(--color-accent)" />
      <circle cx="22" cy="21" r="3" fill="var(--color-accent)" />
    </svg>
  );
}
