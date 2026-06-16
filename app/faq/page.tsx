import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { FaqAccordion, CtaPanel } from "@/components/page-blocks";

export const metadata = buildMetadata({
  title: "Pomeranian Puppy FAQ | Availability, Delivery and Care",
  description:
    "Answers to common questions about teacup and micro Pomeranian availability, delivery, care, and puppy matching.",
  path: "/faq"
});

export default function FAQPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <PageHero
        eyebrow="FAQ"
        title="Answers to the questions most families ask before they reserve"
        subtitle="From delivery and timing to color preferences and care notes, this page covers the practical details behind the polished presentation."
      />
      <FaqAccordion eyebrow="Common Questions" title="Before you reserve" items={site.faqs} />
      <CtaPanel
        eyebrow="Still have a question?"
        title="We're a message away"
        text="Tell us the city, color, and size you're envisioning and we'll guide you toward the best current fit."
        primary={{ href: "/contact", label: "Start a Private Inquiry" }}
        secondary={{ href: "/available-puppies", label: "View Available Puppies" }}
      />
    </div>
  );
}
