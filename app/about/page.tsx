import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import { SectionEyebrow } from "@/components/regent/ui/primitives";
import { whyChoosePoints } from "@/lib/regent-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Regent Technologies, an industrial sharpening and tooling support company based in Moratuwa, Sri Lanka.",
};

export default function Page() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/about"
        eyebrow="About Regent"
        title="Industrial Sharpening And Tooling Support Built On Experience"
        description={`Regent Technologies serves production teams, workshops, and woodworking businesses with ${siteConfig.experienceLabel.toLowerCase()} in sharpening and tool support.`}
        image="/regent/about.png"
        imageAlt="Regent Technologies sharpening work"
      />
      <section className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 md:px-12 md:py-[104px] lg:grid-cols-[minmax(0,1fr)_560px] lg:items-center">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <SectionEyebrow label="Company" />
            <h1 className="text-3xl font-bold leading-tight md:text-[40px]">
              Practical tool care for real production work
            </h1>
            <p className="text-lg leading-8 text-[var(--muted)]">
              Regent Technologies focuses on automated blade sharpening, TCT and HSS tool care, product guidance, and pickup coordination for customers who depend on consistent cutting performance.
            </p>
          </div>
          <div className="space-y-5 border-l-4 border-[var(--regent-red)] pl-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              Based in Moratuwa, the company supports workshops, furniture
              makers, manufacturers, and industrial teams that need dependable
              cutting tools for daily production. The work is practical:
              restore blade performance, protect tool life, and keep service
              coordination straightforward.
            </p>
            <p>
              Regent combines automated sharpening technology with hands-on
              tooling knowledge, helping customers choose the right sharpening
              path, product support, or pickup arrangement without unnecessary
              complexity.
            </p>
          </div>
        </div>
        <Image
          src="/regent/why-regent.png"
          alt="Technician inspecting industrial blade"
          width={1000}
          height={1500}
          className="h-[520px] w-full rounded-2xl object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </section>
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1440px] px-4 py-20 md:px-12 md:py-[104px]">
          <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
            <div>
              <SectionEyebrow label="Why Regent" />
              <h2 className="mt-3 text-3xl font-bold leading-tight">
                Reliable service, clear product support, and direct communication.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {whyChoosePoints.map((item) => (
                <details
                  key={item.title}
                  className="group rounded-2xl border border-black/8 bg-white px-5 py-4 shadow-[0_14px_34px_rgba(17,37,90,0.05)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--foreground)]">
                    <span>{item.title}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--regent-red)] text-lg leading-none text-white transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {item.detail}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
