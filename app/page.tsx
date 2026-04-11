import Link from "next/link";
import { FAQList } from "@/components/faq-list";
import { LeadForm } from "@/components/lead-form";
import { PuppyCard } from "@/components/puppy-card";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = site.puppies.filter((puppy) => puppy.featured);
  const topLocations = site.locations.slice(0, 6);
  const topColors = site.colors.slice(0, 4);

  return (
    <div className="space-y-16 pb-10 pt-2 sm:space-y-20">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,237,227,0.98))] px-5 py-10 shadow-[var(--shadow)] sm:rounded-[2.8rem] sm:bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(246,237,227,0.96)_48%,rgba(231,220,207,0.98))] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute -right-10 top-8 hidden h-52 w-52 rounded-full bg-white/60 blur-3xl sm:block" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,132,89,0.35),transparent)]" />
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-[var(--gold)]">Miami Beach Private Puppy Boutique</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.02] text-stone-900 sm:text-6xl sm:leading-[0.96]">
            Teacup and micro Pomeranian puppies with a softer, more refined way to inquire.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            Discover polished companion puppies through a curated experience centered in Miami Beach, designed for families who want warmth, clarity, and a genuinely premium presentation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/available-puppies" className="rounded-full bg-stone-950 px-6 py-3.5 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-800">
              View Available Puppies
            </Link>
            <Link href="/contact" className="rounded-full border border-[var(--border)] bg-white/90 px-6 py-3.5 text-center text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:border-stone-900">
              Request Private Guidance
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["Miami Beach", "Main appointment hub"],
              ["12 cities", "Currently served"],
              ["White first", "Balanced color collection"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.2rem] border border-white/70 bg-white/88 p-4 sm:rounded-[1.45rem] sm:bg-white/72">
                <p className="font-serif text-xl text-stone-900 sm:text-3xl">{value}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-[2.4rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,236,226,0.92))] p-6 shadow-[var(--shadow)] sm:p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[var(--gold)]">What Makes This Feel Different</p>
            <h2 className="mt-3 font-serif text-2xl leading-tight text-stone-900 sm:text-3xl">A private, curated placement experience.</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <p>Thoughtfully written puppy profiles with size, temperament, availability, and health-focused notes.</p>
              <p>City-aware support for Miami Beach, South Florida, and major destination markets across the U.S.</p>
              <p>A warm, polished brand voice that feels boutique rather than generic breeder advertising.</p>
            </div>
          </div>
          <LeadForm buttonLabel="Find My Puppy" />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Available Companion Puppies"
          title="Current teacup and micro Pomeranian listings"
          description="A curated mix of white-first favorites and beautifully presented color variations, each with polished details and a clear next step."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {featured.map((puppy) => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {[
          ["Why families choose us", "Our presentation is warm and selective, with a calmer pace and more personalized guidance than a typical listing directory."],
          ["Thoughtful support from inquiry to pickup", "We make next steps feel clear with transparent details on size, temperament, records, reservation timing, and handoff planning."],
          ["A premium experience that still feels personal", "The brand is designed to feel visually elevated without becoming cold, overwhelming, or sales-driven."]
        ].map(([title, description]) => (
          <article key={title} className="rounded-[2rem] border border-[var(--border)] bg-white/90 p-6 sm:p-7 shadow-[0_24px_60px_-44px_rgba(57,42,31,0.4)]">
            <h2 className="font-serif text-xl text-stone-900 sm:text-2xl">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-[2.2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,238,231,0.96))] p-5 shadow-[var(--shadow)] sm:gap-8 sm:rounded-[2.6rem] sm:p-6 lg:grid-cols-[1fr_1.1fr] lg:p-10">
        <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(239,226,211,0.94))] p-6 sm:rounded-[2rem] sm:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[var(--gold)]">Micro Pomeranian Feature</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">Tiny in size, but never treated like a trend item.</h2>
        </div>
        <div>
          <p className="text-base leading-7 text-[var(--muted)] sm:leading-8">
            Our micro collection is for families who want a very small companion with careful presentation, realistic size guidance, and an experience that feels private and reassuring from the first inquiry.
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:leading-8">
            White appears first across the collection, but the brand naturally includes orange, sable, chocolate, merle, black, and other polished color stories depending on availability.
          </p>
          <Link href="/micro-pomeranian-puppies" className="mt-6 inline-flex rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-900">
            Explore Micro Puppies
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Color Preferences" title="A color collection that feels balanced, polished, and easy to browse" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {topColors.map((color) => (
            <Link
              key={color.slug}
              href={`/colors/${color.slug}`}
              className={`rounded-[2rem] border border-[var(--border)] bg-gradient-to-br ${color.accentClass} p-6 shadow-[0_24px_60px_-44px_rgba(57,42,31,0.35)] transition hover:-translate-y-1`}
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-stone-500">{color.shortName}</p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">{color.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{color.overview}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="A Refined Placement Experience" title="A simple, thoughtful process from first inquiry to homecoming" />
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["01", "Browse available puppies or tell us what kind of companion you want."],
            ["02", "Review the most suitable current options with clear size, temperament, and location details."],
            ["03", "Reserve with confidence once timing, records, and next steps feel aligned."],
            ["04", "Arrange pickup or delivery with support that feels polished and personal."]
          ].map(([step, label]) => (
            <div key={step} className="rounded-[2rem] border border-[var(--border)] bg-white/90 p-6">
              <p className="font-serif text-4xl text-stone-900">{step}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Where Families Find Us" title="Cities we currently serve" description="Miami Beach is our main hub, with additional placement and delivery support across Florida and a growing list of major U.S. cities." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topLocations.map((location) => (
            <Link
              key={`${location.stateSlug}-${location.citySlug}`}
              href={`/locations/${location.stateSlug}/${location.citySlug}`}
              className="rounded-[2rem] border border-[var(--border)] bg-white/92 p-6 transition hover:-translate-y-1"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-stone-500">{location.state}</p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">{location.city}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{location.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Reviews Preview" title="What families say after the experience feels easy and right" />
        <div className="grid gap-6 lg:grid-cols-3">
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
        <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,#211a17,#3a2d26,#78614c)] p-6 text-white shadow-[var(--shadow)] sm:rounded-[2.5rem] sm:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-stone-300">Final Step</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Tell us the city, color, and size you’re envisioning.</h2>
          <p className="mt-4 text-sm leading-7 text-stone-200 sm:leading-8">
            We’ll help you review current availability, compare similar puppies, and take the next step in a way that feels calm, direct, and well supported.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5">
            Start Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
