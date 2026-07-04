import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { AboutIconTile } from "./about-icons";

const platformAreas = [
  {
    title: "Wallet for people",
    description:
      "Digital wallet accounts designed for sending, receiving, funding, balance management, and transaction history.",
  },
  {
    title: "Payment tools for businesses",
    description:
      "Merchant payment foundations being prepared for customer payment acceptance and transaction visibility.",
  },
  {
    title: "Developer foundations",
    description:
      "API foundations, app registration, sandbox readiness, OAuth readiness, and webhook preparation.",
  },
  {
    title: "Governance and security",
    description:
      "Account protection, KYC readiness, treasury review, audit records, and fraud and risk monitoring foundations.",
  },
  {
    title: "Partner-ready infrastructure",
    description:
      "Governed pathways being prepared for trusted financial institutions and regional payment partners.",
  },
] as const;

export function AboutWhatIs() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="about-what-is-heading"
    >
      <SectionHeader
        id="about-what-is-heading"
        title="Tropicash is more than a wallet."
        description="The wallet is the core experience, but Tropicash is also preparing merchant payment tools, developer foundations, treasury oversight, security controls, and partner connectivity across one Caribbean-first platform."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platformAreas.map((item) => (
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
