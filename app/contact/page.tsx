import type { Metadata } from "next";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import {
  ContactInfoSection,
  ContactSupportSection,
} from "@/components/regent/sections/contact-sections";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { contactEmail } from "@/lib/regent-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Regent Technologies for industrial blade sharpening, pickup coordination, and service inquiries.",
};

export default function Page() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/contact"
        eyebrow="Get In Touch"
        title="Contact Regent Technologies"
        description="Speak with our team about blade sharpening, recurring pickup schedules, or the right service setup for your production floor."
        image="/regent/hero.png"
        imageAlt="Contact Regent Technologies"
        actions={[
          { href: "tel:+94112650397", label: "Call Us Now" },
          {
            href: `mailto:${contactEmail}`,
            label: "Email Regent",
            variant: "secondary",
          },
        ]}
      />
      <ContactInfoSection />
      <ContactSupportSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
