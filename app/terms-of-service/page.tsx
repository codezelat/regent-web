import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { LegalSections } from "@/components/regent/sections/legal-sections";
import { termsSections } from "@/lib/regent-content";

export const metadata: Metadata = {
  title: "Terms of Service | Regent Tech",
  description:
    "Read the Regent Technologies terms of service for industrial sharpening, logistics, and related product support.",
};

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
        actions={[{ href: "/contact", label: "Contact Regent" }]}
      />
      <LegalSections sections={termsSections} />
      <SiteFooter />
    </main>
  );
}
