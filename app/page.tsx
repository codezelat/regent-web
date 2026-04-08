import Image from "next/image";

const navItems = [
  { label: "HOME", href: "#home", hasChevron: false },
  { label: "SERVICES", href: "#services", hasChevron: false },
  { label: "PRODUCTS", href: "#products", hasChevron: true },
  { label: "INDUSTRIES", href: "#industries", hasChevron: false },
  { label: "ABOUT US", href: "#about", hasChevron: false },
  { label: "CONTACTS", href: "#contact", hasChevron: false },
] as const;

const aboutHighlights = [
  "Advanced Sharpening Technology",
  "Specialized TCT & HSS Expertise",
  "Extended Tool Lifespan",
  "Convenient Pick-Up & Delivery",
] as const;

const industries = [
  {
    title: "Woodworking Industry",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-woodworking.png",
  },
  {
    title: "Furniture Manufacturing",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-furniture.png",
  },
  {
    title: "Packaging Industry",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-packaging.png",
  },
  {
    title: "Printing Industry",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-printing.png",
  },
  {
    title: "Metal Fabrication",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-metal.png",
  },
  {
    title: "Plastic Processing",
    description:
      "We sharpen circular saw blades, router bits, planer blades, and other cutting tools",
    image: "/regent/industry-plastic.png",
  },
] as const;

const services = [
  {
    title: "Precision Blade Sharpening",
    description:
      "Our advanced sharpening process restores cutting tools to optimal performance using automated grinding machines designed for TCT (Tungsten Carbide Tipped) and HSS (High-Speed Steel) blades. The process ensures accurate grinding angles while maintaining the structural strength of the blade. With integrated cooling technology, we remove scratches, wear, and minor cracks without overheating the metal, extending the lifespan of your tools and ensuring consistent cutting performance.",
    image: "/regent/service-sharpening.png",
    cta: "View Sharpening Process",
  },
  {
    title: "Pick-Up & Delivery Service",
    description:
      "To make blade maintenance simple and convenient, we offer a reliable door-step pickup and delivery service. Our team collects your worn tools directly from your workshop or factory, processes them using our precision sharpening technology, and delivers them back ready for use. This service helps businesses save time, reduce operational interruptions, and maintain production efficiency without leaving the workplace.",
    image: "/regent/service-delivery.png",
    cta: "Contact for More Details",
  },
] as const;

const productFeatures = [
  {
    title: "Precision Blade Sharpening",
    image: "/regent/product-precision.png",
  },
  {
    title: "Power Tools",
    image: "/regent/product-power.png",
  },
  {
    title: "Tyre Rebuilding",
    image: "/regent/product-tyre.png",
  },
  {
    title: "Woodworking Tools",
    image: "/regent/product-woodworking.png",
  },
  {
    title: "Power Tools Accessories",
    image: "/regent/product-accessories.png",
  },
  {
    title: "Hand Tools",
    image: "/regent/product-handtools.png",
  },
] as const;

const whyChoosePoints = [
  "Advanced Sharpening Technology",
  "Expertise in TCT & HSS Tools",
  "Extended Tool Lifespan",
  "Integrated Cooling System",
  "Reliable Pick-up & Delivery",
] as const;

const quickLinks = ["HOME", "Products", "Services", "About us", "Contact us"] as const;

const footerIndustries = [
  "Woodworking Industry",
  "Furniture Manufacturing",
  "Packaging Industry",
  "Printing Industry",
  "Metal Fabrication",
  "Plastic Processing",
] as const;

function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 5.833 11.667 10 7.5 14.167"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m5.833 7.917 4.167 4.166 4.167-4.166"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.333 5.833h13.334v8.334H3.333V5.833Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="m4.167 6.667 5.254 4.07a.93.93 0 0 0 1.158 0l5.254-4.07"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.278 13.638v1.806a1.39 1.39 0 0 1-1.515 1.389 13.758 13.758 0 0 1-5.998-2.134 13.555 13.555 0 0 1-4.168-4.168A13.757 13.757 0 0 1 2.465 4.53a1.39 1.39 0 0 1 1.382-1.53H5.66c.62 0 1.163.42 1.319 1.02l.578 2.314a1.389 1.389 0 0 1-.399 1.35l-1 1a11.111 11.111 0 0 0 5.158 5.158l1-1a1.39 1.39 0 0 1 1.35-.4l2.313.579c.601.156 1.02.698 1.02 1.317Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m8 6 10 6-10 6V6Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.25" y="2.25" width="15.5" height="15.5" rx="4.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.7" cy="5.3" r="1.05" fill="currentColor" />
    </svg>
  );
}

function TiktokIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.025 2.5c.307 1.82 1.386 3.05 3.308 3.42v2.35c-1.139.028-2.175-.278-3.1-.916v4.957c0 2.685-1.59 4.439-4.31 4.439C5.607 16.75 4 15.277 4 13.02c0-2.55 1.935-4.247 4.566-4.247.262 0 .515.02.767.058v2.275a2.864 2.864 0 0 0-.708-.087c-1.102 0-1.954.786-1.954 1.937 0 1.13.78 1.92 1.869 1.92 1.262 0 1.777-.843 1.777-2.118V2.5h1.708Z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.22 17.5v-6.28h2.106l.315-2.447H11.22V7.21c0-.709.196-1.192 1.214-1.192h1.299V3.828A17.573 17.573 0 0 0 11.84 3.7c-1.872 0-3.154 1.143-3.154 3.242v1.831H6.57v2.447h2.116v6.28h2.534Z" />
    </svg>
  );
}

function PillButton({
  href,
  label,
  variant = "primary",
  className = "",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "dark" | "text";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-[var(--regent-red)] text-white hover:bg-[var(--regent-red-dark)]"
      : variant === "secondary"
        ? "border border-white text-white hover:bg-white hover:text-[var(--regent-blue-900)]"
        : variant === "dark"
          ? "bg-[var(--regent-blue-900)] text-white hover:bg-[var(--regent-blue-800)]"
          : "text-[var(--regent-red)] hover:text-[var(--regent-red-dark)]";

  const shared =
    variant === "text"
      ? "inline-flex items-center gap-2 text-base font-semibold md:text-lg"
      : "inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-semibold transition-colors md:text-lg";

  return (
    <a className={`${shared} ${styles} ${className}`} href={href}>
      <span>{label}</span>
      {variant === "text" ? <ChevronRightIcon className="h-5 w-5" /> : null}
    </a>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] md:text-base">
      <span className="h-px w-4 bg-[var(--regent-red)]" />
      <span>{label}</span>
    </div>
  );
}

function ArrowBullet({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-3 px-2 py-2 text-lg font-semibold text-[var(--neutral-800)]">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--regent-red-soft)] text-[var(--regent-red)]">
        <ChevronRightIcon className="h-4 w-4" />
      </span>
      <span>{children}</span>
    </li>
  );
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a className="inline-flex items-center gap-2 py-2 text-base uppercase tracking-[0.02em] text-white transition-colors hover:text-[var(--muted-light)]" href={href}>
      <ChevronRightIcon className="h-5 w-5 text-[var(--muted-light)]" />
      <span>{label}</span>
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
      href={href}
    >
      {children}
    </a>
  );
}

export default function Home() {
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

        <header className="relative z-20">
          <div className="hidden bg-[var(--regent-blue-700)] md:block">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-12 py-3 text-sm font-semibold text-white">
              <p>CALL US: 077 3048 569 | 077 7906 602 | 071 7700 619</p>
              <div className="flex items-center gap-4">
                <a className="inline-flex items-center gap-2 text-white/95" href="mailto:info@regenttec.com">
                  <MailIcon className="h-5 w-5" />
                  <span>info@regenttec.com</span>
                </a>
                <div className="flex items-center gap-4 text-white">
                  <a aria-label="Instagram" href="https://instagram.com">
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a aria-label="TikTok" href="https://tiktok.com">
                    <TiktokIcon className="h-5 w-5" />
                  </a>
                  <a aria-label="Facebook" href="https://facebook.com">
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1440px] px-4 md:px-0">
            <div className="flex flex-col gap-4 bg-[var(--regent-blue-900)] px-5 py-5 md:mt-[43px] md:h-28 md:flex-row md:items-center md:justify-between md:px-12">
              <div className="text-2xl font-bold tracking-[0.08em] text-white">
                REGENT
              </div>
              <nav className="flex flex-wrap items-center gap-x-1 gap-y-2 text-white">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold tracking-[0.04em] transition-colors hover:text-[var(--muted-light)]"
                    href={item.href}
                  >
                    <span>{item.label}</span>
                    {item.hasChevron ? <ChevronDownIcon className="h-5 w-5" /> : null}
                  </a>
                ))}
              </nav>
              <a
                className="inline-flex items-center bg-[var(--regent-red)] px-6 py-4 text-left text-white transition-colors hover:bg-[var(--regent-red-dark)] md:h-28 md:w-[259px] md:self-stretch"
                href="tel:+94112650397"
              >
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-white/90">CALL US</span>
                  <span className="text-xl font-bold">011 2650 397</span>
                </span>
              </a>
            </div>
          </div>
        </header>

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
              <PillButton href="#footer-contact" label="Contact us" variant="secondary" />
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
                <PillButton href="#contact" label="Learn More" variant="text" className="mt-4 text-base" />
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
                Why Choose <span className="text-[var(--regent-red)]">Regent Technologies</span>
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

      <section id="contact" className="bg-[var(--regent-red)]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center px-4 py-20 text-center md:px-12 md:py-[110px]">
          <div className="max-w-[890px] space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold leading-[1.25] text-white md:text-[32px] md:leading-[48px]">
                Need Professional Blade Sharpening?
              </h2>
              <p className="text-lg leading-8 text-[#fdd]">
                Contact our team today to schedule a blade sharpening service or
                arrange a convenient pickup. We&apos;re ready to help you maintain
                precision and efficiency in your operations.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-[#fdd] md:flex-row md:gap-0">
              <a className="inline-flex items-center gap-3 px-6 py-2 text-lg font-semibold" href="tel:+94112434453">
                <PhoneIcon className="h-5 w-5" />
                <span>011 2434 453</span>
              </a>
              <span className="hidden h-8 w-px bg-[var(--regent-red-darker)] md:block" />
              <a className="inline-flex items-center gap-3 px-6 py-2 text-lg font-semibold" href="mailto:info@regettec.com">
                <MailIcon className="h-5 w-5" />
                <span>info@regettec.com</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <PillButton href="#products" label="Download Catalog" variant="dark" />
              <PillButton href="#footer-contact" label="Contact us" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--regent-blue-900)] text-white">
        <div className="mx-auto max-w-[1440px] px-4 py-20 md:px-12">
          <div className="grid gap-12 xl:grid-cols-[411px_206px_332px_324px]">
            <div className="space-y-8">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold uppercase">REGENT TECH</h2>
                <p className="max-w-[411px] text-base leading-8 text-[var(--muted-light)]">
                  Regent Technologies is a specialized industrial service
                  provider focused on high-precision sharpening of TCT
                  (Tungsten Carbide Tipped) and HSS (High-Speed Steel) cutting
                  tools.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <SocialLink href="https://instagram.com" label="Instagram">
                  <InstagramIcon className="h-5 w-5" />
                </SocialLink>
                <SocialLink href="https://tiktok.com" label="TikTok">
                  <TiktokIcon className="h-5 w-5" />
                </SocialLink>
                <SocialLink href="https://facebook.com" label="Facebook">
                  <FacebookIcon className="h-5 w-5" />
                </SocialLink>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold uppercase">Quick Links</h3>
              <div className="flex flex-col">
                {quickLinks.map((item) => (
                  <FooterLink
                    key={item}
                    label={item}
                    href={
                      item === "HOME"
                        ? "#home"
                        : item === "Products"
                          ? "#products"
                          : item === "Services"
                            ? "#services"
                            : item === "About us"
                              ? "#about"
                              : "#footer-contact"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold uppercase">industries</h3>
              <div className="flex flex-col">
                {footerIndustries.map((item) => (
                  <FooterLink key={item} label={item} href="#industries" />
                ))}
              </div>
            </div>

            <div id="footer-contact" className="space-y-3">
              <h3 className="text-xl font-semibold uppercase">Contact info</h3>
              <div className="space-y-4">
                <div className="flex gap-3 py-2">
                  <ChevronRightIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--muted-light)]" />
                  <div className="space-y-1">
                    <p className="text-base font-medium uppercase text-[var(--muted-light)]">
                      Address
                    </p>
                    <address className="not-italic text-base leading-8 text-white">
                      No. 128, Industrial Estate Road
                      <br />
                      Negombo 11500
                      <br />
                      Sri Lanka
                    </address>
                  </div>
                </div>
                <div className="flex gap-3 py-2">
                  <ChevronRightIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--muted-light)]" />
                  <div className="space-y-1">
                    <p className="text-base font-medium uppercase text-[var(--muted-light)]">
                      EMAIL
                    </p>
                    <a className="text-base text-white" href="mailto:info@regenttec.com">
                      info@regenttec.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 py-2">
                  <ChevronRightIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--muted-light)]" />
                  <div className="space-y-1">
                    <p className="text-base font-medium uppercase text-[var(--muted-light)]">
                      phone
                    </p>
                    <div className="flex flex-col gap-1 text-base text-white">
                      <a href="tel:+94112650397">011 2650 397</a>
                      <a href="tel:+94773048569">077 3048 569</a>
                      <a href="tel:+94777906602">077 7906 602</a>
                      <a href="tel:+94717700619">071 7700 619</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-[var(--regent-blue-700)] pt-6 text-[var(--muted-light)] md:flex-row md:items-center md:justify-between">
            <p className="text-base leading-8">Copyright © 2026 Regent Tech</p>
            <div className="flex flex-wrap items-center gap-4 text-base leading-8">
              <a className="border-r border-[var(--neutral-400)] pr-4" href="#home">
                FAQ
              </a>
              <a className="border-r border-[var(--neutral-400)] pr-4" href="#home">
                Privacy Policy
              </a>
              <a href="#home">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
