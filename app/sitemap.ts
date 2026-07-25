import type { MetadataRoute } from "next";
import { absoluteUrl, publicRoutes } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency:
      path === "/" ? "weekly" : path === "/projects" || path === "/reviews" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.includes("roofing") || path === "/services" ? 0.8 : 0.6,
  }));
}
