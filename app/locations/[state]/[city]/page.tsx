import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQList } from "@/components/faq-list";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { PuppyCard } from "@/components/puppy-card";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

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

  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow={`${location.state} Service Area`} title={location.heroTitle} description={location.heroDescription} secondaryLabel={`Ask About ${location.city}`} />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-8">
          <h2 className="font-serif text-3xl text-stone-900">What families in {location.city} usually want most</h2>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{location.intro}</p>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{location.lifestyleNote}</p>
          <h3 className="mt-8 font-serif text-2xl text-stone-900">How we frame the experience locally</h3>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{location.serviceDetails}</p>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{location.appointmentNote}</p>
          <h3 className="mt-8 font-serif text-2xl text-stone-900">Pickup and delivery</h3>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{location.deliveryInfo}</p>
          <div className="mt-6 grid gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[#fcf8f3] p-5 text-sm text-[var(--muted)] sm:grid-cols-2">
            <p><span className="font-medium text-stone-900">Address:</span> {location.address}</p>
            <p><span className="font-medium text-stone-900">Phone:</span> {location.phone}</p>
          </div>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Nearby areas</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {location.nearbyAreas.map((area) => (
              <span key={area} className="rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-700">{area}</span>
            ))}
          </div>
        </div>
        <LeadForm
          title={location.ctaTitle}
          description={location.ctaDescription}
          buttonLabel="Request Puppy Options"
          formName={`${location.citySlug}-lead`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-stone-900">Featured puppies for {location.city}</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {featuredPuppies.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-stone-900">Popular colors in {location.city}</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popularColors.map((color) => (
            <Link
              key={color.slug}
              href={`/colors/${color.slug}`}
              className={`rounded-[2rem] border border-[var(--border)] bg-gradient-to-br ${color.accentClass} p-6 transition hover:-translate-y-1`}
            >
              <h3 className="font-serif text-2xl text-stone-900">{color.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{color.pageDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-stone-900">Frequently asked questions for {location.city}</h2>
        <FAQList items={location.faq} />
      </section>
    </div>
  );
}
