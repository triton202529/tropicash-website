import { HomeSection, SectionHeader } from "./section";
import { cn } from "@/lib/utils";

const flowSteps = [
  {
    label: "User Wallet",
    description: "Send, receive, and manage funds",
    iconColor: "bg-atlantic-500",
    featured: false,
  },
  {
    label: "Tropicash Platform",
    description: "Secure payment infrastructure",
    iconColor: "bg-atlantic-600",
    featured: true,
  },
  {
    label: "Merchant / Developer / Bank Partner",
    description: "Connected financial ecosystem",
    iconColor: "bg-caribbean-600",
    featured: false,
  },
] as const;

function FlowCard({
  step,
  layout,
}: {
  step: (typeof flowSteps)[number];
  layout: "horizontal" | "vertical";
}) {
  const icon = (
    <div
      className={cn(
        "flex items-center justify-center rounded-full",
        step.iconColor,
        layout === "horizontal" ? "mb-4 h-12 w-12" : "h-10 w-10 shrink-0",
      )}
    >
      <div
        className={cn(
          "rounded-full bg-white/30",
          layout === "horizontal" ? "h-5 w-5" : "h-4 w-4",
        )}
      />
    </div>
  );

  const copy = (
    <>
      <p className="text-sm font-semibold text-surface-light-foreground">
        {step.label}
      </p>
      <p
        className={cn(
          "text-xs text-surface-light-muted",
          layout === "horizontal" && "mt-1",
        )}
      >
        {step.description}
      </p>
    </>
  );

  return (
    <div
      className={cn(
        "rounded-2xl border shadow-sm",
        layout === "horizontal"
          ? "flex flex-1 flex-col items-center p-6 text-center"
          : "flex items-center gap-4 p-5",
        step.featured
          ? "border-2 border-atlantic-500 bg-white shadow-md ring-4 ring-atlantic-50"
          : "border-surface-light-border bg-surface-light",
      )}
    >
      {icon}
      {layout === "horizontal" ? copy : <div>{copy}</div>}
    </div>
  );
}

export function EcosystemFlow() {
  return (
    <HomeSection
      className="bg-surface-light py-16 md:py-24"
      aria-labelledby="ecosystem-heading"
    >
      <SectionHeader
        id="ecosystem-heading"
        title="Built to connect users, businesses, and financial partners."
        description="Tropicash is designed as more than a wallet. It is the foundation for a broader Caribbean payment network, connecting everyday users, business operators, developers, and trusted financial institutions."
        light
      />

      <div className="mt-12" aria-hidden="true">
        <div className="hidden items-stretch gap-0 md:flex">
          {flowSteps.map((step, index) => (
            <div key={step.label} className="flex flex-1 items-center">
              <FlowCard step={step} layout="horizontal" />
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
              <FlowCard step={step} layout="vertical" />
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
      </div>

      <p className="sr-only">
        Payment flow: User Wallet connects to Tropicash Platform, which connects
        to Merchant, Developer, and Bank Partner endpoints.
      </p>
    </HomeSection>
  );
}
