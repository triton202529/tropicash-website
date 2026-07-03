import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";

const governanceItems = [
  {
    title: "Account protection",
    description:
      "Multi-layer account controls designed to safeguard user access and platform activity.",
  },
  {
    title: "KYC readiness",
    description:
      "Identity verification workflows being built into the platform foundation.",
  },
  {
    title: "Transaction audit records",
    description:
      "Comprehensive logging designed to support audit and reconciliation needs.",
  },
  {
    title: "Withdrawal review",
    description:
      "Structured review processes for withdrawal and payout oversight.",
  },
  {
    title: "Fraud monitoring",
    description:
      "Monitoring capabilities designed to help identify suspicious activity.",
  },
  {
    title: "Partner review controls",
    description:
      "Review workflows designed to support responsible partner connectivity.",
  },
] as const;

export function PlatformGovernance() {
  return (
    <HomeSection
      className="border-t border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="platform-governance-heading"
    >
      <SectionHeader
        id="platform-governance-heading"
        title="Governance built into the platform foundation."
        description="Tropicash is being designed with operational controls, review workflows, audit records, and security practices that support responsible financial infrastructure."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {governanceItems.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-atlantic-50 text-atlantic-700"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
