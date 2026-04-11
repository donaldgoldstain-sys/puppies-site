import { ReviewCard } from "@/components/review-card";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Pomeranian Puppy Reviews | Client Experiences",
  description: "Read reviews from families who reserved teacup and micro Pomeranian puppies through our Miami Beach-centered boutique service.",
  path: "/reviews"
});

export default function ReviewsPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow="Reviews" title="Real feedback from families who wanted something polished, warm, and trustworthy" description="We believe the experience should feel as reassuring as the puppy itself, and that is reflected in how families describe the process." />
      <div className="grid gap-6 lg:grid-cols-3">
        {site.reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </div>
  );
}
