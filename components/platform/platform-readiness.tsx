import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";

type ReadinessStatus = "active" | "in-progress" | "planned" | "future";

const readinessItems: {
  label: string;
  status: ReadinessStatus;
  statusLabel: string;
}[] = [
  { label: "Public corporate website", status: "active", statusLabel: "Active" },
  {
    label: "Developer platform foundation",
    status: "in-progress",
    statusLabel: "In progress",
  },
  {
    label: "Wallet infrastructure",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Merchant tools",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Partner connectivity",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "Production expansion",
    status: "future",
    statusLabel: "Future phase",
  },
];

const statusStyles: Record<
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

export function PlatformReadiness() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="platform-readiness-heading"
    >
      <SectionHeader
        id="platform-readiness-heading"
        title="Built in phases. Designed for responsible growth."
        description="Tropicash is being developed in controlled phases, beginning with wallet, merchant, developer, treasury, and governance foundations before broader production and partner expansion."
        light
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-atlantic-100 bg-white shadow-md">
        <ul className="divide-y divide-atlantic-100">
          {readinessItems.map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "h-2.5 w-2.5 shrink-0 rounded-full",
                    statusStyles[item.status].dot,
                  )}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-surface-light-foreground">
                  {item.label}
                </span>
              </div>
              <span
                className={cn(
                  "inline-flex w-fit items-center rounded-full border px-3 py-0.5 text-xs font-semibold",
                  statusStyles[item.status].badge,
                )}
              >
                {item.statusLabel}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
}
