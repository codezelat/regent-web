import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import { ProductGallery } from "@/components/regent/ui/product-gallery";
import { PillButton, SectionEyebrow } from "@/components/regent/ui/primitives";
import { getProductBySlug } from "@/lib/products/queries";

type Params = Promise<{ slug: string }>;

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product",
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/products"
        eyebrow="Product"
        title={product.name}
        description={product.metaDescription}
        image="/regent/products-main.png"
        imageAlt={product.name}
        actions={[
          { href: "/contact", label: "Ask About This Product" },
          { href: "/products", label: "All Products", variant: "secondary" },
        ]}
      />
      <section className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 md:px-12 md:py-[104px] lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-start">
        <ProductGallery images={product.images} name={product.name} />
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <SectionEyebrow label="Details" />
            <h1 className="text-3xl font-bold leading-tight md:text-[40px]">
              {product.name}
            </h1>
            <p className="text-lg leading-8 text-[var(--muted)]">{product.description}</p>
          </div>
          <div className="rounded-2xl border border-black/8 bg-[var(--surface)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--regent-red)]">
              Need Pricing Or Availability?
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              Send the product name, quantity, and application details. The Regent team will confirm the best option.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <PillButton href="/contact" label="Contact Regent" />
            <PillButton href="/products" label="Back To Products" variant="dark" />
          </div>
        </div>
      </section>
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
