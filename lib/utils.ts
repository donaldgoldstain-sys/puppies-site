import clsx from "clsx";

const AGE_REFERENCE_DATE = new Date("2026-04-10T12:00:00.000Z");

export function cn(...inputs: Array<string | false | null | undefined>) {
  return clsx(inputs);
}

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${dateString}T12:00:00.000Z`));
}

export function calculateAge(dateString: string) {
  const birth = new Date(`${dateString}T12:00:00.000Z`);
  const now = AGE_REFERENCE_DATE;
  let months =
    (now.getUTCFullYear() - birth.getUTCFullYear()) * 12 +
    (now.getUTCMonth() - birth.getUTCMonth());

  if (now.getUTCDate() < birth.getUTCDate()) {
    months -= 1;
  }

  return months <= 0 ? "Under 1 month" : `${months} month${months === 1 ? "" : "s"} old`;
}
