import Link from "next/link";
import { navItems } from "@/lib/regent-content";
import {
  ChevronDownIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TiktokIcon,
} from "@/components/regent/ui/icons";

export function SiteHeader({ currentPath = "/" }: { currentPath?: string }) {
  return (
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
              <Link
                key={item.label}
                className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold tracking-[0.04em] transition-colors hover:text-[var(--muted-light)] ${
                  currentPath === item.href ? "text-[var(--muted-light)]" : ""
                }`}
                href={item.href}
              >
                <span>{item.label}</span>
                {item.hasChevron ? <ChevronDownIcon className="h-5 w-5" /> : null}
              </Link>
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
  );
}
