import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Frontenac Roofing & Construction. Call, email, or request an inspection or commercial project consultation.",
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

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={<>Get in touch.</>}
        lead="Commercial or residential, urgent or planned — tell us what's happening at your property and we'll respond with the right path forward."
      />

      <section className="section section--compact surface-white" aria-label="Contact details and form">
        <div className="container container--editorial">
          <div className={s.contactGrid}>
            {/* Details */}
            <div>
              <span className="eyebrow t-label eyebrow--brass">Reach us</span>
              <div className={s.contactList} style={{ marginTop: "var(--space-5)" }}>
                <div className={s.contactItem}>
                  <span className={`t-label ${s.label}`}>Phone</span>
                  <a href={`tel:${site.phoneHref}`}><Phone size={18} aria-hidden="true" style={{ display: "inline", verticalAlign: "-3px", marginRight: 8 }} />{site.phone}</a>
                </div>
                <div className={s.contactItem}>
                  <span className={`t-label ${s.label}`}>Email</span>
                  <a href={`mailto:${site.email}`}><Mail size={18} aria-hidden="true" style={{ display: "inline", verticalAlign: "-3px", marginRight: 8 }} />{site.email}</a>
                </div>
                <div className={s.contactItem}>
                  <span className={`t-label ${s.label}`}>Address</span>
                  <address className="val" style={{ fontStyle: "normal" }}>
                    {site.address.streetAddress}
                    <br />
                    {site.address.addressLocality}, {site.address.addressRegion}{" "}
                    {site.address.postalCode}
                  </address>
                </div>
                <div className={s.contactItem}>
                  <span className={`t-label ${s.label}`}>Service area</span>
                  <span className="val">{site.region}</span>
                </div>
              </div>
            </div>

            {/* Netlify form */}
            <div style={{ border: "1px solid var(--line-light)", padding: "var(--space-7)", background: "var(--white)" }}>
              <h2 className="t-title-lg" style={{ marginBottom: "var(--space-5)" }}>
                Request an inspection or consultation
              </h2>

              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you">
                {/* Netlify form plumbing */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>

                <div className={s.fieldList}>
                  <div className={s.field}>
                    <label htmlFor="c-name">Name</label>
                    <input id="c-name" name="name" type="text" required autoComplete="name" placeholder="Your name" style={fieldBox} />
                  </div>
                  <div className={s.field}>
                    <label htmlFor="c-phone">Phone</label>
                    <input id="c-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(314) 555-0000" style={fieldBox} />
                  </div>
                  <div className={s.field} style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="c-email">Email</label>
                    <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" style={fieldBox} />
                  </div>
                  <div className={s.field} style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="c-address">Property address</label>
                    <input id="c-address" name="property_address" type="text" placeholder="Street, City, State" style={fieldBox} />
                  </div>
                  <div className={s.field}>
                    <label htmlFor="c-type">Customer type</label>
                    <select id="c-type" name="customer_type" defaultValue="" style={fieldBox}>
                      <option value="" disabled>Select…</option>
                      <option>Commercial</option>
                      <option>Residential</option>
                    </select>
                  </div>
                  <div className={s.field}>
                    <label htmlFor="c-service">Service needed</label>
                    <input id="c-service" name="service_needed" type="text" placeholder="Repair, replacement, inspection…" style={fieldBox} />
                  </div>
                  <div className={s.field} style={{ gridColumn: "1 / -1" }}>
                    <label htmlFor="c-message">Message</label>
                    <textarea id="c-message" name="message" placeholder="Tell us about your property and what you're dealing with." style={areaBox} />
                  </div>
                </div>

                <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: "var(--space-5)", fontSize: 13, color: "var(--body)" }}>
                  <input type="checkbox" name="consent" required style={{ marginTop: 3 }} />
                  <span>I agree to be contacted by Frontenac Roofing &amp; Construction about my request.</span>
                </label>

                <div style={{ marginTop: "var(--space-6)" }}>
                  <button type="submit" className="btn btn--primary">Send request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
