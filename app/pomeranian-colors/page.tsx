import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Pomeranian Colors | White First, Beautifully Balanced",
  description: "Discover our Pomeranian color collection with premium descriptions, white listed first, and balanced presentation across the full range.",
  path: "/pomeranian-colors"
});

export default function PomeranianColorsPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="Pomeranian Colors"
        title="Explore the collection by color, mood, and overall feel"
        description="White appears first across the collection, while the rest of the palette is presented naturally for families who want a different look."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {site.colors.map((color) => (
          <Link
            key={color.slug}
            href={`/colors/${color.slug}`}
            className={`rounded-[2rem] border border-[var(--border)] bg-gradient-to-br ${color.accentClass} p-7 transition hover:-translate-y-1`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">{color.shortName}</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-900">{color.name}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{color.pageDescription}</p>
            <p className="mt-4 text-sm font-medium text-stone-900">{color.rarity}</p>
          </Link>
        ))}
      </div>
      <LeadForm buttonLabel="Ask About Color Availability" description="If a specific color is not currently listed, we can recommend similar available puppies or note your preference for upcoming placements." />
    </div>
  );
}
