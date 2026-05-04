import { and, asc, desc, eq, ilike, or, sql } from "drizzle-orm";
import { getDb, hasDatabase } from "@/lib/db";
import { faqs, products, type Faq, type Product } from "@/lib/db/schema";
import { initialFaqs, initialProducts } from "@/lib/products/seed-data";

export type ProductListParams = {
  page?: number;
  pageSize?: number;
  query?: string;
  sort?: "featured" | "name-asc" | "name-desc" | "newest";
  includeDrafts?: boolean;
};

export type ProductListResult = {
  items: Product[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

function fallbackProducts(): Product[] {
  const now = new Date();

  return initialProducts.map((item) => ({
    id: item.slug,
    name: item.name,
    slug: item.slug,
    description: item.description,
    metaTitle: item.metaTitle,
    metaDescription: item.metaDescription,
    images: [...item.images],
    isPublished: true,
    sortOrder: item.sortOrder,
    createdAt: now,
    updatedAt: now,
  }));
}

function fallbackFaqs(): Faq[] {
  const now = new Date();

  return initialFaqs.map((item) => ({
    id: item.question,
    question: item.question,
    answer: item.answer,
    isPublished: item.isPublished,
    sortOrder: item.sortOrder,
    createdAt: now,
    updatedAt: now,
  }));
}

export async function listProducts(params: ProductListParams = {}): Promise<ProductListResult> {
  const pageSize = Math.min(Math.max(params.pageSize ?? 6, 1), 24);
  const page = Math.max(params.page ?? 1, 1);
  const query = params.query?.trim();
  const sort = params.sort ?? "featured";

  if (!hasDatabase) {
    let items = fallbackProducts();

    if (!params.includeDrafts) {
      items = items.filter((item) => item.isPublished);
    }

    if (query) {
      const needle = query.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(needle) ||
          item.description.toLowerCase().includes(needle),
      );
    }

    items = sortProducts(items, sort);

    return paginateProducts(items, page, pageSize);
  }

  const db = getDb();
  const filters = [
    params.includeDrafts ? undefined : eq(products.isPublished, true),
    query
      ? or(
          ilike(products.name, `%${query}%`),
          ilike(products.description, `%${query}%`),
          ilike(products.slug, `%${query}%`),
        )
      : undefined,
  ].filter(Boolean);
  const where = filters.length ? and(...filters) : undefined;
  const orderBy =
    sort === "name-asc"
      ? [asc(products.name)]
      : sort === "name-desc"
        ? [desc(products.name)]
        : sort === "newest"
          ? [desc(products.createdAt)]
          : [asc(products.sortOrder), asc(products.name)];
  const [{ count }] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(products)
    .where(where);
  const items = await db
    .select()
    .from(products)
    .where(where)
    .orderBy(...orderBy)
    .limit(pageSize)
    .offset((page - 1) * pageSize);

  return {
    items,
    page,
    pageSize,
    totalItems: count,
    totalPages: Math.max(Math.ceil(count / pageSize), 1),
  };
}

export async function getProductBySlug(slug: string, includeDrafts = false) {
  if (!hasDatabase) {
    return fallbackProducts().find(
      (item) => item.slug === slug && (includeDrafts || item.isPublished),
    );
  }

  const db = getDb();
  const [item] = await db
    .select()
    .from(products)
    .where(
      includeDrafts
        ? eq(products.slug, slug)
        : and(eq(products.slug, slug), eq(products.isPublished, true)),
    )
    .limit(1);

  return item;
}

export async function listFaqs(includeDrafts = false) {
  if (!hasDatabase) {
    return fallbackFaqs().filter((item) => includeDrafts || item.isPublished);
  }

  const db = getDb();

  return db
    .select()
    .from(faqs)
    .where(includeDrafts ? undefined : eq(faqs.isPublished, true))
    .orderBy(asc(faqs.sortOrder), asc(faqs.question));
}

function paginateProducts(items: Product[], page: number, pageSize: number): ProductListResult {
  const totalItems = items.length;
  const totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);
  const safePage = Math.min(page, totalPages);

  return {
    items: items.slice((safePage - 1) * pageSize, safePage * pageSize),
    page: safePage,
    pageSize,
    totalItems,
    totalPages,
  };
}

function sortProducts(items: Product[], sort: NonNullable<ProductListParams["sort"]>) {
  return [...items].sort((a, b) => {
    if (sort === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    if (sort === "name-desc") {
      return b.name.localeCompare(a.name);
    }

    if (sort === "newest") {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }

    return a.sortOrder - b.sortOrder || a.name.localeCompare(b.name);
  });
}
