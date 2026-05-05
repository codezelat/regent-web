import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { LegalSections } from "@/components/regent/sections/legal-sections";
import { termsSections } from "@/lib/regent-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Read the Regent Technologies terms of service for industrial sharpening, logistics, and related product support.",
  path: "/terms-of-service",
  noIndex: true,
});

export default function Page() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/terms-of-service"
        eyebrow="Terms Of Service"
        title="Terms Of Service"
        description="These terms outline the service relationship, operational expectations, and product-related conditions associated with Regent Technologies."
        image="/regent/hero.png"
        imageAlt="Terms Of Service"
      />
      <LegalSections sections={termsSections} />
      <SiteFooter />
    </main>
  );
}
