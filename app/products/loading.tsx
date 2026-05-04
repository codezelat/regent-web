export default function Loading() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <section className="bg-[var(--regent-blue-950)] px-4 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="h-5 w-40 rounded-full bg-white/20" />
          <div className="mt-6 h-12 max-w-[680px] rounded-full bg-white/20" />
          <div className="mt-4 h-5 max-w-[520px] rounded-full bg-white/15" />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1440px] gap-6 px-4 py-16 md:grid-cols-3 md:px-12">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="h-72 rounded-2xl bg-[var(--surface)]" />
        ))}
      </section>
    </main>
  );
}
