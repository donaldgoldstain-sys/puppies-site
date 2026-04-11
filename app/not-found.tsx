import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[2.5rem] border border-[var(--border)] bg-white/92 px-6 py-16 text-center shadow-[var(--shadow)]">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">Page Not Found</p>
      <h1 className="mt-4 font-serif text-4xl text-stone-900">That puppy page wandered off.</h1>
      <p className="mt-4 max-w-xl text-sm leading-8 text-[var(--muted)]">
        Try browsing our available puppies, color pages, or city landing pages to find the right match.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/available-puppies" className="rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white">
          View Available Puppies
        </Link>
        <Link href="/areas-we-serve" className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-stone-900">
          Explore Areas We Serve
        </Link>
      </div>
    </div>
  );
}
