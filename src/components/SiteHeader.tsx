"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
  { href: "/platform", label: "Workspace platform" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/90 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="text-saffron">.</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-forest px-4 py-2 text-sm text-paper hover:bg-[#1c4a3d]"
          >
            Start a pilot
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full border border-line px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-2 inline-flex rounded-full bg-forest px-4 py-2 text-sm text-paper"
                onClick={() => setOpen(false)}
              >
                Start a pilot
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
