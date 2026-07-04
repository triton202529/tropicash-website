import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { LegalIconTile } from "./legal-icons";

const policyAreas = [
  {
    title: "Terms of use",
    description:
      "Planned website and product terms. Will require formal review before production access.",
  },
  {
    title: "Privacy policy",
    description:
      "Planned privacy policy for website and future product data handling. Not final legal terms.",
  },
  {
    title: "Developer terms",
    description:
      "Planned developer platform terms for sandbox and future production access pathways.",
  },
  {
    title: "Merchant terms",
    description:
      "Planned merchant and payment acceptance terms. Prepared before broader merchant onboarding.",
  },
  {
    title: "Partner agreements",
    description:
      "Planned partner and connectivity agreements for trusted financial institutions and regional partners.",
  },
  {
    title: "Security and acceptable use",
    description:
      "Planned security, acceptable use, and operational review policies for platform participants.",
  },
  {
    title: "Compliance and review workflows",
    description:
      "Planned compliance, governance, and review workflows to support responsible platform expansion.",
  },
] as const;

export function LegalFuturePolicies() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="legal-future-policies-heading"
    >
      <SectionHeader
        id="legal-future-policies-heading"
        title="Policy areas being prepared."
        description="These future policy areas are part of Tropicash's legal and governance foundation. They are not final legal terms and are not yet publicly available as binding documents."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {policyAreas.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <LegalIconTile variant="green" />
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
