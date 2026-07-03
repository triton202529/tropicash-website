import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";
import { CheckIconTile } from "./security-icons";

const controls = [
  {
    title: "Account security controls",
    description:
      "Multi-layer protections being built to help safeguard user accounts and platform access.",
  },
  {
    title: "Session and access protection",
    description:
      "Access patterns designed to support controlled sessions and protected account activity.",
  },
  {
    title: "KYC readiness",
    description:
      "Identity verification workflows being built into the platform foundation.",
  },
  {
    title: "Transaction review records",
    description:
      "Logging foundations designed to support transaction review and oversight.",
  },
  {
    title: "Withdrawal review workflows",
    description:
      "Structured review processes planned for withdrawal and payout requests.",
  },
  {
    title: "Treasury oversight",
    description:
      "Operational visibility being designed to support responsible treasury management.",
  },
  {
    title: "Fraud monitoring foundations",
    description:
      "Monitoring capabilities being prepared to help identify suspicious activity.",
  },
  {
    title: "Risk flagging",
    description:
      "Risk signal foundations designed to support review and escalation workflows.",
  },
  {
    title: "Developer capability review",
    description:
      "Review workflows being built for requested developer integration capabilities.",
  },
  {
    title: "Partner access review",
    description:
      "Controlled review paths planned for financial partner connectivity requests.",
  },
] as const;

export function SecurityControls() {
  return (
    <HomeSection
      className="bg-surface-light-soft py-16 md:py-24"
      aria-labelledby="security-controls-heading"
    >
      <SectionHeader
        id="security-controls-heading"
        title="Controls for a responsible payment platform."
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {controls.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <CheckIconTile />
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
