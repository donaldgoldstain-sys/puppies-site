import Link from "next/link";
import { site } from "@/lib/site";
import { Puppy } from "@/lib/types";
import { getPuppyImage } from "@/lib/puppy-visuals";

const availabilityStyles: Record<Puppy["availabilityStatus"], string> = {
  Available: "bg-white/82 text-stone-900",
  Reserved: "bg-[rgba(38,29,25,0.78)] text-white",
  "Coming Soon": "bg-[rgba(234,220,204,0.92)] text-stone-800"
};

export function PuppyCard({ puppy }: { puppy: Puppy }) {
  const whatsappNumber = site.phone.replace(/\D/g, "");
  const whatsappMsg = `Hi, I'm interested in ${puppy.name}. Please send more details.`;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;
  const image = getPuppyImage(puppy);

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,252,249,0.94),rgba(245,236,226,0.84))] shadow-[var(--shadow-soft)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/4.6] overflow-hidden bg-[linear-gradient(180deg,#fff8f0,#f0dfcf)]">
        <img src={image} alt={puppy.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
          <span className={`rounded-full px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] backdrop-blur ${availabilityStyles[puppy.availabilityStatus]}`}>
            {puppy.availabilityStatus}
          </span>
          <span className="rounded-full border border-white/45 bg-[rgba(255,250,245,0.7)] px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-stone-700 backdrop-blur">
            {puppy.gender}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--muted-soft)]">{puppy.sizeLabel} Companion</p>
              <h3 className="mt-2 font-serif text-[1.9rem] leading-none text-stone-950">{puppy.name}</h3>
            </div>
            <p className="text-right text-sm font-medium text-stone-900">{puppy.price}</p>
          </div>
          <p className="text-sm leading-6 text-[var(--muted)]">{puppy.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white/72 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.24em] text-stone-700">{puppy.color}</span>
          <span className="rounded-full bg-white/72 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.24em] text-stone-700">{puppy.expectedAdultSize}</span>
          <span className="rounded-full bg-white/72 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.24em] text-stone-700">{puppy.city}</span>
        </div>

        <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
          <Link href={`/puppies/${puppy.slug}`} className="button-primary px-4 py-3 text-center text-sm font-medium">
            View Puppy
          </Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="button-secondary px-4 py-3 text-center text-sm font-medium">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
