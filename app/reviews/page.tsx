import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { ReviewCard, CtaPanel } from "@/components/page-blocks";

export const metadata = buildMetadata({
  title: "Pomeranian Puppy Reviews | Client Experiences",
  description:
    "Read reviews from families who reserved teacup and micro Pomeranian puppies through our Miami Beach-centered boutique service.",
  path: "/reviews"
});

export default function ReviewsPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
      <PageHero
        eyebrow="Reviews"
        title="Real feedback from families who wanted something polished, warm, and trustworthy"
        subtitle="We believe the experience should feel as reassuring as the puppy itself, and that is reflected in how families describe the process."
      />

      <section className="review-grid">
        {site.reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </section>

      <CtaPanel
        eyebrow="Ready when you are"
        title="Find your companion"
        text="Browse current availability or start a private inquiry — we'll guide you toward the right match."
        primary={{ href: "/available-puppies", label: "View Available Puppies" }}
        secondary={{ href: "/contact", label: "Start a Private Inquiry" }}
      />
    </div>
  );
}
