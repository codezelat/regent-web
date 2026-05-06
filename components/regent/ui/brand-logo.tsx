import Image from "next/image";

type BrandLogoProps = {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  variant = "color",
  className,
  priority = false,
  sizes = "(max-width: 768px) 64px, 80px",
}: BrandLogoProps) {
  return (
    <Image
      src={variant === "white" ? "/regent/brand/regent-logo-white-transparent.png" : "/regent/brand/regent-logo-transparent.png"}
      alt="Regent Technologies"
      width={1254}
      height={1254}
      priority={priority}
      className={`shrink-0 object-contain ${className ?? ""}`}
      sizes={sizes}
    />
  );
}
