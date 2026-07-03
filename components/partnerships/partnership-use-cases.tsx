import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { PartnerIconTile } from "./partnerships-icons";

const useCases = [
  {
    title: "Merchant payment acceptance",
    description:
      "Foundation for businesses designed to support customer payment acceptance workflows.",
  },
  {
    title: "Wallet funding pathways",
    description:
      "Planned pathways being prepared to support wallet funding experiences.",
  },
  {
    title: "Wallet-to-wallet transfers",
    description:
      "Designed to support person-to-person value movement within the Tropicash ecosystem.",
  },
  {
    title: "Developer app integrations",
    description:
      "Integration foundations for applications connecting to wallet and payment capabilities.",
  },
  {
    title: "Business payment workflows",
    description:
      "Being prepared to support operational payment flows for regional businesses.",
  },
  {
    title: "Event and webhook integrations",
    description:
      "Future-ready event notification foundations for partner and developer workflows.",
  },
  {
    title: "Treasury review support",
    description:
      "Operational collaboration designed to support payout and treasury oversight.",
  },
  {
    title: "Partner payout workflows",
    description:
      "Planned pathway foundations for governed partner payout processes.",
  },
  {
    title: "Regional payment connectivity",
    description:
      "Long-term foundation for Caribbean digital payment network collaboration.",
  },
] as const;

export function PartnershipUseCases() {
  return (
    <HomeSection
      className="bg-gradient-to-b from-atlantic-50 to-surface-light-soft py-16 md:py-24"
      aria-labelledby="partnership-use-cases-heading"
    >
      <SectionHeader
        id="partnership-use-cases-heading"
        title="Use cases Tropicash is preparing to support."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <PartnerIconTile variant="green" />
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
