import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { PartnerCheckTile } from "./partnerships-icons";

const opportunities = [
  {
    title: "Merchant acceptance",
    description:
      "Partner-ready foundations for businesses exploring Tropicash payment acceptance.",
  },
  {
    title: "Wallet ecosystem growth",
    description:
      "Opportunities to support wallet adoption and user-facing money movement experiences.",
  },
  {
    title: "Developer integrations",
    description:
      "Integration pathways being prepared for teams building on Tropicash APIs and events.",
  },
  {
    title: "Financial partner connectivity",
    description:
      "Future-ready review pathways for regulated institutions and trusted financial partners.",
  },
  {
    title: "Treasury and payout operations",
    description:
      "Operational collaboration opportunities around payout oversight and treasury workflows.",
  },
  {
    title: "KYC and compliance readiness",
    description:
      "Compliance-aware foundations designed to support responsible partner onboarding.",
  },
  {
    title: "Risk and fraud review support",
    description:
      "Collaboration opportunities around monitoring, review, and protective controls.",
  },
  {
    title: "Regional payment expansion",
    description:
      "Planned pathways for organizations supporting Caribbean digital payment connectivity.",
  },
  {
    title: "Business platform integrations",
    description:
      "Foundations for businesses embedding wallet and payment capabilities into their workflows.",
  },
] as const;

export function PartnershipOpportunities() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="partnership-opportunities-heading"
    >
      <SectionHeader
        id="partnership-opportunities-heading"
        title="Partnership opportunities across the platform."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <PartnerCheckTile />
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
