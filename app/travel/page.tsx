import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pagesReady, travel } from "@/content/site";
import { PageCloser } from "@/components/PageCloser";

export const metadata: Metadata = {
  title: "Travel",
  description: travel.intro,
  alternates: { canonical: "/travel" },
};

export default function Page() {
  if (!pagesReady.travel) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="eyebrow green">Travel</p>
          <h1>{travel.title}</h1>
          <p className="lead">{travel.intro}</p>
        </div>
      </section>
      <section className="toolkit">
        <div className="wrap">
          <div className="ethos-grid">
            {travel.items.map((i) => (
              <article key={i.title}>
                <h2>{i.title}</h2>
                <p>{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCloser />
    </>
  );
}
