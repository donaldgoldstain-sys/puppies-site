import { Metadata } from "next";
import { site } from "@/lib/site";

// next.config sets `trailingSlash: true`, so every page URL we emit must carry
// the slash to match the canonical Next.js renders. File routes keep their name.
export function absoluteUrl(path = "/") {
  const url = new URL(path, site.url);
  const isFile = /\.[^/]+$/.test(url.pathname);

  if (!isFile && !url.pathname.endsWith("/")) {
    url.pathname = `${url.pathname}/`;
  }

  return url.toString();
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
