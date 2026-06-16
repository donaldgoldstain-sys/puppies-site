import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { TextSection, IconCards, type IconCardItem } from "@/components/page-blocks";
import { PuppyGrid } from "@/components/puppy-grid";
import { ContactForm } from "@/components/contact-form";
import { SparkleIcon, HeartIcon, PlaneIcon, ClockIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "Micro Pomeranian Puppies | Petite, Premium Companion Puppies",
  description:
    "Explore our smallest micro Pomeranian puppies with polished profiles, premium care details, and curated availability.",
  path: "/micro-pomeranian-puppies"
});

const traits: IconCardItem[] = [
  { icon: <SparkleIcon />, title: "Petite by design", desc: "Selected for a petite expected adult size and polished presentation." },
  { icon: <HeartIcon />, title: "Companion-first", desc: "Calm, affectionate temperaments suited to close everyday company." },
  { icon: <PlaneIcon />, title: "Travel-ready", desc: "Highly portable for condo, apartment, and travel-oriented routines." },
  { icon: <ClockIcon />, title: "Reserved quickly", desc: "The smallest puppies are limited, so timing and flexibility help." }
];

export default function MicroPomeranianPage() {
  const tinyPuppies = site.puppies.filter(
    (puppy) => puppy.expectedAdultSize.includes("4") || puppy.expectedAdultSize.includes("3.5")
  );

  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Micro Pomeranians" }]} />
      <PageHero
        eyebrow="Micro Pomeranians"
        title="Our smallest companion puppies, presented with more intention"
        subtitle="Micro puppies are limited, highly requested, and best approached with realistic expectations around size, temperament, and timing."
      />

      <TextSection
        eyebrow="The Micro Collection"
        title="What defines the micro collection"
        narrow
        paragraphs={[
          "These puppies are selected for petite expected adult size, polished presentation, and a companion-first temperament.",
          "They are often ideal for families who want a highly portable, carefully matched puppy for condo, apartment, or travel-oriented routines.",
          "Because the smallest puppies reserve quickly, inquiries that include timing and flexibility tend to move most smoothly."
        ]}
      />

      <IconCards items={traits} />

      <section className="block">
        <h2>Available micro puppies</h2>
      </section>
      <PuppyGrid puppies={tinyPuppies} showFilters />

      <ContactForm
        eyebrow="Private Inquiry"
        title="Tell us about your ideal micro puppy"
        description="We can help you narrow by city, color, size range, and the personality style you want at home."
        buttonLabel="Find a Similar Puppy"
        formName="micro-inquiry"
      />
    </div>
  );
}
