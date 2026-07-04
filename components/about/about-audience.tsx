import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { AboutIconTile } from "./about-icons";

const audiences = [
  {
    title: "People",
    description:
      "Send money, receive money, fund wallets, and manage balances.",
  },
  {
    title: "Businesses",
    description:
      "Prepare for customer payment acceptance and transaction visibility.",
  },
  {
    title: "Developers",
    description:
      "Build toward wallet, payment, app authorization, and event-driven integrations.",
  },
  {
    title: "Partners",
    description:
      "Explore governed pathways for trusted payment connectivity.",
  },
] as const;

export function AboutAudience() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="about-audience-heading"
    >
      <SectionHeader
        id="about-audience-heading"
        title="Built for the people who move Caribbean commerce."
        description="Tropicash is being designed for everyday wallet users, business operators, developers, and trusted financial partners across the region."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <AboutIconTile />
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
