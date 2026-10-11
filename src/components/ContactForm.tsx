"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const roles = [
  "Delivery partner",
  "Driver",
  "Fleet operator",
  "Insurer or institution",
  "Other",
];

type Fields = {
  name: string;
  organisation: string;
  role: string;
  city: string;
  contact: string;
  message: string;
};

const empty: Fields = {
  name: "",
  organisation: "",
  role: roles[0],
  city: "",
  contact: "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (fields.name.trim().length < 2) {
      setError("Add your name so we know who to reply to.");
      return;
    }
    if (fields.contact.trim().length < 5) {
      setError("Add a phone number or email we can reach.");
      return;
    }
    if (fields.message.trim().length < 20) {
      setError("Tell us a little more — at least a sentence about the work.");
      return;
    }

    const body = [
      `Name: ${fields.name.trim()}`,
      `Organisation: ${fields.organisation.trim() || "—"}`,
      `Role: ${fields.role}`,
      `City: ${fields.city.trim() || "—"}`,
      `Contact: ${fields.contact.trim()}`,
      "",
      fields.message.trim(),
    ].join("\n");

    setDraft(body);
    const subject = encodeURIComponent(`Earnova enquiry from ${fields.name.trim()}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  if (draft) {
    return (
      <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
        <p className="text-xs tracking-[0.18em] text-saffron uppercase">
          Ready to send
        </p>
        <h2 className="mt-2 font-serif text-3xl tracking-tight">
          Your note is prepared.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Your email app should open addressed to {site.email}. If it does not,
          copy the note below and send it yourself.
        </p>
        <pre className="mt-6 overflow-x-auto rounded-xl bg-paper p-4 text-sm leading-6 whitespace-pre-wrap text-ink">
          {draft}
        </pre>
        <button
          type="button"
          className="mt-6 text-sm underline decoration-saffron underline-offset-4"
          onClick={() => setDraft("")}
        >
          Edit the note
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">Name</span>
          <input
            required
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Organisation, if any</span>
          <input
            value={fields.organisation}
            onChange={(event) => update("organisation", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">You are</span>
          <select
            value={fields.role}
            onChange={(event) => update("role", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3"
          >
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-muted">City or locality</span>
          <input
            value={fields.city}
            onChange={(event) => update("city", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-muted">Phone or email</span>
          <input
            required
            value={fields.contact}
            onChange={(event) => update("contact", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3"
            autoComplete="email"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-muted">What should we look at together?</span>
          <textarea
            required
            rows={5}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-3"
            placeholder="A locality, a fleet, a claim that stalled, or a cost workers keep paying."
          />
        </label>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-saffron" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 rounded-full bg-forest px-5 py-3 text-sm text-paper hover:bg-[#1c4a3d]"
      >
        Prepare the note
      </button>
    </form>
  );
}
