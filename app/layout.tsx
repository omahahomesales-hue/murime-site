import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/600.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { imgSrc } from "@/lib/img";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: `%s | ${site.legalName}` },
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    siteName: site.legalName,
    type: "website",
    url: site.url,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: imgSrc("ogHome", 1200), width: 1200, height: 638 }],
  },
  twitter: { card: "summary_large_image" },
  verification: { google: "UorhZf0EJkusqFqxfCu_Vea7M6QMsacTU-1NmuqtILY" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phone,
  address: { "@type": "PostalAddress", addressLocality: "Omaha", addressRegion: "NE", addressCountry: "US" },
  sameAs: [site.social.facebook, site.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
