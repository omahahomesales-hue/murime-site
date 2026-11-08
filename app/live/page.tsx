import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { live, pagesReady } from "@/content/site";
import { PageCloser } from "@/components/PageCloser";

export const metadata: Metadata = {
  title: "The Daily Live",
  description: live.title,
  alternates: { canonical: "/live" },
};

export default function Page() {
  if (!pagesReady.live) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="eyebrow green">{live.eyebrow}</p>
          <h1>{live.title}</h1>
          <p className="lead">{live.body(live.schedule)}</p>
          {live.tiktokUrl && (
            <a className="btn btn-green btn-lg" href={live.tiktokUrl} target="_blank" rel="noopener">{live.cta}</a>
          )}
        </div>
      </section>
      <section className="who-for">
        <div className="wrap narrow">
          <h2>{live.expectTitle}</h2>
          <ul className="check-list">
            {live.expect.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </div>
      </section>
      <PageCloser />
    </>
  );
}
