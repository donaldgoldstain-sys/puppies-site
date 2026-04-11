import { FAQ } from "@/lib/types";

export function FAQList({ items }: { items: FAQ[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-[1.7rem] border border-[var(--border)] bg-white/90 p-5 shadow-[0_20px_60px_-48px_rgba(57,42,31,0.5)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-stone-900">
            <span>{item.question}</span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-500 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
