import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ImageSlot } from "@/components/ui/ImageSlot";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A library of completed commercial and residential roofing and construction projects across the St. Louis region and beyond.",
};

// Placeholder entries. Each publishes only after the case study is verified and
// photography + naming permission are confirmed (PROJECT_BRIEF §11).
const PROJECTS = [
  { cat: "Commercial", loc: "[City, ST]", ratio: "3-2" as const, img: "/images/project-01.webp" },
  { cat: "Residential", loc: "[City, ST]", ratio: "4-5" as const, img: "/images/project-02.webp" },
  { cat: "Specialty", loc: "[City, ST]", ratio: "4-3" as const, img: "/images/project-03.webp" },
  { cat: "Commercial", loc: "[City, ST]", ratio: "3-2" as const, img: "/images/project-04.webp" },
  { cat: "Residential", loc: "[City, ST]", ratio: "4-3" as const, img: "/images/project-05.webp" },
  { cat: "Restoration", loc: "[City, ST]", ratio: "4-5" as const, img: "/images/project-06.webp" },
];

const FILTERS = ["All", "Commercial", "Residential", "Specialty", "Restoration"];

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Projects"
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        title={<>Completed work, documented.</>}
        lead="Our project library is the central proof of what Frontenac does — commercial and residential roofing, restoration, and specialty systems."
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
            {PROJECTS.map((p, i) => (
              <Link key={i} href="/projects" className={`${s.imageCard} unverified`}>
                <ImageSlot ratio={p.ratio} label={`${p.cat} project — approved photo`} src={p.img} />
                <div className={`t-label ${s.meta}`}><span>{p.cat}</span><span aria-hidden="true">·</span><span>{p.loc}</span></div>
                <h3 className="t-title-md">[Project title]</h3>
              </Link>
            ))}
          </div>

          <p className="t-body-sm" style={{ color: "var(--muted)", marginTop: "var(--space-7)", maxWidth: "62ch" }}>
            Filtering by type, system, and location turns on once verified case studies populate the library. No project name or photo is published without confirmation and permission.
          </p>
        </div>
      </section>

      <CTABand
        headline="Have a project like these?"
        body="Tell us about your property and we’ll help determine the right next conversation."
      />
    </PageShell>
  );
}
