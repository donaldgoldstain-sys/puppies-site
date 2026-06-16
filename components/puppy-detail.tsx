"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Puppy } from "@/lib/types";
import { getPuppyImage } from "@/lib/puppy-visuals";
import { puppyTypeLabel, colorDotHex, isPriceOnRequest } from "@/lib/puppy-format";
import { site, telHref, smsHref, whatsappUrl } from "@/lib/site";
import { Breadcrumb } from "@/components/primitives";
import { PuppyCard } from "@/components/puppy-card";
import { ContactForm } from "@/components/contact-form";
import { GenderIcon, RulerIcon, CircleIcon, PinIcon, CheckIcon, ChatIcon, PhoneIcon, SmsIcon } from "@/components/icons";

const deliveryOptions = [
  { value: "pickup", title: "Miami Beach Pickup", sub: "Private appointment pickup from our Miami Beach hub.", meta: "Included" },
  { value: "flight", title: "Flight Nanny Delivery", sub: "In-cabin puppy transport coordinated to your nearest major airport.", meta: "Quote on request" },
  { value: "ground", title: "Ground Delivery", sub: "Private door-to-door coordination for Florida and regional destinations.", meta: "Quote on request" }
];

export function PuppyDetail({
  puppy,
  dob,
  age,
  similar
}: {
  puppy: Puppy;
  dob: string;
  age: string;
  similar: Puppy[];
}) {
  const [delivery, setDelivery] = useState("pickup");
  const typeLabel = puppyTypeLabel(puppy);
  const onRequest = isPriceOnRequest(puppy.price);
  const selected = deliveryOptions.find((o) => o.value === delivery);
  const reserveMessage = `Hi, I'm interested in ${puppy.name} (${typeLabel}${onRequest ? "" : `, ${puppy.price}`}). Preferred option: ${selected?.title}. Please share next steps.`;

  return (
    <div className="product-page">
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Available Puppies", href: "/available-puppies" },
            { label: puppy.name }
          ]}
        />

        <section className="product">
          <div className="gallery">
            <div className="gallery-main">
              <div className="slide is-active">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={getPuppyImage(puppy)} alt={`${puppy.name}, ${typeLabel}`} />
              </div>
            </div>
            {puppy.galleryImages.length > 0 ? (
              <ul className="gallery-notes" aria-label="Gallery">
                {puppy.galleryImages.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="info">
            <div className="eyebrow">{puppy.availabilityStatus}</div>
            <h1>{puppy.name}</h1>
            <div className="breed">{typeLabel}</div>
            <div className="price">{puppy.price}</div>

            <div className="chips">
              <span className="chip">
                <GenderIcon />
                {puppy.gender}
              </span>
              <span className="chip">
                <RulerIcon />
                {puppy.expectedAdultSize} adult
              </span>
              <span className="chip">
                <CircleIcon />
                {puppy.color}
              </span>
              <span className="chip">
                <PinIcon />
                {puppy.city}, {puppy.state}
              </span>
            </div>

            <p className="description">{puppy.shortDescription}</p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Details</h2>
          <div className="details-grid">
            <div className="detail-row">
              <span className="detail-label">Gender</span>
              <span className="detail-value">{puppy.gender}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Color</span>
              <span className="detail-value">{puppy.color}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date of Birth</span>
              <span className="detail-value">{dob}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Current Age</span>
              <span className="detail-value">{age}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Size Category</span>
              <span className="detail-value">{puppy.sizeLabel}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Expected Adult Size</span>
              <span className="detail-value">{puppy.expectedAdultSize}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location</span>
              <span className="detail-value">
                {puppy.city}, {puppy.state}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Availability</span>
              <span className="detail-value">{puppy.availabilityStatus}</span>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Personality</h2>
          <p className="lead">{puppy.personalityProfile}</p>
          <div className="chips">
            {puppy.temperament.map((trait) => (
              <span className="chip" key={trait}>
                {trait}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Health &amp; Care</h2>
          <p className="lead">{puppy.healthNote}</p>
          <ul className="checklist">
            {puppy.healthInfo.map((item) => (
              <li key={item}>
                <span className="check">
                  <CheckIcon />
                </span>
                <span className="text">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Delivery Options</h2>
          <div className="option-cards">
            {deliveryOptions.map((option) => (
              <label className={cn("option-card", delivery === option.value && "is-selected")} key={option.value}>
                <input
                  type="radio"
                  name="delivery"
                  value={option.value}
                  checked={delivery === option.value}
                  onChange={() => setDelivery(option.value)}
                />
                <span className="radio" />
                <div className="option-title">{option.title}</div>
                <div className="option-sub">{option.sub}</div>
                <div className="option-meta">{option.meta}</div>
              </label>
            ))}
          </div>

          <div className="cta-block">
            <a className="btn btn-primary" href={whatsappUrl(reserveMessage)} target="_blank" rel="noopener noreferrer">
              Reserve via WhatsApp
            </a>
            <Link className="btn btn-outline" href="/contact">
              Ask a Question
            </Link>
          </div>

          <div className="contact-bar">
            <a className="contact-link" href={whatsappUrl(reserveMessage)} target="_blank" rel="noopener noreferrer">
              <ChatIcon strokeWidth={1.8} />
              WhatsApp
            </a>
            <a className="contact-link" href={telHref()}>
              <PhoneIcon strokeWidth={1.8} />
              Call
            </a>
            <a className="contact-link" href={smsHref()}>
              <SmsIcon strokeWidth={1.8} />
              Text
            </a>
          </div>
        </section>

        <ContactForm
          eyebrow="Reserve"
          title={`Request ${puppy.name}`}
          description="Ask about this specific puppy or request a similar match if availability changes."
          buttonLabel="Request This Puppy"
          formName={`${puppy.slug}-request`}
        />

        {similar.length > 0 ? (
          <section className="section">
            <h2 className="section-title">Similar Puppies</h2>
            <div className="puppy-grid">
              {similar.map((entry) => (
                <PuppyCard key={entry.id} puppy={entry} />
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <div className="sticky-cta" role="region" aria-label="Reserve this puppy">
        <div className="pinfo">
          <div className="pname">{puppy.name}</div>
          <div className="pprice">
            {puppy.price}
            {onRequest ? "" : " · "}
            {onRequest ? typeLabel : `${puppy.sizeLabel} ${puppy.color}`}
          </div>
        </div>
        <a className="btn btn-primary" href={whatsappUrl(reserveMessage)} target="_blank" rel="noopener noreferrer">
          Reserve
        </a>
      </div>
    </div>
  );
}

// Surfaced so the page can reference the same brand contact details if needed.
export const detailContact = { phone: site.phone, email: site.email };
