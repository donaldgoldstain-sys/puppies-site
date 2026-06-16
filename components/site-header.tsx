"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { site, telHref, whatsappUrl } from "@/lib/site";
import { WHATSAPP_ICON, PHONE_ICON } from "@/lib/header-icons";

const menu = [
  { href: "/", label: "Home" },
  { href: "/available-puppies", label: "Available Puppies" },
  { href: "/micro-pomeranian-puppies", label: "Micro Pomeranians" },
  { href: "/pomeranian-colors", label: "Colors" },
  { href: "/delivery", label: "Delivery" },
  { href: "/health-guarantee", label: "Health Guarantee" },
  { href: "/about", label: "About" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <button
          type="button"
          className={cn("hamburger", open && "is-open")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link href="/" className="brand" aria-label={`${site.name} — Home`} onClick={() => setOpen(false)}>
          <span className="title">TEACUP POMERANIAN</span>
          <span className="subtitle">Puppies</span>
        </Link>

        <div className="actions">
          <a
            className="icon-btn whatsapp"
            href={whatsappUrl("Hi, I'd like to ask about your available Pomeranian puppies.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={WHATSAPP_ICON} alt="WhatsApp" draggable={false} />
          </a>
          <a className="icon-btn phone" href={telHref()} aria-label="Call us">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHONE_ICON} alt="Call" draggable={false} />
          </a>
        </div>
      </div>

      <div className={cn("nav-drawer", open && "is-open")}>
        <div className="nav-drawer-inner">
          <nav aria-label="Primary">
            {menu.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
