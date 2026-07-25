import type { Metadata } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — Complex roofs. Clear accountability.`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Premium roofing and exterior construction for St. Louis homes and commercial properties, delivered with clear communication and accountable project execution.",
  openGraph: {
    title: `${site.name}`,
    description:
      "Premium roofing and exterior construction for St. Louis homes and commercial properties.",
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
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
        {children}
      </body>
    </html>
  );
}
