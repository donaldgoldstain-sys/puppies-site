import Link from "next/link";
import { FAQList } from "@/components/faq-list";
import { LeadForm } from "@/components/lead-form";
import { PuppyCard } from "@/components/puppy-card";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { getPuppyImage } from "@/lib/puppy-visuals";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = site.puppies.filter((puppy) => puppy.featured);
  const topLocations = site.locations.slice(0, 6);
  const topColors = site.colors.slice(0, 4);
  const heroPuppies = featured.slice(0, 3);

  return (
    <div className="space-y-14 pb-10 sm:space-y-18 lg:space-y-22">
      <section className="relative overflow-hidden rounded-[2.4rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,252,248,0.86),rgba(247,238,228,0.76)_48%,rgba(240,224,208,0.88))] px-5 py-5 shadow-[var(--shadow-card)] backdrop-blur-xl sm:px-7 sm:py-7 lg:px-8 lg:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(248,228,204,0.56),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="px-1 py-2 sm:px-2 lg:py-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-deep)]">Private Miami Beach Puppy Concierge</p>
            <h1 className="mt-4 max-w-xl font-serif text-[3rem] leading-[0.9] text-stone-950 sm:text-[4.5rem] lg:text-[5.6rem]">
              Tiny companions, presented with boutique warmth.
            </h1>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-7 text-[var(--muted)] sm:text-[1.08rem] sm:leading-8">
              Discover teacup and micro Pomeranian puppies through a softer, more curated experience with polished profiles, warm communication, and a premium path from first inquiry to homecoming.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/available-puppies" className="button-primary px-6 py-3.5 text-center text-sm font-medium">
                View Available Puppies
              </Link>
              <Link href="/contact" className="button-secondary px-6 py-3.5 text-center text-sm font-medium">
                Start a Private Inquiry
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Curated listings", "Edited profiles with clear next steps"],
                ["Warm delivery support", "Pickup and travel planning that feels personal"],
                ["Boutique guidance", "A calm, concierge-style inquiry experience"]
              ].map(([title, label]) => (
                <div key={title} className="rounded-[1.4rem] border border-white/50 bg-white/45 p-4 backdrop-blur-xl">
                  <p className="text-sm font-medium text-stone-950">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.25fr_0.75fr] lg:h-full">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/45 bg-[#efe1d2] shadow-[0_26px_70px_-36px_rgba(88,60,39,0.35)] sm:min-h-[32rem]">
              <img src={getPuppyImage(heroPuppies[0])} alt={heroPuppies[0].name} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(34,25,22,0),rgba(34,25,22,0.7))] p-5 text-white sm:p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/80">Featured Companion</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-[2rem] leading-none sm:text-[2.4rem]">{heroPuppies[0].name}</p>
                    <p className="mt-2 text-sm text-white/80">{heroPuppies[0].descriptor}</p>
                  </div>
                  <p className="text-sm font-medium text-white/90">{heroPuppies[0].price}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              {heroPuppies.slice(1).map((puppy) => (
                <div key={puppy.id} className="glass-panel overflow-hidden rounded-[1.7rem] p-3">
                  <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.3rem]">
                    <img src={getPuppyImage(puppy)} alt={puppy.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="px-1 pb-1 pt-4">
                    <p className="text-[0.66rem] uppercase tracking-[0.3em] text-[var(--muted-soft)]">{puppy.sizeLabel} Spotlight</p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="font-serif text-[1.7rem] leading-none text-stone-950">{puppy.name}</p>
                      <span className="rounded-full bg-white/70 px-3 py-1 text-[0.64rem] uppercase tracking-[0.24em] text-stone-700">{puppy.color}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{puppy.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-deep)]">Our Approach</p>
          <h2 className="mt-3 max-w-lg font-serif text-[2rem] leading-tight text-stone-950 sm:text-[2.6rem]">
            A softer, editorial way to choose the right puppy.
          </h2>
          <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--muted)] sm:grid-cols-2">
            <p>Every profile is designed to feel calm, visual, and easy to understand, with thoughtful details on size, temperament, and placement timing.</p>
            <p>We keep the experience personal for families in Miami Beach, South Florida, and destination cities across the U.S. who want premium presentation without pressure.</p>
          </div>
        </div>
        <LeadForm buttonLabel="Find My Puppy" />
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Available Companion Puppies"
          title="Our current boutique puppy collection"
          description="Image-first listings with refined details, soft luxury styling, and a clear path to ask about the puppy that feels right."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {featured.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {[
          ["Why families choose us", "Our presentation feels warm, edited, and selective, with more care and clarity than a typical listing directory."],
          ["Support from inquiry to pickup", "We make next steps feel easy with clear guidance on size, temperament, records, reservation timing, and handoff planning."],
          ["Luxury that still feels personal", "The experience is intentionally elevated without becoming cold, cluttered, or overly sales-driven."]
        ].map(([title, description]) => (
          <article key={title} className="section-card p-6 sm:p-7">
            <h2 className="font-serif text-2xl text-stone-950">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-[2.2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,252,247,0.88),rgba(246,236,226,0.78)_48%,rgba(239,225,209,0.9))] p-5 shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div className="rounded-[1.7rem] border border-white/50 bg-white/45 p-6 backdrop-blur-xl sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent-deep)]">Micro Pomeranian Feature</p>
          <h2 className="mt-4 font-serif text-[2.25rem] leading-[1.02] text-stone-950 sm:text-[3rem]">Tiny in size, never treated like a trend.</h2>
        </div>
        <div>
          <p className="text-base leading-7 text-[var(--muted)] sm:leading-8">
            Our micro collection is for families who want a very small companion with careful presentation, realistic size guidance, and an experience that feels private and reassuring from the first inquiry.
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:leading-8">
            White appears first across the collection, while orange, sable, chocolate, merle, black, and other polished color stories are presented according to current availability.
          </p>
          <Link href="/micro-pomeranian-puppies" className="button-secondary mt-6 inline-flex px-5 py-3 text-sm font-medium">
            Explore Micro Puppies
          </Link>
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading eyebrow="Color Preferences" title="A polished color collection, made easy to browse" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {topColors.map((color) => (
            <Link
              key={color.slug}
              href={`/colors/${color.slug}`}
              className={`section-card rounded-[1.9rem] bg-gradient-to-br ${color.accentClass} p-6 transition hover:-translate-y-1`}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-stone-500">{color.shortName}</p>
              <h3 className="mt-3 font-serif text-2xl text-stone-950">{color.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{color.overview}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading eyebrow="A Refined Placement Experience" title="A simple, thoughtful process from inquiry to homecoming" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["01", "Browse available puppies or tell us what kind of companion you want."],
            ["02", "Review the most suitable options with clear size, temperament, and location details."],
            ["03", "Reserve with confidence once timing, records, and next steps feel aligned."],
            ["04", "Arrange pickup or delivery with support that feels polished and personal."]
          ].map(([step, label]) => (
            <div key={step} className="section-card p-6">
              <p className="font-serif text-4xl text-stone-950">{step}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading
          eyebrow="Where Families Find Us"
          title="Cities we currently serve"
          description="Miami Beach is our main hub, with additional placement and delivery support across Florida and a growing list of major U.S. cities."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topLocations.map((location) => (
            <Link
              key={`${location.stateSlug}-${location.citySlug}`}
              href={`/locations/${location.stateSlug}/${location.citySlug}`}
              className="section-card p-6 transition hover:-translate-y-1"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-stone-500">{location.state}</p>
              <h3 className="mt-3 font-serif text-2xl text-stone-950">{location.city}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{location.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <SectionHeading eyebrow="Reviews Preview" title="What families say after the experience feels easy and right" />
        <div className="grid gap-5 lg:grid-cols-3">
          {site.reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <SectionHeading eyebrow="FAQ Preview" title="Questions families ask before they reserve" />
          <div className="mt-8">
            <FAQList items={site.faqs.slice(0, 4)} />
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[rgba(35,27,24,0.18)] bg-[linear-gradient(135deg,#1f1816,#3e3027,#7e6654)] p-6 text-white shadow-[var(--shadow-card)] sm:rounded-[2.5rem] sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-stone-300">Final Step</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Tell us the city, color, and size you’re envisioning.</h2>
          <p className="mt-4 text-sm leading-7 text-stone-200 sm:leading-8">
            We’ll help you review current availability, compare similar puppies, and take the next step in a way that feels calm, direct, and well supported.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-950 transition hover:-translate-y-0.5">
            Start Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
