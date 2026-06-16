import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { calculateAge, formatDate } from "@/lib/utils";
import { PuppyDetail } from "@/components/puppy-detail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return site.puppies.map((puppy) => ({ slug: puppy.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const puppy = site.puppies.find((entry) => entry.slug === slug);

  if (!puppy) {
    return {};
  }

  return buildMetadata({
    title: `${puppy.name} | ${puppy.color} Pomeranian Puppy for Sale`,
    description: `${puppy.shortDescription} View premium puppy details, health notes, and request ${puppy.name} today.`,
    path: `/puppies/${puppy.slug}`
  });
}

export default async function PuppyPage({ params }: Props) {
  const { slug } = await params;
  const puppy = site.puppies.find((entry) => entry.slug === slug);

  if (!puppy) {
    notFound();
  }

  const similar = site.puppies
    .filter((entry) => entry.slug !== puppy.slug && (entry.colorSlug === puppy.colorSlug || entry.city === puppy.city))
    .slice(0, 3);

  return <PuppyDetail puppy={puppy} dob={formatDate(puppy.birthDate)} age={calculateAge(puppy.birthDate)} similar={similar} />;
}
