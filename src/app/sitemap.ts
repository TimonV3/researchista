import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://researchista.eu";
  const routes = [
    "",
    "/products",
    "/products/mobility-era-game",
    "/certification",
    "/for-researchers",
    "/about",
    "/play-and-learn",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-11-16",
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/certification" ? 0.9 : 0.8,
  }));
}
