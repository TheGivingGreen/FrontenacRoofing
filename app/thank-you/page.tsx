import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your request has been received by Frontenac Roofing & Construction.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <PageShell>
        <section
          className="section section--major surface-paper"
          style={{ paddingTop: "calc(var(--nav-height-desktop) + var(--space-10))" }}
          aria-labelledby="ty-title"
        >
          <div className="container container--reading" style={{ textAlign: "center" }}>
            <span
              aria-hidden="true"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: "var(--radius-round)",
                background: "var(--brass)",
                color: "var(--frontenac-black)",
                marginBottom: "var(--space-6)",
              }}
            >
              <Check size={32} strokeWidth={2.5} />
            </span>
            <h1 id="ty-title" className="t-display-lg" style={{ marginBottom: "var(--space-5)" }}>
              Thank you — we&apos;ve got it.
            </h1>
            <p className="t-lead" style={{ marginBottom: "var(--space-7)", marginInline: "auto", maxWidth: "48ch" }}>
              Your request has been received. A member of the Frontenac team will be in touch shortly.
              Need us sooner? Call{" "}
              <a href={`tel:${site.phoneHref}`} className="textlink">
                {site.phone}
              </a>
              .
            </p>
            <Button href="/" variant="primary">Back to home</Button>
          </div>
        </section>
    </PageShell>
  );
}
