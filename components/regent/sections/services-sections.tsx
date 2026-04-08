import Image from "next/image";
import { serviceBenefits, serviceProcess, services } from "@/lib/regent-content";
import { ArrowBullet, PillButton, SectionEyebrow } from "@/components/regent/ui/primitives";

export function ServicesOverviewSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 md:px-12 md:py-[104px]">
      <div className="space-y-12">
        <div className="space-y-4">
          <SectionEyebrow label="Service Scope" />
          <h2 className="text-3xl font-bold leading-[1.25] md:text-[32px] md:leading-[48px]">
            Services Designed For Production Reliability
          </h2>
          <p className="max-w-[900px] text-lg leading-8 text-[var(--muted)]">
            Regent Technologies combines machine accuracy, practical workflow
            support, and industrial service coordination so customers can keep
            tooling in service with less interruption.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative min-h-[540px] overflow-hidden rounded-2xl bg-black"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 664px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90" />
              <div className="relative flex h-full flex-col justify-end gap-8 p-8 text-white md:p-10">
                <div className="space-y-4">
                  <h3 className="text-[32px] font-bold leading-8 md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="max-w-[584px] text-lg leading-8 text-[var(--muted-light)]">
                    {service.description}
                  </p>
                </div>
                <div>
                  <PillButton href="/contact" label={service.cta} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesBenefitsSection() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 md:px-12 md:py-[104px] lg:grid-cols-[minmax(0,1fr)_560px] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <SectionEyebrow label="Why It Works" />
            <h2 className="text-3xl font-bold leading-[1.25] md:text-[32px] md:leading-[48px]">
              Precision, Cooling, And Practical Logistics
            </h2>
            <p className="max-w-[760px] text-lg leading-8 text-[var(--muted)]">
              Our sharpening model is built around output consistency, tool
              protection, and service coordination that makes sense for active
              production environments.
            </p>
          </div>

          <ul className="space-y-1">
            {serviceBenefits.map((item) => (
              <ArrowBullet key={item}>{item}</ArrowBullet>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/regent/about.png"
            alt="Blade sharpening sparks"
            width={1500}
            height={1500}
            className="h-[520px] w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}

export function ServicesProcessSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-20 md:px-12 md:py-[104px]">
      <div className="space-y-10">
        <div className="space-y-4">
          <SectionEyebrow label="Service Process" />
          <h2 className="text-3xl font-bold leading-[1.25] md:text-[32px] md:leading-[48px]">
            How A Regent Service Flow Works
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceProcess.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-black/8 bg-white p-8 shadow-[0_16px_40px_rgba(17,37,90,0.05)]"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--regent-red)]">
                Step {index + 1}
              </div>
              <h3 className="mt-4 text-2xl font-bold leading-8 text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
