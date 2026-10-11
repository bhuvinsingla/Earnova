import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <p className="text-xs tracking-[0.2em] text-saffron uppercase">404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">
        That page is not on the books.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-forest px-5 py-3 text-sm text-paper"
      >
        Back to Earnova
      </Link>
    </main>
  );
}
