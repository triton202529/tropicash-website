import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";
import {
  type ReadinessStatus,
  readinessStatusStyles,
} from "./developers-links";

const readinessItems: {
  label: string;
  status: ReadinessStatus;
  statusLabel: string;
}[] = [
  { label: "Public developer page", status: "active", statusLabel: "Active" },
  { label: "Platform overview", status: "active", statusLabel: "Active" },
  {
    label: "App registration concept",
    status: "in-progress",
    statusLabel: "In progress",
  },
  {
    label: "API credential foundation",
    status: "in-progress",
    statusLabel: "In progress",
  },
  {
    label: "OAuth readiness",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Webhook/event readiness",
    status: "in-progress",
    statusLabel: "In development",
  },
  { label: "SDK direction", status: "planned", statusLabel: "Planned" },
  {
    label: "Production developer access",
    status: "future",
    statusLabel: "Future phase",
  },
];

export function DeveloperReadiness() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="developer-readiness-heading"
    >
      <SectionHeader
        id="developer-readiness-heading"
        title="Developer platform readiness."
        description="The developer platform is being developed in phases, starting with public documentation, sandbox concepts, app registration foundations, and governance controls."
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
                    readinessStatusStyles[item.status].dot,
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
                  readinessStatusStyles[item.status].badge,
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
