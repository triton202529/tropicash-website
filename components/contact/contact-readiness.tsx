import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";
import {
  type ReadinessStatus,
  readinessStatusStyles,
} from "./contact-links";

const readinessItems: {
  label: string;
  status: ReadinessStatus;
  statusLabel: string;
}[] = [
  { label: "Public contact page", status: "active", statusLabel: "Active" },
  {
    label: "Platform information pathway",
    status: "active",
    statusLabel: "Active",
  },
  {
    label: "Developer information pathway",
    status: "active",
    statusLabel: "Active",
  },
  {
    label: "Partnership information pathway",
    status: "active",
    statusLabel: "Active",
  },
  {
    label: "Security information pathway",
    status: "active",
    statusLabel: "Active",
  },
  {
    label: "Company information pathway",
    status: "active",
    statusLabel: "Active",
  },
  {
    label: "Contact form handling",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "Customer support workflow",
    status: "future",
    statusLabel: "Future phase",
  },
];

export function ContactReadiness() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="contact-readiness-heading"
    >
      <SectionHeader
        id="contact-readiness-heading"
        title="Contact pathways are being developed responsibly."
        description="Tropicash contact and inquiry pathways are being prepared as the corporate website, platform messaging, developer messaging, security posture, and partnership foundations mature."
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
