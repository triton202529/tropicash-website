import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { PartnerCheckTile } from "./partnerships-icons";

const governanceItems = [
  {
    title: "Partner review controls",
    description:
      "Review workflows being designed for partner alignment and connectivity requests.",
  },
  {
    title: "Compliance readiness",
    description:
      "Compliance-aware operating practices being built into the platform foundation.",
  },
  {
    title: "Scoped platform access",
    description:
      "Access patterns designed around clearly defined, review-approved capabilities.",
  },
  {
    title: "Treasury oversight",
    description:
      "Operational controls being prepared to support responsible treasury collaboration.",
  },
  {
    title: "Audit-ready records",
    description:
      "Record-keeping foundations designed to support partner and operational review.",
  },
  {
    title: "Risk and fraud monitoring",
    description:
      "Monitoring foundations being prepared to help protect partners and platform users.",
  },
  {
    title: "Developer access governance",
    description:
      "Governed developer pathways designed to complement partner integration planning.",
  },
  {
    title: "Responsible expansion planning",
    description:
      "Phased growth approach designed to support controlled partner and platform expansion.",
  },
] as const;

export function PartnershipGovernance() {
  return (
    <HomeSection
      className="border-t border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="partnership-governance-heading"
    >
      <SectionHeader
        id="partnership-governance-heading"
        title="Partnerships with governance at the center."
        description="Tropicash is being designed with review workflows, scoped access, audit-ready records, treasury oversight, and security controls to support responsible partner collaboration."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {governanceItems.map((item) => (
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
