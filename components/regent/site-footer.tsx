import { footerIndustries, quickLinks } from "@/components/regent/content";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
} from "@/components/regent/icons";
import { ChevronRightIcon } from "@/components/regent/icons";
import { FooterLink, SocialLink } from "@/components/regent/primitives";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--regent-blue-900)] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-20 md:px-12">
        <div className="grid gap-12 xl:grid-cols-[411px_206px_332px_324px]">
          <div className="space-y-8">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold uppercase">REGENT TECH</h2>
              <p className="max-w-[411px] text-base leading-8 text-[var(--muted-light)]">
                Regent Technologies is a specialized industrial service provider
                focused on high-precision sharpening of TCT (Tungsten Carbide
                Tipped) and HSS (High-Speed Steel) cutting tools.
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
  );
}
