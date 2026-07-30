import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Schedule an Inspection",
  description:
    "Request a roofing inspection or project assessment from Frontenac Roofing & Construction.",
};

const fieldBox: React.CSSProperties = {
  height: 52,
  width: "100%",
  border: "1px solid var(--line-light)",
  background: "var(--white)",
  padding: "0 16px",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  color: "var(--ink)",
  borderRadius: 0,
};
const areaBox: React.CSSProperties = { ...fieldBox, height: 128, padding: "12px 16px", resize: "vertical" };

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
            <span className="eyebrow t-label eyebrow--brass">Schedule an Inspection</span>
            <h1 id="si-title" className="t-display-lg" style={{ marginBottom: "var(--space-5)" }}>
              Start with a clear assessment.
            </h1>
            <p className="t-lead" style={{ marginBottom: "var(--space-7)" }}>
              Tell us about your property and we&apos;ll recommend the right next step. Prefer to talk now?
              Call{" "}
              <a href={`tel:${site.phoneHref}`} className="textlink">
                {site.phone}
              </a>
              .
            </p>

            <div style={{ border: "1px solid var(--line-light)", padding: "var(--space-7)", background: "var(--white)" }}>
              <form name="inspection" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you">
                <input type="hidden" name="form-name" value="inspection" />
                <p hidden>
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>

                <div className={s.fieldList}>
                  <div className={s.field}>
                    <label htmlFor="i-name">Name</label>
                    <input id="i-name" name="name" type="text" required autoComplete="name" placeholder="Your name" style={fieldBox} />
                  </div>
                  <div className={s.field}>
                    <label htmlFor="i-phone">Phone</label>
                    <input id="i-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(314) 555-0000" style={fieldBox} />
                  </div>
                  <div className={s.field} style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="i-email">Email</label>
                    <input id="i-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" style={fieldBox} />
                  </div>
                  <div className={s.field} style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="i-address">Property address</label>
                    <input id="i-address" name="property_address" type="text" placeholder="Street, City, State" style={fieldBox} />
                  </div>
                  <div className={s.field}>
                    <label htmlFor="i-service">Service needed</label>
                    <input id="i-service" name="service_needed" type="text" placeholder="Inspection, repair, replacement…" style={fieldBox} />
                  </div>
                  <div className={s.field}>
                    <label htmlFor="i-storm">Storm / insurance involved?</label>
                    <select id="i-storm" name="storm_insurance" defaultValue="" style={fieldBox}>
                      <option value="" disabled>Select…</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="i-contact">Preferred contact method</label>
                    <select id="i-contact" name="preferred_contact" defaultValue="" style={fieldBox}>
                      <option value="" disabled>Select…</option>
                      <option>Phone</option>
                      <option>Email</option>
                      <option>Text</option>
                    </select>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="i-type">Customer type</label>
                    <select id="i-type" name="customer_type" defaultValue="" style={fieldBox}>
                      <option value="" disabled>Select…</option>
                      <option>Commercial</option>
                      <option>Residential</option>
                    </select>
                  </div>
                  <div className={s.field} style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="i-message">What&apos;s happening at your property?</label>
                    <textarea id="i-message" name="message" placeholder="Leaks, storm damage, age of roof, timeline…" style={areaBox} />
                  </div>
                </div>

                <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: "var(--space-5)", fontSize: 13, color: "var(--body)" }}>
                  <input type="checkbox" name="consent" required style={{ marginTop: 3 }} />
                  <span>I agree to be contacted by Frontenac Roofing &amp; Construction about my request.</span>
                </label>

                <div style={{ marginTop: "var(--space-6)" }}>
                  <button type="submit" className="btn btn--primary">Schedule my inspection</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
