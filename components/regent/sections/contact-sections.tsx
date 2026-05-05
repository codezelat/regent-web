import Image from "next/image";
import {
  contactAddress,
  contactEmail,
  contactNumbers,
  contactSupportPoints,
} from "@/lib/regent-content";
import { siteConfig } from "@/lib/site-config";
import { MailIcon, PhoneIcon } from "@/components/regent/ui/icons";
import { ContactForm } from "@/components/regent/ui/contact-form";
import { SectionEyebrow } from "@/components/regent/ui/primitives";

function ContactSupportBullet({ children }: { children: string }) {
  return (
    <li className="flex gap-3 rounded-2xl bg-white p-4 text-base font-semibold leading-7 text-[var(--neutral-800)] shadow-[0_12px_30px_rgba(17,37,90,0.05)]">
      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--regent-red-soft)] text-[var(--regent-red)]">
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.167 10.417 8.125 14.167 15.833 5.833"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

export function ContactInfoSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-12 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(260px,0.55fr)_minmax(0,1.15fr)] lg:items-start">
        <aside className="rounded-2xl border border-black/8 bg-[var(--surface)] p-6 md:p-8">
          <SectionEyebrow label="Contact Details" />
          <div className="mt-6 space-y-4 text-base leading-7 text-[var(--muted)]">
            <div className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 rounded-2xl bg-white p-4">
              <PhoneIcon className="mt-1 h-5 w-5 text-[var(--regent-red)]" />
              <div className="min-w-0">
                <p className="font-semibold text-[var(--foreground)]">Phone</p>
                <div className="mt-2 grid gap-1">
                  {contactNumbers.map((number) => (
                    <a
                      key={number}
                      className="w-fit font-medium text-[var(--muted)] transition-colors hover:text-[var(--regent-red)]"
                      href={`tel:+94${number.replace(/\s/g, "").replace(/^0/, "")}`}
                    >
                      {number}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 rounded-2xl bg-white p-4">
              <MailIcon className="mt-1 h-5 w-5 text-[var(--regent-red)]" />
              <div className="min-w-0">
                <p className="font-semibold text-[var(--foreground)]">Email</p>
                <a
                  className="mt-2 block break-all font-medium text-[var(--muted)] transition-colors hover:text-[var(--regent-red)]"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="font-semibold text-[var(--foreground)]">Address</p>
              <address className="mt-2 not-italic">
                {contactAddress.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                className="mt-3 inline-flex font-semibold text-[var(--regent-red)] transition-colors hover:text-[var(--regent-red-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--regent-red)] focus-visible:ring-offset-4"
                href={siteConfig.mapHref}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </aside>

        <ContactForm turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
      </div>
    </section>
  );
}

export function ContactSupportSection() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 md:px-12 md:py-[104px] lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <SectionEyebrow label="Support Scope" />
            <h2 className="text-3xl font-bold leading-[1.25] text-[var(--foreground)] md:text-[32px] md:leading-[48px]">
              What We Can Help You With
            </h2>
            <p className="max-w-[680px] text-lg leading-8 text-[var(--muted)]">
              Regent Technologies supports industrial clients who need reliable
              sharpening turnaround, repeat pickup coordination, and a team
              that understands production-critical tooling and product selection.
            </p>
          </div>

          <ul className="grid gap-3">
            {contactSupportPoints.map((item) => (
              <ContactSupportBullet key={item}>{item}</ContactSupportBullet>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-[var(--regent-blue-900)]">
          <Image
            src="/regent/why-regent.png"
            alt="Technician preparing a circular blade"
            width={1000}
            height={1500}
            className="h-[560px] w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--regent-blue-900)] via-[rgba(17,37,90,0.45)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
            <h3 className="text-2xl font-bold leading-8">
              Built For Production Teams
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted-light)]">
              We work with workshops, manufacturing teams, and industrial
              operators who need dependable sharpening quality and service
              coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
