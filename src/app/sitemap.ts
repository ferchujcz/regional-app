import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { LANDINGS } from "@/lib/landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...LANDINGS.map((l) => ({
      url: `${SITE_URL}/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${SITE_URL}/calidad`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
