import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Adopnet what you're trying to build and we'll follow up with next steps.",
};

export default function ContactPage() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
        <FadeIn className="lg:col-span-2">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-paper">
            Let&apos;s talk.
          </h1>
          <p className="mt-5 text-paper-dim">
            Fill this out and we&apos;ll follow up within one business day. Prefer email?
            Reach us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-paper underline">
              {siteConfig.email}
            </a>
            .
          </p>
          <p className="mt-6 text-sm text-paper-dim">Based in {siteConfig.location}.</p>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-3">
          <Suspense>
            <ContactForm />
          </Suspense>
        </FadeIn>
      </div>
    </Container>
  );
}
