import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";
import { industries } from "@/lib/regent-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const routes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/products",
    "/industries",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const industryRoutes = industries.map((industry) => `/industries/${industry.slug}`);

  return [...routes, ...industryRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/products") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
