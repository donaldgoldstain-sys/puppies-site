import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { PuppyCard } from "@/components/puppy-card";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Micro Pomeranian Puppies | Petite, Premium Companion Puppies",
  description: "Explore our smallest micro Pomeranian puppies with polished profiles, premium care details, and curated availability.",
  path: "/micro-pomeranian-puppies"
});

export default function MicroPomeranianPage() {
  const tinyPuppies = site.puppies.filter((puppy) => puppy.expectedAdultSize.includes("4") || puppy.expectedAdultSize.includes("3.5"));

  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="Micro Pomeranians"
        title="Our smallest companion puppies, presented with more intention"
        description="Micro puppies are limited, highly requested, and best approached with realistic expectations around size, temperament, and timing."
      />
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white/90 p-8">
          <h2 className="font-serif text-3xl text-stone-900">What defines the micro collection</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>These puppies are selected for petite expected adult size, polished presentation, and a companion-first temperament.</p>
            <p>They are often ideal for families who want a highly portable, carefully matched puppy for condo, apartment, or travel-oriented routines.</p>
            <p>Because the smallest puppies reserve quickly, inquiries that include timing and flexibility tend to move most smoothly.</p>
          </div>
        </div>
        <LeadForm buttonLabel="Find a Similar Puppy" title="Tell us about your ideal micro puppy" description="We can help you narrow by city, color, size range, and the personality style you want at home." />
      </section>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {tinyPuppies.map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
      </div>
    </div>
  );
}
