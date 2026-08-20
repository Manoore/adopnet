import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Container className="py-24">
      <div className="prose-invert max-w-2xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-paper">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-paper-dim">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-paper-dim">
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Information we collect</h2>
            <p className="mt-3">
              When you contact us through this site or purchase a package, we collect the
              information you provide directly — name, email, company, and project details — plus
              standard technical data (IP address, browser type, pages visited) via analytics
              tools.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">How we use it</h2>
            <p className="mt-3">
              We use this information to respond to inquiries, deliver purchased services, process
              payments, and improve this site. We do not sell personal information to third
              parties.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Payment processing</h2>
            <p className="mt-3">
              Payments are processed by Stripe. We do not store your card details on our own
              systems.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Your rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal information
              at any time by contacting {siteConfig.email}.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Contact</h2>
            <p className="mt-3">
              Questions about this policy: {siteConfig.email}.
            </p>
          </section>
        </div>

        <p className="mt-10 text-xs text-paper-dim/70">
          This is a starting-point policy and should be reviewed by counsel before relying on it
          for compliance (e.g. CCPA, state privacy laws) once the business is live.
        </p>
      </div>
    </Container>
  );
}
