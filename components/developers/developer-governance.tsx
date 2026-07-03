import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeSection, SectionHeader } from "@/components/home/section";

const governanceItems = [
  {
    title: "Scoped capabilities",
    description:
      "Integration access designed around clearly defined, review-approved capability scopes.",
  },
  {
    title: "App review workflows",
    description:
      "Structured review processes for application registration and requested permissions.",
  },
  {
    title: "Audit-ready integration records",
    description:
      "Logging foundations designed to support integration audit and oversight needs.",
  },
  {
    title: "Secure authorization patterns",
    description:
      "Authorization models being designed for controlled third-party application access.",
  },
  {
    title: "Sandbox-first testing",
    description:
      "Controlled environments designed for safe integration development and validation.",
  },
  {
    title: "Production access controls",
    description:
      "Governed production pathways planned with review, alignment, and readiness checks.",
  },
] as const;

export function DeveloperGovernance() {
  return (
    <HomeSection
      className="border-t border-surface-light-border bg-surface-light py-16 md:py-24"
      aria-labelledby="developer-governance-heading"
    >
      <SectionHeader
        id="developer-governance-heading"
        title="Developer access with governance built in."
        description="Tropicash developer access is being designed with review workflows, scoped capabilities, audit records, and security controls to support responsible platform growth."
        align="center"
        className="mx-auto"
        light
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {governanceItems.map((item) => (
          <Card key={item.title} variant="light">
            <CardHeader>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-atlantic-50 text-atlantic-700"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
