import type { Metadata } from "next";
import { privacySections } from "@/components/regent/content";
import { LegalPage } from "@/components/regent/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Regent Tech",
  description:
    "Read the Regent Technologies privacy policy for information about service inquiries, customer data, and operational records.",
};

export default function Page() {
  return (
    <LegalPage
      currentPath="/privacy-policy"
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      description="This page explains how Regent Technologies handles customer information related to inquiries, service coordination, and operational communication."
      sections={privacySections}
    />
  );
}
