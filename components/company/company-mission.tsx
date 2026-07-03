import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { CompanyIconTile } from "./company-icons";

const missionCards = [
  {
    title: "Help people move money digitally",
    description:
      "Support wallet-based experiences for sending, receiving, funding, and managing money.",
  },
  {
    title: "Help businesses accept payments",
    description:
      "Prepare tools that allow merchants and service providers to participate in digital commerce.",
  },
  {
    title: "Help the ecosystem connect",
    description:
      "Build foundations for developers, financial partners, and regional businesses to connect responsibly.",
  },
] as const;

export function CompanyMission() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="company-mission-heading"
    >
      <SectionHeader
        id="company-mission-heading"
        title="Our mission is to make Caribbean digital payments more accessible."
        description="Tropicash is being developed to help people, businesses, developers, and trusted partners participate in a more connected digital payment ecosystem."
        light
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {missionCards.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <CompanyIconTile variant="green" />
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
