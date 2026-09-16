import Link from "next/link";
import { site, telHref } from "@/lib/site";
import { stateGroups } from "@/lib/locations";

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

// Linking the state hubs rather than a fixed set of cities keeps every market
// in the network within two clicks of the footer.
const stateLinks = [...stateGroups]
  .sort((a, b) => b.cities.length - a.cities.length || a.state.localeCompare(b.state))
  .slice(0, 8)
  .map((group) => ({ href: `/locations/${group.stateSlug}`, label: group.state }));


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
            <h4>Placement Areas</h4>
            {stateLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/areas-we-serve">All Areas</Link>
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
