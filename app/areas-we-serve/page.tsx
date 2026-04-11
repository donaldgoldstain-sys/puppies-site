import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Areas We Serve | Florida and Select U.S. Cities",
  description: "Browse our location pages for Miami Beach, Fort Lauderdale, Boca Raton, West Palm Beach, Tampa, Orlando, Jacksonville, Los Angeles, New York, Chicago, Atlanta, and Las Vegas.",
  path: "/areas-we-serve"
});

export default function AreasWeServePage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow="Areas We Serve" title="Cities we currently serve with tailored local guidance" description="Each location page is written with its own tone, lifestyle context, and appointment framing so families feel seen where they are." />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {site.locations.map((location) => (
          <Link
            key={`${location.stateSlug}-${location.citySlug}`}
            href={`/locations/${location.stateSlug}/${location.citySlug}`}
            className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-7 transition hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">{location.state}</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-900">{location.city}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{location.intro}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
