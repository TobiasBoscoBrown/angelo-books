import { MetadataRoute } from "next";
import { brand } from "@/lib/brand";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const servicePages = brand.services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const articlePages = articles.map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: new Date(a.updated + "T00:00:00Z"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/articles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...servicePages,
    ...articlePages,
  ];
}
