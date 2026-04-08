import { contactEmail } from "@/components/regent/content";
import { MailIcon, PhoneIcon } from "@/components/regent/icons";
import { PillButton } from "@/components/regent/primitives";

export function ContactCtaSection() {
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
              precision and efficiency in your operations.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-[#fdd] md:flex-row md:gap-0">
            <a
              className="inline-flex items-center gap-3 px-6 py-2 text-lg font-semibold"
              href="tel:+94112434453"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>011 2434 453</span>
            </a>
            <span className="hidden h-8 w-px bg-[var(--regent-red-darker)] md:block" />
            <a
              className="inline-flex items-center gap-3 px-6 py-2 text-lg font-semibold"
              href={`mailto:${contactEmail}`}
            >
              <MailIcon className="h-5 w-5" />
              <span>{contactEmail}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <PillButton href="/#products" label="Download Catalog" variant="dark" />
            <PillButton
              href="/contact#footer-contact"
              label="Contact us"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
