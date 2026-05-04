import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/lib/db/schema";

export const hasDatabase = Boolean(process.env.DATABASE_URL);

export const db = hasDatabase
  ? drizzle(neon(process.env.DATABASE_URL!), { schema })
  : null;

export function getDb() {
  if (!db) {
    throw new Error("DATABASE_URL is required for this action.");
  }

  return db;
}

export { schema };
