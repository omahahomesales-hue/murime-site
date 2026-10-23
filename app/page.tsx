import { home, site } from "@/content/site";
import { imgSrc, imgAlt } from "@/lib/img";

export default function Home() {
  const { hero, confidant, whyCare, learned, services, ethos } = home;
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${imgSrc("hero")})` }}>
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <h1>
            {hero.titleLead} <span className="gold">{hero.titleAccent}</span>
          </h1>
          <p className="hero-body">{hero.body}</p>
          <a className="btn btn-green btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
            {hero.cta}
          </a>
        </div>
      </section>

      {/* Corporate Confidant */}
      <section className="confidant">
        <div className="wrap">
          <p className="eyebrow light center">{confidant.eyebrow}</p>
          <img className="banner" src={imgSrc("confidantBanner")} alt={imgAlt("confidantBanner")} />
          <div className="pillars">
            {confidant.pillars.map((p) => (
              <article key={p.title} className="pillar">
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="guarantee">
        <p className="wrap">{confidant.guarantee}</p>
      </div>

      {/* Why do I care */}
      <section className="why">
        <div className="wrap why-grid">
          <div>
            <img className="character" src={imgSrc("character", 600)} alt="" aria-hidden="true" />
            <h2>{whyCare.title}</h2>
            <p>{whyCare.body}</p>
          </div>
          <img className="portrait" src={imgSrc("portrait", 1200)} alt={imgAlt("portrait")} />
        </div>
      </section>

      {/* Here's what we've learned */}
      <section className="learned">
        <div className="wrap learned-grid">
          <img src={imgSrc("learned", 1400)} alt={imgAlt("learned")} />
          <div>
            <h2>{learned.title}</h2>
            <p className="lead">{learned.body}</p>
          </div>
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
              </article>
            ))}
          </div>
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
