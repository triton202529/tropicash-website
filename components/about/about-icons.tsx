import { cn } from "@/lib/utils";

export function AboutIconTile({
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
      <div className="h-4 w-4 rounded-sm bg-current opacity-60" />
    </div>
  );
}
