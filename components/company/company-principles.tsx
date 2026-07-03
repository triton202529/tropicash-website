import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { CompanyIconTile } from "./company-icons";

const principles = [
  {
    title: "Caribbean-first design",
    description:
      "Platform decisions shaped by Caribbean users, merchants, developers, and financial partners.",
  },
  {
    title: "Security from the foundation",
    description:
      "Account protection, governance, and review workflows built into the platform from the start.",
  },
  {
    title: "Responsible growth",
    description:
      "Controlled phases of development before broader production and partner expansion.",
  },
  {
    title: "Partner-ready governance",
    description:
      "Review workflows and scoped access designed to support trusted collaboration.",
  },
  {
    title: "Developer-friendly infrastructure",
    description:
      "Sandbox-first foundations for teams building wallet and payment experiences.",
  },
  {
    title: "Business-focused payment tools",
    description:
      "Merchant and operational foundations designed to support Caribbean commerce.",
  },
] as const;

export function CompanyPrinciples() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="company-principles-heading"
    >
      <SectionHeader
        id="company-principles-heading"
        title="The principles guiding Tropicash."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <CompanyIconTile />
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
