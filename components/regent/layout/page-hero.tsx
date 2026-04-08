import Image from "next/image";
import { PillButton, SectionEyebrow } from "@/components/regent/ui/primitives";
import { SiteHeader } from "@/components/regent/layout/site-header";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "dark" | "text";
};

export function PageHero({
  currentPath,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  actions = [],
}: {
  currentPath: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  actions?: HeroAction[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--regent-blue-950)]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />

      <SiteHeader currentPath={currentPath} />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-20 pt-24 md:px-12 md:pb-28 md:pt-[143px]">
        <div className="max-w-[820px] space-y-6 text-white">
          <SectionEyebrow
            label={eyebrow}
            className="text-white/85"
            lineClassName="bg-white"
          />
          <h1 className="text-4xl font-bold leading-[1.15] md:text-[56px] md:leading-[1.2]">
            {title}
          </h1>
          <p className="max-w-[720px] text-lg leading-8 text-[var(--muted-light)]">
            {description}
          </p>
          {actions.length ? (
            <div className="flex flex-wrap gap-4">
              {actions.map((action) => (
                <PillButton
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  label={action.label}
                  variant={action.variant}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
