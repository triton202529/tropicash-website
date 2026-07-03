import { cn } from "@/lib/utils";

export function CompanyIconTile({
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
      <div className="h-4 w-4 rounded-sm bg-current opacity-60" />
    </div>
  );
}
