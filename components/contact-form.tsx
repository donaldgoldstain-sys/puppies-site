"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

// Inquiry form. The live site is hosted on Cloudflare Pages, where Netlify
// Forms do not run, so submissions are routed to the business WhatsApp instead
// (the site's primary contact channel) — fully static, no backend required.
// Fields degrade gracefully: with JS off, the form GETs to wa.me and still
// opens a chat; with JS on, it composes a formatted message from the fields.
const fields: { name: string; label: string; type?: string; full?: boolean }[] = [
  { name: "name", label: "Full name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "city", label: "Preferred city", type: "text" },
  { name: "preferredColor", label: "Preferred color", type: "text" },
  { name: "preferredGender", label: "Preferred gender", type: "text" }
];

export function ContactForm({
  eyebrow = "Private Inquiry",
  title = "Tell us what kind of companion you're hoping for",
  description = "Share your ideal size, color, city, and timing. We'll guide you toward the most fitting current or upcoming puppy.",
  buttonLabel = "Send Inquiry",
  formName = "puppy-inquiry"
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  formName?: string;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines: string[] = [`New inquiry (${formName})`];
    const labels: Record<string, string> = {
      name: "Name",
      email: "Email",
      phone: "Phone",
      city: "Preferred city",
      preferredColor: "Preferred color",
      preferredGender: "Preferred gender",
      message: "Message"
    };
    for (const key of ["name", "email", "phone", "city", "preferredColor", "preferredGender", "message"]) {
      const value = (data.get(key) as string | null)?.trim();
      if (value) lines.push(`${labels[key]}: ${value}`);
    }
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="block form-block">
      <div className="block-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p style={{ marginBottom: 22, maxWidth: 560 }}>{description}</p>
      <form
        className="form"
        name={formName}
        method="get"
        action={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onSubmit={handleSubmit}
      >
        <div className="form-row split">
          {fields.slice(0, 2).map((f) => (
            <div className="form-row" key={f.name}>
              <label htmlFor={`${formName}-${f.name}`}>{f.label}</label>
              <input id={`${formName}-${f.name}`} name={f.name} type={f.type} />
            </div>
          ))}
        </div>
        <div className="form-row split">
          {fields.slice(2, 4).map((f) => (
            <div className="form-row" key={f.name}>
              <label htmlFor={`${formName}-${f.name}`}>{f.label}</label>
              <input id={`${formName}-${f.name}`} name={f.name} type={f.type} />
            </div>
          ))}
        </div>
        <div className="form-row split">
          {fields.slice(4, 6).map((f) => (
            <div className="form-row" key={f.name}>
              <label htmlFor={`${formName}-${f.name}`}>{f.label}</label>
              <input id={`${formName}-${f.name}`} name={f.name} type={f.type} />
            </div>
          ))}
        </div>
        <div className="form-row">
          <label htmlFor={`${formName}-message`}>Message</label>
          <textarea
            id={`${formName}-message`}
            name="message"
            placeholder="Tell us about the lifestyle, size, or temperament you have in mind"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          {buttonLabel}
        </button>
        {sent ? (
          <p className="form-note" role="status">
            Opening WhatsApp with your details — if it didn&apos;t open, message us directly and we&apos;ll reply quickly.
          </p>
        ) : null}
      </form>
    </section>
  );
}
