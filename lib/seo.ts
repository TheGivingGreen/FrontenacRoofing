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
  address: {
    "@type": "PostalAddress",
    ...site.address,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.6053,
    longitude: -90.4184,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  description:
    "Residential and commercial roofing, roof restoration, siding, and exterior construction serving the Greater St. Louis region.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: site.region,
  },
  sameAs: [site.social.linkedin, site.social.facebook, site.social.instagram],
  logo: absoluteUrl("/brand/frontenac-logo-full.png"),
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

export function serviceJsonLd(params: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.url),
    serviceType: params.serviceType,
    provider: { "@id": `${productionOrigin}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.region,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      ...(item.url ? { item: absoluteUrl(item.url) } : {}),
    })),
  };
}
