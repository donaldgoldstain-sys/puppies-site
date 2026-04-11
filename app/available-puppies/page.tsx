import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { PuppyCard } from "@/components/puppy-card";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Available Teacup Pomeranian Puppies | Curated Current Listings",
  description: "Browse current teacup and micro Pomeranian puppies with refined profiles, premium presentation, and city-based availability.",
  path: "/available-puppies"
});

export default function AvailablePuppiesPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero
        eyebrow="Available Puppies"
        title="Browse our current companion puppy collection"
        description="Each listing is designed to feel clear and complete, with polished details on size, color, temperament, location, and availability."
      />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {site.puppies.map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
      </div>
      <LeadForm buttonLabel="Ask About Availability" description="Tell us which listing caught your eye or describe the overall look and personality you want." />
    </div>
  );
}
