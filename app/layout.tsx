import type { Metadata } from "next";
import "./globals.css";
import { SiteHeaderShell } from "@/components/site-header-shell";
import { SiteFooter } from "@/components/site-footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Teacup Pomeranian Puppies | Premium Micro & Teacup Companions",
  description:
    "Premium teacup and micro Pomeranian puppies with a private, curated experience centered in Miami Beach and available across Florida and major U.S. cities.",
  path: "/"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeaderShell />
        <main className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
