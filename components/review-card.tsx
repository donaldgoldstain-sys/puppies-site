import { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,243,236,0.96))] p-6 shadow-[var(--shadow)]">
      <p className="mb-4 text-sm tracking-[0.24em] text-[var(--gold)]">{"★".repeat(review.rating)}</p>
      <h3 className="font-serif text-2xl text-stone-900">{review.title}</h3>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">“{review.quote}”</p>
      <div className="mt-6">
        <p className="font-medium text-stone-900">{review.name}</p>
        <p className="text-sm text-stone-500">{review.location}</p>
      </div>
    </article>
  );
}
