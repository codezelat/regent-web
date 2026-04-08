import type { Metadata } from "next";
import { termsSections } from "@/components/regent/content";
import { LegalPage } from "@/components/regent/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | Regent Tech",
  description:
    "Read the Regent Technologies terms of service for industrial sharpening, logistics, and related product support.",
};

export default function Page() {
  return (
    <LegalPage
      currentPath="/terms-of-service"
      eyebrow="Terms Of Service"
      title="Terms Of Service"
      description="These terms outline the service relationship, operational expectations, and product-related conditions associated with Regent Technologies."
      sections={termsSections}
    />
  );
}
