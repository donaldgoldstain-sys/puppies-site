import { Route } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

const locationLinks = [
  { href: "/locations/florida/miami-beach", label: "Miami Beach" },
  { href: "/locations/florida/fort-lauderdale", label: "Fort Lauderdale" },
  { href: "/locations/florida/boca-raton", label: "Boca Raton" },
  { href: "/locations/florida/west-palm-beach", label: "West Palm Beach" },
  { href: "/locations/california/los-angeles", label: "Los Angeles" },
  { href: "/locations/new-york/new-york", label: "New York" },
  { href: "/locations/illinois/chicago", label: "Chicago" },
  { href: "/locations/nevada/las-vegas", label: "Las Vegas" }
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[linear-gradient(180deg,#f6efe7,#fbf8f3)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[var(--gold)]">Boutique Companion Brand</p>
          <p className="font-serif text-3xl text-stone-900">{site.name}</p>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            A premium, curated home for teacup and micro Pomeranian puppies, centered in Miami Beach and thoughtfully serving families across Florida and select U.S. cities.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">Quick Links</p>
          <div className="space-y-3 text-sm text-stone-700">
            {[...site.nav, { href: "/about" as Route, label: "About" }, { href: "/areas-we-serve" as Route, label: "Areas We Serve" }, { href: "/health-guarantee" as Route, label: "Health Guarantee" }].map((item) => (
              <Link key={item.href} href={item.href} className="block hover:text-stone-950">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">City Links</p>
          <div className="grid gap-3 text-sm text-stone-700 sm:grid-cols-2 lg:grid-cols-1">
            {locationLinks.map((href) => (
              <Link key={href.href} href={href.href} className="block hover:text-stone-950">
                {href.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">Main Contact</p>
          <div className="space-y-3 text-sm text-stone-700">
            <p>{site.location}</p>
            <p>{site.address}</p>
            <p>{site.phone}</p>
            <p>{site.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] px-4 py-6 text-center text-sm text-stone-500">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
