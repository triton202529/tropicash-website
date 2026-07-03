import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";
import {
  type ReadinessStatus,
  readinessStatusStyles,
} from "./security-links";

const readinessItems: {
  label: string;
  status: ReadinessStatus;
  statusLabel: string;
}[] = [
  { label: "Public security page", status: "active", statusLabel: "Active" },
  {
    label: "Account protection foundation",
    status: "in-progress",
    statusLabel: "In progress",
  },
  {
    label: "KYC readiness",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Treasury review workflows",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Fraud monitoring foundation",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Developer access governance",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Partner review controls",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "External compliance review",
    status: "future",
    statusLabel: "Future phase",
  },
];

export function SecurityReadiness() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="security-readiness-heading"
    >
      <SectionHeader
        id="security-readiness-heading"
        title="Built carefully. Expanded responsibly."
        description="Tropicash security and governance capabilities are being developed in phases as the platform moves from public corporate presence toward broader product and partner readiness."
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
