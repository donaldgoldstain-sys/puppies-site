type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-deep)]">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-[2rem] leading-[1.02] text-stone-950 sm:text-[2.6rem] lg:text-[3.1rem]">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--muted)] sm:text-[1.05rem] sm:leading-8">{description}</p> : null}
    </div>
  );
}
