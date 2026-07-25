import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Roof Repair & Replacement",
  description:
    "Residential roof repair, leak repair, shingle replacement, and full roof replacement with careful property protection and clear communication.",
};

export default function Page() {
  return (
    <ServiceDetail
      eyebrow="Repair + Replacement"
      parent={{ label: "Residential", href: "/residential-roofing" }}
      title={<>Repair, replacement, and everything in between.</>}
      lead="From a single leak to a full replacement, we assess the roof honestly and recommend the work your home actually needs."
      heroImage="/images/res-repair-hero.webp"
      intro={{
        eyebrow: "Our approach",
        title: "The right scope for your roof and your budget.",
        body: "We start with an inspection, show you what we find, and give you clear options — so you understand the condition of your roof before any work begins.",
        bullets: [
          "Leak and storm-damage repair",
          "Shingle and section replacement",
          "Full roof replacement",
          "Property protection and thorough cleanup",
        ],
        image: "/images/res-repair-detail.webp",
        imageLeft: true,
      }}
      cards={{
        heading: "Common work",
        items: [
          { t: "Leak repair", d: "Finding and fixing the source, not just the symptom." },
          { t: "Shingle replacement", d: "Matching and replacing damaged or aging shingles." },
          { t: "Full replacement", d: "A new roof system with the right underlayment and details." },
        ],
      }}
      cta={{ headline: "Schedule a residential inspection.", body: "We'll assess your roof and lay out clear options." }}
    />
  );
}
