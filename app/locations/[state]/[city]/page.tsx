import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PawDivider, Breadcrumb } from "@/components/primitives";
import { TextSection, FaqAccordion, InfoCards, type InfoCardItem } from "@/components/page-blocks";
import { PuppyGrid } from "@/components/puppy-grid";
import { ContactForm } from "@/components/contact-form";
import { PinIcon, PhoneIcon } from "@/components/icons";

type Props = {
  params: Promise<{ state: string; city: string }>;
};

export async function generateStaticParams() {
  return site.locations.map((location) => ({
    state: location.stateSlug,
    city: location.citySlug
  }));
}

export async function generateMetadata({ params }: Props) {
  const { state, city } = await params;
  const location = site.locations.find((entry) => entry.stateSlug === state && entry.citySlug === city);

  if (!location) {
    return {};
  }

  return buildMetadata({
    title: `${location.heroTitle} | Premium Local Placement Guide`,
    description: location.metaDescription,
    path: `/locations/${location.stateSlug}/${location.citySlug}`
  });
}

export default async function LocationPage({ params }: Props) {
  const { state, city } = await params;
  const location = site.locations.find((entry) => entry.stateSlug === state && entry.citySlug === city);

  if (!location) {
    notFound();
  }

  const featuredPuppies = site.puppies.filter((puppy) => location.featuredPuppySlugs.includes(puppy.slug));
  const popularColors = site.colors.filter((color) => location.popularColorSlugs.includes(color.slug));

  const contact: InfoCardItem[] = [
    { icon: <PinIcon />, label: "Address", value: location.address },
    { icon: <PhoneIcon />, label: "Phone", value: location.phone, href: `tel:+1${location.phone.replace(/\D/g, "")}` }
  ];

  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: "/areas-we-serve" },
          { label: location.city }
        ]}
      />
      <section className="page-head">
        <h1>{location.heroTitle}</h1>
        <p className="sub">{location.heroDescription}</p>
        <PawDivider />
      </section>

      <TextSection
        eyebrow={`${location.state} Service Area`}
        title={`What families in ${location.city} usually want most`}
        narrow
        paragraphs={[location.intro, location.lifestyleNote]}
      />

      <TextSection
        title="How we frame the experience locally"
        narrow
        paragraphs={[location.serviceDetails, location.appointmentNote]}
      />

      <TextSection title="Pickup and delivery" narrow paragraphs={[location.deliveryInfo]} />

      <InfoCards items={contact} />

      <section className="block" aria-label="Nearby areas">
        <div className="block-eyebrow">Nearby Areas</div>
        <div className="chips">
          {location.nearbyAreas.map((area) => (
            <span className="chip" key={area}>
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>Featured puppies for {location.city}</h2>
      </section>
      <PuppyGrid puppies={featuredPuppies} />

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

      <FaqAccordion eyebrow="Local FAQ" title={`Questions for ${location.city}`} items={location.faq} />

      <ContactForm
        eyebrow="Private Inquiry"
        title={location.ctaTitle}
        description={location.ctaDescription}
        buttonLabel="Request Puppy Options"
        formName={`${location.citySlug}-lead`}
      />
    </div>
  );
}
