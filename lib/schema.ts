import { absoluteUrl } from "@/lib/seo";
import { site, telHref } from "@/lib/site";
import type { ColorEntry, LocationEntry, Puppy } from "@/lib/types";

type Node = Record<string, unknown>;

export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: site.postalAddress.street,
  addressLocality: site.postalAddress.city,
  addressRegion: site.postalAddress.region,
  postalCode: site.postalAddress.postalCode,
  addressCountry: site.postalAddress.country
});

export function organizationSchema(): Node {
  return {
    "@type": "PetStore",
    "@id": organizationId,
    name: site.name,
    url: site.url,
    description: site.tagline,
    telephone: telHref().replace("tel:", ""),
    email: site.email,
    address: postalAddress(),
    areaServed: site.locations.map((location) => ({
      "@type": "City",
      name: location.city,
      containedInPlace: { "@type": "State", name: location.state }
    }))
  };
}

export function websiteSchema(): Node {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    inLanguage: "en-US",
    publisher: { "@id": organizationId }
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {})
    }))
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): Node {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

const availabilityUrl = (status: Puppy["availabilityStatus"]) => {
  switch (status) {
    case "Available":
      return "https://schema.org/InStock";
    case "Reserved":
      return "https://schema.org/SoldOut";
    default:
      return "https://schema.org/PreOrder";
  }
};

// Prices are authored for display ("$5,800"); Offer needs a bare number.
const numericPrice = (price: string) => price.replace(/[^0-9.]/g, "");

export function puppySchema(puppy: Puppy): Node {
  const path = `/puppies/${puppy.slug}`;

  return {
    "@type": "Product",
    "@id": absoluteUrl(`${path}#product`),
    name: `${puppy.name} — ${puppy.color} ${puppy.sizeLabel} Pomeranian Puppy`,
    description: puppy.shortDescription,
    url: absoluteUrl(path),
    category: "Pomeranian puppy",
    color: puppy.color,
    size: puppy.expectedAdultSize,
    brand: { "@id": organizationId },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Gender", value: puppy.gender },
      { "@type": "PropertyValue", name: "Date of birth", value: puppy.birthDate },
      { "@type": "PropertyValue", name: "Expected adult size", value: puppy.expectedAdultSize },
      { "@type": "PropertyValue", name: "Temperament", value: puppy.temperament.join(", ") }
    ],
    offers: {
      "@type": "Offer",
      url: absoluteUrl(path),
      price: numericPrice(puppy.price),
      priceCurrency: "USD",
      availability: availabilityUrl(puppy.availabilityStatus),
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": organizationId },
      areaServed: { "@type": "City", name: puppy.city }
    }
  };
}

export function colorSchema(color: ColorEntry, related: Puppy[]): Node {
  const path = `/colors/${color.slug}`;

  return {
    "@type": "CollectionPage",
    "@id": absoluteUrl(`${path}#collection`),
    name: color.name,
    description: color.pageDescription,
    url: absoluteUrl(path),
    isPartOf: { "@id": websiteId },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: related.length,
      itemListElement: related.map((puppy, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/puppies/${puppy.slug}`),
        name: puppy.name
      }))
    }
  };
}

export function locationSchema(location: LocationEntry): Node {
  const path = `/locations/${location.stateSlug}/${location.citySlug}`;

  // Only cities with a published address are a real place. Everywhere else is a
  // service area reached from Miami Beach, and claiming a storefront there would
  // be false.
  if (!location.address) {
    return {
      "@type": "Service",
      "@id": absoluteUrl(`${path}#service`),
      name: `Teacup Pomeranian puppy placement for ${location.city}`,
      description: location.metaDescription,
      url: absoluteUrl(path),
      serviceType: "Teacup and micro Pomeranian puppy placement and delivery",
      provider: { "@id": organizationId },
      areaServed: [
        { "@type": "City", name: location.city, containedInPlace: { "@type": "State", name: location.state } },
        ...location.nearbyAreas.map((area) => ({ "@type": "Place", name: area }))
      ]
    };
  }

  return {
    "@type": "PetStore",
    "@id": absoluteUrl(`${path}#business`),
    name: `${site.name} — ${location.city}`,
    description: location.metaDescription,
    url: absoluteUrl(path),
    ...(location.phone ? { telephone: location.phone } : {}),
    parentOrganization: { "@id": organizationId },
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: "US"
    },
    areaServed: location.nearbyAreas.map((area) => ({ "@type": "Place", name: area }))
  };
}

export function stateSchema(group: { state: string; stateSlug: string; cities: LocationEntry[] }): Node {
  const path = `/locations/${group.stateSlug}`;

  return {
    "@type": "CollectionPage",
    "@id": absoluteUrl(`${path}#collection`),
    name: `Teacup Pomeranian Puppies in ${group.state}`,
    description: `Cities served across ${group.state} by ${site.name}.`,
    url: absoluteUrl(path),
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: group.cities.length,
      itemListElement: group.cities.map((city, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/locations/${city.stateSlug}/${city.citySlug}`),
        name: `${city.city}, ${city.state}`
      }))
    }
  };
}
