import { faqItems } from "@/components/regent/content";
import { ContactCtaSection } from "@/components/regent/contact-cta-section";
import { FaqAccordion } from "@/components/regent/faq-accordion";
import { PageHero } from "@/components/regent/page-hero";
import { SiteFooter } from "@/components/regent/site-footer";

export function FaqPage() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <PageHero
        currentPath="/faq"
        eyebrow="Frequently Asked Questions"
        title="Answers For Service, Pickup, And Product Questions"
        description="Use this FAQ to understand how Regent Technologies handles sharpening, logistics, tooling support, and common customer requests."
        image="/regent/video-section.png"
        imageAlt="Regent Technologies FAQ"
        actions={[{ href: "/contact", label: "Still Need Help?" }]}
      />

      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1040px] px-4 py-20 md:px-8 md:py-[104px]">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
