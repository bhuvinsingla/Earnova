const rows = [
  { label: "Gross platform payouts", amount: "8,420", sign: "" },
  { label: "Fuel", amount: "2,140", sign: "−" },
  { label: "Maintenance", amount: "480", sign: "−" },
  { label: "Mobile data", amount: "90", sign: "−" },
  { label: "Unpaid waiting, estimated", amount: "610", sign: "−" },
];

export function LedgerPreview() {
  return (
    <figure className="rounded-2xl border border-[#2a5648] bg-[#102e27] p-5 text-paper shadow-[0_24px_60px_rgba(20,22,18,0.18)] sm:p-7">
      <figcaption className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.18em] text-[#9db5ab] uppercase">
            Sample week
          </p>
          <p className="mt-1 font-serif text-2xl">One rider, one locality</p>
        </div>
        <p className="rounded-full border border-[#3d6b5c] px-3 py-1 text-[11px] tracking-wide text-[#d7e4de] uppercase">
          Illustrative
        </p>
      </figcaption>

      <div className="mt-6 space-y-3 border-t border-[#2a5648] pt-5 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4">
            <span className="text-[#d7e4de]">{row.label}</span>
            <span className="font-medium tabular-nums">
              {row.sign}₹{row.amount}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-end justify-between gap-4 border-t border-[#e07a4a] pt-4">
        <span className="text-sm text-[#d7e4de]">Net take-home</span>
        <span className="font-serif text-4xl tracking-tight tabular-nums">
          ₹5,100
        </span>
      </div>

      <p className="mt-5 rounded-xl bg-[#1b4338] px-4 py-3 text-sm leading-6 text-[#e7f2ec]">
        Biggest leak this week: idle hours between 2 and 5 pm cost more than
        the late-night incentive paid.
      </p>
      <p className="mt-4 text-xs leading-5 text-[#9db5ab]">
        Not a real rider’s books. This is the shape of the weekly report we
        would produce from consented records.
      </p>
    </figure>
  );
}
