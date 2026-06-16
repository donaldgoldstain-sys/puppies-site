"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Puppy } from "@/lib/types";
import { getPuppyImage } from "@/lib/puppy-visuals";
import { colorDotHex, puppyTypeLabel, availability } from "@/lib/puppy-format";
import { HeartIcon } from "@/components/icons";

export function PuppyCard({ puppy }: { puppy: Puppy }) {
  const [liked, setLiked] = useState(false);
  const badge = availability(puppy.availabilityStatus);
  const isFemale = puppy.gender === "Female";

  return (
    <article className="puppy-card">
      <div className="puppy-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={getPuppyImage(puppy)} alt={`${puppy.name}, ${puppyTypeLabel(puppy)}`} />
        <span className={badge.className}>{badge.label}</span>
        <button
          type="button"
          className={cn("heart-btn", liked && "is-liked")}
          aria-label={liked ? "Remove from favorites" : "Save to favorites"}
          aria-pressed={liked}
          onClick={() => setLiked((value) => !value)}
        >
          <HeartIcon />
        </button>
      </div>
      <div className="puppy-body">
        <div className="puppy-head">
          <h3 className="puppy-name">{puppy.name}</h3>
          <span className="puppy-price">{puppy.price}</span>
        </div>
        <p className="puppy-type">{puppyTypeLabel(puppy)}</p>
        <div className="puppy-chips">
          <span className="puppy-chip">
            <span className={cn("gender-glyph", isFemale ? "f" : "m")}>{isFemale ? "♀" : "♂"}</span>
            {puppy.gender}
          </span>
          <span className="puppy-chip">{puppy.sizeLabel}</span>
          <span className="puppy-chip">
            <span className="dot" style={{ background: colorDotHex(puppy.color) }} />
            {puppy.color}
          </span>
        </div>
        <Link href={`/puppies/${puppy.slug}`} className="view-puppy-btn">
          View Puppy
        </Link>
      </div>
    </article>
  );
}
