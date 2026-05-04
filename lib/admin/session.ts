import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function getAdminSession() {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  return auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireAdminSession() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/hidden-admin");
  }

  return session;
}
