import type { Metadata } from "next";
import Link from "next/link";
import { corporateConfidant as cc, ctas, site } from "@/content/site";
import { imgSrc, imgAlt } from "@/lib/img";
import { Steps } from "@/components/Steps";
import { TalkButton } from "@/components/TalkButton";
import { corporateConfidantService } from "@/lib/offers";

export const metadata: Metadata = {
  title: { absolute: cc.seoTitle },
  description: cc.seoDescription,
  alternates: { canonical: "/corporate-confidant" },
  openGraph: {
    title: cc.seoTitle,
    description: cc.seoDescription,
    url: "/corporate-confidant",
    images: [{ url: imgSrc("ogConfidant", 1200), width: 1200, height: 1200 }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cc.faq.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function BookButton({ className = "btn btn-green btn-lg" }: { className?: string }) {
  return (
    <a className={className} href={site.bookingUrl} target="_blank" rel="noopener">
      {ctas.book}
    </a>
  );
}

export default function CorporateConfidant() {
  const { hero, problem, whoFor, howItWorks, promise, whyMe, faq, ongoingSupport, closing } = cc;
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" style={{ backgroundImage: `url(${imgSrc("hero")})` }}>
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <p className="eyebrow light">{hero.eyebrow}</p>
          <h1>
            {hero.titleLead} <span className="gold">{hero.titleAccent}</span>
          </h1>
          <p className="hero-body">{hero.body}</p>
          <BookButton />
          <p className="small-print">{hero.smallPrint}</p>
        </div>
      </section>

      {/* 2. The problem */}
      <section className="statement">
        <div className="wrap narrow">
          <h2>{problem.title}</h2>
          {problem.body.map((p) => (
            <p key={p} className="lead">{p}</p>
          ))}
        </div>
      </section>

      {/* 3. Who it's for */}
      <section className="who-for">
        <div className="wrap narrow">
          <h2>{whoFor.title}</h2>
          <ul className="check-list">
            {whoFor.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="confidant">
        <div className="wrap">
          <img className="banner" src={imgSrc("confidantBanner")} alt={imgAlt("confidantBanner")} />
          <h2 className="center light-heading">{howItWorks.title}</h2>
          <Steps steps={howItWorks.steps} dark />
        </div>
      </section>

      {/* 5. The promise */}
      <section className="promise">
        <div className="wrap narrow center">
          <h2>{promise.title}</h2>
          <p>{promise.body}</p>
        </div>
      </section>

      {/* 6. Why me */}
      <section className="why-me">
        <div className="wrap why-me-grid">
          <img className="headshot headshot-sm" src={imgSrc("learned", 600)} alt={imgAlt("learned")} />
          <div>
            <h2>{whyMe.title}</h2>
            <p className="lead">{whyMe.body}</p>
            <Link className="text-link" href="/#why">
              {whyMe.link} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Common questions */}
      <section className="faq">
        <div className="wrap narrow">
          <h2>{faq.title}</h2>
          {faq.items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
              {f.links && (
                <p className="faq-links">
                  {f.links.map((l) =>
                    l.href.startsWith("#") ? (
                      <a key={l.href} className="text-link" href={l.href}>
                        {l.label} <span aria-hidden="true">&rarr;</span>
                      </a>
                    ) : (
                      <Link key={l.href} className="text-link" href={l.href}>
                        {l.label} <span aria-hidden="true">&rarr;</span>
                      </Link>
                    )
                  )}
                </p>
              )}
            </details>
          ))}
        </div>
      </section>

      {/* Ongoing Support (retainer) */}
      <section className="ongoing" id="ongoing-support">
        <div className="wrap">
          <p className="eyebrow green center">{ongoingSupport.eyebrow}</p>
          <h2 className="center">{ongoingSupport.title}</h2>
          <p className="lead center ongoing-lead">{ongoingSupport.body}</p>
          <div className="plan-grid">
            {ongoingSupport.plans.map((p) => (
              <article key={p.days} className={`plan${p.recommended ? " plan-recommended" : ""}`}>
                {p.recommended && <p className="plan-badge">{ongoingSupport.recommendedLabel}</p>}
                <h3>{p.days}</h3>
                <p className="plan-price">{p.price}</p>
                <p className="plan-calls">{p.calls}</p>
              </article>
            ))}
          </div>
          <div className="plan-includes">
            <h3>{ongoingSupport.includesTitle}</h3>
            <ul className="check-list">
              {ongoingSupport.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="plan-credit">{ongoingSupport.credit}</p>
            <p className="plan-payment">{ongoingSupport.payment}</p>
          </div>
          <div className="actions center-actions">
            <TalkButton className="btn btn-green btn-lg" />
          </div>
        </div>
      </section>

      {/* 8. Closing */}
      <section className="closing">
        <div className="wrap narrow center">
          <h2>{closing.title}</h2>
          <BookButton />
          <p className="more">
            {closing.more} <Link href="/#services">{closing.moreLink} &rarr;</Link>
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateConfidantService) }} />
    </>
  );
}
