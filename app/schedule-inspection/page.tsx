import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule an Inspection",
  description:
    "Request a roofing inspection or project assessment from Frontenac Roofing & Construction.",
};

/**
 * Primary conversion destination (PROJECT_BRIEF.md §9, HOMEPAGE_WIREFRAME.md §2).
 * Scaffold stub: field list is documented but not wired to a destination.
 * CONFIRM before launch: form destination/CRM (§17 Q18), response window (§19),
 * spam protection (no visible arithmetic CAPTCHA), consent + privacy language.
 */
export default function ScheduleInspectionPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section
          className="section section--major surface-paper"
          style={{ paddingTop: "calc(var(--nav-height-desktop) + var(--space-9))" }}
          aria-labelledby="si-title"
        >
          <div className="container container--reading">
            <span className="eyebrow t-label">Schedule an Inspection</span>
            <h1 id="si-title" className="t-display-lg" style={{ marginBottom: "var(--space-5)" }}>
              Start with a clear assessment.
            </h1>
            <p className="t-lead" style={{ marginBottom: "var(--space-7)" }}>
              Tell us about your property and we'll recommend
              the right next step. Prefer to talk now?
              Call{" "}
              <a href={`tel:${site.phoneHref}`} className="textlink">
                {site.phone}
              </a>
              .
            </p>

            <div
              className="unverified"
              style={{
                border: "1px dashed var(--line-light)",
                padding: "var(--space-7)",
                background: "var(--white)",
              }}
            >
              <h2 className="t-title-md" style={{ marginBottom: "var(--space-4)" }}>
                Form placeholder
              </h2>
              <p className="t-body" style={{ marginBottom: "var(--space-4)" }}>
                One primary form system with service-specific variants
                (PROJECT_BRIEF.md §9). Residential fields: name, email, phone,
                property address, service needed, storm/insurance involvement,
                preferred contact method, optional photos, consent, hidden
                source/campaign fields. Commercial adds: company, property type,
                timeline, plans/photos upload.
              </p>
              <p className="t-body-sm" style={{ color: "var(--muted)" }}>
                Not wired to a destination yet — confirm inbox/CRM routing,
                success state, and response-time promise before launch.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
