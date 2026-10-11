"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { CategoryIcon } from "@/components/Icons";
import { serviceCategories, services } from "@/lib/site";

type Filter = "all" | (typeof serviceCategories)[number]["id"];

export function ServiceCatalog() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? services
        : services.filter((service) => service.category === filter),
    [filter],
  );

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Service groups"
      >
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={`All ${services.length}`}
        />
        {serviceCategories.map((category) => {
          const count = services.filter(
            (service) => service.category === category.id,
          ).length;
          return (
            <FilterButton
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
              label={`${category.label} ${count}`}
              icon={<CategoryIcon id={category.id} className="h-4 w-4" />}
            />
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((service) => {
          const category = serviceCategories.find(
            (item) => item.id === service.category,
          );
          return (
            <article
              key={service.id}
              id={service.id}
              className={`group flex scroll-mt-28 flex-col rounded-2xl border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,22,18,0.08)] sm:p-7 ${
                service.featured ? "border-saffron" : "border-line"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-xs tracking-[0.16em] text-muted uppercase">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3efe6] text-forest transition duration-300 group-hover:bg-forest group-hover:text-paper">
                    <CategoryIcon id={service.category} className="h-4 w-4" />
                  </span>
                  {category?.label}
                </p>
                {service.featured ? (
                  <p className="rounded-full bg-[#fde8df] px-3 py-1 text-[11px] tracking-wide text-saffron uppercase">
                    Often requested
                  </p>
                ) : null}
              </div>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight">
                {service.name}
              </h2>
              <p className="mt-3 font-serif text-xl leading-snug text-ink">
                {service.outcome}
              </p>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {service.detail}
              </p>
              <p className="mt-5 text-xs tracking-wide text-forest uppercase">
                {service.forWhom}
              </p>
              <Link
                href={`/contact?service=${service.id}`}
                className="mt-5 inline-flex w-fit rounded-full bg-forest px-4 py-2 text-sm text-paper hover:bg-[#1c4a3d]"
              >
                Request this
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm transition duration-200 ${
        active
          ? "bg-forest text-paper"
          : "border border-line bg-card text-ink hover:-translate-y-0.5 hover:border-ink/30"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
