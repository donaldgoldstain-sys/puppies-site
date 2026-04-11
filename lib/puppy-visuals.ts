import { Puppy } from "@/lib/types";

const colorThemes: Record<string, { base: string; glow: string; stroke: string; text: string }> = {
  White: { base: "#f7f0e7", glow: "#fffaf3", stroke: "#d7c0aa", text: "#6b5747" },
  Orange: { base: "#f0d9c1", glow: "#fff0e0", stroke: "#c89c72", text: "#6a4730" },
  Chocolate: { base: "#d7b89e", glow: "#f0dfd0", stroke: "#8f6242", text: "#4f3628" },
  Sable: { base: "#e1ccb6", glow: "#f7efe4", stroke: "#b28f6b", text: "#66513f" },
  Merle: { base: "#d8d8dc", glow: "#f4f2f4", stroke: "#84818a", text: "#504a54" },
  Black: { base: "#a4a09f", glow: "#e3dedb", stroke: "#524846", text: "#332c2b" }
};

function encodeSvg(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function getPlaceholderPuppyImage(puppy: Pick<Puppy, "name" | "color" | "descriptor">) {
  const theme = colorThemes[puppy.color] ?? colorThemes.White;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1120" role="img" aria-label="${puppy.name} placeholder portrait">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fffaf4" />
          <stop offset="55%" stop-color="${theme.base}" />
          <stop offset="100%" stop-color="#efe3d6" />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="20%" r="55%">
          <stop offset="0%" stop-color="${theme.glow}" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="fur" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${theme.glow}" />
          <stop offset="100%" stop-color="${theme.base}" />
        </linearGradient>
      </defs>
      <rect width="960" height="1120" fill="url(#bg)" />
      <rect width="960" height="1120" fill="url(#halo)" opacity="0.95" />
      <circle cx="480" cy="365" r="218" fill="url(#fur)" stroke="${theme.stroke}" stroke-width="10" />
      <circle cx="322" cy="240" r="98" fill="url(#fur)" stroke="${theme.stroke}" stroke-width="10" />
      <circle cx="638" cy="240" r="98" fill="url(#fur)" stroke="${theme.stroke}" stroke-width="10" />
      <ellipse cx="480" cy="475" rx="195" ry="175" fill="#fff8f1" stroke="${theme.stroke}" stroke-width="8" />
      <ellipse cx="398" cy="438" rx="24" ry="30" fill="#3b2d26" />
      <ellipse cx="562" cy="438" rx="24" ry="30" fill="#3b2d26" />
      <ellipse cx="480" cy="520" rx="38" ry="28" fill="#4b352d" />
      <path d="M438 560c25 24 59 24 84 0" stroke="#7b5f52" stroke-width="10" stroke-linecap="round" fill="none" />
      <ellipse cx="480" cy="820" rx="265" ry="118" fill="#fff9f1" opacity="0.72" />
      <text x="480" y="855" text-anchor="middle" font-family="Georgia, serif" font-size="54" fill="${theme.text}" letter-spacing="6">${puppy.color.toUpperCase()}</text>
      <text x="480" y="930" text-anchor="middle" font-family="Georgia, serif" font-size="82" fill="#241b18">${puppy.name}</text>
      <text x="480" y="985" text-anchor="middle" font-family="Avenir Next, sans-serif" font-size="26" fill="${theme.text}" letter-spacing="3">${puppy.descriptor.toUpperCase()}</text>
    </svg>
  `;

  return encodeSvg(svg);
}

export function getPuppyImage(puppy: Pick<Puppy, "name" | "color" | "descriptor" | "imageSrc">) {
  return puppy.imageSrc ?? getPlaceholderPuppyImage(puppy as Pick<Puppy, "name" | "color" | "descriptor">);
}
