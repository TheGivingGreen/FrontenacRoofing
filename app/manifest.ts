import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.GITHUB_PAGES === "true" ? "/FrontenacRoofing" : "";

  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Roofing and exterior construction for commercial properties and distinctive homes in Greater St. Louis.",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#f3f0e8",
    theme_color: "#090a0b",
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
