import { cn } from "@/lib/utils";

export function PartnerIconTile({
  variant = "blue",
}: {
  variant?: "blue" | "green";
}) {
  return (
    <div
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg",
        variant === "green"
          ? "bg-caribbean-50 text-caribbean-700"
          : "bg-atlantic-50 text-atlantic-700",
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    </div>
  );
}

export function PartnerCheckTile() {
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-caribbean-50 text-caribbean-700"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  );
}
