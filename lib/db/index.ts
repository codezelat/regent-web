import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/lib/db/schema";

export const hasDatabase = Boolean(process.env.DATABASE_URL);
const databaseUrl = process.env.DATABASE_URL;
const useLocalPostgres =
  Boolean(databaseUrl) &&
  /@(localhost|127\.0\.0\.1|\[::1\])(?::|\/)/.test(databaseUrl ?? "");

export const db = hasDatabase
  ? useLocalPostgres
    ? drizzlePostgres(postgres(databaseUrl!, { max: 1 }), { schema })
    : drizzle(neon(databaseUrl!), { schema })
  : null;

export function getDb() {
  if (!db) {
    throw new Error("DATABASE_URL is required for this action.");
  }

  return db;
}

export { schema };
