import { FAQ } from "@/lib/types";

export function FAQList({ items }: { items: FAQ[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="section-card group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-stone-950">
            <span>{item.question}</span>
            <span className="rounded-full border border-[var(--border)] bg-white/65 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[var(--muted-soft)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
