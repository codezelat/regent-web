import { FaqAccordion } from "@/components/regent/ui/faq-accordion";
import type { Faq } from "@/lib/db/schema";

export function FaqSection({ items }: { items: Pick<Faq, "question" | "answer">[] }) {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-[1040px] px-4 py-20 md:px-8 md:py-[104px]">
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
