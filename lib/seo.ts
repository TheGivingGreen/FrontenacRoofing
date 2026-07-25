import { site } from "@/lib/site";

export const productionOrigin = `https://${site.domain}`;
export const isStagingBuild = process.env.GITHUB_PAGES === "true";

export const publicRoutes = [
  "/",
  "/commercial-roofing",
  "/commercial-roofing/commercial-roof-repair-replacement",
  "/commercial-roofing/roof-coating-restoration",
  "/commercial-roofing/tpo-single-ply-flat-roofing",
  "/residential-roofing",
  "/residential-roofing/roof-repair-replacement",
  "/residential-roofing/specialty-roofing",
  "/residential-roofing/storm-hail-insurance",
  "/siding-exteriors",
  "/services",
  "/projects",
  "/about",
  "/reviews",
  "/service-areas",
  "/contact",
  "/schedule-inspection",
  "/privacy",
  "/accessibility",
  "/terms",
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, productionOrigin).toString();
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["RoofingContractor", "HomeAndConstructionBusiness"],
  "@id": `${productionOrigin}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: productionOrigin,
  telephone: site.phoneHref,
  email: site.email,
  description:
    "Residential and commercial roofing, roof restoration, siding, and exterior construction serving the Greater St. Louis region.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: site.region,
  },
  sameAs: [site.social.linkedin, site.social.facebook, site.social.instagram],
  image: absoluteUrl("/images/home-hero.webp"),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing and exterior construction services",
    itemListElement: [
      ["Commercial roofing", "/commercial-roofing"],
      ["Commercial roof repair and replacement", "/commercial-roofing/commercial-roof-repair-replacement"],
      ["Roof restoration and coating", "/commercial-roofing/roof-coating-restoration"],
      ["TPO and single-ply flat roofing", "/commercial-roofing/tpo-single-ply-flat-roofing"],
      ["Residential roofing", "/residential-roofing"],
      ["Residential roof repair and replacement", "/residential-roofing/roof-repair-replacement"],
      ["Specialty roofing", "/residential-roofing/specialty-roofing"],
      ["Storm, hail, and insurance support", "/residential-roofing/storm-hail-insurance"],
      ["Siding and exteriors", "/siding-exteriors"],
    ].map(([name, path]) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        url: absoluteUrl(path),
        provider: { "@id": `${productionOrigin}/#organization` },
        areaServed: site.region,
      },
    })),
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${productionOrigin}/#website`,
  url: productionOrigin,
  name: site.name,
  inLanguage: "en-US",
  publisher: { "@id": `${productionOrigin}/#organization` },
};
