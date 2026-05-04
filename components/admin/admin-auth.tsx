"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { authClient } from "@/lib/auth-client";

export function AdminLoginForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setMessage("");
        startTransition(async () => {
          const result = await authClient.signIn.email({
            email: String(form.get("email") || ""),
            password: String(form.get("password") || ""),
            callbackURL: "/hidden-admin/dashboard",
          });

          if (result.error) {
            setMessage("Check your email and password.");
            return;
          }

          router.push("/hidden-admin/dashboard");
          router.refresh();
        });
      }}
    >
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Email
        <input
          className="rounded-lg border border-black/10 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          required
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Password
        <input
          className="rounded-lg border border-black/10 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          required
        />
      </label>
      {message ? <p className="text-sm font-medium text-[var(--regent-red)]">{message}</p> : null}
      <button
        className="rounded-full bg-[var(--regent-blue-900)] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--regent-blue-800)] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={pending}
        type="submit"
      >
        {pending ? "Signing in..." : "Sign in"}
      </button>
      <Link className="text-sm font-semibold text-[#596359] hover:text-[var(--regent-red)]" href="/hidden-admin/forgot-password">
        Forgot password
      </Link>
    </form>
  );
}

export function ForgotPasswordForm() {
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setMessage("");
        startTransition(async () => {
          await authClient.requestPasswordReset({
            email: String(form.get("email") || ""),
            redirectTo: `${window.location.origin}/hidden-admin/reset-password`,
          });
          setMessage("If the email is valid, a reset link has been sent.");
        });
      }}
    >
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Email
        <input
          className="rounded-lg border border-black/10 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          required
        />
      </label>
      {message ? <p className="text-sm font-medium text-[#596359]">{message}</p> : null}
      <button
        className="rounded-full bg-[var(--regent-blue-900)] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--regent-blue-800)] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={pending}
        type="submit"
      >
        {pending ? "Sending..." : "Send reset link"}
      </button>
      <Link className="text-sm font-semibold text-[#596359] hover:text-[var(--regent-red)]" href="/hidden-admin">
        Back to login
      </Link>
    </form>
  );
}

export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const token = searchParams.get("token") || "";

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setMessage("");
        startTransition(async () => {
          const password = String(form.get("password") || "");
          const confirm = String(form.get("confirm") || "");

          if (password !== confirm) {
            setMessage("Passwords do not match.");
            return;
          }

          const result = await authClient.resetPassword({
            newPassword: password,
            token,
          });

          if (result.error) {
            setMessage("This reset link is invalid or expired.");
            return;
          }

          router.push("/hidden-admin");
        });
      }}
    >
      <label className="flex flex-col gap-2 text-sm font-semibold">
        New password
        <input
          className="rounded-lg border border-black/10 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={12}
          placeholder="New password"
          required
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Confirm password
        <input
          className="rounded-lg border border-black/10 px-4 py-3 text-base font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
          name="confirm"
          type="password"
          autoComplete="new-password"
          minLength={12}
          placeholder="Confirm password"
          required
        />
      </label>
      {message ? <p className="text-sm font-medium text-[var(--regent-red)]">{message}</p> : null}
      <button
        className="rounded-full bg-[var(--regent-blue-900)] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--regent-blue-800)] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={pending || !token}
        type="submit"
      >
        {pending ? "Updating..." : "Update password"}
      </button>
    </form>
  );
}
