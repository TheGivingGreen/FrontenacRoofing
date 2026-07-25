import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Frontenac Roofing & Construction serves commercial and residential properties throughout the greater St. Louis region.",
};

// BBB-corroborated coverage (PROJECT_BRIEF §16). Specific city list publishes
// only after ownership confirms the current service radius (§17 Q13).
const COUNTIES = ["St. Louis City", "St. Louis County", "St. Charles County", "Jefferson County"];

export default function ServiceAreasPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service Areas"
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
        title={<>St. Louis roots. Property-specific expertise.</>}
        lead={`${site.name} serves commercial and residential properties throughout the greater St. Louis region. Confirm your project location with our team.`}
        image={{ ratio: "4-3", label: "Regional map or St. Louis-area project", src: "/images/service-areas.webp" }}
      />

      <section className="section section--compact surface-white" aria-labelledby="areas-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label eyebrow--brass">Where we work</span>
            <h2 id="areas-title" className="t-display-md">Greater St. Louis coverage.</h2>
          </header>
          <div className={`${s.cards} ${s["cards--2"]}`}>
            {COUNTIES.map((c) => (
              <div key={c} className={s.card}>
                <h3 className="t-title-md">{c}</h3>
                <p className="t-body">Commercial and residential roofing, restoration, and exterior work.</p>
              </div>
            ))}
          </div>
          <p className="t-body-sm unverified" style={{ color: "var(--muted)", marginTop: "var(--space-6)", maxWidth: "66ch" }}>
            A detailed city list and any coverage beyond the region — including out-of-state commercial work — publishes once the current service radius is confirmed (PROJECT_BRIEF §16, §17).
          </p>
        </div>
      </section>

      <CTABand headline="Not sure if you’re in our area?" body="Tell us your project location and we’ll confirm." />
    </PageShell>
  );
}
