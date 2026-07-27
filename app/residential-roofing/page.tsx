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
  title: "Residential Roofing",
  description:
    "Roof replacement, repair, specialty systems, and storm-damage support for St. Louis homes — with careful property protection and clear communication.",
};

const SERVICES = [
  { t: "Repair + replacement", d: "Leak repair, shingle replacement, and full roof replacement matched to the home.", href: "/residential-roofing/roof-repair-replacement" },
  { t: "Specialty roofing", d: "Tile, slate, metal, wood shake, and DECRA systems for distinctive homes.", href: "/residential-roofing/specialty-roofing" },
  { t: "Storm, hail + insurance", d: "Storm and hail assessment with insurance-claim coordination.", href: "/residential-roofing/storm-hail-insurance" },
];

export default function ResidentialRoofingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Residential Roofing"
        crumbs={[{ label: "Home", href: "/" }, { label: "Residential" }]}
        title={<>Craftsmanship worthy of the home.</>}
        lead="Roof replacement, repair, storm-damage response, and specialty roofing for homes that require careful material selection, clean execution, and respect for the property."
        image={{ ratio: "3-2", label: "Complex residential roof with architectural context", src: "/images/residential-hero.webp" }}
        actions={
          <>
            <Button href="/schedule-inspection" variant="primary">Schedule an Inspection</Button>
            <a href={`tel:${site.phoneHref}`} className="btn btn--secondary">Call {site.phone}</a>
          </>
        }
      />

      <section className="section section--compact surface-white" aria-labelledby="rserv-title">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label">What we do for homes</span>
            <h2 id="rserv-title" className="t-display-md">Repair, replacement, and specialty systems.</h2>
          </header>
          <div className={`${s.cards} ${s["cards--3"]}`}>
            {SERVICES.map((c) => (
              <article key={c.t} className={s.card}>
                <h3 className="t-title-md">{c.t}</h3>
                <p className="t-body">{c.d}</p>
                <Link href={c.href} className="textlink">Learn more <ArrowRight size={16} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--major surface-paper" aria-labelledby="rprotect-title">
        <div className="container container--editorial">
          <div className={`${s.split} ${s["split--7-5"]}`}>
            <div className={s.imageFirst}>
              <ImageSlot ratio="4-3" label="Property protection — grounds and landscaping covered during work" src="/images/residential-protection.webp" />
            </div>
            <div>
              <span className="eyebrow t-label eyebrow--brass">Property protection</span>
              <h2 id="rprotect-title" className="t-display-md">Your property is protected before the first shingle moves.</h2>
              <p className="t-body-lg">A distinctive home calls for careful preparation before a single shingle comes off. We plan access, protect landscaping and exteriors, and leave the site clean.</p>
              <ul className={s.checklist}>
                {["Landscaping, siding, and grounds protection", "Careful staging and daily cleanup", "Magnetic nail sweep at closeout", "Clear communication from start to finish"].map((li) => (
                  <li key={li}><Check size={18} aria-hidden="true" /> <span className="t-body">{li}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--major surface-paper" aria-labelledby="rins-title">
        <div className="container container--editorial">
          <div className={`${s.split} ${s["split--5-7"]}`}>
            <div>
              <span className="eyebrow t-label eyebrow--brass">Storm + insurance</span>
              <h2 id="rins-title" className="t-display-md">Straightforward help after a storm.</h2>
              <p className="t-body-lg">After hail or wind, we assess the roof, document the damage, and help you navigate the insurance process without pressure or inflated claims.</p>
              <div className={s.btnRow}>
                <Button href="/residential-roofing/storm-hail-insurance" variant="secondary">Storm, hail &amp; insurance <ArrowRight size={16} aria-hidden="true" /></Button>
              </div>
            </div>
            <div>
              <ImageSlot ratio="4-3" label="Roof inspection documenting storm or hail damage" src="/images/residential-storm.webp" />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        headline="Schedule a residential inspection."
        body="Tell us what’s happening with your roof and we’ll help determine the right next step."
        primaryLabel="Schedule an Inspection"
      />
    </PageShell>
  );
}
