import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, ShieldCheckIcon, PlaneIcon, PinIcon, HeartIcon } from "@/components/icons";

type Cta = { href: string; label: string };

/* ---------- text-section ---------- */
export function TextSection({
  eyebrow,
  title,
  paragraphs,
  narrow = false,
  children
}: {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  narrow?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={cn("block", narrow && "block-text-narrow")}>
      {eyebrow ? <div className="block-eyebrow">{eyebrow}</div> : null}
      {title ? <h2>{title}</h2> : null}
      {paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {children}
    </section>
  );
}

/* ---------- image-text ---------- */
export function ImageTextSection({
  title,
  paragraphs,
  reverse = false,
  glyph,
  image
}: {
  title: string;
  paragraphs: string[];
  reverse?: boolean;
  glyph?: ReactNode;
  image?: { src: string; alt: string };
}) {
  return (
    <section className={cn("image-text", reverse && "reverse")}>
      <div className="img" role="img" aria-label={image?.alt ?? title}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image.src} alt={image.alt} />
        ) : glyph ? (
          <span className="glyph">{glyph}</span>
        ) : null}
      </div>
      <div className="body">
        <h2>{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

/* ---------- icon-cards ---------- */
export type IconCardItem = { icon: ReactNode; title: string; desc: string };

export function IconCards({ items }: { items: IconCardItem[] }) {
  return (
    <section className="icon-cards">
      {items.map((item) => (
        <div className="icon-card" key={item.title}>
          <div className="ic-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

/* ---------- checklist ---------- */
export function Checklist({
  eyebrow,
  title,
  items
}: {
  eyebrow?: string;
  title?: string;
  items: string[];
}) {
  return (
    <section className="block checklist-block">
      {eyebrow ? <div className="block-eyebrow">{eyebrow}</div> : null}
      {title ? <h2>{title}</h2> : null}
      <ul className="checklist">
        {items.map((item) => (
          <li key={item}>
            <span className="check">
              <CheckIcon />
            </span>
            <span className="text">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- faq-accordion ---------- */
export function FaqAccordion({
  eyebrow,
  title,
  items
}: {
  eyebrow?: string;
  title?: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="block faq-block">
      {eyebrow ? <div className="block-eyebrow">{eyebrow}</div> : null}
      {title ? <h2>{title}</h2> : null}
      <div className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <div className="answer">{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------- cta-panel ---------- */
export function CtaPanel({
  eyebrow,
  title,
  text,
  primary,
  secondary
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  primary?: Cta;
  secondary?: Cta;
}) {
  return (
    <section className="cta-panel">
      {eyebrow ? <div className="block-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
      <div className="cta-row">
        {primary ? (
          <Link className="btn btn-primary" href={primary.href}>
            {primary.label}
          </Link>
        ) : null}
        {secondary ? (
          <Link className="btn btn-outline" href={secondary.href}>
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}

/* ---------- info-cards ---------- */
export type InfoCardItem = { icon: ReactNode; label: string; value: ReactNode; href?: string };

export function InfoCards({ items }: { items: InfoCardItem[] }) {
  return (
    <div className="info-cards">
      {items.map((item, i) => (
        <div className="info-card" key={i}>
          <div className="ic-icon">{item.icon}</div>
          <div className="label">{item.label}</div>
          {item.href ? (
            <a className="value" href={item.href}>
              {item.value}
            </a>
          ) : (
            <div className="value">{item.value}</div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- trust strip ---------- */
const defaultTrust: IconCardItem[] = [
  { icon: <ShieldCheckIcon />, title: "Vet Checked", desc: "Every puppy comes with age-appropriate care notes and health records." },
  { icon: <PlaneIcon />, title: "Safe Delivery", desc: "Private pickup, flight nanny, and ground delivery coordinated nationwide." },
  { icon: <PinIcon />, title: "Miami Based", desc: "Private appointments available from our Miami Beach hub." },
  { icon: <HeartIcon />, title: "Lifetime Support", desc: "Thoughtful guidance from first inquiry through homecoming and beyond." }
];

export function TrustStrip({ items = defaultTrust }: { items?: IconCardItem[] }) {
  return (
    <section className="trust">
      <div className="trust-grid">
        {items.map((item) => (
          <div className="trust-item" key={item.title}>
            <div className="trust-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- review card ---------- */
export function ReviewCard({
  review
}: {
  review: { name: string; location: string; title: string; quote: string; rating: number };
}) {
  return (
    <article className="review-card">
      <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
        {"★".repeat(review.rating)}
      </div>
      <h3>{review.title}</h3>
      <p className="quote">“{review.quote}”</p>
      <p className="who">{review.name}</p>
      <p className="where">{review.location}</p>
    </article>
  );
}
