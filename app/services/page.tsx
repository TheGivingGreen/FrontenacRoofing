import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ImageSlot } from "@/components/ui/ImageSlot";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial and residential roofing, restoration and coating, specialty systems, siding, and storm response across the St. Louis region.",
};

const GROUPS = [
  {
    heading: "Commercial",
    items: [
      { t: "Commercial Roofing", d: "Assessment, repair, replacement, and restoration for commercial properties.", href: "/commercial-roofing", img: "/images/services-commercial.webp" },
      { t: "Roof Restoration + Coating", d: "Silicone and reflective systems that extend roof life where the deck qualifies.", href: "/commercial-roofing/roof-coating-restoration", img: "/images/services-coating.webp" },
      { t: "TPO + Single-Ply", d: "TPO and single-ply membrane systems for flat commercial roofs.", href: "/commercial-roofing/tpo-single-ply-flat-roofing", img: "/images/services-tpo.webp" },
    ],
  },
  {
    heading: "Residential",
    items: [
      { t: "Residential Roofing", d: "Repair, replacement, and storm response for homes.", href: "/residential-roofing", img: "/images/services-residential.webp" },
      { t: "Specialty Roofing", d: "Tile, slate, metal, wood shake, and DECRA systems.", href: "/residential-roofing/specialty-roofing", img: "/images/services-specialty.webp" },
      { t: "Siding + Exteriors", d: "Siding installation, replacement, and storm-damage repair.", href: "/siding-exteriors", img: "/images/services-siding.webp" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={<>Services organized around the property.</>}
        lead="Whether you manage a commercial portfolio or care for a single distinctive home, the right work starts with an honest assessment."
      />

      {GROUPS.map((g, gi) => (
        <section
          key={g.heading}
          className={`section section--compact ${gi % 2 === 0 ? "surface-white" : "surface-paper"}`}
          aria-label={`${g.heading} services`}
        >
          <div className="container container--editorial">
            <span className="eyebrow t-label eyebrow--brass">{g.heading}</span>
            <div className={`${s.imageCards} ${s["imageCards--3"]}`} style={{ marginTop: "var(--space-5)" }}>
              {g.items.map((it) => (
                <Link key={it.t} href={it.href} className={s.imageCard}>
                  <ImageSlot ratio="4-3" label={it.t} src={it.img} />
                  <h3 className="t-title-md">{it.t}</h3>
                  <p className="t-body">{it.d}</p>
                  <span className="textlink">Explore <ArrowRight size={16} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--compact surface-white" aria-label="Renovation note">
        <div className="container container--editorial">
          <div className="unverified" style={{ border: "1px dashed var(--line-light)", padding: "var(--space-7)" }}>
            <span className="eyebrow t-label">Renovation + Construction</span>
            <p className="t-body" style={{ maxWidth: "68ch", color: "var(--muted)" }}>
              Commercial renovation is a corroborated capability (PROJECT_BRIEF §6). This section will describe the confirmed renovation scope once ownership defines current offerings.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
