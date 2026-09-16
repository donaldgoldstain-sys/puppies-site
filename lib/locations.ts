import { locations } from "@/data/locations";
import type { LocationEntry } from "@/lib/types";

export type StateGroup = {
  state: string;
  stateSlug: string;
  cities: LocationEntry[];
};

export function locationPath(location: LocationEntry) {
  return `/locations/${location.stateSlug}/${location.citySlug}`;
}

export const stateGroups: StateGroup[] = (() => {
  const groups = new Map<string, StateGroup>();

  for (const location of locations) {
    const existing = groups.get(location.stateSlug);

    if (existing) {
      existing.cities.push(location);
    } else {
      groups.set(location.stateSlug, {
        state: location.state,
        stateSlug: location.stateSlug,
        cities: [location]
      });
    }
  }

  return Array.from(groups.values())
    .map((group) => ({
      ...group,
      cities: [...group.cities].sort((a, b) => a.city.localeCompare(b.city))
    }))
    .sort((a, b) => a.state.localeCompare(b.state));
})();

export function findStateGroup(stateSlug: string) {
  return stateGroups.find((group) => group.stateSlug === stateSlug);
}

export function findLocation(stateSlug: string, citySlug: string) {
  return locations.find((entry) => entry.stateSlug === stateSlug && entry.citySlug === citySlug);
}

// Fallback for states with only a city or two, so a page in Hawaii does not
// dead-end or link out to six Florida suburbs.
const majorMarketSlugs = [
  "new-york",
  "los-angeles",
  "chicago",
  "houston",
  "phoenix",
  "dallas",
  "atlanta",
  "seattle",
  "boston",
  "denver",
  "miami-beach"
];

// Same-state cities first, then the largest markets, so every page links onward.
// Within a state the window rotates from the current city, so a ten-city state
// spreads inbound links evenly instead of always pointing at the first six.
export function nearbyCities(location: LocationEntry, limit = 6) {
  const inState = locations.filter((entry) => entry.stateSlug === location.stateSlug);
  const start = Math.max(inState.findIndex((entry) => entry.citySlug === location.citySlug), 0);
  const sameState = Array.from({ length: inState.length - 1 }, (_, offset) => (
    inState[(start + offset + 1) % inState.length]
  ));

  if (sameState.length >= limit) {
    return sameState.slice(0, limit);
  }

  const taken = new Set([location.citySlug, ...sameState.map((entry) => entry.citySlug)]);
  const major = majorMarketSlugs
    .filter((slug) => !taken.has(slug))
    .map((slug) => locations.find((entry) => entry.citySlug === slug))
    .filter((entry): entry is LocationEntry => Boolean(entry));

  return [...sameState, ...major].slice(0, limit);
}

// Some "nearby areas" are themselves cities in the network (Scottsdale next to
// Phoenix, Bellevue next to Seattle). Those should link, not sit as dead chips.
const byCityName = new Map(locations.map((entry) => [entry.city.toLowerCase(), entry]));

export function findCityByName(name: string) {
  return byCityName.get(name.trim().toLowerCase());
}
