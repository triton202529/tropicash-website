import { cn } from "@/lib/utils";

export const partnershipsPrimaryLinkClass = cn(
  "inline-flex h-12 items-center justify-center rounded-xl bg-caribbean-600 px-6",
  "text-sm font-semibold text-white shadow-md transition-colors",
  "hover:bg-caribbean-700 focus-visible:outline-none focus-visible:ring-2",
  "focus-visible:ring-caribbean-500 focus-visible:ring-offset-2",
);

export const partnershipsSecondaryLinkClass = cn(
  "inline-flex h-12 items-center justify-center rounded-xl border border-atlantic-200",
  "bg-white px-6 text-sm font-semibold text-atlantic-700 shadow-xs",
  "transition-colors hover:bg-atlantic-50 focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-atlantic-500 focus-visible:ring-offset-2",
);

export const partnershipsPrimaryLinkWideClass = cn(
  partnershipsPrimaryLinkClass,
  "w-full sm:w-auto px-8",
);

export const partnershipsSecondaryLinkWideClass = cn(
  partnershipsSecondaryLinkClass,
  "w-full sm:w-auto px-8",
);

export type ReadinessStatus = "active" | "in-progress" | "planned" | "future";

export const readinessStatusStyles: Record<
  ReadinessStatus,
  { badge: string; dot: string }
> = {
  active: {
    badge: "border-caribbean-200 bg-caribbean-50 text-caribbean-700",
    dot: "bg-caribbean-500",
  },
  "in-progress": {
    badge: "border-atlantic-200 bg-atlantic-50 text-atlantic-700",
    dot: "bg-atlantic-500",
  },
  planned: {
    badge: "border-neutral-200 bg-neutral-100 text-neutral-600",
    dot: "bg-neutral-400",
  },
  future: {
    badge: "border-neutral-200 bg-neutral-50 text-neutral-500",
    dot: "bg-neutral-300",
  },
};
