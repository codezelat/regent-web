import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductsTotalPages,
  ProductsPage,
} from "@/components/regent/products-page";

type Params = Promise<{ pageNumber: string }>;

export async function generateStaticParams() {
  return Array.from({ length: getProductsTotalPages() - 1 }, (_, index) => ({
    pageNumber: String(index + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { pageNumber } = await params;
  const page = Number(pageNumber);

  if (!Number.isInteger(page) || page < 2 || page > getProductsTotalPages()) {
    return {
      title: "Products | Regent Tech",
    };
  }

  return {
    title: `Products Page ${page} | Regent Tech`,
    description:
      "Paginated Regent Technologies product catalog for industrial tools, accessories, and related workshop products.",
  };
}

export default async function Page({
  params,
}: {
  params: Params;
}) {
  const { pageNumber } = await params;
  const page = Number(pageNumber);

  if (!Number.isInteger(page) || page < 2 || page > getProductsTotalPages()) {
    notFound();
  }

  return <ProductsPage currentPage={page} />;
}
