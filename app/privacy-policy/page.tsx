import type { Metadata } from "next";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { LegalSections } from "@/components/regent/sections/legal-sections";
import { privacySections } from "@/lib/regent-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Regent Technologies privacy policy for information about service inquiries, customer data, and operational records.",
  path: "/privacy-policy",
  noIndex: true,
});

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
      />
      <LegalSections sections={privacySections} />
      <SiteFooter />
    </main>
  );
}
