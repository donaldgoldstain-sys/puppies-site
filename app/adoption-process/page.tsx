import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Adoption Process | A Refined Pomeranian Placement Experience",
  description: "Learn how our placement process works from first inquiry to reservation, pickup, and delivery planning.",
  path: "/adoption-process"
});

export default function AdoptionProcessPage() {
  const steps = [
    "Begin with your preferred city, size range, color direction, and the personality you want at home.",
    "Review the most relevant available puppies or upcoming options with clear details and honest guidance.",
    "Reserve once the fit feels right and the next steps around timing, records, and care are fully clear.",
    "Coordinate pickup or delivery with support designed to keep the transition calm, organized, and personal."
  ];

  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow="Adoption Process" title="A calm, polished process from first message to homecoming" description="We keep the path simple and supportive so families feel guided rather than rushed." />
      <div className="grid gap-5 md:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step} className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-8">
            <p className="font-serif text-4xl text-stone-900">0{index + 1}</p>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{step}</p>
          </div>
        ))}
      </div>
      <LeadForm buttonLabel="Start the Process" description="If you already know the city or puppy style you want, include that and we’ll make the first reply more tailored." />
    </div>
  );
}
