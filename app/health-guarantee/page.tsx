import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { IconCards, Checklist, FaqAccordion, type IconCardItem } from "@/components/page-blocks";
import { CertificateIcon, ClockIcon, HeadsetIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "Health Guarantee | Premium Pomeranian Puppy Care",
  description:
    "Review our health-focused commitment, care standards, records, and transition support for companion puppy placements.",
  path: "/health-guarantee"
});

const commitments: IconCardItem[] = [
  {
    icon: <CertificateIcon />,
    title: "Veterinary attention",
    desc: "Every puppy profile is supported by age-appropriate care notes and health-focused details before placement."
  },
  {
    icon: <ClockIcon />,
    title: "Records included",
    desc: "Families receive relevant vaccination timing, routine guidance, and transition notes so the first days at home feel less uncertain."
  },
  {
    icon: <HeadsetIcon />,
    title: "Support beyond the listing",
    desc: "Questions around pickup, travel, feeding, and settling in are part of the experience, not an afterthought."
  }
];

const healthFaqs = [site.faqs[2], site.faqs[0], site.faqs[4]].filter(Boolean);

export default function HealthGuaranteePage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Health Guarantee" }]} />
      <PageHero
        eyebrow="Health Guarantee"
        title="Health-focused placement with clear records and thoughtful transition support"
        subtitle="We believe premium presentation should be matched by practical clarity around care, documentation, and homecoming preparation."
      />

      <IconCards items={commitments} />

      <Checklist
        eyebrow="What's Included"
        title="Every placement comes with"
        items={[
          "Age-appropriate veterinary care notes",
          "Relevant vaccination and deworming timing",
          "A practical first-week transition guide",
          "Direct support for travel, feeding, and settling in"
        ]}
      />

      <FaqAccordion eyebrow="Health FAQ" title="Care and placement questions" items={healthFaqs} />
    </div>
  );
}
