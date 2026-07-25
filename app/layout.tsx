import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  absoluteUrl,
  isStagingBuild,
  organizationJsonLd,
  productionOrigin,
  websiteJsonLd,
} from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// Display + structural type (DESIGN.md §5)
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Body + utility type (DESIGN.md §5)
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0b",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(productionOrigin),
  applicationName: site.name,
  authors: [{ name: site.name, url: productionOrigin }],
  creator: site.name,
  publisher: site.name,
  title: {
    default: `${site.name} — Complex roofs. Clear accountability.`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Premium roofing and exterior construction for St. Louis homes and commercial properties, delivered with clear communication and accountable project execution.",
  alternates: { canonical: "./" },
  category: "Roofing and exterior construction",
  openGraph: {
    title: `${site.name}`,
    description:
      "Premium roofing and exterior construction for St. Louis homes and commercial properties.",
    url: "./",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/home-hero.webp"),
        width: 1536,
        height: 1024,
        alt: "Frontenac Roofing & Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "Premium roofing and exterior construction for St. Louis homes and commercial properties.",
    images: [absoluteUrl("/images/home-hero.webp")],
  },
  robots: isStagingBuild
    ? { index: false, follow: false, noarchive: true, nocache: true }
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {children}
      </body>
    </html>
  );
}
