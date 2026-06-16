import Link from "next/link";
import { site } from "@/lib/site";
import { getPuppyImage } from "@/lib/puppy-visuals";
import { PawDivider } from "@/components/primitives";
import {
  TextSection,
  IconCards,
  FaqAccordion,
  CtaPanel,
  TrustStrip,
  ReviewCard,
  type IconCardItem
} from "@/components/page-blocks";
import { PuppyGrid } from "@/components/puppy-grid";
import { ContactForm } from "@/components/contact-form";
import { ArrowRightIcon, PlaneIcon, PinIcon, HeartIcon, SparkleIcon, HeadsetIcon, ShieldCheckIcon } from "@/components/icons";

const approachCards: IconCardItem[] = [
  { icon: <SparkleIcon />, title: "Curated listings", desc: "Edited profiles with clear next steps." },
  { icon: <PlaneIcon />, title: "Warm delivery support", desc: "Pickup and travel planning that feels personal." },
  { icon: <HeadsetIcon />, title: "Boutique guidance", desc: "A calm, concierge-style inquiry experience." }
];

const whyCards: IconCardItem[] = [
  {
    icon: <SparkleIcon />,
    title: "Why families choose us",
    desc: "Our presentation feels warm, edited, and selective, with more care and clarity than a typical listing directory."
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Support from inquiry to pickup",
    desc: "We make next steps feel easy with clear guidance on size, temperament, records, reservation timing, and handoff planning."
  },
  {
    icon: <HeartIcon />,
    title: "Luxury that still feels personal",
    desc: "The experience is intentionally elevated without becoming cold, cluttered, or overly sales-driven."
  }
];

const processSteps = [
  "Browse available puppies or tell us what kind of companion you want.",
  "Review the most suitable options with clear size, temperament, and location details.",
  "Reserve with confidence once timing, records, and next steps feel aligned.",
  "Arrange pickup or delivery with support that feels polished and personal."
];

export default function HomePage() {
  const featured = site.puppies.filter((puppy) => puppy.featured);
  const topLocations = site.locations.slice(0, 6);
  const topColors = site.colors.slice(0, 4);

  return (
    <div className="container">
      {/* ===== HERO BANNERS ===== */}
      <section className="banners" aria-label="Highlights">
        <article className="banner banner-hero">
          <div className="banner-text">
            <p className="banner-tag">Private Miami Beach Concierge</p>
            <h1 className="banner-title">Tiny companions, presented with boutique warmth.</h1>
            <p className="banner-sub">
              Discover teacup and micro Pomeranian puppies through a softer, more curated experience with polished profiles, warm
              communication, and a premium path from first inquiry to homecoming.
            </p>
            <Link className="banner-cta" href="/available-puppies">
              View Available Puppies
              <span className="arrow" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
          <div className="banner-media" role="img" aria-label={featured[0].name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={getPuppyImage(featured[0])} alt={featured[0].name} />
          </div>
        </article>

        <article className="banner">
          <div className="banner-text">
            <p className="banner-tag">Nationwide Delivery</p>
            <h2 className="banner-title">Safe &amp; reliable delivery</h2>
            <p className="banner-sub">Private pickup, flight nanny, and ground delivery coordinated across the United States.</p>
            <Link className="banner-cta" href="/delivery">
              Learn More
              <span className="arrow" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
          <div className="banner-media">
            <span className="glyph">
              <PlaneIcon />
            </span>
          </div>
        </article>

        <article className="banner">
          <div className="banner-text">
            <p className="banner-tag">Miami Based</p>
            <h2 className="banner-title">Visit our showroom</h2>
            <p className="banner-sub">Private puppy appointments in Miami Beach, Florida.</p>
            <Link className="banner-cta" href="/contact">
              Book Appointment
              <span className="arrow" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
          <div className="banner-media">
            <span className="glyph">
              <PinIcon />
            </span>
          </div>
        </article>

        <article className="banner">
          <div className="banner-text">
            <p className="banner-tag">Real Families</p>
            <h2 className="banner-title">Happy families</h2>
            <p className="banner-sub">See real reviews from families who chose our boutique experience.</p>
            <Link className="banner-cta" href="/reviews">
              View Reviews
              <span className="arrow" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
          <div className="banner-media">
            <span className="glyph">
              <HeartIcon />
            </span>
          </div>
        </article>
      </section>

      <IconCards items={approachCards} />

      {/* ===== AVAILABLE PUPPIES ===== */}
      <section className="page-head">
        <h2>Our current boutique puppy collection</h2>
        <p className="sub">
          Image-first listings with refined details, soft luxury styling, and a clear path to ask about the puppy that feels right.
        </p>
        <PawDivider />
      </section>
      <PuppyGrid puppies={featured} />

      <TrustStrip />

      <IconCards items={whyCards} />

      {/* ===== MICRO FEATURE ===== */}
      <TextSection
        eyebrow="Micro Pomeranian Feature"
        title="Tiny in size, never treated like a trend."
        narrow
        paragraphs={[
          "Our micro collection is for families who want a very small companion with careful presentation, realistic size guidance, and an experience that feels private and reassuring from the first inquiry.",
          "White appears first across the collection, while orange, sable, chocolate, merle, black, and other polished color stories are presented according to current availability."
        ]}
      >
        <Link className="btn btn-outline" href="/micro-pomeranian-puppies" style={{ marginTop: 20 }}>
          Explore Micro Puppies
        </Link>
      </TextSection>

      {/* ===== APPROACH ===== */}
      <TextSection
        eyebrow="Our Approach"
        title="A softer, editorial way to choose the right puppy."
        narrow
        paragraphs={[
          "Every profile is designed to feel calm, visual, and easy to understand, with thoughtful details on size, temperament, and placement timing.",
          "We keep the experience personal for families in Miami Beach, South Florida, and destination cities across the U.S. who want premium presentation without pressure."
        ]}
      />

      {/* ===== COLORS ===== */}
      <section className="block">
        <div className="block-eyebrow">Color Preferences</div>
        <h2>A polished color collection, made easy to browse</h2>
      </section>
      <section className="link-grid">
        {topColors.map((color) => (
          <Link key={color.slug} href={`/colors/${color.slug}`} className="link-card">
            <p className="label">{color.shortName}</p>
            <h3>{color.name}</h3>
            <p>{color.overview}</p>
            <span className="more">View Color</span>
          </Link>
        ))}
      </section>

      {/* ===== PROCESS ===== */}
      <section className="block">
        <div className="block-eyebrow">A Refined Placement Experience</div>
        <h2>A simple, thoughtful process from inquiry to homecoming</h2>
      </section>
      <section className="steps-grid">
        {processSteps.map((step, index) => (
          <div className="step-card" key={step}>
            <div className="step-num">0{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </section>

      {/* ===== LOCATIONS ===== */}
      <section className="block">
        <div className="block-eyebrow">Where Families Find Us</div>
        <h2>Cities we currently serve</h2>
        <p>
          Miami Beach is our main hub, with additional placement and delivery support across Florida and a growing list of major
          U.S. cities.
        </p>
      </section>
      <section className="link-grid">
        {topLocations.map((location) => (
          <Link
            key={`${location.stateSlug}-${location.citySlug}`}
            href={`/locations/${location.stateSlug}/${location.citySlug}`}
            className="link-card"
          >
            <p className="label">{location.state}</p>
            <h3>{location.city}</h3>
            <p>{location.intro}</p>
            <span className="more">View City</span>
          </Link>
        ))}
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="block">
        <div className="block-eyebrow">Reviews Preview</div>
        <h2>What families say after the experience feels easy and right</h2>
      </section>
      <section className="review-grid">
        {site.reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </section>

      {/* ===== FAQ ===== */}
      <FaqAccordion eyebrow="FAQ Preview" title="Questions families ask before they reserve" items={site.faqs.slice(0, 4)} />

      <CtaPanel
        eyebrow="Final Step"
        title="Tell us the city, color, and size you're envisioning."
        text="We'll help you review current availability, compare similar puppies, and take the next step in a way that feels calm, direct, and well supported."
        primary={{ href: "/contact", label: "Start Your Inquiry" }}
        secondary={{ href: "/available-puppies", label: "View Available Puppies" }}
      />

      <ContactForm buttonLabel="Find My Puppy" />
    </div>
  );
}
