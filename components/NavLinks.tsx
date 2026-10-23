"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavLinks({ items }: { items: { label: string; href: string }[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="nav" aria-label="Main">
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-list"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">Menu</span>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <ul id="nav-list" className={open ? "open" : ""}>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
