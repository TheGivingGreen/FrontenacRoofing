import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Storm, Hail & Insurance",
  description:
    "Storm and hail damage assessment with straightforward insurance-claim coordination — no pressure, no inflated claims.",
};

export default function Page() {
  return (
    <ServiceDetail
      eyebrow="Storm, Hail + Insurance"
      parent={{ label: "Residential", href: "/residential-roofing" }}
      title={<>Straightforward help after a storm.</>}
      lead="After hail or high wind, you need a clear assessment and an honest partner for the insurance process — not a hard sell."
      heroImage="/images/storm-hero.webp"
      intro={{
        eyebrow: "How it works",
        title: "Document the damage, then navigate the claim.",
        body: "We inspect the roof, document what we find with photographs, and help you understand your options and the claim process — so you can make a decision with confidence.",
        bullets: [
          "Thorough storm and hail inspection",
          "Photographed documentation of damage",
          "Insurance-claim coordination",
          "Repair or replacement based on what's needed",
        ],
        image: "/images/storm-detail.webp",
        imageLeft: true,
      }}
      cards={{
        heading: "What to expect",
        items: [
          { t: "Inspection", d: "A documented assessment of storm or hail impact on the roof." },
          { t: "Claim support", d: "Help understanding and coordinating your insurance claim." },
          { t: "The work", d: "Repair or replacement done with property protection and cleanup." },
        ],
      }}
      note="Licensing, bonding, and insurance details appear here once documentation is confirmed (PROJECT_BRIEF §10)."
      cta={{ headline: "Storm damage? Start with an inspection.", body: "We'll assess the roof and help you understand your options." }}
    />
  );
}
