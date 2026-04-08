type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

export function LegalSections({
  sections,
}: {
  sections: readonly LegalSection[];
}) {
  return (
    <section className="mx-auto max-w-[1040px] px-4 py-20 md:px-8 md:py-[104px]">
      <div className="space-y-10">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-black/8 bg-white p-8 shadow-[0_16px_40px_rgba(17,37,90,0.05)]"
          >
            <h2 className="text-2xl font-bold leading-8 text-[var(--foreground)]">
              {section.title}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-[var(--muted)]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
