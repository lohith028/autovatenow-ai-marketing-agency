import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog-posts";
import { services } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://autovaternow.com";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/case-studies/aura-cutisurg-clinic`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/who-we-help`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/who-we-help/dermatology-skin-clinics`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/who-we-help/dental-clinics`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/who-we-help/general-surgeons`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/book-a-growth-session`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
