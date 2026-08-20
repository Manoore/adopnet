import {
  Megaphone,
  Sparkles,
  Code2,
  Smartphone,
  Workflow,
  Compass,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/lib/services";

const icons: Record<Service["icon"], React.ComponentType<LucideProps>> = {
  megaphone: Megaphone,
  sparkles: Sparkles,
  code: Code2,
  smartphone: Smartphone,
  workflow: Workflow,
  compass: Compass,
};

export function ServiceIcon({ icon, ...props }: { icon: Service["icon"] } & LucideProps) {
  const Icon = icons[icon];
  return <Icon {...props} />;
}
