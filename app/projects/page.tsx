import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { recoveredProjects } from "@/lib/projects";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A library of completed commercial and residential roofing and construction projects across the St. Louis region and beyond.",
};

const FILTERS = ["All", "Commercial Roofing", "Residential Roofing", "TPO Roofing"];

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Projects"
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        title={<>The work, in the field.</>}
        lead="Browse completed commercial and residential roofing, restoration, and specialty projects across the region."
      />

      <section className="section section--compact surface-paper" aria-label="Project library">
        <div className="container container--editorial">
          {/* Filter chips — visual only until the library is populated */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginBottom: "var(--space-8)" }} aria-hidden="true">
            {FILTERS.map((f, i) => (
              <span
                key={f}
                className="t-label"
                style={{
                  border: "1px solid var(--line-light)",
                  padding: "8px 14px",
                  color: i === 0 ? "var(--white)" : "var(--muted)",
                  background: i === 0 ? "var(--ink)" : "transparent",
                }}
              >
                {f}
              </span>
            ))}
          </div>

          <div className={`${s.imageCards} ${s["imageCards--3"]}`}>
            {recoveredProjects.map((p) => (
              <article key={p.id} className={s.imageCard}>
                <ImageSlot
                  ratio={p.ratio}
                  label={p.title}
                  src={p.image}
                  alt={p.alt}
                  position={p.position}
                />
                <div className={`t-label ${s.meta}`}><span>{p.category}</span><span aria-hidden="true">·</span><span>{p.location}</span></div>
                <h3 className="t-title-md">{p.title}</h3>
                <p className={`t-body-sm ${s.projectDescription}`}>{p.description}</p>
              </article>
            ))}
          </div>

          <p className="t-body-sm" style={{ color: "var(--muted)", marginTop: "var(--space-7)", maxWidth: "62ch" }}>
            Commercial and residential roofing work from Frontenac&apos;s portfolio in Missouri and Ohio.
          </p>
        </div>
      </section>

      <CTABand
        headline="Have a project like these?"
        body="Tell us about your property and we’ll help recommend where to start."
      />
    </PageShell>
  );
}
