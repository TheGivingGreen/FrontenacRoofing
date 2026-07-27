import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Roof Restoration & Coating",
  description:
    "Silicone and reflective roof restoration systems that can extend the service life of a sound commercial roof — with honest candidacy assessment.",
};

export default function Page() {
  return (
    <ServiceDetail
      structuredData={{
        service: serviceJsonLd({
          name: "Roof Restoration & Coating",
          description: "Silicone and reflective roof restoration systems that can extend the service life of a sound commercial roof — with honest candidacy assessment.",
          url: "/commercial-roofing/roof-coating-restoration",
          serviceType: "Commercial Roofing",
        }),
        breadcrumb: breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing" },
          { name: "Roof Restoration & Coating" },
        ]),
      }}
      eyebrow="Restoration + Coating"
      parent={{ label: "Commercial", href: "/commercial-roofing" }}
      title={<>Extend the roof you have — when it qualifies.</>}
      lead="A restoration coating can add years of service life and reflectivity to a sound commercial roof without a full tear-off. The key word is qualifies: not every roof is a candidate."
      heroImage="/images/coating-hero.webp"
      primaryCta={{ label: "Ask If Your Roof Qualifies", href: "/schedule-inspection" }}
      intro={{
        eyebrow: "Is your roof a candidate?",
        title: "Honest candidacy comes before any coating.",
        body: "Restoration works on roofs that are structurally sound with limited moisture in the system. We assess the deck and membrane first, and we'll tell you plainly if replacement is the better investment.",
        bullets: [
          "Membrane and moisture assessment",
          "Silicone and reflective (cool-roof) systems",
          "Roof-life extension where the roof qualifies",
          "A clear comparison against replacement",
        ],
        image: "/images/coating-detail.webp",
        imageLeft: false,
      }}
      cards={{
        heading: "What restoration delivers",
        items: [
          { t: "Extended service life", d: "Added years for a sound roof, deferring the cost of full replacement." },
          { t: "Reflective surface", d: "Cool-roof coatings that can reduce rooftop heat load." },
          { t: "Reduced disruption", d: "Often less tenant and operational impact than a tear-off." },
        ],
      }}
      note="Specific savings, cost-reduction, warranty-length, and tax claims are intentionally not stated here — they will be published only with current manufacturer substantiation and, where relevant, professional tax review (PROJECT_BRIEF §10)."
      cta={{ headline: "Wondering if coating is right for your roof?", body: "We'll assess it honestly and tell you whether restoration or replacement makes more sense.", label: "Ask About Roof Coating" }}
    />
  );
}
