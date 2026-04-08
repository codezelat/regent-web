import Image from "next/image";
import {
  contactAddress,
  contactEmail,
  contactHighlights,
  contactNumbers,
  contactSupportPoints,
} from "@/components/regent/content";
import { MailIcon, PhoneIcon } from "@/components/regent/icons";
import { ArrowBullet, PillButton, SectionEyebrow } from "@/components/regent/primitives";
import { ContactCtaSection } from "@/components/regent/contact-cta-section";
import { SiteFooter } from "@/components/regent/site-footer";
import { SiteHeader } from "@/components/regent/site-header";

function ContactInfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(17,37,90,0.08)]">
      <h3 className="text-2xl font-bold leading-8 text-[var(--foreground)]">
        {title}
      </h3>
      <div className="mt-5 space-y-3 text-lg leading-8 text-[var(--muted)]">{children}</div>
    </article>
  );
}

export function ContactPage() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <section className="relative isolate overflow-hidden bg-[var(--regent-blue-950)]">
        <Image
          src="/regent/hero.png"
          alt="Contact Regent Technologies"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />

        <SiteHeader />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-20 pt-24 md:px-12 md:pb-28 md:pt-[143px]">
          <div className="max-w-[820px] space-y-6 text-white">
            <SectionEyebrow
              label="Get In Touch"
              className="text-white/85"
              lineClassName="bg-white"
            />
            <h1 className="text-4xl font-bold leading-[1.15] md:text-[56px] md:leading-[1.2]">
              Contact Regent Technologies
            </h1>
            <p className="max-w-[720px] text-lg leading-8 text-[var(--muted-light)]">
              Speak with our team about blade sharpening, recurring pickup
              schedules, or the right service setup for your production floor.
            </p>
            <div className="flex flex-wrap gap-4">
              <PillButton href="tel:+94112650397" label="Call Us Now" />
              <PillButton
                href={`mailto:${contactEmail}`}
                label="Email Regent"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 md:px-12 md:py-[104px]">
        <div className="grid gap-6 lg:grid-cols-3">
          <ContactInfoCard title="Call Our Team">
            <div className="inline-flex items-center gap-3 text-[var(--regent-red)]">
              <PhoneIcon className="h-5 w-5" />
              <span className="font-semibold text-[var(--foreground)]">Phone Numbers</span>
            </div>
            <div className="space-y-1">
              {contactNumbers.map((number) => (
                <a
                  key={number}
                  className="block font-medium text-[var(--muted)] transition-colors hover:text-[var(--regent-red)]"
                  href={`tel:+94${number.replace(/\s/g, "").replace(/^0/, "")}`}
                >
                  {number}
                </a>
              ))}
            </div>
          </ContactInfoCard>

          <ContactInfoCard title="Email Your Inquiry">
            <div className="inline-flex items-center gap-3 text-[var(--regent-red)]">
              <MailIcon className="h-5 w-5" />
              <span className="font-semibold text-[var(--foreground)]">Email Address</span>
            </div>
            <a
              className="block font-medium text-[var(--muted)] transition-colors hover:text-[var(--regent-red)]"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>
            <p>
              Send us blade details, service requirements, or pickup requests and
              we&apos;ll route your message to the right team.
            </p>
          </ContactInfoCard>

          <ContactInfoCard title="Visit Our Facility">
            <p className="font-semibold text-[var(--foreground)]">Address</p>
            <address className="not-italic text-[var(--muted)]">
              {contactAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p>
              Drop off blades, discuss long-term service needs, or coordinate
              delivery and collection with our operations team.
            </p>
          </ContactInfoCard>
        </div>
      </section>

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
                that understands production-critical tooling.
              </p>
            </div>

            <ul className="space-y-1">
              {contactSupportPoints.map((item) => (
                <ArrowBullet key={item}>{item}</ArrowBullet>
              ))}
            </ul>

            <div className="grid gap-4 md:grid-cols-3">
              {contactHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-[0_16px_40px_rgba(17,37,90,0.06)]"
                >
                  <h3 className="text-xl font-bold leading-7 text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
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

      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
