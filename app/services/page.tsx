import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import {
  ServicesBenefitsSection,
  ServicesOverviewSection,
  ServicesProcessSection,
} from "@/components/regent/sections/services-sections";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { JsonLd } from "@/components/regent/seo/json-ld";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Industrial Blade Sharpening Services Sri Lanka",
  description:
    "Explore Regent Technologies automated blade sharpening, TCT and HSS tool care, and pickup and delivery services for industrial customers in Sri Lanka.",
  path: "/services",
  image: "/regent/service-delivery.png",
});

export default function Page() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl("/services")}#industrial-blade-sharpening-service`,
    name: "Industrial blade sharpening and pickup service",
    serviceType: "Industrial blade sharpening",
    description: metadata.description,
    provider: {
      "@id": `${siteConfig.url.replace(/\/$/, "")}#localbusiness`,
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    url: absoluteUrl("/services"),
  };

  return (
    <main className="bg-white text-[var(--foreground)]">
      <JsonLd data={serviceStructuredData} />
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
