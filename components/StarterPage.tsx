import Link from "next/link";
import { site } from "@/content/site";

export function StarterPage({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="starter">
      <div className="wrap narrow">
        <p className="eyebrow">Muri</p>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
        <div className="actions">
          <a className="btn btn-green" href={site.bookingUrl} target="_blank" rel="noopener">Book a Session</a>
          <Link className="btn btn-outline" href="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
