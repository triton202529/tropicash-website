import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { AboutIconTile } from "./about-icons";

const reasons = [
  {
    title: "Everyday sending and receiving",
    description:
      "A wallet-first foundation designed to support everyday money movement across the Caribbean.",
  },
  {
    title: "Less dependence on fragmented payment options",
    description:
      "One platform direction that connects people, businesses, developers, and partners more clearly.",
  },
  {
    title: "Better business payment access",
    description:
      "Merchant payment tools being prepared so businesses can move toward clearer customer payment acceptance.",
  },
  {
    title: "Developer-ready financial tools",
    description:
      "Sandbox-first developer foundations for wallet, payment, and event-driven integrations.",
  },
  {
    title: "Responsible regional connectivity",
    description:
      "Partner pathways being prepared with governance, review, and readiness at the center.",
  },
  {
    title: "Clearer transaction history and oversight",
    description:
      "Wallet and payment infrastructure designed to support clearer balances, records, and oversight foundations.",
  },
] as const;

export function AboutWhyItMatters() {
  return (
    <HomeSection
      className="bg-gradient-to-b from-atlantic-50 to-surface-light-soft py-16 md:py-24"
      aria-labelledby="about-why-heading"
    >
      <SectionHeader
        id="about-why-heading"
        title="Caribbean money movement should be simpler."
        description="Tropicash is being built to reduce friction for everyday users, business operators, developers, and trusted partners across the region."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <AboutIconTile variant="green" />
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
