import Link from "next/link";
import { site, telHref } from "@/lib/site";

const exploreLinks = [
  { href: "/available-puppies", label: "Available Puppies" },
  { href: "/micro-pomeranian-puppies", label: "Micro Pomeranians" },
  { href: "/pomeranian-colors", label: "Colors" },
  { href: "/delivery", label: "Delivery" },
  { href: "/health-guarantee", label: "Health Guarantee" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" }
];

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
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="title">{site.name}</p>
            <p>
              A soft, curated home for teacup and micro Pomeranian puppies, centered in Miami Beach and thoughtfully serving
              families across Florida and select U.S. cities.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            {exploreLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Placement Cities</h4>
            {locationLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>{site.location}</p>
            <p>{site.address}</p>
            <a href={telHref()}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <div className="footer-bottom">© 2026 {site.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
