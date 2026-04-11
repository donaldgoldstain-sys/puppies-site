import { Metadata } from "next";
import { site } from "@/lib/site";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
