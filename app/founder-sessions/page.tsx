import type { Metadata } from "next";
import { founderSessions as fs, home, site } from "@/content/site";
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
      <section className="confidant">
        <div className="wrap">
          <p className="eyebrow light center">{home.confidant.eyebrow}</p>
          <div className="pillars">
            {home.confidant.pillars.map((p) => (
              <article key={p.title} className="pillar">
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="guarantee">
        <p className="wrap">{home.confidant.guarantee}</p>
      </div>
    </>
  );
}
