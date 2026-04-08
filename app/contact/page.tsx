import type { Metadata } from "next";
import { ContactPage } from "@/components/regent/contact-page";

export const metadata: Metadata = {
  title: "Contact Regent Tech",
  description:
    "Contact Regent Technologies for industrial blade sharpening, pickup coordination, and service inquiries.",
};

export default function Page() {
  return <ContactPage />;
}
