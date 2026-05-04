process.env.BETTER_AUTH_ALLOW_ADMIN_SEED = "true";

export {};

const { eq } = await import("drizzle-orm");
const { auth } = await import("../lib/auth");
const { getDb } = await import("../lib/db");
const { faqs, products, user } = await import("../lib/db/schema");
const { initialFaqs, initialProducts } = await import("../lib/products/seed-data");

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_INITIAL_PASSWORD;

if (!adminEmail || !adminPassword) {
  throw new Error("ADMIN_EMAIL and ADMIN_INITIAL_PASSWORD are required for seeding.");
}

const db = getDb();
const [existingAdmin] = await db.select().from(user).where(eq(user.email, adminEmail)).limit(1);

if (!existingAdmin) {
  await auth.api.signUpEmail({
    body: {
      name: "Regent Admin",
      email: adminEmail,
      password: adminPassword,
    },
  });
  await db.update(user).set({ emailVerified: true }).where(eq(user.email, adminEmail));
}

for (const item of initialProducts) {
  await db
    .insert(products)
    .values({
      ...item,
      images: [...item.images],
    })
    .onConflictDoUpdate({
      target: products.slug,
      set: {
        name: item.name,
        description: item.description,
        metaTitle: item.metaTitle,
        metaDescription: item.metaDescription,
        images: [...item.images],
        isPublished: true,
        sortOrder: item.sortOrder,
        updatedAt: new Date(),
      },
    });
}

for (const item of initialFaqs) {
  await db
    .insert(faqs)
    .values(item)
    .onConflictDoNothing();
}

console.log("Seed completed.");
