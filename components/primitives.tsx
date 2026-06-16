import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { PawIcon } from "@/components/icons";

export function PawDivider() {
  return (
    <div className="paw-divider" aria-hidden="true">
      <span className="line" />
      <PawIcon />
      <span className="line" />
    </div>
  );
}

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <Fragment key={`${item.label}-${index}`}>
          {index > 0 ? <span className="sep">/</span> : null}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}

type Cta = { href: string; label: string };

export function CtaRow({ primary, secondary }: { primary?: Cta; secondary?: Cta }) {
  if (!primary && !secondary) return null;
  return (
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
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  divider = true
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  primary?: Cta;
  secondary?: Cta;
  divider?: boolean;
}) {
  return (
    <section className="page-hero">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h1>{title}</h1>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
      <CtaRow primary={primary} secondary={secondary} />
      {divider ? <PawDivider /> : null}
    </section>
  );
}
