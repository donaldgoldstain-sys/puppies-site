import { FAQList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Pomeranian Puppy FAQ | Availability, Delivery and Care",
  description: "Answers to common questions about teacup and micro Pomeranian availability, delivery, care, and puppy matching.",
  path: "/faq"
});

export default function FAQPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow="FAQ" title="Answers to the questions most families ask before they reserve" description="From delivery and timing to color preferences and care notes, this page covers the practical details behind the polished presentation." />
      <FAQList items={site.faqs} />
    </div>
  );
}
