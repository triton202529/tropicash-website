import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";

const flowSteps = [
  { label: "User Wallet", description: "Send, receive, fund, and manage money" },
  {
    label: "Tropicash Platform Core",
    description: "Wallet, payment, and governance infrastructure",
    featured: true,
  },
  {
    label: "Merchant / Developer / Partner",
    description: "Connected payment and financial ecosystem",
  },
] as const;

const governanceControls = [
  "Security",
  "Compliance readiness",
  "Treasury review",
  "Audit records",
  "Risk monitoring",
] as const;

export function PlatformArchitecture() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="platform-architecture-heading"
    >
      <SectionHeader
        id="platform-architecture-heading"
        title="Designed to connect the full payment journey."
        description="Tropicash is designed to support the movement of value across users, merchants, developers, and trusted partners while keeping governance and oversight at the center."
        light
      />

      <div className="mt-12" aria-hidden="true">
        <div className="hidden items-stretch md:flex">
          {flowSteps.map((step, index) => (
            <div key={step.label} className="flex flex-1 items-center">
              <div
                className={cn(
                  "flex flex-1 flex-col items-center rounded-2xl border p-6 text-center shadow-sm",
                  "featured" in step && step.featured
                    ? "border-2 border-atlantic-500 bg-white shadow-md ring-4 ring-atlantic-50"
                    : "border-surface-light-border bg-surface-light",
                )}
              >
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                    "featured" in step && step.featured
                      ? "bg-atlantic-600"
                      : index === 0
                        ? "bg-atlantic-500"
                        : "bg-caribbean-600",
                  )}
                >
                  <div className="h-5 w-5 rounded-full bg-white/30" />
                </div>
                <p className="text-sm font-semibold text-surface-light-foreground">
                  {step.label}
                </p>
                <p className="mt-1 text-xs text-surface-light-muted">
                  {step.description}
                </p>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="flex shrink-0 items-center px-2">
                  <svg
                    className="h-5 w-8 text-atlantic-500"
                    viewBox="0 0 32 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 10h24m0 0l-6-6m6 6l-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          {flowSteps.map((step, index) => (
            <div key={step.label}>
              <div
                className={cn(
                  "flex items-center gap-4 rounded-2xl border p-5 shadow-sm",
                  "featured" in step && step.featured
                    ? "border-2 border-atlantic-500 bg-white ring-4 ring-atlantic-50"
                    : "border-surface-light-border bg-surface-light",
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    "featured" in step && step.featured
                      ? "bg-atlantic-600"
                      : index === 0
                        ? "bg-atlantic-500"
                        : "bg-caribbean-600",
                  )}
                >
                  <div className="h-4 w-4 rounded-full bg-white/30" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-surface-light-foreground">
                    {step.label}
                  </p>
                  <p className="text-xs text-surface-light-muted">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg
                    className="h-6 w-5 text-caribbean-500"
                    viewBox="0 0 20 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 0v16m0 0l-6-6m6 6l6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-atlantic-100 bg-white p-6 shadow-sm">
          <p className="text-center text-sm font-semibold text-atlantic-900">
            Governance at the platform core
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {governanceControls.map((control) => (
              <span
                key={control}
                className="rounded-full border border-atlantic-100 bg-atlantic-50 px-3 py-1 text-xs font-medium text-atlantic-700"
              >
                {control}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">
        Illustrative payment flow: User Wallet connects to Tropicash Platform
        Core, which connects to merchants, developers, and partners. Governance
        controls include security, compliance readiness, treasury review, audit
        records, and risk monitoring.
      </p>
    </HomeSection>
  );
}
