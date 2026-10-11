import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCatalog } from "@/components/ServiceCatalog";
import { serviceCategories, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Earnova services for gig workers, fleets, and partners: take-home pay, lower running costs, benefits, claims, and account appeals.",
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
            Fifteen ways to keep more of the work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            For delivery partners, drivers, freelancers, home-service
            professionals, warehouse workers, and the fleets and insurers
            around them. Pick the one that matches the money leaking this
            month.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <li
                key={category.id}
                className="rounded-2xl border border-line bg-card px-4 py-4"
              >
                <p className="font-serif text-xl">{category.label}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {category.line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line" aria-label="Service list">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <ServiceCatalog />
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14 md:px-8">
          <p className="max-w-xl font-serif text-3xl tracking-tight">
            {services.length} services. Tell us which one you want first.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-saffron px-5 py-3 text-sm text-white hover:bg-[#9a3412]"
          >
            Talk to Earnova
          </Link>
        </div>
      </section>
    </main>
  );
}
