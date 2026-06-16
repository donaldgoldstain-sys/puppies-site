import { buildMetadata } from "@/lib/seo";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { TextSection } from "@/components/page-blocks";
import { ContactForm } from "@/components/contact-form";

export const metadata = buildMetadata({
  title: "Adoption Process | A Refined Pomeranian Placement Experience",
  description: "Learn how our placement process works from first inquiry to reservation, pickup, and delivery planning.",
  path: "/adoption-process"
});

const steps = [
  "Begin with your preferred city, size range, color direction, and the personality you want at home.",
  "Review the most relevant available puppies or upcoming options with clear details and honest guidance.",
  "Reserve once the fit feels right and the next steps around timing, records, and care are fully clear.",
  "Coordinate pickup or delivery with support designed to keep the transition calm, organized, and personal."
];

export default function AdoptionProcessPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Adoption Process" }]} />
      <PageHero
        eyebrow="Adoption Process"
        title="A calm, polished process from first message to homecoming"
        subtitle="We keep the path simple and supportive so families feel guided rather than rushed."
      />

      <TextSection
        eyebrow="How It Works"
        title="Four thoughtful steps"
        narrow
        paragraphs={[
          "Each step is designed to add clarity, not pressure — from your first message to the day your puppy comes home."
        ]}
      />

      <section className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={step}>
            <div className="step-num">0{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </section>

      <ContactForm
        eyebrow="Begin"
        title="Start the process"
        description="If you already know the city or puppy style you want, include that and we'll make the first reply more tailored."
        buttonLabel="Start the Process"
        formName="adoption-inquiry"
      />
    </div>
  );
}
