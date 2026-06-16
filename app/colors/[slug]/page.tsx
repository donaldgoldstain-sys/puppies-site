import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PawDivider, Breadcrumb } from "@/components/primitives";
import { TextSection } from "@/components/page-blocks";
import { PuppyGrid } from "@/components/puppy-grid";
import { ContactForm } from "@/components/contact-form";

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
    <div className="container">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Colors", href: "/pomeranian-colors" }, { label: color.shortName }]}
      />
      <section className="page-head">
        <h1>{color.name}</h1>
        <p className="sub">{color.pageDescription}</p>
        <PawDivider />
      </section>

      <TextSection
        eyebrow="Color Collection"
        title="How this color feels in the collection"
        narrow
        paragraphs={[color.overview, color.personality, color.rarity]}
      />

      <section className="block" aria-label="Color notes">
        <div className="block-eyebrow">In the Studio</div>
        <ul className="gallery-notes">
          {color.gallery.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2>Related available puppies</h2>
      </section>
      <PuppyGrid
        puppies={related}
        emptyMessage="No current listings in this color are live right now. Use the form below to ask about upcoming availability or a similar color direction."
      />

      <ContactForm
        eyebrow="Color Preferences"
        title={`Ask about ${color.shortName} puppies`}
        description={`Let us know if you want ${color.shortName.toLowerCase()} specifically or if you're open to similar colors with the same overall mood.`}
        buttonLabel="Ask About This Color"
        formName={`${color.slug}-inquiry`}
      />
    </div>
  );
}
