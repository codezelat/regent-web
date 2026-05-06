import Link from "next/link";
import { Heart } from "lucide-react";
import { BrandLogo } from "@/components/regent/ui/brand-logo";
import { footerIndustries, quickLinks } from "@/lib/regent-content";
import { siteConfig } from "@/lib/site-config";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/regent/ui/icons";
import { ChevronRightIcon } from "@/components/regent/ui/icons";
import { FooterLink, SocialLink } from "@/components/regent/ui/primitives";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const hasSocialLinks = siteConfig.socialLinks.length > 0;

  return (
    <footer className="bg-[var(--regent-blue-900)] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-20 md:px-12">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.2fr)_minmax(150px,0.55fr)_minmax(220px,0.85fr)_minmax(260px,1fr)]">
          <div className="min-w-0 space-y-8">
            <div className="space-y-5">
              <div className="inline-flex max-w-full items-center gap-3 rounded-lg bg-white px-3 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.16)] ring-1 ring-white/20 sm:gap-4 sm:px-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden sm:h-20 sm:w-20">
                  <BrandLogo
                    variant="color"
                    className="h-full w-full"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </span>
                <span className="flex min-w-0 flex-col uppercase leading-none">
                  <span className="whitespace-nowrap text-2xl font-black tracking-[0.08em] text-[var(--regent-blue-900)] sm:text-3xl">
                    Regent
                  </span>
                  <span className="mt-1 whitespace-nowrap text-[0.68rem] font-black tracking-[0.28em] text-[var(--regent-red)] sm:text-xs">
                    Technologies
                  </span>
                  <span className="mt-2 h-1 w-20 bg-[var(--regent-red)]" aria-hidden="true" />
                </span>
              </div>
              <p className="max-w-[411px] text-base leading-8 text-[var(--muted-light)]">
                Regent Technologies brings {siteConfig.experienceLabel.toLowerCase()} in
                industrial sharpening, tooling support, and workshop-ready
                product supply for production teams across Sri Lanka.
              </p>
            </div>
            {hasSocialLinks ? (
              <div className="flex items-center gap-6">
                {siteConfig.socialLinks.map((link) => (
                  <SocialLink key={link.label} href={link.href} label={link.label}>
                    {link.label === "Facebook" ? (
                      <FacebookIcon className="h-5 w-5" />
                    ) : (
                      <InstagramIcon className="h-5 w-5" />
                    )}
                  </SocialLink>
                ))}
              </div>
            ) : (
              <div className="space-y-3 text-[var(--muted-light)]">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/85">
                  Direct Contact
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:border-white/40 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
                    href={`mailto:${siteConfig.email}`}
                  >
                    Email Us
                  </a>
                  <a
                    className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:border-white/40 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
                    href={siteConfig.mapHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="min-w-0 space-y-3">
            <h3 className="text-xl font-semibold uppercase">Quick Links</h3>
            <div className="flex flex-col">
              {quickLinks.map((item) => (
                <FooterLink key={item.label} label={item.label} href={item.href} />
              ))}
            </div>
          </div>

          <div className="min-w-0 space-y-3">
            <h3 className="text-xl font-semibold uppercase">Industries</h3>
            <div className="flex flex-col">
              {footerIndustries.map((item) => (
                <FooterLink key={item.title} label={item.title} href={`/industries/${item.slug}`} />
              ))}
            </div>
          </div>

          <div id="footer-contact" className="min-w-0 space-y-3">
            <h3 className="text-xl font-semibold uppercase">Contact info</h3>
            <div className="space-y-4">
              <div className="flex gap-3 py-2">
                <ChevronRightIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--muted-light)]" />
                <div className="space-y-1">
                  <p className="text-base font-medium uppercase text-[var(--muted-light)]">
                    Address
                  </p>
                  <a
                    className="block text-white transition-colors duration-200 hover:text-[var(--muted-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
                    href={siteConfig.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Regent Technologies location in Google Maps"
                  >
                    <address className="flex max-w-full flex-col text-base leading-8 not-italic">
                      {siteConfig.address.map((line) => (
                        <span className="break-words" key={line}>{line}</span>
                      ))}
                    </address>
                  </a>
                </div>
              </div>
              <div className="flex gap-3 py-2">
                <ChevronRightIcon className="mt-1 h-5 w-5 shrink-0 text-[var(--muted-light)]" />
                <div className="space-y-1">
                  <p className="text-base font-medium uppercase text-[var(--muted-light)]">
                    EMAIL
                  </p>
                  <a
                    className="break-all text-base text-white transition-colors duration-200 hover:text-[var(--muted-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
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
                    {siteConfig.phoneNumbers.map((phone) => (
                      <a
                        key={phone.href}
                        className="transition-colors duration-200 hover:text-[var(--muted-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
                        href={phone.href}
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--regent-blue-700)] pt-6 text-[var(--muted-light)] md:flex-row md:items-center md:justify-between">
          <p className="text-base leading-8">Copyright © {year} {siteConfig.legalName}</p>
          <p className="inline-flex flex-wrap items-center gap-1.5 text-base leading-8">
            <span>Developed with</span>
            <Heart className="h-4 w-4 fill-[var(--regent-red)] text-[var(--regent-red)]" aria-label="love" />
            <span>by</span>
            <a
              className="font-semibold text-white transition-colors duration-200 hover:text-[var(--muted-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
              href="https://codezela.com"
              target="_blank"
              rel="noreferrer"
            >
              Codezela Technologies
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-4 text-base leading-8">
            <Link
              className="border-r border-[var(--neutral-400)] pr-4 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
