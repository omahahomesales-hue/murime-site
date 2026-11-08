import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pagesReady, toolkit } from "@/content/site";
import { PageCloser } from "@/components/PageCloser";

export const metadata: Metadata = {
  title: "Toolkit",
  description: toolkit.intro,
  alternates: { canonical: "/toolkit" },
};

export default function Page() {
  if (!pagesReady.toolkit) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="eyebrow green">Toolkit</p>
          <h1>{toolkit.title}</h1>
          <p className="lead">{toolkit.intro}</p>
          <p className="disclosure">{toolkit.disclosure}</p>
        </div>
      </section>
      <section className="toolkit">
        <div className="wrap">
          <div className="ethos-grid">
            {toolkit.categories.filter((c) => c.items.length > 0).map((c) => (
              <article key={c.title}>
                <h2>{c.title}</h2>
                <ul className="tool-list">
                  {c.items.map((i) => (
                    <li key={i.name}>
                      <a href={i.url} target="_blank" rel="sponsored noopener">{i.name}</a>
                      <span>{i.note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCloser />
    </>
  );
}
