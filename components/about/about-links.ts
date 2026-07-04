import { cn } from "@/lib/utils";

export const aboutPrimaryLinkClass = cn(
  "inline-flex h-12 items-center justify-center rounded-xl bg-caribbean-600 px-6",
  "text-sm font-semibold text-white shadow-md transition-colors",
  "hover:bg-caribbean-700 focus-visible:outline-none focus-visible:ring-2",
  "focus-visible:ring-caribbean-500 focus-visible:ring-offset-2",
);

export const aboutSecondaryLinkClass = cn(
  "inline-flex h-12 items-center justify-center rounded-xl border border-atlantic-200",
  "bg-white px-6 text-sm font-semibold text-atlantic-700 shadow-xs",
  "transition-colors hover:bg-atlantic-50 focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-atlantic-500 focus-visible:ring-offset-2",
);

export const aboutPrimaryLinkWideClass = cn(
  aboutPrimaryLinkClass,
  "w-full sm:w-auto px-8",
);

export const aboutSecondaryLinkWideClass = cn(
  aboutSecondaryLinkClass,
  "w-full sm:w-auto px-8",
);
