export const siteConfig = {
  name: "Regent Technologies",
  legalName: "Regent Technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.regenttec.com",
  description:
    "Industrial blade sharpening, pickup and delivery services, professional tools, and workshop support by Regent Technologies.",
  email: "info@regenttec.com",
  address: [
    "No. 403, Bandaranayake Mawatha",
    "Katubedda, Moratuwa 10400",
    "Sri Lanka",
  ],
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=403+Bandaranayake+Mawatha+Katubedda+Moratuwa+10400+Sri+Lanka",
  phoneNumbers: [
    { label: "011 2650 397", href: "tel:+94112650397", primary: true },
    { label: "077 3048 569", href: "tel:+94773048569", primary: false },
    { label: "077 7906 602", href: "tel:+94777906602", primary: false },
    { label: "071 7700 619", href: "tel:+94717700619", primary: false },
  ],
  experienceLabel: "20+ years of experience",
  productHighlight: "Sole agents for Arden Router Bits",
  socialLinks: [] as { label: string; href: string }[],
} as const;

export function getSiteUrl() {
  return siteConfig.url.replace(/\/$/, "");
}
