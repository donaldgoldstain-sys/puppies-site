import Link from "next/link";
import { PawDivider } from "@/components/primitives";

export default function NotFound() {
  return (
    <div className="container">
      <section className="notfound">
        <p className="eyebrow">Page Not Found</p>
        <h1>That puppy page wandered off.</h1>
        <p>Try browsing our available puppies, color pages, or city landing pages to find the right match.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/available-puppies">
            View Available Puppies
          </Link>
          <Link className="btn btn-outline" href="/areas-we-serve">
            Explore Areas We Serve
          </Link>
        </div>
        <PawDivider />
      </section>
    </div>
  );
}
