import { Route } from "next";
import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: Route;
  primaryLabel?: string;
  secondaryHref?: Route;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/available-puppies",
  primaryLabel = "See Available Puppies",
  secondaryHref = "/contact",
  secondaryLabel = "Request Information"
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,239,229,0.96))] px-5 py-10 shadow-[var(--shadow)] sm:rounded-[2.75rem] sm:bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(247,239,229,0.92)_48%,rgba(234,224,212,0.94))] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85),transparent_68%)] lg:block" />
      <div className="absolute -left-12 bottom-6 hidden h-32 w-32 rounded-full bg-white/50 blur-3xl sm:block" />
      <div className="relative max-w-3xl">
        {eyebrow ? <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[var(--gold)]">{eyebrow}</p> : null}
        <h1 className="font-serif text-3xl leading-[1.05] text-stone-900 sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="rounded-full bg-stone-950 px-6 py-3.5 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-800">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="rounded-full border border-[var(--border)] bg-white/90 px-6 py-3.5 text-center text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:border-stone-900">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
