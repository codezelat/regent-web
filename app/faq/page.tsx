import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import { FaqSection } from "@/components/regent/sections/faq-section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers about Regent Technologies sharpening services, pickups, products, and operational support.",
};

export default function Page() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/faq"
        eyebrow="Frequently Asked Questions"
        title="Answers For Service, Pickup, And Product Questions"
        description="Use this FAQ to understand how Regent Technologies handles sharpening, logistics, tooling support, and common customer requests."
        image="/regent/video-section.png"
        imageAlt="Regent Technologies FAQ"
        actions={[{ href: "/contact", label: "Still Need Help?" }]}
      />
      <FaqSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
