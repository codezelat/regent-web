export const siteConfig = {
  name: "Regent Tech",
  legalName: "Regent Technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Precision automated sharpening for industrial blades, pickup and delivery services, and professional tools by Regent Technologies.",
  email: "info@regenttec.com",
  address: [
    "No. 128, Industrial Estate Road",
    "Negombo 11500",
    "Sri Lanka",
  ],
  phoneNumbers: [
    { label: "011 2650 397", href: "tel:+94112650397", primary: true },
    { label: "077 3048 569", href: "tel:+94773048569", primary: false },
    { label: "077 7906 602", href: "tel:+94777906602", primary: false },
    { label: "071 7700 619", href: "tel:+94717700619", primary: false },
  ],
  socialLinks: [
    { label: "Instagram", href: "/contact" },
    { label: "TikTok", href: "/contact" },
    { label: "Facebook", href: "/contact" },
  ],
} as const;

export function getSiteUrl() {
  return siteConfig.url.replace(/\/$/, "");
}
