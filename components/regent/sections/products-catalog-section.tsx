import Image from "next/image";
import { productCatalog } from "@/lib/regent-content";
import { PaginationNav } from "@/components/regent/ui/pagination-nav";

const PAGE_SIZE = 6;

export function getProductsTotalPages() {
  return Math.ceil(productCatalog.length / PAGE_SIZE);
}

export function ProductsCatalogSection({ currentPage }: { currentPage: number }) {
  const totalPages = getProductsTotalPages();
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const items = productCatalog.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 md:px-12 md:py-[104px]">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--regent-red)]">
            Catalog Page {safePage} of {totalPages}
          </p>
          <h2 className="text-3xl font-bold leading-[1.25] md:text-[32px] md:leading-[48px]">
            Product Listings
          </h2>
          <p className="max-w-[760px] text-lg leading-8 text-[var(--muted)]">
            The catalog is presented as static route-based pages for clean URLs,
            predictable rendering, and straightforward indexing.
          </p>
        </div>
        <PaginationNav currentPage={safePage} totalPages={totalPages} basePath="/products" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.slug}
            className="rounded-2xl border border-black/8 bg-white p-8 shadow-[0_18px_42px_rgba(17,37,90,0.06)]"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--surface)]">
              <Image
                src={item.image}
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--regent-red)]">
              {item.category}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-8 text-[var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              {item.summary}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <PaginationNav currentPage={safePage} totalPages={totalPages} basePath="/products" />
      </div>
    </section>
  );
}
