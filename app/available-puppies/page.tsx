import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PawDivider, Breadcrumb } from "@/components/primitives";
import { PuppyGrid } from "@/components/puppy-grid";
import { TrustStrip } from "@/components/page-blocks";
import { ContactForm } from "@/components/contact-form";

export const metadata = buildMetadata({
  title: "Available Teacup Pomeranian Puppies | Curated Current Listings",
  description:
    "Browse current teacup and micro Pomeranian puppies with refined profiles, premium presentation, and city-based availability.",
  path: "/available-puppies"
});

export default function AvailablePuppiesPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Available Puppies" }]} />
      <section className="page-head">
        <h1>Browse our current companion puppy collection</h1>
        <p className="sub">
          Each listing is designed to feel clear and complete, with polished details on size, color, temperament, location, and
          availability.
        </p>
        <PawDivider />
      </section>

      <PuppyGrid puppies={site.puppies} showFilters />

      <TrustStrip />

      <ContactForm
        eyebrow="Private Inquiry"
        title="Ask about availability"
        description="Tell us which listing caught your eye or describe the overall look and personality you want."
        buttonLabel="Ask About Availability"
        formName="puppy-inquiry"
      />
    </div>
  );
}
