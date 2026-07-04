import { cn } from "@/lib/utils";

export function LegalIconTile({
  variant = "blue",
}: {
  variant?: "blue" | "green";
}) {
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl",
        variant === "green"
          ? "bg-caribbean-50 text-caribbean-700"
          : "bg-atlantic-50 text-atlantic-700",
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    </div>
  );
}
