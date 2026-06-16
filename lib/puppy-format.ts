import { Puppy } from "@/lib/types";

// Dot/swatch colors for coat colors. Tasteful, muted — used only for tiny
// chip dots and color swatches, never as page or button backgrounds.
const colorDot: Record<string, string> = {
  White: "#ffffff",
  Orange: "#e8a15c",
  Chocolate: "#6b4a33",
  Sable: "#b68654",
  Merle: "#b9c0c8",
  Black: "#2a2a2a",
  Blue: "#8fa0b5"
};

export function colorDotHex(color: string) {
  return colorDot[color] ?? "#dddddd";
}

export function puppyTypeLabel(puppy: Pick<Puppy, "sizeLabel" | "color">) {
  return `${puppy.sizeLabel} ${puppy.color} Pomeranian`;
}

export function isPriceOnRequest(price: string) {
  return price.trim().toLowerCase() === "price on request";
}

export function availability(status: Puppy["availabilityStatus"]) {
  switch (status) {
    case "Available":
      return { className: "badge-available", label: "Available" };
    case "Reserved":
      return { className: "badge-reserved", label: "Reserved" };
    default:
      return { className: "badge-soon", label: "Coming Soon" };
  }
}
