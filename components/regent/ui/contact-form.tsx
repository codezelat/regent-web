"use client";

import { useActionState } from "react";
import { submitContactAction } from "@/app/contact/actions";
import { TurnstileWidget } from "@/components/regent/ui/turnstile-widget";

const initialState = {
  ok: false,
  message: "",
  nonce: "",
};

export function ContactForm({ turnstileSiteKey }: { turnstileSiteKey?: string }) {
  const [state, action, pending] = useActionState(submitContactAction, initialState);

  return (
    <form action={action} className="relative overflow-hidden rounded-3xl border border-black/8 bg-white p-5 shadow-[0_24px_70px_rgba(17,37,90,0.1)] sm:p-6 md:p-8">
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[var(--regent-red)]/8 md:h-32 md:w-32" />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--regent-red)]">
          Send A Message
        </p>
        <h2 className="mt-2 text-3xl font-bold leading-tight text-[var(--foreground)]">
          Tell us what you need
        </h2>
        <p className="mt-3 max-w-[620px] text-base leading-7 text-[var(--muted)]">
          Share the blade, tool, pickup, or product details. Regent will route it to the right person.
        </p>
      </div>

      <div className="relative mt-7 grid gap-5">
        <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--foreground)]">
          Name
          <input className="rounded-2xl border border-black/10 bg-[var(--surface)] px-4 py-3.5 font-normal outline-none transition-colors focus:border-[var(--regent-red)] focus:bg-white" name="name" placeholder="Your name" required />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--foreground)]">
          Email
          <input className="rounded-2xl border border-black/10 bg-[var(--surface)] px-4 py-3.5 font-normal outline-none transition-colors focus:border-[var(--regent-red)] focus:bg-white" name="email" type="email" placeholder="name@example.com" required />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--foreground)]">
          Phone
          <input className="rounded-2xl border border-black/10 bg-[var(--surface)] px-4 py-3.5 font-normal outline-none transition-colors focus:border-[var(--regent-red)] focus:bg-white" name="phone" placeholder="Optional" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--foreground)]">
          Message
          <textarea className="min-h-36 rounded-2xl border border-black/10 bg-[var(--surface)] px-4 py-3.5 font-normal outline-none transition-colors focus:border-[var(--regent-red)] focus:bg-white md:min-h-40" name="message" placeholder="Tell us what you need" required />
        </label>
      </div>

      <div className="relative mt-5">
        <TurnstileWidget action="contact" resetSignal={state.nonce} siteKey={turnstileSiteKey} />
      </div>

      {state.message ? (
        <p className={`relative mt-4 text-sm font-semibold ${state.ok ? "text-[#596359]" : "text-[var(--regent-red)]"}`}>
          {state.message}
        </p>
      ) : null}

      <div className="relative mt-6 flex flex-wrap items-center gap-4">
        <button className="rounded-full bg-[var(--regent-blue-900)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--regent-blue-800)] disabled:cursor-not-allowed disabled:opacity-60" disabled={pending} type="submit">
          <span className="text-white">{pending ? "Sending..." : "Send message"}</span>
        </button>
        <p className="text-sm leading-6 text-[var(--muted)]">
          We usually respond through the contact details you provide.
        </p>
      </div>
    </form>
  );
}
