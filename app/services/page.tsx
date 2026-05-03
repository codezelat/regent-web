import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import {
  ServicesBenefitsSection,
  ServicesOverviewSection,
  ServicesProcessSection,
} from "@/components/regent/sections/services-sections";
import { SiteFooter } from "@/components/regent/layout/site-footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Regent Technologies sharpening, pickup, and delivery services for industrial blades and production tooling.",
};

export default function Page() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/services"
        eyebrow="Sharpening Services"
        title="Industrial Blade Sharpening And Pickup Services"
        description="Explore Regent Technologies service capabilities for automated sharpening, blade recovery, and coordinated pickup and delivery for industrial customers."
        image="/regent/service-delivery.png"
        imageAlt="Regent Technologies services"
        actions={[
          { href: "/contact", label: "Schedule A Service" },
          { href: "/products", label: "Browse Products", variant: "secondary" },
        ]}
      />
      <ServicesOverviewSection />
      <ServicesBenefitsSection />
      <ServicesProcessSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
