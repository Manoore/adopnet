import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Container className="py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-paper">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-paper-dim">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-paper-dim">
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Services</h2>
            <p className="mt-3">
              {siteConfig.name} provides digital marketing, AI, web development, mobile app, and
              consulting services as described on this site. Fixed-scope packages are delivered
              per the feature list published on the Packages page at time of purchase.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Payment</h2>
            <p className="mt-3">
              Package pricing is payable up front unless otherwise agreed in writing. Custom and
              Enterprise engagements are governed by a separate statement of work.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Refunds</h2>
            <p className="mt-3">
              Refund terms are specified in the statement of work or order confirmation for each
              engagement.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Limitation of liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, {siteConfig.name} is not liable for indirect,
              incidental, or consequential damages arising from use of our services.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg font-semibold text-paper">Contact</h2>
            <p className="mt-3">Questions about these terms: {siteConfig.email}.</p>
          </section>
        </div>

        <p className="mt-10 text-xs text-paper-dim/70">
          This is a starting-point template and should be reviewed by counsel before relying on it
          for a live, paying customer base.
        </p>
      </div>
    </Container>
  );
}
