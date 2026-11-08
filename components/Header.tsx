import Link from "next/link";
import { ctas, nav, site } from "@/content/site";
import { imgSrc, imgAlt } from "@/lib/img";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="Muri home">
          <img src={imgSrc("logo", 400)} alt={imgAlt("logo")} width={137} height={41} />
        </Link>
        <NavLinks items={nav} />
        <a className="btn btn-green btn-sm header-cta" href={site.bookingUrl} target="_blank" rel="noopener">
          {ctas.bookShort}
        </a>
      </div>
    </header>
  );
}
