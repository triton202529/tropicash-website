import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { SecurityIconTile } from "./security-icons";

const riskItems = [
  {
    title: "Suspicious activity review",
    description:
      "Review workflows being designed to help evaluate flagged or unusual activity.",
  },
  {
    title: "Transaction pattern monitoring",
    description:
      "Monitoring foundations planned to support pattern-based risk awareness.",
  },
  {
    title: "Account risk controls",
    description:
      "Account-level controls being built to support protective action and review.",
  },
  {
    title: "Fraud review workflow",
    description:
      "Structured processes being prepared for fraud-related review and escalation.",
  },
  {
    title: "Escalation readiness",
    description:
      "Escalation paths being designed to support timely operational response.",
  },
  {
    title: "Audit record support",
    description:
      "Record-keeping foundations designed to support fraud and risk review trails.",
  },
] as const;

export function SecurityRiskMonitoring() {
  return (
    <HomeSection
      className="bg-gradient-to-b from-atlantic-50 to-surface-light-soft py-16 md:py-24"
      aria-labelledby="security-risk-heading"
    >
      <SectionHeader
        id="security-risk-heading"
        title="Risk and fraud monitoring foundations."
        description="Tropicash is preparing monitoring foundations to help identify suspicious activity, support review workflows, and protect users, businesses, and partners as the platform grows."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {riskItems.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <SecurityIconTile variant="green" />
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
