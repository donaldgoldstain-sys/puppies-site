import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { findStateGroup, locationPath, stateGroups } from "@/lib/locations";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { TextSection, CtaPanel, TrustStrip, Checklist, FaqAccordion } from "@/components/page-blocks";
import { PuppyGrid } from "@/components/puppy-grid";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema, stateSchema } from "@/lib/schema";
import { stateContent } from "@/data/states";

type Props = {
  params: Promise<{ state: string }>;
};

export async function generateStaticParams() {
  return stateGroups.map((group) => ({ state: group.stateSlug }));
}

export async function generateMetadata({ params }: Props) {
  const { state } = await params;
  const group = findStateGroup(state);

  if (!group) {
    return {};
  }

  const content = stateContent[group.stateSlug];
  const cityNames = group.cities.map((city) => city.city).join(", ");

  return buildMetadata({
    title: `${content?.heroTitle ?? `Teacup Pomeranian Puppies in ${group.state}`} | Cities We Serve`,
    description:
      content?.metaDescription ??
      `Teacup and micro Pomeranian puppy placement across ${group.state}, including ${cityNames}. Private pickup, flight nanny, and ground delivery from Miami Beach.`.slice(0, 158),
    path: `/locations/${group.stateSlug}`
  });
}

export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const group = findStateGroup(state);

  if (!group) {
    notFound();
  }

  const areas = Array.from(new Set(group.cities.flatMap((city) => city.nearbyAreas))).slice(0, 18);
  const featuredSlugs = new Set(group.cities.flatMap((city) => city.featuredPuppySlugs));
  const featured = site.puppies.filter((puppy) => featuredSlugs.has(puppy.slug)).slice(0, 4);
  const cityCount = group.cities.length;
  const content = stateContent[group.stateSlug];

  return (
    <div className="container">
      <JsonLd
        data={[
          stateSchema(group),
          ...(content ? [faqSchema(content.faq)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
            { name: group.state }
          ])
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: group.state }
        ]}
      />

      <PageHero
        eyebrow={group.state}
        title={content?.heroTitle ?? `Teacup Pomeranian puppies across ${group.state}`}
        subtitle={
          content?.heroSubtitle ??
          `${cityCount} ${cityCount === 1 ? "city page" : "city pages"} in ${group.state}, each written around how families there actually live, travel, and plan a homecoming.`
        }
        primary={{ href: "/available-puppies", label: "View Available Puppies" }}
        secondary={{ href: "/contact", label: "Start a Private Inquiry" }}
      />

      <section className="link-grid">
        {group.cities.map((city) => (
          <Link key={city.citySlug} href={locationPath(city)} className="link-card">
            <p className="label">{city.state}</p>
            <h3>{city.city}</h3>
            <p>{city.heroDescription}</p>
            <span className="more">View {city.city}</span>
          </Link>
        ))}
      </section>

      <TrustStrip />

      <TextSection
        eyebrow="How placement works here"
        title={`Getting a puppy home in ${group.state}`}
        narrow
        paragraphs={
          content
            ? [...content.intro, content.travelNote]
            : [
                `Every placement starts in Miami Beach, where puppies are raised, vet checked, and matched before travel. From there, families in ${group.state} choose the route that suits them: a private pickup trip, a flight nanny who carries the puppy in cabin, or coordinated ground transport.`,
                `Each city page below covers the local detail that actually matters, from the nearest airport and typical travel window to the coat and comfort notes that come with ${group.state} weather.`
              ]
        }
      />

      {content ? (
        <Checklist eyebrow="What to expect" title={`Placement into ${group.state}`} items={content.whyState} />
      ) : null}

      {areas.length ? (
        <section className="block" aria-label={`Areas served across ${group.state}`}>
          <div className="block-eyebrow">Areas We Reach</div>
          <div className="chips">
            {areas.map((area) => (
              <span className="chip" key={area}>
                {area}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {featured.length ? (
        <>
          <section className="block">
            <h2>Puppies often matched with {group.state} families</h2>
          </section>
          <PuppyGrid puppies={featured} />
        </>
      ) : null}

      {content ? (
        <FaqAccordion eyebrow="State FAQ" title={`Questions about ${group.state}`} items={content.faq} />
      ) : null}

      <CtaPanel
        eyebrow="Private Inquiry"
        title={`Tell us which ${group.state} city you are in`}
        text="Share your city, the size and color you have in mind, and the timeline you are working toward, and we will point you to the best current fit."
        primary={{ href: "/contact", label: "Start a Private Inquiry" }}
        secondary={{ href: "/areas-we-serve", label: "See All Areas" }}
      />
    </div>
  );
}
