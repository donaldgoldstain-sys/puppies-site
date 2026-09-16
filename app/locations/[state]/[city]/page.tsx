import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { findCityByName, findLocation, locationPath, nearbyCities } from "@/lib/locations";
import { locations } from "@/data/locations";
import { PawDivider, Breadcrumb } from "@/components/primitives";
import {
  TextSection,
  FaqAccordion,
  InfoCards,
  IconCards,
  Checklist,
  CtaPanel,
  LocalFacts,
  type InfoCardItem,
  type IconCardItem
} from "@/components/page-blocks";
import { PuppyGrid } from "@/components/puppy-grid";
import { ContactForm } from "@/components/contact-form";
import { PinIcon, PhoneIcon, PlaneIcon, HeartIcon, MailIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema, locationSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ state: string; city: string }>;
};

const deliveryIcons = [<PinIcon key="pin" />, <PlaneIcon key="plane" />, <HeartIcon key="heart" />];

export async function generateStaticParams() {
  return locations.map((location) => ({
    state: location.stateSlug,
    city: location.citySlug
  }));
}

export async function generateMetadata({ params }: Props) {
  const { state, city } = await params;
  const location = findLocation(state, city);

  if (!location) {
    return {};
  }

  return buildMetadata({
    title: `${location.heroTitle} | Premium Local Placement Guide`,
    description: location.metaDescription,
    path: locationPath(location)
  });
}

export default async function LocationPage({ params }: Props) {
  const { state, city } = await params;
  const location = findLocation(state, city);

  if (!location) {
    notFound();
  }

  const featuredPuppies = site.puppies.filter((puppy) => location.featuredPuppySlugs.includes(puppy.slug));
  const popularColors = site.colors.filter((color) => location.popularColorSlugs.includes(color.slug));
  const nearby = nearbyCities(location);

  const deliveryCards: IconCardItem[] = (location.deliveryOptions ?? []).map((option, index) => ({
    icon: deliveryIcons[index % deliveryIcons.length],
    title: option.title,
    desc: option.desc
  }));

  // A local address and line exist only for cities with a published presence;
  // everywhere else the Miami Beach hub is the honest point of contact.
  const contact: InfoCardItem[] = location.address
    ? [
        { icon: <PinIcon />, label: "Address", value: location.address },
        ...(location.phone
          ? [
              {
                icon: <PhoneIcon />,
                label: "Phone",
                value: location.phone,
                href: `tel:+1${location.phone.replace(/\D/g, "")}`
              }
            ]
          : [])
      ]
    : [
        { icon: <PinIcon />, label: "Placement Hub", value: site.address },
        { icon: <PlaneIcon />, label: "Nearest Airport", value: location.airport },
        { icon: <PhoneIcon />, label: "Phone", value: site.phone, href: `tel:+1${site.phone.replace(/\D/g, "")}` },
        { icon: <MailIcon />, label: "Email", value: site.email, href: `mailto:${site.email}` }
      ];

  return (
    <div className="container">
      <JsonLd
        data={[
          locationSchema(location),
          faqSchema(location.faq),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
            { name: location.state, path: `/locations/${location.stateSlug}` },
            { name: location.city }
          ])
        ]}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: location.state, href: `/locations/${location.stateSlug}` },
          { label: location.city }
        ]}
      />

      <section className="page-head">
        <h1>{location.heroTitle}</h1>
        <p className="sub">{location.heroDescription}</p>
        <PawDivider />
      </section>

      <LocalFacts
        items={[
          { label: "Metro", value: `${location.city}, ${location.state}` },
          { label: "Nearest Airport", value: location.airport },
          { label: "Routes", value: "Pickup, flight nanny, ground" },
          { label: "Placement Hub", value: "Miami Beach, Florida" }
        ]}
      />

      <TextSection
        eyebrow={`${location.state} Service Area`}
        title={`What families in ${location.city} usually want most`}
        narrow
        paragraphs={[location.intro, location.lifestyleNote]}
      />

      {location.whyLocal?.length ? (
        <Checklist
          eyebrow="Why Families Here Choose Us"
          title={`What ${location.city} placements come with`}
          items={location.whyLocal}
        />
      ) : null}

      <TextSection
        title="How we frame the experience locally"
        narrow
        paragraphs={[location.serviceDetails, location.appointmentNote]}
      />

      <section className="block">
        <div className="block-eyebrow">Getting Home</div>
        <h2>
          {deliveryCards.length ? `Three ways a puppy reaches ${location.city}` : `Getting a puppy home to ${location.city}`}
        </h2>
        <p>{location.deliveryInfo}</p>
      </section>
      {deliveryCards.length ? <IconCards items={deliveryCards} /> : null}

      {location.careNote ? (
        <TextSection
          eyebrow="Local Care Notes"
          title={`Keeping a tiny coat comfortable in ${location.city}`}
          narrow
          paragraphs={[location.careNote]}
        />
      ) : null}

      <InfoCards items={contact} />

      <section className="block" aria-label="Nearby areas">
        <div className="block-eyebrow">Nearby Areas</div>
        <div className="chips">
          {location.nearbyAreas.map((area) => {
            const linked = findCityByName(area);

            return linked && linked.citySlug !== location.citySlug ? (
              <Link className="chip" key={area} href={locationPath(linked)}>
                {area}
              </Link>
            ) : (
              <span className="chip" key={area}>
                {area}
              </span>
            );
          })}
        </div>
      </section>

      {featuredPuppies.length ? (
        <>
          <section className="block">
            <h2>Featured puppies for {location.city}</h2>
          </section>
          <PuppyGrid puppies={featuredPuppies} />
        </>
      ) : null}

      {popularColors.length ? (
        <>
          <section className="block">
            <h2>Popular colors in {location.city}</h2>
          </section>
          <section className="link-grid">
            {popularColors.map((color) => (
              <Link key={color.slug} href={`/colors/${color.slug}`} className="link-card">
                <p className="label">{color.shortName}</p>
                <h3>{color.name}</h3>
                <p>{color.pageDescription}</p>
                <span className="more">View Color</span>
              </Link>
            ))}
          </section>
        </>
      ) : null}

      <FaqAccordion eyebrow="Local FAQ" title={`Questions for ${location.city}`} items={location.faq} />

      {nearby.length ? (
        <>
          <section className="block">
            <div className="block-eyebrow">Also Nearby</div>
            <h2>Other cities we serve</h2>
          </section>
          <section className="link-grid">
            {nearby.map((entry) => (
              <Link key={`${entry.stateSlug}-${entry.citySlug}`} href={locationPath(entry)} className="link-card">
                <p className="label">{entry.state}</p>
                <h3>{entry.city}</h3>
                <p>{entry.heroDescription}</p>
                <span className="more">View {entry.city}</span>
              </Link>
            ))}
          </section>
        </>
      ) : null}

      <ContactForm
        eyebrow="Private Inquiry"
        title={location.ctaTitle}
        description={location.ctaDescription}
        buttonLabel="Request Puppy Options"
        formName={`${location.citySlug}-lead`}
      />

      <CtaPanel
        eyebrow={location.state}
        title={`See every city we serve in ${location.state}`}
        text="Each city page covers local travel, timing, and care detail for that market."
        primary={{ href: `/locations/${location.stateSlug}`, label: `All ${location.state} Cities` }}
        secondary={{ href: "/areas-we-serve", label: "See All Areas" }}
      />
    </div>
  );
}
