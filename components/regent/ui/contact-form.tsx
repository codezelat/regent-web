"use client";

import Script from "next/script";
import { useActionState } from "react";
import { submitContactAction } from "@/app/contact/actions";

const initialState = {
  ok: false,
  message: "",
};

export function ContactForm({ turnstileSiteKey }: { turnstileSiteKey?: string }) {
  const [state, action, pending] = useActionState(submitContactAction, initialState);

  return (
    <form action={action} className="flex flex-col gap-4 rounded-2xl border border-black/8 bg-white p-6 shadow-[0_20px_60px_rgba(17,37,90,0.08)]">
      {turnstileSiteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer /> : null}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Name
          <input className="rounded-lg border border-black/10 px-4 py-3 font-normal outline-none transition-colors focus:border-[var(--regent-red)]" name="name" placeholder="Your name" required />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Email
          <input className="rounded-lg border border-black/10 px-4 py-3 font-normal outline-none transition-colors focus:border-[var(--regent-red)]" name="email" type="email" placeholder="name@example.com" required />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Phone
        <input className="rounded-lg border border-black/10 px-4 py-3 font-normal outline-none transition-colors focus:border-[var(--regent-red)]" name="phone" placeholder="Optional" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Message
        <textarea className="min-h-32 rounded-lg border border-black/10 px-4 py-3 font-normal outline-none transition-colors focus:border-[var(--regent-red)]" name="message" placeholder="Tell us what you need" required />
      </label>
      {turnstileSiteKey ? <div className="cf-turnstile" data-sitekey={turnstileSiteKey} /> : null}
      {state.message ? (
        <p className={`text-sm font-semibold ${state.ok ? "text-[#596359]" : "text-[var(--regent-red)]"}`}>
          {state.message}
        </p>
      ) : null}
      <button className="w-fit rounded-full bg-[var(--regent-blue-900)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--regent-blue-800)] disabled:cursor-not-allowed disabled:opacity-60" disabled={pending} type="submit">
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
