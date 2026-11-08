import type { Metadata } from "next";
import { founderSessions as fs, site } from "@/content/site";
import { ConfidantPillars } from "@/components/ConfidantPillars";
import { imgSrc } from "@/lib/img";

export const metadata: Metadata = {
  title: { absolute: fs.seoTitle },
  description: fs.seoDescription,
  alternates: { canonical: "/founder-sessions" },
  openGraph: {
    title: fs.seoTitle,
    description: fs.seoDescription,
    url: "/founder-sessions",
    images: [{ url: imgSrc("ogFounder", 1200), width: 1200, height: 1200 }],
  },
};

export default function FounderSessions() {
  return (
    <>
      <section className="founder-hero">
        <div className="wrap narrow">
          <h1>{fs.title}</h1>
          <p className="lead">{fs.subtitle}</p>
          <a className="btn btn-green btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
            {fs.cta}
          </a>
        </div>
      </section>
      <ConfidantPillars />
    </>
  );
}
