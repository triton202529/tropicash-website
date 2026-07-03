import Link from "next/link";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";
import { companyInlineLinkClass } from "./company-links";

const layers = [
  { label: "Wallet layer", description: "User accounts and money movement" },
  { label: "Merchant layer", description: "Business payment acceptance" },
  { label: "Developer layer", description: "API and integration foundations" },
  {
    label: "Security and governance layer",
    description: "Controls, review, and oversight",
  },
  {
    label: "Partner connectivity layer",
    description: "Financial partner collaboration",
  },
] as const;

export function CompanyOperatingModel() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="company-operating-model-heading"
    >
      <SectionHeader
        id="company-operating-model-heading"
        title="Built as infrastructure, not just an app."
        description="Tropicash is more than a wallet interface. It is being designed as a layered payment platform with user, merchant, developer, treasury, security, and partner foundations."
        light
      />

      <div
        className="mt-12 overflow-hidden rounded-2xl border border-atlantic-100 bg-white shadow-md"
        aria-hidden="true"
      >
        <div className="border-b border-atlantic-100 bg-atlantic-50/50 px-5 py-3">
          <span className="text-sm font-semibold text-atlantic-900">
            Platform layers — illustrative
          </span>
        </div>

        <div className="space-y-2 p-5 md:p-6">
          {layers.map((layer, index) => (
            <div
              key={layer.label}
              className={cn(
                "flex items-center gap-4 rounded-xl border border-atlantic-100 bg-atlantic-50/30 px-4 py-3",
                index % 2 === 1 && "ml-4 md:ml-8",
              )}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-atlantic-50 text-atlantic-700">
                <div className="h-3 w-3 rounded-sm bg-atlantic-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-atlantic-900">
                  {layer.label}
                </p>
                <p className="text-xs text-surface-light-muted">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/platform" className={companyInlineLinkClass}>
          View Platform
        </Link>
      </div>

      <p className="sr-only">
        Illustrative layered platform model showing wallet, merchant, developer,
        security, and partner connectivity layers.
      </p>
    </HomeSection>
  );
}
