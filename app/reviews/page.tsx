import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What clients say about working with Frontenac Roofing & Construction — communication, execution, and results.",
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Reviews"
        crumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        title={<>In our clients’ words.</>}
        lead="The strongest theme in Frontenac’s feedback is communication — updates, photos, responsiveness, and minimal disruption. Verified reviews publish here with their source."
      />

      <section className="section section--compact surface-white" aria-label="Reviews">
        <div className="container container--reading">
          {/* Placeholder review — publishes only with confirmed source + permission */}
          <figure className="unverified" style={{ marginBottom: "var(--space-9)" }}>
            <blockquote className="t-display-md" style={{ color: "var(--ink)", lineHeight: 1.3, marginBottom: "var(--space-5)" }}>
              “[A verified, specific client statement about communication, execution, or outcome.]”
            </blockquote>
            <figcaption className={`t-label ${s.meta}`}>
              <strong style={{ color: "var(--ink)" }}>[Name]</strong>
              <span aria-hidden="true">·</span><span>[Role or property context]</span>
              <span aria-hidden="true">·</span><span>[Source]</span>
            </figcaption>
          </figure>

          <div style={{ border: "1px dashed var(--line-light)", padding: "var(--space-7)" }}>
            <p className="t-body" style={{ maxWidth: "68ch", color: "var(--muted)" }}>
              We publish reviews only with a confirmed source and permission — no anonymous star graphics
              (PROJECT_BRIEF §10). Legacy testimonials will appear here once their origin and wording are verified,
              alongside current third-party ratings such as the {site.shortName} BBB profile.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
