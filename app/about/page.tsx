import { buildMetadata } from "@/lib/seo";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { TextSection, ImageTextSection, IconCards, CtaPanel, type IconCardItem } from "@/components/page-blocks";
import { SparkleIcon, PlaneIcon, HeadsetIcon, ShieldCheckIcon, PawIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "About Us | A Boutique Teacup Pomeranian Brand",
  description:
    "Learn about our boutique approach to teacup and micro Pomeranian placements, centered in Miami Beach and designed to feel warm and refined.",
  path: "/about"
});

const values: IconCardItem[] = [
  { icon: <SparkleIcon />, title: "Curated Listings", desc: "Edited profiles with clear next steps." },
  { icon: <PlaneIcon />, title: "Warm Delivery Support", desc: "Pickup and travel planning that feels personal." },
  { icon: <HeadsetIcon />, title: "Boutique Guidance", desc: "A calm, concierge-style inquiry experience." },
  { icon: <ShieldCheckIcon />, title: "Health-Focused Care", desc: "Age-appropriate care notes and details before placement." }
];

export default function AboutPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <PageHero
        eyebrow="About"
        title="A boutique companion puppy brand with a warmer, more curated point of view"
        subtitle="Our approach blends polished presentation with practical support so families feel confident, informed, and genuinely cared for."
        primary={{ href: "/available-puppies", label: "View Available Puppies" }}
        secondary={{ href: "/contact", label: "Get in Touch" }}
      />

      <TextSection
        eyebrow="Our Point of View"
        title="Premium should feel soft, not loud"
        narrow
        paragraphs={[
          "We believe premium should feel soft, reassuring, and beautifully edited. White is shown first in the collection, but the overall brand is built to showcase a naturally balanced range of companion puppies."
        ]}
      />

      <ImageTextSection
        title="How we support families"
        glyph={<PawIcon />}
        paragraphs={[
          "Every page is designed to make the next step clearer, whether a family is local to Miami Beach or planning from Los Angeles, New York, Chicago, Atlanta, or Las Vegas."
        ]}
      />

      <IconCards items={values} />

      <CtaPanel
        eyebrow="Ready when you are"
        title="Find your puppy"
        text="Browse current availability or get in touch — we'll help you find the right match for your home."
        primary={{ href: "/available-puppies", label: "View Available Puppies" }}
        secondary={{ href: "/contact", label: "Contact Us" }}
      />
    </div>
  );
}
