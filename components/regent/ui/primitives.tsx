import Link from "next/link";
import { ChevronRightIcon } from "@/components/regent/ui/icons";

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

function shouldOpenInNewTab(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function PillButton({
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
      ? "bg-[var(--regent-red)] text-white hover:bg-[var(--regent-red-dark)] focus-visible:bg-[var(--regent-red-dark)]"
      : variant === "secondary"
        ? "border border-white text-white hover:bg-white hover:text-[var(--regent-blue-900)] focus-visible:bg-white focus-visible:text-[var(--regent-blue-900)]"
        : variant === "dark"
          ? "bg-[var(--regent-blue-900)] text-white hover:bg-[var(--regent-blue-800)] focus-visible:bg-[var(--regent-blue-800)]"
          : "text-[var(--regent-red)] hover:text-[var(--regent-red-dark)] focus-visible:text-[var(--regent-red-dark)]";

  const shared =
    variant === "text"
      ? "inline-flex items-center gap-2 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--regent-red)] focus-visible:ring-offset-4 md:text-lg"
      : "inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--regent-red)] focus-visible:ring-offset-4 md:text-lg";

  return (
    isInternalHref(href) ? (
      <Link className={`${shared} ${styles} ${className}`} href={href}>
        <span>{label}</span>
        {variant === "text" ? <ChevronRightIcon className="h-5 w-5" /> : null}
      </Link>
    ) : (
      <a
        className={`${shared} ${styles} ${className}`}
        href={href}
        target={shouldOpenInNewTab(href) ? "_blank" : undefined}
        rel={shouldOpenInNewTab(href) ? "noreferrer" : undefined}
      >
        <span>{label}</span>
        {variant === "text" ? <ChevronRightIcon className="h-5 w-5" /> : null}
      </a>
    )
  );
}

export function SectionEyebrow({
  label,
  className = "",
  lineClassName = "",
}: {
  label: string;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] md:text-base ${className}`}
    >
      <span className={`h-px w-4 bg-[var(--regent-red)] ${lineClassName}`} />
      <span>{label}</span>
    </div>
  );
}

export function ArrowBullet({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-3 px-2 py-2 text-lg font-semibold text-[var(--neutral-800)]">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--regent-red-soft)] text-[var(--regent-red)]">
        <ChevronRightIcon className="h-4 w-4" />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      className="inline-flex items-center gap-2 py-2 text-base uppercase tracking-[0.02em] text-white transition-colors duration-200 hover:text-[var(--muted-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]"
      href={href}
    >
      <ChevronRightIcon className="h-5 w-5 text-[var(--muted-light)]" />
      <span>{label}</span>
    </Link>
  );
}

export function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const className =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--regent-blue-900)]";

  return isInternalHref(href) ? (
    <Link aria-label={label} className={className} href={href}>
      {children}
    </Link>
  ) : (
    <a
      aria-label={label}
      className={className}
      href={href}
      target={shouldOpenInNewTab(href) ? "_blank" : undefined}
      rel={shouldOpenInNewTab(href) ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
