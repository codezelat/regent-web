import { contactEmail } from "@/lib/regent-content";
import { siteConfig } from "@/lib/site-config";
import { MailIcon, PhoneIcon } from "@/components/regent/ui/icons";
import { PillButton } from "@/components/regent/ui/primitives";

export function ContactCtaSection() {
  const primaryPhone =
    siteConfig.phoneNumbers.find((phone) => phone.primary) ?? siteConfig.phoneNumbers[0];

  return (
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
              precision and efficiency with {siteConfig.experienceLabel.toLowerCase()} behind every job.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-[#fdd] md:flex-row md:gap-0">
            <a
              className="inline-flex items-center gap-3 px-6 py-2 text-lg font-semibold transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-red)]"
              href={primaryPhone.href}
            >
              <PhoneIcon className="h-5 w-5" />
              <span>{primaryPhone.label}</span>
            </a>
            <span className="hidden h-8 w-px bg-[var(--regent-red-darker)] md:block" />
            <a
              className="inline-flex items-center gap-3 px-6 py-2 text-lg font-semibold transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-red)]"
              href={`mailto:${contactEmail}`}
            >
              <MailIcon className="h-5 w-5" />
              <span>{contactEmail}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <PillButton href="/products" label="Browse Products" variant="dark" />
            <PillButton
              href={siteConfig.mapHref}
              label="Get Directions"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
