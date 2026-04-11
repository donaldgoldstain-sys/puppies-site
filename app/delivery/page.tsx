import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pomeranian Puppy Delivery | Miami Beach and U.S. City Coordination",
  description: "Learn about Miami Beach pickup, Florida handoff planning, and tailored delivery coordination for major U.S. cities.",
  path: "/delivery"
});

export default function DeliveryPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow="Delivery" title="Pickup and delivery designed to feel clear, private, and well paced" description="Miami Beach is our main hub, with additional coordination available across Florida and select U.S. cities." />
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["Miami Beach pickup", "Private appointments can be coordinated from our Miami Beach hub for families who prefer an in-person handoff."],
          ["Florida delivery", "South Florida and statewide coordination are available depending on route, puppy timing, and family preference."],
          ["Out-of-state planning", "For cities such as Los Angeles, New York, Chicago, Atlanta, and Las Vegas, we help plan a safe and polished next step."]
        ].map(([title, body]) => (
          <article key={title} className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-7">
            <h2 className="font-serif text-2xl text-stone-900">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{body}</p>
          </article>
        ))}
      </div>
      <LeadForm buttonLabel="Ask About Delivery" description="Share your city and timeline so we can recommend the cleanest pickup or delivery path." />
    </div>
  );
}
