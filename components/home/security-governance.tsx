import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "./section";

const governanceItems = [
  {
    title: "Account security controls",
    description:
      "Multi-layer account protections designed to safeguard user access and activity.",
  },
  {
    title: "KYC and compliance readiness",
    description:
      "Identity verification workflows and compliance tooling built into the platform foundation.",
  },
  {
    title: "Treasury review workflows",
    description:
      "Structured withdrawal and payout review processes for operational oversight.",
  },
  {
    title: "Audit-ready transaction records",
    description:
      "Comprehensive transaction logging designed to support audit and reconciliation needs.",
  },
  {
    title: "Risk and fraud monitoring",
    description:
      "Monitoring capabilities to help identify and respond to suspicious activity.",
  },
] as const;

export function SecurityGovernance() {
  return (
    <HomeSection
      className="border-t border-border bg-white py-16 md:py-24"
      aria-labelledby="security-heading"
    >
      <SectionHeader
        id="security-heading"
        title="Security and governance from the foundation."
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {governanceItems.map((item, index) => (
          <Card
            key={item.title}
            className={index === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}
          >
            <CardHeader>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-caribbean-50 text-caribbean-700"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
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
