import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { CompanyIconTile } from "./company-icons";

const missionCards = [
  {
    title: "Help people send and receive money",
    description:
      "Support wallet-based experiences for sending, receiving, funding, and managing everyday money.",
  },
  {
    title: "Help businesses accept payments",
    description:
      "Prepare merchant tools for customer payments and digital commerce.",
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
        title="Our mission is to make sending and receiving money easier across the Caribbean."
        description="Tropicash is being developed to help people move money digitally, help businesses accept payments, and help developers and trusted partners connect to a more modern Caribbean payment ecosystem."
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
