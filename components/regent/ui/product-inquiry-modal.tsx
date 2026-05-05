"use client";

import { useActionState, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { submitContactAction } from "@/app/contact/actions";
import { TurnstileWidget } from "@/components/regent/ui/turnstile-widget";

const initialState = {
  ok: false,
  message: "",
  nonce: "",
};

export function ProductInquiryModal({
  productName,
  productSlug,
  productUrl,
  turnstileSiteKey,
}: {
  productName: string;
  productSlug: string;
  productUrl: string;
  turnstileSiteKey?: string;
}) {
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState(submitContactAction, initialState);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const dialog = open ? (
    <div
      aria-labelledby="product-inquiry-title"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      }}
      role="dialog"
    >
      <div className="max-h-full w-full max-w-[560px] overflow-y-auto rounded-2xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
        <div className="flex items-start justify-between gap-6 border-b border-black/8 p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--regent-red)]">
              Product Inquiry
            </p>
            <h2 id="product-inquiry-title" className="mt-2 text-2xl font-bold leading-8 text-[var(--foreground)]">
              {productName}
            </h2>
          </div>
          <button
            className="rounded-full border border-black/10 px-3 py-1 text-sm font-semibold text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            onClick={() => setOpen(false)}
            type="button"
          >
            Close
          </button>
        </div>

        <form action={action} className="flex flex-col gap-4 p-6">
          <input name="subject" type="hidden" value={`Product inquiry: ${productName}`} />
          <input name="productName" type="hidden" value={productName} />
          <input name="productSlug" type="hidden" value={productSlug} />
          <input name="productUrl" type="hidden" value={productUrl} />

          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--foreground)]">
              Name
              <input
                className="rounded-lg border border-black/10 px-4 py-3 font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
                name="name"
                placeholder="Your name"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--foreground)]">
              Email
              <input
                className="rounded-lg border border-black/10 px-4 py-3 font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
                name="email"
                placeholder="name@example.com"
                required
                type="email"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--foreground)]">
            Phone
            <input
              className="rounded-lg border border-black/10 px-4 py-3 font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
              name="phone"
              placeholder="Optional"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-[var(--foreground)]">
            Message
            <textarea
              className="min-h-32 rounded-lg border border-black/10 px-4 py-3 font-normal outline-none transition-colors focus:border-[var(--regent-red)]"
              name="message"
              placeholder="Quantity, use case, or what you need confirmed"
              required
            />
          </label>

          <TurnstileWidget action="product-inquiry" resetSignal={state.nonce} siteKey={turnstileSiteKey} />

          {state.message ? (
            <p className={`text-sm font-semibold ${state.ok ? "text-[#596359]" : "text-[var(--regent-red)]"}`}>
              {state.message}
            </p>
          ) : null}

          <button
            className="w-fit rounded-full bg-[var(--regent-blue-900)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--regent-blue-800)] disabled:cursor-not-allowed disabled:opacity-60"
            disabled={pending || state.ok}
            type="submit"
          >
            {pending ? "Sending..." : state.ok ? "Sent" : "Send inquiry"}
          </button>
        </form>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--regent-red)] px-6 py-3 text-center text-base font-semibold leading-6 text-white shadow-sm transition-all duration-200 hover:bg-[var(--regent-red-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--regent-red)] focus-visible:ring-offset-4 md:text-lg"
        onClick={() => setOpen(true)}
        type="button"
      >
        Ask About This Product
      </button>
      {open && dialog && typeof document !== "undefined" ? createPortal(dialog, document.body) : null}
    </>
  );
}
