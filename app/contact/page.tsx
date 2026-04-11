import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Us | Request a Teacup Pomeranian Puppy",
  description: "Contact us to ask about available teacup and micro Pomeranian puppies, delivery options, and curated city-specific matches.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-10">
      <PageHero eyebrow="Contact" title="Tell us what kind of puppy you’re looking for" description="Use the form below to ask about a specific puppy, request a similar match, or start with city, size, and color preferences." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-8">
          <h2 className="font-serif text-3xl text-stone-900">Direct contact</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p><span className="font-medium text-stone-900">Phone:</span> {site.phone}</p>
            <p><span className="font-medium text-stone-900">Email:</span> {site.email}</p>
            <p><span className="font-medium text-stone-900">Main hub:</span> {site.location}</p>
            <p><span className="font-medium text-stone-900">Address:</span> {site.address}</p>
          </div>
        </div>
        <LeadForm buttonLabel="Request This Puppy" formName="contact-inquiry" />
      </div>
    </div>
  );
}
