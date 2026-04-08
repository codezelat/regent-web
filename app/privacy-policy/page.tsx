import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { LegalSections } from "@/components/regent/sections/legal-sections";
import { privacySections } from "@/lib/regent-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Regent Tech",
  description:
    "Read the Regent Technologies privacy policy for information about service inquiries, customer data, and operational records.",
};

export default function Page() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/privacy-policy"
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description="This page explains how Regent Technologies handles customer information related to inquiries, service coordination, and operational communication."
        image="/regent/hero.png"
        imageAlt="Privacy Policy"
        actions={[{ href: "/contact", label: "Contact Regent" }]}
      />
      <LegalSections sections={privacySections} />
      <SiteFooter />
    </main>
  );
}
