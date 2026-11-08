import Link from "next/link";
import { corporateConfidant as cc, home, site } from "@/content/site";
import { imgSrc, imgAlt } from "@/lib/img";

export default function Home() {
  const { hero, whyCare, learned, services, ethos } = home;
  return (
    <>
      {/* Hero: Muri */}
      <section className="muri-hero">
        <div className="wrap muri-hero-grid">
          <div>
            <p className="eyebrow gold-text">{hero.eyebrow}</p>
            <h1>
              {hero.titleLead} <span className="gold">{hero.titleAccent}</span>
            </h1>
            <p className="hero-body">{hero.body}</p>
            <div className="actions">
              <a className="btn btn-green btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
                {hero.cta}
              </a>
              <a className="btn btn-outline-light btn-lg" href="#services">
                {hero.secondaryCta}
              </a>
            </div>
          </div>
          <img className="headshot" src={imgSrc("learned", 1000)} alt={imgAlt("learned")} />
        </div>
      </section>

      {/* Why do I care */}
      <section className="why why-light">
        <div className="wrap why-grid">
          <div>
            <img className="character" src={imgSrc("character", 600)} alt="" aria-hidden="true" />
            <h2>{whyCare.title}</h2>
            <p>{whyCare.body}</p>
          </div>
          <img className="portrait" src={imgSrc("portrait", 1200)} alt={imgAlt("portrait")} />
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="wrap">
          <p className="eyebrow green center">{services.eyebrow}</p>
          <h2 className="center">{services.title}</h2>
          <div className="service-grid">
            {services.items.map((s, i) => (
              <article key={s.title} className="service">
                <span className="dot" data-i={i} aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                {s.bullets.length > 0 && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {s.href && (
                  <Link className="text-link" href={s.href}>
                    {s.linkLabel} <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Confidant feature */}
      <section className="hero cc-band" style={{ backgroundImage: `url(${imgSrc("hero")})` }}>
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <p className="eyebrow light">{cc.eyebrow}</p>
          <h2>
            {cc.titleLead} <span className="gold">{cc.titleAccent}</span>
          </h2>
          <p className="hero-body">{cc.body}</p>
          <div className="actions">
            <Link className="btn btn-green btn-lg" href="/corporate-confidant">
              {cc.learnMore}
            </Link>
            <a className="btn btn-outline-light btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
              {cc.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Here's what we've learned */}
      <section className="learned learned-statement">
        <div className="wrap narrow center">
          <h2>{learned.title}</h2>
          <p className="lead">{learned.body}</p>
        </div>
      </section>

      {/* Brand ethos */}
      <section className="ethos">
        <div className="wrap">
          <h2>{ethos.title}</h2>
          <p className="lead">{ethos.body}</p>
          <div className="ethos-grid">
            {ethos.pillars.map((p) => (
              <article key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <div className="closer">
            <h3>{ethos.closer}</h3>
            <a className="btn btn-green btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
              Book a Session
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
