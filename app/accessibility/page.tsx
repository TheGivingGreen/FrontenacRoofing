import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Frontenac Roofing & Construction's commitment to an accessible website experience.",
};

export default function AccessibilityPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" crumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]} title={<>Accessibility Statement</>} />
      <section className="section section--compact surface-white">
        <div className="container">
          <div className={`${s.prose} unverified`}>
            <p className="updated t-body-sm">Template — confirm and finalize before publication.</p>
            <p>
              {site.name} is committed to making this website usable for as many people as possible. We aim to meet the
              Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
            </p>
            <h2 className="t-display-md">What we’ve done</h2>
            <ul>
              <li>Semantic structure, heading order, and landmark regions.</li>
              <li>Keyboard-operable navigation and visible focus states.</li>
              <li>Color contrast targeted at WCAG 2.2 AA.</li>
              <li>Respect for reduced-motion preferences.</li>
              <li>Alternative text for meaningful images.</li>
            </ul>
            <h2 className="t-display-md">Feedback</h2>
            <p>
              If you encounter an accessibility barrier on this site, contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or <a href={`tel:${site.phoneHref}`}>{site.phone}</a> and
              we’ll work to address it.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
