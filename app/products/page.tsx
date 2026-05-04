import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import { ProductsCatalogSection } from "@/components/regent/sections/products-catalog-section";
import { listProducts, type ProductListParams } from "@/lib/products/queries";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the Regent Technologies product catalog for industrial tools, accessories, and workshop support products.",
};

type SearchParams = Promise<{ q?: string; sort?: ProductListParams["sort"]; page?: string }>;

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const page = Number(params.page || 1);
  const data = await listProducts({
    page: Number.isInteger(page) && page > 0 ? page : 1,
    pageSize: 6,
    query: params.q,
    sort: params.sort,
  });

  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/products"
        eyebrow="Product Catalog"
        title="Professional Tools, Accessories, And Industrial Product Support"
        description="Browse the Regent Technologies product catalog for workshop tools, accessories, and industrial support products aligned with our sharpening and maintenance services."
        image="/regent/products-main.png"
        imageAlt="Regent Technologies product catalog"
        actions={[
          { href: "/contact", label: "Ask About Products" },
          { href: "/services", label: "View Services", variant: "secondary" },
        ]}
      />
      <ProductsCatalogSection
        items={data.items}
        currentPage={data.page}
        totalPages={data.totalPages}
        query={params.q}
        sort={params.sort}
      />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
