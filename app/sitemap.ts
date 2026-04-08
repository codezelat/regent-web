import type { MetadataRoute } from "next";
import { getProductsTotalPages } from "@/components/regent/sections/products-catalog-section";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const routes = [
    "",
    "/contact",
    "/services",
    "/products",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const paginatedProducts = Array.from(
    { length: Math.max(0, getProductsTotalPages() - 1) },
    (_, index) => `/products/${String(index + 2)}`,
  );

  return [...routes, ...paginatedProducts].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/products") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
