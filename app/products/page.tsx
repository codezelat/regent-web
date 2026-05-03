import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import { ProductsCatalogSection } from "@/components/regent/sections/products-catalog-section";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the Regent Technologies product catalog for industrial tools, accessories, and workshop support products.",
};

export default function Page() {
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
      <ProductsCatalogSection currentPage={1} />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
