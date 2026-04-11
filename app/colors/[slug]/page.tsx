import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { PuppyCard } from "@/components/puppy-card";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return site.colors.map((color) => ({ slug: color.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const color = site.colors.find((entry) => entry.slug === slug);

  if (!color) {
    return {};
  }

  return buildMetadata({
    title: `${color.name} | Premium Color Guide`,
    description: `${color.pageDescription} Browse related ${color.shortName.toLowerCase()} Pomeranian puppies and ask about availability.`,
    path: `/colors/${color.slug}`
  });
}

export default async function ColorPage({ params }: Props) {
  const { slug } = await params;
  const color = site.colors.find((entry) => entry.slug === slug);

  if (!color) {
    notFound();
  }

  const related = site.puppies.filter((puppy) => puppy.colorSlug === slug);

  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow="Color Collection" title={color.name} description={color.pageDescription} secondaryLabel="Ask About This Color" />
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-8">
          <h2 className="font-serif text-3xl text-stone-900">How this color feels in the collection</h2>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{color.overview}</p>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{color.personality}</p>
          <p className="mt-4 text-sm font-medium text-stone-900">{color.rarity}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {color.gallery.map((item) => (
              <div key={item} className={`rounded-[1.5rem] border border-white/60 bg-gradient-to-br ${color.accentClass} p-6 text-sm text-stone-700`}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <LeadForm buttonLabel="Ask About This Color" formName={`${color.slug}-inquiry`} description={`Let us know if you want ${color.shortName.toLowerCase()} specifically or if you’re open to similar colors with the same overall mood.`} />
      </section>
      <section className="space-y-6">
        <h2 className="font-serif text-3xl text-stone-900">Related available puppies</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {related.length > 0 ? related.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} />) : <p className="col-span-full text-sm text-[var(--muted)]">No current listings in this color are live right now. Use the form above to ask about upcoming availability or a similar color direction.</p>}
        </div>
      </section>
    </div>
  );
}
