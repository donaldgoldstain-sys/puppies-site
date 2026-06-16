import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { ImageTextSection } from "@/components/page-blocks";
import { PinIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "Areas We Serve | Florida and Select U.S. Cities",
  description:
    "Browse our location pages for Miami Beach, Fort Lauderdale, Boca Raton, West Palm Beach, Tampa, Orlando, Jacksonville, Los Angeles, New York, Chicago, Atlanta, and Las Vegas.",
  path: "/areas-we-serve"
});

export default function AreasWeServePage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Areas We Serve" }]} />
      <PageHero
        eyebrow="Areas We Serve"
        title="Cities we currently serve with tailored local guidance"
        subtitle="Each location page is written with its own tone, lifestyle context, and appointment framing so families feel seen where they are."
      />

      <ImageTextSection
        title="Local guidance, wherever you are"
        glyph={<PinIcon />}
        paragraphs={[
          "Miami Beach is our home base, but our placement and delivery support extends across Florida and select destination cities.",
          "Choose a city below to see local availability framing, delivery notes, and answers tailored to that market."
        ]}
      />

      <section className="link-grid">
        {site.locations.map((location) => (
          <Link key={`${location.stateSlug}-${location.citySlug}`} href={`/locations/${location.stateSlug}/${location.citySlug}`} className="link-card">
            <p className="label">{location.state}</p>
            <h3>{location.city}</h3>
            <p>{location.intro}</p>
            <span className="more">View City</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
