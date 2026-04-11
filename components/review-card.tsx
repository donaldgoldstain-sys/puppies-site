import { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="section-card p-6 sm:p-7">
      <p className="mb-4 text-sm tracking-[0.24em] text-[var(--accent-deep)]">{"★".repeat(review.rating)}</p>
      <h3 className="font-serif text-2xl text-stone-950">{review.title}</h3>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">“{review.quote}”</p>
      <div className="mt-6">
        <p className="font-medium text-stone-950">{review.name}</p>
        <p className="text-sm text-[var(--muted-soft)]">{review.location}</p>
      </div>
    </article>
  );
}
