import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";

const capabilities = [
  {
    title: "Send money",
    description:
      "Wallet foundations designed to support person-to-person money movement within the Tropicash ecosystem.",
  },
  {
    title: "Receive money",
    description:
      "Being built to help people receive funds into a digital wallet with clear activity records.",
  },
  {
    title: "Fund wallet",
    description:
      "Funding readiness designed to support adding money to a wallet account.",
  },
  {
    title: "Manage balance",
    description:
      "Balance management foundations for everyday wallet use and visibility.",
  },
  {
    title: "Wallet activity and transaction history",
    description:
      "Activity records designed to support wallet history, review, and reconciliation needs.",
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
    title: "Treasury and governance",
    description:
      "Structured review processes and operational controls built to support responsible platform growth.",
  },
  {
    title: "Partner connectivity readiness",
    description:
      "Future-ready foundations for trusted financial institutions and regulated payment partners.",
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
        description="At the center is the wallet for sending, receiving, funding, and managing money, supported by merchant, developer, treasury, and partner foundations."
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
