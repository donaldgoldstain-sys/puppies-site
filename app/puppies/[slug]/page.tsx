import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { PuppyCard } from "@/components/puppy-card";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { calculateAge, formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return site.puppies.map((puppy) => ({ slug: puppy.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const puppy = site.puppies.find((entry) => entry.slug === slug);

  if (!puppy) {
    return {};
  }

  return buildMetadata({
    title: `${puppy.name} | ${puppy.color} Pomeranian Puppy for Sale`,
    description: `${puppy.shortDescription} View premium puppy details, health notes, and request ${puppy.name} today.`,
    path: `/puppies/${puppy.slug}`
  });
}

export default async function PuppyPage({ params }: Props) {
  const { slug } = await params;
  const puppy = site.puppies.find((entry) => entry.slug === slug);

  if (!puppy) {
    notFound();
  }

  const similar = site.puppies.filter((entry) => entry.slug !== puppy.slug && (entry.colorSlug === puppy.colorSlug || entry.city === puppy.city)).slice(0, 3);
  const isPriceOnRequest = puppy.price.toLowerCase() === "price on request";

  return (
    <div className="space-y-12 pb-10">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className={`rounded-[2.5rem] border border-[var(--border)] bg-gradient-to-br ${puppy.accentClass} p-8 shadow-[var(--shadow)]`}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">{puppy.color} {puppy.gender}</p>
            <h1 className="mt-4 font-serif text-5xl text-stone-900">{puppy.name}</h1>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{puppy.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-stone-700">{puppy.sizeLabel}</span>
              <span className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-stone-700">{puppy.city}</span>
              <span className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-stone-700">{puppy.availabilityStatus}</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {puppy.galleryImages.map((item) => (
              <div key={item} className={`flex aspect-square items-end rounded-[1.75rem] border border-[var(--border)] bg-gradient-to-br ${puppy.accentClass} p-6 text-sm text-stone-700`}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <LeadForm
          title={`Request ${puppy.name}`}
          description="Ask about this specific puppy or request a similar match if availability changes."
          buttonLabel="Request This Puppy"
          formName={`${puppy.slug}-request`}
        />
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-8">
          <h2 className="font-serif text-3xl text-stone-900">Puppy details</h2>
          <div className="mt-6 grid gap-4 text-sm text-stone-700 sm:grid-cols-2">
            <p><span className="font-medium text-stone-900">Gender:</span> {puppy.gender}</p>
            <p><span className="font-medium text-stone-900">Color:</span> {puppy.color}</p>
            <p><span className="font-medium text-stone-900">Birth date:</span> {formatDate(puppy.birthDate)}</p>
            <p><span className="font-medium text-stone-900">Age:</span> {calculateAge(puppy.birthDate)}</p>
            <p><span className="font-medium text-stone-900">Expected adult size:</span> {puppy.expectedAdultSize}</p>
            <p><span className="font-medium text-stone-900">Location:</span> {puppy.city}, {puppy.state}</p>
            <p><span className="font-medium text-stone-900">Availability:</span> {puppy.availabilityStatus}</p>
            <p><span className="font-medium text-stone-900">Pricing:</span> {isPriceOnRequest ? puppy.price : <><span aria-hidden="true">$</span>{puppy.price.replace(/^\$/, "")}</>}</p>
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-[var(--border)] bg-[#fcf8f3] p-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Personality profile</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{puppy.personalityProfile}</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-8">
          <h2 className="font-serif text-3xl text-stone-900">Temperament and health</h2>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Personality</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {puppy.temperament.map((item) => (
              <span key={item} className="rounded-full bg-stone-100 px-3 py-2 text-sm text-stone-700">{item}</span>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-[var(--muted)]">{puppy.healthNote}</p>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Health Info</p>
          <ul className="mt-3 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {puppy.healthInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-stone-900">Similar puppies</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {similar.map((entry) => (
            <PuppyCard key={entry.id} puppy={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
