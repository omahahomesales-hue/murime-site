import { corporateConfidant as cc } from "@/content/site";
import { imgSrc, imgAlt } from "@/lib/img";

/** The One Hour / One Decision / One Letter block plus the gold guarantee strip. */
export function ConfidantPillars({ showBanner = false }: { showBanner?: boolean }) {
  return (
    <>
      <section className="confidant">
        <div className="wrap">
          <p className="eyebrow light center">{cc.promise}</p>
          {showBanner && (
            <img className="banner" src={imgSrc("confidantBanner")} alt={imgAlt("confidantBanner")} />
          )}
          <div className="pillars">
            {cc.pillars.map((p) => (
              <article key={p.title} className="pillar">
                <h2>{p.title}</h2>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="guarantee">
        <p className="wrap">{cc.guarantee}</p>
      </div>
    </>
  );
}
