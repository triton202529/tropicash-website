import { HomeSection, SectionHeader } from "@/components/home/section";

const flowSteps = [
  { label: "Request", description: "Initiated action or payout" },
  { label: "Review", description: "Operational review step" },
  { label: "Approval path", description: "Controlled authorization" },
  { label: "Record", description: "Audit trail entry" },
  { label: "Reconciliation support", description: "Oversight alignment" },
] as const;

const governanceChips = [
  "Withdrawal review",
  "Payout tracking",
  "Treasury visibility",
  "Operational controls",
  "Audit trail",
] as const;

export function SecurityGovernance() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="security-governance-heading"
    >
      <SectionHeader
        id="security-governance-heading"
        title="Treasury review and operational oversight."
        description="Financial platforms require more than payment flows. Tropicash is being structured with review workflows, reconciliation support, payout oversight, and operational controls that help protect the platform as it matures."
        light
      />

      <div className="mt-12" aria-hidden="true">
        <div className="hidden items-stretch md:flex">
          {flowSteps.map((step, index) => (
            <div key={step.label} className="flex flex-1 items-center">
              <div className="flex flex-1 flex-col items-center rounded-2xl border border-surface-light-border bg-surface-light p-4 text-center shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-atlantic-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold text-surface-light-foreground">
                  {step.label}
                </p>
                <p className="mt-1 text-xs text-surface-light-muted">
                  {step.description}
                </p>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="flex shrink-0 items-center px-1.5">
                  <svg
                    className="h-5 w-6 text-atlantic-500"
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
              <div className="flex items-center gap-4 rounded-2xl border border-surface-light-border bg-surface-light p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-atlantic-600 text-sm font-bold text-white">
                  {index + 1}
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
            Governance controls
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {governanceChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-atlantic-100 bg-atlantic-50 px-3 py-1 text-xs font-medium text-atlantic-700"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">
        Illustrative treasury governance flow: Request, Review, Approval path,
        Record, and Reconciliation support. Includes withdrawal review, payout
        tracking, treasury visibility, operational controls, and audit trail.
      </p>
    </HomeSection>
  );
}
