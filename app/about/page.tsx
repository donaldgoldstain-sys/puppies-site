import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us | A Boutique Teacup Pomeranian Brand",
  description: "Learn about our boutique approach to teacup and micro Pomeranian placements, centered in Miami Beach and designed to feel warm and refined.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow="About" title="A boutique companion puppy brand with a warmer, more curated point of view" description="Our approach blends polished presentation with practical support so families feel confident, informed, and genuinely cared for." />
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-8">
          <h2 className="font-serif text-2xl text-stone-900">Our point of view</h2>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            We believe premium should feel soft, reassuring, and beautifully edited. White is shown first in the collection, but the overall brand is built to showcase a naturally balanced range of companion puppies.
          </p>
        </article>
        <article className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-8">
          <h2 className="font-serif text-2xl text-stone-900">How we support families</h2>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            Every page is designed to make the next step clearer, whether a family is local to Miami Beach or planning from Los Angeles, New York, Chicago, Atlanta, or Las Vegas.
          </p>
        </article>
      </div>
    </div>
  );
}
