import Image from "next/image";
import { ContactCtaSection } from "@/components/regent/sections/contact-cta";
import {
  HomeAboutSection,
  HomeServicesSection,
  IndustriesSection,
  ProductsPreviewSection,
  VideoShowcaseSection,
  WhyRegentSection,
} from "@/components/regent/sections/home-sections";
import { SiteFooter } from "@/components/regent/layout/site-footer";
import { SiteHeader } from "@/components/regent/layout/site-header";
import { PillButton } from "@/components/regent/ui/primitives";
import { siteConfig } from "@/lib/site-config";

export default function Page() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <section
        id="home"
        className="relative isolate overflow-hidden bg-[var(--regent-blue-950)]"
      >
        <Image
          src="/regent/hero.png"
          alt="Industrial blade sharpening hero"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15" />

        <SiteHeader currentPath="/" />

        <div className="relative z-10 mx-auto flex max-w-[1440px] px-4 pb-20 pt-24 md:px-12 md:pb-[134px] md:pt-[143px]">
          <div className="max-w-[763px] space-y-14">
            <div className="space-y-4">
              <h1 className="max-w-[763px] text-4xl font-bold leading-[1.15] text-white md:text-[56px] md:leading-[1.285]">
                Precision Automated Sharpening for Industrial Blades
              </h1>
              <p className="max-w-[763px] text-lg font-medium leading-7 text-[var(--muted-light)] md:text-[18px]">
                Specialized sharpening for TCT &amp; HSS tools using fully
                automated machines with integrated cooling technology, backed by {siteConfig.experienceLabel.toLowerCase()}.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <PillButton href="/contact" label="Request Blade Pickup" />
              <PillButton
                href="/contact"
                label="Contact us"
                variant="secondary"
              />
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/85">
              <span className="rounded-full border border-white/20 bg-white/8 px-4 py-2">
                {siteConfig.experienceLabel}
              </span>
              <span className="rounded-full border border-white/20 bg-white/8 px-4 py-2">
                {siteConfig.productHighlight}
              </span>
              <span className="rounded-full border border-white/20 bg-white/8 px-4 py-2">
                Moratuwa 10400
              </span>
            </div>
          </div>
        </div>
      </section>

      <HomeAboutSection />
      <IndustriesSection />
      <HomeServicesSection />
      <ProductsPreviewSection />
      <VideoShowcaseSection />
      <WhyRegentSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
