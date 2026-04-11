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
    <section className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,253,249,0.86),rgba(247,238,228,0.8)_48%,rgba(240,225,209,0.88))] px-5 py-10 shadow-[var(--shadow-card)] backdrop-blur-xl sm:rounded-[2.8rem] sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.68),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(243,223,202,0.55),transparent_26%)]" />
      <div className="relative max-w-3xl">
        {eyebrow ? <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-deep)]">{eyebrow}</p> : null}
        <h1 className="font-serif text-[2.35rem] leading-[0.98] text-stone-950 sm:text-[3.8rem] lg:text-[4.6rem]">{title}</h1>
        <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.08rem] sm:leading-8">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="button-primary px-6 py-3.5 text-center text-sm font-medium">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="button-secondary px-6 py-3.5 text-center text-sm font-medium">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
