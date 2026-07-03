import { HomeSection, SectionHeader } from "@/components/home/section";

const visionSteps = [
  {
    label: "Local foundation",
    description: "Caribbean-first platform development",
  },
  {
    label: "Regional connectivity",
    description: "Broader payment network preparation",
  },
  {
    label: "Broader financial ecosystem",
    description: "Long-term partner and platform growth",
  },
] as const;

export function CompanyVision() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="company-vision-heading"
    >
      <SectionHeader
        id="company-vision-heading"
        title="A regional payment network built from the Caribbean outward."
        description="Tropicash is designed with a Caribbean-first mindset: starting locally, building responsibly, and preparing for broader regional payment connectivity over time."
        light
      />

      <div className="mt-12" aria-hidden="true">
        <div className="hidden items-stretch md:flex">
          {visionSteps.map((step, index) => (
            <div key={step.label} className="flex flex-1 items-center">
              <div className="flex flex-1 flex-col items-center rounded-2xl border border-surface-light-border bg-surface-light p-6 text-center shadow-sm">
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
              {index < visionSteps.length - 1 && (
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
          {visionSteps.map((step, index) => (
            <div key={step.label}>
              <div className="flex items-center gap-4 rounded-2xl border border-surface-light-border bg-surface-light p-5 shadow-sm">
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
              {index < visionSteps.length - 1 && (
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
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-surface-light-muted">
        Tropicash&apos;s long-term vision is to help strengthen Caribbean digital
        commerce by connecting users, businesses, developers, and trusted
        financial partners through secure payment infrastructure.
      </p>

      <p className="sr-only">
        Illustrative vision path from local foundation through regional
        connectivity to a broader financial ecosystem. Long-term vision only.
      </p>
    </HomeSection>
  );
}
