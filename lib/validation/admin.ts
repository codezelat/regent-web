import { z } from "zod";
import { metaFrom, slugify } from "@/lib/utils";

const imageUrlSchema = z
  .string()
  .trim()
  .url("Use a valid image URL.")
  .refine(
    (value) => value.startsWith("https://") || value.startsWith("/"),
    "Use HTTPS or a local site asset path.",
  );

export const productInputSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().trim().min(2, "Name is required.").max(120),
    slug: z.string().trim().max(120).optional(),
    description: z.string().trim().min(20, "Description is required.").max(1200),
    metaTitle: z.string().trim().max(70).optional(),
    metaDescription: z.string().trim().max(165).optional(),
    images: z.array(imageUrlSchema).max(3, "Use up to 3 images.").default([]),
    isPublished: z.boolean().default(true),
    sortOrder: z.coerce.number().int().min(0).max(9999).default(100),
  })
  .transform((value) => ({
    ...value,
    slug: slugify(value.slug || value.name),
    metaTitle: value.metaTitle?.trim() || metaFrom(value.name, 60),
    metaDescription: value.metaDescription?.trim() || metaFrom(value.description, 155),
  }))
  .refine((value) => value.slug.length > 0, {
    path: ["slug"],
    message: "Slug is required.",
  });

export const faqInputSchema = z.object({
  id: z.string().optional(),
  question: z.string().trim().min(8, "Question is required.").max(180),
  answer: z.string().trim().min(12, "Answer is required.").max(1200),
  isPublished: z.boolean().default(true),
  sortOrder: z.coerce.number().int().min(0).max(9999).default(100),
});

export const profileInputSchema = z.object({
  name: z.string().trim().min(2, "Name is required.").max(80),
  image: z.string().trim().url("Use a valid image URL.").optional().or(z.literal("")),
});

export const contactInputSchema = z.object({
  name: z.string().trim().min(2, "Name is required.").max(80),
  email: z.string().trim().email("Use a valid email address.").max(160),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(12, "Message is required.").max(1500),
  turnstileToken: z.string().optional(),
});

export type ProductInput = z.infer<typeof productInputSchema>;
export type FaqInput = z.infer<typeof faqInputSchema>;
