import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/regent/layout/page-hero";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import { ArrowBullet, SectionEyebrow } from "@/components/regent/ui/primitives";
import { aboutHighlights, whyChoosePoints } from "@/lib/regent-content";
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
        actions={[
          { href: "/contact", label: "Contact Regent" },
          { href: "/products", label: "View Products", variant: "secondary" },
        ]}
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
          <ul className="space-y-1">
            {aboutHighlights.map((item) => (
              <ArrowBullet key={item}>{item}</ArrowBullet>
            ))}
          </ul>
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
            <ul className="grid gap-3 md:grid-cols-2">
              {whyChoosePoints.map((item) => (
                <ArrowBullet key={item}>{item}</ArrowBullet>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
