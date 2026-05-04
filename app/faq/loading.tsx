export default function Loading() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <section className="bg-[var(--regent-blue-950)] px-4 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="h-5 w-32 rounded-full bg-white/20" />
          <div className="mt-6 h-12 max-w-[640px] rounded-full bg-white/20" />
        </div>
      </section>
      <section className="mx-auto max-w-[1040px] px-4 py-16">
        <div className="grid gap-4">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="h-24 rounded-2xl bg-[var(--surface)]" />
          ))}
        </div>
      </section>
    </main>
  );
}
