"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(251,247,241,0.96)] md:bg-[rgba(251,247,241,0.85)] md:backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[linear-gradient(135deg,#fffdf8,#efe2d3)] text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-stone-700 shadow-sm sm:flex">
            TP
          </div>
          <div className="min-w-0">
            <p className="truncate font-serif text-lg text-stone-900 sm:text-[1.35rem]">
              Teacup Pomeranian Puppies
            </p>
            <p className="hidden truncate text-[0.68rem] uppercase tracking-[0.28em] text-stone-500 sm:block">Miami Beach private placements</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-stone-700 transition hover:text-stone-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`} className="text-sm text-stone-600 transition hover:text-stone-950">
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-800"
          >
            Inquire Privately
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/90 text-stone-700 shadow-sm lg:hidden"
          aria-label="Toggle navigation"
        >
          <span className="relative block h-4 w-4">
            <span className={cn("absolute left-0 top-0 h-0.5 w-4 rounded bg-current transition", open && "top-[7px] rotate-45")} />
            <span className={cn("absolute left-0 top-[7px] h-0.5 w-4 rounded bg-current transition", open && "opacity-0")} />
            <span className={cn("absolute left-0 top-[14px] h-0.5 w-4 rounded bg-current transition", open && "top-[7px] -rotate-45")} />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-[rgba(255,250,244,0.98)] transition-all duration-300 lg:hidden",
          open ? "max-h-[640px]" : "max-h-0"
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          <div className="mb-2 rounded-[1.6rem] border border-[var(--border)] bg-white/85 p-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--gold)]">Main Hub</p>
            <p className="mt-2 font-serif text-xl text-stone-900">{site.location}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{site.phone}</p>
          </div>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3.5 text-sm font-medium text-stone-800 shadow-sm"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-2xl bg-stone-950 px-4 py-3.5 text-center text-sm font-medium text-white"
          >
            Start a Private Inquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
