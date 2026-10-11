import type { Metadata } from "next";
import Link from "next/link";
import { records, tests } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Earnova starts with twenty delivery riders in one locality and a weekly net-earnings report, before any app is built.",
};

const steps = [
  {
    title: "Choose one locality",
    text: "Twenty delivery riders who already work the same streets. A small group is enough to see whether the numbers change a decision.",
  },
  {
    title: "Ask before recording",
    text: "Nothing is logged without consent. The records belong to the person whose week they describe.",
  },
  {
    title: "Keep the books plain",
    text: "Daily payouts, hours, kilometres, fuel, and other operating costs. No platform login is required to begin.",
  },
  {
    title: "Return with a weekly report",
    text: "Net earnings, and the biggest opportunities to improve them. If the report does not change a choice, it has not earned another week.",
  },
];

export default function ApproachPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs tracking-[0.2em] text-saffron uppercase">
            Approach
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl">
            Evidence first. An app only if the evidence holds.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            The preferred start is the take-home income work. We test it in the
            field before anyone is asked to download something.
          </p>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="steps-heading" className="font-serif text-4xl tracking-tight">
            The first month
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-line bg-card p-6">
                <p className="font-serif text-sm text-saffron">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-card" aria-labelledby="records-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
          <div>
            <h2 id="records-heading" className="font-serif text-4xl tracking-tight">
              What gets written down
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Enough to separate a payout from take-home pay. Waiting time and
              dead kilometres belong in the account even when a platform does
              not pay for them.
            </p>
          </div>
          <ul className="divide-y divide-line rounded-2xl border border-line bg-paper">
            {records.map((item) => (
              <li key={item} className="px-5 py-4 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="tests-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="tests-heading" className="max-w-2xl font-serif text-4xl tracking-tight">
            Three tests. Fail them and we stop or change direction.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tests.map((test) => (
              <article key={test.number} className="rounded-2xl bg-forest p-6 text-paper">
                <p className="text-xs tracking-[0.16em] text-[#9db5ab] uppercase">
                  {test.number}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{test.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d7e4de]">{test.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted">
            If those tests succeed, there is evidence for a product. If they
            fail, a plausible idea is not a reason to keep building. The same
            standard applies if we later test benefits work or group purchasing.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="max-w-3xl font-serif text-4xl tracking-tight sm:text-5xl">
            A serious problem is not, by itself, a market.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            We need a sustainable way to reach people, deliver something they
            use again, and get paid without making a hard week harder. Workers
            may not be the payer. Fleet operators, insurers, and institutions
            are in scope only when the worker still gains.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-saffron px-5 py-3 text-sm text-white hover:bg-[#c2410c]"
          >
            Propose a first locality
          </Link>
        </div>
      </section>
    </main>
  );
}
