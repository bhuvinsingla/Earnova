export const site = {
  name: "Earnova",
  email: "hello@earnova.example",
  description:
    "Earnova helps delivery partners, drivers, and other gig workers in India see what they actually take home — and keep more of it.",
};

export const marketStats = [
  {
    figure: "7.7 million",
    label: "Gig workers in 2020–21",
    detail: "Economic Survey 2025–26",
  },
  {
    figure: "23.5 million",
    label: "Projected by 2029–30",
    detail: "Same survey, if the trend holds",
  },
  {
    figure: "Nearly 40%",
    label: "Earn under ₹15,000 a month",
    detail: "2026 Economic Survey reporting",
  },
] as const;

export const audiences = [
  "Delivery partners on Swiggy and Zomato",
  "Drivers on Uber and Rapido",
  "Freelance workers",
  "Home-service professionals",
  "Warehouse gig workers",
] as const;

export const services = [
  {
    id: "income",
    number: "01",
    name: "Take-home income optimizer",
    preferred: true,
    summary:
      "A weekly account of what a rider or driver actually kept, after fuel, maintenance, waiting time, and incentives.",
    question: "How much did I actually earn today?",
    why: "The worker already cares about this number. Gross payouts hide the costs that decide whether a shift was worth it.",
    risk: "Platform data is hard to reach, and it is not obvious that workers will pay for a report.",
    does: [
      "Record daily payouts, hours, kilometres, fuel, and other operating costs — with consent.",
      "Show net earnings for the week, not the platform’s gross figure.",
      "Point to the hours, places, and platform mix that improved or hurt take-home pay, using that person’s own data.",
    ],
  },
  {
    id: "benefits",
    number: "02",
    name: "Benefits and claims service",
    preferred: false,
    summary:
      "Help with eligibility, documents, welfare schemes, accident insurance, and payout disputes.",
    question: "Did this actually get resolved?",
    why: "The value is a completed claim or a benefit that arrives, not a list of schemes on a screen.",
    risk: "Rules differ by state and scheme. Many public schemes are free, so the payer may need to be an employer, aggregator, insurer, or institution.",
    does: [
      "Work out which registrations and schemes a worker may qualify for.",
      "Keep the documents those schemes actually ask for.",
      "Follow accident-insurance and payout-dispute claims through to an outcome.",
    ],
  },
  {
    id: "purchasing",
    number: "03",
    name: "Worker purchasing network",
    preferred: false,
    summary:
      "Pooled buying for tyres, engine oil, repairs, mobile data, protective gear, and vehicle maintenance.",
    question: "Is this cheaper every time I need it?",
    why: "Savings are tangible and they repeat. More members can mean better prices, if suppliers offer real volume discounts.",
    risk: "Garages, dealers, and existing discount schemes may already cover this. Group buying by itself is not a defensible business.",
    does: [
      "Aggregate demand for costs workers already pay.",
      "Negotiate with suppliers who will put a lower price in writing.",
      "Stay with purchases that recur, so the saving shows up again next month.",
    ],
  },
] as const;

export const tests = [
  {
    number: "01",
    title: "A real loss",
    text: "Can we help them identify a loss they can measure — fuel, idle time, a weak incentive, a repair — not a vague suggestion?",
  },
  {
    number: "02",
    title: "A reason to return",
    text: "Do they come back the next week because the report changed a decision about hours, place, or platform?",
  },
  {
    number: "03",
    title: "Someone who pays",
    text: "Will a worker, fleet operator, insurer, or another legitimate partner pay for the service?",
  },
] as const;

export const records = [
  "Daily payouts",
  "Hours worked",
  "Kilometres travelled",
  "Fuel",
  "Other operating expenses",
] as const;
