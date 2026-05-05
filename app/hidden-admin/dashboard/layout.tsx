import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdminSession } from "@/lib/admin/session";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await requireAdminSession();

  return <AdminShell email={session.user.email}>{children}</AdminShell>;
}
