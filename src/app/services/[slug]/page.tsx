import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { ServiceIcon } from "@/components/service-icon";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Container className="py-24">
        <FadeIn>
          <ServiceIcon icon={service.icon} size={28} className="text-accent-soft" />
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-paper-dim">{service.description}</p>
          <div className="mt-8">
            <Button href="/contact">
              Start your {service.name} project <ArrowRight size={16} />
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16 rounded-2xl border border-line p-8 sm:p-10">
            <h2 className="font-display text-xl font-semibold text-paper">What&apos;s included</h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-paper-dim">
                  <Check size={16} className="mt-0.5 shrink-0 text-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>

      <section className="border-t border-line">
        <Container className="py-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-paper">
              Often paired with
            </h2>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((other, i) => (
              <FadeIn key={other.slug} delay={i * 0.05}>
                <a
                  href={`/services/${other.slug}`}
                  className="block rounded-xl border border-line p-6 transition-colors hover:border-accent-soft"
                >
                  <ServiceIcon icon={other.icon} size={18} className="text-accent-soft" />
                  <h3 className="mt-3 font-medium text-paper">{other.name}</h3>
                  <p className="mt-1 text-xs text-paper-dim">{other.summary}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
