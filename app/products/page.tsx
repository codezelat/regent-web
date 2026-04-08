import type { Metadata } from "next";
import { ProductsPage } from "@/components/regent/products-page";

export const metadata: Metadata = {
  title: "Products | Regent Tech",
  description:
    "Browse the Regent Technologies product catalog for industrial tools, accessories, and workshop support products.",
};

export default function Page() {
  return <ProductsPage currentPage={1} />;
}
