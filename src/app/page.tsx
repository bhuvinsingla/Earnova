import Image from "next/image";
import Link from "next/link";
import { CategoryIcon } from "@/components/Icons";
import { LedgerPreview } from "@/components/LedgerPreview";
import {
  audiences,
  marketStats,
  serviceCategories,
  services,
  tests,
} from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="ruled border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs tracking-[0.2em] text-saffron uppercase">
              A firm for gig work in India
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              What did the work actually pay?
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              Delivery partners, drivers, freelancers, home-service
              professionals, and warehouse workers power enormous platforms.
              Earnova helps them earn more, lose less, and keep more control —
              starting with a weekly account, not another app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-forest px-5 py-3 text-sm text-paper hover:bg-[#1c4a3d]"
              >
                See the services
              </Link>
              <Link
                href="/approach"
                className="rounded-full border border-ink/15 px-5 py-3 text-sm hover:border-ink/40"
              >
                How a pilot starts
              </Link>
            </div>
          </div>
          <LedgerPreview />
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1.4fr_0.8fr]">
          <figure className="group overflow-hidden rounded-3xl">
            <Image
              src="/earnova-street.jpg"
              alt="A delivery rider paused on a scooter along a lit evening street"
              width={1600}
              height={900}
              priority
              className="h-80 w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[28rem]"
            />
          </figure>
          <figure className="group overflow-hidden rounded-3xl">
            <Image
              src="/earnova-costs.jpg"
              alt="A notebook, a bottle of oil, a tape, and keys on a work table"
              width={1200}
              height={900}
              className="h-80 w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[28rem]"
            />
          </figure>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="market-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] text-muted uppercase">
              The market
            </p>
            <h2
              id="market-heading"
              className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl"
            >
              Scale and pressure are established. Willingness to pay is not.
            </h2>
          </div>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {marketStats.map((stat) => (
              <div key={stat.figure} className="bg-card px-6 py-8">
                <dt className="font-serif text-3xl tracking-tight sm:text-4xl">
                  {stat.figure}
                </dt>
                <dd className="mt-3 text-sm leading-6 text-ink">{stat.label}</dd>
                <dd className="mt-1 text-xs text-muted">{stat.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
            Research on Indian platform workers keeps returning to the same
            pressures: unstable income, fuel and operating costs, account
            deactivation, safety, and thin social protection. A nationwide
            survey reported in September 2026 also flagged extreme heat and
            gaps in safety training and insurance. Registration and welfare
            schemes are growing. Access to them is not automatic.
          </p>
        </div>
      </section>

      <section className="bg-forest text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs tracking-[0.2em] text-[#9db5ab] uppercase">
            The question worth asking
          </p>
          <p className="mt-4 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
            Can we help someone earn more, lose less, or gain control — and
            give them a strong reason to keep coming back?
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#d7e4de]">
            The useful question is not “what app can we build for gig workers?”
            A large group of people with a serious problem is not automatically
            a good market. We need a way to reach them, deliver value, and get
            paid without making their situation worse.
          </p>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.2em] text-muted uppercase">
                Services
              </p>
              <h2
                id="services-heading"
                className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl"
              >
                A menu for earning more, losing less, and staying in control.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm underline decoration-saffron underline-offset-4"
            >
              Open the full list
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <article
                key={category.id}
                className="group rounded-2xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,22,18,0.08)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-paper transition duration-300 group-hover:bg-saffron">
                    <CategoryIcon id={category.id} className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-2xl tracking-tight">
                    {category.label}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {category.line}
                </p>
                <ul className="mt-5 space-y-3">
                  {services
                    .filter((service) => service.category === category.id)
                    .map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services#${service.id}`}
                          className="group block"
                        >
                          <span className="font-medium group-hover:text-saffron">
                            {service.name}
                          </span>
                          <span className="mt-0.5 block text-sm leading-6 text-muted">
                            {service.outcome}
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="pilot-heading">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted uppercase">
              Where we begin
            </p>
            <h2
              id="pilot-heading"
              className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl"
            >
              Twenty riders. One locality. A weekly report.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              We would not build an app yet. With consent, we help delivery
              riders record payouts, hours, kilometres, fuel, and other costs.
              Each week they get their actual net earnings and the clearest
              chances to improve them.
            </p>
            <Link
              href="/approach"
              className="mt-6 inline-block text-sm underline decoration-saffron underline-offset-4"
            >
              The full method
            </Link>
          </div>
          <ol className="space-y-4">
            {tests.map((test) => (
              <li
                key={test.number}
                className="rounded-2xl border border-line bg-card p-5"
              >
                <p className="text-xs tracking-[0.16em] text-saffron uppercase">
                  Test {test.number}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{test.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{test.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="clients-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">
            Who it is for
          </p>
          <h2
            id="clients-heading"
            className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Workers first. Partners where the money already moves.
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full border border-line bg-card px-4 py-2 text-sm"
              >
                {audience}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted">
            Fleet operators, insurers, aggregators, and public institutions may
            be the ones who can pay — especially for benefits work, where
            government schemes are often free to the worker. That only holds if
            the service is useful to the person doing the work.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-saffron px-5 py-3 text-sm text-white hover:bg-[#c2410c]"
          >
            Talk about a locality or a fleet
          </Link>
        </div>
      </section>
    </main>
  );
}
