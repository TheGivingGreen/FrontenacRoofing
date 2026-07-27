import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TPO & Single-Ply Flat Roofing",
  description:
    "TPO and single-ply membrane roofing for flat and low-slope commercial buildings — installed and detailed for long service life.",
};

export default function Page() {
  return (
    <ServiceDetail
      structuredData={{
        service: serviceJsonLd({
          name: "TPO & Single-Ply Flat Roofing",
          description: "TPO and single-ply membrane roofing for flat and low-slope commercial buildings — installed and detailed for long service life.",
          url: "/commercial-roofing/tpo-single-ply-flat-roofing",
          serviceType: "Commercial Roofing",
        }),
        breadcrumb: breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Commercial Roofing", url: "/commercial-roofing" },
          { name: "TPO & Single-Ply Flat Roofing" },
        ]),
      }}
      eyebrow="TPO + Single-Ply"
      parent={{ label: "Commercial", href: "/commercial-roofing" }}
      title={<>Flat roof. Right system. Right details.</>}
      lead="TPO and other single-ply membranes are a durable, cost-effective choice for many flat and low-slope commercial roofs. The performance is in the detailing as much as the membrane."
      heroImage="/images/tpo-hero.webp"
      primaryCta={{ label: "Discuss a Commercial Project", href: "/schedule-inspection" }}
      intro={{
        eyebrow: "Why single-ply",
        title: "The membrane matters. The details matter more.",
        body: "A single-ply roof performs when the seams, flashings, and penetrations are executed correctly. That's where careful installation earns its keep.",
        bullets: [
          "TPO and single-ply membrane systems",
          "Proper seam welding and termination",
          "Flashing and penetration detailing",
          "New construction and re-roof applications",
        ],
        image: "/images/tpo-detail.webp",
        imageLeft: true,
      }}
      cards={{
        heading: "Applications",
        items: [
          { t: "Re-roof / replacement", d: "New single-ply systems over prepared decks at end of roof life." },
          { t: "New construction", d: "Membrane roofing for new commercial buildings." },
          { t: "Detailing & repair", d: "Seam, flashing, and penetration work on existing single-ply roofs." },
        ],
      }}
      note="Membrane manufacturers, thicknesses, and warranty options appear here once specified and documented for your project."
      cta={{ headline: "Considering a single-ply roof?", body: "Tell us about the building and we'll recommend the right system.", label: "Discuss a Commercial Project" }}
    />
  );
}
