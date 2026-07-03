import { HomeSection, SectionHeader } from "@/components/home/section";

const journeySteps = [
  {
    step: 1,
    title: "Explore Tropicash",
    description:
      "Understand the platform layers and available integration direction.",
  },
  {
    step: 2,
    title: "Register an app",
    description:
      "Prepare an app profile, use case, and requested capabilities.",
  },
  {
    step: 3,
    title: "Build in sandbox",
    description:
      "Test integration patterns in a controlled sandbox-first environment.",
  },
  {
    step: 4,
    title: "Review capabilities",
    description:
      "Move through review for requested wallet, payment, webhook, or partner capabilities.",
  },
  {
    step: 5,
    title: "Prepare for production",
    description:
      "Production access remains governed and future-phase dependent.",
  },
] as const;

export function DeveloperIntegrationJourney() {
  return (
    <HomeSection
      className="bg-gradient-to-b from-atlantic-50 to-surface-light-soft py-16 md:py-24"
      aria-labelledby="developer-journey-heading"
    >
      <SectionHeader
        id="developer-journey-heading"
        title="A clear path from idea to integration."
        align="center"
        className="mx-auto"
        light
      />

      <ol className="mt-12 space-y-4 md:space-y-0">
        <div className="hidden md:grid md:grid-cols-5 md:gap-3">
          {journeySteps.map((item, index) => (
            <li key={item.step} className="relative flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-atlantic-600 text-sm font-bold text-white shadow-sm">
                {item.step}
              </div>
              {index < journeySteps.length - 1 && (
                <div
                  className="absolute top-5 left-[calc(50%+1.25rem)] h-0.5 w-[calc(100%-2.5rem)] bg-atlantic-200"
                  aria-hidden="true"
                />
              )}
              <div className="mt-4 w-full rounded-2xl border border-surface-light-border bg-surface-light p-4 text-center shadow-sm">
                <h3 className="text-sm font-semibold text-surface-light-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-surface-light-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {journeySteps.map((item) => (
            <li
              key={item.step}
              className="flex gap-4 rounded-2xl border border-surface-light-border bg-surface-light p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-atlantic-600 text-sm font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-surface-light-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-surface-light-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </div>
      </ol>
    </HomeSection>
  );
}
