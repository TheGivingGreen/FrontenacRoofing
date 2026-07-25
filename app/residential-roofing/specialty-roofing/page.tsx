import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Specialty Roofing",
  description:
    "Tile, slate, metal, aluminum, wood shake, and DECRA roofing systems for architecturally distinctive homes — executed with care for complex geometry.",
};

export default function Page() {
  return (
    <ServiceDetail
      eyebrow="Specialty Roofing"
      parent={{ label: "Residential", href: "/residential-roofing" }}
      title={<>Premium materials, complex geometry, clean execution.</>}
      lead="Tile, slate, metal, wood shake, and DECRA systems ask more of a roofer — in material handling, detailing, and craftsmanship. Distinctive homes deserve that care."
      heroImage="/images/specialty-hero.webp"
      intro={{
        eyebrow: "Where specialty systems fit",
        title: "The right system for an architecturally distinctive home.",
        body: "Specialty roofing is about matching the material to the architecture and installing it to last — with the flashing and detailing that complex rooflines demand.",
        bullets: [
          "Tile and slate",
          "Metal and aluminum",
          "Wood shake",
          "DECRA stone-coated steel systems",
        ],
        image: "/images/specialty-detail.webp",
        imageLeft: false,
      }}
      cards={{
        heading: "Specialty systems",
        items: [
          { t: "Tile & slate", d: "Durable, distinctive systems that reward careful installation." },
          { t: "Metal & aluminum", d: "Long-lasting standing-seam and metal roofing." },
          { t: "Wood shake & DECRA", d: "Natural shake and stone-coated steel alternatives." },
        ],
      }}
      note="Completed specialty-roof photography populates this page as projects are verified and approved."
      cta={{ headline: "Planning a specialty roof?", body: "Tell us about the home and the look you're after.", label: "Schedule an Inspection" }}
    />
  );
}
