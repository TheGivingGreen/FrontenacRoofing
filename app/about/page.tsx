import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessRail } from "@/components/sections/ProcessRail";
import { CTABand } from "@/components/sections/CTABand";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frontenac Roofing & Construction is a St. Louis-region roofing and exterior construction company known for communication, project control, and careful execution.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={<>Quality roofing backed by experience.</>}
        lead={`${site.name} is a St. Louis-region roofing and exterior construction company trusted with complex residential and commercial properties.`}
        image={{ ratio: "3-2", label: "Frontenac crew or completed project", src: "/images/about-hero.webp" }}
      />

      {/* Story */}
      <section className="section section--compact surface-white" aria-labelledby="story-title">
        <div className="container container--reading">
          <span className="eyebrow t-label eyebrow--brass">Who we are</span>
          <h2 id="story-title" className="t-display-md" style={{ marginBottom: "var(--space-5)" }}>
            Built on communication and careful work.
          </h2>
          <p className="t-body-lg" style={{ marginBottom: "var(--space-4)" }}>
            Frontenac provides residential and commercial roofing, exterior construction, roof restoration and coating, storm-damage support, siding, and specialty roofing systems across the greater St. Louis region.
          </p>
          <p className="t-body-lg" style={{ marginBottom: "var(--space-4)", color: "var(--body)" }}>
            The company was established in 2018. Our team brings {site.teamExperienceYears} years of combined roofing and construction experience to every property we work on.
          </p>
          <p className="t-body-sm unverified" style={{ color: "var(--muted)", maxWidth: "68ch" }}>
            The full company story — how Frontenac began, leadership, and how we approach estimating, supervision, and closeout — publishes once ownership confirms these details (PROJECT_BRIEF §4, §17).
          </p>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section className="section section--compact surface-paper" aria-labelledby="lead-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label">Leadership</span>
            <h2 id="lead-title" className="t-display-md">The people behind the work.</h2>
          </header>
          <div className={`${s.imageCards} ${s["imageCards--3"]} unverified`}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={s.imageCard}>
                <ImageSlot ratio="4-5" label="Leadership / team portrait" src={`/images/team-0${i}.webp`} />
                <h3 className="t-title-md">[Name]</h3>
                <div className={`t-label ${s.meta}`}><span>[Role]</span></div>
              </div>
            ))}
          </div>
          <p className="t-body-sm" style={{ color: "var(--muted)", marginTop: "var(--space-6)", maxWidth: "62ch" }}>
            Names, roles, and photos appear once the public leadership contacts are confirmed.
          </p>
        </div>
      </section>

      {/* Process */}
      <ProcessRail />

      {/* Credentials */}
      <section className="section section--compact surface-white" aria-labelledby="cred-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label eyebrow--brass">Credentials</span>
            <h2 id="cred-title" className="t-display-md">Credentials you can verify.</h2>
            <p className="t-body-lg">We publish credentials only once they’re current and documented.</p>
          </header>
          <div className="unverified" style={{ border: "1px dashed var(--line-light)", padding: "var(--space-7)" }}>
            <p className="t-body" style={{ maxWidth: "68ch", color: "var(--muted)" }}>
              Confirmed items — BBB accreditation and rating, manufacturer certifications (GAF, Owens Corning, James Hardie), licensing, and warranties — appear here with correct logos and current wording once documentation is on file (PROJECT_BRIEF §10).
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
