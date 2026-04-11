import { Route } from "next";
import { colors } from "@/data/colors";
import { faqs } from "@/data/faq";
import { locations } from "@/data/locations";
import { puppies } from "@/data/puppies";
import { reviews } from "@/data/reviews";

export const site = {
  name: "Teacup Pomeranian Puppies",
  url: "https://teacuppomeranianpuppiesforsale.online",
  phone: "(305) 546-5878",
  email: "concierge@teacuppomeranianpuppiesforsale.online",
  location: "Miami Beach, Florida",
  address: "6450 Collins Ave, Miami Beach, FL 33141",
  tagline: "Private placement guidance for teacup and micro Pomeranian families.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/available-puppies", label: "Available Puppies" },
    { href: "/micro-pomeranian-puppies", label: "Micro Puppies" },
    { href: "/pomeranian-colors", label: "Colors" },
    { href: "/delivery", label: "Delivery" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" }
  ] as Array<{ href: Route; label: string }>,
  puppies,
  colors,
  locations,
  reviews,
  faqs
};
