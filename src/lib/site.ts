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

export const serviceCategories = [
  {
    id: "earn",
    label: "Earn more",
    line: "Keep more of what the shift already paid.",
  },
  {
    id: "save",
    label: "Lose less",
    line: "Name the costs that quietly eat a payout.",
  },
  {
    id: "control",
    label: "Stay in control",
    line: "Benefits, papers, claims, and an account that stays open.",
  },
  {
    id: "partners",
    label: "For fleets and partners",
    line: "The same picture, funded by whoever already carries the cost.",
  },
] as const;

export const services = [
  {
    id: "take-home",
    category: "earn",
    name: "Weekly take-home report",
    outcome: "See what the week actually left in hand.",
    detail:
      "Payouts, fuel, maintenance, waiting time, and incentives become one net figure a rider can use on Monday.",
    forWhom: "Delivery partners and drivers",
    featured: true,
  },
  {
    id: "hours-places",
    category: "earn",
    name: "Best hours and places",
    outcome: "Work the shifts that pay you, and skip the ones that only look busy.",
    detail:
      "Your own hours and localities, compared week to week, so the next roster follows the money.",
    forWhom: "Riders and drivers",
    featured: false,
  },
  {
    id: "platform-mix",
    category: "earn",
    name: "Platform mix",
    outcome: "Know which apps, together, left more money after costs.",
    detail:
      "Swiggy, Zomato, Uber, Rapido, and the rest, scored on take-home pay rather than on order count.",
    forWhom: "Anyone on more than one app",
    featured: false,
  },
  {
    id: "incentive-check",
    category: "earn",
    name: "Incentive check",
    outcome: "Tell a bonus that survives the shift from one that disappears into fuel.",
    detail:
      "We put the incentive next to the kilometres, waiting, and extra hours it actually required.",
    forWhom: "Riders chasing targets",
    featured: false,
  },
  {
    id: "cost-audit",
    category: "save",
    name: "Running-cost audit",
    outcome: "See fuel, repairs, data, and dead kilometres in rupees.",
    detail:
      "A plain list of what left the pocket, so the biggest leak is obvious before the next refill.",
    forWhom: "Anyone who pays to stay on the road",
    featured: false,
  },
  {
    id: "buying-circle",
    category: "save",
    name: "Worker buying circle",
    outcome: "Pay less for the things you already buy every month.",
    detail:
      "Tyres, engine oil, repairs, mobile data, and protective gear, priced for a group that purchases them again and again.",
    forWhom: "Riders, drivers, and small fleets",
    featured: true,
  },
  {
    id: "idle-time",
    category: "save",
    name: "Idle-time review",
    outcome: "Count the waiting nobody pays for.",
    detail:
      "Hours between orders and empty kilometres, turned into a number you can act on the following week.",
    forWhom: "Delivery partners and drivers",
    featured: false,
  },
  {
    id: "benefits-desk",
    category: "control",
    name: "Benefits desk",
    outcome: "Find the schemes you can actually qualify for.",
    detail:
      "Registration, eligibility, and the welfare routes that apply to your work, followed until something is in motion.",
    forWhom: "Gig workers and their families",
    featured: false,
  },
  {
    id: "papers",
    category: "control",
    name: "Papers in order",
    outcome: "Have the documents ready before a scheme or insurer asks.",
    detail:
      "The papers that stall a benefit or a claim, collected once and kept where you can reach them.",
    forWhom: "Workers starting a registration or a claim",
    featured: false,
  },
  {
    id: "claims",
    category: "control",
    name: "Claims that close",
    outcome: "Take an accident or a missing payout through to an outcome.",
    detail:
      "Insurance claims and payout disputes, handled until they are paid, refused with a reason, or clearly stuck.",
    forWhom: "Workers, fleets, and insurers",
    featured: true,
  },
  {
    id: "account-appeal",
    category: "control",
    name: "Account appeal support",
    outcome: "When an app switches you off, build the case to get back on.",
    detail:
      "What happened, what the platform asked for, and a clear appeal. We prepare the case. We do not promise the app will restore the account.",
    forWhom: "Partners facing deactivation",
    featured: false,
  },
  {
    id: "cover-check",
    category: "control",
    name: "Cover and safety check",
    outcome: "Know whether insurance and basic safety cover are actually in place.",
    detail:
      "Heat, training gaps, and missing insurance, checked against the work you do so the hole is visible before an accident.",
    forWhom: "Riders, drivers, and warehouse workers",
    featured: false,
  },
  {
    id: "fleet-brief",
    category: "partners",
    name: "Fleet earnings brief",
    outcome: "See a whole locality the way each rider sees payday.",
    detail:
      "Net earnings across a fleet or a zone, so operators spot the shifts and costs that push people out.",
    forWhom: "Fleet operators",
    featured: true,
  },
  {
    id: "partner-claims",
    category: "partners",
    name: "Partner claims desk",
    outcome: "Give your riders a claims path someone is paid to finish.",
    detail:
      "A desk fleets, insurers, and institutions can fund, because the worker receives the benefit or the payout.",
    forWhom: "Fleets, insurers, and institutions",
    featured: false,
  },
  {
    id: "retention",
    category: "partners",
    name: "Retention picture",
    outcome: "See which earnings leaks show up as people leaving.",
    detail:
      "Fuel, idle time, weak incentives, and unpaid repairs, set beside who stopped logging in.",
    forWhom: "Fleet operators and aggregators",
    featured: false,
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
