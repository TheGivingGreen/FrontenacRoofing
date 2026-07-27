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

            {/* Form scaffold */}
            <div className={`${s.formNote} unverified`}>
              <h2 className="t-title-lg" style={{ marginBottom: "var(--space-2)" }}>Request an Inspection or Consultation</h2>
              <p className="t-body-sm" style={{ color: "var(--muted)", marginBottom: "var(--space-2)" }}>
                Form scaffold — not yet wired to a destination. Confirm inbox/CRM routing, success state, and response window before launch (PROJECT_BRIEF §9, §17).
              </p>
              <div className={s.fieldList}>
                <div className={s.field}>
                  <label>Name</label>
                  <div className="box">Your name</div>
                </div>
                <div className={s.field}>
                  <label>Phone</label>
                  <div className="box">(314) 555-0000</div>
                </div>
                <div className={`${s.field} full`}>
                  <label>Email</label>
                  <div className="box">you@example.com</div>
                </div>
                <div className={`${s.field} full`}>
                  <label>Property address</label>
                  <div className="box">Street address, City, State</div>
                </div>
                <div className={s.field}>
                  <label>Customer type (commercial / residential)</label>
                  <div className="box">Commercial or residential?</div>
                </div>
                <div className={s.field}>
                  <label>Service needed</label>
                  <div className="box">What can we help with?</div>
                </div>
                <div className={`${s.field} full`}>
                  <label>Message</label>
                  <div className="box area">Tell us about your property and what you're dealing with.</div>
                </div>
              </div>
              <div style={{ marginTop: "var(--space-5)" }}>
                <span className="btn btn--primary" aria-disabled="true">Submit (pending wiring)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
