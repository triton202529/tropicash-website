import { HomeSection, SectionHeader } from "./section";
import { cn } from "@/lib/utils";

const flowSteps = [
  {
    label: "User Wallet",
    description: "Send, receive, and manage funds",
    color: "bg-atlantic-500",
    featured: false,
  },
  {
    label: "Tropicash Platform",
    description: "Secure payment infrastructure",
    color: "bg-atlantic-700",
    featured: true,
  },
  {
    label: "Merchant / Developer / Bank Partner",
    description: "Connected financial ecosystem",
    color: "bg-caribbean-600",
    featured: false,
  },
] as const;

export function EcosystemFlow() {
  return (
    <HomeSection className="py-16 md:py-24" aria-labelledby="ecosystem-heading">
      <SectionHeader
        id="ecosystem-heading"
        title="Built to connect users, businesses, and financial partners."
        description="Tropicash is designed as more than a wallet. It is the foundation for a broader Caribbean payment network, connecting everyday users, business operators, developers, and trusted financial institutions."
      />

      <div className="mt-12" aria-hidden="true">
        {/* Desktop horizontal flow */}
        <div className="hidden items-stretch gap-0 md:flex">
          {flowSteps.map((step, index) => (
            <div key={step.label} className="flex flex-1 items-center">
              <div
                className={cn(
                  "flex flex-1 flex-col items-center rounded-2xl border border-border p-6 text-center shadow-sm",
                  step.featured
                    ? "bg-gradient-to-b from-atlantic-800 to-atlantic-900 text-white"
                    : "bg-white",
                )}
              >
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                    step.color,
                  )}
                >
                  <div className="h-5 w-5 rounded-full bg-white/30" />
                </div>
                <p
                  className={cn(
                    "text-sm font-semibold",
                    step.featured ? "text-white" : "text-foreground",
                  )}
                >
                  {step.label}
                </p>
                <p
                  className={cn(
                    "mt-1 text-xs",
                    step.featured
                      ? "text-atlantic-200"
                      : "text-muted-foreground",
                  )}
                >
                  {step.description}
                </p>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="flex shrink-0 items-center px-2">
                  <svg
                    className="h-5 w-8 text-atlantic-300"
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

        {/* Mobile vertical flow */}
        <div className="flex flex-col gap-3 md:hidden">
          {flowSteps.map((step, index) => (
            <div key={step.label}>
              <div
                className={cn(
                  "flex items-center gap-4 rounded-2xl border border-border p-5 shadow-sm",
                  step.featured
                    ? "bg-gradient-to-r from-atlantic-800 to-atlantic-900 text-white"
                    : "bg-white",
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    step.color,
                  )}
                >
                  <div className="h-4 w-4 rounded-full bg-white/30" />
                </div>
                <div>
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      step.featured ? "text-white" : "text-foreground",
                    )}
                  >
                    {step.label}
                  </p>
                  <p
                    className={cn(
                      "text-xs",
                      step.featured
                        ? "text-atlantic-200"
                        : "text-muted-foreground",
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg
                    className="h-6 w-5 text-atlantic-300"
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

      {/* Screen reader accessible flow description */}
      <p className="sr-only">
        Payment flow: User Wallet connects to Tropicash Platform, which connects
        to Merchant, Developer, and Bank Partner endpoints.
      </p>
    </HomeSection>
  );
}
