import Link from "next/link";
import { ctas, home, nav, site } from "@/content/site";
import { imgSrc, imgAlt } from "@/lib/img";
import { Steps } from "@/components/Steps";
import { TalkButton } from "@/components/TalkButton";

export default function Home() {
  const { hero, problem, doors, featured, services, howItWorks, whyCare, beliefs, contact } = home;
  const extraPages = nav.filter((n) => n.href !== "/" && n.href !== "/corporate-confidant");

  return (
    <>
      {/* 1. Hero */}
      <section className="muri-hero">
        <div className="wrap muri-hero-grid">
          <div>
            <p className="eyebrow gold-text">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-body">{hero.body}</p>
            <div className="actions">
              <a className="btn btn-green btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
                {ctas.book}
              </a>
              <TalkButton className="btn btn-outline-light btn-lg" />
            </div>
            <ul className="trust">
              {hero.trust.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <img className="headshot" src={imgSrc("learned", 1000)} alt={imgAlt("learned")} />
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

      {/* 3. Who I work with */}
      <section className="doors">
        <div className="wrap">
          <h2 className="center">{doors.title}</h2>
          <div className="door-grid">
            {doors.items.map((d) => (
              <Link key={d.label} className="door" href={d.href}>
                <h3>{d.who}</h3>
                <p>{d.body}</p>
                <span className="text-link">
                  {d.label} <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured: Corporate Confidant */}
      <section className="hero cc-band" style={{ backgroundImage: `url(${imgSrc("hero")})` }}>
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <p className="eyebrow light">{featured.eyebrow}</p>
          <h2>
            {featured.titleLead} <span className="gold">{featured.titleAccent}</span>
          </h2>
          <p className="hero-body">{featured.body}</p>
          <p className="small-print">{featured.smallPrint}</p>
          <div className="actions">
            <Link className="btn btn-green btn-lg" href="/corporate-confidant">
              {featured.learnMore}
            </Link>
            <a className="btn btn-outline-light btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
              {ctas.bookShort}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Services */}
      <section className="services" id="services">
        <div className="wrap">
          <h2 className="center">{services.title}</h2>
          <div className="service-grid">
            {services.items.map((s, i) => (
              <article key={s.id} id={s.id} className="service">
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
          <div className="center-actions actions">
            <TalkButton className="btn btn-green btn-lg" />
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="how">
        <div className="wrap">
          <h2 className="center">{howItWorks.title}</h2>
          <Steps steps={howItWorks.steps} />
        </div>
      </section>

      {/* 7. Why I care */}
      <section className="why" id="why">
        <div className="wrap why-grid">
          <div>
            <img className="character" src={imgSrc("character", 600)} alt="" aria-hidden="true" />
            <h2>{whyCare.title}</h2>
            <p>{whyCare.body}</p>
            <p className="signature">{whyCare.signature}</p>
          </div>
          <img className="portrait" src={imgSrc("portrait", 1200)} alt={imgAlt("portrait")} />
        </div>
      </section>

      {/* 8. What we believe */}
      <section className="beliefs">
        <div className="wrap">
          <h2>{beliefs.title}</h2>
          <div className="ethos-grid">
            {beliefs.items.map((b) => (
              <article key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact */}
      <section className="contact" id="contact">
        <div className="wrap narrow center">
          <h2>{contact.title}</h2>
          <p className="lead">{contact.body}</p>
          <p className="contact-line">
            {site.contact.address} ·{" "}
            <a href={`tel:${site.contact.phone.replace(/\D/g, "")}`}>{site.contact.phone}</a> ·{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
          <div className="actions center-actions">
            <a className="btn btn-green btn-lg" href={site.bookingUrl} target="_blank" rel="noopener">
              {ctas.book}
            </a>
          </div>
          {extraPages.length > 0 && (
            <p className="explore">
              {contact.explore}{" "}
              {extraPages.map((p, i) => (
                <span key={p.href}>
                  {i > 0 && (i === extraPages.length - 1 ? " and " : ", ")}
                  <Link href={p.href}>{p.label}</Link>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
