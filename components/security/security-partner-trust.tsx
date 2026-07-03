import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { SecurityIconTile } from "./security-icons";

const partnerItems = [
  {
    title: "Partner review controls",
    description:
      "Review workflows being designed for financial partner connectivity and alignment.",
  },
  {
    title: "Compliance readiness",
    description:
      "Compliance-aware operating practices being built into the platform foundation.",
  },
  {
    title: "KYC process readiness",
    description:
      "Identity verification workflows being prepared to support responsible onboarding.",
  },
  {
    title: "Operational due diligence",
    description:
      "Due diligence foundations designed to support partner and platform review processes.",
  },
  {
    title: "Financial partner alignment",
    description:
      "Collaboration pathways being prepared for trusted financial institutions.",
  },
  {
    title: "Responsible expansion planning",
    description:
      "Phased expansion approach designed to support controlled platform growth.",
  },
] as const;

export function SecurityPartnerTrust() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="security-partner-heading"
    >
      <SectionHeader
        id="security-partner-heading"
        title="Partner-ready governance foundations."
        description="Tropicash is being prepared for responsible collaboration with businesses, developers, and trusted financial partners through controlled access, review workflows, and compliance-aware operating practices."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partnerItems.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <SecurityIconTile />
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
