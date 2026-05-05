"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ServiceDetailsModalProps = {
  title: string;
  intro: string;
  details: readonly string[];
  bestFor: string;
};

export function ServiceDetailsModal({
  title,
  intro,
  details,
  bestFor,
}: ServiceDetailsModalProps) {
  const [open, setOpen] = useState(false);

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
      aria-labelledby={`service-modal-${title}`}
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      }}
      role="dialog"
    >
      <div className="max-h-full w-full max-w-[720px] overflow-y-auto rounded-3xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
        <div className="border-b border-black/8 bg-[var(--surface)] p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--regent-red)]">
                Service Details
              </p>
              <h2 id={`service-modal-${title}`} className="mt-2 text-3xl font-bold leading-tight text-[var(--foreground)]">
                {title}
              </h2>
            </div>
            <button
              aria-label="Close service details"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--muted)] transition-colors hover:bg-[var(--regent-red)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--regent-red)] focus-visible:ring-offset-4"
              onClick={() => setOpen(false)}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m5.833 5.833 8.334 8.334M14.167 5.833l-8.334 8.334"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>
            </button>
          </div>
          <p className="mt-5 max-w-[620px] text-base leading-7 text-[var(--muted)]">
            {intro}
          </p>
        </div>

        <div className="grid gap-6 p-6 md:p-8">
          <div className="grid gap-3">
            {details.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-black/8 bg-white p-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--regent-red)]" />
                <p className="text-base leading-7 text-[var(--muted)]">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[var(--regent-blue-900)] p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/70">
              Best For
            </p>
            <p className="mt-2 text-base leading-7 text-white">{bestFor}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--regent-red)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--regent-red-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--regent-red)] focus-visible:ring-offset-4"
              href="/contact"
            >
              <span className="text-white">Ask About This Service</span>
            </Link>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
              onClick={() => setOpen(false)}
              type="button"
            >
              Continue Browsing
            </button>
          </div>
        </div>
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
        <span className="text-white">View Details</span>
      </button>
      {open && dialog && typeof document !== "undefined" ? createPortal(dialog, document.body) : null}
    </>
  );
}
