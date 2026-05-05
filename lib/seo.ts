import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/lib/site-config";

const defaultImage = "/regent/hero.png";
const defaultImageAlt = "Regent Technologies industrial blade sharpening in Sri Lanka";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  imageAlt = defaultImageAlt,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = `${title} - ${siteConfig.name}`;

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 900,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function sanitizeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
