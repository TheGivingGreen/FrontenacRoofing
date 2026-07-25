import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";
import s from "@/components/sections/pages.module.css";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing use of the Frontenac Roofing & Construction website.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} title={<>Terms of Use</>} />
      <section className="section section--compact surface-white">
        <div className="container">
          <div className={`${s.prose} unverified`}>
            <p className="updated t-body-sm">Template — pending legal review before publication.</p>
            <p>
              These Terms of Use govern your use of the {site.legalName} website. This is placeholder language and must be
              reviewed and finalized before launch.
            </p>
            <h2 className="t-display-md">Use of this site</h2>
            <p>Content on this website is provided for general information about our services. It does not constitute a quote, contract, or warranty.</p>
            <h2 className="t-display-md">Project information</h2>
            <p>Project descriptions, materials, and outcomes are illustrative. Specific scopes, pricing, and warranties are defined only in a signed agreement.</p>
            <h2 className="t-display-md">Contact</h2>
            <p>Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
