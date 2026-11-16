import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"],
        allow: "/",
      },
    ],
    sitemap: "https://researchista.eu/sitemap.xml",
  };
}
