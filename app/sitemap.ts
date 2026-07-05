import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

const publicRoutes = [
  "/",
  "/about",
  "/platform",
  "/developers",
  "/security",
  "/partnerships",
  "/company",
  "/contact",
  "/legal",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
