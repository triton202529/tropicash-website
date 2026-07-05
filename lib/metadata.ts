import type { Metadata, Viewport } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tropicash.com";

export const siteConfig = {
  name: "Tropicash",
  title: "Tropicash: Caribbean-First Digital Wallet & Payment Infrastructure",
  description:
    "Tropicash is a Caribbean-first digital wallet and payment infrastructure platform being built for people, businesses, developers, and trusted partners.",
  url: siteUrl,
  locale: "en_US",
  creator: "Tropicash",
} as const;

const ogImage = {
  url: "/brand/tropicash-og-image.png",
  width: 1200,
  height: 630,
  alt: "Tropicash, Caribbean-first digital wallet and payment infrastructure",
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Tropicash",
    "Caribbean payments",
    "digital wallet",
    "payment infrastructure",
    "fintech",
  ],
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/brand/tropicash-icon.png",
    apple: "/brand/tropicash-icon.png",
  },
};

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};
