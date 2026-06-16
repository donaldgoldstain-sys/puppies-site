import Link from "next/link";
import { telHref, whatsappUrl } from "@/lib/site";
import { WHATSAPP_ICON } from "@/lib/header-icons";
import { PhoneIcon, PawIcon } from "@/components/icons";

// Site-wide mobile sticky action bar. Hidden at >=1024px and suppressed on the
// puppy-detail page (which has its own product CTA) via globals.css.
export function StickyBar() {
  return (
    <div className="sticky-bar" role="region" aria-label="Quick contact">
      <a className="sticky-btn outline" href={telHref()}>
        <PhoneIcon strokeWidth={2} />
        Call
      </a>
      <a className="sticky-btn outline" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="wa-glyph" src={WHATSAPP_ICON} alt="" />
        Text
      </a>
      <Link className="sticky-btn dark" href="/available-puppies">
        <PawIcon />
        Puppies
      </Link>
    </div>
  );
}
