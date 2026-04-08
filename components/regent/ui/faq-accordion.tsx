type FaqAccordionItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqAccordionItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-black/8 bg-white p-6 shadow-[0_12px_32px_rgba(17,37,90,0.05)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
            <span className="text-xl font-bold leading-8 text-[var(--foreground)]">
              {item.question}
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--regent-red-soft)] text-[var(--regent-red)] transition-transform group-open:rotate-45">
              <span className="text-2xl leading-none">+</span>
            </span>
          </summary>
          <p className="mt-5 max-w-[900px] text-lg leading-8 text-[var(--muted)]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
