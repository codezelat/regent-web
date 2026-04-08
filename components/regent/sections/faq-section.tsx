import { faqItems } from "@/lib/regent-content";
import { FaqAccordion } from "@/components/regent/ui/faq-accordion";

export function FaqSection() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-[1040px] px-4 py-20 md:px-8 md:py-[104px]">
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
