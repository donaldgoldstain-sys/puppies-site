"use client";

import { useMemo, useState } from "react";
import { Puppy } from "@/lib/types";
import { PuppyCard } from "@/components/puppy-card";
import { isPriceOnRequest } from "@/lib/puppy-format";
import { GenderIcon, RulerIcon, CircleIcon, TagIcon, CalendarIcon, SortIcon, ChevronDownIcon } from "@/components/icons";

function priceValue(price: string) {
  if (isPriceOnRequest(price)) return Number.NaN;
  const n = Number(price.replace(/[^\d.]/g, ""));
  return Number.isFinite(n) ? n : Number.NaN;
}

type Filters = {
  gender: string;
  size: string;
  color: string;
  price: string;
  availability: string;
  sort: string;
};

const initial: Filters = {
  gender: "all",
  size: "all",
  color: "all",
  price: "all",
  availability: "all",
  sort: "featured"
};

export function PuppyGrid({
  puppies,
  showFilters = false,
  emptyMessage = "No puppies match these filters right now. Try widening your selection or use the inquiry form to ask about upcoming arrivals."
}: {
  puppies: Puppy[];
  showFilters?: boolean;
  emptyMessage?: string;
}) {
  const [filters, setFilters] = useState<Filters>(initial);

  const colors = useMemo(() => Array.from(new Set(puppies.map((p) => p.color))).sort(), [puppies]);
  const sizes = useMemo(() => Array.from(new Set(puppies.map((p) => p.sizeLabel))).sort(), [puppies]);

  const visible = useMemo(() => {
    let list = puppies.filter((p) => {
      if (filters.gender !== "all" && p.gender !== filters.gender) return false;
      if (filters.size !== "all" && p.sizeLabel !== filters.size) return false;
      if (filters.color !== "all" && p.color !== filters.color) return false;
      if (filters.availability !== "all" && p.availabilityStatus !== filters.availability) return false;
      if (filters.price !== "all") {
        const value = priceValue(p.price);
        if (Number.isNaN(value)) return false;
        if (filters.price === "under" && !(value < 5000)) return false;
        if (filters.price === "mid" && !(value >= 5000 && value <= 6000)) return false;
        if (filters.price === "over" && !(value > 6000)) return false;
      }
      return true;
    });

    if (filters.sort === "price-asc") {
      list = [...list].sort((a, b) => (priceValue(a.price) || Infinity) - (priceValue(b.price) || Infinity));
    } else if (filters.sort === "price-desc") {
      list = [...list].sort((a, b) => (priceValue(b.price) || -Infinity) - (priceValue(a.price) || -Infinity));
    } else if (filters.sort === "newest") {
      list = [...list].sort((a, b) => b.birthDate.localeCompare(a.birthDate));
    }
    return list;
  }, [puppies, filters]);

  const set = (key: keyof Filters) => (event: React.ChangeEvent<HTMLSelectElement>) =>
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));

  return (
    <>
      {showFilters ? (
        <section className="filters" aria-label="Filter puppies">
          <div className="filter-grid">
            <label className="filter-pill">
              <GenderIcon className="f-icon" />
              <select value={filters.gender} onChange={set("gender")} aria-label="Filter by gender">
                <option value="all">Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
              <ChevronDownIcon className="chev" />
            </label>

            <label className="filter-pill">
              <RulerIcon className="f-icon" />
              <select value={filters.size} onChange={set("size")} aria-label="Filter by size">
                <option value="all">Size</option>
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="chev" />
            </label>

            <label className="filter-pill">
              <CircleIcon className="f-icon" />
              <select value={filters.color} onChange={set("color")} aria-label="Filter by color">
                <option value="all">Color</option>
                {colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="chev" />
            </label>

            <label className="filter-pill">
              <TagIcon className="f-icon" />
              <select value={filters.price} onChange={set("price")} aria-label="Filter by price">
                <option value="all">Price</option>
                <option value="under">Under $5,000</option>
                <option value="mid">$5,000 – $6,000</option>
                <option value="over">Over $6,000</option>
              </select>
              <ChevronDownIcon className="chev" />
            </label>

            <label className="filter-pill">
              <CalendarIcon className="f-icon" />
              <select value={filters.availability} onChange={set("availability")} aria-label="Filter by availability">
                <option value="all">Availability</option>
                <option value="Available">Available</option>
                <option value="Reserved">Reserved</option>
                <option value="Coming Soon">Coming Soon</option>
              </select>
              <ChevronDownIcon className="chev" />
            </label>

            <label className="filter-pill">
              <SortIcon className="f-icon" />
              <select value={filters.sort} onChange={set("sort")} aria-label="Sort puppies">
                <option value="featured">Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDownIcon className="chev" />
            </label>
          </div>
          <p className="filter-count">
            Showing {visible.length} {visible.length === 1 ? "puppy" : "puppies"}
          </p>
        </section>
      ) : null}

      <section className="grid-section">
        <div className="puppy-grid">
          {visible.length > 0 ? (
            visible.map((puppy) => <PuppyCard key={puppy.id} puppy={puppy} />)
          ) : (
            <p className="grid-empty">{emptyMessage}</p>
          )}
        </div>
      </section>
    </>
  );
}
