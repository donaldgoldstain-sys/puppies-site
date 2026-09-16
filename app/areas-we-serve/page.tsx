import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { locations } from "@/data/locations";
import { locationPath, stateGroups } from "@/lib/locations";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { ImageTextSection, CtaPanel, TrustStrip } from "@/components/page-blocks";
import { PinIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Areas We Serve | Teacup Pomeranian Placement Across the U.S.",
  description:
    "City and state pages for teacup and micro Pomeranian placement nationwide, with local travel, timing, and care notes for every market we reach from Miami Beach.",
  path: "/areas-we-serve"
});

export default function AreasWeServePage() {
  const cityCount = locations.length;
  const stateCount = stateGroups.length;

  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Areas We Serve" }])} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Areas We Serve" }]} />
      <PageHero
        eyebrow="Areas We Serve"
        title={`${cityCount} cities across ${stateCount} states`}
        subtitle="Every city page is written for its own market, with the travel route, timing, and coat care notes that actually apply there."
        primary={{ href: "/available-puppies", label: "View Available Puppies" }}
        secondary={{ href: "/contact", label: "Start a Private Inquiry" }}
      />

      <ImageTextSection
        title="Local guidance, wherever you are"
        glyph={<PinIcon />}
        paragraphs={[
          "Miami Beach is our home base. Every puppy is raised, vet checked, and matched there before travel, and placement support extends from Florida to markets across the country.",
          "Choose a state to see the cities we cover, or go straight to a city page for its delivery routes, local questions, and current availability framing."
        ]}
      />

      <TrustStrip />

      {stateGroups.map((group) => (
        <section className="block" key={group.stateSlug} aria-label={`Cities in ${group.state}`}>
          <div className="block-eyebrow">{group.state}</div>
          <h2>
            <Link href={`/locations/${group.stateSlug}`}>
              {group.cities.length} {group.cities.length === 1 ? "city" : "cities"} in {group.state}
            </Link>
          </h2>
          <div className="chips">
            {group.cities.map((city) => (
              <Link className="chip" key={city.citySlug} href={locationPath(city)}>
                {city.city}
              </Link>
            ))}
          </div>
        </section>
      ))}

      <CtaPanel
        eyebrow="Do not see your city?"
        title="We place puppies nationwide"
        text="If your city is not listed yet, tell us where you are. Flight nanny and ground transport reach far beyond the pages published here."
        primary={{ href: "/contact", label: "Start a Private Inquiry" }}
        secondary={{ href: "/delivery", label: "How Delivery Works" }}
      />
    </div>
  );
}
