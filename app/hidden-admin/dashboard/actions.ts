"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";
import { faqs, products, user } from "@/lib/db/schema";
import { requireAdminSession } from "@/lib/admin/session";
import {
  faqInputSchema,
  productInputSchema,
  profileInputSchema,
} from "@/lib/validation/admin";

function imageListFromForm(formData: FormData) {
  const combined = [
    ...formData.getAll("images").map(String),
    ...String(formData.get("imageText") || "").split(/\r?\n/),
  ];

  return [...new Set(combined.map((item) => item.trim()).filter(Boolean))].slice(0, 3);
}

export async function createProductAction(formData: FormData) {
  await requireAdminSession();
  const input = productInputSchema.parse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    metaTitle: formData.get("metaTitle"),
    metaDescription: formData.get("metaDescription"),
    images: imageListFromForm(formData),
    isPublished: formData.get("isPublished") === "on",
    sortOrder: formData.get("sortOrder") || 100,
  });

  await getDb().insert(products).values(input);
  revalidatePath("/products");
  revalidatePath("/hidden-admin/dashboard/products");
}

export async function updateProductAction(formData: FormData) {
  await requireAdminSession();
  const id = String(formData.get("id") || "");
  const input = productInputSchema.parse({
    id,
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
    metaTitle: formData.get("metaTitle"),
    metaDescription: formData.get("metaDescription"),
    images: imageListFromForm(formData),
    isPublished: formData.get("isPublished") === "on",
    sortOrder: formData.get("sortOrder") || 100,
  });

  await getDb()
    .update(products)
    .set({ ...input, updatedAt: new Date() })
    .where(eq(products.id, id));
  revalidatePath("/products");
  revalidatePath(`/products/${input.slug}`);
  revalidatePath("/hidden-admin/dashboard/products");
}

export async function deleteProductAction(formData: FormData) {
  await requireAdminSession();
  const id = String(formData.get("id") || "");

  if (!id) {
    return;
  }

  await getDb().delete(products).where(eq(products.id, id));
  revalidatePath("/products");
  revalidatePath("/hidden-admin/dashboard/products");
}

export async function createFaqAction(formData: FormData) {
  await requireAdminSession();
  const input = faqInputSchema.parse({
    question: formData.get("question"),
    answer: formData.get("answer"),
    isPublished: formData.get("isPublished") === "on",
    sortOrder: formData.get("sortOrder") || 100,
  });

  await getDb().insert(faqs).values(input);
  revalidatePath("/faq");
  revalidatePath("/hidden-admin/dashboard/faqs");
}

export async function updateFaqAction(formData: FormData) {
  await requireAdminSession();
  const id = String(formData.get("id") || "");
  const input = faqInputSchema.parse({
    id,
    question: formData.get("question"),
    answer: formData.get("answer"),
    isPublished: formData.get("isPublished") === "on",
    sortOrder: formData.get("sortOrder") || 100,
  });

  await getDb()
    .update(faqs)
    .set({ ...input, updatedAt: new Date() })
    .where(eq(faqs.id, id));
  revalidatePath("/faq");
  revalidatePath("/hidden-admin/dashboard/faqs");
}

export async function deleteFaqAction(formData: FormData) {
  await requireAdminSession();
  const id = String(formData.get("id") || "");

  if (!id) {
    return;
  }

  await getDb().delete(faqs).where(eq(faqs.id, id));
  revalidatePath("/faq");
  revalidatePath("/hidden-admin/dashboard/faqs");
}

export async function updateProfileAction(formData: FormData) {
  const session = await requireAdminSession();
  const input = profileInputSchema.parse({
    name: formData.get("name"),
    image: formData.get("image"),
  });

  await getDb()
    .update(user)
    .set({
      name: input.name,
      image: input.image || null,
      updatedAt: new Date(),
    })
    .where(eq(user.id, session.user.id));
  revalidatePath("/hidden-admin/dashboard/profile");
}
