import { HomeSection, SectionHeader } from "@/components/home/section";

const modelSteps = [
  {
    title: "Start the conversation",
    description:
      "Understand the partner's goals, operating context, and potential use case.",
  },
  {
    title: "Align on use case",
    description:
      "Define the payment, wallet, merchant, developer, or operational opportunity.",
  },
  {
    title: "Review readiness",
    description:
      "Evaluate governance, compliance, technical, and operational requirements.",
  },
  {
    title: "Plan integration",
    description:
      "Map sandbox, documentation, workflow, and capability requirements.",
  },
  {
    title: "Prepare for launch",
    description:
      "Move toward production only when readiness, review, and approvals support it.",
  },
] as const;

export function PartnershipModel() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="partnership-model-heading"
    >
      <SectionHeader
        id="partnership-model-heading"
        title="A responsible path from conversation to connectivity."
        description="Tropicash partnerships are expected to move through careful review, alignment, technical planning, governance checks, and phased readiness before broader production expansion."
        light
      />

      <ol className="mt-12 space-y-4 md:space-y-0">
        <div className="hidden md:grid md:grid-cols-5 md:gap-3">
          {modelSteps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-atlantic-600 text-sm font-bold text-white shadow-sm">
                {index + 1}
              </div>
              {index < modelSteps.length - 1 && (
                <div
                  className="absolute top-5 left-[calc(50%+1.25rem)] h-0.5 w-[calc(100%-2.5rem)] bg-atlantic-200"
                  aria-hidden="true"
                />
              )}
              <div className="mt-4 w-full rounded-2xl border border-surface-light-border bg-surface-light p-4 text-center shadow-sm">
                <h3 className="text-sm font-semibold text-surface-light-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-surface-light-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {modelSteps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-surface-light-border bg-surface-light p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-atlantic-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-surface-light-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-surface-light-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </div>
      </ol>

      <p className="sr-only">
        Illustrative partnership path: conversation, use case alignment,
        readiness review, integration planning, and launch preparation. Not an
        instant connection to live payment rails.
      </p>
    </HomeSection>
  );
}
