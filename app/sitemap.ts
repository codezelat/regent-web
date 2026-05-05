import type { MetadataRoute } from "next";
import { listProducts } from "@/lib/products/queries";
import { getSiteUrl } from "@/lib/site-config";
import { industries } from "@/lib/regent-content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
  const firstProductPage = await listProducts({ pageSize: 24 });
  const remainingProductPages =
    firstProductPage.totalPages > 1
      ? await Promise.all(
          Array.from({ length: firstProductPage.totalPages - 1 }, (_, index) =>
            listProducts({ page: index + 2, pageSize: 24 }),
          ),
        )
      : [];
  const products = [
    ...firstProductPage.items,
    ...remainingProductPages.flatMap((page) => page.items),
  ];
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: product.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const staticRoutes = [...routes, ...industryRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/products")
      ? ("weekly" as const)
      : ("monthly" as const),
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
