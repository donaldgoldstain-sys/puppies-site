type LeadFormProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  formName?: string;
};

export function LeadForm({
  title = "Tell us what kind of companion you’re hoping for",
  description = "Share your ideal size, color, city, and timing. We’ll guide you toward the most fitting current or upcoming puppy.",
  buttonLabel = "Send Inquiry",
  formName = "puppy-inquiry"
}: LeadFormProps) {
  return (
    <div className="rounded-[2.2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,243,236,0.96))] p-5 shadow-[var(--shadow)] sm:p-8">
      <div className="mb-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[var(--gold)]">Private Inquiry</p>
        <h3 className="mt-3 font-serif text-2xl text-stone-900 sm:text-[2rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
      </div>
      <form
        name={formName}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="grid gap-4 md:grid-cols-2"
      >
        <input type="hidden" name="form-name" value={formName} />
        <input type="hidden" name="bot-field" />
        <input name="name" placeholder="Full name" className="rounded-2xl border border-[var(--border)] bg-white/95 px-4 py-3.5 text-sm outline-none placeholder:text-stone-400 focus:border-stone-900" />
        <input name="phone" placeholder="Phone number" className="rounded-2xl border border-[var(--border)] bg-white/95 px-4 py-3.5 text-sm outline-none placeholder:text-stone-400 focus:border-stone-900" />
        <input name="email" type="email" placeholder="Email address" className="rounded-2xl border border-[var(--border)] bg-white/95 px-4 py-3.5 text-sm outline-none placeholder:text-stone-400 focus:border-stone-900" />
        <input name="city" placeholder="Preferred city" className="rounded-2xl border border-[var(--border)] bg-white/95 px-4 py-3.5 text-sm outline-none placeholder:text-stone-400 focus:border-stone-900" />
        <input name="preferredColor" placeholder="Preferred color" className="rounded-2xl border border-[var(--border)] bg-white/95 px-4 py-3.5 text-sm outline-none placeholder:text-stone-400 focus:border-stone-900" />
        <input name="preferredGender" placeholder="Preferred gender" className="rounded-2xl border border-[var(--border)] bg-white/95 px-4 py-3.5 text-sm outline-none placeholder:text-stone-400 focus:border-stone-900" />
        <textarea
          name="message"
          placeholder="Tell us about the lifestyle, size, or temperament you have in mind"
          className="min-h-32 rounded-2xl border border-[var(--border)] bg-white/95 px-4 py-3.5 text-sm outline-none placeholder:text-stone-400 focus:border-stone-900 md:col-span-2"
        />
        <button
          type="submit"
          className="rounded-full bg-stone-950 px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-800 md:col-span-2"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}
