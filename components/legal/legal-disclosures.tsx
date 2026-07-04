import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";
import {
  type LegalReadinessStatus,
  legalReadinessStatusStyles,
} from "./legal-links";

const disclosureItems: {
  label: string;
  status: LegalReadinessStatus;
  statusLabel: string;
}[] = [
  {
    label: "Corporate website notices",
    status: "active",
    statusLabel: "Active",
  },
  {
    label: "Product terms",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "Privacy policy",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "Developer terms",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "Merchant terms",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "Partner agreements",
    status: "planned",
    statusLabel: "Planned",
  },
  {
    label: "Production financial disclosures",
    status: "future",
    statusLabel: "Future phase",
  },
];

export function LegalDisclosures() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="legal-disclosures-heading"
    >
      <SectionHeader
        id="legal-disclosures-heading"
        title="Development-stage disclosures."
        description="Tropicash legal and policy materials are being prepared in phases alongside platform development. Status labels reflect current planning only."
        light
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-atlantic-100 bg-white shadow-md">
        <ul className="divide-y divide-atlantic-100">
          {disclosureItems.map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "h-2.5 w-2.5 shrink-0 rounded-full",
                    legalReadinessStatusStyles[item.status].dot,
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
                  legalReadinessStatusStyles[item.status].badge,
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
