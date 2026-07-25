import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Commercial Roofing",
  description:
    "Assessment, repair, replacement, and restoration for commercial and occupied properties in the St. Louis region — backed by documentation and clear communication.",
};

const SYSTEMS = [
  { t: "Assessment + reporting", d: "Documented roof inspections with photographs, findings, and prioritized options.", href: "/commercial-roofing" },
  { t: "Repair + replacement", d: "Flat-roof and low-slope repair or full replacement matched to the building.", href: "/commercial-roofing/commercial-roof-repair-replacement" },
  { t: "Restoration + coating", d: "Silicone and reflective systems that extend roof life where the deck qualifies.", href: "/commercial-roofing/roof-coating-restoration" },
  { t: "TPO + single-ply", d: "TPO and other single-ply membrane systems for flat commercial roofs.", href: "/commercial-roofing/tpo-single-ply-flat-roofing" },
];

const DECISION = [
  { t: "Repair", d: "Isolated, serviceable damage on a roof with remaining life. The lowest-cost path when the system is otherwise sound." },
  { t: "Restore / coat", d: "An aging but structurally sound membrane that qualifies for a coating system — extends service life and reflectivity without a tear-off." },
  { t: "Replace", d: "A roof at the end of its life, with saturated insulation or repeated failures, where replacement is the responsible investment." },
];

export default function CommercialRoofingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Commercial Roofing"
        crumbs={[{ label: "Home", href: "/" }, { label: "Commercial" }]}
        title={<>Roofing decisions backed by documentation.</>}
        lead="From occupied hotels and multi-unit properties to flat-roof replacement and restoration, Frontenac approaches commercial work through assessment, planning, communication, and closeout."
        image={{ ratio: "3-2", label: "Commercial flat-roof project", src: "/images/commercial-hero.webp" }}
        actions={
          <>
            <Button href="/schedule-inspection" variant="primary">Discuss a Commercial Project</Button>
            <a href={`tel:${site.phoneHref}`} className="btn btn--secondary">Call {site.phone}</a>
          </>
        }
      />

      {/* Systems */}
      <section className="section section--compact surface-white" aria-labelledby="systems-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label">What we handle</span>
            <h2 id="systems-title" className="t-display-md">Systems and scopes.</h2>
          </header>
          <div className={`${s.cards} ${s["cards--2"]}`}>
            {SYSTEMS.map((c) => (
              <article key={c.t} className={s.card}>
                <h3 className="t-title-md">{c.t}</h3>
                <p className="t-body">{c.d}</p>
                <Link href={c.href} className="textlink">Learn more <ArrowRight size={16} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment / reporting */}
      <section className="section section--major surface-paper" aria-labelledby="assess-title">
        <div className="container container--editorial">
          <div className={`${s.split} ${s["split--7-5"]}`}>
            <div className={s.imageFirst}>
              <ImageSlot ratio="4-3" label="Inspection & documentation on a commercial roof" src="/images/commercial-assessment.webp" />
            </div>
            <div>
              <span className="eyebrow t-label eyebrow--brass">Assessment + reporting</span>
              <h2 id="assess-title" className="t-display-md">You get findings, not a sales pitch.</h2>
              <p className="t-body-lg">Every engagement starts with a documented assessment — the roof’s current condition, the causes behind it, and a clear set of options with the trade-offs spelled out.</p>
              <ul className={s.checklist}>
                {["Photographed conditions and problem areas", "Core or moisture findings where relevant", "Prioritized repair, restore, or replace options", "Budget ranges and expected service life"].map((li) => (
                  <li key={li}><Check size={18} aria-hidden="true" /> <span className="t-body">{li}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Decision framework (dark) */}
      <section className="section section--major surface-black" aria-labelledby="decide-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label">Repair · restore · replace</span>
            <h2 id="decide-title" className="t-display-md">The right approach for the roof in front of us.</h2>
            <p className="t-body-lg">We recommend the approach the building actually needs — not the same solution every time.</p>
          </header>
          <div className={`${s.specGrid} ${s["specGrid--3"]}`}>
            {DECISION.map((d) => (
              <div key={d.t} className={s.specCell}>
                <div className="value" style={{ fontSize: 24 }}>{d.t}</div>
                <p className="t-body-sm" style={{ color: "var(--text-dark-body)" }}>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occupied buildings */}
      <section className="section section--major surface-paper" aria-labelledby="occupied-title">
        <div className="container container--editorial">
          <div className={`${s.split} ${s["split--5-7"]}`}>
            <div>
              <span className="eyebrow t-label eyebrow--brass">Occupied properties</span>
              <h2 id="occupied-title" className="t-display-md">Work that respects tenants and schedules.</h2>
              <p className="t-body-lg">Hotels, multi-unit, and occupied commercial buildings need phasing, access planning, safety, and communication as much as they need roofing.</p>
              <ul className={s.checklist}>
                {["Phasing that limits disruption to operations", "Safety and site protection around occupants", "Clear schedule and daily communication", "Cleanup and closeout documentation"].map((li) => (
                  <li key={li}><Check size={18} aria-hidden="true" /> <span className="t-body">{li}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <ImageSlot ratio="4-3" label="Crew working safely on an occupied commercial building" src="/images/commercial-occupied.webp" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured commercial projects */}
      <section className="section section--compact surface-white" aria-labelledby="cwork-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label">Recent commercial work</span>
            <h2 id="cwork-title" className="t-display-md">Proof, not promises.</h2>
          </header>
          <div className={`${s.imageCards} ${s["imageCards--3"]}`}>
            {[1, 2, 3].map((i) => (
              <Link key={i} href="/projects" className={`${s.imageCard} unverified`}>
                <ImageSlot ratio="4-3" label="Commercial project — approved photo" src={`/images/commercial-project-${i}.webp`} />
                <h3 className="t-title-md">[Project title]</h3>
                <div className={`t-label ${s.meta}`}><span>Commercial</span><span aria-hidden="true">·</span><span>[City, ST]</span></div>
              </Link>
            ))}
          </div>
          <p className="t-body-sm" style={{ color: "var(--muted)", marginTop: "var(--space-6)", maxWidth: "60ch" }}>
            Case studies publish once each project is verified and photography is approved (PROJECT_BRIEF §11). Warranty specifics appear here once the manufacturer, system, and terms are documented.
          </p>
        </div>
      </section>

      <CTABand
        headline="Let’s talk about your property."
        body="Tell us about the building, the roof, and the timeline. We’ll recommend the right next step."
        primaryLabel="Discuss a Commercial Project"
      />
    </PageShell>
  );
}
