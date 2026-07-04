import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";
import {
  type ReadinessStatus,
  readinessStatusStyles,
} from "@/components/company/company-links";

const buildItems: {
  label: string;
  status: ReadinessStatus;
  statusLabel: string;
}[] = [
  {
    label: "Public corporate website",
    status: "active",
    statusLabel: "Active",
  },
  {
    label: "Wallet send/receive foundation",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Merchant payment tools",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Developer platform foundation",
    status: "in-progress",
    statusLabel: "In progress",
  },
  {
    label: "Security and governance controls",
    status: "in-progress",
    statusLabel: "In development",
  },
  {
    label: "Partner connectivity",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "Broader regional expansion",
    status: "future",
    statusLabel: "Future phase",
  },
];

export function AboutBuildPath() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="about-build-path-heading"
    >
      <SectionHeader
        id="about-build-path-heading"
        title="Built in phases, with care."
        description="Tropicash is being developed through controlled phases so wallet, merchant, developer, security, and partner foundations can mature responsibly."
        light
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-atlantic-100 bg-white shadow-md">
        <ul className="divide-y divide-atlantic-100">
          {buildItems.map((item) => (
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
