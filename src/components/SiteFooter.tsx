import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-forest text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-serif text-3xl tracking-tight">
            {site.name}
            <span className="text-saffron">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#d7e4de]">
            A plain account of what the work paid. For delivery partners,
            drivers, and the people who depend on gig work in India.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-[#9db5ab] uppercase">
            Pages
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/approach" className="hover:text-white">
                Approach
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/platform" className="hover:text-white">
                Workspace platform
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.18em] text-[#9db5ab] uppercase">
            Write to us
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm underline decoration-[#e7a08a] underline-offset-4"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
