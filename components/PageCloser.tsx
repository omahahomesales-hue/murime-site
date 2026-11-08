import Link from "next/link";
import { sharedCloser } from "@/content/site";

/** Shared closing line on The Daily Live, Toolkit and Travel. */
export function PageCloser() {
  return (
    <section className="page-closer">
      <div className="wrap narrow center">
        <p className="closer-line">{sharedCloser.line}</p>
        <p>
          {sharedCloser.ask}{" "}
          <Link className="text-link" href="/corporate-confidant">
            Book the Session <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
