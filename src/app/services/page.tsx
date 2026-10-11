import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three services for gig workers in India: a take-home income optimizer, benefits and claims support, and a worker purchasing network.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs tracking-[0.2em] text-saffron uppercase">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl">
            Work that changes what someone keeps, claims, or pays.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Each service has to answer a question a worker already has. If it
            only displays information, it is not finished.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={index % 2 === 1 ? "bg-card" : "bg-paper"}
          aria-labelledby={`${service.id}-title`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 border-b border-line px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-serif text-sm text-muted">{service.number}</p>
              {service.preferred ? (
                <p className="mt-3 text-xs tracking-[0.18em] text-saffron uppercase">
                  Preferred starting hypothesis
                </p>
              ) : null}
              <h2
                id={`${service.id}-title`}
                className="mt-3 font-serif text-4xl tracking-tight"
              >
                {service.name}
              </h2>
              <p className="mt-5 font-serif text-2xl leading-snug text-ink">
                “{service.question}”
              </p>
            </div>
            <div>
              <p className="text-base leading-7 text-muted">{service.summary}</p>
              <h3 className="mt-8 text-xs tracking-[0.18em] text-muted uppercase">
                What we do
              </h3>
              <ul className="mt-4 space-y-3">
                {service.does.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-saffron pl-4 text-sm leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-paper p-5">
                  <h3 className="text-xs tracking-[0.16em] text-forest uppercase">
                    Why it is interesting
                  </h3>
                  <p className="mt-3 text-sm leading-6">{service.why}</p>
                </div>
                <div className="rounded-2xl border border-line bg-paper p-5">
                  <h3 className="text-xs tracking-[0.16em] text-saffron uppercase">
                    Main risk
                  </h3>
                  <p className="mt-3 text-sm leading-6">{service.risk}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14 md:px-8">
          <p className="max-w-xl font-serif text-3xl tracking-tight">
            The first test is a weekly report for twenty riders, not a product launch.
          </p>
          <Link
            href="/approach"
            className="rounded-full bg-forest px-5 py-3 text-sm text-paper"
          >
            See the approach
          </Link>
        </div>
      </section>
    </main>
  );
}
