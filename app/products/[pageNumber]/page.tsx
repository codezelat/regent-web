import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import {
  getProductsTotalPages,
  ProductsCatalogSection,
} from "@/components/regent/sections/products-catalog-section";

type Params = Promise<{ pageNumber: string }>;

export async function generateStaticParams() {
  return Array.from({ length: getProductsTotalPages() - 1 }, (_, index) => ({
    pageNumber: String(index + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { pageNumber } = await params;
  const page = Number(pageNumber);

  if (!Number.isInteger(page) || page < 2 || page > getProductsTotalPages()) {
    return {
      title: "Products | Regent Tech",
    };
  }

  return {
    title: `Products Page ${page} | Regent Tech`,
    description:
      "Paginated Regent Technologies product catalog for industrial tools, accessories, and related workshop products.",
  };
}

export default async function Page({
  params,
}: {
  params: Params;
}) {
  const { pageNumber } = await params;
  const page = Number(pageNumber);

  if (!Number.isInteger(page) || page < 2 || page > getProductsTotalPages()) {
    notFound();
  }

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
      <ProductsCatalogSection currentPage={page} />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
