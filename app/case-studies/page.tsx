import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies as cs, ctas, pagesReady, site } from "@/content/site";
import { TalkButton } from "@/components/TalkButton";

export const metadata: Metadata = {
  title: "Case Studies",
  description: cs.intro,
  alternates: { canonical: "/case-studies" },
};

export default function Page() {
  if (!pagesReady.caseStudies) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="eyebrow green">Case Studies</p>
          <h1>{cs.title}</h1>
          <p className="lead">{cs.intro}</p>
        </div>
      </section>
      <section className="cases">
        <div className="wrap narrow">
          {cs.cases.map((c) => (
            <article key={c.title} className="case">
              <h2>{c.title}</h2>
              <dl>
                <dt>Who</dt><dd>{c.who}</dd>
                <dt>The situation</dt><dd>{c.situation}</dd>
                <dt>What we did</dt><dd>{c.whatWeDid}</dd>
                <dt>What changed</dt><dd>{c.whatChanged}</dd>
              </dl>
              {c.quote && <blockquote>{c.quote}</blockquote>}
            </article>
          ))}
        </div>
      </section>
      <section className="closing">
        <div className="wrap narrow center">
          <h2>{cs.closing}</h2>
          <div className="actions center-actions">
            <TalkButton className="btn btn-outline btn-lg" />
            <a className="btn btn-green btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">{ctas.book}</a>
          </div>
        </div>
      </section>
    </>
  );
}
