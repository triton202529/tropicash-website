import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { PartnerIconTile } from "./partnerships-icons";

const audiences = [
  {
    title: "Banks and financial institutions",
    description:
      "Partner pathways for regulated institutions exploring modern wallet and payment experiences.",
  },
  {
    title: "Merchants and service providers",
    description:
      "Payment acceptance foundations for businesses serving Caribbean customers.",
  },
  {
    title: "Developers and platforms",
    description:
      "Integration foundations for teams building wallet, payment, authorization, and event-driven experiences.",
  },
  {
    title: "Regional businesses",
    description:
      "Digital payment infrastructure for organizations operating across Caribbean markets.",
  },
  {
    title: "Compliance and operations partners",
    description:
      "Review, oversight, and operational readiness support for responsible platform growth.",
  },
  {
    title: "Ecosystem collaborators",
    description:
      "Long-term collaboration opportunities for organizations aligned with Caribbean digital finance.",
  },
] as const;

export function PartnershipAudience() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="partnership-audience-heading"
    >
      <SectionHeader
        id="partnership-audience-heading"
        title="Built for the partners who move Caribbean commerce."
        description="Tropicash is being designed to support a broader ecosystem of trusted organizations that help move money, serve customers, and build digital financial experiences."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <PartnerIconTile />
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
