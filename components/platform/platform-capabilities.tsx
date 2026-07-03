import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";

const capabilities = [
  {
    title: "Digital wallets",
    description:
      "Foundation for user accounts, balances, and wallet activity designed for Caribbean commerce.",
  },
  {
    title: "Peer-to-peer transfers",
    description:
      "Built to support person-to-person value movement within the Tropicash ecosystem.",
  },
  {
    title: "Merchant payment acceptance",
    description:
      "Tools designed for businesses to accept and manage customer payments.",
  },
  {
    title: "Developer APIs",
    description:
      "API foundations for integrating wallet and payment capabilities into applications.",
  },
  {
    title: "OAuth and app authorization readiness",
    description:
      "Authorization patterns being prepared for secure third-party application access.",
  },
  {
    title: "Webhook and event readiness",
    description:
      "Event notification foundations designed to support integration workflows.",
  },
  {
    title: "Withdrawal and payout oversight",
    description:
      "Operational visibility designed to support controlled payout processes.",
  },
  {
    title: "Treasury review workflows",
    description:
      "Structured review processes built to support responsible treasury operations.",
  },
  {
    title: "Risk and fraud monitoring",
    description:
      "Monitoring foundations designed to help identify and respond to suspicious activity.",
  },
  {
    title: "Audit-ready records",
    description:
      "Transaction logging designed to support audit, reconciliation, and oversight needs.",
  },
] as const;

export function PlatformCapabilities() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="platform-capabilities-heading"
    >
      <SectionHeader
        id="platform-capabilities-heading"
        title="Core capabilities for a modern payment network."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-caribbean-50 text-caribbean-700"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <CardTitle className="mt-3 text-base">{item.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </HomeSection>
  );
}
