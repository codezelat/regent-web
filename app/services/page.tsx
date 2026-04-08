import type { Metadata } from "next";
import { ServicesPage } from "@/components/regent/services-page";

export const metadata: Metadata = {
  title: "Services | Regent Tech",
  description:
    "Explore Regent Technologies sharpening, pickup, and delivery services for industrial blades and production tooling.",
};

export default function Page() {
  return <ServicesPage />;
}
