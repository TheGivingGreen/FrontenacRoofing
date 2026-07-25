import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Siding & Exteriors",
  description:
    "Residential siding installation, replacement, and storm-damage repair — exterior systems that match the standard we hold for roofing.",
};

export default function Page() {
  return (
    <ServiceDetail
      eyebrow="Siding + Exteriors"
      parent={{ label: "Services", href: "/services" }}
      title={<>Exterior systems that match the roof’s standard.</>}
      lead="Siding protects and defines a home. We install and replace exterior systems with the same care for detail, property protection, and communication we bring to roofing."
      heroImage="/images/siding-hero.webp"
      primaryCta={{ label: "Request a Siding Consultation", href: "/schedule-inspection" }}
      intro={{
        eyebrow: "What we do",
        title: "Installation, replacement, and storm repair.",
        body: "From full siding replacement to storm-damage repair, we help you choose products that fit the home’s appearance, energy performance, and budget.",
        bullets: [
          "Siding installation and full replacement",
          "Storm-damage siding repair",
          "Product guidance for appearance and performance",
          "Careful property protection and cleanup",
        ],
        image: "/images/siding-detail.webp",
        imageLeft: false,
      }}
      cards={{
        heading: "Signs it may be time",
        items: [
          { t: "Visible damage", d: "Cracking, warping, or storm damage to existing siding." },
          { t: "Rising energy costs", d: "Aging siding and insulation that no longer perform." },
          { t: "Dated appearance", d: "An exterior refresh to match the home’s value." },
        ],
      }}
      note="Manufacturer relationships and installer credentials (including James Hardie) are stated here only once current status and approved terminology are confirmed (PROJECT_BRIEF §10)."
      cta={{ headline: "Considering new siding?", body: "Tell us about the home and we’ll walk you through the options.", label: "Request a Siding Consultation" }}
    />
  );
}
