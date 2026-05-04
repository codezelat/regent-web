"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <button
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-black/20 hover:bg-[#f4f4ef] disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
      onClick={() => {
        startTransition(async () => {
          await authClient.signOut();
          router.push("/hidden-admin");
          router.refresh();
        });
      }}
      type="button"
    >
      <LogOut className="size-4" />
      Sign out
    </button>
  );
}
