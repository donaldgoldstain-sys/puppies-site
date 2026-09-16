import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

const staticPaths = [
  "/",
  "/available-puppies",
  "/micro-pomeranian-puppies",
  "/pomeranian-colors",
  "/adoption-process",
  "/health-guarantee",
  "/delivery",
  "/reviews",
  "/faq",
  "/about",
  "/contact",
  "/areas-we-serve"
] as const;

// Required by Next.js for metadata routes under `output: "export"`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority });

  return [
    ...staticPaths.map((path) =>
      entry(path, path === "/" ? 1 : path === "/available-puppies" ? 0.9 : 0.6, path === "/available-puppies" ? "daily" : "weekly")
    ),
    ...site.puppies.map((puppy) => entry(`/puppies/${puppy.slug}`, 0.8, "daily" as const)),
    ...site.colors.map((color) => entry(`/colors/${color.slug}`, 0.7, "weekly" as const)),
    ...site.locations.map((location) =>
      entry(`/locations/${location.stateSlug}/${location.citySlug}`, 0.7, "weekly" as const)
    )
  ];
}
