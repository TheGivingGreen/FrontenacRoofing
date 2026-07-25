import { Check } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export type ServiceDetailProps = {
  eyebrow: string;
  parent: { label: string; href: string };
  title: React.ReactNode;
  lead: string;
  heroImage: string;
  primaryCta?: { label: string; href: string };
  intro: { eyebrow: string; title: string; body: string; bullets: string[]; image: string; imageLeft?: boolean };
  cards: { heading: string; items: { t: string; d: string }[] };
  note?: string;
  cta?: { headline?: string; body?: string; label?: string; href?: string };
};

/**
 * Shared template for focused service pages (sub-services under Commercial /
 * Residential). Keeps the sub-pages visually consistent while each supplies its
 * own verified-safe content.
 */
export function ServiceDetail(p: ServiceDetailProps) {
  return (
    <PageShell>
      <PageHero
        eyebrow={p.eyebrow}
        crumbs={[{ label: "Home", href: "/" }, { label: p.parent.label, href: p.parent.href }, { label: p.eyebrow }]}
        title={p.title}
        lead={p.lead}
        image={{ ratio: "3-2", label: `${p.eyebrow} project`, src: p.heroImage }}
        actions={
          <>
            <Button href={p.primaryCta?.href ?? "/schedule-inspection"} variant="primary">
              {p.primaryCta?.label ?? "Schedule an Inspection"}
            </Button>
            <a href={`tel:${site.phoneHref}`} className="btn btn--secondary">Call {site.phone}</a>
          </>
        }
      />

      <section className="section section--compact surface-white" aria-labelledby="sd-intro">
        <div className="container container--editorial">
          <div className={`${s.split} ${p.intro.imageLeft ? s["split--7-5"] : s["split--5-7"]}`}>
            {p.intro.imageLeft ? (
              <div className={s.imageFirst}>
                <ImageSlot ratio="4-3" label={p.intro.title} src={p.intro.image} />
              </div>
            ) : null}
            <div>
              <span className="eyebrow t-label eyebrow--brass">{p.intro.eyebrow}</span>
              <h2 id="sd-intro" className="t-display-md">{p.intro.title}</h2>
              <p className="t-body-lg">{p.intro.body}</p>
              <ul className={s.checklist}>
                {p.intro.bullets.map((b) => (
                  <li key={b}><Check size={18} aria-hidden="true" /> <span className="t-body">{b}</span></li>
                ))}
              </ul>
            </div>
            {!p.intro.imageLeft ? (
              <div>
                <ImageSlot ratio="4-3" label={p.intro.title} src={p.intro.image} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section section--compact surface-paper" aria-labelledby="sd-cards">
        <div className="container container--editorial">
          <header className={s.sectionHead}>
            <span className="eyebrow t-label">{p.cards.heading}</span>
          </header>
          <div className={`${s.cards} ${p.cards.items.length >= 3 ? s["cards--3"] : s["cards--2"]}`}>
            {p.cards.items.map((c) => (
              <article key={c.t} className={s.card}>
                <h3 className="t-title-md">{c.t}</h3>
                <p className="t-body">{c.d}</p>
              </article>
            ))}
          </div>
          {p.note ? (
            <p className="t-body-sm unverified" style={{ color: "var(--muted)", marginTop: "var(--space-6)", maxWidth: "66ch" }}>
              {p.note}
            </p>
          ) : null}
        </div>
      </section>

      <CTABand
        headline={p.cta?.headline}
        body={p.cta?.body}
        primaryLabel={p.cta?.label}
        primaryHref={p.cta?.href}
      />
    </PageShell>
  );
}
