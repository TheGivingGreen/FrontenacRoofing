import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AudienceGateway } from "@/components/sections/AudienceGateway";
import { ProofRail } from "@/components/sections/ProofRail";
import { CommercialFeature } from "@/components/sections/CommercialFeature";
import { ResidentialFeature } from "@/components/sections/ResidentialFeature";
import { ServicesIndex } from "@/components/sections/ServicesIndex";
import { ProcessRail } from "@/components/sections/ProcessRail";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Testimonial } from "@/components/sections/Testimonial";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Homepage — section order per HOMEPAGE_WIREFRAME.md §3 and DESIGN.md §15.
 * Page rhythm alternates light/dark surfaces (DESIGN.md §4 recommended rhythm):
 * dark hero → paper → white → paper → dark → white → dark → paper → paper →
 * white → stone → dark. No two text-only dark bands run consecutively.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <AudienceGateway />
        <ProofRail />
        <CommercialFeature />
        <ResidentialFeature />
        <ServicesIndex />
        <ProcessRail />
        <FeaturedProject />
        <ProjectGrid />
        <Testimonial />
        <ServiceArea />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
