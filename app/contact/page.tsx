import { buildMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { InfoCards, type InfoCardItem } from "@/components/page-blocks";
import { ContactForm } from "@/components/contact-form";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "Contact Us | Request a Teacup Pomeranian Puppy",
  description:
    "Contact us to ask about available teacup and micro Pomeranian puppies, delivery options, and curated city-specific matches.",
  path: "/contact"
});

const details: InfoCardItem[] = [
  { icon: <PhoneIcon />, label: "Call", value: site.phone, href: telHref() },
  { icon: <MailIcon />, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: <PinIcon />,
    label: "Main Hub",
    value: (
      <>
        {site.location}
        <br />
        {site.address}
      </>
    )
  }
];

export default function ContactPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Tell us what kind of puppy you're looking for"
        subtitle="Use the form below to ask about a specific puppy, request a similar match, or start with city, size, and color preferences."
      />

      <InfoCards items={details} />

      <ContactForm
        eyebrow="Send a Message"
        title="Tell us a little about you"
        description="Share your ideal size, color, city, and timing. We'll guide you toward the most fitting current or upcoming puppy."
        buttonLabel="Request This Puppy"
        formName="contact-inquiry"
      />
    </div>
  );
}
