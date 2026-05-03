import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: getSiteUrl(),
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/regent/hero.png",
        width: 1600,
        height: 900,
        alt: "Regent Technologies industrial blade sharpening",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    url: getSiteUrl(),
    email: siteConfig.email,
    telephone: siteConfig.phoneNumbers.map((phone) => phone.label),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address[0],
      addressLocality: "Moratuwa",
      postalCode: "10400",
      addressCountry: "LK",
    },
    areaServed: "Sri Lanka",
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
