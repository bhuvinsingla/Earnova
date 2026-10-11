import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Earnova about a delivery locality, a fleet, a benefits problem, or a recurring cost gig workers already pay.",
};

const reasons = [
  {
    title: "A locality of riders",
    text: "You know twenty delivery partners who would record a week of real costs.",
  },
  {
    title: "A fleet or insurer",
    text: "Take-home pay, accidents, or attrition already show up in your numbers.",
  },
  {
    title: "A stalled claim",
    text: "A worker is eligible for something and cannot get through the paperwork.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs tracking-[0.2em] text-saffron uppercase">
              Contact
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-tight">
              Bring a locality, a fleet, or a cost.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted">
              Write to {site.email}. Tell us who the workers are and what you
              want the first month to prove.
            </p>
            <ul className="mt-8 space-y-5">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <h2 className="font-serif text-xl">{reason.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted">{reason.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
