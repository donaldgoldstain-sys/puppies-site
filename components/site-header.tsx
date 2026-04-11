"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const desktopNav = site.nav.filter((item) => ["/available-puppies", "/micro-pomeranian-puppies", "/delivery", "/reviews", "/contact"].includes(item.href));

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="shell">
        <div className="glass-panel rounded-[1.75rem] px-4 py-3 sm:px-5 lg:rounded-[2rem] lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/55 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-stone-700 shadow-[0_10px_30px_-18px_rgba(63,41,25,0.45)]">
                  TP
                </div>
                <div className="min-w-0">
                  <p className="truncate font-serif text-[1.05rem] text-stone-950 sm:text-[1.25rem]">Teacup Pomeranian Puppies</p>
                  <p className="hidden truncate text-[0.66rem] uppercase tracking-[0.28em] text-[var(--muted-soft)] sm:block">
                    Miami Beach private puppy concierge
                  </p>
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {desktopNav.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-stone-700 transition hover:text-stone-950">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`} className="text-sm text-[var(--muted)] transition hover:text-stone-950">
                {site.phone}
              </a>
              <Link href="/contact" className="button-primary px-5 py-3 text-sm font-medium">
                Start Inquiry
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/65 text-stone-800 backdrop-blur lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <span className="relative block h-4 w-4">
                <span className={cn("absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition-all duration-200", open && "top-[7px] rotate-45")} />
                <span className={cn("absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition-all duration-200", open && "opacity-0")} />
                <span className={cn("absolute left-0 top-[14px] h-0.5 w-4 rounded-full bg-current transition-all duration-200", open && "top-[7px] -rotate-45")} />
              </span>
            </button>
          </div>

          <div
            className={cn(
              "grid overflow-hidden transition-all duration-300 lg:hidden",
              open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
            )}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="rounded-[1.6rem] border border-white/50 bg-white/55 p-3 shadow-[0_22px_60px_-38px_rgba(73,51,34,0.35)] backdrop-blur-xl">
                <div className="mb-3 flex items-center justify-between gap-3 rounded-[1.25rem] border border-[var(--border)] bg-[rgba(255,250,246,0.76)] px-4 py-3">
                  <div>
                    <p className="text-[0.63rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-deep)]">Private Concierge</p>
                    <p className="mt-1 text-sm text-stone-900">Soft guidance from inquiry to pickup or delivery.</p>
                  </div>
                </div>

                <nav className="grid gap-2">
                  {site.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-[1.15rem] px-4 py-3 text-sm text-stone-800 transition hover:bg-white/65"
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--muted-soft)]">View</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <a
                    href={`tel:${site.phone.replace(/[^\d]/g, "")}`}
                    className="button-secondary px-4 py-3 text-center text-sm font-medium"
                  >
                    {site.phone}
                  </a>
                  <Link href="/contact" onClick={() => setOpen(false)} className="button-primary px-4 py-3 text-center text-sm font-medium">
                    Start Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
