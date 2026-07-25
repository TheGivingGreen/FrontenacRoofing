import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Frontenac Roofing & Construction collects and uses information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} title={<>Privacy Policy</>} />
      <section className="section section--compact surface-white">
        <div className="container">
          <div className={`${s.prose} unverified`}>
            <p className="updated t-body-sm">Template — pending legal review before publication.</p>
            <p>
              This Privacy Policy describes how {site.legalName} (“{site.shortName},” “we,” “us”) handles information you
              provide through this website. This is placeholder language and must be reviewed and finalized by the company
              and, where appropriate, legal counsel before launch.
            </p>
            <h2 className="t-display-md">Information we collect</h2>
            <p>Information you submit through our contact and inspection request forms — such as your name, email, phone number, property address, and details about your project.</p>
            <h2 className="t-display-md">How we use it</h2>
            <ul>
              <li>To respond to your inquiry and schedule inspections or consultations.</li>
              <li>To communicate about your project.</li>
              <li>To improve our services and website.</li>
            </ul>
            <h2 className="t-display-md">Sharing</h2>
            <p>We do not sell your personal information. [Confirm any service providers, CRM, or partners that receive form data — PROJECT_BRIEF §17 Q18.]</p>
            <h2 className="t-display-md">Contact</h2>
            <p>Questions about this policy: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
