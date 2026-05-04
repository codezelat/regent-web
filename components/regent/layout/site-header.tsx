import Link from "next/link";
import { navItems } from "@/lib/regent-content";
import { siteConfig } from "@/lib/site-config";
import {
  ChevronDownIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/regent/ui/icons";

export function SiteHeader({ currentPath = "/" }: { currentPath?: string }) {
  const primaryPhone =
    siteConfig.phoneNumbers.find((phone) => phone.primary) ??
    siteConfig.phoneNumbers[0];
  const hasSocialLinks = siteConfig.socialLinks.length > 0;

  return (
    <header className="relative z-20">
      <div className="hidden bg-[var(--regent-blue-700)] md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-12 py-3 text-sm font-semibold text-white">
          <p>{siteConfig.experienceLabel}</p>
          <div className="flex items-center gap-4">
            <a
              className="inline-flex items-center gap-2 text-white/95 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--regent-blue-700)]"
              href={`mailto:${siteConfig.email}`}
            >
              <MailIcon className="h-5 w-5" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              className="inline-flex items-center gap-2 text-white/95 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--regent-blue-700)]"
              href={primaryPhone.href}
            >
              <PhoneIcon className="h-5 w-5" />
              <span>{primaryPhone.label}</span>
            </a>
            {hasSocialLinks ? (
              <div className="flex items-center gap-4 text-white">
                {siteConfig.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    aria-label={link.label}
                    className="transition-colors duration-200 hover:text-[var(--muted-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--regent-blue-700)]"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label === "Facebook" ? (
                      <FacebookIcon className="h-5 w-5" />
                    ) : (
                      <InstagramIcon className="h-5 w-5" />
                    )}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-0">
        <div className="flex flex-col gap-4 bg-[var(--regent-blue-900)] px-5 py-5 md:h-28 md:flex-row md:items-center md:justify-between md:px-12">
          <div className="text-2xl font-bold tracking-[0.08em] text-white">
            REGENT
          </div>
          <details className="group md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-white">
              Menu
              <span className="text-lg leading-none group-open:rotate-45">+</span>
            </summary>
            <nav className="mt-3 grid gap-1 rounded-lg bg-white/5 p-2 text-white">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  className={`rounded-md px-3 py-3 text-sm font-semibold tracking-[0.04em] transition-colors hover:bg-white/10 ${
                    currentPath === item.href ? "text-[var(--muted-light)]" : ""
                  }`}
                  href={item.href}
                  aria-current={currentPath === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
          <nav className="hidden flex-wrap items-center gap-x-1 gap-y-2 text-white md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold tracking-[0.04em] transition-colors duration-200 hover:text-[var(--muted-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)] ${
                  currentPath === item.href ? "text-[var(--muted-light)]" : ""
                }`}
                href={item.href}
                aria-current={currentPath === item.href ? "page" : undefined}
              >
                <span>{item.label}</span>
                {item.hasChevron ? (
                  <ChevronDownIcon className="h-5 w-5" />
                ) : null}
              </Link>
            ))}
          </nav>
          <a
            className="inline-flex items-center bg-[var(--regent-red)] px-6 py-4 text-left text-white transition-colors duration-200 hover:bg-[var(--regent-red-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)] md:h-28 md:w-[259px] md:self-stretch"
            href={primaryPhone.href}
          >
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-white/90">
                CALL US
              </span>
              <span className="text-xl font-bold">{primaryPhone.label}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
