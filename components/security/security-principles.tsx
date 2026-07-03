import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { SecurityIconTile } from "./security-icons";

const principles = [
  {
    title: "Protect account access",
    description:
      "Account protection foundations are designed to help safeguard users, sessions, and platform activity.",
  },
  {
    title: "Govern sensitive actions",
    description:
      "Important workflows such as withdrawals, app access, and partner connectivity are designed to move through controlled review paths.",
  },
  {
    title: "Keep records audit-ready",
    description:
      "Transaction and operational records are being structured to support review, reconciliation, and responsible oversight.",
  },
  {
    title: "Grow in phases",
    description:
      "Tropicash is being developed through controlled phases before broader production and partner expansion.",
  },
] as const;

export function SecurityPrinciples() {
  return (
    <HomeSection
      className="border-y border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="security-principles-heading"
    >
      <SectionHeader
        id="security-principles-heading"
        title="Security is built into the platform foundation."
        description="Tropicash is being designed around layered controls, careful access, review workflows, and audit-ready records so the platform can grow responsibly."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {principles.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <SecurityIconTile />
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
