import type { Metadata } from "next";
import Link from "next/link";
import { corporateConfidant as cc, site } from "@/content/site";
import { imgSrc } from "@/lib/img";
import { ConfidantPillars } from "@/components/ConfidantPillars";

export const metadata: Metadata = {
  title: { absolute: cc.seoTitle },
  description: cc.seoDescription,
  alternates: { canonical: "/corporate-confidant" },
  openGraph: {
    title: cc.seoTitle,
    description: cc.seoDescription,
    url: "/corporate-confidant",
    images: [{ url: imgSrc("ogFounder", 1200), width: 1200, height: 1200 }],
  },
};

export default function CorporateConfidant() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${imgSrc("hero")})` }}>
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <p className="eyebrow light">{cc.eyebrow}</p>
          <h1>
            {cc.titleLead} <span className="gold">{cc.titleAccent}</span>
          </h1>
          <p className="hero-body">{cc.body}</p>
          <a className="btn btn-green btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
            {cc.cta}
          </a>
        </div>
      </section>

      <ConfidantPillars showBanner />

      <section className="founder-link">
        <div className="wrap narrow center">
          <h2>{cc.founderLink.title}</h2>
          <p className="lead">{cc.founderLink.body}</p>
          <div className="actions center-actions">
            <Link className="btn btn-outline" href="/founder-sessions">{cc.founderLink.label}</Link>
            <a className="btn btn-green" href={site.bookingUrl} target="_blank" rel="noopener">{cc.cta}</a>
          </div>
        </div>
      </section>
    </>
  );
}
