import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { cn } from "@/lib/utils";

const layers = [
  {
    title: "Wallet Layer",
    description:
      "User-facing balances, transfers, funding readiness, and transaction history.",
    accent: "border-t-atlantic-500",
  },
  {
    title: "Merchant Payment Layer",
    description:
      "Business payment acceptance, customer payment flows, and transaction management.",
    accent: "border-t-caribbean-500",
  },
  {
    title: "Developer API Layer",
    description:
      "Developer credentials, API access, OAuth readiness, webhooks, and sandbox tools.",
    accent: "border-t-atlantic-400",
  },
  {
    title: "Treasury & Operations Layer",
    description:
      "Withdrawal review, payout tracking, reconciliation support, and operational controls.",
    accent: "border-t-atlantic-600",
  },
  {
    title: "Security & Compliance Layer",
    description:
      "Account controls, KYC readiness, risk monitoring, fraud review, and audit records.",
    accent: "border-t-caribbean-600",
  },
  {
    title: "Partner Connectivity Layer",
    description:
      "Future-ready infrastructure for trusted financial institutions and regulated payment partners.",
    accent: "border-t-atlantic-700",
  },
] as const;

export function PlatformLayerOverview() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="platform-layers-heading"
    >
      <SectionHeader
        id="platform-layers-heading"
        title="The Tropicash platform is built in layers."
        description="Each layer supports a different part of the payment ecosystem, from everyday wallet activity to business acceptance, developer integration, and operational oversight."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {layers.map((layer) => (
          <Card
            key={layer.title}
            variant="light"
            className={cn("border-t-4", layer.accent)}
          >
            <CardHeader>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-atlantic-50 text-atlantic-700"
                aria-hidden="true"
              >
                <div className="h-4 w-4 rounded-sm bg-atlantic-500" />
              </div>
              <CardTitle className="mt-3 text-base">{layer.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {layer.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </HomeSection>
  );
}
