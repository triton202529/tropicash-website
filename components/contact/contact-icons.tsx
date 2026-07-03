import { cn } from "@/lib/utils";

export function ContactIconTile({
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
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    </div>
  );
}
