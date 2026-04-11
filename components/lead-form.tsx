type LeadFormProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  formName?: string;
};

const fieldClassName =
  "rounded-[1.2rem] border border-[var(--border)] bg-white/70 px-4 py-3.5 text-sm text-stone-900 outline-none backdrop-blur placeholder:text-stone-400 focus:border-[var(--border-strong)] focus:bg-white/88";

export function LeadForm({
  title = "Tell us what kind of companion you’re hoping for",
  description = "Share your ideal size, color, city, and timing. We’ll guide you toward the most fitting current or upcoming puppy.",
  buttonLabel = "Send Inquiry",
  formName = "puppy-inquiry"
}: LeadFormProps) {
  return (
    <div className="glass-panel rounded-[2rem] p-5 sm:p-8">
      <div className="mb-6 max-w-lg">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-deep)]">Private Inquiry</p>
        <h3 className="mt-3 font-serif text-[1.9rem] leading-tight text-stone-950 sm:text-[2.3rem]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-[0.98rem]">{description}</p>
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
        <input name="name" placeholder="Full name" className={fieldClassName} />
        <input name="phone" placeholder="Phone number" className={fieldClassName} />
        <input name="email" type="email" placeholder="Email address" className={fieldClassName} />
        <input name="city" placeholder="Preferred city" className={fieldClassName} />
        <input name="preferredColor" placeholder="Preferred color" className={fieldClassName} />
        <input name="preferredGender" placeholder="Preferred gender" className={fieldClassName} />
        <textarea
          name="message"
          placeholder="Tell us about the lifestyle, size, or temperament you have in mind"
          className={`${fieldClassName} min-h-32 md:col-span-2`}
        />
        <button type="submit" className="button-primary md:col-span-2 px-6 py-4 text-sm font-medium">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}
