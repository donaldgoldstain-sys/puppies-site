import { buildMetadata } from "@/lib/seo";
import { Breadcrumb, PageHero } from "@/components/primitives";
import { ImageTextSection, IconCards, Checklist, type IconCardItem } from "@/components/page-blocks";
import { ContactForm } from "@/components/contact-form";
import { PinIcon, PlaneIcon, MailIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "Pomeranian Puppy Delivery | Miami Beach and U.S. City Coordination",
  description:
    "Learn about Miami Beach pickup, Florida handoff planning, and tailored delivery coordination for major U.S. cities.",
  path: "/delivery"
});

const options: IconCardItem[] = [
  {
    icon: <PinIcon />,
    title: "Miami Beach pickup",
    desc: "Private appointments can be coordinated from our Miami Beach hub for families who prefer an in-person handoff."
  },
  {
    icon: <MailIcon />,
    title: "Florida delivery",
    desc: "South Florida and statewide coordination are available depending on route, puppy timing, and family preference."
  },
  {
    icon: <PlaneIcon />,
    title: "Out-of-state planning",
    desc: "For cities such as Los Angeles, New York, Chicago, Atlanta, and Las Vegas, we help plan a safe and polished next step."
  }
];

export default function DeliveryPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Delivery" }]} />
      <PageHero
        eyebrow="Delivery"
        title="Pickup and delivery designed to feel clear, private, and well paced"
        subtitle="Miami Beach is our main hub, with additional coordination available across Florida and select U.S. cities."
      />

      <ImageTextSection
        title="A calm, coordinated handoff"
        glyph={<PlaneIcon />}
        paragraphs={[
          "We keep the logistics simple and reassuring, whether you are meeting your puppy in Miami Beach or planning a longer journey home.",
          "Every plan is built around the puppy's comfort and your timing, with clear communication at each step."
        ]}
      />

      <IconCards items={options} />

      <Checklist
        eyebrow="What to Expect"
        title="Every delivery plan includes"
        items={[
          "Private Miami Beach pickup by appointment",
          "Statewide Florida handoff and route coordination",
          "Flight nanny and ground options for major U.S. cities",
          "Clear timing, travel-day guidance, and direct updates"
        ]}
      />

      <ContactForm
        eyebrow="Plan Your Delivery"
        title="Tell us your city and timeline"
        description="Share your city and timeline so we can recommend the cleanest pickup or delivery path."
        buttonLabel="Ask About Delivery"
        formName="delivery-inquiry"
      />
    </div>
  );
}
