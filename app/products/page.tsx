import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import { ProductsCatalogSection } from "@/components/regent/sections/products-catalog-section";
import { listProducts } from "@/lib/products/queries";
import { createPageMetadata } from "@/lib/seo";

type SearchParams = Promise<{ q?: string; page?: string }>;

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  const hasQueryState = Boolean(params.q?.trim() || params.page);

  return createPageMetadata({
    title: "Industrial Tools and Blade Sharpening Products Sri Lanka",
    description:
      "Browse Regent Technologies products including Arden Router Bits, TCT and HSS blade support, power tools, accessories, and workshop tooling for Sri Lanka.",
    path: "/products",
    image: "/regent/products/hand-tools.jpg",
    noIndex: hasQueryState,
  });
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const page = Number(params.page || 1);
  const data = await listProducts({
    page: Number.isInteger(page) && page > 0 ? page : 1,
    pageSize: 9,
    query: params.q,
  });

  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/products"
        eyebrow="Product Catalog"
        title="Professional Tools, Accessories, And Industrial Product Support"
        description="Browse the Regent Technologies product catalog for workshop tools, accessories, and industrial support products aligned with our sharpening and maintenance services."
        image="/regent/products/hand-tools.jpg"
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
      />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
