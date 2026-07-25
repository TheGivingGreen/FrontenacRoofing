import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Commercial Roof Repair & Replacement",
  description:
    "Flat-roof and low-slope commercial roof repair and full replacement matched to the building, the budget, and the roof's remaining life.",
};

export default function Page() {
  return (
    <ServiceDetail
      eyebrow="Repair + Replacement"
      parent={{ label: "Commercial", href: "/commercial-roofing" }}
      title={<>Repair when it makes sense. Replace when it doesn’t.</>}
      lead="For commercial and low-slope roofs, the right answer depends on the deck, the insulation, and the roof's remaining life — not on which option sells more."
      heroImage="/images/commercial-repair-hero.webp"
      primaryCta={{ label: "Discuss a Commercial Project", href: "/schedule-inspection" }}
      intro={{
        eyebrow: "How we decide",
        title: "An assessment first, a recommendation second.",
        body: "We document the roof's condition and the causes behind any failures, then lay out repair and replacement options with honest trade-offs and expected service life.",
        bullets: [
          "Moisture and deck evaluation where relevant",
          "Repair scope for serviceable, sound roofs",
          "Full replacement when the system is at end of life",
          "Budget ranges and expected lifespan for each path",
        ],
        image: "/images/commercial-repair-detail.webp",
        imageLeft: true,
      }}
      cards={{
        heading: "Common scopes",
        items: [
          { t: "Leak & flashing repair", d: "Targeted repair of failed seams, flashings, penetrations, and details." },
          { t: "Section replacement", d: "Replacing a failed area while preserving sound roofing elsewhere." },
          { t: "Full replacement", d: "Complete tear-off and new system when the roof has reached end of life." },
        ],
      }}
      note="Warranty terms and manufacturer systems appear here once documented (PROJECT_BRIEF §10)."
      cta={{ headline: "Not sure whether to repair or replace?", body: "We'll assess the roof and give you a documented recommendation.", label: "Discuss a Commercial Project" }}
    />
  );
}
