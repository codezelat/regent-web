import type { Metadata } from "next";
import { FaqPage } from "@/components/regent/faq-page";

export const metadata: Metadata = {
  title: "FAQ | Regent Tech",
  description:
    "Find answers about Regent Technologies sharpening services, pickups, products, and operational support.",
};

export default function Page() {
  return <FaqPage />;
}
