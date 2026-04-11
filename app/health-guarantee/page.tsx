import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Health Guarantee | Premium Pomeranian Puppy Care",
  description: "Review our health-focused commitment, care standards, records, and transition support for companion puppy placements.",
  path: "/health-guarantee"
});

export default function HealthGuaranteePage() {
  return (
    <div className="space-y-10 pb-10">
      <PageHero eyebrow="Health Guarantee" title="Health-focused placement with clear records and thoughtful transition support" description="We believe premium presentation should be matched by practical clarity around care, documentation, and homecoming preparation." />
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ["Veterinary attention", "Every puppy profile is supported by age-appropriate care notes and health-focused details before placement."],
          ["Records included", "Families receive relevant vaccination timing, routine guidance, and transition notes so the first days at home feel less uncertain."],
          ["Support beyond the listing", "Questions around pickup, travel, feeding, and settling in are part of the experience, not an afterthought."]
        ].map(([title, body]) => (
          <article key={title} className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-7">
            <h2 className="font-serif text-2xl text-stone-900">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
