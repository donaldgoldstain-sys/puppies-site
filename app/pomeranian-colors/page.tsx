import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { colorDotHex } from "@/lib/puppy-format";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { ContactForm } from "@/components/contact-form";

export const metadata = buildMetadata({
  title: "Pomeranian Colors | White First, Beautifully Balanced",
  description:
    "Discover our Pomeranian color collection with premium descriptions, white listed first, and balanced presentation across the full range.",
  path: "/pomeranian-colors"
});

export default function PomeranianColorsPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Colors" }]} />
      <PageHero
        eyebrow="Pomeranian Colors"
        title="Explore the collection by color, mood, and overall feel"
        subtitle="White appears first across the collection, while the rest of the palette is presented naturally for families who want a different look."
      />

      <section className="link-grid">
        {site.colors.map((color) => (
          <Link key={color.slug} href={`/colors/${color.slug}`} className="link-card">
            <span className="swatch" style={{ background: colorDotHex(color.shortName) }} aria-hidden="true" />
            <p className="label">{color.shortName}</p>
            <h3>{color.name}</h3>
            <p>{color.pageDescription}</p>
            <span className="more">View Color</span>
          </Link>
        ))}
      </section>

      <ContactForm
        eyebrow="Color Preferences"
        title="Ask about color availability"
        description="If a specific color is not currently listed, we can recommend similar available puppies or note your preference for upcoming placements."
        buttonLabel="Ask About Color Availability"
        formName="colors-inquiry"
      />
    </div>
  );
}
