type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[var(--gold)]">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-stone-900 sm:text-4xl lg:text-[2.8rem]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
