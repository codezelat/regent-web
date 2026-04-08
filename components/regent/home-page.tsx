import Image from "next/image";
import {
  aboutHighlights,
  industries,
  productFeatures,
  services,
  whyChoosePoints,
} from "@/components/regent/content";
import { MailIcon, PhoneIcon, PlayIcon } from "@/components/regent/icons";
import {
  ArrowBullet,
  PillButton,
  SectionEyebrow,
} from "@/components/regent/primitives";
import { ContactCtaSection } from "@/components/regent/contact-cta-section";
import { SiteFooter } from "@/components/regent/site-footer";
import { SiteHeader } from "@/components/regent/site-header";

export function HomePage() {
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

        <SiteHeader />

        <div className="relative z-10 mx-auto flex max-w-[1440px] px-4 pb-20 pt-24 md:px-12 md:pb-[134px] md:pt-[143px]">
          <div className="max-w-[763px] space-y-14">
            <div className="space-y-4">
              <h1 className="max-w-[763px] text-4xl font-bold leading-[1.15] text-white md:text-[56px] md:leading-[1.285]">
                Precision Automated Sharpening for Industrial Blades
              </h1>
              <p className="max-w-[763px] text-lg font-medium leading-7 text-[var(--muted-light)] md:text-[18px]">
                Specialized sharpening for TCT & HSS tools using fully automated
                machines with integrated cooling technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <PillButton href="#contact" label="Request Blade Pickup" />
              <PillButton
                href="#footer-contact"
                label="Contact us"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1440px] px-4 py-20 md:px-12 md:py-[119px]">
        <div className="grid gap-12 lg:grid-cols-[551px_minmax(0,664px)] lg:items-center lg:justify-between">
          <div className="space-y-10">
            <div className="space-y-4">
              <SectionEyebrow label="Who We Are" />
              <h2 className="text-3xl font-bold leading-[1.25] text-[var(--foreground)] md:text-[32px] md:leading-[48px]">
                Precision Automated Sharpening for Industrial Blades
              </h2>
              <p className="text-lg leading-8 text-[var(--muted)]">
                Regent Technologies is a specialized industrial service provider
                focused on high-precision sharpening of TCT (Tungsten Carbide
                Tipped) and HSS (High-Speed Steel) cutting tools.
              </p>
            </div>

            <ul className="space-y-1">
              {aboutHighlights.map((item) => (
                <ArrowBullet key={item}>{item}</ArrowBullet>
              ))}
            </ul>

            <PillButton
              href="#contact"
              label="Need Professional Blade Sharpening?"
              variant="dark"
              className="gap-2"
            />
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/regent/about.png"
              alt="Grinding sparks during sharpening"
              width={1500}
              height={1500}
              className="h-[420px] w-full object-cover object-center md:h-[600px]"
              sizes="(max-width: 1024px) 100vw, 664px"
            />
          </div>
        </div>
      </section>

      <section id="industries" className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-12 md:py-[56px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[664px] space-y-2">
              <h2 className="text-3xl font-bold leading-[1.25] text-[var(--foreground)] md:text-[32px] md:leading-[48px]">
                Industries We Serve
              </h2>
              <p className="text-lg font-medium leading-7 text-[#767676]">
                We provide precision sharpening solutions for a wide range of
                industries that depend on sharp, reliable cutting tools for
                efficient production.
              </p>
            </div>
            <PillButton href="#products" label="Learn More" variant="text" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="rounded-lg bg-white px-6 py-8 text-center shadow-[0_0_16px_rgba(0,0,0,0.06)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center">
                  <Image
                    src={industry.image}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-8 text-[var(--neutral-800)]">
                  {industry.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1440px] px-4 py-20 md:px-12 md:py-[104px]">
        <h2 className="text-center text-3xl font-bold leading-[1.25] text-[var(--foreground)] md:text-[32px] md:leading-[48px]">
          Our Services
        </h2>

        <div className="mt-14 grid gap-4 xl:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative min-h-[540px] overflow-hidden bg-black"
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
                  <PillButton href="#contact" label={service.cta} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-[1440px] px-4 py-8 md:px-12 md:py-0">
        <div className="grid gap-12 lg:grid-cols-[663px_minmax(0,664px)] lg:items-start lg:justify-between">
          <div className="space-y-8">
            <div className="space-y-2">
              <SectionEyebrow label="Our Products" />
              <h2 className="text-3xl font-bold leading-[1.25] text-[var(--foreground)] md:text-[32px] md:leading-[48px]">
                Professional Tools & Machinery
              </h2>
              <p className="text-lg leading-8 text-[var(--muted)]">
                Discover a wide range of industrial tools, machinery, and
                accessories designed for workshops, manufacturing facilities, and
                professional technicians.
              </p>
            </div>

            <div className="overflow-hidden">
              <Image
                src="/regent/products-main.png"
                alt="Professional tools and machinery"
                width={1000}
                height={666}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 639px"
              />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            {productFeatures.map((feature) => (
              <article
                key={feature.title}
                className="flex flex-col items-center px-4 text-center"
              >
                <Image
                  src={feature.image}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
                <h3 className="mt-6 text-[20px] font-bold leading-8 text-[var(--neutral-800)]">
                  {feature.title}
                </h3>
                <PillButton
                  href="#contact"
                  label="Learn More"
                  variant="text"
                  className="mt-4 text-base"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 md:px-12 md:py-[104px]">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/regent/video-section.png"
            alt="Blade sharpening process video cover"
            width={758}
            height={589}
            className="h-[360px] w-full object-cover md:h-[544px]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <button
            type="button"
            aria-label="Play sharpening process video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[var(--regent-red-dark)] bg-[var(--regent-red)] text-white shadow-lg"
          >
            <PlayIcon className="h-8 w-8 translate-x-0.5" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-20 md:px-12 md:pb-[106px]">
        <div className="grid gap-10 lg:grid-cols-[664px_minmax(0,664px)] lg:items-center lg:justify-between">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/regent/why-regent.png"
              alt="Technician inspecting a blade"
              width={1000}
              height={1500}
              className="h-[420px] w-full object-cover object-center md:h-[550px]"
              sizes="(max-width: 1024px) 100vw, 664px"
            />
          </div>

          <div className="space-y-6 px-0 md:px-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold leading-[1.25] text-[var(--foreground)] md:text-[32px] md:leading-[48px]">
                Why Choose{" "}
                <span className="text-[var(--regent-red)]">Regent Technologies</span>
              </h2>
              <p className="text-lg leading-8 text-[var(--muted)]">
                At Regent Technologies, we combine advanced sharpening
                technology with industry expertise to deliver reliable blade
                maintenance solutions.
              </p>
            </div>

            <ul className="space-y-1">
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
