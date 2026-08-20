import { ServiceIcon } from "@/components/service-icon";
import type { Service } from "@/lib/services";

const tones = [
  "bg-accent/15 text-accent-soft",
  "bg-signal/15 text-signal",
  "bg-accent-soft/15 text-accent-soft",
];

export function IconBadge({ icon, index = 0 }: { icon: Service["icon"]; index?: number }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tones[index % tones.length]}`}
    >
      <ServiceIcon icon={icon} size={20} />
    </span>
  );
}
